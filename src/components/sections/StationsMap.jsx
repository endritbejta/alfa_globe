import { useEffect, useRef } from "react";
import L from "leaflet";
import { stations, mapCenter } from "../../data/stations";
import pinLogo from "../../assets/img/alfalogoyellow.png";

/** Leaflet map of all Alfa Trade stations with branded pins. */
const StationsMap = ({ className = "", zoom = 9, focus = null }) => {
  const containerRef = useRef(null);
  const loadingRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef({});

  useEffect(() => {
    const showLoading = () => {
      loadingRef.current?.classList.add("is-visible");
      loadingRef.current?.setAttribute("aria-hidden", "false");
    };
    const hideLoading = () => {
      loadingRef.current?.classList.remove("is-visible");
      loadingRef.current?.setAttribute("aria-hidden", "true");
    };

    const icon = L.divIcon({
      className: "alfa-map-marker",
      html: `
        <span class="alfa-map-marker__shadow"></span>
        <span class="alfa-map-marker__pin">
          <img src="${pinLogo}" alt="" draggable="false" />
        </span>
      `,
      iconSize: [50, 56],
      iconAnchor: [25, 52],
      popupAnchor: [0, -48],
    });

    const map = L.map(containerRef.current, { scrollWheelZoom: false }).setView(
      mapCenter,
      window.innerWidth < 640 ? zoom - 1 : zoom
    );
    mapRef.current = map;

    const tileLayer = L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      keepBuffer: 4,
      updateWhenZooming: false,
    });
    tileLayer.on("loading", showLoading);
    tileLayer.on("load", hideLoading);
    tileLayer.addTo(map);

    stations.forEach((station) => {
      const marker = L.marker(station.coords, {
        icon,
        title: `${station.name} station`,
        alt: `${station.name} station`,
      }).addTo(map);
      marker.bindPopup(
        `<strong style="display:block;font-size:14px;">${station.name}</strong>
         <span style="color:#63626b;font-size:12px;">${station.address}</span>`
      );
      markersRef.current[station.name] = marker;
    });

    return () => {
      tileLayer.off("loading", showLoading);
      tileLayer.off("load", hideLoading);
      map.remove();
      mapRef.current = null;
      markersRef.current = {};
    };
  }, [zoom]);

  // Fly to a station when `focus` changes (driven by the station list).
  useEffect(() => {
    if (!focus || !mapRef.current) return;
    const marker = markersRef.current[focus.name];
    loadingRef.current?.classList.add("is-visible");
    loadingRef.current?.setAttribute("aria-hidden", "false");
    // Switch directly to the final zoom so Leaflet requests one complete tile set.
    mapRef.current.setView(focus.coords, 14, { animate: false });
    if (marker) {
      marker.openPopup();
      const markerElement = marker.getElement();
      markerElement?.classList.remove("is-focused");
      // Restart the focus animation when the same station is selected again.
      void markerElement?.offsetWidth;
      markerElement?.classList.add("is-focused");
    }
  }, [focus]);

  return (
    <div
      className={`relative z-0 overflow-hidden rounded-2xl border border-night-100 bg-night-50 shadow-card ${className}`}
      role="region"
      aria-label="Map of Alfa Trade stations"
    >
      <div ref={containerRef} className="absolute inset-0" />
      <div
        ref={loadingRef}
        className="alfa-map-loading is-visible"
        role="status"
        aria-live="polite"
        aria-hidden="false"
      >
        <span className="alfa-map-loading__spinner" aria-hidden="true" />
        <span>Loading map…</span>
      </div>
    </div>
  );
};

export default StationsMap;
