import logo from "../../assets/img/alfalogored.png";

/** Branded fallback shown while a lazy-loaded page chunk downloads. */
const PageLoader = () => (
  <div
    className="grid min-h-svh place-items-center bg-night-950 pt-18"
    role="status"
    aria-label="Loading page"
  >
    <img src={logo} alt="" className="h-12 w-12 animate-pulse object-contain" />
  </div>
);

export default PageLoader;
