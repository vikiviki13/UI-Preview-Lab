import React, { useState } from "react";

const AboutSection = () => {
  const [iteration, setIteration] = useState(1);

  // ======================== ITERATION 1 - ELEGANT MODERN ========================
  const renderIteration1 = () => (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Tag */}
        <p className="text-sm text-[#DD6451] font-semibold tracking-widest mb-4 uppercase">
          About
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] leading-tight mb-4">
          Dr. P. S. Venkatesh Rao
        </h1>

        {/* Qualification */}
        <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-4xl font-medium">
          <span className="text-[#DD6451] font-bold">MBBS</span> (Vellore) • <span className="text-[#DD6451] font-bold">MS</span> (Vellore) • <span className="text-[#DD6451] font-bold">DNB</span> • <span className="text-[#DD6451] font-bold">FICS</span> • <span className="text-[#DD6451] font-bold">FRCS</span> (Glasgow) • <span className="text-[#DD6451] font-bold">FACS</span> • <span className="text-[#DD6451] font-bold">FAMS</span> • <span className="text-[#DD6451] font-bold">FAES</span> • <span className="text-[#DD6451] font-bold">FICLS</span>
        </p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#DD6451]/20 transition-all transform hover:scale-105">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">🏥</div>
            </div>
            <p className="text-[#1A1A1A] text-base leading-relaxed">
              Consultant Endocrine, Breast & Laparoscopic Surgeon with{" "}
              <span className="font-bold text-[#DD6451]">
                45+ years of surgical experience
              </span>
              {" "}in complex procedures and patient care.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#DD6451]/20 transition-all transform hover:scale-105">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">🔬</div>
            </div>
            <p className="text-[#1A1A1A] text-base leading-relaxed">
              Pioneer in advanced surgical techniques for thyroid, parathyroid,
              insulinoma, breast cancer, and endocrine & laparoscopic procedures.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#DD6451]/20 transition-all transform hover:scale-105">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">🌍</div>
            </div>
            <p className="text-[#1A1A1A] text-base leading-relaxed">
              Treated patients from across the globe, including complex and failed cases,
              with exceptional outcomes and patient satisfaction.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#DD6451]/20 transition-all transform hover:scale-105">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">📚</div>
            </div>
            <p className="text-[#1A1A1A] text-base leading-relaxed">
              Former faculty at CMC Vellore, AIIMS Delhi, UCMS Delhi, MSRMC Bengaluru,
              and renowned Professor of Endocrine Surgery.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-4">
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-[#DD6451] to-[#94241B] text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg transform hover:scale-105 active:scale-95 transition-all"
          >
            View Full Profile →
          </a>
          <a
            href="#"
            className="inline-block border-2 border-[#DD6451] text-[#DD6451] px-8 py-4 rounded-2xl font-bold hover:bg-[#DD6451]/5 transition-all"
          >
            Contact Now
          </a>
        </div>
      </div>
    </section>
  );

  // ======================== ITERATION 2 - MINIMAL CLEAN ========================
  const renderIteration2 = () => (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Tag */}
        <p className="text-xs text-gray-600 font-bold tracking-[0.2em] mb-6 uppercase">
          About
        </p>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
          Dr. P. S.<br />Venkatesh Rao
        </h1>

        {/* Qualification */}
        <p className="text-gray-700 text-base md:text-lg mb-12 max-w-4xl font-medium">
          MBBS (Vellore) • MS (Vellore) • DNB • FICS • FRCS (Glasgow) • FACS • FAMS • FAES • FICLS
        </p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1 */}
          <div className="border-b-2 border-gray-900 pb-6 md:pb-8">
            <p className="text-gray-900 text-lg leading-relaxed">
              Consultant Endocrine, Breast & Laparoscopic Surgeon with{" "}
              <span className="font-bold">45+ years of surgical experience</span>.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-b-2 border-gray-900 pb-6 md:pb-8">
            <p className="text-gray-900 text-lg leading-relaxed">
              Pioneer in advanced surgical techniques for thyroid, parathyroid,
              insulinoma, breast cancer, and endocrine & laparoscopic procedures.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-b-2 border-gray-900 pb-6 md:pb-8">
            <p className="text-gray-900 text-lg leading-relaxed">
              Treated patients from across the globe, including complex and failed cases.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border-b-2 border-gray-900 pb-6 md:pb-8">
            <p className="text-gray-900 text-lg leading-relaxed">
              Former faculty at CMC Vellore, AIIMS Delhi, UCMS Delhi, MSRMC Bengaluru,
              and Professor of Endocrine Surgery.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-6 flex-col sm:flex-row">
          <a
            href="#"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-black transition-all"
          >
            View Full Profile
          </a>
          <a
            href="#"
            className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-all"
          >
            Contact Now
          </a>
        </div>
      </div>
    </section>
  );

  // ======================== ITERATION 3 - BOLD PREMIUM ========================
  const renderIteration3 = () => (
    <section className="bg-gradient-to-br from-gray-900 via-[#94241B] to-gray-900 py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#DD6451] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DD6451] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Tag */}
        <p className="text-xs text-[#DD6451] font-bold tracking-[0.3em] mb-6 uppercase">
          About Dr. Rao
        </p>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
          Dr. P. S.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DD6451] via-orange-400 to-[#DD6451]">
            Venkatesh Rao
          </span>
        </h1>

        {/* Qualification */}
        <div className="mb-12 max-w-4xl">
          <p className="text-white/80 text-base md:text-lg font-medium">
            <span className="text-[#DD6451] font-bold">MBBS</span> (Vellore) • 
            <span className="text-[#DD6451] font-bold"> MS</span> (Vellore) • 
            <span className="text-[#DD6451] font-bold"> DNB</span> • 
            <span className="text-[#DD6451] font-bold"> FICS</span> • 
            <span className="text-[#DD6451] font-bold"> FRCS</span> (Glasgow) • 
            <span className="text-[#DD6451] font-bold"> FACS</span> • 
            <span className="text-[#DD6451] font-bold"> FAMS</span> • 
            <span className="text-[#DD6451] font-bold"> FAES</span> • 
            <span className="text-[#DD6451] font-bold"> FICLS</span>
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:border-[#DD6451]/50 transition-all">
            <div className="text-4xl mb-4">🏥</div>
            <p className="text-white text-base leading-relaxed">
              Consultant Endocrine, Breast & Laparoscopic Surgeon with{" "}
              <span className="font-bold text-[#DD6451]">
                45+ years of surgical experience
              </span>
              {" "}in complex procedures.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:border-[#DD6451]/50 transition-all">
            <div className="text-4xl mb-4">🔬</div>
            <p className="text-white text-base leading-relaxed">
              Pioneer in advanced surgical techniques for thyroid, parathyroid,
              insulinoma, breast cancer, and endocrine procedures.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:border-[#DD6451]/50 transition-all">
            <div className="text-4xl mb-4">🌍</div>
            <p className="text-white text-base leading-relaxed">
              Treated patients from across the globe, including complex and failed cases,
              with exceptional outcomes.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:border-[#DD6451]/50 transition-all">
            <div className="text-4xl mb-4">📚</div>
            <p className="text-white text-base leading-relaxed">
              Former faculty at CMC Vellore, AIIMS Delhi, UCMS Delhi, MSRMC Bengaluru,
              and Professor of Endocrine Surgery.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-4 flex-col sm:flex-row">
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-[#DD6451] to-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-[#DD6451]/50 transform hover:scale-105 active:scale-95 transition-all"
          >
            View Full Profile →
          </a>
          <a
            href="#"
            className="inline-block border-2 border-[#DD6451] text-[#DD6451] px-8 py-4 rounded-xl font-bold hover:bg-[#DD6451]/10 transition-all"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  );

  // ======================== MAIN RENDER ========================
  return (
    <div className="w-full">
      {/* Iteration Selector */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white shadow-xl rounded-full p-1 border-2 border-gray-100">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => setIteration(num)}
            className={`w-10 h-10 rounded-full font-bold text-xs transition-all transform ${
              iteration === num
                ? 'bg-[#DD6451] text-white shadow-lg scale-110'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      {/* Version Label */}
      <div className="fixed top-4 left-4 z-50 bg-white shadow-lg rounded-full px-4 py-2 text-xs font-bold text-[#DD6451] border-2 border-[#DD6451]">
        Design {iteration}/3
      </div>

      {/* Render Selected Iteration */}
      {iteration === 1 && renderIteration1()}
      {iteration === 2 && renderIteration2()}
      {iteration === 3 && renderIteration3()}
    </div>
  );
};

export default AboutSection;