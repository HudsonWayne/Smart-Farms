import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import AboutSection from "@/components/AboutSection";
import OurMission from "@/components/OurMission"; // ✅ Add this

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Carousel />

      <div className="mt-[20px]">
        <AboutSection />
      </div>

      {/* ✅ Add OurMission section below AboutSection */}
      <OurMission />

      <main className="pt-8">
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}
