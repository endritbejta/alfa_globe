import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const FAQItem = ({ item, open, onToggle }) => (
  <div className="border-b border-night-100">
    <button
      onClick={onToggle}
      aria-expanded={open}
      className="flex w-full items-center justify-between gap-4 py-5 text-left"
    >
      <span className="text-base font-semibold text-night-950 sm:text-lg">{item.question}</span>
      <span
        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
          open
            ? "rotate-45 border-brand-600 bg-brand-600 text-white"
            : "border-night-200 text-night-500"
        }`}
      >
        <Plus size={16} aria-hidden="true" />
      </span>
    </button>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="pb-6 pr-12 leading-relaxed text-night-500">{item.answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="border-t border-night-100">
      {items.map((item, i) => (
        <FAQItem
          key={item.question}
          item={item}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  );
};

export default FAQAccordion;
