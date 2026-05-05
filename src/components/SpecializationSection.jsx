import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, Stethoscope, ChevronRight, Sparkles, Activity } from "lucide-react";

const specializations = [
  {
    title: "Thyroid, Parathyroid & Endocrine",
    shortTitle: "Thyroid & Endocrine",
    description: "Advanced diagnosis and surgical management of thyroid nodules, goiters, parathyroid disorders, and endocrine tumors.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800",
    tag: "Endocrine",
    tagColor: "emerald",
    stats: "2,400+ procedures",
  },
  {
    title: "Laparoscopic Surgery",
    shortTitle: "Laparoscopic Care",
    description: "Minimally invasive techniques reducing recovery time by 60%, with precision robotic-assisted procedures.",
    image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&q=80&w=800",
    tag: "Minimally Invasive",
    tagColor: "blue",
    stats: "1,800+ surgeries",
  },
  {
    title: "Breast Lump & Cancer Surgery",
    shortTitle: "Breast Surgery",
    description: "Comprehensive breast care including lumpectomy, mastectomy, and oncoplastic reconstruction for optimal outcomes.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    tag: "Oncology",
    tagColor: "rose",
    stats: "950+ cases",
  },
  {
    title: "Repeat, Complicated Surgery",
    shortTitle: "Complex Surgery",
    description: "Specialized expertise in revision surgeries and high-complexity cases that require advanced surgical precision.",
    image: "https://images.unsplash.com/photo-1530497610245-b1d15e448ec1?auto=format&fit=crop&q=80&w=800",
    tag: "Complex Cases",
    tagColor: "amber",
    stats: "600+ revisions",
  },
];

const tagStyles = {
  emerald: {
    light: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dark: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    dot: "bg-emerald-500",
    glow: "shadow-emerald-500/20",
    accent: "from-emerald-500 to-teal-500",
  },
  blue: {
    light: "bg-blue-50 text-blue-700 border-blue-200",
    dark: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    dot: "bg-blue-500",
    glow: "shadow-blue-500/20",
    accent: "from-blue-500 to-indigo-500",
  },
  rose: {
    light: "bg-rose-50 text-rose-700 border-rose-200",
    dark: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    dot: "bg-rose-500",
    glow: "shadow-rose-500/20",
    accent: "from-rose-500 to-pink-500",
  },
  amber: {
    light: "bg-amber-50 text-amber-700 border-amber-200",
    dark: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    dot: "bg-amber-500",
    glow: "shadow-amber-500/20",
    accent: "from-amber-500 to-orange-500",
  },
};

