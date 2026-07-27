import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patios Barnsley | Total Driveways & Patios",
  description:
    "Expert patio installation across Barnsley and South Yorkshire. Indian sandstone, porcelain, block paving patios. Free quotes, premium materials, 5-year guarantee. Call 07722 151231.",
};

export default function PatiosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
