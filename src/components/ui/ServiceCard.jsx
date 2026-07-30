import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { fadeUp } from "../../lib/motion";
import { preloadRoute } from "../../lib/routePreload";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex flex-col rounded-2xl border border-night-100 bg-white p-7 shadow-card transition-[border-color,box-shadow] duration-200 hover:border-brand-200 hover:shadow-card-hover"
    >
      <div className="flex items-start justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-200 group-hover:bg-brand-600 group-hover:text-white">
          <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
        </div>
        <ArrowUpRight
          size={18}
          className="text-night-300 transition-[color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600"
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-5 text-lg font-bold tracking-tight text-night-950">{service.title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-night-500">{service.description}</p>
      <ul className="mt-5 space-y-2">
        {service.benefits.slice(0, 3).map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-sm text-night-600">
            <Check size={15} className="mt-0.5 shrink-0 text-brand-600" aria-hidden="true" />
            {benefit}
          </li>
        ))}
      </ul>
      <Link
        to={`/services#${service.slug}`}
        onMouseEnter={() => preloadRoute("/services")}
        onFocus={() => preloadRoute("/services")}
        className="mt-auto pt-6 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
      >
        Learn more
        <span className="absolute inset-0" aria-hidden="true" />
      </Link>
    </motion.article>
  );
};

export default ServiceCard;
