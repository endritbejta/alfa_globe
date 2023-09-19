import React from "react";
import "./MobileNavBar.scss";
import { NavLink } from "react-router-dom";

const MobileNavBar = ({ setShowOptions, showOptions }) => {
  return (
    <div className="mobile-nav">
      <NavLink href="#home" className="mobile-nav__item">
        <i className="fa-solid fa-house"></i>
      </NavLink>
      <NavLink href="#about" className="mobile-nav__item">
        <i className="fa-solid fa-tractor"></i>
      </NavLink>
      <NavLink href="#about" className="mobile-nav__item">
        <i className="fa-solid fa-gas-pump"></i>
      </NavLink>
      <NavLink href="#contact" className="mobile-nav__item">
        <i className="fa-regular fa-building"></i>
      </NavLink>
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
