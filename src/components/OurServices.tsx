"use client";

import Image from "next/image";
import Link from "next/link";

export default function OurServices() {
  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-16 py-16 font-[Georgia]">
      <div
        className="w-full mx-auto text-center"
        style={{ maxWidth: "2000px" }} // Increased width
      >
        {/* Section Header */}
        <h2 className="text-[#72AE1C] text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Our Services
        </h2>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mx-auto mb-16 max-w-[1400px]">
          At Smart Farms, we provide innovative solutions to enhance agricultural
          practices for small and medium-scale farmers.
        </p>

        {/* Section 1 Title */}
        <h3 className="text-[#72AE1C] text-2xl md:text-3xl lg:text-4xl font-bold text-left mb-8 mt-20">
          DJI Mavic 3 Multispectral
        </h3>

        {/* First Row of Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-left -mx-4">
          {[
            { src: "/Rectangle 8.png", alt: "High Resolution Camera", label: "High Resolution Camera" },
            { src: "/Rectangle 9.png", alt: "AI Integrated", label: "AI Integrated" },
            { src: "/Rectangle 10.png", alt: "Multispectral Sensor", label: "Multispectral Sensor" },
          ].map((item, i) => (
            <div className="px-4" key={i}>
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={250}
                className="w-full object-cover"
              />
              <p className="mt-3 ml-1 font-bold text-base sm:text-lg md:text-xl">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Section 2 Title */}
        <div className="text-left mb-4 mt-16">
          <h3 className="text-[#72AE1C] text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            2. Pesticides and Fertilizer Application
          </h3>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl">
            Optimized resource use to improve yields while reducing waste.
          </p>
        </div>

        {/* Second Row of Images */}
        <div className="grid md:grid-cols-3 gap-6 text-left mt-10 -mx-4">
          {[
            { src: "/Rectangle 88.png", alt: "Precision input delivery", label: "Precision input delivery" },
            { src: "/Rectangle 99.png", alt: "Labor cost reduction", label: "Labor cost reduction" },
            { src: "/Rectangle 100.png", alt: "Remote operation capability", label: "Remote operation capability" },
          ].map((item, i) => (
            <div className="px-4" key={i}>
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={250}
                className="w-full object-cover"
              />
              <p className="mt-3 ml-1 font-bold text-base sm:text-lg md:text-xl">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-left">
          <Link href="/services">
            <button className="bg-[#0C0332] text-white px-6 py-3 text-base md:text-lg font-semibold hover:bg-opacity-90 rounded-md transition duration-200">
              View All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
