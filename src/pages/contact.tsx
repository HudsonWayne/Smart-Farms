"use client";

import Image from "next/image";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

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
          <h1
            className="text-4xl md:text-6xl font-bold text-green-500 mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Contact Us
          </h1>
          <p
            className="text-white text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Empowering Zimbabwe’s small and medium-scale farmers with drone
            technology to increase crop yields, create jobs, and secure a
            sustainable agricultural future.
          </p>
        </div>
      </div>

      {/* Contact Info + Form Section */}
      <section className="px-6 md:px-20 py-16 bg-white flex flex-col md:flex-row gap-10 items-start justify-between">
        {/* Left Info Panel */}
        <div className="md:w-1/2 space-y-6 text-gray-800 text-base">
          <p className="text-green-600 font-bold text-sm tracking-widest uppercase">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Talk to Us</h2>

          <div className="flex items-start gap-4">
            <EnvelopeIcon className="text-green-600 w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold text-lg">Email</p>
              <p>info@smartfarms-tech.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <PhoneIcon className="text-green-600 w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold text-lg">Phone</p>
              <p>+263 777 963 398</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPinIcon className="text-green-600 w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold text-lg">Address</p>
              <p>
                Borrowdale Junior School <br />
                63GQ+VWR, Ridgeway N <br />
                Harare, Zimbabwe
              </p>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <form className="md:w-1/2 grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-green-600 py-2 placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-green-600 py-2 placeholder-gray-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-green-600 py-2 placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Phone number"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-green-600 py-2 placeholder-gray-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="sr-only">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-green-600 py-2 placeholder-gray-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Message"
              rows={5}
              className="w-full border-b border-gray-400 focus:outline-none focus:border-green-600 py-2 placeholder-gray-500"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#0A0028] text-white font-semibold px-6 py-2 rounded-md transition hover:bg-[#13033f]"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
