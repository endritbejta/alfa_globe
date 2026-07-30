import { partners } from "../../data/partners";

/** Infinite scrolling band of partner wordmarks. */
const PartnersMarquee = ({ dark = false }) => {
  const items = [...partners, ...partners]; // duplicated for a seamless loop
  return (
    <section
      aria-label="Trusted partners"
      className={`border-y py-8 ${dark ? "border-white/10 bg-night-950" : "border-night-100 bg-night-50"}`}
    >
      <p
        className={`container-x mb-5 text-center text-xs font-bold uppercase tracking-[0.25em] ${
          dark ? "text-white/40" : "text-night-400"
        }`}
      >
        Trusted by businesses across Kosovo
      </p>
      <div className="relative overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-14 pr-14 hover:[animation-play-state:paused]">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              aria-hidden={i >= partners.length ? "true" : undefined}
              className={`whitespace-nowrap text-lg font-extrabold uppercase tracking-wide ${
                dark ? "text-white/30" : "text-night-300"
              }`}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
