import { motion } from "framer-motion";
import usePageMeta from "../hooks/usePageMeta";
import PageHero from "../components/ui/PageHero";
import SectionTitle from "../components/ui/SectionTitle";
import FeatureCard from "../components/ui/FeatureCard";
import CTASection from "../components/ui/CTASection";
import Reveal from "../components/ui/Reveal";
import { pillars, commitments } from "../data/sustainability";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import highway2 from "../assets/img/highway2.jpg";

const Sustainability = () => {
  usePageMeta(
    "Sustainability",
    "Alfa Globe's sustainability strategy: cleaner fuels, efficient logistics, spill prevention, responsible waste handling and published targets."
  );

  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Responsibility is an operating standard, not a slogan"
        lead="We move dangerous goods through communities we live in ourselves. That reality shapes how we source, transport and sell energy — and the targets we hold ourselves to."
        image={highway2}
        crumbs={[{ label: "Sustainability" }]}
      />

      {/* Commitments */}
      <section className="container-x py-20 sm:py-28">
        <SectionTitle
          eyebrow="Our commitments"
          title="Targets we publish and report against"
          align="center"
        />
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
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

      {/* Pillars */}
      <section className="bg-night-950 py-20 sm:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow="How we get there"
            title="Six pillars of responsible operations"
            lead="Every pillar is owned by a named manager and reviewed quarterly — because unowned commitments are just decoration."
            light
          />
          <motion.div
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {pillars.map((pillar) => (
              <FeatureCard key={pillar.title} feature={pillar} light />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Narrative */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionTitle
            eyebrow="The honest version"
            title="We sell fuel. Here's what responsibility means when that's your business."
            className="lg:sticky lg:top-28 lg:self-start"
          />
          <Reveal className="space-y-6 leading-relaxed text-night-600">
            <p>
              A fuel distributor doesn't get to claim it has no environmental footprint. What it
              can do — and what we commit to — is handle every litre with zero tolerance for
              spills, burn as little fuel as possible moving fuel, and help customers consume less
              of what we sell them.
            </p>
            <p>
              That last point is real: our premium diesel reduces consumption in fleet trials, our
              fleet reporting helps transport companies cut litres-per-kilometre, and our AdBlue
              keeps emission-control systems doing their job. When our customers burn less, that is
              our most meaningful environmental contribution.
            </p>
            <p>
              Beyond operations, we invest in the communities where we work: local hiring across
              four municipalities, local suppliers wherever possible, and support for education and
              sports initiatives that build Kosovo's next generation of leaders.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Sustainability questions welcome"
        lead="Procurement teams increasingly ask suppliers hard environmental questions. Ours get answered with data."
        primary={{ label: "Contact our HSE lead", to: "/contact" }}
        secondary={{ label: "About Alfa Globe", to: "/about" }}
      />
    </>
  );
};

export default Sustainability;
