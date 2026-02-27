import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "NeuralCraft — AI-Powered Digital Agency",
  description:
    "We build intelligent websites, ERP systems, and automation solutions that help small businesses scale faster with AI.",
  keywords: ["AI agency", "web development", "ERP", "automation", "chatbots", "digital transformation"],
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ui/ContactModal";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ContactModal />
        </Providers>
      </body>
    </html>
  );
}
