import { useState } from "react";
import { Plus } from "lucide-react";
import Collapse from "./Collapse";

const FAQItem = ({ item, open, onToggle, id }) => (
  <div className="border-b border-night-100">
    <button
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={id}
      className="group flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
    >
      <span className="text-base font-semibold text-night-950 transition-colors duration-200 group-hover:text-brand-600 sm:text-lg">
        {item.question}
      </span>
      <span
        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-[rotate,color,background-color,border-color] duration-300 ease-out-expo ${
          open
            ? "rotate-45 border-brand-600 bg-brand-600 text-white"
            : "border-night-200 text-night-500 group-hover:border-brand-600 group-hover:text-brand-600"
        }`}
      >
        <Plus size={16} aria-hidden="true" />
      </span>
    </button>
    <Collapse id={id} open={open}>
      <p className="pb-6 pr-12 leading-relaxed text-night-500">{item.answer}</p>
    </Collapse>
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
          id={`faq-answer-${i}`}
        />
      ))}
    </div>
  );
};

export default FAQAccordion;
