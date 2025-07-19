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

    // Prevent page shaking/scroll
    document.body.style.overflow = "hidden";
    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* Fullscreen carousel */}
      <div className="relative w-screen h-screen overflow-hidden">
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

      {/* About Section */}
      <div className="relative mt-[30px] w-full h-[500px]">
        {/* About image */}
        <img
          src="/about.png"
          alt="About Smart Farms"
          className="w-full h-full object-cover"
          draggable={false}
        />

        {/* Slight dark overlay on image only */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#000000", opacity: 0.4 }}
        />

        {/* Text on top of image */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p
            className="text-white text-center leading-relaxed"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "27px",
              maxWidth: "80%",
              zIndex: 10,
            }}
          >
            Smart Farms seeks to improve food security in Zimbabwe using advanced drone technology
            to assist smallholder and medium scale farmers with land mapping and surveying, crop
            spraying and fertilizer application.
          </p>
        </div>
      </div>
    </>
  );
};

export default Carousel;
