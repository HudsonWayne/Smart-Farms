"use client";

import Image from "next/image";

export default function OurMission() {
  return (
    <section className="w-full bg-white font-[Georgia] px-4 md:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Mission Block */}
        <div>
          <Image
            src="/Rectangle 55.png"
            alt="Drone spraying crops"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-green-700 text-xl font-bold mb-3">Our Mission</h2>
          <p className="text-gray-800 text-base leading-relaxed">
            Our mission is to empower small-scale farmers in Zimbabwe by leveraging
            drone technology to enhance agricultural productivity, reduce labor inefficiencies,
            and promote sustainable farming practices.
          </p>
        </div>

        {/* Vision Block */}
        <div className="order-2 md:order-1">
          <h2 className="text-green-700 text-xl font-bold mb-3">Our Vision</h2>
          <p className="text-gray-800 text-base leading-relaxed">
            <em>
              We envision to become a leading force in transforming African agriculture
              through technology, creating a future where every small-scale farmer
              thrives with access to smart, efficient, and sustainable farming solutions.
            </em>
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="/Rectangle 61.png"
            alt="Drone on grass"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
