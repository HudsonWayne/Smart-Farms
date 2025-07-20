// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import AboutSection from "@/components/AboutSection";
import OurMission from "@/components/OurMission";
import OurServices from "@/components/OurServices";
import SmartFarming from "@/components/SmartFarming";
import ContactSection from "@/components/ContactSection"; // ✅ Global use

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="mt-[20px]">
        <AboutSection />
      </div>
      <OurMission />
      <OurServices />
      <SmartFarming />
      <ContactSection /> {/* ✅ Shows on every page */}
      <main className="pt-8">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
