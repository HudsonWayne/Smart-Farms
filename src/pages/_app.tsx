import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Carousel />
      <main className="pt-8">
        <Component {...pageProps} />
      </main>
    </>
  );
}
