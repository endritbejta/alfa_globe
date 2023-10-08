import { useEffect } from "react";
import "./Mission.scss";
import logo from "../assets/image/highway2.jpg";

const Mission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pagemission-page page">
      <section className="pagemission-intro">
        <div className="pagemission-content">
          <h1>Mission</h1>
          <p>
            The mission of Alfa Trade is to provide high-quality petroleum
            derivatives, professionalism, and integrity in services while always
            prioritizing the well-being of people and the environment in which
            we operate. We aim to support individuals, continuously invest in
            Kosovo's economy by increasing the number of employees and
            supporting local suppliers. We also strive to support carefully
            selected local initiatives and organizations that contribute to
            building future leaders through education and sports.
          </p>
        </div>
        <img src={logo} alt="alfa trade" />
      </section>
      <section className="pagemission-list">
        <ul>
          <li>
            Prioritizing the well-being of people and the environment in every
            action we take.
          </li>
          <li>
            Motivating our employees to work together andcontinuously improve
            performance.
          </li>
          <li>
            Understanding and meeting the expectations and needs of our
            customers.
          </li>
          <li>Employing effective processes and technologies.</li>
          <li>
            Being good corporate citizens, offering employment opportunities,
            and supporting the community in which we live and operate.
          </li>
          <li>
            Striving to uphold the highest standards of environmental and social
            responsibility.
          </li>
          <li>
            Embracing innovation and sustainable practices in all aspects of our
            business.
          </li>
        </ul>
        <img src={logo} alt="alfa trade" />
      </section>
    </div>
  );
};

export default Mission;
