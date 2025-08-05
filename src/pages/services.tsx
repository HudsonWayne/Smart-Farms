// src/pages/services.tsx

"use client";

import Image from "next/image";
import NineBlocks from "@/components/NineBlocks"; // Import NineBlocks component

export default function ServicesPage() {
  return (
    <>
      {/* Our Services Section with background image */}
      <div className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/Pic 7.jpg" // Replace with your image path
          alt="Drone spraying field"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="absolute inset-0 w-full h-full"
          draggable={false}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60" />

        {/* Text Content */}
        <div className="relative z-10 px-4 md:px-8 text-center max-w-4xl">
          <h1
            className="text-4xl md:text-6xl font-bold"
            style={{
              fontFamily: "Georgia, serif", // Applying the Georgia font
              fontWeight: "bold", // Ensures the font is bold
              color: "#72AE1C", // Changed green color to #72AE1C
            }}
          >
            Our Services
          </h1>
          <p className="text-white text-lg md:text-xl leading-relaxed font-[Georgia]">
            At Smart Farms, we provide innovative solutions to enhance agricultural
            practices for small and medium-scale farmers.
          </p>
        </div>
      </div>

      {/* Nine Blocks Section below Our Services */}
      <NineBlocks /> {/* Render NineBlocks component below the image */}
    </>
  );
}
