"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function AboutPage() {
  const cardData = [
    { title: "Our Values" },
    {
      title: "Productivity",
      content:
        "At Smart Farms, we prioritize increasing the output and efficiency of smallholder farmers. By integrating drone technology into their daily farming operations, we help farmers save time, reduce labor intensity, and achieve higher yields with fewer resources. Our solutions are designed to optimize every step of the farming process from crop monitoring to precise input application.",
    },
    {
      title: "Sustainability",
      content:
        "We are committed to promoting environmentally and economically sustainable farming practices. Through smart resource management and minimal chemical exposure, our technologies help protect the soil, water, and biodiversity. We aim to create systems that not only support farmers today but also preserve the environment for future generations.",
    },
    {
      title: "Innovation",
      content:
        "Innovation is at the forefront of everything we do. Smart Farms constantly explores cutting-edge technologies, from aerial imaging and automated spraying to data analytics, to develop new tools and approaches that solve real challenges in agriculture. We believe in thinking ahead and adapting quickly to meet farmers' evolving needs.",
    },
    {
      title: "Technology",
      content:
        "We harness the power of advanced technologies, especially drones and digital platforms to make farming smarter, simpler, and more scalable. Our goal is to democratize access to modern tools so even the smallest farms can benefit from precision agriculture.",
    },
    {
      title: "Climate Conscious",
      content:
        "Smart Farms is deeply aware of the impact of climate change on agriculture. Our solutions are designed to help farmers adapt, by offering real-time data, early warning systems, and tools to optimize water and input use. We stand for climate-resilient agriculture that supports both people and the planet.",
    },
  ];

  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleReadMore = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] flex items-center justify-center">
        <Image
          src="/Pic 4.jpg"
          alt="Drone spraying field"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-16 text-center w-full">
          <div className="max-w-7xl mx-auto">
            <h1
              className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-4"
              style={{ fontFamily: "Georgia, serif", color: "#72AE1C" }}
            >
              About Us
            </h1>
            <p 
              className="text-xs sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto px-2"
              style={{ fontFamily: "Georgia, serif", color:"white" }}
            >
              Empowering Zimbabwe's small and medium-scale farmers with drone
              technology to increase crop yields, create jobs, and secure a
              sustainable agricultural future.
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          <div className="order-2 lg:order-1 flex justify-center">
            <Image
              src="/Pic 25.jpeg"
              alt="Smart Fertilizer Application"
              width={750}
              height={500}
              className="w-full h-auto sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] object-cover rounded-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6"
              style={{ fontFamily: "Georgia, serif", color: "#72AE1C" }}
            >
              Who We Are
            </h2>
            <p
              className="text-xs sm:text-base md:text-lg leading-relaxed text-justify"
              style={{ fontFamily: "Georgia, serif", fontSize:"23.7px" }}
            >
              Smart Farms is an enterprise committed to using innovation to
              ensure food security, improve livelihoods, and transform rural
              communities through precision agriculture solutions in Zimbabwe.
              We take advantage of advanced high-resolution camera drones embedded
              with smart sensors for land mapping, surveying, crop health
              monitoring, and pesticide and fertilizer applications. Our actions
              contribute to positive climate change, and we are on a goal to end
              poverty and hunger. We want to help smallholders and medium-scale
              farmers realize their value to the economy of the country through
              their agricultural harvests.
            </p>
          </div>
        </div>
      </div>

      {/* Message from the Founder */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 mt-16 sm:mt-20 md:mt-24 lg:mt-28 text-center">
        <h2
          className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8"
          style={{ fontFamily: "Georgia, serif", color: "#72AE1C" }}
        >
          Message from the Founder
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start mt-8">
          <div className="flex justify-center">
            <Image
              src="/Message from the Founder.jpg"
              alt="Message from the Founder"
              width={600}
              height={600}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          <div>
            <p
              className="text-xs sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify"
              style={{ fontFamily: "Georgia, serif", fontSize:"23.7px" }}
            >
             “The agricultural sector in Zimbabwe contributes about 21% towards the country’s GDP. Out of this, more than 50% comes from smallholder and medium-scale farmers yet they are still relying on traditional methods of farming that are so outdated, imprecise, and labor-intensive. Clearly, smallholder and medium-scale farmers are under-represented as they have the potential to contribute so much to the country’s economy. As someone who grew up in a farming community, I have witnessed firsthand the struggles of my family and neighbors, losing crops to unpredictable weather, pest attacks, and the sheer exhaustion of manual labor. I have watched hard-working farmers struggle to make a living, not because they lack knowledge or effort, but because they lack access to modern tools and technologies that could revolutionize their productivity. Smart Farms was born out of my desire to change this narrative. By integrating drone technology into agriculture, we are creating a future where farmers can monitor crops, apply inputs with precision, and make data-driven decisions—all with minimal effort and maximum impact. Our mission is to empower these farmers, increase food security, and promote sustainable farming practices. I believe that with the right support and innovation, smallholder farmers will no longer be left behind. They will become the backbone of a technologically empowered and thriving agricultural economy.”
            </p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 bg-white mt-16 sm:mt-20 md:mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cardData.map((card, index) =>
            index === 0 ? (
              <div
                key={index}
                className="col-span-1 sm:col-span-2 lg:col-span-1 text-center flex items-center justify-center py-4"
                style={{ fontFamily: "Georgia, serif" }}
              >
                <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: "#72AE1C" }}>
                  {card.title}
                </h3>
              </div>
            ) : (
              <div
                key={index}
                className="bg-[#190040] text-white p-4 sm:p-5 md:p-6 rounded-2xl shadow-lg transition-transform hover:scale-[1.02] w-full overflow-x-auto md:overflow-visible"
                style={{ fontFamily: "Georgia, serif", textAlign: "justify" }}
              >
                <h3 className="text-xs sm:text-lg md:text-xl font-bold mb-3" style={{ color: "#72AE1C" }}>
                  {card.title}
                </h3>
                <p className={`${expandedCards.includes(index) ? "" : "line-clamp-4"} text-xs sm:text-base leading-relaxed`}>
                  {card.content}
                </p>
                <button
                  onClick={() => toggleReadMore(index)}
                  className="mt-4 bg-[#72AE1C] hover:bg-green-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  {expandedCards.includes(index) ? "Show Less" : "Read More"}
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
