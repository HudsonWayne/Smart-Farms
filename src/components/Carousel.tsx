"use client";

import { useEffect, useState } from "react";
import AboutSection from "./AboutSection"; // Import the new component

const images = [
  "/Rectangle 55.png",
  "/Rectangle 56.png",
  "/Rectangle 58.png",
  "/Rectangle 59.png",
  "/Rectangle 60.png",
  "/Rectangle 61.png",
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    document.body.style.overflow = "hidden";
    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* Fullscreen carousel with 20px margin at bottom */}
      <div
        className="relative w-screen h-screen overflow-hidden mb-[20px]"
      >
        {/* Background image */}
        <img
          src={images[index]}
          alt={`Slide ${index}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          draggable={false}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: "#2c2a2a", opacity: 0.6 }}
        />

        {/* Text on top */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <h2
            className="text-white text-3xl md:text-5xl font-bold text-center leading-relaxed"
            style={{ fontFamily: "Georgia, serif", maxWidth: "70%" }}
          >
            “Revolutionizing agriculture in Zimbabwe through advanced drone technology”
          </h2>
        </div>
      </div>

      {/* About Section Component */}
      <AboutSection />
    </>
  );
};

export default Carousel;
