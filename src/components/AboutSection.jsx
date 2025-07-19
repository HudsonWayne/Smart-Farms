// src/components/AboutSection.tsx

"use client";

const AboutSection = () => {
  return (
    <div className="relative mt-8 w-full h-[70vh]">
      {/* Background image */}
      <img
        src="/about.png"
        alt="About Smart Farms"
        className="w-full h-full object-cover"
        draggable={false}
      />

      {/* Dark overlay with stronger opacity */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: 0.6 }}
      />

      {/* Text content */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <p
          className="text-white text-center"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "27px",
            maxWidth: "60%",
            zIndex: 10,
            lineHeight: "1.3",
            letterSpacing: "0.05em",  // Added letter spacing here
          }}
        >
          Smart Farms seeks to improve food security in Zimbabwe using advanced drone technology
          to assist smallholder and medium scale farmers with land mapping and surveying, crop
          spraying and fertilizer application.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
