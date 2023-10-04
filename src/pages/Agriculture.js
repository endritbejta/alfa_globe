import React from "react";
import "./Agriculture.scss";
import agriculture1 from "../assets/image/agriculture1.jpg";
import fertilizer1 from "../assets/image/fertilizer1.jpg";

const Agriculture = () => {
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
        <div className="fertilizer-holder">
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
        </div>
      </section>
    </div>
  );
};

export default Agriculture;
