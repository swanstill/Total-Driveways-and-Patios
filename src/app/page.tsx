import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Total Driveways and Patios | Driveways, Patios & Landscaping Barnsley",
  description:
    "Professional block paving, resin, tarmac, patios and landscaping across Barnsley and South Yorkshire. Free quotes, premium workmanship, 5-year guarantee.",
};

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
