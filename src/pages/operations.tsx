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
        <div className="relative z-10 px-4 md:px-8 text-center max-w-7xl mx-auto">
          <h1
            className="text-4xl md:text-6xl font-bold text-green-500 mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Our Operations
          </h1>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[30px]" />

      {/* Section 1 (Large Image) */}
      <div
        className="max-w-7xl mx-auto px-4 md:px-8 py-8 grid md:grid-cols-2 gap-8 items-center"
        style={{ fontFamily: "Georgia, serif" }}
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
            Ready-to-Deploy Precision: DJI Mavic 3 Multispectral
          </h2>
          <p className="text-gray-800 text-base mb-6">
            At Smart Farms, we are investing in the DJI Mavic 3 Multispectral, a fully integrated and ready-to-use drone system designed for high-precision agricultural monitoring. With no need for assembling or modifications, this state-of-the-art drone allows us to deliver immediate value to farmers straight out of the box.
          </p>
        </div>
        <div className="w-full">
          <Image
            src="/Rectangle 63 (11).png"
            alt="DJI Mavic 3 Closeup"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div
        className="max-w-7xl mx-auto px-4 md:px-8 pb-16 grid md:grid-cols-2 gap-8 items-center"
        style={{ fontFamily: "Georgia, serif" }}
      >
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            1. <span className="text-black">Fully Integrated, Farm-Ready</span>
          </h3>
          <p className="text-gray-800 text-base">
            The Mavic 3 Multispectral comes equipped with both RGB and multispectral sensors, making it ideal for professional agricultural use. Since it&apos;s a complete, factory-assembled solution, we can deploy it instantly, saving time and ensuring reliability from the first flight.
          </p>
        </div>
        <div className="ml-auto">
          <Image
            src="/Rectangle 56 (11).png"
            alt="DJI Drone Flying"
            width={400}
            height={270}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div
        className="max-w-7xl mx-auto px-4 md:px-8 pb-16 grid md:grid-cols-2 gap-8 items-center"
        style={{ fontFamily: "Georgia, serif" }}
      >
        <div className="mr-auto">
          <Image
            src="/Rectangle 64.png"
            alt="Drone spraying NDVI"
            width={400}
            height={270}
            className="rounded-lg"
          />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            2. <span className="text-black">Powerful Crop Insight Without the Wait</span>
          </h3>
          <p className="text-gray-800 text-base">
            This drone captures rich data in real time, enabling us to generate detailed vegetation indices like NDVI and NDRE. By analyzing these images using built-in AI and Smart Farms’ digital tools, we provide farmers with fast, accurate insights on crop health, nutrient levels, and water stress.
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div
        className="max-w-7xl mx-auto px-4 md:px-8 pb-16 grid md:grid-cols-2 gap-8 items-center"
        style={{ fontFamily: "Georgia, serif" }}
      >
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            3. <span className="text-black">Efficiency from Day One</span>
          </h3>
          <p className="text-gray-800 text-base">
            Thanks to its plug-and-fly design, the Mavic 3 Multispectral helps us reduce setup time and focus entirely on delivering quality service. Whether it&apos;s mapping, surveying, or monitoring, this drone helps us deliver precision agriculture solutions without delay.
          </p>
        </div>
        <div className="ml-auto">
          <Image
            src="/Rectangle 65.png"
            alt="DJI Drone in air"
            width={400}
            height={270}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Final Note */}
      <div
        className="max-w-7xl mx-auto px-4 md:px-8 pb-20"
        style={{ fontFamily: "Georgia, serif" }}
      >
        <p className="text-gray-800 text-base">
          Smart Farms is committed to using professional, ready-to-deploy tools that put powerful data directly in the hands of the farmer, quickly, reliably, and effectively.
        </p>
      </div>

      {/* Section: Locally Assembled Drones moved to bottom */}
      <div
        className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid md:grid-cols-2 gap-8 items-center"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {/* Image */}
        <div className="w-full">
          <Image
            src="/Group 22 (1).png"
            alt="Locally assembled drone"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-lime-700 leading-snug mb-4">
            Locally Assembled Spraying <br />
            & Fertilizer Drones for <br />
            Scalable Precision Farming
          </h2>
          <p className="text-gray-800 text-base mb-4">
            We assemble our{" "}
            <span className="text-lime-600 font-semibold">
              large-capacity spraying and fertilizer drones
            </span>{" "}
            locally using high quality, industry-standard parts. These drones are
            assembled at our innovation hub by our dedicated in-house{" "}
            <span className="text-green-600 font-semibold">
              Engineer and Drone Technician
            </span>
            , ensuring they are tailored to meet the specific needs of our
            farmers.
          </p>

          {/* Point 1 */}
          <p className="text-lime-700 font-bold text-base mb-1">
            1. Custom Assembly for Greater Flexibility
          </p>
          <p className="text-gray-800 text-base mb-4">
            Unlike compact drones, large spraying and fertilizer drones are
            often bulky and difficult to ship when pre-assembled. To overcome
            this challenge, we source all critical components, frames, tanks,
            motors, pumps, nozzles, and flight controllers and assemble them
            on-site. This not only reduces shipping costs and delays but also
            allows us to modify and optimize each drone for local field
            conditions.
          </p>

          {/* Point 2 */}
          <p className="text-lime-700 font-bold text-base mb-1">
            2. Built by Experts, Backed by Innovation
          </p>
          <p className="text-gray-800 text-base mb-4">
            With our qualified Engineer overseeing the technical configuration
            and our Technician handling calibration and testing, we ensure that
            each drone is fully functional, reliable, and safe to operate.
          </p>

          {/* Point 3 */}
          <p className="text-lime-700 font-bold text-base mb-1">
            3. Designed for Local Impact
          </p>
          <p className="text-gray-800 text-base">
            Our locally assembled drones are made with the African farmer in
            mind, durable, scalable, and easy to maintain. They represent our
            commitment to homegrown innovation that delivers world-class
            agricultural solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
