import React from "react";
import "./MobileNavBar.scss";
import { NavLink } from "react-router-dom";

const MobileNavBar = ({ setShowOptions, showOptions }) => {
  const handleShowNavigation = () => {
    setShowOptions((showOptions) => !showOptions);
    document.body.classList.toggle("hidden");
    document
      .querySelector(".mobile-nav__item--menu")
      .classList.toggle("active");
  };

  const handleNavClicks = () => {
    setShowOptions(false);
    window.scrollTo(0, 0);
    document
      .querySelector(".mobile-nav__item--menu")
      .classList.remove("active");
    document.body.classList.remove("hidden");
  };

  const handleNavigationClicks = (e) => {
    e.target.classList.contains("mobile-nav__item--menu") &&
      handleShowNavigation();
    e.target.classList.contains("navigation_item") && handleNavClicks();
  };

  return (
    <div className="mobile-nav" onClick={(e) => handleNavigationClicks(e)}>
      <NavLink
        to=""
        // onClick={handleNavClicks}
        className="mobile-nav__item navigation_item"
      >
        <i className="fa-solid fa-house"></i>
      </NavLink>
      <NavLink
        to="agriculture"
        // onClick={handleNavClicks}
        className="mobile-nav__item navigation_item"
      >
        <i className="fa-solid fa-tractor"></i>
      </NavLink>
      <NavLink
        to="derivate"
        // onClick={handleNavClicks}
        className="mobile-nav__item navigation_item"
      >
        <i className="fa-solid fa-gas-pump"></i>
      </NavLink>
      <NavLink
        to="construction"
        // onClick={handleNavClicks}
        className="mobile-nav__item navigation_item"
      >
        <i className="fa-regular fa-building"></i>
      </NavLink>
      <div
        // onClick={handleShowNavigation}
        className="mobile-nav__item mobile-nav__item--menu"
      >
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default MobileNavBar;
