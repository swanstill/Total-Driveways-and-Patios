import Header from "@/components/Header";
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
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Process />
        <CoverageAreaSection />
        <Reviews />
        <FAQ />
        <QuoteFormSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
