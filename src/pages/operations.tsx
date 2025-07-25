"use client";

import Image from "next/image";

export default function OperationsPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center">
        <Image
          src="/Rectangle 233.png"
          alt="Drone spraying field"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="absolute inset-0 w-full h-full"
          draggable={false}
        />
        <div
          className="relative z-10 text-center max-w-7xl mx-auto"
          style={{ marginLeft: "150px", marginRight: "150px" }}
        >
          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold"
            style={{ color: "#72AE1C", fontFamily: "Georgia, serif" }}
          >
            Our Operations
          </h1>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-8 md:h-12" />

      {/* Section 1 */}
      <section
        className="py-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        style={{
          fontFamily: "Georgia, serif",
          marginLeft: "150px",
          marginRight: "150px",
        }}
      >
        <div>
          <h2
            className="font-bold mb-6"
            style={{ color: "#72AE1C", fontSize: "50px" }}
          >
            Ready-to-Deploy Precision: DJI Mavic 3 Multispectral
          </h2>
          <p
            className="text-gray-800 mb-6 leading-relaxed"
            style={{ fontSize: "25px" }}
          >
            At Smart Farms, we are investing in the DJI Mavic 3 Multispectral,
            a fully integrated and ready-to-use drone system designed for
            high-precision agricultural monitoring. With no need for assembling
            or modifications, this state-of-the-art drone allows us to deliver
            immediate value to farmers straight out of the box.
          </p>
        </div>
        <div className="w-full">
          <Image
            src="/Rectangle 63 (11).png"
            alt="DJI Mavic 3 Closeup"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto max-w-full"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section
        className="pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        style={{
          fontFamily: "Georgia, serif",
          marginLeft: "150px",
          marginRight: "150px",
        }}
      >
        <div>
          <h3 className="font-bold text-gray-900 mb-2 text-2xl">
            1.{" "}
            <span className="text-black" style={{ fontSize: "27px" }}>
              Fully Integrated, Farm-Ready
            </span>
          </h3>
          <p
            className="text-gray-800 leading-relaxed"
            style={{ fontSize: "25px" }}
          >
            The Mavic 3 Multispectral comes equipped with both RGB and
            multispectral sensors, making it ideal for professional agricultural
            use. Since it&apos;s a complete, factory-assembled solution, we can
            deploy it instantly, saving time and ensuring reliability from the
            first flight.
          </p>
        </div>
        <div className="ml-auto max-w-full">
          <Image
            src="/Rectangle 56 (11).png"
            alt="DJI Drone Flying"
            width={400}
            height={270}
          />
        </div>
      </section>

      {/* Section 3 */}
      <section
        className="pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        style={{
          fontFamily: "Georgia, serif",
          marginLeft: "150px",
          marginRight: "150px",
        }}
      >
        <div className="max-w-full">
          <Image
            src="/Rectangle 64.png"
            alt="Drone spraying NDVI"
            width={400}
            height={270}
          />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-2 text-2xl">
            2.{" "}
            <span className="text-black" style={{ fontSize: "27px" }}>
              Powerful Crop Insight Without the Wait
            </span>
          </h3>
          <p
            className="text-gray-800 leading-relaxed"
            style={{ fontSize: "25px" }}
          >
            This drone captures rich data in real time, enabling us to generate
            detailed vegetation indices like NDVI and NDRE. By analyzing these
            images using built-in AI and Smart Farms’ digital tools, we provide
            farmers with fast, accurate insights on crop health, nutrient
            levels, and water stress.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section
        className="pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        style={{
          fontFamily: "Georgia, serif",
          marginLeft: "150px",
          marginRight: "150px",
        }}
      >
        <div>
          <h3 className="font-bold text-gray-900 mb-2 text-2xl">
            3.{" "}
            <span className="text-black" style={{ fontSize: "27px" }}>
              Efficiency from Day One
            </span>
          </h3>
          <p
            className="text-gray-800 leading-relaxed"
            style={{ fontSize: "24px" }}
          >
            Thanks to its plug-and-fly design, the Mavic 3 Multispectral helps
            us reduce setup time and focus entirely on delivering quality
            service. Whether it&apos;s mapping, surveying, or monitoring, this
            drone helps us deliver precision agriculture solutions without
            delay.
          </p>
        </div>
        <div className="ml-auto max-w-full">
          <Image
            src="/Rectangle 65.png"
            alt="DJI Drone in air"
            width={400}
            height={270}
          />
        </div>
      </section>

      {/* Final Note */}
      <div
        className="pb-20"
        style={{
          fontFamily: "Georgia, serif",
          marginLeft: "150px",
          marginRight: "150px",
        }}
      >
        <p
          className="text-gray-800 leading-relaxed"
          style={{ fontSize: "24px" }}
        >
          Smart Farms is committed to using professional, ready-to-deploy tools
          that put powerful data directly in the hands of the farmer, quickly,
          reliably, and effectively.
        </p>
      </div>

      {/* Locally Assembled Drones */}
      <section
        className="py-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        style={{
          fontFamily: "Georgia, serif",
          marginLeft: "150px",
          marginRight: "150px",
        }}
      >
        <div className="w-full max-w-full">
          <Image
            src="/Group 22 (1).png"
            alt="Locally assembled drone"
            width={400}
            height={940}
            className="w-full h-auto max-w-full rounded-lg"
          />
        </div>

        <div>
          <h2
            className="font-bold mb-6"
            style={{ color: "#72AE1C", fontSize: "36px" }}
          >
            Locally Assembled Spraying <br />
            & Fertilizer Drones for <br />
            Scalable Precision Farming
          </h2>
          <p
            className="text-gray-800 mb-4 leading-relaxed"
            style={{ fontSize: "24px" }}
          >
            We assemble our{" "}
            <span
              className="text-[#72AE1C] font-semibold"
              style={{ fontSize: "24px" }}
            >
              large-capacity spraying and fertilizer drones
            </span>{" "}
            locally using high quality, industry-standard parts. These drones
            are assembled at our innovation hub by our dedicated in-house{" "}
            <span
              className="text-[#72AE1C] font-semibold"
              style={{ fontSize: "24px" }}
            >
              Engineer and Drone Technician
            </span>
            , ensuring they are tailored to meet the specific needs of our
            farmers.
          </p>

          <p
            className="text-[#72AE1C] font-bold mb-1"
            style={{ fontSize: "24px" }}
          >
            1. Custom Assembly for Greater Flexibility
          </p>
          <p
            className="text-gray-800 mb-4 leading-relaxed"
            style={{ fontSize: "24px" }}
          >
            Unlike compact drones, large spraying and fertilizer drones are
            often bulky and difficult to ship when pre-assembled. To overcome
            this challenge, we source all critical components, frames, tanks,
            motors, pumps, nozzles, and flight controllers and assemble them
            on-site. This not only reduces shipping costs and delays but also
            allows us to modify and optimize each drone for local field
            conditions.
          </p>

          <p
            className="text-[#72AE1C] font-bold mb-1"
            style={{ fontSize: "24px" }}
          >
            2. Built by Experts, Backed by Innovation
          </p>
          <p
            className="text-gray-800 mb-4 leading-relaxed"
            style={{ fontSize: "24px" }}
          >
            With our qualified Engineer overseeing the technical configuration
            and our Technician handling calibration and testing, we ensure that
            each drone is fully functional, reliable, and safe to operate.
          </p>

          <p
            className="text-[#72AE1C] font-bold mb-1"
            style={{ fontSize: "24px" }}
          >
            3. Designed for Local Impact
          </p>
          <p
            className="text-gray-800 leading-relaxed"
            style={{ fontSize: "24px" }}
          >
            Our locally assembled drones are made with the African farmer in
            mind, durable, scalable, and easy to maintain. They represent our
            commitment to homegrown innovation that delivers world-class
            agricultural solutions.
          </p>
        </div>
      </section>
    </div>
  );
}
