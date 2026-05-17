import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "900"]
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "HOH - Heart of Hindustan | Premium Indian Makhana",
  description:
    "Discover HOH premium roasted makhana in multiple flavors. A healthy, Indian-sourced snack available on leading marketplaces.",
  keywords: ["HOH", "Heart of Hindustan", "makhana", "fox nuts", "healthy Indian snack", "premium makhana"],
  openGraph: {
    title: "HOH - India's Premium Makhana Experience",
    description: "Premium roasted fox nuts for healthy modern India.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
