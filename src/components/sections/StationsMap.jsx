import { useEffect, useRef } from "react";
import L from "leaflet";
import { stations, mapCenter } from "../../data/stations";
import pinIcon from "../../assets/img/alfapinredyellow.png";

/** Leaflet map of all Alfa Globe stations with branded pins. */
const StationsMap = ({ className = "", zoom = 9, focus = null }) => {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef({});

  useEffect(() => {
    const icon = L.icon({
      iconUrl: pinIcon,
      iconSize: [34, 58],
      iconAnchor: [17, 58],
      popupAnchor: [0, -52],
    });

    const map = L.map(containerRef.current, { scrollWheelZoom: false }).setView(
      mapCenter,
      window.innerWidth < 640 ? zoom - 1 : zoom
    );
    mapRef.current = map;

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    }).addTo(map);

    stations.forEach((station) => {
      const marker = L.marker(station.coords, { icon }).addTo(map);
      marker.bindPopup(
        `<strong style="display:block;font-size:14px;">${station.name}</strong>
         <span style="color:#63626b;font-size:12px;">${station.address}</span>`
      );
      markersRef.current[station.name] = marker;
    });

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = {};
    };
  }, [zoom]);

  // Fly to a station when `focus` changes (driven by the station list).
  useEffect(() => {
    if (!focus || !mapRef.current) return;
    const marker = markersRef.current[focus.name];
    mapRef.current.flyTo(focus.coords, 14, { duration: 0.9 });
    if (marker) marker.openPopup();
  }, [focus]);

  return (
    <div
      ref={containerRef}
      className={`z-0 overflow-hidden rounded-2xl border border-night-100 shadow-card ${className}`}
      role="region"
      aria-label="Map of Alfa Globe stations"
    />
  );
};

export default StationsMap;
