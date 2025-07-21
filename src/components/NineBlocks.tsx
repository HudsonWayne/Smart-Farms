"use client";

import Image from "next/image";

const blocksData = [
  {
    image: "/Rectangle 55.png",
    title: "Our Mission",
    text: "Our mission is to empower small-scale farmers in Zimbabwe by leveraging drone technology to enhance agricultural productivity, reduce labor inefficiencies, and promote sustainable farming practices.",
  },
  {
    image: "/Rectangle 61.png",
    title: "Our Vision",
    text: "We envision to become a leading force in transforming African agriculture through technology, creating a future where every small-scale farmer thrives with access to smart, efficient, and sustainable farming solutions.",
  },
  {
    image: "/Rectangle 55.png",
    title: "Our Mission",
    text: "Our mission is to empower small-scale farmers in Zimbabwe by leveraging drone technology to enhance agricultural productivity, reduce labor inefficiencies, and promote sustainable farming practices.",
  },
  {
    image: "/Rectangle 61.png",
    title: "Our Vision",
    text: "We envision to become a leading force in transforming African agriculture through technology, creating a future where every small-scale farmer thrives with access to smart, efficient, and sustainable farming solutions.",
  },
  {
    image: "/Rectangle 55.png",
    title: "Our Mission",
    text: "Our mission is to empower small-scale farmers in Zimbabwe by leveraging drone technology to enhance agricultural productivity, reduce labor inefficiencies, and promote sustainable farming practices.",
  },
  {
    image: "/Rectangle 61.png",
    title: "Our Vision",
    text: "We envision to become a leading force in transforming African agriculture through technology, creating a future where every small-scale farmer thrives with access to smart, efficient, and sustainable farming solutions.",
  },
  {
    image: "/Rectangle 55.png",
    title: "Our Mission",
    text: "Our mission is to empower small-scale farmers in Zimbabwe by leveraging drone technology to enhance agricultural productivity, reduce labor inefficiencies, and promote sustainable farming practices.",
  },
  {
    image: "/Rectangle 61.png",
    title: "Our Vision",
    text: "We envision to become a leading force in transforming African agriculture through technology, creating a future where every small-scale farmer thrives with access to smart, efficient, and sustainable farming solutions.",
  },
  {
    image: "/Rectangle 55.png",
    title: "Our Mission",
    text: "Our mission is to empower small-scale farmers in Zimbabwe by leveraging drone technology to enhance agricultural productivity, reduce labor inefficiencies, and promote sustainable farming practices.",
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
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
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
