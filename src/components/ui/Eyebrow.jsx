/** Small red-accented section label, e.g. "OUR SERVICES". */
const Eyebrow = ({ children, light = false, className = "" }) => (
  <span
    className={`inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] ${
      light ? "text-white/70" : "text-brand-600"
    } ${className}`}
  >
    <span className="h-px w-8 bg-brand-600" aria-hidden="true" />
    {children}
  </span>
);

export default Eyebrow;
