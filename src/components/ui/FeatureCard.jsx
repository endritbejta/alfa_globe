import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";

/** Compact icon + title + text card for "Why choose us" style grids. */
const FeatureCard = ({ feature, light = false }) => {
  const Icon = feature.icon;
  return (
    <motion.div
      variants={fadeUp}
      className={`rounded-2xl border p-6 transition-colors duration-300 ${
        light
          ? "border-white/10 bg-white/5 hover:border-white/25"
          : "border-night-100 bg-white shadow-card hover:border-brand-200"
      }`}
    >
      <div
        className={`grid h-11 w-11 place-items-center rounded-xl ${
          light ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-600"
        }`}
      >
        <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
      </div>
      <h3
        className={`mt-4 text-base font-bold tracking-tight ${
          light ? "text-white" : "text-night-950"
        }`}
      >
        {feature.title}
      </h3>
      <p
        className={`mt-2 text-sm leading-relaxed ${light ? "text-white/60" : "text-night-500"}`}
      >
        {feature.description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
