import usePageMeta from "../hooks/usePageMeta";
import Button from "../components/ui/Button";

const NotFound = () => {
  usePageMeta("Page not found");
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-night-950">
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      <div className="container-x relative py-32 text-center">
        <p className="text-7xl font-extrabold tracking-tight text-brand-600 sm:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
          This page ran out of fuel
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/60">
          The page you're looking for doesn't exist or has been moved. Let's get you back on the
          road.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button to="/" size="lg" withArrow>
            Back to home
          </Button>
          <Button to="/contact" size="lg" variant="outline-light">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
