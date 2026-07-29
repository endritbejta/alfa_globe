import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";
import highway from "../../assets/img/highway.jpg";
import gasNozzle from "../../assets/img/gasolinenozzle.jpg";

const commitments = [
  "Certified products sourced through established regional terminals",
  "Four retail stations plus direct bulk delivery",
  "Fleet cards, consolidated invoicing and usage reporting",
  "Dedicated supply for transport, industry, construction and farms",
];

const Overview = () => (
  <section className="container-x py-20 sm:py-28">
    <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
      {/* Image composition */}
      <Reveal className="relative order-2 lg:order-1">
        <div className="overflow-hidden rounded-2xl shadow-card-hover">
          <img
            src={highway}
            alt="Fuel transport on the highway"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div className="absolute -bottom-8 -right-4 hidden w-52 overflow-hidden rounded-2xl border-4 border-white shadow-card-hover sm:block lg:-right-8">
          <img src={gasNozzle} alt="Refuelling at an Alfa Trade station" loading="lazy" className="aspect-square w-full object-cover" />
        </div>
        <div className="absolute -top-6 -left-4 rounded-2xl bg-brand-600 px-6 py-4 text-white shadow-card-hover lg:-left-8">
          <p className="text-3xl font-extrabold tracking-tight">12+</p>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
            Years in fuel distribution
          </p>
        </div>
      </Reveal>

      {/* Copy */}
      <div className="order-1 lg:order-2">
        <SectionTitle
          eyebrow="From terminal to tank"
          title="One supplier for the fuel your operation depends on"
          lead="Alfa Trade has distributed petroleum products since 2014. We combine station access, scheduled tanker delivery and fleet controls so customers can buy fuel in the way that fits their operation—not ours."
        />
        <motion.ul
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 space-y-3.5"
        >
          {commitments.map((item) => (
            <motion.li key={item} variants={fadeUp} className="flex items-start gap-3 text-night-700">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                <Check size={14} strokeWidth={2.5} aria-hidden="true" />
              </span>
              {item}
            </motion.li>
          ))}
        </motion.ul>
        <Reveal delay={0.15} className="mt-9">
          <Button to="/about" withArrow variant="dark" size="lg">
            How we work
          </Button>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Overview;
