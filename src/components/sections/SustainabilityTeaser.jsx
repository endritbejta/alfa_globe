import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { pillars, commitments } from "../../data/sustainability";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";
import highway2 from "../../assets/img/highway2.jpg";

/** Full sustainability section on the home page (no separate page). */
const SustainabilityTeaser = () => (
  <section id="sustainability" className="container-x scroll-mt-24 py-20 sm:py-28">
    <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <div>
        <SectionTitle
          eyebrow="Sustainability"
          title="Moving energy responsibly, today and tomorrow"
          lead="An energy company's environmental duty starts with how it operates. We invest in cleaner fuels, efficient logistics and spill-proof handling — and we hold ourselves to targets we publish."
        />
        <motion.ul
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 grid gap-4 sm:grid-cols-2"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.li key={pillar.title} variants={fadeUp} className="flex gap-3.5">
                <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-night-950">{pillar.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-night-500">{pillar.description}</p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
        <Reveal delay={0.15} className="mt-9">
          <Button to="/contact" withArrow variant="dark" size="lg">
            Ask about our practices
          </Button>
        </Reveal>
      </div>

      <Reveal className="relative">
        <div className="overflow-hidden rounded-2xl shadow-card-hover">
          <img
            src={highway2}
            alt="Modern highway — efficient transport routes"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div className="absolute -bottom-7 left-6 flex items-center gap-4 rounded-2xl bg-night-950 px-6 py-5 text-white shadow-card-hover">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-600">
            <Leaf size={20} aria-hidden="true" />
          </span>
          <div>
            <p className="text-xl font-extrabold tracking-tight">−15% by 2030</p>
            <p className="text-xs text-white/60">fleet fuel-intensity target</p>
          </div>
        </div>
      </Reveal>
    </div>

    {/* Published commitment targets */}
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
    >
      {commitments.map((c) => (
        <motion.div
          key={c.label}
          variants={fadeUp}
          className="rounded-2xl border border-night-100 bg-white p-7 text-center shadow-card"
        >
          <p className="text-4xl font-extrabold tracking-tight text-brand-600">{c.value}</p>
          <p className="mt-2 font-bold tracking-tight text-night-950">{c.label}</p>
          <p className="mt-1.5 text-sm text-night-500">{c.detail}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default SustainabilityTeaser;
