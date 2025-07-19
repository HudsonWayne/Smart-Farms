"use client";

const AboutSection = () => {
  return (
    <div className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center">
      {/* Background Image */}
      <img
        src="/about.png"
        alt="About Smart Farms"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* Text Content */}
      <div className="relative z-10 px-4 md:px-8 text-center max-w-4xl">
        <p className="text-white text-base md:text-xl lg:text-2xl leading-relaxed"
          style={{
            fontFamily: "Georgia, serif",
            letterSpacing: "0.05em",
          }}
        >
          Smart Farms seeks to improve food security in Zimbabwe using advanced
          drone technology to assist smallholder and medium scale farmers with
          land mapping and surveying, crop spraying and fertilizer application.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
