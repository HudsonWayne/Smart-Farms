"use client";

export default function OurTeamPage() {
  return (
    <div
      className="w-full px-4 md:px-8 lg:px-16 py-12"
      style={{ fontFamily: "Georgia, serif" }}
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[#72AE1C]">
          Our Team
        </h2>
      </div>

      {/* Team Members */}
      <div className="grid md:grid-cols-3 gap-12">
        {/* Team Member 1 */}
        <div className="text-center">
          <img
            src="/founder2.png"
            alt="Trymore Kunjenjema"
            className="w-full h-72 mx-auto mb-4 object-contain"
          />
          <h3 className="text-xl md:text-2xl font-bold text-[#72AE1C]">
            Trymore Kunjenjema
          </h3>
          <p className="text-base md:text-lg font-medium mt-1 text-[#72AE1C]">
            Founder and CEO
          </p>
          <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg text-justify">
            A detail-oriented individual who brings his energy, leadership
            skills, and entrepreneurial mindset. Trymore is a Mechanical
            Engineer, a climate change advocate who has devoted his engineering
            technical skills to innovate in building smart systems to aid in
            agriculture evolution.
          </p>
        </div>

        {/* Team Member 2 */}
        <div className="text-center">
          <img
            src="/girl1.png"
            alt="Praise K. Machengere"
            className="w-full h-72 mx-auto mb-4 object-contain"
          />
          <h3 className="text-xl md:text-2xl font-bold text-[#72AE1C]">
            Praise K. Machengere
          </h3>
          <p className="text-base md:text-lg font-medium mt-1 text-[#72AE1C]">
            Human Resources (HR) Manager
          </p>
          <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg text-justify">
            Her dedication to carrying the vision of Smart Farms makes her an
            ideal and important member of the team. Praise is a Biomedical
            Science student who finds joy when she involves herself in the cause
            of social change. She is interested in environmental conservation
            where actions that do not harm the planet matter to her most.
          </p>
        </div>

        {/* Team Member 3 */}
        <div className="text-center">
          <img
            src="/girl 2.png"
            alt="Amanda N. Maphosa"
            className="w-full h-72 mx-auto mb-4 object-contain"
          />
          <h3 className="text-xl md:text-2xl font-bold text-[#72AE1C]">
            Amanda N. Maphosa
          </h3>
          <p className="text-base md:text-lg font-medium mt-1 text-[#72AE1C]">
            Chief Operating Officer (COO)
          </p>
          <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg text-justify">
            Amanda leads our operations. She brings intellectual skills in
            planning and logistics. As an integral part of the team, she is
            dedicated to uplifting Smart Farms through the venture’s activities.
            Amanda is an Electrical and Electronics Engineering senior student
            at Ashesi University in Ghana.
          </p>
        </div>
      </div>

      {/* The Driving Force Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#72AE1C] mb-12">
          The driving force for Smart Farms
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 text-justify max-w-6xl mx-auto">
          “At Smart Farms, we are more than just a team — we are a movement of
          passionate, young innovators committed to transforming agriculture
          through technology. Our team is proudly youth-led, driven by a deep
          understanding of the challenges faced by small-scale farmers and a
          bold vision to create smarter, more sustainable solutions for the
          future. We believe that youth are not just the leaders of tomorrow —
          they are the changemakers of today. Our dynamic team brings together
          fresh ideas, technical expertise, and a strong sense of purpose to
          bridge the gap between traditional farming and the digital age.
          <br /><br />
          We are also proud of our gender-diverse team — made up of one male and
          two females — working side by side to challenge norms and ensure
          inclusive innovation in agriculture. Our diversity is our strength:
          it helps us see problems differently, build empathy with the
          communities we serve, and co-create solutions that are practical and
          impactful.”
        </p>
      </div>
    </div>
  );
}
