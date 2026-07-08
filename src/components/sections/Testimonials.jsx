import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import TestimonialCard from "../ui/TestimonialCard";
import { testimonials } from "../../data/testimonials";
import { stagger, viewportOnce } from "../../lib/motion";

const Testimonials = () => (
  <section className="bg-night-50 py-20 sm:py-28">
    <div className="container-x">
      <SectionTitle
        eyebrow="What clients say"
        title="Judged by the people who depend on us"
        lead="Transport managers, site foremen and farmers — the customers who feel it first when a supplier fails."
        align="center"
      />
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid gap-6 lg:grid-cols-3"
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default Testimonials;
