import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Check } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import PageHero from "../components/ui/PageHero";
import SectionTitle from "../components/ui/SectionTitle";
import CTASection from "../components/ui/CTASection";
import StationsMap from "../components/sections/StationsMap";
import { stations } from "../data/stations";
import { site } from "../data/site";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import highway2 from "../assets/img/highway2.jpg";

const Locations = () => {
  usePageMeta(
    "Locations",
    "Find your nearest Alfa Globe fuel station: Çagllavicë, Kçiç, Klinë e Poshtme and Polac — open daily with certified fuels and fleet card acceptance."
  );

  const [focus, setFocus] = useState(null);

  return (
    <>
      <PageHero
        eyebrow="Our locations"
        title="Four stations, one standard"
        lead={`${site.stationHours}. Certified fuels, market shops and fleet-card acceptance at every site.`}
        image={highway2}
        crumbs={[{ label: "Locations" }]}
      />

      <section className="container-x py-20 sm:py-28">
        <SectionTitle
          eyebrow="Station network"
          title="Find your nearest station"
          lead="Click a station to see it on the map, or get directions straight to the pump."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Station list */}
          <motion.ul
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4"
          >
            {stations.map((station) => {
              const active = focus?.name === station.name;
              return (
                <motion.li key={station.name} variants={fadeUp}>
                  <button
                    onClick={() => setFocus(station)}
                    aria-pressed={active}
                    className={`w-full rounded-2xl border p-6 text-left transition-all duration-300 ${
                      active
                        ? "border-brand-600 bg-brand-50/60 shadow-card-hover"
                        : "border-night-100 bg-white shadow-card hover:border-brand-300"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="flex items-center gap-2 text-lg font-bold tracking-tight text-night-950">
                          {station.name}
                          {station.flagship && (
                            <span className="rounded-full bg-brand-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                              Flagship
                            </span>
                          )}
                        </h3>
                        <p className="mt-1 flex items-center gap-1.5 text-sm text-night-500">
                          <MapPin size={13} className="text-brand-600" aria-hidden="true" />
                          {station.address} · {station.region}
                        </p>
                      </div>
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${station.coords[0]},${station.coords[1]}`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-night-200 text-night-600 transition-all hover:border-brand-600 hover:bg-brand-600 hover:text-white"
                        aria-label={`Directions to ${station.name}`}
                      >
                        <Navigation size={16} />
                      </a>
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                      {station.services.map((service) => (
                        <li
                          key={service}
                          className="flex items-center gap-1.5 text-xs font-medium text-night-500"
                        >
                          <Check size={12} className="text-brand-600" aria-hidden="true" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </button>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Map */}
          <StationsMap focus={focus} className="min-h-[420px] lg:sticky lg:top-28 lg:h-[calc(100svh-9rem)] lg:max-h-[640px]" />
        </div>
      </section>

      <CTASection
        title="Need fuel delivered instead?"
        lead="Our bulk-delivery fleet brings certified fuel to your site, farm or depot — anywhere in Kosovo."
        primary={{ label: "Arrange a delivery", to: "/contact" }}
        secondary={{ label: "Bulk delivery service", to: "/services#bulk-delivery" }}
      />
    </>
  );
};

export default Locations;
