"use client";

const AboutSection = () => {
  return (
    <div className="relative mt-[20px] w-full h-[700px]">
      {/* About image */}
      <img
        src="/about.png"
        alt="About Smart Farms"
        className="w-full h-full object-cover"
        draggable={false}
      />

      {/* Slight dark overlay */}
      <div className="absolute inset-0 bg-black" style={{ opacity: 0.4 }} />

      {/* Text content */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <p
          className="text-white text-center"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "27px",
            maxWidth: "80%",
            zIndex: 10,
            lineHeight: "1.7",
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
