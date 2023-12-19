import { useEffect } from "react";
import "./Mission.scss";
import logo from "../assets/image/highway2.jpg";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const Mission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pagemission page">
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
      </section>
      <img src={logo} alt="alfa trade" />
      <img src={logo} alt="alfa trade" />
      <section className="pagemission-target">
        <div className="pagemission-list">
          <h3>Targets</h3>
          <ul>
            <li>
              <p>
                Prioritizing the well-being of people and the environment in
                every action we take.
              </p>
            </li>
            <li>
              <p>
                Motivating our employees to work together andcontinuously
                improve performance.
              </p>
            </li>
            <li>
              <p>
                Understanding and meeting the expectations and needs of our
                customers.
              </p>
            </li>
            <li>
              <p>Employing effective processes and technologies.</p>
            </li>
            <li>
              <p>
                Being good corporate citizens, offering employment
                opportunities, and supporting the community in which we live and
                operate.
              </p>
            </li>
            <li>
              <p>
                Striving to uphold the highest standards of environmental and
                social responsibility.
              </p>
            </li>
            <li>
              <p>
                Embracing innovation and sustainable practices in all aspects of
                our business.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Mission;
