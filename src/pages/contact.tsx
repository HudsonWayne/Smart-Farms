"use client";

import Image from "next/image";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center">
        <Image
          src="/Rectangle 566.png"
          alt="Smart Farms Contact Banner"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="absolute inset-0 w-full h-full"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 px-4 md:px-8 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-green-500 mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Contact Us
          </h1>
          <p className="text-white text-lg md:text-xl leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
            Empowering Zimbabwe’s small and medium-scale farmers with drone technology to increase crop yields, create jobs, and secure a sustainable agricultural future.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-[#3B3B3B]" style={{ fontFamily: "Georgia, serif" }}>
        
        {/* Left Column - Contact Info */}
        <div className="space-y-10">
          <div>
            <h3 className="text-green-600 font-semibold tracking-widest uppercase text-sm mb-1">Contact</h3>
            <h2 className="text-2xl font-bold">Talk to Us</h2>
          </div>

          <div className="space-y-8 text-sm">
            {/* Email */}
            <div>
              <div className="flex items-center gap-2 mb-1 text-green-600">
                <FaEnvelope />
                <span className="font-bold text-[#2E2E2E]">Email</span>
              </div>
              <p className="text-gray-700">info@smartfarms-tech.com</p>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center gap-2 mb-1 text-green-600">
                <FaPhone />
                <span className="font-bold text-[#2E2E2E]">Phone</span>
              </div>
              <p className="text-gray-700">+263 777963398</p>
            </div>

            {/* Address */}
            <div>
              <div className="flex items-center gap-2 mb-1 text-green-600">
                <FaMapMarkerAlt />
                <span className="font-bold text-[#2E2E2E]">Address</span>
              </div>
              <p className="text-gray-700 leading-snug">443 Grasmere Lne, Borrowdale, Harare, Zimbabwe</p>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <form className="md:col-span-2 grid grid-cols-1 gap-6 text-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="First Name" className="border-b border-[#3B3B3B] p-2 focus:outline-none" />
            <input type="text" placeholder="Last Name" className="border-b border-[#3B3B3B] p-2 focus:outline-none" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <input type="email" placeholder="Email" className="border-b border-[#3B3B3B] p-2 focus:outline-none" />
            <input type="tel" placeholder="Phone number" className="border-b border-[#3B3B3B] p-2 focus:outline-none" />
          </div>
          <input type="text" placeholder="Subject" className="border-b border-[#3B3B3B] p-2 focus:outline-none" />
          <textarea rows={4} placeholder="Message" className="border-b border-[#3B3B3B] p-2 focus:outline-none resize-none" />

          <div>
            <button type="submit" className="bg-[#0D0B28] text-white font-bold px-6 py-2 rounded-md hover:bg-[#1d1a3d] transition">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
