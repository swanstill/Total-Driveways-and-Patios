import ContactHero from "@/components/contact/ContactHero";
import ContactSiteVisit from "@/components/contact/ContactSiteVisit";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactProcess from "@/components/contact/ContactProcess";
import QuoteFormSection from "@/components/QuoteFormSection";
import FAQ from "@/components/FAQ";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactSiteVisit />
      <ContactDetails />
      <QuoteFormSection />
      <ContactProcess />
      <FAQ />
    </main>
  );
}
