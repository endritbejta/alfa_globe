import React from "react";
import "./MobileNavBar.scss";

const MobileNavBar = ({ setShowOptions, showOptions }) => {
  return (
    <div className="mobile-nav">
      <a href="#home" className="mobile-nav__item">
        <i className="fa-solid fa-house"></i>
      </a>
      <a href="#about" className="mobile-nav__item">
        <i className="fa-solid fa-tractor"></i>
      </a>
      <a href="#about" className="mobile-nav__item">
        <i className="fa-solid fa-gas-pump"></i>
      </a>
      <a href="#contact" className="mobile-nav__item">
        <i className="fa-regular fa-building"></i>
      </a>
      <div
        onClick={() => setShowOptions(!showOptions)}
        className="mobile-nav__item mobile-nav__item--menu"
      >
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default MobileNavBar;
