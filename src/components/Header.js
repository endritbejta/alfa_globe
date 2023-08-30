import "./Header.scss";
import alfalogo from "../assets/image/alfalogored.png";
import { useState } from "react";
const Header = ({ setShowOptions, showOptions }) => {
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <header className="header">
      <div className="company">
        <div className="logo">
          <img src={alfalogo} alt="alfa globe logo" />
        </div>
        <h1 className="name">ALFA GLOBE</h1>
      </div>
      <div onClick={handleClick} className="hamburger">
        <i className="fa-solid fa-bars-staggered"></i>
      </div>
      <nav className={showOptions ? "open" : ""}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#mission">Mission</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#location">Location</a>
          </li>
          <li>
            <a href="#career">Career</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
