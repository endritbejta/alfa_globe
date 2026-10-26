import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import PageLoader from "../ui/PageLoader";

const Layout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Jump instantly ("instant" bypasses the CSS smooth-scroll, which would
      // drift as below-the-fold images load), then correct once layout settles.
      const scrollToTarget = () => {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
      };
      scrollToTarget();
      const settle = setTimeout(scrollToTarget, 400);
      return () => clearTimeout(settle);
    }
    // Instant, not smooth: the CSS `scroll-behavior: smooth` would otherwise make
    // the new page visibly scroll up from the old page's scroll position.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  // While the page scrolls, cards slide under a resting cursor and flip their
  // hover styles on and off, which reads as flicker. Pause hover styles (see
  // the `hover` variant in index.css) from the first scroll until the pointer
  // really moves. Clicks still work: only the visual hover state is paused.
  useEffect(() => {
    const root = document.documentElement;
    let paused = false;
    let lastX = -1;
    let lastY = -1;
    const pause = () => {
      if (paused) return;
      paused = true;
      root.classList.add("hover-paused");
    };
    const resume = (event) => {
      // Some browsers fire a mousemove at the same spot after a scroll.
      const moved = event.clientX !== lastX || event.clientY !== lastY;
      lastX = event.clientX;
      lastY = event.clientY;
      if (!paused || (event.type === "pointermove" && !moved)) return;
      paused = false;
      root.classList.remove("hover-paused");
    };
    window.addEventListener("scroll", pause, { passive: true });
    window.addEventListener("pointermove", resume, { passive: true });
    window.addEventListener("pointerdown", resume, { passive: true });
    return () => {
      window.removeEventListener("scroll", pause);
      window.removeEventListener("pointermove", resume);
      window.removeEventListener("pointerdown", resume);
      root.classList.remove("hover-paused");
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
