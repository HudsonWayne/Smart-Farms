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
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-[70vh] overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
      {/* Static Text Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
        <h2
          className="text-white text-3xl md:text-5xl font-bold text-center"
          style={{ fontFamily: "Georgia, serif", maxWidth: "70%" }}
        >
          “Revolutionizing agriculture in Zimbabwe through advanced drone technology”
        </h2>
      </div>

      {/* Background Images */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === i ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={img}
            alt={`Slide ${i}`}
            className="w-full h-full object-cover"
            draggable={false}
          />
          {/* Overlay with color #2c2a2aff */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#2c2a2aff", opacity: 0.6 }}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
