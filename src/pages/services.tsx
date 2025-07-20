// pages/services.tsx
"use client";

import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="relative w-full min-h-[80vh] flex items-center justify-center text-center">
      {/* Background Image */}
      <Image
        src="/Rectangle 23.png"
        alt="Drone spraying field"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Text Content */}
      <div className="relative z-20 max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-green-500 mb-4">
          Our Services
        </h1>
        <p className="text-white text-lg md:text-xl leading-relaxed font-[Georgia]">
          At Smart Farms, we provide innovative solutions to enhance agricultural practices for small and medium-scale farmers.
        </p>
      </div>
    </div>
  );
}
