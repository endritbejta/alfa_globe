/**
 * Animates height between 0 and the content's natural height by transitioning
 * grid rows (0fr → 1fr), so there is no JS measuring. Collapsed content is
 * `invisible`, which also removes it from the tab order and accessibility tree.
 */
const Collapse = ({ open, id, className = "", children }) => (
  <div
    id={id}
    className={`grid transition-[grid-template-rows] duration-300 ease-out-expo motion-reduce:transition-none ${
      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
    }`}
  >
    <div
      className={`min-h-0 overflow-hidden transition-[opacity,visibility] duration-300 motion-reduce:transition-none ${
        open ? "visible opacity-100" : "invisible opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  </div>
);

export default Collapse;
