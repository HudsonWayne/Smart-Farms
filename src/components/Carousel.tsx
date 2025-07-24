"use client";

import { useEffect, useState } from "react";

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

    // Reset margins and disable horizontal scroll
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflowX = "hidden";

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-hidden w-full">
      <section
        className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden"
        style={{
          width: "calc(100vw + 200px)",
          marginLeft: "-100px",
        }}
      >
        {/* Background Image */}
        <img
          src={images[index]}
          alt={`Slide ${index}`}
          className="absolute inset-0 w-full h-full object-cover object-center"
          draggable={false}
          loading="eager"
          decoding="async"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60" />

        {/* Text Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-20 text-center">
          <h2
            className="text-white text-base sm:text-lg md:text-2xl lg:text-4xl font-bold leading-snug sm:leading-snug md:leading-snug lg:leading-relaxed max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl"
            style={{
              fontFamily: "Georgia, serif",
              letterSpacing: "0.05em",
              textShadow: "1px 1px 6px rgba(0, 0, 0, 0.6)",
            }}
          >
            “Revolutionizing agriculture in Zimbabwe through advanced drone technology”
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
