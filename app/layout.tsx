import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://coagentix.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Co.AI — AI That Thinks Beyond One Model",
    template: "%s — Co.AI",
  },
  description:
    "Co.AI combines multiple AI systems, intelligent routing, memory, and orchestration into one powerful platform.",
  keywords: [
    "Co.AI",
    "CoAgentix",
    "multi-agent AI",
    "AI orchestration",
    "TMAP",
    "retrieval-augmented agents",
    "AI routing",
  ],
  authors: [{ name: "Co.AI" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Co.AI — AI That Thinks Beyond One Model",
    description:
      "Multiple AI systems, intelligent routing, memory, and orchestration in one powerful platform.",
    siteName: "Co.AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Co.AI — AI That Thinks Beyond One Model",
    description:
      "Multiple AI systems, intelligent routing, memory, and orchestration in one powerful platform.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <LanguageProvider>
          <SmoothScroll>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
            >
              Skip to content
            </a>
            <Navbar />
            <main id="main">{children}</main>
            <Footer />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
