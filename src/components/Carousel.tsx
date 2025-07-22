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

    // Global reset for spacing and scroll
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflowX = "hidden";

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[90vh] overflow-hidden"
      style={{
        width: "calc(100vw + 200px)", // 100px extra on both sides
        marginLeft: "-100px",
        padding: 0,
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
      <div className="relative z-10 flex h-full items-center justify-center px-4 md:px-6 lg:px-8 text-center">
        <h2
          className="text-white text-3xl md:text-5xl font-bold leading-relaxed max-w-4xl"
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
  );
};

export default Carousel;
