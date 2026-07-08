import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "../../lib/motion";

const ProductCard = ({ product }) => {
  const Icon = product.icon;
  return (
    <motion.article
      variants={fadeUp}
      className="group relative overflow-hidden rounded-2xl border border-night-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="relative h-44 overflow-hidden bg-night-900">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="bg-grid-dark grid h-full w-full place-items-center">
            <Icon size={44} strokeWidth={1.2} className="text-white/40" aria-hidden="true" />
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-night-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
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
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
        >
          View details
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
          <span className="absolute inset-0" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
};

export default ProductCard;
