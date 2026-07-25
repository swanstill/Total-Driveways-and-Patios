import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import CoverageAreaSection from "@/components/CoverageAreaSection";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import QuoteFormSection from "@/components/QuoteFormSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <QuoteFormSection />
      <Process />
      <CoverageAreaSection />
      <Reviews />
      <FAQ />
      <FinalCTA />
    </>
  );
}
