import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Block Paving Driveways Barnsley | Total Driveways and Patios",
  description:
    "Professional block paving driveway installation in Barnsley and South Yorkshire. Free quotes, 5-year guarantee, family-run since 1990. Herringbone, basket weave & more.",
  openGraph: {
    title: "Block Paving Driveways Barnsley | Total Driveways and Patios",
    description:
      "Professional block paving driveway installation in Barnsley and South Yorkshire. Free quotes, 5-year guarantee.",
    type: "website",
    locale: "en_GB",
    siteName: "Total Driveways and Patios",
  },
  twitter: {
    card: "summary_large_image",
    title: "Block Paving Driveways Barnsley | Total Driveways and Patios",
    description:
      "Professional block paving driveway installation in Barnsley and South Yorkshire. Free quotes, 5-year guarantee.",
  },
  alternates: {
    canonical: "https://totaldriveways.co.uk/services/block-paving",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlockPavingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
