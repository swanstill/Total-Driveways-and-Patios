import type { Metadata } from "next";
import { Sora, Inter, Manrope, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceMobileCTA from "@/components/services/ServiceMobileCTA";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://totaldrivewaysandpatios.co.uk"),
  title: "Total Driveways and Patios | Driveways, Patios & Landscaping",
  description:
    "Professional block paving, resin, tarmac, patios and landscaping across Barnsley and South Yorkshire. Request a free, no-obligation quote from Total Driveways and Patios.",
  icons: [{ rel: "icon", url: "/favicon.png" }],
  openGraph: {
    type: "website",
    siteName: "Total Driveways and Patios",
    title: "Total Driveways and Patios | Driveways, Patios & Landscaping Barnsley",
    description:
      "Professional block paving, resin, tarmac, patios and landscaping across Barnsley and South Yorkshire. Free quotes, premium workmanship.",
    url: "https://totaldrivewaysandpatios.co.uk",
    locale: "en_GB",
    images: [{ url: "/hero-image.jpg", width: 1200, height: 800, alt: "Total Driveways and Patios" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Total Driveways and Patios | Driveways, Patios & Landscaping Barnsley",
    description:
      "Professional block paving, resin, tarmac, patios and landscaping across Barnsley and South Yorkshire. Free quotes, premium workmanship.",
    images: ["/hero-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${manrope.variable} ${playfairDisplay.variable}`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ServiceMobileCTA />
        <CookieBanner />
      </body>
    </html>
  );
}
