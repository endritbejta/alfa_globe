import usePageMeta from "../hooks/usePageMeta";
import Hero from "../components/sections/Hero";
import PartnersMarquee from "../components/sections/PartnersMarquee";
import Overview from "../components/sections/Overview";
import ServicesGrid from "../components/sections/ServicesGrid";
import IndustriesGrid from "../components/sections/IndustriesGrid";
import WhyUs from "../components/sections/WhyUs";
import StatsBand from "../components/sections/StatsBand";
import ProductsShowcase from "../components/sections/ProductsShowcase";
import SustainabilityTeaser from "../components/sections/SustainabilityTeaser";
import Testimonials from "../components/sections/Testimonials";
import NewsSection from "../components/sections/NewsSection";
import CTASection from "../components/ui/CTASection";

const Home = () => {
  usePageMeta(
    null,
    "Alfa Globe supplies certified fuels, lubricants and energy solutions to businesses and industries across Kosovo — with four stations, bulk delivery and fleet programmes."
  );

  return (
    <>
      <Hero />
      <PartnersMarquee />
      <Overview />
      <ServicesGrid />
      <IndustriesGrid />
      <WhyUs />
      <StatsBand />
      <ProductsShowcase />
      <SustainabilityTeaser />
      <Testimonials />
      <NewsSection />
      <CTASection />
    </>
  );
};

export default Home;