const SpecializationSection = () => {
  const [iteration, setIteration] = useState(1);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCard, setActiveCard] = useState(0);

  // ======================== ITERATION 1 - EDITORIAL LIGHT ========================
  const renderIteration1 = () => (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-50/60 via-violet-50/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-slate-100/60 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-gradient-to-r from-[#C5513E] to-transparent"></div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5513E]">
                Areas of Expertise
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 leading-tight tracking-tight">
              Our
              <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C5513E] to-[#8B2A1C]">
                Specializations
              </span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-gray-400 text-base leading-relaxed font-light">
              Decades of expertise across the most complex surgical disciplines, delivered with precision and care.
            </p>
            <button className="group mt-6 flex items-center gap-2 text-sm font-semibold text-[#C5513E] hover:text-[#8B2A1C] transition-colors">
              <span>View all specializations</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {specializations.map((item, index) => {
            const colors = tagStyles[item.tagColor];
            const isHovered = hoveredCard === index;
            return (
              <div
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`
                  relative rounded-3xl overflow-hidden h-[400px] md:h-[460px] transition-all duration-700 ease-out
                  ${isHovered
                    ? `shadow-2xl ${colors.glow} shadow-xl -translate-y-3`
                    : 'shadow-md hover:shadow-lg'
                  }
                `}>
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 brightness-75' : 'scale-100 brightness-90'
                      }`}
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                    }`}></div>

                  {/* Top Tag */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1.5 rounded-xl text-[10px] font-bold border backdrop-blur-md ${colors.dark}`}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Top Right Number */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-xs font-black text-white/80">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                    {/* Stats — shows on hover */}
                    <div className={`flex items-center gap-2 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}>
                      <Activity size={12} className="text-white/50" />
                      <span className="text-[11px] text-white/50 font-medium">{item.stats}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white leading-snug">
                      {item.title}
                    </h3>

                    {/* Description — shows on hover */}
                    <p className={`text-sm text-white/60 leading-relaxed font-light transition-all duration-500 line-clamp-2 ${isHovered ? 'opacity-100 translate-y-0 max-h-20' : 'opacity-0 translate-y-4 max-h-0'
                      }`}>
                      {item.description}
                    </p>

                    {/* CTA Row */}
                    <div className={`flex items-center justify-between pt-2 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}>
                      <span className="text-xs font-semibold text-white/50">Learn more</span>
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${colors.accent} flex items-center justify-center shadow-lg`}>
                        <ArrowUpRight size={15} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C5513E] to-[#8B2A1C] border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm">
                  {['S', 'P', 'A', 'R'][i]}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Trusted by 12,000+ patients</p>
              <p className="text-xs text-gray-400">Across all specializations</p>
            </div>
          </div>
          <button className="group px-8 py-4 bg-gradient-to-r from-[#C5513E] to-[#8B2A1C] text-white rounded-2xl font-semibold text-sm hover:shadow-2xl hover:shadow-[#C5513E]/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5">
            <span>Book a Consultation</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Switcher */}
      <div className="fixed top-6 right-6 z-50 flex gap-1.5 bg-white/80 backdrop-blur-2xl shadow-2xl shadow-black/10 rounded-2xl p-1.5 border border-gray-200/80">
        {[1, 2].map((num) => (
          <button
            key={num}
            onClick={() => setIteration(num)}
            className={`w-11 h-11 rounded-xl font-bold text-sm transition-all duration-300 ${iteration === num
                ? num === 1
                  ? 'bg-gradient-to-br from-[#C5513E] to-[#8B2A1C] text-white shadow-lg shadow-[#C5513E]/30'
                  : 'bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-lg'
                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
          >
            {num}
          </button>
        ))}
      </div>
    </section>
  );

  // ======================== ITERATION 2 - DARK PREMIUM ========================
  const renderIteration2 = () => (
    <section className="py-24 md:py-32 bg-[#080810] relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-[#C5513E]/12 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-slate-800/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Dot Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-gradient-to-r from-[#C5513E] to-transparent"></div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5513E]/80">
                Areas of Expertise
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-white leading-tight tracking-tight">
              Our
              <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E8826E] via-[#C5513E] to-[#8B2A1C]">
                Specializations
              </span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-white/30 text-base leading-relaxed font-light">
              Decades of expertise across the most complex surgical disciplines, delivered with precision and care.
            </p>
            <button className="group mt-6 flex items-center gap-2 text-sm font-semibold text-[#C5513E]/80 hover:text-[#C5513E] transition-colors">
              <span>View all specializations</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {specializations.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${activeCard === index
                  ? 'bg-gradient-to-r from-[#C5513E] to-[#8B2A1C] text-white shadow-lg shadow-[#C5513E]/25'
                  : 'bg-white/5 border border-white/8 text-white/40 hover:text-white/70 hover:bg-white/8'
                }`}
            >
              {item.shortTitle}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {specializations.map((item, index) => {
            const colors = tagStyles[item.tagColor];
            const isHovered = hoveredCard === index;
            const isActive = activeCard === index;
            return (
              <div
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => { setHoveredCard(index); setActiveCard(index); }}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`
                  relative rounded-3xl overflow-hidden transition-all duration-700 ease-out
                  ${isActive
                    ? 'h-[480px] md:h-[520px]'
                    : 'h-[380px] md:h-[420px]'
                  }
                  ${isHovered
                    ? `shadow-2xl -translate-y-2 border-white/15`
                    : 'border-white/[0.06]'
                  }
                  border
                `}>
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isActive ? 'scale-110 brightness-50' : 'scale-100 brightness-[0.35]'
                      }`}
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10"></div>

                  {/* Active Glow Border */}
                  {isActive && (
                    <div className={`absolute inset-0 rounded-3xl ring-1 ring-inset bg-gradient-to-br ${colors.accent} opacity-20`}></div>
                  )}

                  {/* Top Tag */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className={`px-3 py-1.5 rounded-xl text-[10px] font-bold border backdrop-blur-md ${colors.dark}`}>
                      {item.tag}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-black/30 border border-white/10 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-[10px] font-black text-white/40">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 space-y-3">
                    {/* Stats */}
                    <div className={`flex items-center gap-2 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                      }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}></div>
                      <span className="text-[11px] text-white/40 font-medium">{item.stats}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm text-white/40 leading-relaxed font-light transition-all duration-500 line-clamp-2 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                      }`}>
                      {item.description}
                    </p>

                    {/* CTA */}
                    <div className={`flex items-center justify-between pt-1 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                      }`}>
                      <span className="text-xs font-semibold text-white/30">Learn more</span>
                      <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${colors.accent} flex items-center justify-center shadow-lg`}>
                        <ArrowUpRight size={14} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-white/[0.06]">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C5513E] to-[#8B2A1C] border-2 border-[#080810] flex items-center justify-center text-white text-xs font-bold">
                  {['S', 'P', 'A', 'R'][i]}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-white/70">Trusted by 12,000+ patients</p>
              <p className="text-xs text-white/25">Across all specializations</p>
            </div>
          </div>
          <button className="group px-8 py-4 bg-gradient-to-r from-[#C5513E] to-[#8B2A1C] text-white rounded-2xl font-semibold text-sm hover:shadow-2xl hover:shadow-[#C5513E]/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5">
            <span>Book a Consultation</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Switcher */}
      <div className="fixed top-6 right-6 z-50 flex gap-1.5 bg-black/60 backdrop-blur-2xl shadow-2xl shadow-black/40 rounded-2xl p-1.5 border border-white/10">
        {[1, 2].map((num) => (
          <button
            key={num}
            onClick={() => setIteration(num)}
            className={`w-11 h-11 rounded-xl font-bold text-sm transition-all duration-300 ${iteration === num
                ? num === 1
                  ? 'bg-gradient-to-br from-[#C5513E] to-[#8B2A1C] text-white shadow-lg shadow-[#C5513E]/30'
                  : 'bg-gradient-to-br from-white to-gray-200 text-gray-900 shadow-lg'
                : 'text-white/30 hover:text-white/60 hover:bg-white/5'
              }`}
          >
            {num}
          </button>
        ))}
      </div>
    </section>
  );

  return iteration === 1 ? renderIteration1() : renderIteration2();
};

export default SpecializationSection;