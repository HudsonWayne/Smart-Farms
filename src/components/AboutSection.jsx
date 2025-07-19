"use client";

const AboutSection = () => {
  return (
    <div className="relative mt-8 w-full h-[70vh] px-5">
      <img
        src="/about.png"
        alt="About Smart Farms"
        className="w-full h-full object-cover"
        draggable={false}
      />
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-center text-[27px] leading-[1.3] px-5" style={{
          fontFamily: "Georgia, serif",
          maxWidth: "60%",
          letterSpacing: "0.05em",
          zIndex: 10
        }}>
          Smart Farms seeks to improve food security in Zimbabwe using advanced drone technology
          to assist smallholder and medium scale farmers with land mapping and surveying, crop
          spraying and fertilizer application.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
