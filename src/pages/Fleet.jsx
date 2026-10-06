import { motion } from "framer-motion";
import {
  CreditCard,
  BarChart3,
  Lock,
  FileSpreadsheet,
  MapPin,
  Headset,
  Check,
} from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import PageHero from "../components/ui/PageHero";
import SectionTitle from "../components/ui/SectionTitle";
import FAQAccordion from "../components/ui/FAQAccordion";
import CTASection from "../components/ui/CTASection";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import { fleetFaqs } from "../data/faqs";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import highway from "../assets/img/highway.jpg";

const capabilities = [
  {
    icon: CreditCard,
    title: "Alfa Fleet Card",
    description:
      "One card per vehicle, accepted across our whole station network. No cash, no receipts, no reconciliation headaches.",
  },
  {
    icon: Lock,
    title: "Spending controls",
    description:
      "Restrict cards by product, daily volume or time of day. Change limits instantly from the portal, block lost cards in seconds.",
  },
  {
    icon: BarChart3,
    title: "Consumption reporting",
    description:
      "Per-vehicle and per-driver consumption, litres-per-100km trends, and anomaly flags that surface fuel loss early.",
  },
  {
    icon: FileSpreadsheet,
    title: "One monthly invoice",
    description:
      "A single consolidated invoice with full VAT detail, plus exports that drop straight into your accounting software.",
  },
  {
    icon: MapPin,
    title: "Bulk depot supply",
    description:
      "Run your own yard tank? We combine card refuelling on the road with scheduled bulk deliveries at the depot.",
  },
  {
    icon: Headset,
    title: "A named account manager",
    description:
      "Fleet customers get a direct line to a person who knows their account — not a ticket queue.",
  },
];

const steps = [
  { step: "01", title: "Fleet review", text: "We analyse your routes, vehicles and current fuel spend." },
  { step: "02", title: "Programme design", text: "Card controls, pricing and depot supply tailored to your operation." },
  { step: "03", title: "Cards issued", text: "Vehicles registered and cards delivered within a week." },
  { step: "04", title: "Ongoing optimisation", text: "Quarterly reviews of consumption data to keep costs falling." },
];

const Fleet = () => {
  usePageMeta(
    "Fleet Solutions",
    "The Alfa Trade fleet programme: fuel cards, spending controls, consumption reporting and consolidated invoicing for transport and logistics fleets."
  );

  return (
    <>
      <PageHero
        eyebrow="Fleet solutions"
        title="Control fleet fuel without chasing cash and receipts"
        lead="Give drivers controlled access at our stations, combine it with depot deliveries, and review transactions by card, vehicle, product and location."
        image={highway}
        crumbs={[{ label: "Fleet Solutions" }]}
      />

      {/* Capabilities */}
      <section className="container-x py-20 sm:py-28">
        <SectionTitle
          eyebrow="The programme"
          title="The controls that make fuel easier to manage"
          lead="Set limits, restrict products, consolidate invoices and see the information needed to question unusual consumption."
          align="center"
        />
        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                variants={fadeUp}
                className="hover-lift group rounded-2xl border border-night-100 bg-white p-7 shadow-card hover:border-brand-200 hover:shadow-card-hover"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-[color,background-color,scale] duration-300 ease-out-expo group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-night-950">{cap.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-night-500">{cap.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Savings band */}
      <section className="relative overflow-hidden bg-night-950 py-20 sm:py-24">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Why it pays"
              title="Fleets typically cut fuel admin by hours a week — and spot leakage they never saw"
              light
            />
            <ul className="mt-8 space-y-3.5">
              {[
                "Contract pricing below pump price for committed volumes",
                "Fuel theft and card misuse flagged automatically",
                "Zero cash handling and zero lost receipts",
                "VAT-ready reporting cuts month-end closing time",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-white/75">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                    <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <Button to="/contact" size="lg" withArrow className="mt-9">
              Start a fleet review
            </Button>
          </div>

          {/* Process steps */}
          <motion.ol
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4"
          >
            {steps.map((s) => (
              <motion.li
                key={s.step}
                variants={fadeUp}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="text-2xl font-extrabold tracking-tight text-brand-500">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-bold text-white">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{s.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionTitle
            eyebrow="Fleet FAQ"
            title="Before you ask"
            lead="The questions every fleet manager asks in the first meeting."
            className="lg:sticky lg:top-32 lg:self-start"
          />
          <Reveal>
            <FAQAccordion items={fleetFaqs} />
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Bring station and depot fuel into one plan"
        lead="Share your fleet size, routes and current buying process. We will outline a practical card and bulk-supply setup."
        primary={{ label: "Book a fleet review", to: "/contact" }}
        secondary={{ label: "See fuel products", to: "/products" }}
      />
    </>
  );
};

export default Fleet;
