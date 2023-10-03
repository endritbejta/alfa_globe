import { useEffect, useRef } from "react";
import BulletPoint from "./BulletPoint";
import "./MissionIntro.scss";

const MissionIntro = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const elementRefCurrent = elementRef.current;
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "10px", // No margin around the root
      threshold: 0.3, // When 50% of the element is visible
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        elementRef.current.classList.add("visible");
      } else {
      }
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
    <div className="mission-container come-into-view-element" ref={elementRef}>
      <BulletPoint text="Our mission" />
      <div className="mission-content">
        <div className="mission">
          <div className="title">
            We are focused on
            <div className="highlight">
              <p>real-time </p>
            </div>
            trading that creates real, long-term value.
          </div>
          <p className="description">
            Before crude oil, refined petroleum products, natural gas, Naphtha,
            and other valued commodieties can be put to good use, the must be
            brought, sold and transported. That is where we come in
          </p>
        </div>
        <div className="image-container">
          <img
            alt="landscape"
            src="https://static.vecteezy.com/system/resources/previews/021/868/801/large_2x/aerial-top-view-of-oil-tanker-ship-sailing-on-sea-generative-ai-free-photo.JPG"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionIntro;
