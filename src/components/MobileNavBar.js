import React from "react";
import "./MobileNavBar.scss";
import { NavLink } from "react-router-dom";

const MobileNavBar = ({ setShowOptions, showOptions }) => {
  return (
    <div className="mobile-nav">
      <NavLink to="" className="mobile-nav__item">
        <i className="fa-solid fa-house"></i>
      </NavLink>
      <NavLink to="agriculture" className="mobile-nav__item">
        <i className="fa-solid fa-tractor"></i>
      </NavLink>
      <NavLink to="derivate" className="mobile-nav__item">
        <i className="fa-solid fa-gas-pump"></i>
      </NavLink>
      <NavLink to="construction" className="mobile-nav__item">
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
