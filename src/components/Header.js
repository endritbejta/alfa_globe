import "./Header.scss";
import alfalogo from "../assets/image/alfalogoyellow.png";
import { NavLink } from "react-router-dom";
import alfared from "../assets/image/alfalogored.png";
const Header = ({ setShowOptions, showOptions }) => {
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const handleNavigationClick = () => {
    if (window.innerWidth < 676) {
      window.scrollTo(0, 0);
      setShowOptions((showOptions) => !showOptions);
    }
    document.body.classList.remove("hidden");
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
        <img src={alfared} alt="alfaglobe_logo" />
        <ul>
          <NavLink onClick={handleNavigationClick} to="">
            Home
          </NavLink>
          <NavLink onClick={handleNavigationClick} to="about-us">
            About
          </NavLink>
          <NavLink onClick={handleNavigationClick} to="mission">
            Mission
          </NavLink>
          <NavLink onClick={handleNavigationClick} to="agriculture">
            Agriculture
          </NavLink>
          <NavLink onClick={handleNavigationClick} to="construction">
            Construction
          </NavLink>
          <NavLink onClick={handleNavigationClick} to="derivate">
            Derivate
          </NavLink>
          <NavLink onClick={handleNavigationClick} to="locations">
            Location
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
