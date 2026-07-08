import useCountUp from "../../hooks/useCountUp";

/** Animated counter stat, e.g. "12+ Years of Experience". */
const StatCard = ({ stat, light = false }) => {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div ref={ref} className="text-center">
      <p
        className={`text-4xl font-extrabold tracking-tight sm:text-5xl ${
          light ? "text-white" : "text-night-950"
        }`}
      >
        {value.toLocaleString("en-US")}
        <span className="text-brand-600">{stat.suffix}</span>
      </p>
      <p
        className={`mt-2 text-sm font-medium uppercase tracking-wider ${
          light ? "text-white/55" : "text-night-500"
        }`}
      >
        {stat.label}
      </p>
    </div>
  );
};

export default StatCard;
