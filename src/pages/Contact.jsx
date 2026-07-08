import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import PageHero from "../components/ui/PageHero";
import SectionTitle from "../components/ui/SectionTitle";
import StationsMap from "../components/sections/StationsMap";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import { site } from "../data/site";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import tanker from "../assets/img/tanker.jpg";

const departments = [
  {
    name: "Commercial & quotes",
    detail: "Supply contracts, bulk delivery, fleet programmes",
  },
  {
    name: "Orders & dispatch",
    detail: "Delivery scheduling and 24/7 emergency supply",
  },
  {
    name: "Careers",
    detail: "Applications and open positions",
  },
  {
    name: "Quality & HSE",
    detail: "Certificates, safety documentation, environmental questions",
  },
];

const inputClasses =
  "w-full rounded-xl border border-night-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20";

const Contact = () => {
  usePageMeta(
    "Contact",
    "Contact Alfa Globe: request a quote, arrange a delivery or reach our 24/7 dispatch line. Phone, email, WhatsApp and Viber."
  );

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Talk to a person, not a queue"
        lead="Quotes, deliveries, fleet programmes or anything else — reach us by phone, email or messenger, and we'll answer quickly."
        image={tanker}
        crumbs={[{ label: "Contact" }]}
      />

      <section className="container-x py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Contact info */}
          <div>
            <SectionTitle eyebrow="Get in touch" title="Direct lines" />
            <motion.ul
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-10 space-y-4"
            >
              <motion.li variants={fadeUp}>
                <a
                  href={`tel:${site.phone}`}
                  className="group flex items-center gap-4 rounded-2xl border border-night-100 bg-white p-5 shadow-card transition-all hover:border-brand-200 hover:shadow-card-hover"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Phone size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm text-night-500">Phone — orders & 24/7 dispatch</p>
                    <p className="font-bold text-night-950">{site.phoneDisplay}</p>
                  </div>
                </a>
              </motion.li>
              <motion.li variants={fadeUp}>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-night-100 bg-white p-5 shadow-card transition-all hover:border-brand-200 hover:shadow-card-hover"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Mail size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm text-night-500">Email</p>
                    <p className="font-bold text-night-950">{site.email}</p>
                  </div>
                </a>
              </motion.li>
              <motion.li variants={fadeUp}>
                <a
                  href={site.whatsapp}
                  className="group flex items-center gap-4 rounded-2xl border border-night-100 bg-white p-5 shadow-card transition-all hover:border-brand-200 hover:shadow-card-hover"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <MessageCircle size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm text-night-500">WhatsApp / Viber</p>
                    <p className="font-bold text-night-950">{site.phoneDisplay}</p>
                  </div>
                </a>
              </motion.li>
              <motion.li variants={fadeUp}>
                <div className="flex items-start gap-4 rounded-2xl border border-night-100 bg-white p-5 shadow-card">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <MapPin size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm text-night-500">Headquarters</p>
                    <p className="font-bold text-night-950">{site.headquarters}</p>
                  </div>
                </div>
              </motion.li>
              <motion.li variants={fadeUp}>
                <div className="flex items-start gap-4 rounded-2xl border border-night-100 bg-white p-5 shadow-card">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Clock size={20} aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-night-500">Office hours</p>
                    <dl className="mt-1 space-y-1">
                      {site.hours.map((h) => (
                        <div key={h.days} className="flex justify-between gap-6 text-sm">
                          <dt className="font-semibold text-night-800">{h.days}</dt>
                          <dd className="text-night-500">{h.time}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-2 text-xs font-semibold text-brand-600">{site.stationHours}</p>
                  </div>
                </div>
              </motion.li>
            </motion.ul>
          </div>

          {/* Form */}
          <div>
            <SectionTitle
              eyebrow="Send an inquiry"
              title="Tell us what you need"
              lead="Commercial inquiries get a response within one working day."
            />
            <Reveal className="mt-10">
              {submitted ? (
                <div className="rounded-2xl border border-night-100 bg-white p-12 text-center shadow-card">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-brand-600">
                    <Send size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-night-950">Inquiry sent</h3>
                  <p className="mt-2 text-night-500">
                    Thank you — our commercial team will reply within one working day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 rounded-2xl border border-night-100 bg-white p-7 shadow-card sm:p-9"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold text-night-800">
                        Full name
                      </label>
                      <input id="contact-name" required type="text" autoComplete="name" className={inputClasses} placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="mb-1.5 block text-sm font-semibold text-night-800">
                        Company <span className="font-normal text-night-400">(optional)</span>
                      </label>
                      <input id="contact-company" type="text" autoComplete="organization" className={inputClasses} placeholder="Company name" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-email" className="mb-1.5 block text-sm font-semibold text-night-800">
                        Email
                      </label>
                      <input id="contact-email" required type="email" autoComplete="email" className={inputClasses} placeholder="you@example.com" />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-semibold text-night-800">
                        Phone
                      </label>
                      <input id="contact-phone" type="tel" autoComplete="tel" className={inputClasses} placeholder="+383 4x xxx xxx" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-department" className="mb-1.5 block text-sm font-semibold text-night-800">
                      Department
                    </label>
                    <select id="contact-department" className={`${inputClasses} bg-white`}>
                      {departments.map((d) => (
                        <option key={d.name}>{`${d.name} — ${d.detail}`}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold text-night-800">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      className={`${inputClasses} resize-none`}
                      placeholder="Volumes, locations, timelines — the more detail, the faster the quote."
                    />
                  </div>
                  <Button type="submit" size="lg" withArrow className="w-full">
                    Send inquiry
                  </Button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-night-50 py-20 sm:py-24">
        <div className="container-x">
          <SectionTitle
            eyebrow="Visit us"
            title="Or stop by any of our stations"
            align="center"
          />
          <Reveal className="mt-12">
            <StationsMap className="h-[440px]" />
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
