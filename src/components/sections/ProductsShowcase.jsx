import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import ProductCard from "../ui/ProductCard";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { products, productsIntro } from "../../data/products";
import { stagger, viewportOnce } from "../../lib/motion";

const featured = ["petrol", "diesel", "adblue", "lpg"];
const showcase = featured.map((slug) => products.find((product) => product.slug === slug));

/** Home page teaser: the four everyday fuels + link to the catalog. */
const ProductsShowcase = () => (
  <section className="bg-night-50 py-20 sm:py-28">
    <div className="container-x">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionTitle {...productsIntro} />
        <Reveal delay={0.2}>
          <Button to="/products" variant="outline" withArrow>
            Full catalog
          </Button>
        </Reveal>
      </div>
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {showcase.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProductsShowcase;
