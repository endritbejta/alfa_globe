import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { fadeUp } from "../../lib/motion";

const TestimonialCard = ({ testimonial }) => (
  <motion.figure
    variants={fadeUp}
    className="flex h-full flex-col rounded-2xl border border-night-100 bg-white p-7 shadow-card"
  >
    <Quote size={26} className="text-brand-600" aria-hidden="true" />
    <blockquote className="mt-4 flex-1 leading-relaxed text-night-700">
      “{testimonial.quote}”
    </blockquote>
    <figcaption className="mt-6 flex items-center gap-3.5 border-t border-night-100 pt-5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-night-950 text-sm font-bold text-white">
        {testimonial.initials}
      </span>
      <div>
        <p className="text-sm font-bold text-night-950">{testimonial.name}</p>
        <p className="text-xs text-night-500">{testimonial.role}</p>
      </div>
    </figcaption>
  </motion.figure>
);

export default TestimonialCard;
