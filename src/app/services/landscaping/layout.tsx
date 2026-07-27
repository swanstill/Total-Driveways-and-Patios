import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscaping Barnsley | Total Driveways & Patios",
  description:
    "Professional landscaping services across Barnsley and South Yorkshire. Garden design, turfing, fencing, planting, block paving and patios. Free quotes. Call 07722 151231.",
};

export default function LandscapingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
