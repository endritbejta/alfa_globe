import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeUp, stagger } from "../../lib/motion";
import Eyebrow from "./Eyebrow";

/**
 * Shared dark hero band for inner pages: breadcrumb, eyebrow, title, lead.
 * Optional background image rendered with a heavy dark overlay.
 */
const PageHero = ({ eyebrow, title, lead, image, crumbs = [] }) => (
  <section className="relative overflow-hidden bg-night-950 pb-20 pt-36 sm:pb-24 sm:pt-44">
    {image && (
      <>
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night-950 via-night-950/80 to-night-950/40" />
      </>
    )}
    <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
    <div className="container-x relative">
      <motion.div variants={stagger(0.05, 0.04)} initial="hidden" animate="visible">
        <motion.nav variants={fadeUp} aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/50">
            <li>
              <Link to="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                <ChevronRight size={14} aria-hidden="true" />
                {crumb.to ? (
                  <Link to={crumb.to} className="transition-colors hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </motion.nav>
        {eyebrow && (
          <motion.div variants={fadeUp}>
            <Eyebrow light>{eyebrow}</Eyebrow>
          </motion.div>
        )}
        <motion.h1
          variants={fadeUp}
          className="mt-4 max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {lead && (
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            {lead}
          </motion.p>
        )}
      </motion.div>
    </div>
  </section>
);

export default PageHero;
