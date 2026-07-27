import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Block Paving Driveways Barnsley | Total Driveways & Patios",
  description:
    "Expert block paving driveway installation across Barnsley and South Yorkshire. Free quotes, premium materials, 5-year warranty. Call 07722 151231.",
  alternates: { canonical: "https://totaldrivewaysandpatios.co.uk/services/block-paving" },
  openGraph: {
    title: "Block Paving Driveways Barnsley | Total Driveways & Patios",
    description:
      "Expert block paving driveway installation across Barnsley and South Yorkshire. Free quotes, premium materials, 5-year warranty.",
    url: "https://totaldrivewaysandpatios.co.uk/services/block-paving",
    images: [{ url: "/hero-block-paving.jpg", width: 1200, height: 800, alt: "Block paving driveway installation" }],
  },
};

export default function BlockPavingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
