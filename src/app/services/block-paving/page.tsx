"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceOptions from "@/components/services/ServiceOptions";
import ServiceTimeline from "@/components/services/ServiceTimeline";
import ServiceContent from "@/components/services/ServiceContent";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceQuoteForm from "@/components/services/ServiceQuoteForm";
import ServiceFinalCTA from "@/components/services/ServiceFinalCTA";
import ServiceFooter from "@/components/services/ServiceFooter";
import ServiceMobileCTA from "@/components/services/ServiceMobileCTA";

export default function BlockPavingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - winHeight;
      const progress = Math.min((window.scrollY / docHeight) * 100, 100);
      setScrollY(progress);
      setShowScrollTop(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="service-page">
      {/* Reading Progress Bar */}
      <div className="reading-progress" style={{ width: `${scrollY}%` }} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Block Paving Driveways",
            provider: {
              "@type": "LocalBusiness",
              name: "Total Driveways and Patios",
              telephone: "07722151231",
              areaServed: ["Barnsley", "Sheffield", "Rotherham", "Doncaster", "Wakefield", "Leeds", "Bradford", "Huddersfield", "Chesterfield"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Barnsley",
                addressRegion: "South Yorkshire",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "50",
              },
            },
            description: "Professional block paving driveway installation in Barnsley and South Yorkshire. Free quotes, 5-year guarantee, family-run since 1990.",
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://totaldriveways.co.uk/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://totaldriveways.co.uk/services" },
              { "@type": "ListItem", position: 3, name: "Block Paving Driveways", item: "https://totaldriveways.co.uk/services/block-paving" },
            ],
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "How much does a block paving driveway cost?", acceptedAnswer: { "@type": "Answer", text: "The cost varies depending on the size of the area, the type of blocks you choose, the amount of preparation required, and whether any drainage work is needed. During our free site visit, we measure the area accurately and provide a detailed written quotation with no hidden costs." } },
              { "@type": "Question", name: "How long does a block paving installation take?", acceptedAnswer: { "@type": "Answer", text: "A typical domestic driveway takes between 3 and 7 working days, depending on the size and complexity. This includes excavation, sub-base preparation, edging, laying the blocks, compacting, sanding and sealing." } },
              { "@type": "Question", name: "Do you offer a guarantee on block paving work?", acceptedAnswer: { "@type": "Answer", text: "Yes. All our block paving installations come with a 5-year workmanship guarantee. We stand behind the quality of our preparation and installation." } },
              { "@type": "Question", name: "What patterns are available for block paving?", acceptedAnswer: { "@type": "Answer", text: "The most popular patterns are herringbone (45° or 90°), stretcher bond, basket weave and random mix. During your free consultation, we'll show you samples and discuss which pattern suits your property best." } },
            ],
          }),
        }}
      />

      {/* Content */}
      <main>
        <ServiceHero />
        <div className="svc-gap" />
        <ServiceOptions />
        <ServiceTimeline />
        <ServiceContent />
        <ServiceFAQ />
        <ServiceQuoteForm />
        <ServiceFinalCTA />
      </main>

      <ServiceFooter />
      <ServiceMobileCTA />

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`svc-scroll-top ${showScrollTop ? "visible" : ""}`}
        aria-label="Scroll to top"
      >
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[20px] h-[20px]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
