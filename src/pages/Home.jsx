import usePageMeta from "../hooks/usePageMeta";
import Hero from "../components/sections/Hero";
import PartnersMarquee from "../components/sections/PartnersMarquee";
import Overview from "../components/sections/Overview";
import ServicesGrid from "../components/sections/ServicesGrid";
import IndustriesGrid from "../components/sections/IndustriesGrid";
import WhyUs from "../components/sections/WhyUs";
import ProductsShowcase from "../components/sections/ProductsShowcase";
import Testimonials from "../components/sections/Testimonials";
import CTASection from "../components/ui/CTASection";

const Home = () => {
  usePageMeta(
    null,
    "Alfa Trade supplies diesel, petrol, gas and AdBlue across Kosovo, at four stations and with bulk delivery to your site."
  );

  return (
    <>
      <Hero />
      <PartnersMarquee />
      <Overview />
      <ServicesGrid />
      <IndustriesGrid />
      <WhyUs />
      <ProductsShowcase />
      <Testimonials />
      <CTASection />
    </>
  );
};

export default Home;
