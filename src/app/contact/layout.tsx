import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Total Driveways and Patios",
  description:
    "Get in touch with Total Driveways and Patios for a free, no-obligation quote. Based in Barnsley, serving all South Yorkshire. Call 0800 994 9855 or request a quote online.",
  alternates: { canonical: "https://totaldrivewaysandpatios.co.uk/contact" },
  openGraph: {
    title: "Contact Us | Total Driveways and Patios",
    description:
      "Get in touch with Total Driveways and Patios for a free, no-obligation quote. Based in Barnsley, serving all South Yorkshire. Call 0800 994 9855 or request a quote online.",
    url: "https://totaldrivewaysandpatios.co.uk/contact",
    images: [{ url: "/hero-image.jpg", width: 1200, height: 800, alt: "Contact Total Driveways and Patios" }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
