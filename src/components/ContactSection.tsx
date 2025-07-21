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
                Borrowdale Junior School<br />
                63GQ+VWR, Ridgeway N<br />
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13288.669224769878!2d31.078137800000005!3d-17.7994735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bf78b9b4ceab%3A0x9df66a403d5751e1!2sBorrowdale%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1690028000000!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default ContactSection;
