import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import AboutSection from "@/components/AboutSection"; // ✅ Import it here

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Carousel />

      {/* Add margin between carousel and About section */}
      <div className="mt-5"> {/* ✅ This gives ~20px spacing */}
        <AboutSection />
      </div>

      <main className="pt-8">
        <Component {...pageProps} />
      </main>
    </>
  );
}
