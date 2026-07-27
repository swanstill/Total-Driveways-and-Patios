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
  alternates: { canonical: "https://totaldrivewaysandpatios.co.uk" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Total Driveways and Patios",
  image: "https://totaldrivewaysandpatios.co.uk/hero-image.jpg",
  url: "https://totaldrivewaysandpatios.co.uk",
  telephone: "+447722151231",
  email: "info@totaldriveways.co.uk",
  description:
    "Family-run driveway, patio and landscaping specialists serving Barnsley and South Yorkshire.",
  areaServed: "Barnsley, South Yorkshire",
  priceRange: "££",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barnsley",
    addressRegion: "South Yorkshire",
    addressCountry: "GB",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "50",
    bestRating: "5",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
