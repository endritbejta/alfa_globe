import { useEffect } from "react";
import BulletPoint from "../components/BulletPoint";
import "./AboutUs.scss";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-page page">
      <BulletPoint text="About us" />
      <h1>
        Founded by senior traders with significant experience across the oil
        spectrum
      </h1>
      <p>
        We source oil from a variety of counterparties including privately owned
        production companies, public production companies, oil majors and
        national oil companies. We also provide marketing solutions for smaller
        producers with specialist financing.
      </p>
      <div className="img-container">
        <img
          src="https://petromena.com/assets/images/header-about.jpg"
          alt="convoy"
        />
      </div>
      <section className="our-development">
        <h3>Our development is founded on organic growth and expansion.</h3>
        <p>
          We source oil from a variety of counterparties including privately
          owned production companies, public production companies, oil majors
          and national oil companies. We also provide marketing solutions for
          smaller producers with specialist financing.
        </p>
        <div className="article">
          <p>
            We have an unrivalled depth of knowledge in the countries where we
            operate. This, combined with our logistics expertise and experienced
            traders, allows us to meet our clients’ needs with reliable and
            innovative solutions., to balance supply and demand, optimise supply
            chains and service the needs of our customers in Asia and the Mena
            region. Petromena aim is to grow with the same integrity that laid
            its foundation.
          </p>
          <p>
            Central to this, we actively seek to invest in partnerships with
            customers, commodity producers and service providers. Equally, our
            strong physical presence throughout the value chain helps provide
            knowledge and identify the path for our continued growth. Petromena
            is committed to respecting the environment, operating safely, and
            upholding high standards of social responsibility throughout the
            company's worldwide operations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
