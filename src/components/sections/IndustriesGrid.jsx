import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { industries, industriesIntro } from "../../data/industries";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

const IndustriesGrid = () => (
  <section className="relative overflow-hidden bg-night-950 py-20 sm:py-28">
    <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
    <div className="container-x relative">
      <SectionTitle {...industriesIntro} align="center" light />
      <motion.div
        variants={stagger(0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <motion.div
              key={industry.title}
              variants={fadeUp}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-[border-color,background-color] duration-200 hover:border-brand-600/60 hover:bg-white/[0.08]"
            >
              <Icon
                size={26}
                strokeWidth={1.6}
                className="text-brand-500 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-bold tracking-tight text-white">{industry.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{industry.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default IndustriesGrid;
