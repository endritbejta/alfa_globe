import Button from "../components/Button";
import "./Home.scss";
import AboutUsIntro from "../components/AboutIntro";
import MissionIntro from "../components/MissionIntro";
import Products from "../components/Products";
import Map from "../components/Map";

const Home = () => {
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
      <div className="map">
        <div className="map-title">
          <h1>Visit us on our multiple stations</h1>
        </div>
        <Map />
      </div>
    </div>
  );
};

export default Home;
