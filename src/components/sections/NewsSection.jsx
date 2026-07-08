import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { news } from "../../data/news";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

const NewsCard = ({ item }) => (
  <motion.article
    variants={fadeUp}
    className="group cursor-pointer overflow-hidden rounded-2xl border border-night-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={item.image}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute left-4 top-4 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
        {item.category}
      </span>
    </div>
    <div className="p-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-night-400">{item.date}</p>
      <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight text-night-950 transition-colors group-hover:text-brand-600">
        {item.title}
      </h3>
      <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-night-500">{item.excerpt}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
        Read more
        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </div>
  </motion.article>
);

const NewsSection = () => (
  <section id="news" className="container-x scroll-mt-24 py-20 sm:py-28">
    <SectionTitle
      eyebrow="News & insights"
      title="The latest from Alfa Globe"
      lead="Product launches, network updates and what's changing in the regional energy market."
      align="center"
    />
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mt-14 grid gap-6 lg:grid-cols-3"
    >
      {news.map((item) => (
        <NewsCard key={item.slug} item={item} />
      ))}
    </motion.div>
  </section>
);

export default NewsSection;
