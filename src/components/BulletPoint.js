import React from "react";
import "./BulletPoint.scss";

const BulletPoint = ({ text }) => {
  return (
    <div className="bulletPoint">
      <span className="bulletPoint__line"></span>
      <p className="bulletPoint__text">{text}</p>
    </div>
  );
};

export default BulletPoint;
