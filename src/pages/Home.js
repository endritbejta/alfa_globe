import Button from "../components/Button";
import "./Home.scss";
import AboutUsIntro from "../components/AboutIntro";
import MissionIntro from "../components/MissionIntro";
import Products from "../components/Products";
import Map from "../components/Map";
import { useEffect, useRef } from "react";

const Home = () => {
  const elementRef1 = useRef(null);
  const elementRef2 = useRef(null);

  useEffect(() => {
    const elementRefCurrent2 = elementRef1.current;
    const elementRefCurrent1 = elementRef2.current;
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "10px", // No margin around the root
      threshold: 0.2, // When 50% of the element is visible
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        elementRefCurrent1.classList.add("visible");
        elementRefCurrent2.classList.add("visible");
      } else {
      }
    }, options);

    if (elementRef1.current) {
      observer.observe(elementRef1.current);
    }

    if (elementRef2.current) {
      observer.observe(elementRef2.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (elementRefCurrent1) {
        observer.unobserve(elementRefCurrent1);
      }
      if (elementRefCurrent2) {
        observer.unobserve(elementRefCurrent2);
      }
    };
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
