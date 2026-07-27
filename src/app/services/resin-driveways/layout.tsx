import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resin Driveways Barnsley | Total Driveways & Patios",
  description:
    "Expert resin-bound and resin-bonded driveway installation across Barnsley and South Yorkshire. SUDS-compliant, UV-stable, low maintenance. Free quotes. Call 07722 151231.",
  alternates: { canonical: "https://totaldrivewaysandpatios.co.uk/services/resin-driveways" },
  openGraph: {
    title: "Resin Driveways Barnsley | Total Driveways & Patios",
    description:
      "Expert resin-bound and resin-bonded driveway installation across Barnsley and South Yorkshire. SUDS-compliant, UV-stable, low maintenance. Free quotes.",
    url: "https://totaldrivewaysandpatios.co.uk/services/resin-driveways",
    images: [{ url: "/resin-driveway.jpg", width: 1200, height: 800, alt: "Resin driveway installation" }],
  },
};

export default function ResinDrivewaysLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
