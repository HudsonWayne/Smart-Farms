"use client";

const AboutSection = () => {
  return (
    <div className="relative mt-8 w-full min-h-[60vh] md:min-h-[70vh]">
      <img
        src="/about.png"
        alt="About Smart Farms"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="relative flex items-center justify-center h-full px-4 md:px-8">
        <p
          className="text-white text-center text-base md:text-xl lg:text-2xl leading-relaxed max-w-4xl"
          style={{
            fontFamily: "Georgia, serif",
            letterSpacing: "0.05em",
            zIndex: 10,
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
