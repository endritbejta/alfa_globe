import { motion } from "framer-motion";
import Eyebrow from "./Eyebrow";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

/**
 * Consistent section heading block: eyebrow label, headline, optional lead
 * paragraph. `align="center"` centers it; `light` inverts for dark sections.
 */
const SectionTitle = ({ eyebrow, title, lead, align = "left", light = false, className = "" }) => (
  <motion.div
    variants={stagger(0.12)}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
  >
    {eyebrow && (
      <motion.div variants={fadeUp}>
        <Eyebrow light={light}>{eyebrow}</Eyebrow>
      </motion.div>
    )}
    <motion.h2
      variants={fadeUp}
      className={`mt-4 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] ${
        light ? "text-white" : "text-night-950"
      }`}
    >
      {title}
    </motion.h2>
    {lead && (
      <motion.p
        variants={fadeUp}
        className={`mt-5 text-base leading-relaxed sm:text-lg ${
          light ? "text-white/60" : "text-night-500"
        }`}
      >
        {lead}
      </motion.p>
    )}
  </motion.div>
);

export default SectionTitle;
