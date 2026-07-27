import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resin Driveways Barnsley | Total Driveways & Patios",
  description:
    "Expert resin-bound and resin-bonded driveway installation across Barnsley and South Yorkshire. SUDS-compliant, UV-stable, low maintenance. Free quotes. Call 07722 151231.",
};

export default function ResinDrivewaysLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
