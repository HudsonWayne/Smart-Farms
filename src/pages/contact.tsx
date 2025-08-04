"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Smart Farms’ main service for farmers?",
      answer:
        "Smart Farms provides drone technology services to help farmers monitor crops, improve yields, and optimize farming practices.",
    },
    {
      question: "How do drones improve sustainability in farming?",
      answer:
        "Drones enable precise monitoring of crop health, reduce resource wastage, and support eco-friendly farming by enabling targeted interventions.",
    },
    {
      question: "Is training provided for drone operation?",
      answer:
        "Yes, Smart Farms offers comprehensive training programs to help farmers and operators safely and effectively use drone technology.",
    },
  ];

  function toggleFAQ(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Hero Section */}
      <div className="relative w-[calc(100%+200px)] left-[-100px] min-h-[60vh] md:min-h-[70vh] flex items-center justify-center">
        <Image
          src="/Pic 15.jpg"
          alt="Smart Farms Contact Banner"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="absolute inset-0 w-full h-full"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 px-4 md:px-8 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-[#72AE1C]">
            Contact Us
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
            Empowering Zimbabwe’s small and medium-scale farmers with drone
            technology to increase crop yields, create jobs, and secure a
            sustainable agricultural future.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-[#3B3B3B]">
        {/* Left Column - Contact Info */}
        <div className="space-y-10">
          <div>
            <h3 className="text-[#72AE1C] font-semibold tracking-widest uppercase text-base sm:text-lg mb-1">
              Contact
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Talk to Us
            </h2>
          </div>

          <div className="space-y-8 text-sm sm:text-base md:text-lg">
            <div>
              <div className="flex items-center gap-2 mb-1 text-[#72AE1C] text-base sm:text-lg">
                <FaEnvelope />
                <span className="font-bold text-[#2E2E2E]">Email</span>
              </div>
              <p className="text-gray-700">infor@smartfarms-tech.com</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1 text-[#72AE1C] text-base sm:text-lg">
                <FaPhone />
                <span className="font-bold text-[#2E2E2E]">Phone</span>
              </div>
              <p className="text-gray-700">+263 777963398</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1 text-[#72AE1C] text-base sm:text-lg">
                <FaMapMarkerAlt />
                <span className="font-bold text-[#2E2E2E]">Address</span>
              </div>
              <p className="text-gray-700 leading-snug">
                443 Grasmere Lane, Borrowdale, Harare, Zimbabwe
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <form className="md:col-span-2 grid grid-cols-1 gap-6 text-base sm:text-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="border-b border-[#3B3B3B] p-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border-b border-[#3B3B3B] p-2 focus:outline-none"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="Email"
              className="border-b border-[#3B3B3B] p-2 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="border-b border-[#3B3B3B] p-2 focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border-b border-[#3B3B3B] p-2 focus:outline-none"
          />
          <textarea
            rows={4}
            placeholder="Message"
            className="border-b border-[#3B3B3B] p-2 focus:outline-none resize-none"
          />
          <div>
            <button
              type="submit"
              className="bg-[#0D0B28] text-white font-bold px-6 py-2 rounded-md hover:bg-[#1d1a3d] transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Map Section */}
      <div className="w-full h-[80vh] overflow-hidden shadow-md">
        <iframe
          title="Smart Farms Location"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://www.openstreetmap.org/export/embed.html?bbox=31.0700%2C-17.8050%2C31.0860%2C-17.7950&amp;layer=mapnik&amp;marker=-17.7994735%2C31.0781378"
          style={{ border: 0 }}
        ></iframe>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid md:grid-cols-2 gap-12 text-[#3B3B3B]">
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl mb-3 font-semibold leading-snug">
            Any questions? <br /> We got you.
          </h3>
          <p className="text-base sm:text-lg md:text-xl mt-5">
            Find answers to the most common questions about our drone technology
            and training programs.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg sm:text-xl mb-6">
            FAQs
            <span className="block font-normal mt-1 text-base sm:text-lg">
              This section provides clear answers to common questions about
              Smart Farms’ drone technology, training, and implementation
              process.
            </span>
          </h4>

          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-gray-300 py-4 cursor-pointer text-base sm:text-lg"
              onClick={() => toggleFAQ(i)}
            >
              <div className="flex justify-between items-center">
                <h5 className="font-semibold">{faq.question}</h5>
                <span className="text-2xl select-none">
                  {openIndex === i ? "−" : "+"}
                </span>
              </div>
              {openIndex === i && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
