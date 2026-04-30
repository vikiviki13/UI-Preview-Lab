import React, { useState } from 'react';
import { Activity, Award, Heart, Star, ShieldCheck, TrendingUp, Users, Zap, CheckCircle, ArrowUpRight } from 'lucide-react';

const ClinicalPerformance = () => {
  const [iteration, setIteration] = useState(1);

  const stats = [
    {
      icon: <Activity size={24} />,
      value: "10k+",
      label: "Surgical Procedures",
      description: "Precision surgeries with zero major post-op complications.",
      trend: "+12% this year"
    },
    {
      icon: <Award size={24} />,
      value: "25+",
      label: "Years Experience",
      description: "A legacy built on clinical learning and surgical innovation.",
      trend: "Since 1998"
    },
    {
      icon: <Heart size={24} />,
      value: "98%",
      label: "Recovery Rate",
      description: "Market-leading success rates in complex malignancies.",
      trend: "+3% vs industry"
    },
    {
      icon: <Star size={24} />,
      value: "4.9",
      label: "Patient Rating",
      description: "Based on 5,000+ verified testimonials and reviews.",
      trend: "5,000+ reviews"
    }
  ];

  // ======================== ITERATION 1 - WARM LUXURY ELEGANCE ========================
  const renderIteration1 = () => (
    <div className="relative bg-gradient-to-br from-[#2d1210] via-[#3d1a16] to-[#4a1d19] text-white py-24 px-6 font-sans overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e27d60]/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#c85a42]/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#e27d60]/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-[#e27d60]/10 border border-[#e27d60]/30 rounded-full px-6 py-2.5 mb-8">
            <div className="w-2 h-2 bg-[#e27d60] rounded-full animate-pulse"></div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#e27d60]">
              Clinical Performance
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Impact & Legacy
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e27d60] via-[#f4a261] to-[#e27d60]">
              By the Numbers
            </span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Our clinical outcomes are a direct result of <span className="text-white font-semibold">uncompromising surgical standards</span> and 
            the integration of <span className="text-white font-semibold">next-gen technology</span>.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl hover:border-[#e27d60]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#e27d60]/10 hover:-translate-y-2"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#e27d60]/0 to-[#e27d60]/0 group-hover:from-[#e27d60]/5 group-hover:to-transparent transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#e27d60]/20 to-[#e27d60]/5 border border-[#e27d60]/20 flex items-center justify-center text-[#e27d60] mb-8 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#e27d60]/20 transition-all duration-300">
                  {stat.icon}
                </div>

                {/* Value */}
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-6xl font-black tracking-tighter bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <ArrowUpRight className="text-[#e27d60] mb-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </div>
                
                {/* Label */}
                <h4 className="text-[#e27d60] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
                  {stat.label}
                </h4>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {stat.description}
                </p>

                {/* Trend Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#e27d60]/10 rounded-full">
                  <TrendingUp size={12} className="text-[#e27d60]" />
                  <span className="text-[10px] font-bold text-[#e27d60] uppercase tracking-wider">
                    {stat.trend}
                  </span>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#e27d60]/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="bg-gradient-to-r from-white/[0.05] via-white/[0.08] to-white/[0.05] border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#e27d60] to-[#c85a42] flex items-center justify-center shadow-xl shadow-[#e27d60]/30">
                <ShieldCheck size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Trusted Excellence</h3>
                <p className="text-gray-400 text-sm">Accredited by leading medical institutions worldwide</p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              {['NABH Certified', 'JCI Accredited', 'ISO 9001', 'WHO Standards'].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-[#e27d60]/30 transition-colors">
                  <CheckCircle size={14} className="text-[#e27d60]" />
                  <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // ======================== ITERATION 2 - MODERN DARK PREMIUM ========================
  const renderIteration2 = () => (
    <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-28 px-6 font-sans overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-rose-500/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-rose-400 ml-2">
                Performance Metrics
              </span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black leading-[0.9] mb-6">
              <span className="text-white">Clinical</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-400 to-orange-400">
                Excellence
              </span>
            </h2>
          </div>
          
          <div className="lg:text-right">
            <p className="text-gray-400 text-lg leading-relaxed max-w-md lg:ml-auto mb-8">
              Every number represents a life transformed through precision medicine and compassionate care.
            </p>
            
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <div className="px-4 py-2 bg-gradient-to-r from-rose-500/20 to-rose-500/5 border border-rose-500/30 rounded-full">
                <span className="text-xs font-bold text-rose-400">World-Class Care</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-amber-500/20 to-amber-500/5 border border-amber-500/30 rounded-full">
                <span className="text-xs font-bold text-amber-400">Proven Results</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats - Bento Grid Style */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 mb-20">
          {/* Large Card */}
          <div className="md:col-span-3 group relative bg-gradient-to-br from-rose-500/10 via-slate-900/50 to-slate-900/80 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-xl hover:border-rose-500/40 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/0 to-rose-500/0 group-hover:from-rose-500/10 group-hover:to-transparent transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center shadow-2xl shadow-rose-500/40 group-hover:scale-110 transition-transform">
                  <Activity size={36} className="text-white" />
                </div>
                <div className="px-4 py-2 bg-rose-500/20 rounded-full border border-rose-500/30">
                  <span className="text-xs font-bold text-rose-400">{stats[0].trend}</span>
                </div>
              </div>
              
              <div className="text-8xl font-black tracking-tighter text-white mb-4">
                {stats[0].value}
              </div>
              
              <h4 className="text-rose-400 text-sm font-bold uppercase tracking-wider mb-3">
                {stats[0].label}
              </h4>
              
              <p className="text-gray-400 text-base leading-relaxed">
                {stats[0].description}
              </p>
            </div>
          </div>

          {/* Medium Card */}
          <div className="md:col-span-3 group relative bg-gradient-to-br from-amber-500/10 via-slate-900/50 to-slate-900/80 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-xl hover:border-amber-500/40 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-transparent transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-amber-500/40 group-hover:scale-110 transition-transform">
                  <Award size={36} className="text-white" />
                </div>
                <div className="px-4 py-2 bg-amber-500/20 rounded-full border border-amber-500/30">
                  <span className="text-xs font-bold text-amber-400">{stats[1].trend}</span>
                </div>
              </div>
              
              <div className="text-8xl font-black tracking-tighter text-white mb-4">
                {stats[1].value}
              </div>
              
              <h4 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-3">
                {stats[1].label}
              </h4>
              
              <p className="text-gray-400 text-base leading-relaxed">
                {stats[1].description}
              </p>
            </div>
          </div>

          {/* Small Cards Row */}
          <div className="md:col-span-3 group relative bg-gradient-to-br from-emerald-500/10 via-slate-900/50 to-slate-900/80 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl hover:border-emerald-500/40 transition-all duration-500 overflow-hidden">
            <div className="relative z-10 flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-xl shadow-emerald-500/30 group-hover:scale-110 transition-transform flex-shrink-0">
                <Heart size={28} className="text-white" />
              </div>
              <div>
                <div className="text-5xl font-black text-white mb-1">{stats[2].value}</div>
                <h4 className="text-emerald-400 text-xs font-bold uppercase tracking-wider">{stats[2].label}</h4>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4">{stats[2].description}</p>
          </div>

          <div className="md:col-span-3 group relative bg-gradient-to-br from-violet-500/10 via-slate-900/50 to-slate-900/80 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl hover:border-violet-500/40 transition-all duration-500 overflow-hidden">
            <div className="relative z-10 flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-xl shadow-violet-500/30 group-hover:scale-110 transition-transform flex-shrink-0">
                <Star size={28} className="text-white fill-white" />
              </div>
              <div>
                <div className="text-5xl font-black text-white mb-1">{stats[3].value}</div>
                <h4 className="text-violet-400 text-xs font-bold uppercase tracking-wider">{stats[3].label}</h4>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4">{stats[3].description}</p>
          </div>
        </div>

        {/* Trust Section - Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { 
              icon: <ShieldCheck size={24} />, 
              title: 'NABH Accredited', 
              desc: 'National quality certification',
              gradient: 'from-rose-500 to-pink-600'
            },
            { 
              icon: <Award size={24} />, 
              title: 'JCI Certified', 
              desc: 'International healthcare standards',
              gradient: 'from-amber-500 to-orange-600'
            },
            { 
              icon: <Zap size={24} />, 
              title: 'ISO 9001:2015', 
              desc: 'Quality management excellence',
              gradient: 'from-emerald-500 to-teal-600'
            }
          ].map((item, i) => (
            <div key={i} className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/20 transition-all flex items-center gap-5">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}>
                {item.icon}
              </div>
              <div>
                <h4 className="text-white font-bold mb-0.5">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ======================== MAIN RENDER ========================
  return (
    <div className="w-full">
      {/* Design Switcher */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl rounded-full p-2 border border-slate-200 dark:border-slate-700">
        {[1, 2].map((num) => (
          <button
            key={num}
            onClick={() => setIteration(num)}
            className={`w-12 h-12 rounded-full font-black text-sm transition-all transform ${
              iteration === num
                ? num === 1
                  ? 'bg-gradient-to-r from-[#e27d60] to-[#c85a42] text-white shadow-xl shadow-[#e27d60]/40 scale-110'
                  : 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-xl shadow-rose-500/40 scale-110'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      <div className={`fixed top-4 left-4 z-50 px-5 py-3 rounded-full text-xs font-bold text-white shadow-2xl ${
        iteration === 1 
          ? 'bg-gradient-to-r from-[#e27d60] to-[#c85a42]' 
          : 'bg-gradient-to-r from-rose-500 to-amber-500'
      }`}>
        Design {iteration}/2 • Clinical Performance
      </div>

      {/* Render */}
      {iteration === 1 && renderIteration1()}
      {iteration === 2 && renderIteration2()}
    </div>
  );
};

export default ClinicalPerformance;