import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import SmoothScroller from "@/components/layout/SmoothScroller";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactModal from "@/components/ui/ContactModal";
import { META } from "@/lib/content/landing";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <SmoothScroller />
        <Navbar />
        {children}
        <Footer />
        <ContactModal />
      </body>
    </html>
  );
}
