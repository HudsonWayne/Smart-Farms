// src/pages/_app.tsx
"use client";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import AboutSection from "@/components/AboutSection";
import OurMission from "@/components/OurMission";
import OurServices from "@/components/OurServices";
import SmartFarming from "@/components/SmartFarming";
import ContactSection from "@/components/ContactSection";

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <>
      <Navbar />

      {isHomePage && (
        <>
          <Carousel />
          <div className="mt-[20px]">
            <AboutSection />
          </div>
          <OurMission />
          <OurServices />
          <SmartFarming />
          <ContactSection />
        </>
      )}

      <main className="pt-8 min-h-[80vh]">
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}
