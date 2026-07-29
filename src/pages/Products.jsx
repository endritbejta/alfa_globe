import { motion } from "framer-motion";
import usePageMeta from "../hooks/usePageMeta";
import PageHero from "../components/ui/PageHero";
import ProductCard from "../components/ui/ProductCard";
import CTASection from "../components/ui/CTASection";
import { products, productsIntro } from "../data/products";
import { stagger, viewportOnce } from "../lib/motion";
import gasNozzle from "../assets/img/gasolinenozzle.jpg";

const Products = () => {
  usePageMeta(
    "Products",
    "Diesel, petrol, premium fuels, lubricants, industrial oils, AdBlue and fleet cards — the full Alfa Trade product catalog with specifications."
  );

  return (
    <>
      <PageHero
        eyebrow={productsIntro.eyebrow}
        title={productsIntro.title}
        lead={productsIntro.lead}
        image={gasNozzle}
        crumbs={[{ label: "Products" }]}
      />
      <section className="container-x py-20 sm:py-28">
        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </motion.div>
      </section>
      <CTASection
        title="Need help matching product to equipment?"
        lead="Tell us the vehicle, machine or application. We will identify the relevant specification, pack size and supply method."
        primary={{ label: "Talk to a specialist", to: "/contact" }}
        secondary={{ label: "See our services", to: "/services" }}
      />
    </>
  );
};

export default Products;
