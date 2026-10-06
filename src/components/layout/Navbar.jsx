import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, site } from "../../data/site";
import Button from "../ui/Button";
import logo from "../../assets/img/alfalogored.png";
import { useLanguage } from "../../i18n/LanguageContext";
import { preloadRoute } from "../../lib/routePreload";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { language, setLanguage } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);

  const LanguageSwitch = ({ compact = false }) => (
    <div
      className={`flex items-center rounded-full border border-white/15 bg-white/5 p-1 ${
        compact ? "w-full" : ""
      }`}
      role="group"
      aria-label="Language"
    >
      {[
        ["sq", "SQ"],
        ["en", "EN"],
      ].map(([code, label]) => (
        <button
          key={code}
          type="button"
          onClick={() => setLanguage(code)}
          className={`ui-pressable rounded-full font-bold tracking-wider ${
            compact
              ? "flex-1 py-2.5 text-xs"
              : "px-2.5 py-1 text-[11px]"
          } ${
            language === code
              ? "bg-brand-600 text-white"
              : "text-white/55 hover:text-white"
          }`}
          aria-pressed={language === code}
        >
          {label}
        </button>
      ))}
    </div>
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on navigation and lock body scroll while it's open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open || !drawerRef.current) return undefined;

    const drawer = drawerRef.current;
    const previousFocus = document.activeElement;
    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusable = () => [...drawer.querySelectorAll(focusableSelector)];
    const firstControl = focusable()[0];
    const focusFrame = window.requestAnimationFrame(() => firstControl?.focus());

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;

      const controls = focusable();
      if (!controls.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [open]);

  const linkClasses = ({ isActive }) =>
    `relative py-2 text-sm font-semibold tracking-tight transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand-600 after:transition-transform after:duration-200 hover:text-white ${
      isActive ? "text-white after:scale-x-100" : "text-white/70"
    }`;

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-200 ${
        scrolled
          ? "bg-night-950/90 shadow-lg shadow-night-950/20 backdrop-blur-md"
          : "bg-gradient-to-b from-night-950/80 to-transparent"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between gap-6 py-3">
        <Link to="/" className="flex items-center gap-3" aria-label="Alfa Trade — home">
          <img src={logo} alt="" className="h-10 w-10 object-contain" />
          <span className="text-lg font-extrabold uppercase tracking-[0.18em] text-white">
            Alfa <span className="text-brand-500">Trade</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Main">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClasses}
              end={link.to === "/"}
              onMouseEnter={() => preloadRoute(link.to)}
              onFocus={() => preloadRoute(link.to)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitch />
          <Button to="/contact" size="md">
            Request a quote
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          onClick={() => setOpen(true)}
          className="ui-pressable grid h-11 w-11 place-items-center rounded-full text-white hover:bg-white/10 xl:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>

      {/* Drawer lives outside <header>: its backdrop-blur would otherwise
          become the containing block for these fixed elements. */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.12 : 0.18 }}
              className="fixed inset-0 z-[55] bg-night-950/60 backdrop-blur-sm xl:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              ref={drawerRef}
              id="mobile-navigation"
              initial={{
                opacity: shouldReduceMotion ? 0 : 1,
                transform: shouldReduceMotion ? "translateX(0%)" : "translateX(100%)",
              }}
              animate={{ opacity: 1, transform: "translateX(0%)" }}
              exit={{
                opacity: shouldReduceMotion ? 0 : 1,
                transform: shouldReduceMotion ? "translateX(0%)" : "translateX(100%)",
              }}
              transition={{
                type: "tween",
                duration: shouldReduceMotion ? 0.14 : 0.24,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="fixed inset-y-0 right-0 z-[60] flex w-full max-w-sm flex-col bg-night-950 px-7 py-6 xl:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img src={logo} alt="" className="h-8 w-8 object-contain" />
                  <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-white">
                    Alfa <span className="text-brand-500">Trade</span>
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="ui-pressable grid h-10 w-10 place-items-center rounded-full text-white/70 hover:bg-white/10 hover:text-white"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="mt-10 flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((link) => (
                  <div key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      onFocus={() => preloadRoute(link.to)}
                      onTouchStart={() => preloadRoute(link.to)}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-lg font-semibold tracking-tight transition-colors ${
                          isActive
                            ? "bg-brand-600/15 text-brand-500"
                            : "text-white/80 hover:bg-white/5 hover:text-white"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </div>
                ))}
              </nav>

              <div className="mt-auto space-y-4 border-t border-white/10 pt-6">
                <LanguageSwitch compact />
                <a
                  href={`tel:${site.phone}`}
                  className="flex items-center gap-3 text-sm font-semibold text-white/80 transition-colors hover:text-white"
                >
                  <Phone size={16} className="text-brand-500" />
                  {site.phoneDisplay}
                </a>
                <Button to="/contact" className="w-full">
                  Request a quote
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
