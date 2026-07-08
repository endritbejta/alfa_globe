import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/motion";

/** Wraps children in a subtle fade-up reveal when scrolled into view. */
const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    variants={{
      hidden: fadeUp.hidden,
      visible: {
        ...fadeUp.visible,
        transition: { ...fadeUp.visible.transition, delay },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export default Reveal;
