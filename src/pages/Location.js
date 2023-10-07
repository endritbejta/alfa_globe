import React, { useEffect } from "react";
import "./Location.scss";

const Location = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>Location</div>;
};

export default Location;
