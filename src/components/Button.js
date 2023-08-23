import "./Button.scss";
import { Link } from "react-router-dom";

const Button = ({ link, description }) => {
  return (
    <a href={`/${link}`} className="button">
      <p>{description}</p>
      <span>
        <i className="fa-solid fa-arrow-right"></i>
      </span>
    </a>
  );
};

export default Button;
