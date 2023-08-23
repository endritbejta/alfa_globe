import "./MissionIntro.scss";

const MissionIntro = () => {
  return (
    <div className="mission-container">
      <div className="mission">
        <p className="title">
          We are focused on real-time trading that creates real, long-term
          value.
        </p>
        <p className="description">
          Before crude oil, refined petroleum products, natural gas, Naphtha,
          and other valued commodieties can be put to good use, the must be
          brought, sold and transported. That is where we come in
        </p>
      </div>
      <div className="image-container">
        <img src="https://static.vecteezy.com/system/resources/previews/021/868/801/large_2x/aerial-top-view-of-oil-tanker-ship-sailing-on-sea-generative-ai-free-photo.JPG" />
      </div>
    </div>
  );
};

export default MissionIntro;
