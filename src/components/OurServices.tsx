"use client";

import React from "react";

const services = [
  {
    title: "Precision Input Delivery",
    img: "/images/Rectangle 55.png",
  },
  {
    title: "Labor Cost Reduction",
    img: "/images/Rectangle 56.png",
  },
  {
    title: "Remote Operation Capability",
    img: "/images/Rectangle 58.png",
  },
  {
    title: "High Resolution Camera",
    img: "/images/Rectangle 59.png",
  },
  {
    title: "AI Integrated",
    img: "/images/Rectangle 60.png",
  },
  {
    title: "Multispectral Sensor",
    img: "/images/Rectangle 61.png",
  },
];

export default function OurServices() {
  return (
    <section className="w-full bg-white px-4 md:px-12 lg:px-20 py-12 font-['Poppins']">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#0C0332]">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="w-full">
            <img
              src={service.img}
              alt={service.title}
              className={`w-full object-cover ${
                index === 0 ? "h-[280px]" : "h-[220px]"
              }`}
            />
            <p className="text-lg mt-3 text-[#0C0332] pl-[5px]">{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
