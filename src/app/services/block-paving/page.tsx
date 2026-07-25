"use client";

import { useEffect } from "react";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceTrustBadges from "@/components/services/ServiceTrustBadges";
import ServiceWhyChooseUs from "@/components/services/ServiceWhyChooseUs";
import ServiceOptions from "@/components/services/ServiceOptions";
import ServiceTimeline from "@/components/services/ServiceTimeline";
import ServiceContent from "@/components/services/ServiceContent";
import ServiceBeforeAfter from "@/components/services/ServiceBeforeAfter";
import ServiceGallery from "@/components/services/ServiceGallery";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import FAQ from "@/components/FAQ";
import QuoteFormSection from "@/components/QuoteFormSection";
import ServiceFinalCTA from "@/components/services/ServiceFinalCTA";
import ServiceMobileCTA from "@/components/services/ServiceMobileCTA";

export default function BlockPavingPage() {
  useEffect(() => {
    // Add .service-page class to body for CSS variable scoping
    document.body.classList.add("service-page");
    return () => document.body.classList.remove("service-page");
  }, []);

  return (
    <div className="service-page" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
      <ServiceHero />
      <ServiceTrustBadges />
      <ServiceWhyChooseUs />
      <ServiceOptions />
      <ServiceTimeline />
      <ServiceContent />
      <ServiceBeforeAfter />
      <ServiceGallery />
      <ServiceTestimonials />
      <FAQ />
      <QuoteFormSection />
      <ServiceFinalCTA />
      <ServiceMobileCTA />

      {/* Spacer for mobile sticky CTA */}
      <div className="h-[60px] lg:hidden" />
    </div>
  );
}
