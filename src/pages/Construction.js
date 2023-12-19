import React, { useEffect } from "react";
import "./Construction.scss";

const Construction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="construction-page page">
      <h1>Build with us</h1>
      <section className="construction-history">
        <div className="constuction-history-holder">
          <h3 className="construction-history-title">Our history</h3>
          <p className="construction-history-description">
            Five years ago, our journey in the world of real estate and
            construction began, fueled by a passion for building remarkable
            spaces and helping individuals and families find their dream homes.
            Since our inception, we've dedicated ourselves to providing
            exceptional services in the realm of real estate, and our commitment
            to excellence has been the cornerstone of our success.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="construction"
        />
      </section>
      <section className="contruction-vision">
        <h3 className="construction-visoon-title">Vision takes place</h3>
        <p className="construction-visoon-description">
          Five years ago, our journey in the world of real estate and
          construction began, fueled by a passion for building remarkable spaces
          and helping individuals and families find their dream homes. Since our
          inception, we've dedicated ourselves to providing exceptional services
          in the realm of real estate, and our commitment to excellence has been
          the cornerstone of our success.
        </p>
      </section>
      <section className="contruction-outro">
        <h3 className="construction-building-title">Building on success</h3>
        <p className="construction-building-description">
          Five years ago, our journey in the world of real estate and
          construction began, fueled by a passion for building remarkable spaces
          and helping individuals and families find their dream homes. Since our
          inception, we've dedicated ourselves to providing exceptional services
          in the realm of real estate, and our commitment to excellence has been
          the cornerstone of our success.
        </p>
      </section>
    </div>
  );
};

export default Construction;
