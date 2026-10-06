import { motion } from "framer-motion";
import usePageMeta from "../hooks/usePageMeta";
import PageHero from "../components/ui/PageHero";
import SectionTitle from "../components/ui/SectionTitle";
import FAQAccordion from "../components/ui/FAQAccordion";
import CTASection from "../components/ui/CTASection";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import { services } from "../data/services";
import { serviceFaqs } from "../data/faqs";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import { Check } from "lucide-react";
import highway3 from "../assets/img/highway3.jpg";

const ServiceSection = ({ service, index }) => {
  const Icon = service.icon;
  const reversed = index % 2 === 1;
  return (
    <section
      id={service.slug}
      className={`scroll-mt-24 py-16 sm:py-20 ${index % 2 === 1 ? "bg-night-50" : ""}`}
    >
      <div className="container-x">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <Reveal>
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-white shadow-sm shadow-brand-600/30">
              <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-night-950 sm:text-3xl">
              {service.title}
            </h2>
            <p className="mt-4 leading-relaxed text-night-600">{service.description}</p>
            <ul className="mt-6 space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-night-700">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                    <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
            <Button to="/contact" withArrow className="mt-8">
              Discuss this service
            </Button>
          </Reveal>

          <motion.ol
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4"
            aria-label={`How ${service.title} works`}
          >
            {service.process.map((step, i) => (
              <motion.li
                key={step}
                variants={fadeUp}
                className="flex gap-5 rounded-2xl border border-night-100 bg-white p-6 shadow-card"
              >
                <span className="text-2xl font-extrabold tracking-tight text-brand-600/80">
                  0{i + 1}
                </span>
                <p className="pt-1 leading-relaxed text-night-600">{step}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  usePageMeta(
    "Services",
    "Petroleum distribution, bulk fuel delivery, fleet supply, industrial fuels, lubricants, logistics and 24/7 emergency delivery — Alfa Trade's full service portfolio."
  );

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Fuel supply designed around where and how you use it"
        lead="At station, by tanker, through fleet cards or under contract—each option comes with clear product specifications, measured volume and documented delivery."
        image={highway3}
        crumbs={[{ label: "Services" }]}
      />

      {/* Quick anchor nav */}
      <nav aria-label="Services on this page" className="sticky top-18 z-30 border-b border-night-100 bg-white/90 backdrop-blur">
        <div className="container-x flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="ui-pressable whitespace-nowrap rounded-full border border-night-200 px-4 py-1.5 text-sm font-semibold text-night-600 hover:border-brand-600 hover:bg-brand-600 hover:text-white"
            >
              {service.title}
            </a>
          ))}
        </div>
      </nav>

      {services.map((service, i) => (
        <ServiceSection key={service.slug} service={service} index={i} />
      ))}

      {/* FAQ */}
      <section className="bg-night-50 py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionTitle
            eyebrow="FAQ"
            title="The details buyers ask before the first order"
            lead="Volumes, delivery windows, quality documentation and invoicing—answered clearly before supply begins."
            className="lg:sticky lg:top-32 lg:self-start"
          />
          <Reveal>
            <FAQAccordion items={serviceFaqs} />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Services;
