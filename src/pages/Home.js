import Button from "../components/Button";
import "./Home.scss";
import { useState, useEffect } from "react";
import AboutUsIntro from "../components/AboutIntro";
import MissionIntro from "../components/MissionIntro";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <div className="Home">
        <h1>We buy, transport, store and deliver oil all over Kosovo</h1>
        <p className="description">
          We source oil from a variety of counterparties including privately
          owned production companies, public, production companies, oil majors
          and national oil companies.
        </p>
        <Button description="Learn more" link="about" />
      </div>
      <AboutUsIntro />
      <MissionIntro />
      <Products />
    </>
  );
};

export default Home;
