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
    <html lang="ko">
      <body className={`${outfit.variable} font-sans antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-primary text-background font-bold rounded-lg shadow-lg"
        >
          본문 바로가기
        </a>
        <SmoothScroller />
        <Navbar />
        <main id="main">
          {children}
        </main>
        <Footer />
        <ContactModal />
      </body>
    </html>
  );
}
