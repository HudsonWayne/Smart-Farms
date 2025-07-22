// src/pages/operations.tsx
"use client";

import Image from "next/image";

export default function OperationsPage() { // Renamed from NineBlocks to better reflect a page
  return (
    <section className="w-full bg-white font-[Georgia] px-4 md:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto">
        {/* First Block: Image on the Left and Text on the Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12 md:flex-row">
          <div>
            <Image
              src="/Rectangle 55.png"
              alt="Land mapping, surveying and crop health monitoring"
              width={500}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div className="max-w-prose">
            <h2 className="text-[#72AE1C] text-2xl font-bold mb-4">
              1. Land mapping, surveying and crop health monitoring
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              At Smart Farms, we combine the power of DJI Mavic 3 drone technology with Artificial Intelligence (AI) to revolutionize how small-scale farmers manage their land and crops. This integration allows us to deliver smarter, faster, and more accurate insights for decision-making.
            </p>
          </div>
        </div>

        {/* Second Block: Image on the Right and Text on the Left */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12 md:flex-row-reverse">
          <div className="max-w-prose">
            <h2 className="text-[#72AE1C] text-2xl font-bold mb-4">
              AI-Powered Land Mapping & Surveying
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              Using the Mavic 3’s high-resolution camera, we capture detailed aerial images of farmland. These images are then processed through AI algorithms to generate precise maps, identify terrain variations, and calculate field boundaries with pinpoint accuracy. Our AI tools analyze data in real time, helping farmers plan land use more efficiently and detect topographical challenges before planting begins.
            </p>
          </div>
          <div>
            <Image
              src="/Rectangle 58.png"
              alt="AI-Powered Land Mapping & Surveying"
              width={500}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Third Block: Image on the Left and Text on the Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12 md:flex-row">
          <div>
            <Image
              src="/Rectangle 59.png"
              alt="Intelligent Crop Health Monitoring"
              width={500}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div className="max-w-prose">
            <h2 className="text-[#72AE1C] text-2xl font-bold mb-4">
              Intelligent Crop Health Monitoring
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              We deploy AI models trained to detect crop stress, pest infestations, and disease patterns from drone-captured imagery. The Mavic 3 provides high-quality visual data, while our AI systems analyze it to flag problem areas instantly. This allows farmers to act early, apply targeted treatments, and reduce input costs, boosting productivity while minimizing environmental impact.
            </p>
          </div>
        </div>

        {/* Fourth Block: Image on the Right and Text on the Left */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12 md:flex-row-reverse">
          <div className="max-w-prose">
            <h2 className="text-[#72AE1C] text-2xl font-bold mb-4">
              2. Precision Crop Spraying
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              At Smart Farms, we are redefining crop spraying through the integration of AI-driven precision algorithms and advanced drone technology. Our solution ensures that farmers apply just the right amount of inputs, exactly where and when they are needed.
            </p>
          </div>
          <div>
            <Image
              src="/Rectangle 60.png"
              alt="Precision Crop Spraying"
              width={500}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Fifth Block: Image on the Left and Text on the Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12 md:flex-row">
          <div>
            <Image
              src="/Rectangle 61.png"
              alt="Targeted Spraying with Drone Accuracy"
              width={500}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div className="max-w-prose">
            <h2 className="text-[#72AE1C] text-2xl font-bold mb-4">
              Targeted Spraying with Drone Accuracy
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              Using specialized spraying drones equipped with GPS and obstacle avoidance systems, we conduct highly accurate aerial applications of fertilizers, pesticides, and herbicides. These drones can cover large areas quickly, access difficult terrains, and significantly reduce human exposure to chemicals.
            </p>
          </div>
        </div>

        {/* Sixth Block: Image on the Right and Text on the Left */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12 md:flex-row-reverse">

          <div className="max-w-prose">
            <h2 className="text-[#72AE1C] text-2xl font-bold mb-4">
              Environmentally Responsible Farming
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              By avoiding blanket spraying, we minimize chemical runoff and protect surrounding ecosystems. This AI-enhanced precision spraying supports sustainable agriculture while maximizing crop yields. With Smart Farms, crop spraying becomes safer, smarter, and more sustainable, empowering farmers with cutting-edge tools to thrive in a changing agricultural landscape.
            </p>
          </div>
          <div>
            <Image
              src="/Rectangle 63 (1).png"
              alt="Environmentally Responsible Farming"
              width={500}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Seventh Block: Image on the Left and Text on the Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12 md:flex-row">
          <div>
            <Image
              src="/Rectangle 62.png"
              alt="Smart Fertilizer Application with AI and Drone Technology"
              width={500}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div className="max-w-prose">
            <h2 className="text-[#72AE1C] text-2xl font-bold mb-4">
              Smart Fertilizer Application with AI and Drone Technology
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              At Smart Farms, we make fertilizer application more efficient, cost-effective, and environmentally conscious through the power of drones and artificial intelligence.
            </p>
          </div>
        </div>

        {/* Eighth Block: Image on the Right and Text on the Left */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12 md:flex-row-reverse">

          <div className="max-w-prose">
            <h2 className="text-[#72AE1C] text-2xl font-bold mb-4">
              Precision Application for Maximum Impact
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              Using drone technology, we apply fertilizers accurately across your fields, eliminating guesswork and reducing manual labor. Our drones are equipped with advanced dispersion systems and GPS navigation, ensuring coverage and the ability to access hard-to-reach areas with ease.
            </p>
          </div>
          <div>
            <Image
              src="/Rectangle 61.png"
              alt="Precision Application for Maximum Impact"
              width={500}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Ninth Block: Image on the Left and Text on the Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12 md:flex-row">
          <div>
            <Image
              src="/Rectangle 55.png"
              alt="AI-Driven Decision Making"
              width={500}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div className="max-w-prose">
            <h2 className="text-[#72AE1C] text-2xl font-bold mb-4">
              AI-Driven Decision Making
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              Before any fertilizer application, our drones perform aerial scans of your crops to assess nutrient deficiencies. These images are processed by AI algorithms that generate fertility maps, identifying exactly where and how much fertilizer is needed. This means you avoid over-fertilization, reduce waste, and boost plant health by applying nutrients only where they are required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
