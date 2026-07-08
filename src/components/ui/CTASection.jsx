import Button from "./Button";
import Reveal from "./Reveal";

/** Full-width red conversion band used at the bottom of most pages. */
const CTASection = ({
  title = "Ready to power your operations?",
  lead = "Talk to our commercial team about supply contracts, bulk delivery and fleet programmes tailored to your business.",
  primary = { label: "Request a quote", to: "/contact" },
  secondary = { label: "Explore our services", to: "/services" },
}) => (
  <section className="relative overflow-hidden bg-brand-700">
    <div
      className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900"
      aria-hidden="true"
    />
    <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
    <div className="container-x relative py-20 sm:py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          {lead}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button
            to={primary.to}
            size="lg"
            withArrow
            className="!bg-white !text-brand-700 shadow-none hover:!bg-night-950 hover:!text-white"
          >
            {primary.label}
          </Button>
          {secondary && (
            <Button to={secondary.to} size="lg" variant="outline-light">
              {secondary.label}
            </Button>
          )}
        </div>
      </Reveal>
    </div>
  </section>
);

export default CTASection;
