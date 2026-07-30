import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, ChevronDown, Send } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import PageHero from "../components/ui/PageHero";
import SectionTitle from "../components/ui/SectionTitle";
import FeatureCard from "../components/ui/FeatureCard";
import CTASection from "../components/ui/CTASection";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import { benefits, openings, hiringProcess } from "../data/careers";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import gasNozzle from "../assets/img/gasolinenozzle.jpg";

const OpeningCard = ({ opening }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.article
      variants={fadeUp}
      className="rounded-2xl border border-night-100 bg-white shadow-card transition-shadow hover:shadow-card-hover"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <div>
          <h3 className="text-lg font-bold tracking-tight text-night-950">{opening.title}</h3>
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-night-500">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-brand-600" aria-hidden="true" />
              {opening.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-brand-600" aria-hidden="true" />
              {opening.type}
            </span>
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`shrink-0 text-night-400 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            expanded ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      {expanded && (
        <div className="border-t border-night-100 p-6 pt-5">
          <p className="leading-relaxed text-night-600">{opening.description}</p>
          <Button href="#apply" className="mt-5" withArrow>
            Apply for this role
          </Button>
        </div>
      )}
    </motion.article>
  );
};

const Careers = () => {
  usePageMeta(
    "Careers",
    "Join Alfa Trade: stable local jobs, paid training and real progression across our stations, logistics fleet and commercial team."
  );

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build a career in a business that has to deliver"
        lead="From safe fuel handling to route planning and customer service, our work rewards people who are careful, dependable and ready to take responsibility."
        image={gasNozzle}
        crumbs={[{ label: "Careers" }]}
      />

      {/* Benefits */}
      <section className="container-x py-20 sm:py-28">
        <SectionTitle
          eyebrow="Why work here"
          title="Clear standards, practical training and work that matters"
          lead="We invest in the licences, product knowledge and safety habits people need to grow in petroleum distribution."
          align="center"
        />
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit) => (
            <FeatureCard key={benefit.title} feature={benefit} />
          ))}
        </motion.div>
      </section>

      {/* Hiring process */}
      <section className="bg-night-950 py-20 sm:py-24">
        <div className="container-x">
          <SectionTitle
            eyebrow="How hiring works"
            title="Four steps, no black holes"
            lead="Every applicant gets an answer. Every step has a date."
            light
          />
          <motion.ol
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {hiringProcess.map((phase) => (
              <motion.li
                key={phase.step}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="text-3xl font-extrabold tracking-tight text-brand-500">
                  {phase.step}
                </span>
                <h3 className="mt-3 font-bold text-white">{phase.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{phase.description}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Openings + application */}
      <section className="bg-night-50 py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle eyebrow="Open positions" title="We're hiring now" />
            <motion.div
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-10 space-y-4"
            >
              {openings.map((opening) => (
                <OpeningCard key={opening.title} opening={opening} />
              ))}
            </motion.div>
          </div>

          <div id="apply" className="scroll-mt-28">
            <SectionTitle
              eyebrow="Apply"
              title="Send us your application"
              lead="No role that fits? Apply anyway — good people are the one thing we always have room for."
            />
            <Reveal className="mt-10">
              {submitted ? (
                <div className="rounded-2xl border border-night-100 bg-white p-10 text-center shadow-card">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-brand-600">
                    <Send size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-night-950">Application received</h3>
                  <p className="mt-2 text-night-500">
                    Thank you — our team will get back to you within five working days.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 rounded-2xl border border-night-100 bg-white p-7 shadow-card sm:p-9"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="career-name" className="mb-1.5 block text-sm font-semibold text-night-800">
                        Full name
                      </label>
                      <input
                        id="career-name"
                        required
                        type="text"
                        autoComplete="name"
                        className="w-full rounded-xl border border-night-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="career-phone" className="mb-1.5 block text-sm font-semibold text-night-800">
                        Phone
                      </label>
                      <input
                        id="career-phone"
                        required
                        type="tel"
                        autoComplete="tel"
                        className="w-full rounded-xl border border-night-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
                        placeholder="+383 4x xxx xxx"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="career-email" className="mb-1.5 block text-sm font-semibold text-night-800">
                      Email
                    </label>
                    <input
                      id="career-email"
                      required
                      type="email"
                      autoComplete="email"
                      className="w-full rounded-xl border border-night-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="career-role" className="mb-1.5 block text-sm font-semibold text-night-800">
                      Position
                    </label>
                    <select
                      id="career-role"
                      className="w-full rounded-xl border border-night-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
                    >
                      {openings.map((o) => (
                        <option key={o.title}>{o.title}</option>
                      ))}
                      <option>Open application</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="career-message" className="mb-1.5 block text-sm font-semibold text-night-800">
                      Tell us about yourself
                    </label>
                    <textarea
                      id="career-message"
                      rows={4}
                      className="w-full resize-none rounded-xl border border-night-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
                      placeholder="Experience, licences, availability…"
                    />
                  </div>
                  <Button type="submit" size="lg" withArrow className="w-full">
                    Submit application
                  </Button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Prefer to talk first?"
        lead="Call us or drop by any station — a conversation is always the fastest way to find out if we fit."
        primary={{ label: "Contact us", to: "/contact" }}
        secondary={{ label: "Find a station", to: "/locations" }}
      />
    </>
  );
};

export default Careers;
