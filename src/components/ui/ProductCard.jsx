import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "../../lib/motion";
import { preloadRoute } from "../../lib/routePreload";

const ProductCard = ({ product }) => {
  const Icon = product.icon;
  return (
    <motion.article
      variants={fadeUp}
      className="hover-lift group rounded-2xl border border-night-100 bg-white shadow-card hover:border-brand-200 hover:shadow-card-hover"
    >
      <div className="relative h-44 overflow-hidden rounded-t-[15px] bg-night-900">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover opacity-90 transition-transform duration-500 ease-out-expo group-hover:scale-[1.05]"
          />
        ) : (
          <div className="bg-grid-dark grid h-full w-full place-items-center">
            <Icon size={44} strokeWidth={1.2} className="text-white/40" aria-hidden="true" />
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-night-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
          {product.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold tracking-tight text-night-950">{product.name}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-night-500">
          {product.summary}
        </p>
        <Link
          to={`/products/${product.slug}`}
          onMouseEnter={() => preloadRoute(`/products/${product.slug}`)}
          onFocus={() => preloadRoute(`/products/${product.slug}`)}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors duration-200 hover:text-brand-700"
        >
          View details
          <ArrowRight
            size={15}
            className="transition-transform duration-200 ease-out-expo group-hover:translate-x-1"
            aria-hidden="true"
          />
          <span className="absolute inset-0" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
};

export default ProductCard;
