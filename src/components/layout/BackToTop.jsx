import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{
            opacity: 0,
            transform: shouldReduceMotion ? "none" : "translateY(6px) scale(0.94)",
          }}
          animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
          exit={{
            opacity: 0,
            transform: shouldReduceMotion ? "none" : "translateY(6px) scale(0.94)",
          }}
          transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" })
          }
          aria-label="Back to top"
          className="ui-pressable fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-night-950 text-white shadow-card-hover hover:bg-brand-600"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
