"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* About Us Section with background image */}
      <div className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/Rectangle 23.png" // Background image for the About Us section
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
          <h1
            className="text-4xl md:text-6xl font-bold text-green-500 mb-4"
            style={{
              fontFamily: "Georgia, serif", // Applying the Georgia font
              fontWeight: "bold", // Ensures the font is bold
            }}
          >
            About Us
          </h1>
          <p className="text-white text-lg md:text-xl leading-relaxed font-[Georgia]">
            Empowering Zimbabwe’s small and medium-scale farmers with drone technology to increase crop yields, create jobs, and secure a sustainable agricultural future.
          </p>
        </div>
      </div>

      {/* Who We Are Section with Image on Left and Text on Right */}
      <div className="grid md:grid-cols-2 gap-12 items-center mt-10 mb-10 md:flex-row max-w-7xl mx-auto px-4">
        <div>
          <Image
            src="/Rectangle 55 (1).png"
            alt="Smart Fertilizer Application with AI and Drone Technology"
            width={500}
            height={300} // Reduced height by 100px
            className="w-full object-cover"
          />
        </div>
        <div className="max-w-prose">
          <h2 className="text-green-700 text-2xl font-bold mb-4">
            Who We Are
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            “Smart Farms is an enterprise committed to using innovation to ensure food security, improve livelihoods, and transform rural communities through precision agriculture solutions in Zimbabwe. We take advantage of advanced high-resolution camera drones embedded with smart sensors for land mapping, surveying, crop health monitoring, and pesticide and fertilizer applications. Our actions contribute to positive climate change, and we are on a goal to end poverty and hunger. We want to help smallholders and medium-scale farmers realize their value to the economy of the country through their agricultural harvests.”
          </p>
        </div>
      </div>
    </>
  );
}
