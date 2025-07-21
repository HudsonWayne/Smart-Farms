"use client";

import Image from "next/image";

export default function OperationsPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center">
        <Image
          src="/Rectangle 233.png"
          alt="Drone spraying field"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="absolute inset-0 w-full h-full"
          draggable={false}
        />
        <div className="relative z-10 px-4 md:px-8 text-center max-w-7xl mx-auto">
          <h1
            className="text-4xl md:text-6xl font-bold text-green-500 mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Our Operations
          </h1>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[30px]" />

      {/* DJI Mavic 3 Multispectral Section */}
      <div
        className="max-w-7xl mx-auto px-4 md:px-8 py-8 grid md:grid-cols-2 gap-8 items-center"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {/* Left Text Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
            Ready-to-Deploy Precision: DJI Mavic 3 Multispectral
          </h2>
          <p className="text-gray-800 text-base mb-6">
            At Smart Farms, we are investing in the DJI Mavic 3 Multispectral,
            a fully integrated and ready-to-use drone system designed for
            high-precision agricultural monitoring. With no need for assembling
            or modifications, this state-of-the-art drone allows us to deliver
            immediate value to farmers straight out of the box.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full">
          <Image
            src="/Rectangle 63 (11).png"
            alt="DJI Mavic 3 Closeup"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>

      {/* Second Section - Full Width */}
      <div
        className="max-w-7xl mx-auto px-4 md:px-8 pb-16 grid md:grid-cols-2 gap-8 items-center"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {/* Left Text Section */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            1. <span className="text-black">Fully Integrated, Farm-Ready</span>
          </h3>
          <p className="text-gray-800 text-base">
            The Mavic 3 Multispectral comes equipped with both RGB and
            multispectral sensors, making it ideal for professional agricultural
            use. Since it&apos;s a complete, factory-assembled solution, we can
            deploy it instantly, saving time and ensuring reliability from the
            first flight.
          </p>
        </div>

        {/* Right Image (Smaller) */}
        <div className="w-full flex justify-center">
          <Image
            src="/Rectangle 56 (11).png"
            alt="DJI Drone Flying"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
