import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patios Barnsley | Total Driveways & Patios",
  description:
    "Expert patio installation across Barnsley and South Yorkshire. Indian sandstone, porcelain, block paving patios. Free quotes, premium materials, 5-year guarantee. Call 07722 151231.",
  alternates: { canonical: "https://totaldrivewaysandpatios.co.uk/services/patios" },
  openGraph: {
    title: "Patios Barnsley | Total Driveways & Patios",
    description:
      "Expert patio installation across Barnsley and South Yorkshire. Indian sandstone, porcelain, block paving patios. Free quotes, premium materials, 5-year guarantee.",
    url: "https://totaldrivewaysandpatios.co.uk/services/patios",
    images: [{ url: "/patios.jpg", width: 1200, height: 800, alt: "Patio installation in Barnsley" }],
  },
};

export default function PatiosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
