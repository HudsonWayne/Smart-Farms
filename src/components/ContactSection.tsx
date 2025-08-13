import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const ContactSection = () => {
  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-20 py-8 bg-white flex flex-col lg:flex-row gap-10 items-start justify-between">
      {/* Left Info Panel */}
      <div className="w-full lg:w-1/2 max-w-md mt-6 lg:mt-0">
        <p
          className="text-[#72AE1C] font-bold text-sm sm:text-[14px] md:text-[15px] lg:text-sm tracking-widest mb-2 uppercase"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Contact
        </p>
        <h2
          className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-gray-800 mb-6 lg:mb-8"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Talk to Us
        </h2>

        <div
          className="space-y-4 sm:space-y-5 md:space-y-6 text-gray-800 text-sm sm:text-base md:text-[15px] lg:text-base"
          style={{ fontFamily: "Georgia, serif" }}
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <EnvelopeIcon className="text-[#72AE1C] w-5 h-5 sm:w-6 sm:h-6 mt-1" />
            <div>
              <p className="font-semibold text-sm sm:text-lg md:text-[16px] lg:text-lg">Email</p>
              <p className="text-sm sm:text-base md:text-[15px] lg:text-base">
                infor@smartfarms-tech.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <PhoneIcon className="text-[#72AE1C] w-5 h-5 sm:w-6 sm:h-6 mt-1" />
            <div>
              <p className="font-semibold text-sm sm:text-lg md:text-[16px] lg:text-lg">Phone</p>
              <p className="text-sm sm:text-base md:text-[15px] lg:text-base">+263 777 963 398</p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <MapPinIcon className="text-[#72AE1C] w-5 h-5 sm:w-6 sm:h-6 mt-1" />
            <div>
              <p className="font-semibold text-sm sm:text-lg md:text-[16px] lg:text-lg">Address</p>
              <p className="text-sm sm:text-base md:text-[15px] lg:text-base">
                443 Grasmere Lane, Borrowdale, Harare, Zimbabwe
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Map iframe Panel */}
      <div className="w-full lg:w-1/2 max-w-3xl rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Smart Farms Location"
          width="100%"
          height={300} // mobile default
          className="sm:h-[400px] md:h-[450px] lg:h-[500px]"
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
