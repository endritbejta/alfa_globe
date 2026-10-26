import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import PageHero from "../components/ui/PageHero";
import SectionTitle from "../components/ui/SectionTitle";
import FeatureCard from "../components/ui/FeatureCard";
import CTASection from "../components/ui/CTASection";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import { benefits, hiringProcess } from "../data/careers";
import { site } from "../data/site";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import gasNozzle from "../assets/img/gasolinenozzle.jpg";

const Careers = () => {
  usePageMeta(
    "Careers",
    "Join Alfa Trade: stable local jobs, paid training and real progression across our stations, deliveries and commercial team."
  );

  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const data = new URLSearchParams(new FormData(e.currentTarget));
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
      if (!response.ok) throw new Error(`Form submission failed (${response.status})`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
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

      {/* Application */}
      <section className="bg-night-50 py-20 sm:py-28">
        <div id="apply" className="container-x max-w-3xl scroll-mt-28">
          <SectionTitle
            eyebrow="Apply"
            title="Send us your application"
            lead="Tell us who you are and what kind of work you are looking for. We will get in touch when there is a role that fits."
          />
          <Reveal className="mt-10">
            {status === "sent" ? (
              <div className="rounded-2xl border border-night-100 bg-white p-10 text-center shadow-card">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-brand-600">
                  <Send size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-night-950">Application received</h3>
                <p className="mt-2 text-night-500">Thank you. We will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                name="careers"
                className="space-y-5 rounded-2xl border border-night-100 bg-white p-7 shadow-card sm:p-9"
              >
                <input type="hidden" name="form-name" value="careers" />
                <p className="hidden" aria-hidden="true">
                  <label>
                    Leave this field empty
                    <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="career-name" className="mb-1.5 block text-sm font-semibold text-night-800">
                      Full name
                    </label>
                    <input
                      id="career-name"
                      name="name"
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
                      name="phone"
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
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                    className="w-full rounded-xl border border-night-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="career-role" className="mb-1.5 block text-sm font-semibold text-night-800">
                    Position you are interested in <span className="font-normal text-night-400">(optional)</span>
                  </label>
                  <input
                    id="career-role"
                    name="position"
                    type="text"
                    className="w-full rounded-xl border border-night-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
                    placeholder="For example: station attendant, driver"
                  />
                </div>
                <div>
                  <label htmlFor="career-message" className="mb-1.5 block text-sm font-semibold text-night-800">
                    Tell us about yourself
                  </label>
                  <textarea
                    id="career-message"
                    name="message"
                    rows={4}
                    className="w-full rounded-xl border border-night-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20 resize-none"
                    placeholder="Experience, licences, availability…"
                  />
                </div>
                {status === "error" && (
                  <p role="alert" className="rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-700">
                    Something went wrong and your message was not sent. Please try again, or call us on{" "}
                    {site.phoneDisplay}.
                  </p>
                )}
                <Button
                  type="submit"
                  size="lg"
                  withArrow
                  disabled={status === "sending"}
                  className="w-full disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Submit application"}
                </Button>
              </form>
            )}
          </Reveal>
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
