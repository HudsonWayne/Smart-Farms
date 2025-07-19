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

    // Prevent horizontal scroll while carousel is mounted
    document.body.style.overflow = "hidden";

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    // Remove px-5 here to avoid white lines on left/right
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background image covers entire container */}
      <img
        src={images[index]}
        alt={`Slide ${index}`}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        draggable={false}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />
      {/* Content container with padding only here */}
      <div className="relative z-20 flex items-center justify-center h-full px-5 md:px-8">
        <h2
          className="text-white text-3xl md:text-5xl font-bold text-center leading-relaxed max-w-3xl"
          style={{
            fontFamily: "Georgia, serif",
            letterSpacing: "0.05em",
          }}
        >
          “Revolutionizing agriculture in Zimbabwe through advanced drone technology”
        </h2>
      </div>
    </div>
  );
};

export default Carousel;
