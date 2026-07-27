"use client";

import { useEffect } from "react";
import TarmacHero from "@/components/services/TarmacHero";
import ServiceTrustBadges from "@/components/services/ServiceTrustBadges";
import TarmacWhyChooseUs from "@/components/services/TarmacWhyChooseUs";
import TarmacOptions from "@/components/services/TarmacOptions";
import TarmacTimeline from "@/components/services/TarmacTimeline";
import TarmacContent from "@/components/services/TarmacContent";
import TarmacBeforeAfter from "@/components/services/TarmacBeforeAfter";
import TarmacGallery from "@/components/services/TarmacGallery";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import FAQ from "@/components/FAQ";
import QuoteFormSection from "@/components/QuoteFormSection";
import ServiceFinalCTA from "@/components/services/ServiceFinalCTA";
export default function TarmacDrivewaysPage() {
  useEffect(() => {
    document.body.classList.add("service-page");
    return () => document.body.classList.remove("service-page");
  }, []);

  return (
    <div className="service-page" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
      <TarmacHero />
      <ServiceTrustBadges />
      <TarmacWhyChooseUs />
      <TarmacOptions />
      <TarmacTimeline />
      <TarmacContent />
      <TarmacBeforeAfter />
      <TarmacGallery />
      <ServiceTestimonials />
      <FAQ />
      <QuoteFormSection />
      <ServiceFinalCTA />
    </div>
  );
}
