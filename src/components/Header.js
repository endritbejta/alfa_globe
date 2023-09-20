import "./Header.scss";
import alfalogo from "../assets/image/alfalogoyellow.png";
import { NavLink } from "react-router-dom";
const Header = ({ setShowOptions, showOptions }) => {
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const handleNavigationClick = () => {
    if (window.innerWidth < 676) {
      window.scrollTo(0, 0);
      setShowOptions((showOptions) => !showOptions);
    }
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
        <ul onClick={handleNavigationClick}>
          <li>
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            <NavLink to="about-us">About</NavLink>
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
            <NavLink to="derivate">Derivate</NavLink>
          </li>
          <li>
            <NavLink to="markets">Markets</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
