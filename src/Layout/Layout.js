import React, { useState } from "react";
// import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNavBar from "../components/MobileNavBar";
import { Outlet } from "react-router";

const Layout = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="Layout">
      {/* <Header showOptions={showOptions} setShowOptions={setShowOptions} /> */}
      <Outlet />
      <Footer />
      <MobileNavBar showOptions={showOptions} setShowOptions={setShowOptions} />
    </div>
  );
};

export default Layout;
