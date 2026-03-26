import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Leochi from "@/components/Leochi";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kosha — The OS for Consciousness",
  description:
    "Generative AI-powered personalized Yoga Nidra experiences. Choose between the Vedic Sage path or the Bio-Hacker path for deep mind programming.",
  keywords: "yoga nidra, meditation, AI, consciousness, binaural beats, sankalpa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
        <div className="breathing-bg">
          <div className="breathing-orb-center" />
        </div>
        <Navigation />
        <main style={{ paddingTop: '56px', minHeight: '100vh', paddingBottom: '120px' }}>
          {children}
        </main>
        <Leochi />
      </body>
    </html>
  );
}
