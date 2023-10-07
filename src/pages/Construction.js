import React, { useEffect } from "react";
import "./Construction.scss";

const Construction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="construction-page page">Construction</div>;
};

export default Construction;
