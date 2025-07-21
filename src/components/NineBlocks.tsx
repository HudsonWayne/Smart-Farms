"use client";

import Image from "next/image";

const blocksData = [
  {
    image: "/Rectangle 55.png",
    title: "1. Land mapping, surveying and crop health monitoring",
    text: "At Smart Farms, we combine the power of DJI Mavic 3 drone technology with Artificial Intelligence (AI) to revolutionize how small-scale farmers manage their land and crops. This integration allows us to deliver smarter, faster, and more accurate insights for decision-making.",
  },
  {
    image: "/Rectangle 61.png",
    title: "AI-Powered Land Mapping & Surveying",
    text: "Using the Mavic 3’s high-resolution camera, we capture detailed aerial images of farmland. These images are then processed through AI algorithms to generate precise maps, identify terrain variations, and calculate field boundaries with pinpoint accuracy. Our AI tools analyze data in real time, helping farmers plan land use more efficiently and detect topographical challenges before planting begins.",
  },
  {
    image: "/Rectangle 55.png",
    title: "Intelligent Crop Health Monitoring",
    text: "We deploy AI models trained to detect crop stress, pest infestations, and disease patterns from drone-captured imagery. The Mavic 3 provides high-quality visual data, while our AI systems analyze it to flag problem areas instantly. This allows farmers to act early, apply targeted treatments, and reduce input costs, boosting productivity while minimizing environmental impact.",
  },
  {
    image: "/Rectangle 61.png",
    title: "2. Precision Crop Spraying",
    text: "At Smart Farms, we are redefining crop spraying through the integration of AI-driven precision algorithms and advanced drone technology. Our solution ensures that farmers apply just the right amount of inputs, exactly where and when they are needed.",
  },
  {
    image: "/Rectangle 55.png",
    title: "Targeted Spraying with Drone Accuracy",
    text: "Using specialized spraying drones equipped with GPS and obstacle avoidance systems, we conduct highly accurate aerial applications of fertilizers, pesticides, and herbicides. These drones can cover large areas quickly, access difficult terrains, and significantly reduce human exposure to chemicals.",
  },
  {
    image: "/Rectangle 61.png",
    title: "Environmentally Responsible Farming",
    text: "By avoiding blanket spraying, we minimize chemical runoff and protect surrounding ecosystems. This AI-enhanced precision spraying supports sustainable agriculture while maximizing crop yields. With Smart Farms, crop spraying becomes safer, smarter, and more sustainable, empowering farmers with cutting-edge tools to thrive in a changing agricultural landscape.",
  },
  {
    image: "/Rectangle 55.png",
    title: "Smart Fertilizer Application with AI and Drone Technology",
    text: "At Smart Farms, we make fertilizer application more efficient, cost-effective, and environmentally conscious through the power of drones and artificial intelligence.",
  },
  {
    image: "/Rectangle 61.png",
    title: "Precision Application for Maximum Impact",
    text: "Using drone technology, we apply fertilizers accurately across your fields, eliminating guesswork and reducing manual labor. Our drones are equipped with advanced dispersion systems and GPS navigation, ensuring coverage and the ability to access hard-to-reach areas with ease.",
  },
  {
    image: "/Rectangle 55.png",
    title: "AI-Driven Decision Making",
    text: "Before any fertilizer application, our drones perform aerial scans of your crops to assess nutrient deficiencies. These images are processed by AI algorithms that generate fertility maps, identifying exactly where and how much fertilizer is needed. This means you avoid over-fertilization, reduce waste, and boost plant health by applying nutrients only where they are required.",
  },
];

export default function NineBlocks() {
  return (
    <section className="w-full bg-white font-[Georgia] px-4 md:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Loop through the blocksData to render each item */}
        {blocksData.map((block, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-12 items-center mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div>
              <Image
                src={block.image}
                alt={block.title}
                width={500}
                height={400}
                className="w-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="max-w-prose">
              <h2 className="text-green-700 text-2xl font-bold mb-4">
                {block.title}
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed">{block.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
