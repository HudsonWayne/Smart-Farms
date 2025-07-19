"use client";

import Image from "next/image";
import Link from "next/link";

export default function OurServices() {
  return (
    <section className="w-full bg-white font-[Georgia] px-4 md:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-green-700 text-3xl font-bold mb-2">Our Services</h2>
        <p className="text-gray-700 text-base mb-10 w-1/2 mx-auto">
          At Smart Farms, we provide innovative solutions to enhance agricultural practices
          for small and medium-scale farmers.
        </p>

        {/* Section 1 Title */}
        <h3 className="text-green-700 text-lg font-bold text-left mb-2">DJI Mavic 3 Multispectral</h3>

        {/* First Row of Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 mt-[10px]">
          <div className="text-center">
            <Image
              src="/Rectangle 8.png"
              alt="High Resolution Camera"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <p className="mt-2 text-sm font-bold">High Resolution Camera</p>
          </div>
          <div className="text-center">
            <Image
              src="/Rectangle 9.png"
              alt="AI Integrated"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <p className="mt-2 text-sm font-bold">AI integrated</p>
          </div>
          <div className="text-center">
            <Image
              src="/Rectangle 10.png"
              alt="Multispectral Sensor"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <p className="mt-2 text-sm font-bold">Multispectral sensor</p>
          </div>
        </div>

        {/* Section 2 Title */}
        <div className="text-left mb-2">
          <h3 className="text-green-700 text-lg font-bold">
            2. Pesticides and Fertilizer Application
          </h3>
          <p className="text-gray-700 text-sm">
            Optimized resource use to improve yields while reducing waste.
          </p>
        </div>

        {/* Second Row of Images */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="text-center">
            <Image
              src="/Rectangle 88.png"
              alt="Precision input delivery"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <p className="mt-2 text-sm font-bold">Precision input delivery</p>
          </div>
          <div className="text-center">
            <Image
              src="/Rectangle 99.png"
              alt="Labor cost reduction"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <p className="mt-2 text-sm font-bold">Labor cost reduction</p>
          </div>
          <div className="text-center">
            <Image
              src="/Rectangle 100.png"
              alt="Remote operation capability"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <p className="mt-2 text-sm font-bold">Remote operation capability</p>
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-10 text-left">
          <Link href="/services">
            <button className="bg-[#0C0332] text-white px-6 py-2 text-sm font-semibold hover:bg-opacity-90">
              View All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
