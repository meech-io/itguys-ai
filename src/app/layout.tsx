import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ITGuys.ai - Modern IT Consulting & Home Automation",
  description:
    "Expert IT consulting for businesses and professional home automation services. Enterprise-grade infrastructure, cloud solutions, and smart home integration.",
  keywords: [
    "IT consulting",
    "home automation",
    "cloud solutions",
    "cybersecurity",
    "smart home",
    "managed IT",
  ],
  openGraph: {
    title: "ITGuys.ai - Modern IT Consulting & Home Automation",
    description:
      "Expert IT consulting for businesses and professional home automation services.",
    url: "https://itguys.ai",
    siteName: "ITGuys.ai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
