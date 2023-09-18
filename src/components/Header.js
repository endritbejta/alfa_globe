import "./Header.scss";
import alfalogo from "../assets/image/alfalogoyellow.png";
import { NavLink } from "react-router-dom";
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
        <p className="name">ALFA GLOBE</p>
      </div>
      <div onClick={handleClick} className="hamburger">
        <i className="fa-solid fa-bars-staggered"></i>
      </div>
      <nav className={showOptions ? "open" : ""}>
        <ul>
          <li>
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            <NavLink to="about-us">About us</NavLink>
          </li>
          <li>
            <NavLink to="mission">Mission</NavLink>
          </li>
          <li>
            <NavLink to="agriculture">Agriculture</NavLink>
          </li>
          <li>
            <NavLink to="construction">Construction</NavLink>
          </li>
          <li>
            <NavLink to="">Career</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
