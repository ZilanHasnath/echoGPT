import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "EchoGPT - AI-Driven Productivity Solutions",
  description: "A calm, capable AI assistant for work, learning, and everyday questions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-dvh overflow-hidden ${fraunces.variable} ${inter.variable}`}>
      <body className="h-dvh overflow-hidden font-sans antialiased">{children}</body>
    </html>
  );
}