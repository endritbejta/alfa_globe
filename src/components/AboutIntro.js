import "./AboutIntro.scss";
import highway2 from "../assets/image/highway2.jpg";
import Button from "./Button";
import BulletPoint from "./BulletPoint";
import { useEffect, useRef } from "react";

const AboutUsIntro = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const elementRefCurrent = elementRef.current;
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "100px", // No margin around the root
      threshold: 0.6, // When 50% of the element is visible
    };

    const observer = new IntersectionObserver(([entry]) => {
      elementRef.current.classList.add("visible");
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    // Cleanup the observer when the component unmounts
    return () => {
      if (elementRefCurrent) {
        observer.unobserve(elementRefCurrent);
      }
    };
  }, []);
  return (
    <div className="about-us-container come-into-view-element" ref={elementRef}>
      <BulletPoint text="About us" />
      <div className={`about-us-content `}>
        <div className="about" style={{ transitionDelay: "0" }}>
          <p className="title" style={{ transitionDelay: "0.2" }}>
            Our business model relies on being able to deliver oil and petroleum
            products consistently, safely, and responsibly.
          </p>
          <p className="description" style={{ transitionDelay: "0.4s" }}>
            If we were to supply off-specification products we might suffer
            financial penalties or find them rejected by cosutumers
          </p>
          <Button description="See more" link="mission" />
        </div>
        <div className="image-container" style={{ transitionDelay: "0.6s" }}>
          <img src={highway2} alt="highway" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsIntro;
