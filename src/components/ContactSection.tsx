// src/components/ContactSection.tsx
import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const ContactSection = () => {
  return (
    <section className="px-6 md:px-20 py-5 bg-white flex flex-col md:flex-row gap-10 items-start justify-between">
      {/* Left Info Panel */}
      <div className="md:w-1/2 max-w-md">
        <p className="text-green-600 font-bold text-sm tracking-widest mb-2 uppercase">
          Contact
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Talk to Us</h2>

        <div className="space-y-6 text-gray-800 text-base">
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
                Borrowdale Junior School
                <br />
                63GQ+VWR, Ridgeway N
                <br />
                Harare, Zimbabwe
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Map iframe Panel */}
      <div
        className="
          md:w-1/2 w-full 
          max-w-3xl 
          rounded-lg overflow-hidden shadow-lg
        "
      >
        <iframe
          title="Smart Farms Location"
          width="100%"
          height="450"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://www.openstreetmap.org/export/embed.html?bbox=31.0700%2C-17.8050%2C31.0860%2C-17.7950&amp;layer=mapnik&amp;marker=-17.7994735%2C31.0781378"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
