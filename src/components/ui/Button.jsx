import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { preloadRoute } from "../../lib/routePreload";

const variants = {
  primary:
    "bg-brand-600 text-white shadow-sm shadow-brand-600/30 hover:bg-brand-700 hover:shadow-md hover:shadow-brand-600/40 focus-visible:outline-brand-600",
  dark: "bg-night-950 text-white hover:bg-night-800 focus-visible:outline-night-950",
  outline:
    "border border-night-300 text-night-800 hover:border-night-950 hover:bg-night-950 hover:text-white focus-visible:outline-night-950",
  "outline-light":
    "border border-white/40 text-white hover:bg-white hover:text-night-950 focus-visible:outline-white",
  ghost: "text-brand-600 hover:text-brand-700",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

/**
 * Renders a <Link> when `to` is set, an <a> when `href` is set,
 * otherwise a <button>.
 */
const Button = ({
  to,
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  children,
  ...rest
}) => {
  const classes = `ui-pressable group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          size={size === "lg" ? 18 : 16}
          className="transition-transform duration-200 ease-out-expo group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (to)
    return (
      <Link
        to={to}
        className={classes}
        {...rest}
        onMouseEnter={(event) => {
          preloadRoute(to);
          rest.onMouseEnter?.(event);
        }}
        onFocus={(event) => {
          preloadRoute(to);
          rest.onFocus?.(event);
        }}
      >
        {content}
      </Link>
    );
  if (href)
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
};

export default Button;
