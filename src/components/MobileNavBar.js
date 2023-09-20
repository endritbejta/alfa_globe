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

  // const handleNavigationClicks = (e) => {
  //   console.log(e.target);
  //   if (
  //     e.target.classList.contains("fa-bars") ||
  //     e.target.classList.contains("mobile-nav__item--menu")
  //   ) {
  //     handleShowNavigation();
  //   } else {
  //     handleNavClicks();
  //   }
  // };

  return (
    <div className="mobile-nav">
      <NavLink
        to=""
        onClick={handleNavClicks}
        className="mobile-nav__item navigation_item"
      >
        <i className="fa-solid fa-house"></i>
      </NavLink>
      <NavLink
        to="agriculture"
        onClick={handleNavClicks}
        className="mobile-nav__item navigation_item"
      >
        <i className="fa-solid fa-seedling"></i>
      </NavLink>
      <NavLink
        to="derivate"
        onClick={handleNavClicks}
        className="mobile-nav__item navigation_item"
      >
        <i className="fa-solid fa-gas-pump"></i>
      </NavLink>
      <NavLink
        to="construction"
        onClick={handleNavClicks}
        className="mobile-nav__item navigation_item"
      >
        <i className="fa-regular fa-building"></i>
      </NavLink>
      <div
        onClick={handleShowNavigation}
        className="mobile-nav__item mobile-nav__item--menu"
      >
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default MobileNavBar;
