"use client";

import { useEffect } from "react";
import LandscapingHero from "@/components/services/LandscapingHero";
import ServiceTrustBadges from "@/components/services/ServiceTrustBadges";
import LandscapingWhyChooseUs from "@/components/services/LandscapingWhyChooseUs";
import LandscapingOptions from "@/components/services/LandscapingOptions";
import LandscapingTimeline from "@/components/services/LandscapingTimeline";
import LandscapingContent from "@/components/services/LandscapingContent";
import LandscapingBeforeAfter from "@/components/services/LandscapingBeforeAfter";
import LandscapingGallery from "@/components/services/LandscapingGallery";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import FAQ from "@/components/FAQ";
import QuoteFormSection from "@/components/QuoteFormSection";
import ServiceFinalCTA from "@/components/services/ServiceFinalCTA";
import ServiceMobileCTA from "@/components/services/ServiceMobileCTA";

export default function LandscapingPage() {
  useEffect(() => {
    document.body.classList.add("service-page");
    return () => document.body.classList.remove("service-page");
  }, []);

  return (
    <div className="service-page" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
      <LandscapingHero />
      <ServiceTrustBadges />
      <LandscapingWhyChooseUs />
      <LandscapingOptions />
      <LandscapingTimeline />
      <LandscapingContent />
      <LandscapingBeforeAfter />
      <LandscapingGallery />
      <ServiceTestimonials />
      <FAQ />
      <QuoteFormSection />
      <ServiceFinalCTA />
      <ServiceMobileCTA />
    </div>
  );
}
