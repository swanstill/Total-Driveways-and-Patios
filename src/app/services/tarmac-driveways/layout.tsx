import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarmac Driveways Barnsley | Total Driveways & Patios",
  description:
    "Professional tarmac driveway installation across Barnsley and South Yorkshire. Durable, cost-effective, fast installation. Free quotes, 5-year warranty. Call 07722 151231.",
};

export default function TarmacDrivewaysLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
