import React from "react";
import Map from "../components/Map";
import "./Map.scss";

const MapPage = () => {
  return (
    <div className="map">
      <div className="map-title">
        <h1>Visit us on our multiple stations</h1>
      </div>
      <Map />
    </div>
  );
};

export default MapPage;
