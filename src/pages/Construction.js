import React, { useEffect } from "react";
import "./Construction.scss";

const Construction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="construction-page page">
      <h1>Build with us</h1>
      <section className="contruction-intro"></section>
      <section className="contruction-content"></section>
      <section className="contruction-outro"></section>
    </div>
  );
};

export default Construction;
