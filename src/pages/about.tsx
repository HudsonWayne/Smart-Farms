"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function AboutPage() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleReadMore = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const cardData = [
    {
      title: "Our Values",
    },
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

  return (
    <>
      {/* Background Hero Section */}
      <div className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center ">
        <Image
          src="/Rectangle 23.png"
          alt="Drone spraying field"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="absolute inset-0 w-full h-full"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black opacity-60" />
        {/* Full width container with padding */}
        <div className="relative z-10 px-4 md:px-8 lg:px-16 text-center w-full">
          <div className="max-w-7xl mx-auto">
            <h1
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{
                fontSize: "80px",
                fontFamily: "Georgia, serif",
                color: "#72AE1C",
              }}
            >
              About Us
            </h1>
            <p
              style={{ fontSize: "30px" }}
              className="text-white text-lg md:text-xl leading-relaxed font-[Georgia]"
            >
              Empowering Zimbabwe&apos;s small and medium-scale farmers with drone
              technology to increase crop yields, create jobs, and secure a
              sustainable agricultural future.
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mt-10 mb-10 w-full px-4 md:px-8 lg:px-16 mt-[100px]">
        <div>
          <Image
            src="/Rectangle 55 (1).png"
            alt="Smart Fertilizer Application with AI and Drone Technology"
            width={650}
            height={250}
          />
        </div>
        <div className="max-w-prose">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: "Georgia, serif", color: "#72AE1C", fontSize:"60px"}}
          >
            Who We Are
          </h2>
         <p
  className="text-gray-800 text-lg leading-relaxed text-justify"
  style={{ fontFamily: "Georgia, serif", fontSize: "23px", maxWidth: "calc(100% + 110px)" }}
>
  “Smart Farms is an enterprise committed to using innovation to
  ensure food security, improve livelihoods, and transform rural
  communities through precision agriculture solutions in Zimbabwe. We
  take advantage of advanced high-resolution camera drones embedded
  with smart sensors for land mapping, surveying, crop health
  monitoring, and pesticide and fertilizer applications. Our actions
  contribute to positive climate change, and we are on a goal to end
  poverty and hunger. We want to help smallholders and medium-scale
  farmers realize their value to the economy of the country through
  their agricultural harvests.”
</p>

        </div>
      </div>

      {/* Message from the Founder */}
      <div className="text-center my-12 mt-[100px] w-full px-4 md:px-8 lg:px-16">
        <h2
          className="text-3xl font-bold"
          style={{ fontFamily: "Georgia, serif", color: "#72AE1C", fontSize:"60px" }}
        >
          Message from the Founder
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center w-full px-4 md:px-8 lg:px-16 mb-16">
        <div className="max-w-prose">
          <p
            className="text-gray-800 text-lg leading-relaxed text-justify"
            style={{ fontFamily: "Georgia, serif" }}
          >
            “The agricultural sector in Zimbabwe contributes about 21% towards
            the country’s GDP. Out of this, more than 50% comes from smallholder
            and medium-scale farmers yet they are still relying on traditional
            methods of farming that are so outdated, imprecise, and
            labor-intensive. Clearly, smallholder and medium-scale farmers are
            under-represented as they have the potential to contribute so much
            to the country’s economy. As someone who grew up in a farming
            community, I have witnessed firsthand the struggles of my family and
            neighbors, losing crops to unpredictable weather, pest attacks, and
            the sheer exhaustion of manual labor. I have watched hard-working
            farmers struggle to make a living, not because they lack knowledge
            or effort, but because they lack access to modern tools and
            technologies that could revolutionize their productivity. Smart
            Farms was born out of my desire to change this narrative. By
            integrating drone technology into agriculture, we are creating a
            future where farmers can monitor crops, apply inputs with precision,
            and make data-driven decisions—all with minimal effort and maximum
            impact. Our mission is to empower these farmers, increase food
            security, and promote sustainable farming practices. I believe that
            with the right support and innovation, smallholder farmers will no
            longer be left behind. They will become the backbone of a
            technologically empowered and thriving agricultural economy.”
          </p>
        </div>
        <div>
          <Image
            src="/founder.png"
            alt="Message from the Founder"
            width={400}
            height={200}
            className="w-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-12 bg-white mb-[100px] w-full px-4 md:px-8 lg:px-16">
        <div className="mb-12">
          {/* Optional heading removed as before */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4 md:px-0">
          {cardData.map((card, index) =>
            index === 0 ? (
              <div
                key={index}
                className="text-center flex items-center justify-center"
                style={{ fontFamily: "Georgia, serif" }}
              >
                <h3 className="text-4xl font-bold" style={{ color: "#72AE1C" }}>
                  {card.title}
                </h3>
              </div>
            ) : (
              <div
                key={index}
                className="bg-[#190040] text-white p-6 rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
                style={{ fontFamily: "Georgia, serif", textAlign: "justify" }}
              >
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "#72AE1C" }}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-sm ${
                    expandedCards.includes(index) ? "" : "line-clamp-4"
                  }`}
                >
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
    </>
  );
}
