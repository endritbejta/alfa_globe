import React from "react";
import "./ProductsButton.scss";

const ProductsButton = ({ to }) => {
  return (
    <div className="products-button">
      <p className="inner-text">Go to</p>
      <div className="icon">
        <i className="fa-solid fa-arrow-right"></i>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default ProductsButton;
