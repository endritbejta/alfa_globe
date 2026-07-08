import { motion } from "framer-motion";
import { Check } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import PageHero from "../components/ui/PageHero";
import SectionTitle from "../components/ui/SectionTitle";
import CTASection from "../components/ui/CTASection";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import { fertilizers, agriServices } from "../data/agriculture";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import agriculture1 from "../assets/img/agriculture1.jpg";
import wheat from "../assets/img/wheat.jpg";
import corn from "../assets/img/corn.avif";
import fertilizer1 from "../assets/img/fertilizer1.jpg";

const Agriculture = () => {
  usePageMeta(
    "Agriculture",
    "Alfa Globe's agriculture division: UREA, NPK and phosphate fertilizers, certified seeds, agronomic advice and seasonal farm fuel across Kosovo."
  );

  return (
    <>
      <PageHero
        eyebrow="Agriculture division"
        title="Fertilizers, seeds and fuel — everything a season needs"
        lead="Since 2020 our agriculture division has supplied Kosovo's farms with quality fertilizers, certified seeds and seasonal bulk fuel, backed by honest agronomic advice."
        image={agriculture1}
        crumbs={[{ label: "Agriculture" }]}
      />

      {/* Intro */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionTitle
              eyebrow="Why agriculture"
              title="It started with our farming customers"
              lead="Farms were already buying seasonal diesel from us. They asked the obvious question: if the tanker comes anyway, why can't it bring fertilizer too?"
            />
            <div className="mt-7 space-y-5 leading-relaxed text-night-600">
              <p>
                So we built a proper agriculture supply business: fertilizers sourced from certified
                European producers, seed varieties proven in the region, and delivery scheduled
                around planting and harvest — not around our convenience.
              </p>
              <p>
                Today the division serves hundreds of farms across Kosovo, from smallholdings to
                commercial operations, with the same principle as our fuel business: quality you can
                verify, prices you can plan around, and deliveries that arrive when promised.
              </p>
            </div>
            <Reveal delay={0.15} className="mt-9">
              <Button to="/contact" withArrow size="lg">
                Plan your season with us
              </Button>
            </Reveal>
          </div>
          <Reveal className="relative">
            <div className="overflow-hidden rounded-2xl shadow-card-hover">
              <img
                src={wheat}
                alt="Wheat crop ready for harvest"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-7 left-6 rounded-2xl bg-night-950 px-6 py-4 text-white shadow-card-hover">
              <p className="text-2xl font-extrabold tracking-tight text-brand-500">Since 2020</p>
              <p className="text-xs text-white/60">supplying Kosovo's farms</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Fertilizer catalog */}
      <section className="bg-night-50 py-20 sm:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow="Fertilizers"
            title="The right nutrient, at the right rate, at the right time"
            lead="Nitrogen, phosphorus, potassium and balanced complexes — each does a different job. We stock the main types and help you match them to your soil analysis."
            align="center"
          />
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {fertilizers.map((fertilizer) => {
              const Icon = fertilizer.icon;
              return (
                <motion.article
                  key={fertilizer.name}
                  variants={fadeUp}
                  className="flex flex-col rounded-2xl border border-night-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-night-950 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      {fertilizer.type}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-night-950">
                    {fertilizer.name}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-night-500">
                    {fertilizer.description}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-night-100 pt-5">
                    {fertilizer.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-night-600">
                        <Check size={15} className="mt-0.5 shrink-0 text-brand-600" aria-hidden="true" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Eco-friendly formulations */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 overflow-hidden rounded-2xl shadow-card-hover lg:order-1">
            <img
              src={fertilizer1}
              alt="Granulated fertilizer"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionTitle
              eyebrow="Responsible use"
              title="More yield per kilogram, less runoff per hectare"
              lead="Over-fertilizing wastes money and harms soil and water. We'd rather sell you the right amount than the maximum amount."
            />
            <ul className="mt-8 space-y-3.5">
              {[
                "Products from certified EU producers with full composition declarations",
                "Application rates matched to soil analysis, not guesswork",
                "Coated and stabilised formulations that reduce nitrogen loss",
                "Storage and handling guidance with every bulk order",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-night-700">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                    <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Seeds + fuel services */}
      <section className="relative overflow-hidden bg-night-950 py-20 sm:py-28">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="container-x relative">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionTitle
                eyebrow="Beyond fertilizer"
                title="Seeds, advice and the fuel to bring the harvest in"
                lead="A season is a system — seed, nutrition, machinery and timing. We supply the pieces and help you fit them together."
                light
              />
              <motion.div
                variants={stagger(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="mt-10 space-y-4"
              >
                {agriServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.title}
                      variants={fadeUp}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-600 text-white">
                        <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-bold text-white">{service.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
            <Reveal className="overflow-hidden rounded-2xl shadow-card-hover">
              <img
                src={corn}
                alt="Maize crop in the field"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Order fertilizers and seeds for the season"
        lead="Tell us your crops and hectares — we'll quote fertilizer, seed and seasonal fuel in one plan, delivered to the farm."
        primary={{ label: "Get a season quote", to: "/contact" }}
        secondary={{ label: "Seasonal fuel planning", to: "/services#bulk-delivery" }}
      />
    </>
  );
};

export default Agriculture;
