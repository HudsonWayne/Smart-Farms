// components/SmartFarming.tsx
import Image from "next/image";
import React from "react";

const SmartFarming = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Content */}
      <div className="md:w-1/2">
        <p className="text-green-600 font-semibold text-[18px] tracking-wide mb-2 font-poppins">
          Powerful Simplicity
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
          Enter the future of farming
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <p className="flex items-center gap-2 font-semibold mb-2 font-poppins">
              <span className="text-green-600 text-lg">●</span> Pesticides Application
            </p>
            <p className="text-sm text-gray-700 font-poppins">
              We provide all the data you need to know about your crops in just a few clicks.
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2 font-semibold mb-2 font-poppins">
              <span className="text-green-600 text-lg">●●</span> Fertilizer Application
            </p>
            <p className="text-sm text-gray-700 font-poppins">
              Skydrone uses AI, machine learning and computer vision for real-time crop scanning.
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2 font-semibold mb-2 font-poppins">
              <span className="text-green-600 text-lg">●</span> Land Mapping & Surveying
            </p>
            <p className="text-sm text-gray-700 font-poppins">
              We provide all the data you need to know about your crops in just a few clicks.
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2 font-semibold mb-2 font-poppins">
              <span className="text-green-600 text-lg tracking-tighter">●●●</span> Crop Health Monitoring
            </p>
            <p className="text-sm text-gray-700 font-poppins">
              Skydrone uses AI, machine learning and computer vision for real-time crop scanning.
            </p>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/263777963398?text=Hello%2C%20I%27m%20interested%20in%20getting%20a%20quote%20for%20Smart%20Farming%20services."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-8 bg-[#0D0C22] hover:bg-black text-white px-6 py-3 rounded-md font-semibold text-sm font-poppins">
            Get A Quote
          </button>
        </a>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 w-full">
        <Image
          src="/simplicity.png"
          alt="Drone Farming"
          width={600}
          height={400}
          className="rounded-lg object-cover w-full max-h-[400px]"
        />
      </div>
    </section>
  );
};

export default SmartFarming;
