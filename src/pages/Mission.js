import { useEffect } from "react";
import BulletPoint from "../components/BulletPoint";
import "./Mission.scss";

const Mission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pagemission-page page">
      <BulletPoint text="Mission" />
    </div>
  );
};

export default Mission;
