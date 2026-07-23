import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Total Driveways and Patios | Driveways, Patios & Landscaping",
  description:
    "Professional block paving, resin, tarmac, patios and landscaping in Cardiff and South Wales. Request a free, no-obligation quote from Total Driveways and Patios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
