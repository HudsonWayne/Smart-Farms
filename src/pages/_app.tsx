import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import AboutSection from "@/components/AboutSection";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Carousel />

      {/* Add margin above AboutSection if needed */}
      <div className="mt-[20px]">
        <AboutSection />
      </div>

      <main className="pt-8">
        <Component {...pageProps} />
      </main>

      {/* 👇 Footer at the bottom */}
      <Footer />
    </>
  );
}
