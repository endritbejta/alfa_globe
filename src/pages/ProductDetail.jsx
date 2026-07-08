import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, Wrench } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import PageHero from "../components/ui/PageHero";
import ProductCard from "../components/ui/ProductCard";
import CTASection from "../components/ui/CTASection";
import Reveal from "../components/ui/Reveal";
import NotFound from "./NotFound";
import { products } from "../data/products";
import { stagger, viewportOnce } from "../lib/motion";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  usePageMeta(product?.name, product?.summary);

  if (!product) return <NotFound />;

  const related = products.filter((p) => p.slug !== slug && p.category === product.category);
  const others = products.filter((p) => p.slug !== slug && p.category !== product.category);
  const suggestions = [...related, ...others].slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={product.category}
        title={product.name}
        lead={product.summary}
        image={product.image}
        crumbs={[{ label: "Products", to: "/products" }, { label: product.name }]}
      />

      <section className="container-x py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-night-950 sm:text-3xl">
                Overview
              </h2>
              <p className="mt-5 leading-relaxed text-night-600">{product.description}</p>
            </Reveal>

            <Reveal delay={0.1} className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-night-950 sm:text-3xl">
                Applications
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {product.applications.map((app) => (
                  <li
                    key={app}
                    className="flex items-start gap-3 rounded-xl border border-night-100 bg-white p-4 text-sm text-night-700 shadow-card"
                  >
                    <Wrench size={15} className="mt-0.5 shrink-0 text-brand-600" aria-hidden="true" />
                    {app}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15} className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-night-950 sm:text-3xl">
                Advantages
              </h2>
              <ul className="mt-6 space-y-3.5">
                {product.advantages.map((adv) => (
                  <li key={adv} className="flex items-start gap-3 text-night-700">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                      <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    {adv}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Specs sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="rounded-2xl bg-night-950 p-8 text-white">
                <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-brand-500">
                  Specifications
                </h2>
                <dl className="mt-6 divide-y divide-white/10">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="flex items-baseline justify-between gap-4 py-3.5">
                      <dt className="text-sm text-white/55">{spec.label}</dt>
                      <dd className="text-right text-sm font-semibold">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold transition-colors hover:bg-brand-500"
                >
                  Request this product
                  <ChevronRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Related products */}
      <section className="bg-night-50 py-20 sm:py-24">
        <div className="container-x">
          <h2 className="text-2xl font-bold tracking-tight text-night-950 sm:text-3xl">
            Related products
          </h2>
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {suggestions.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ProductDetail;
