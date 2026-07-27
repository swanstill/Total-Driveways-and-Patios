import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Total Driveways and Patios",
  description:
    "Total Driveways and Patios privacy policy explains how we collect, use, store and protect your personal data. Based in Barnsley, serving South Yorkshire.",
  alternates: { canonical: "https://totaldrivewaysandpatios.co.uk/privacy-policy" },
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
