import Button from "../components/Button";
import "./Home.scss";
import AboutUsIntro from "../components/AboutIntro";
import MissionIntro from "../components/MissionIntro";
import Products from "../components/Products";
import Map from "../components/Map";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home-container">
      <div className="Home">
        <h1>
          We buy,{" "}
          <div style={{ display: "inline-block" }} className="highlight">
            <p>transport</p>
          </div>
          , store and deliver oil all over Kosovo
        </h1>
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
    </div>
  );
};

export default Home;
