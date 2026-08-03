import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscaping Barnsley | Total Driveways & Patios",
  description:
    "Professional landscaping services across Barnsley and South Yorkshire. Garden design, turfing, fencing, planting, block paving and patios. Free quotes. Call 0800 994 9855.",
  alternates: { canonical: "https://totaldrivewaysandpatios.co.uk/services/landscaping" },
  openGraph: {
    title: "Landscaping Barnsley | Total Driveways & Patios",
    description:
      "Professional landscaping services across Barnsley and South Yorkshire. Garden design, turfing, fencing, planting, block paving and patios. Free quotes.",
    url: "https://totaldrivewaysandpatios.co.uk/services/landscaping",
    images: [{ url: "/landscaping.jpg", width: 1200, height: 800, alt: "Landscaping services in Barnsley" }],
  },
};

export default function LandscapingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
