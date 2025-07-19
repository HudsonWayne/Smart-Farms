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
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[70vh] mt-16 overflow-hidden">
      {/* Images */}
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
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#050404] bg-opacity-60" />
        </div>
      ))}

      {/* Static Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <h2 className="text-white text-3xl md:text-5xl font-bold font-['Avenir']">
          Revolutionizing agriculture in Zimbabwe through advanced drone technology
        </h2>
      </div>
    </div>
  );
};

export default Carousel;
