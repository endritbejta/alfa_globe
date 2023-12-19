import React, { useEffect } from "react";
import "./Agriculture.scss";
import agriculture1 from "../assets/image/agriculture1.jpg";
import fertilizer1 from "../assets/image/fertilizer1.jpg";
import wheat from "../assets/image/wheat.jpg";
import corn from "../assets/image/corn.avif";
const Agriculture = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="agriculture-page page">
      <section className="agriculture-intro">
        <img src={agriculture1} alt="plowing" />
        <div className="agriculture-content">
          <h1>
            The Backbone of Civilization:{" "}
            <div className="highlight">
              <p>Agriculture</p>
            </div>
          </h1>
          <div className="articles">
            <p>
              Agriculture, humanity's timeless practice, provides food, fiber,
              and essential goods, shaping economies and daily life. It sustains
              us with nourishment and livelihoods, intertwining itself into the
              fabric of civilization, ensuring our past, present, and future.
            </p>
          </div>
        </div>
      </section>
      <section className="agriculture-seeds">
        <h1>Seeds for Sustainable Growth</h1>
        <div className="articles">
          <p>
            Discover our diverse selection of premium seeds, carefully curated
            to nurture sustainable agriculture. From high-yield crop varieties
            to resilient plant breeds, our seeds empower farmers with the
            potential for robust harvests and agricultural prosperity. Explore
            our seed offerings and cultivate a future of growth and
            sustainability.
          </p>
          <p>
            At the heart of our seed offerings is a commitment to quality,
            innovation, and a greener planet. We believe in the power of seeds
            to drive agricultural growth while minimizing environmental impact.
            Whether you're a seasoned farmer or just starting your agricultural
            journey, our seeds are your partners in cultivating a future where
            sustainable practices and abundant harvests go hand in hand. Explore
            our range today and plant the seeds of a brighter tomorrow.
          </p>
        </div>
        <img src={wheat} alt="wheat" />
      </section>
      <section className="agriculture-eco-friendly">
        <h1>Eco-Friendly Formulations</h1>
        <p>
          Eco-Friendly Formulations: Beyond their immediate impact on crop
          growth, our fertilizers are formulated with a keen eye on
          environmental sustainability. We prioritize eco-friendly compositions
          that minimize the ecological footprint. By adopting responsible
          manufacturing practices and reducing the use of harmful chemicals, our
          fertilizers contribute to a more sustainable and resilient
          agricultural ecosystem. This commitment to environmental stewardship
          aligns with our vision of fostering a harmonious coexistence between
          agriculture and nature.
        </p>
      </section>

      <section className="agriculture-innovative">
        <h1>Innovative Agricultural Solutions</h1>
        <p>
          At the heart of our fertilizer offerings lies a commitment to
          innovation. We continuously invest in research and development to
          introduce cutting-edge solutions that address emerging challenges in
          modern agriculture. From precision nutrient delivery systems to
          advanced soil health monitoring, our innovative approaches empower
          farmers with the tools they need to navigate the complexities of
          contemporary farming. Partner with us, and harness the power of
          progressive agricultural solutions that pave the way for a prosperous
          and sustainable future. Explore the diverse world of fertilizers at
          Alfa Globe and witness firsthand how our commitment to excellence,
          sustainability, and innovation can elevate your agricultural
          practices. With a focus on enhancing yield, preserving soil health,
          and championing environmental responsibility, our fertilizers stand as
          a testament to our dedication to the success of farmers and the
          prosperity of agriculture as a whole.
        </p>
        <img src={corn} alt="corn" />
      </section>

      <section className="agriculture-fertilizer">
        <h1>Fertilizer types and benefits</h1>
        <p>
          Explore our range of fertilizers, including nitrogen-based,
          phosphorous-based, and potassium-based varieties, each tailored to
          meet specific agricultural needs. Discover how these fertilizers
          enhance crop yield, maintain nutrient balance, and promote soil
          health, contributing to sustainable and bountiful harvests.
        </p>
        {/* <div className="fertilizer-holder">
          <div className="fertilizer-card">
            <img src={fertilizer1} alt="fertizilier 4" />
            <div className="fertilizer-content">
              <span>UREA</span>
              <p>Best fertilizer ever</p>
            </div>
          </div>
          <div className="fertilizer-card">
            <img src={fertilizer1} alt="fertilizer3" />
            <div className="fertilizer-content">
              <span>UREA</span>
              <p>Best fertilizer ever</p>
            </div>
          </div>
          <div className="fertilizer-card">
            <img src={fertilizer1} alt="fertilizer2" />
            <div className="fertilizer-content">
              <span>UREA</span>
              <p>Best fertilizer ever</p>
            </div>
          </div>
          <div className="fertilizer-card">
            <img src={fertilizer1} alt="fertiilizer 1" />
            <div className="fertilizer-content">
              <span>UREA</span>
              <p>Best fertilizer ever</p>
            </div>
          </div>
        </div> */}
      </section>
      <section className="agriculture-contact">
        <h1>Contact Us for Fertilizers and Seeds </h1>
        <p>
          Interested in our fertilizers and seeds? Feel free to reach out to us
          for more information or to place an order. Our dedicated team is ready
          to assist you in finding the right solutions for your agricultural
          needs. Let's work together towards a prosperous and sustainable future
          for your farm.
        </p>
        <p>Contact us at: info@yourcompany.com</p>
      </section>
    </div>
  );
};

export default Agriculture;
