import React from "react";
import "./Card.scss";
import nozzle from "../assets/image/gasolinenozzle.jpg";
const Card = ({ name, description }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
      <button>Learn more</button>
      <img src={nozzle} />
    </div>
  );
};

export default Card;
