import React, { useEffect } from "react";
import L from "leaflet";

import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import "./Map.scss";

import icon from "../assets/image/alfapinredyellow.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const Map = () => {
  useEffect(() => {
    const defaultIcon = L.icon({
      iconUrl: icon,
      iconSize: [30, 51],
      shadowAnchor: iconShadow,
    });
    let zoomLevel = 9;

    if (window.innerWidth <= 675) {
      zoomLevel = 8;
    }
    // Create a map instance and specify the center and zoom level
    const map = L.map("map").setView([42.6022, 20.902], zoomLevel);

    // Add a tile layer (you can use different map tile providers)
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    const marker = L.marker([42.6230025, 21.1461527], {
      icon: defaultIcon,
    }).addTo(map);
    marker.bindPopup("Cagllavice");

    const marker2 = L.marker([42.8621, 20.9090033], {
      icon: defaultIcon,
    }).addTo(map);
    marker2.bindPopup("Kçiç");

    const marker3 = L.marker([42.763047, 20.788164], {
      icon: defaultIcon,
    }).addTo(map);
    marker3.bindPopup("Klinë e Poshtme");

    const marker4 = L.marker([42.731945, 20.817045], {
      icon: defaultIcon,
    }).addTo(map);
    marker4.bindPopup("Polac");
  }, []);

  return <div id="map" className="map-container"></div>;
};

export default Map;
