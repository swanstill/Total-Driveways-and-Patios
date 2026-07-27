import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Total Driveways and Patios",
  description:
    "Get in touch with Total Driveways and Patios for a free, no-obligation quote. Based in Barnsley, serving all South Yorkshire. Call 07722 151231 or request a quote online.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
