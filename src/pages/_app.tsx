import "@/styles/globals.css"; // Global styles
import type { AppProps } from "next/app";

import Footer from "@/components/Footer";         // ✅ Located in: src/components/Footer.tsx
import Navbar from "@/components/Navbar";         // ✅ Located in: src/components/Navbar.tsx
import Carousel from "@/components/Carousel";     // ✅ Located in: src/components/Carousel.tsx
import AboutSection from "@/components/AboutSection"; // ✅ Located in: src/components/AboutSection.tsx
import OurMission from "@/components/OurMission";     // ✅ Located in: src/components/OurMission.tsx
import OurServices from "@/components/OurServices";   // ✅ Located in: src/components/OurServices.tsx

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* 🔼 Navbar */}
      <Navbar />

      {/* 🔼 Hero Image Carousel */}
      <Carousel />

      {/* 🔼 About Section */}
      <div className="mt-[20px]">
        <AboutSection />
      </div>

      {/* 🔼 Our Mission Section */}
      <OurMission />

      {/* 🔼 Our Services Section */}
      <OurServices />

      {/* 🔼 Dynamic Page Content */}
      <main className="pt-8">
        <Component {...pageProps} />
      </main>

      {/* 🔼 Footer */}
      <Footer />
    </>
  );
}
