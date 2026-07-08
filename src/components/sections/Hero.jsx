import { motion } from "framer-motion";
import { ShieldCheck, Timer, BadgeCheck } from "lucide-react";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import { fadeUp, stagger } from "../../lib/motion";
import tanker from "../../assets/img/tanker.jpg";

const trustPoints = [
  { icon: BadgeCheck, label: "EN 590 / EN 228 certified fuels" },
  { icon: Timer, label: "98% on-time delivery rate" },
  { icon: ShieldCheck, label: "ADR-certified tanker fleet" },
];

const Hero = () => (
  <section className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-night-950">
    {/* Background */}
    <motion.img
      initial={{ scale: 1.08, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      src={tanker}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover opacity-35"
    />
    <div
      className="absolute inset-0 bg-gradient-to-r from-night-950 via-night-950/85 to-night-950/30"
      aria-hidden="true"
    />
    <div
      className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night-950 to-transparent"
      aria-hidden="true"
    />

    <div className="container-x relative pb-28 pt-40 sm:pb-32">
      <motion.div variants={stagger(0.12, 0.2)} initial="hidden" animate="visible" className="max-w-3xl">
        <motion.div variants={fadeUp}>
          <Eyebrow light>Petroleum & energy solutions — Kosovo</Eyebrow>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Reliable energy for businesses{" "}
          <span className="relative whitespace-nowrap">
            <span className="relative z-10">that never stop</span>
            <span
              className="absolute inset-x-0 bottom-1.5 z-0 h-3 -rotate-1 bg-brand-600 sm:bottom-2.5 sm:h-4"
              aria-hidden="true"
            />
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          We source, transport, store and deliver certified fuels across Kosovo — powering fleets,
          farms, factories and families through four stations and a bulk-delivery network you can
          set your schedule by.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
          <Button to="/contact" size="lg" withArrow>
            Request a quote
          </Button>
          <Button to="/services" size="lg" variant="outline-light">
            Explore our services
          </Button>
        </motion.div>

        <motion.ul
          variants={fadeUp}
          className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7"
        >
          {trustPoints.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-white/75">
              <Icon size={17} className="shrink-0 text-brand-500" aria-hidden="true" />
              {label}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  </section>
);

export default Hero;
