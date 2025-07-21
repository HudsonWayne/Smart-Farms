"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section with background image and dark overlay */}
      <div className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center">
        <Image
          src="/Rectangle 566.png" // Ensure this is in the public folder
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

      {/* Contact Form Section */}
      <div
        className="max-w-4xl mx-auto py-16 px-4 md:px-8"
        style={{ fontFamily: "Georgia, serif" }}
      >
        <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">
          Get in Touch
        </h2>
        <form className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md p-3"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md p-3"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-gray-700 font-semibold mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full border border-gray-300 rounded-md p-3"
              placeholder="Subject"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full border border-gray-300 rounded-md p-3"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
