"use client";

import Image from "next/image";

export default function OperationsPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center">
        <Image
          src="/Pic 29.jpg"
          alt="Drone spraying field"
          fill
          priority
          className="absolute inset-0 uniform-img"
          draggable={false}
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black opacity-60 rounded-lg" />
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#72AE1C]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Our Operations
          </h1>
        </div>
      </div>


      <div className="h-8 md:h-12" />

      {/* Section 1 */}
      <section
        className="py-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center px-6 md:px-10"
        style={{ fontFamily: "Georgia, serif" }}
      >
        <div>
          <h2 className="font-bold mb-6 text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-[#72AE1C]">
            Ready-to-Deploy Precision: DJI Mavic 3 Multispectral
          </h2>
          <p className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-800 leading-relaxed">
            At Smart Farms, we are investing in the DJI Mavic 3 Multispectral, a
            fully integrated and ready-to-use drone system designed for
            high-precision agricultural monitoring. With no need for assembling
            or modifications, this state-of-the-art drone allows us to deliver
            immediate value to farmers straight out of the box.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/Rectangle 63 (11).png"
            alt="DJI Mavic 3 Closeup"
            className="uniform-img w-full md:w-4/5 lg:w-full object-cover"
            width={530}
            height={390}
          />
        </div>
      </section>

      {/* Section 2 */}
      <section
        className="pb-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-8 items-center px-6 md:px-10"
        style={{ fontFamily: "Georgia, serif" }}
      >
        <div>
          <h3 className="font-bold text-gray-900 mb-2 text-2xl md:text-2xl lg:text-2xl">
            1.{" "}
            <span className="text-black text-xl sm:text-2xl md:text-xl lg:text-2xl">
              Fully Integrated, Farm-Ready
            </span>
          </h3>
          <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-800 leading-relaxed">
            The Mavic 3 Multispectral comes equipped with both RGB and
            multispectral sensors, making it ideal for professional agricultural
            use. Since it is a complete, factory-assembled solution, we can
            deploy it instantly, saving time and ensuring reliability from the
            first flight.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src="/Pic 15.jpg"
            alt="DJI Drone Flying"
            className="uniform-img w-full md:w-4/5 lg:w-full object-cover"
            width={520}
            height={350}
          />
        </div>
      </section>

      {/* Section 3 */}
      <section
        className="pb-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-8 items-center px-6 md:px-10"
        style={{ fontFamily: "Georgia, serif" }}
      >
        <div className="flex justify-center lg:order-1">
          <img
            src="/Pic 16.png"
            alt="Drone spraying NDVI"
            className="uniform-img w-full md:w-4/5 lg:w-full object-cover"
            width={530}
            height={390}
          />
        </div>
        <div className="lg:order-2">
          <h3 className="font-bold text-gray-900 mb-2 text-2xl md:text-2xl lg:text-2xl">
            2.{" "}
            <span className="text-black text-xl sm:text-2xl md:text-xl lg:text-2xl">
              Powerful Crop Insight Without the Wait
            </span>
          </h3>
          <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-800 leading-relaxed">
            This drone captures rich data in real time, enabling us to generate
            detailed vegetation indices like NDVI and NDRE. By analyzing these
            images using built-in AI and Smart Farms' digital tools, we provide
            farmers with fast, accurate insights on crop health, nutrient
            levels, and water stress.
          </p>
        </div>
      </section>

      <section
        className="pb-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-8 items-center px-6 md:px-10"
        style={{ fontFamily: "Georgia, serif" }}
      >
        <div>
          <h3 className="font-bold text-gray-900 mb-2 text-2xl md:text-2xl lg:text-2xl">
            3.{" "}
            <span className="text-black text-xl sm:text-2xl md:text-xl lg:text-2xl">
              Efficiency from Day One
            </span>
          </h3>
          <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-800 leading-relaxed">
            Thanks to its plug-and-fly design, the Mavic 3 Multispectral helps us
            reduce setup time and focus entirely on delivering quality service.
            Whether it is mapping, surveying, or monitoring, this drone helps us
            deliver precision agriculture solutions without delay.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <img
            src="/Pic 17.jpg"
            alt="DJI Drone in air"
            width={530}
            height={390}
            className="rounded-lg w-full md:w-4/5 lg:w-full lg:max-w-[530px] h-[350px] md:h-[390px] object-cover"
            style={{
              objectPosition: "center 45%",
            }}
          />
        </div>
      </section>

      {/* Final Note */}
      <div
        className="pb-20 px-6 md:px-10"
        style={{ fontFamily: "Georgia, serif" }}
      >
        <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-800 leading-relaxed">
          Smart Farms is committed to using professional, ready-to-deploy tools
          that put powerful data directly in the hands of the farmer, quickly,
          reliably, and effectively.
        </p>
      </div>

      {/* Locally Assembled Drones */}
      <section
        className="py-12 flex flex-col md:flex-col lg:flex-col-reverse lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center px-6 md:px-10"
        style={{ fontFamily: "Georgia, serif" }}
      >
        <div className="lg:order-1 flex justify-center">
          <img
            src="/big.png"
            alt="Locally assembled drone"
            className="uniform-img2 w-full md:w-3/4 lg:w-full object-contain"
            width={530}
            height={990}
          />
        </div>
        <div className="lg:order-2">
          <div className="overflow-auto max-h-[80vh] md:max-h-[70vh] lg:max-h-[100vh] px-2">
            <h2 className="font-bold mb-6 text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[#72AE1C]">
              Locally Assembled Spraying <br />
              & Fertilizer Drones for <br />
              Scalable Precision Farming
            </h2>
            <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-800 mb-4 leading-relaxed">
              We assemble our{" "}
              <span className="text-[#72AE1C] font-semibold">
                large-capacity spraying and fertilizer drones
              </span>{" "}
              locally using high quality, industry-standard parts. These drones
              are assembled at our innovation hub by our dedicated in-house{" "}
              <span className="text-[#72AE1C] font-semibold">
                Engineer and Drone Technician
              </span>
              , ensuring they are tailored to meet the specific needs of our
              farmers.
            </p>

            <p className="text-[#72AE1C] font-bold mb-1 text-lg md:text-lg lg:text-xl">
              1. Custom Assembly for Greater Flexibility
            </p>
            <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-800 mb-4 leading-relaxed">
              Unlike compact drones, large spraying and fertilizer drones are
              often bulky and difficult to ship when pre-assembled. To overcome
              this challenge, we source all critical components, frames, tanks,
              motors, pumps, nozzles, and flight controllers and assemble them
              on-site.
            </p>

            <p className="text-[#72AE1C] font-bold mb-1 text-lg md:text-lg lg:text-xl">
              2. Built by Experts, Backed by Innovation
            </p>
            <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-800 mb-4 leading-relaxed">
              With our qualified Engineer overseeing the technical configuration
              and our Technician handling calibration and testing, we ensure that
              each drone is fully functional, reliable, and safe to operate.
            </p>

            <p className="text-[#72AE1C] font-bold mb-1 text-lg md:text-lg lg:text-xl">
              3. Designed for Local Impact
            </p>
            <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-800 leading-relaxed">
              Our locally assembled drones are made with the African farmer in
              mind, durable, scalable, and easy to maintain. They represent our
              commitment to homegrown innovation that delivers world-class
              agricultural solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}