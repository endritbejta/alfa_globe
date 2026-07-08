import StatCard from "../ui/StatCard";
import Reveal from "../ui/Reveal";
import { stats } from "../../data/stats";

/** Dark band of animated counters. */
const StatsBand = () => (
  <section className="relative overflow-hidden bg-night-900 py-16 sm:py-20">
    <div
      className="absolute inset-0 bg-gradient-to-br from-night-950 via-night-900 to-brand-950/60"
      aria-hidden="true"
    />
    <div className="container-x relative">
      <Reveal>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} light />
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default StatsBand;
