import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
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
    "Find your nearest Alfa Trade fuel station: Çagllavicë, Kçiç, Klinë e Poshtme and Polac — open daily with certified fuels and fleet card acceptance."
  );

  const [focus, setFocus] = useState(null);
  const mapSectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const showOnMap = (station) => {
    setFocus(station);
    if (window.matchMedia("(max-width: 1023px)").matches) {
      window.requestAnimationFrame(() => {
        mapSectionRef.current?.scrollIntoView({
          behavior: shouldReduceMotion ? "auto" : "smooth",
          block: "start",
        });
      });
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Our locations"
        title="Four convenient points for fuel, AdBlue and fleet cards"
        lead={`${site.stationHours}. Consistent product standards, practical services and direct access from the road.`}
        image={highway2}
        crumbs={[{ label: "Locations" }]}
      />

      <section className="container-x py-20 sm:py-28">
        <SectionTitle
          eyebrow="Station network"
          title="Choose a station and plan the stop"
          lead="Check the available services, open the location on the map or get directions directly."
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
                  <div
                    className={`relative overflow-hidden rounded-2xl border transition-[border-color,background-color,box-shadow] duration-200 ${
                      active
                        ? "border-brand-600 bg-brand-50/60 shadow-card-hover"
                        : "border-night-100 bg-white shadow-card hover:border-brand-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => showOnMap(station)}
                      aria-pressed={active}
                      className="w-full p-6 pr-20 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand-600"
                    >
                      <h3 className="flex flex-wrap items-center gap-2 text-lg font-bold tracking-tight text-night-950">
                        {station.name}
                        {station.flagship && (
                          <span className="rounded-full bg-brand-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                            Flagship
                          </span>
                        )}
                      </h3>
                      <p className="mt-1 flex items-start gap-1.5 text-sm text-night-500">
                        <MapPin size={13} className="mt-0.5 shrink-0 text-brand-600" aria-hidden="true" />
                        {station.address} · {station.region}
                      </p>
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
                      <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 lg:hidden">
                        <MapPin size={13} aria-hidden="true" />
                        Show on map
                      </span>
                    </button>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${station.coords[0]},${station.coords[1]}`}
                      target="_blank"
                      rel="noreferrer"
                      className="ui-pressable absolute right-5 top-5 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-night-200 bg-white text-night-600 hover:border-brand-600 hover:bg-brand-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                      aria-label={`Directions to ${station.name}`}
                    >
                      <Navigation size={16} />
                    </a>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Map */}
          <div
            ref={mapSectionRef}
            className="scroll-mt-24 lg:sticky lg:top-28 lg:h-[calc(100svh-9rem)] lg:max-h-[640px]"
          >
            <StationsMap focus={focus} className="h-[420px] lg:h-full" />
          </div>
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
