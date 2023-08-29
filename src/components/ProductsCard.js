import React from "react";
import ProductsButton from "./ProductsButton";
import "./ProductsCard.scss";

const ProductsCard = ({ title, description, url }) => {
  return (
    <div className="products-card">
      <div
        style={{ background: `url(${url}) center no-repeat` }}
        className="card-image"
      ></div>
      <div className="tint"></div>
      <div className="content">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <ProductsButton to="derivate" />
      </div>
    </div>
  );
};

export default ProductsCard;
