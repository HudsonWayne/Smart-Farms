"use client";

import Image from "next/image";

export default function OperationsPage() {
  return (
    <div className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/Rectangle 233.png" // Background image for the Operations section
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
      <div className="relative z-10 px-4 md:px-8 text-center max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-green-500 mb-4" style={{ fontFamily: "Georgia, serif" }}>
          Our Operations
        </h1>
        <p className="text-white text-lg md:text-xl leading-relaxed font-[Georgia]">
          Empowering Zimbabwe’s small and medium-scale farmers with drone technology to increase crop yields, create jobs, and secure a sustainable agricultural future.
        </p>
      </div>
    </div>
  );
}
