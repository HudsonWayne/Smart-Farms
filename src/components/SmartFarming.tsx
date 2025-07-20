// components/SmartFarming.tsx
import Image from "next/image";
import React from "react";

const SmartFarming = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Content */}
      <div className="md:w-1/2">
        <p className="text-green-600 font-semibold text-sm mb-2">Powerful Simplicity</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Enter the future of farming</h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <p className="flex items-center gap-2 font-semibold mb-2">
              <span className="text-green-600">●</span> Pesticides Application
            </p>
            <p className="text-sm text-gray-700">
              We provide all the data you need to know about your crops in just a few clicks.
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2 font-semibold mb-2">
              <span className="text-green-600">●●</span> Fertilizer Application
            </p>
            <p className="text-sm text-gray-700">
              Skydrone uses AI, machine learning and computer vision for real-time crop scanning.
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2 font-semibold mb-2">
              <span className="text-green-600">●</span> Landing Mapping & Surveying
            </p>
            <p className="text-sm text-gray-700">
              We provide all the data you need to know about your crops in just a few clicks.
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2 font-semibold mb-2">
              <span className="text-green-600">●●●</span> Crop Health Monitoring
            </p>
            <p className="text-sm text-gray-700">
              Skydrone uses AI, machine learning and computer vision for real-time crop scanning.
            </p>
          </div>
        </div>

        <button className="mt-8 bg-[#0D0C22] hover:bg-black text-white px-6 py-3 rounded-md font-semibold text-sm">
          Get A Qoute
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2">
        <Image
          src="/simplicity.png"
          alt="Drone Farming"
          width={600}
          height={500}
          className="rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default SmartFarming;
