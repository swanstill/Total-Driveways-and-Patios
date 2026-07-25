"use client";

import { useEffect } from "react";
import PatiosHero from "@/components/services/PatiosHero";
import ServiceTrustBadges from "@/components/services/ServiceTrustBadges";
import PatiosWhyChooseUs from "@/components/services/PatiosWhyChooseUs";
import PatiosOptions from "@/components/services/PatiosOptions";
import PatiosTimeline from "@/components/services/PatiosTimeline";
import PatiosContent from "@/components/services/PatiosContent";
import PatiosBeforeAfter from "@/components/services/PatiosBeforeAfter";
import PatiosGallery from "@/components/services/PatiosGallery";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import FAQ from "@/components/FAQ";
import QuoteFormSection from "@/components/QuoteFormSection";
import ServiceFinalCTA from "@/components/services/ServiceFinalCTA";
import ServiceMobileCTA from "@/components/services/ServiceMobileCTA";

export default function PatiosPage() {
  useEffect(() => {
    document.body.classList.add("service-page");
    return () => document.body.classList.remove("service-page");
  }, []);

  return (
    <div className="service-page" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
      <PatiosHero />
      <ServiceTrustBadges />
      <PatiosWhyChooseUs />
      <PatiosOptions />
      <PatiosTimeline />
      <PatiosContent />
      <PatiosBeforeAfter />
      <PatiosGallery />
      <ServiceTestimonials />
      <FAQ />
      <QuoteFormSection />
      <ServiceFinalCTA />
      <ServiceMobileCTA />
    </div>
  );
}
