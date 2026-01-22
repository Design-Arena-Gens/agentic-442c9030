import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Higihihih Studio",
  description:
    "Shape the perfect Higihihih chant with dynamic cadences, shimmering gradients, and playful controls.",
  openGraph: {
    title: "Higihihih Studio",
    description:
      "Craft the ultimate Higihihih greeting with interactive controls, lush gradients, and tempo-driven vibes.",
    url: "https://agentic-442c9030.vercel.app",
    siteName: "Higihihih Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Atmospheric gradient skyline representing a playful soundscape",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Higihihih Studio",
    description:
      "Spin the iconic Higihihih into a radiant chant with custom cadence, tempo, and vibe palettes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
