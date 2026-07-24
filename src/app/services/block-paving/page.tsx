"use client";

import { useEffect } from "react";
import ServiceStickyBar from "@/components/services/ServiceStickyBar";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceTrustBadges from "@/components/services/ServiceTrustBadges";
import ServiceWhyChooseUs from "@/components/services/ServiceWhyChooseUs";
import ServiceOptions from "@/components/services/ServiceOptions";
import ServiceTimeline from "@/components/services/ServiceTimeline";
import ServiceContent from "@/components/services/ServiceContent";
import ServiceBeforeAfter from "@/components/services/ServiceBeforeAfter";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceGallery from "@/components/services/ServiceGallery";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import ServiceVideo from "@/components/services/ServiceVideo";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceQuoteForm from "@/components/services/ServiceQuoteForm";
import ServiceFinalCTA from "@/components/services/ServiceFinalCTA";
import ServiceFooter from "@/components/services/ServiceFooter";
import ServiceMobileCTA from "@/components/services/ServiceMobileCTA";

export default function BlockPavingPage() {
  useEffect(() => {
    // Add .service-page class to body for CSS variable scoping
    document.body.classList.add("service-page");
    return () => document.body.classList.remove("service-page");
  }, []);

  return (
    <main className="service-page overflow-hidden" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
      <ServiceStickyBar />
      <ServiceHero />
      <ServiceTrustBadges />
      <ServiceWhyChooseUs />
      <ServiceOptions />
      <ServiceTimeline />
      <ServiceContent />
      <ServiceBeforeAfter />
      <ServiceBenefits />
      <ServiceGallery />
      <ServiceTestimonials />
      <ServiceVideo />
      <ServiceFAQ />
      <ServiceQuoteForm />
      <ServiceFinalCTA />
      <ServiceFooter />
      <ServiceMobileCTA />

      {/* Spacer for mobile sticky CTA */}
      <div className="h-[60px] lg:hidden" />
    </main>
  );
}
