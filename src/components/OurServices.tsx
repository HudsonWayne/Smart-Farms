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
        <h2
          className="text-[#72AE1C] text-4xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Our Services
        </h2>

        <p
          className="text-gray-700 text-[30px] md:text-[36px] leading-relaxed mx-auto mb-[62px]"
          style={{
            width: "95%",
            maxWidth: "900px",
            fontFamily: "Georgia, serif",
          }}
        >
          At Smart Farms, we provide innovative solutions to enhance agricultural
          practices for small and medium-scale farmers.
        </p>

        {/* Section 1 Title */}
        <h3
          className="text-[#72AE1C] text-3xl md:text-4xl font-bold text-left mb-8 mt-[80px]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          DJI Mavic 3 Multispectral
        </h3>

        {/* First Row of Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-left -mx-[15px]">
          <div className="px-[15px]">
            <Image
              src="/Rectangle 8.png"
              alt="High Resolution Camera"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <p className="mt-3 ml-1 font-bold text-[20px] md:text-[22px]">
              High Resolution Camera
            </p>
          </div>
          <div className="px-[15px]">
            <Image
              src="/Rectangle 9.png"
              alt="AI Integrated"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <p className="mt-3 ml-1 font-bold text-[20px] md:text-[22px]">
              AI Integrated
            </p>
          </div>
          <div className="px-[15px]">
            <Image
              src="/Rectangle 10.png"
              alt="Multispectral Sensor"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <p className="mt-3 ml-1 font-bold text-[20px] md:text-[22px]">
              Multispectral Sensor
            </p>
          </div>
        </div>

        {/* Section 2 Title */}
        <div className="text-left mb-4 mt-[60px]">
          <h3
            className="text-[#72AE1C] text-3xl md:text-4xl font-bold mb-2"
            style={{ fontFamily: "Georgia, serif" }}
          >
            2. Pesticides and Fertilizer Application
          </h3>
          <p
            className="text-gray-700 text-[26px] md:text-[28px] leading-relaxed"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Optimized resource use to improve yields while reducing waste.
          </p>
        </div>

        {/* Second Row of Images */}
        <div className="grid md:grid-cols-3 gap-6 text-left mt-10 -mx-[15px]">
          <div className="px-[15px]">
            <Image
              src="/Rectangle 88.png"
              alt="Precision input delivery"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <p className="mt-3 ml-1 font-bold text-[20px] md:text-[22px]">
              Precision input delivery
            </p>
          </div>
          <div className="px-[15px]">
            <Image
              src="/Rectangle 99.png"
              alt="Labor cost reduction"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <p className="mt-3 ml-1 font-bold text-[20px] md:text-[22px]">
              Labor cost reduction
            </p>
          </div>
          <div className="px-[15px]">
            <Image
              src="/Rectangle 100.png"
              alt="Remote operation capability"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <p className="mt-3 ml-1 font-bold text-[20px] md:text-[22px]">
              Remote operation capability
            </p>
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-12 text-left">
          <Link href="/services">
            <button className="bg-[#0C0332] text-white px-6 py-3 text-lg md:text-xl font-semibold hover:bg-opacity-90 rounded-md transition duration-200">
              View All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
