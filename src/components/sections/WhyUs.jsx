import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import FeatureCard from "../ui/FeatureCard";
import { features, featuresIntro } from "../../data/features";
import { stagger, viewportOnce } from "../../lib/motion";

const WhyUs = () => (
  <section className="container-x py-20 sm:py-28">
    <SectionTitle {...featuresIntro} align="center" />
    <motion.div
      variants={stagger(0.06)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
    >
      {features.map((feature) => (
        <FeatureCard key={feature.title} feature={feature} />
      ))}
    </motion.div>
  </section>
);

export default WhyUs;
