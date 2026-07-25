"use client";

import { useEffect } from "react";
import ResinHero from "@/components/services/ResinHero";
import ServiceTrustBadges from "@/components/services/ServiceTrustBadges";
import ResinWhyChooseUs from "@/components/services/ResinWhyChooseUs";
import ResinOptions from "@/components/services/ResinOptions";
import ResinTimeline from "@/components/services/ResinTimeline";
import ResinContent from "@/components/services/ResinContent";
import ResinBeforeAfter from "@/components/services/ResinBeforeAfter";
import ResinGallery from "@/components/services/ResinGallery";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import FAQ from "@/components/FAQ";
import QuoteFormSection from "@/components/QuoteFormSection";
import ServiceFinalCTA from "@/components/services/ServiceFinalCTA";
import ServiceMobileCTA from "@/components/services/ServiceMobileCTA";

export default function ResinDrivewaysPage() {
  useEffect(() => {
    // Add .service-page class to body for CSS variable scoping
    document.body.classList.add("service-page");
    return () => document.body.classList.remove("service-page");
  }, []);

  return (
    <div className="service-page" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
      <ResinHero />
      <ServiceTrustBadges />
      <ResinWhyChooseUs />
      <ResinOptions />
      <ResinTimeline />
      <ResinContent />
      <ResinBeforeAfter />
      <ResinGallery />
      <ServiceTestimonials />
      <FAQ />
      <QuoteFormSection />
      <ServiceFinalCTA />
      <ServiceMobileCTA />
    </div>
  );
}
