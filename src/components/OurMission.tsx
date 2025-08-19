"use client";

import Image from "next/image";

export default function OurMission() {
  return (
    <section className="w-full bg-white font-[Georgia] px-4 md:px-8 lg:px-16 py-12">
      <style>
        {`
          /* Custom media query for tablet and up */
          @media (min-width: 48rem) {
            .md\\:text-[26px] {
              font-size: 18px;
            }
            .md\\:text-[24px] {
              font-size: 17px;
            }
          }
        `}
      </style>

      <div className="w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Mission Image */}
        <div>
          <Image
            src="/pic6.jpg"
            alt="Drone spraying crops"
            width={500}
            height={400}
            className="w-full object-cover rounded-lg"
          />
        </div>

        {/* Mission Text */}
        <div>
          <h2 className="text-[#72AE1C] text-2xl font-bold mb-4">Our Mission</h2>
          <p
            className="text-gray-800 text-[15px] md:text-[26px] leading-relaxed italic the-text"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Our mission is to empower small-scale farmers in Zimbabwe by leveraging drone
            technology to enhance agricultural productivity, reduce labor inefficiencies,
            and promote sustainable farming practices.
          </p>
        </div>

        {/* Vision Text */}
        <div className="order-2 md:order-1">
          <h2 className="text-[#72AE1C] text-2xl font-bold mb-4">Our Vision</h2>
          <p
            className="text-gray-800 text-[15px] md:text-[24px] leading-relaxed italic the-text"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <em>
              We envision to become a leading force in transforming African agriculture
              through technology, creating a future where every small-scale farmer
              thrives with access to smart, efficient, and sustainable farming solutions.
            </em>
          </p>
        </div>

        {/* Vision Image */}
        <div className="order-1 md:order-2">
          <Image
            src="/Pic 3.jpg"
            alt="Drone on grass"
            width={500}
            height={400}
            className="w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
