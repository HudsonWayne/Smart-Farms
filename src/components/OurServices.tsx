"use client";

import Image from "next/image";
import Link from "next/link";

export default function OurServices() {
  return (
    <section className="w-full bg-white px-4 md:px-12 lg:px-20 py-12 font-[Georgia]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2
          className="text-[#72AE1C] text-[33px] font-bold mb-4"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Our Services
        </h2>
        <p
          className="text-gray-700 mx-auto mb-[60px] text-[26px]"
          style={{
            width: "90%",
            maxWidth: "700px",
            fontFamily: "Georgia, serif",
          }}
        >
          At Smart Farms, we provide innovative solutions to enhance agricultural practices
          for small and medium-scale farmers.
        </p>

        {/* Section 1 Title */}
        <h3
          className="text-[#72AE1C] mt-[100px] text-2xl font-bold text-left mb-10"
          style={{ fontFamily: "Georgia, serif" }}
        >
          DJI Mavic 3 Multispectral
        </h3>

        {/* First Row of Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 text-left mt-[100px]">
          <div>
            <Image
              src="/Rectangle 8.png"
              alt="High Resolution Camera"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <p className="mt-2 ml-[5px] font-bold text-[21px]">
              High Resolution Camera
            </p>
          </div>
          <div>
            <Image
              src="/Rectangle 9.png"
              alt="AI Integrated"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <p className="mt-2 ml-[5px] font-bold text-[21px]">
              AI Integrated
            </p>
          </div>
          <div>
            <Image
              src="/Rectangle 10.png"
              alt="Multispectral Sensor"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <p className="mt-2 ml-[5px] font-bold text-[21px]">
              Multispectral Sensor
            </p>
          </div>
        </div>

        {/* Section 2 Title */}
        <div className="text-left mb-6">
          <h3
            className="text-[#72AE1C] text-2xl font-bold mb-1"
            style={{ fontFamily: "Georgia, serif" }}
          >
            2. Pesticides and Fertilizer Application
          </h3>
          <p
            className="text-gray-700 text-[26px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Optimized resource use to improve yields while reducing waste.
          </p>
        </div>

        {/* Second Row of Images */}
        <div className="grid md:grid-cols-3 gap-6 text-left mt-[80px]">
          <div>
            <Image
              src="/Rectangle 88.png"
              alt="Precision input delivery"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <p className="mt-2 ml-[5px] font-bold text-[21px]">
              Precision input delivery
            </p>
          </div>
          <div>
            <Image
              src="/Rectangle 99.png"
              alt="Labor cost reduction"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <p className="mt-2 ml-[5px] font-bold text-[21px]">
              Labor cost reduction
            </p>
          </div>
          <div>
            <Image
              src="/Rectangle 100.png"
              alt="Remote operation capability"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <p className="mt-2 ml-[5px] font-bold text-[21px]">
              Remote operation capability
            </p>
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-10 text-left">
          <Link href="/services">
            <button className="bg-[#0C0332] text-white px-6 py-2 text-base font-semibold hover:bg-opacity-90 rounded-md transition duration-200">
              View All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
