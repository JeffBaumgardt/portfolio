import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-eight-navy-22.vercel.app"),
  title: {
    default: "Jeff Baumgardt — Senior Full-Stack Engineer",
    template: "%s · Jeff Baumgardt",
  },
  description:
    "Senior full-stack engineer in Denver. Production React, Next.js, TypeScript, payments, auth, real-time systems, and AI-backed product surfaces. Selected live demos for recruiters.",
  keywords: [
    "Jeff Baumgardt",
    "Senior Frontend Engineer",
    "Full-Stack Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Denver",
    "portfolio",
  ],
  authors: [
    { name: "Jeff Baumgardt", url: "https://github.com/jeffbaumgardt" },
  ],
  creator: "Jeff Baumgardt",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Jeff Baumgardt — Senior Full-Stack Engineer",
    description:
      "Selected product work: multi-agent AI, Stripe payments, multi-tenant auth, real-time logistics, and more — live on Vercel.",
    siteName: "Jeff Baumgardt",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeff Baumgardt — Senior Full-Stack Engineer",
    description:
      "Selected product work: multi-agent AI, Stripe payments, multi-tenant auth, real-time logistics, and more.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
