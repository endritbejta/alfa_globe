import "./AboutIntro.scss";
import highway2 from "../assets/image/highway2.jpg";
import Button from "./Button";

const AboutUsIntro = () => {
  return (
    <div className="about-us-container">
      <div className="about">
        <p className="title">
          Our business model relies on being able to deliver oil and petroleum
          products consistently, safely, and responsibly.
        </p>
        <p className="description">
          If we were to supply off-specification products we might suffer
          financial penalties or find them rejected by cosutumers
        </p>
        <Button description="See more" link="mission" />
      </div>
      <div className="image-container">
        <img src={highway2} />
      </div>
    </div>
  );
};

export default AboutUsIntro;
