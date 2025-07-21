"use client";

export default function OurTeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12" style={{ fontFamily: "Georgia, serif" }}>
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700">
          Our Team
        </h2>
      </div>

      {/* Team Members */}
      <div className="grid md:grid-cols-3 gap-12">
        {/* Team Member 1 */}
        <div className="text-center">
          <img
            src="/founder2.png" // Updated image path for Trymore
            alt="Trymore Kunjenjema"
            className="w-full h-72 mx-auto mb-4 object-cover" // Fixed height for image alignment
          />
          <h3 className="text-xl font-bold text-green-700">Trymore Kunjenjema</h3>
          <p className="text-gray-700 font-medium">Founder and CEO</p>
          <p className="text-gray-600 text-sm mt-2">
            A detail-oriented individual who brings his energy, leadership skills, and entrepreneurial mindset, Trymore is a Mechanical Engineer, a climate change advocate who has devoted his engineering technical skills to innovate in building smart systems to aid in agriculture evolution.
          </p>
        </div>

        {/* Team Member 2 */}
        <div className="text-center">
          <img
            src="/girl1.png" // Updated image path for Praise
            alt="Praise K. Machengere"
            className="w-full h-72 mx-auto mb-4 object-cover" // Fixed height for image alignment
          />
          <h3 className="text-xl font-bold text-green-700">Praise K. Machengere</h3>
          <p className="text-gray-700 font-medium">Human Resources (HR) Manager</p>
          <p className="text-gray-600 text-sm mt-2">
            Her dedication to carrying the vision of Smart Farms makes her an ideal and important member of the team. Praise is a Biomedical Science student who finds joy when she involves herself in the cause of social change. She is so interested in environmental conservation where actions that do not harm the planet matter to her most.
          </p>
        </div>

        {/* Team Member 3 */}
        <div className="text-center">
          <img
            src="/girl 2.png" // Updated image path for Amanda
            alt="Amanda N. Maphosa"
            className="w-full h-72 mx-auto mb-4 object-cover" // Fixed height for image alignment
          />
          <h3 className="text-xl font-bold text-green-700">Amanda N. Maphosa</h3>
          <p className="text-gray-700 font-medium">Chief Operating Officer (COO)</p>
          <p className="text-gray-600 text-sm mt-2">
            Amanda leads our operations. She brings intellectual skills in planning and logistics. As an integral part of the team, she is dedicated to uplifting Smart Farms through the venture’s activities. Amanda is an Electrical and Electronics Engineering senior student at Ashesi University in Ghana.
          </p>
        </div>
      </div>
    </div>
  );
}
