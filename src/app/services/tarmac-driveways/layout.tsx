import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarmac Driveways Barnsley | Total Driveways & Patios",
  description:
    "Professional tarmac driveway installation across Barnsley and South Yorkshire. Durable, cost-effective, fast installation. Free quotes, 5-year warranty. Call 0800 994 9855.",
  alternates: { canonical: "https://totaldrivewaysandpatios.co.uk/services/tarmac-driveways" },
  openGraph: {
    title: "Tarmac Driveways Barnsley | Total Driveways & Patios",
    description:
      "Professional tarmac driveway installation across Barnsley and South Yorkshire. Durable, cost-effective, fast installation. Free quotes, 5-year warranty.",
    url: "https://totaldrivewaysandpatios.co.uk/services/tarmac-driveways",
    images: [{ url: "/tarmac.jpg", width: 1200, height: 800, alt: "Tarmac driveway installation" }],
  },
};

export default function TarmacDrivewaysLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
