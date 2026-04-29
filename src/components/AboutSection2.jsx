import React, { useState } from 'react';
import { Phone, MapPin, Award, Heart } from 'lucide-react';

const DoctorProfile = () => {
  const [iteration, setIteration] = useState(1);

  // ======================== ITERATION 1 - ELEGANT MODERN ========================
  const renderIteration1 = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 p-6 md:p-12 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <p className="text-[#39b54a] font-bold text-sm mb-3 uppercase tracking-widest">About Doctor</p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#003d71] leading-tight">
                Dr. P.S. Venkatesh Rao
              </h1>
              <p className="text-[#39b54a] text-lg font-semibold">
                MBBS (Vellore), MS (Vellore), DNB, FICS, FRCS(Glasgow), FACS, FAMS, FAES, FICLS
              </p>
            </div>

            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-[#39b54a] font-bold text-2xl">✓</span>
                <span>
                  Consultant Endocrine, Breast & Laparoscopic Surgeon with over <strong className="text-[#003d71]">45+ years of surgical experience.</strong>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#39b54a] font-bold text-2xl">✓</span>
                <span>
                  Pioneered cosmetically superior, effective & safe techniques for thyroid, parathyroid, Insulinoma, breast cancer, and other laparoscopic, endocrine, and general surgeries with extensive recognition.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#39b54a] font-bold text-2xl">✓</span>
                <span>
                  Operated on patients from around the world for complex problems and failed surgery done elsewhere.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#39b54a] font-bold text-2xl">✓</span>
                <span>
                  Former faculty CMC(Vellore), AIIMS(New Delhi), UCMS(Delhi), MSRMC(Bengaluru), and Professor of Endocrine Surgery.
                </span>
              </li>
            </ul>

            <div className="bg-[#39b54a]/10 border-l-4 border-[#39b54a] p-4 rounded-lg">
              <p className="text-[#003d71] font-semibold">
                🌟 See the 'About the Surgeon' page for more academic and career attainments; and National TV appearances, Print media articles.
              </p>
            </div>
          </div>

          {/* Right Column: Promotional Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-2 border-[#00c1cf] bg-white hover:shadow-3xl transition-all transform hover:scale-105">
              
              {/* Card Header */}
              <div className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-b-2 border-[#00c1cf]">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-3xl font-bold text-[#003d71]">M</div>
                  <div className="text-4xl">👨‍⚕️</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h2 className="text-[#003d71] text-2xl font-bold leading-tight mb-2">
                      Excellence in<br />
                      <span className="text-[#39b54a]">Endocrine Surgery</span>
                    </h2>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="font-bold text-[#003d71] text-lg">Dr. P S Venkatesh Rao</p>
                    <p className="text-sm text-gray-600 font-medium">45+ years of expertise</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Award size={16} className="text-[#39b54a]" />
                      <span className="text-xs font-semibold text-gray-700">Senior Consultant Surgeon</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Banner */}
              <div className="bg-gradient-to-r from-[#003d71] to-[#1e40af] text-white py-3 px-6 text-center font-bold tracking-wide">
                Department of Endocrine Surgery
              </div>

              {/* Card Body: Services */}
              <div className="bg-[#003d71] text-white p-6">
                <p className="font-bold border-b-2 border-white/30 pb-3 mb-4">Specialized Services</p>
                <div className="grid grid-cols-2 gap-3 text-xs leading-relaxed">
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <span className="text-[#39b54a] font-bold">•</span>
                      <span>Thyroid surgery & cancer</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#39b54a] font-bold">•</span>
                      <span>Breast surgery & cancer</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#39b54a] font-bold">•</span>
                      <span>Parathyroid surgery</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#39b54a] font-bold">•</span>
                      <span>Nipple discharge surgery</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <span className="text-[#39b54a] font-bold">•</span>
                      <span>Insulinoma surgery</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#39b54a] font-bold">•</span>
                      <span>Neuroendocrine tumors</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#39b54a] font-bold">•</span>
                      <span>Ovarian endocrine surgery</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#39b54a] font-bold">•</span>
                      <span>Testicular tumors</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-4 border-t border-white/30 space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#39b54a]" />
                    <div className="text-sm">
                      <p className="font-bold">Manipal Hospitals</p>
                      <p className="text-white/80">Bangalore</p>
                    </div>
                  </div>
                  <div className="bg-[#39b54a]/20 border border-[#39b54a]/50 rounded-lg p-3 flex items-center gap-2">
                    <Phone size={16} className="text-[#39b54a]" />
                    <div>
                      <p className="text-[10px] text-white/70">For appointments:</p>
                      <p className="font-bold text-sm">+91 98450 61355</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

  // ======================== ITERATION 2 - MINIMAL CLEAN ========================
  const renderIteration2 = () => (
    <div className="min-h-screen bg-white p-6 md:p-12 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4 border-l-4 border-gray-900 pl-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600">About</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Dr. P.S.<br />Venkatesh Rao
              </h1>
              <p className="text-gray-700 font-medium text-base">
                MBBS (Vellore) • MS (Vellore) • DNB • FICS • FRCS • FACS • FAMS • FAES • FICLS
              </p>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed text-base">
              <p>
                <strong>Consultant Endocrine, Breast & Laparoscopic Surgeon</strong> with over 45+ years of surgical experience in complex procedures and patient care excellence.
              </p>
              <p>
                Pioneered cosmetically superior, effective & safe techniques for thyroid, parathyroid, Insulinoma, breast cancer, and other laparoscopic, endocrine, and general surgeries with extensive national, international and media recognition.
              </p>
              <p>
                Operated on patients from around the world for complex problems and failed surgery done elsewhere with exceptional outcomes.
              </p>
              <p>
                <strong>Former faculty</strong> CMC(Vellore), AIIMS(New Delhi), UCMS(Delhi), MSRMC(Bengaluru), and Professor of Endocrine Surgery.
              </p>
              <p className="text-gray-700 italic">
                See the 'About the Surgeon' page for more academic and career attainments; and National TV appearances, Print media articles.
              </p>
            </div>
          </div>

          {/* Right Column: Promotional Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-lg overflow-hidden border border-gray-200 bg-gray-50 hover:border-gray-400 transition-all">
              
              {/* Card Header */}
              <div className="p-8 border-b border-gray-200 bg-white">
                <div className="space-y-4">
                  <div className="text-5xl">👨‍⚕️</div>
                  <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                    Dr. P S Venkatesh Rao
                  </h2>
                  <p className="text-sm text-gray-600">
                    45+ years in Endocrine, Breast & Laparoscopic Surgery
                  </p>
                </div>
              </div>

              {/* Card Banner */}
              <div className="bg-gray-900 text-white py-3 px-6 text-center font-bold text-sm tracking-wide">
                Department of Endocrine Surgery
              </div>

              {/* Card Body */}
              <div className="bg-gray-50 p-6 border-t border-gray-200">
                <p className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Services</p>
                <div className="grid grid-cols-2 gap-3 text-xs text-gray-700 leading-relaxed mb-6">
                  <ul className="space-y-2">
                    <li>• Thyroid surgery</li>
                    <li>• Breast surgery</li>
                    <li>• Parathyroid surgery</li>
                    <li>• Nipple discharge</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Insulinoma surgery</li>
                    <li>• Neuroendocrine tumors</li>
                    <li>• Ovarian endocrine</li>
                    <li>• Testicular tumors</li>
                  </ul>
                </div>

                {/* Footer */}
                <div className="space-y-3 border-t border-gray-200 pt-4">
                  <div className="text-sm">
                    <p className="font-bold text-gray-900">Manipal Hospitals</p>
                    <p className="text-gray-600">Bangalore</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-gray-900" />
                    <div className="text-sm">
                      <p className="text-gray-600 text-xs">Appointments</p>
                      <p className="font-bold text-gray-900">+91 98450 61355</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

  // ======================== ITERATION 3 - BOLD PREMIUM ========================
  const renderIteration3 = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-6 md:p-12 font-sans relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-cyan-400 font-bold text-sm uppercase tracking-widest">Excellence in Surgery</p>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
                Dr. P.S. Venkatesh<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400">Rao</span>
              </h1>
              <p className="text-cyan-300 text-lg font-semibold">
                MBBS • MS • DNB • FICS • FRCS • FACS • FAMS • FAES • FICLS
              </p>
            </div>

            <div className="space-y-6 text-gray-200 leading-relaxed text-base">
              <div className="flex gap-4">
                <div className="text-cyan-400 text-2xl font-bold flex-shrink-0">✦</div>
                <p>
                  <strong className="text-white">45+ Years of Excellence</strong> in Endocrine, Breast & Laparoscopic Surgery with proven expertise in complex procedures.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-cyan-400 text-2xl font-bold flex-shrink-0">✦</div>
                <p>
                  <strong className="text-white">Pioneer</strong> in cosmetically superior, effective & safe techniques with extensive national and international recognition.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-cyan-400 text-2xl font-bold flex-shrink-0">✦</div>
                <p>
                  <strong className="text-white">Global Experience</strong> treating complex problems and failed surgeries from patients worldwide.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-cyan-400 text-2xl font-bold flex-shrink-0">✦</div>
                <p>
                  <strong className="text-white">Academic Leader</strong> as Professor at CMC, AIIMS, UCMS, and MSRMC institutions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Promotional Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-400/50 bg-gradient-to-br from-blue-900/80 to-gray-900/80 backdrop-blur-xl hover:border-cyan-400 transition-all transform hover:scale-105">
              
              {/* Card Header */}
              <div className="p-8 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 border-b border-cyan-400/30">
                <div className="space-y-4">
                  <div className="text-5xl">👨‍⚕️</div>
                  <div>
                    <h2 className="text-2xl font-bold text-cyan-400 leading-tight">
                      Dr. P S<br />Venkatesh Rao
                    </h2>
                    <p className="text-sm text-cyan-300/80 mt-2 font-semibold">
                      Senior Consultant - Endocrine Surgery
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-cyan-400/20 w-fit px-3 py-1 rounded-full border border-cyan-400/50">
                    <Award size={14} className="text-cyan-400" />
                    <span className="text-xs font-bold text-cyan-300">45+ Years Excellence</span>
                  </div>
                </div>
              </div>

              {/* Card Banner */}
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 px-6 text-center font-bold tracking-wide">
                Department of Endocrine Surgery
              </div>

              {/* Card Body */}
              <div className="bg-gray-900/50 p-6 border-t border-cyan-400/30">
                <p className="font-bold text-cyan-400 mb-4 text-sm uppercase tracking-wider">Specialized Services</p>
                <div className="grid grid-cols-2 gap-3 text-xs text-gray-300 leading-relaxed mb-6">
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <span className="text-cyan-400">▸</span>
                      <span>Thyroid surgery</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-cyan-400">▸</span>
                      <span>Breast surgery</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-cyan-400">▸</span>
                      <span>Parathyroid</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-cyan-400">▸</span>
                      <span>Nipple discharge</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <span className="text-cyan-400">▸</span>
                      <span>Insulinoma</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-cyan-400">▸</span>
                      <span>Neuroendocrine</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-cyan-400">▸</span>
                      <span>Ovarian endocrine</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-cyan-400">▸</span>
                      <span>Testicular tumors</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="space-y-4 border-t border-cyan-400/30 pt-4">
                  <div className="flex items-center gap-3 bg-cyan-400/10 rounded-lg p-3 border border-cyan-400/30">
                    <MapPin size={16} className="text-cyan-400" />
                    <div className="text-sm">
                      <p className="font-bold text-white">Manipal Hospitals</p>
                      <p className="text-gray-300">Bangalore</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg p-3 border border-cyan-400/50 cursor-pointer hover:from-cyan-400/30 hover:to-blue-400/30 transition-all">
                    <Phone size={16} className="text-cyan-400" />
                    <div>
                      <p className="text-gray-400 text-xs">For appointments:</p>
                      <p className="font-bold text-white text-sm">+91 98450 61355</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

  // ======================== MAIN RENDER ========================
  return (
    <div className="w-full">
      {/* Iteration Selector */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white shadow-xl rounded-full p-1 border-2 border-gray-200">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => setIteration(num)}
            className={`w-10 h-10 rounded-full font-bold text-xs transition-all transform ${
              iteration === num
                ? 'bg-[#003d71] text-white shadow-lg scale-110'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      {/* Version Label */}
      <div className="fixed top-4 left-4 z-50 bg-white shadow-lg rounded-full px-4 py-2 text-xs font-bold text-[#003d71] border-2 border-[#003d71]">
        Design {iteration}/3
      </div>

      {/* Render Selected Iteration */}
      {iteration === 1 && renderIteration1()}
      {iteration === 2 && renderIteration2()}
      {iteration === 3 && renderIteration3()}
    </div>
  );
};

export default DoctorProfile;