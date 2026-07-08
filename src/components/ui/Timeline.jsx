import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

/** Vertical milestones timeline with year markers. */
const Timeline = ({ items }) => (
  <motion.ol
    variants={stagger(0.15)}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    className="relative ml-3 space-y-10 border-l-2 border-night-100 pl-8 sm:ml-6"
  >
    {items.map((item) => (
      <motion.li key={item.year} variants={fadeUp} className="relative">
        <span
          className="absolute -left-[41px] top-1 grid h-4 w-4 place-items-center rounded-full border-2 border-brand-600 bg-white"
          aria-hidden="true"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
        </span>
        <p className="text-sm font-extrabold uppercase tracking-widest text-brand-600">
          {item.year}
        </p>
        <h3 className="mt-1.5 text-lg font-bold tracking-tight text-night-950">{item.title}</h3>
        <p className="mt-2 max-w-xl leading-relaxed text-night-500">{item.description}</p>
      </motion.li>
    ))}
  </motion.ol>
);

export default Timeline;
