import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../ui/ServiceCard";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { services, servicesIntro } from "../../data/services";
import { stagger, viewportOnce } from "../../lib/motion";

/** Home page teaser: the six most important services + link to the full page. */
const ServicesGrid = () => (
  <section className="bg-night-50 py-20 sm:py-28">
    <div className="container-x">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionTitle {...servicesIntro} />
        <Reveal delay={0.2}>
          <Button to="/services" variant="outline" withArrow>
            All services
          </Button>
        </Reveal>
      </div>
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.slice(0, 6).map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesGrid;
