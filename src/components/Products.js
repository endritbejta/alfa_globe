import React from "react";
import ProductsCard from "./ProductsCard";
import "./Products.scss";

const Products = () => {
  return (
    <div className="Products">
      <div className="Products__title">Our services</div>
      <p className="Products__description">
        Explore our diverse range of services catering to the dynamic world of
        derivatives, agriculture, construction, and markets. From risk
        management to growth strategies, we've got you covered across these key
        sectors.
      </p>

      <div className="Products__cards">
        <ProductsCard
          title="Derivate"
          description="Experience superior engine performance with our premium oils. As a distinguished petrol company, we provide the key to smooth and enduring rides."
          url={
            "https://images.unsplash.com/photo-1610491462702-42e6ecdabaa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80"
          }
          to="derivate"
        />
        <ProductsCard
          title="Agriculture"
          description="Discover agriculture's forefront with us, the premier fertilizer distributor. Partnering for success, nurturing crops and yields with diverse solutions."
          url={
            "https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          }
          to="agriculture"
        />
        <ProductsCard
          title="Contruction"
          description="Elevate performance and reliability with our premium oils for transmissions, lubrication, and hydraulic systems. Your machinery deserves the best."
          url={
            "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
          }
          to="construction"
        />

        <ProductsCard
          title="Markets"
          description="Indulge in convenience at our cozy petrol station shop. Elevate your refueling with snacks, drinks, and travel must-haves, transforming pit stops into delightful moments."
          url={
            "https://images.unsplash.com/photo-1601599561096-f87c95fff1e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
          }
          to="markets"
        />
      </div>
    </div>
  );
};

export default Products;
