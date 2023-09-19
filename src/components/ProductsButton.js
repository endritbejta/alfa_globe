import React from "react";
import "./ProductsButton.scss";
import { useNavigate } from "react-router";

const ProductsButton = ({ to }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(to);
    window.scrollTo(0, 0);
  };
  return (
    <div onClick={handleNavigate} className="products-button">
      <p className="inner-text">Go to</p>
      <div className="icon">
        <i className="fa-solid fa-arrow-right"></i>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default ProductsButton;
