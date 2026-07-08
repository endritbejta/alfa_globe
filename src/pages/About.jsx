import { motion } from "framer-motion";
import usePageMeta from "../hooks/usePageMeta";
import PageHero from "../components/ui/PageHero";
import SectionTitle from "../components/ui/SectionTitle";
import Timeline from "../components/ui/Timeline";
import FeatureCard from "../components/ui/FeatureCard";
import CTASection from "../components/ui/CTASection";
import Reveal from "../components/ui/Reveal";
import StatsBand from "../components/sections/StatsBand";
import { values, leadership, certifications } from "../data/about";
import { milestones } from "../data/milestones";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import { BadgeCheck } from "lucide-react";
import highway2 from "../assets/img/highway2.jpg";
import tanker from "../assets/img/tanker.jpg";

const About = () => {
  usePageMeta(
    "About us",
    "The story of Alfa Globe: an independent Kosovar energy company built on reliable fuel supply, safety and long-term partnerships since 2014."
  );

  return (
    <>
      <PageHero
        eyebrow="About Alfa Globe"
        title="Built on one promise: the fuel is there when you need it"
        lead="From a single truck in 2014 to four stations and a commercial supply network — our story is written in deliveries made on time."
        image={highway2}
        crumbs={[{ label: "About" }]}
      />

      {/* Story */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionTitle
              eyebrow="Our story"
              title="Independent, family-run, and proud of both"
              lead="Alfa Globe was founded in Prishtina by people who had spent years in regional fuel trading and believed the market deserved a supplier that treated small customers like large ones."
            />
            <div className="mt-7 space-y-5 leading-relaxed text-night-600">
              <p>
                The early years were simple: one truck, a handful of commercial clients, and an
                obsession with keeping every commitment. That reputation compounded. Construction
                firms recommended us to hauliers; hauliers recommended us to farms. In 2016 we
                opened our first retail station in Çagllavicë, and by 2018 the network had grown to
                four stations across central and western Kosovo.
              </p>
              <p>
                Today Alfa Globe operates three supply divisions — petroleum, agriculture and
                construction — moving over 45 million litres of fuel a year with our own
                ADR-certified tanker fleet. We remain independently owned, which means our only
                obligation is to the customers and communities we serve.
              </p>
            </div>
          </div>
          <Reveal className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-2xl shadow-card-hover">
              <img src={tanker} alt="Alfa Globe tanker fleet" loading="lazy" className="w-full object-cover" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-night-950 p-6 text-white">
                <p className="text-3xl font-extrabold tracking-tight text-brand-500">2014</p>
                <p className="mt-1 text-sm text-white/60">Founded in Prishtina</p>
              </div>
              <div className="rounded-2xl bg-brand-600 p-6 text-white">
                <p className="text-3xl font-extrabold tracking-tight">3</p>
                <p className="mt-1 text-sm text-white/80">Supply divisions</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="bg-night-950 py-20 sm:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-brand-500">
              Our mission
            </h2>
            <p className="mt-4 text-xl font-semibold leading-relaxed text-white sm:text-2xl">
              To supply high-quality petroleum products with professionalism and integrity — always
              prioritising the well-being of people and the environment we operate in.
            </p>
            <p className="mt-4 leading-relaxed text-white/60">
              We invest continuously in Kosovo's economy: hiring locally, buying from local
              suppliers, and supporting initiatives in education and sport that build future
              leaders.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-brand-500">
              Our vision
            </h2>
            <p className="mt-4 text-xl font-semibold leading-relaxed text-white sm:text-2xl">
              To be the region's most trusted independent energy partner — the supplier businesses
              plan around, not the one they worry about.
            </p>
            <p className="mt-4 leading-relaxed text-white/60">
              Growth for us means deeper reliability: more storage, smarter logistics, cleaner
              fuels, and services that make our customers' operations simpler.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="container-x py-20 sm:py-28">
        <SectionTitle
          eyebrow="Our values"
          title="The standards behind every delivery"
          align="center"
        />
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value) => (
            <FeatureCard key={value.title} feature={value} />
          ))}
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="bg-night-50 py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionTitle
              eyebrow="Milestones"
              title="A decade of organic growth"
              lead="No shortcuts, no leaps of faith — each stage of Alfa Globe was funded by the trust earned in the one before it."
              className="lg:sticky lg:top-28"
            />
          </div>
          <Timeline items={milestones} />
        </div>
      </section>

      {/* Leadership */}
      <section className="container-x py-20 sm:py-28">
        <SectionTitle
          eyebrow="Leadership"
          title="The people accountable for the promise"
          align="center"
        />
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {leadership.map((person) => (
            <motion.div
              key={person.name}
              variants={fadeUp}
              className="rounded-2xl border border-night-100 bg-white p-7 text-center shadow-card"
            >
              <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-night-950 text-xl font-extrabold text-white">
                {person.initials}
              </span>
              <h3 className="mt-5 font-bold tracking-tight text-night-950">{person.name}</h3>
              <p className="mt-1 text-sm font-semibold text-brand-600">{person.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-night-500">{person.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Certifications & safety */}
      <section className="bg-night-950 py-20 sm:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow="Certifications & safety"
            title="Standards you can audit, not just admire"
            lead="Fuel is a dangerous-goods business. These are the frameworks that keep our people, customers and environment safe."
            light
          />
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-5 sm:grid-cols-2"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.title}
                variants={fadeUp}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <BadgeCheck size={22} className="mt-0.5 shrink-0 text-brand-500" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-white">{cert.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <StatsBand />
      <CTASection
        title="Work with a team that keeps its word"
        lead="Whether you need one delivery or a five-year supply contract, it starts with a conversation."
      />
    </>
  );
};

export default About;
