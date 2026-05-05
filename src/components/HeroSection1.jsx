import React, { useState } from "react";
import {
    Calendar,
    Clock,
    ChevronDown,
    ArrowRight,
    Star,
    Shield,
    Award,
    Users,
    Play,
    CheckCircle,
    Sparkles,
} from "lucide-react";

const HeroSection = () => {
    const [iteration, setIteration] = useState(1);
    const [selectedService, setSelectedService] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    const stats = [
        { icon: Award, value: "45+", label: "Years Experience", color: "amber" },
        { icon: Users, value: "12k+", label: "Patients Treated", color: "blue" },
        { icon: Star, value: "4.9", label: "Patient Rating", color: "violet" },
        { icon: Shield, value: "99%", label: "Success Rate", color: "emerald" },
    ];

    const services = [
        "Thyroid Surgery",
        "Parathyroid Surgery",
        "Adrenal Surgery",
        "Laparoscopic Procedures",
        "Endocrine Oncology",
    ];

    const specialties = [
        "Complex Endocrine Surgery",
        "Advanced Laparoscopic Care",
        "Minimally Invasive Techniques",
    ];

    // ======================== ITERATION 1 - LIGHT PREMIUM ========================
    const renderIteration1 = () => (
        <section className="bg-gradient-to-br from-slate-50 via-white to-rose-50/30 min-h-screen relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-rose-100/40 via-orange-50/30 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-100/60 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-amber-50/40 to-transparent rounded-full blur-3xl"></div>
            </div>

            {/* Subtle Dot Pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.015]"
                style={{
                    backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-52 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* LEFT CONTENT */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white border border-rose-200/80 rounded-full shadow-sm shadow-rose-100/50">
                            <div className="flex gap-1">
                                {[...Array(3)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-rose-500 to-orange-500"
                                        style={{ animationDelay: `${i * 0.2}s` }}
                                    ></div>
                                ))}
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-rose-700">
                                Specialist Surgeon
                            </span>
                        </div>

                        {/* Heading */}
                        <div className="space-y-3">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-gray-900 leading-[1.05] tracking-tight">
                                Complex
                                <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6451] via-[#C0392B] to-[#94241B]">
                                    Endocrine
                                </span>
                                <span className="block font-extralight">Surgery</span>
                            </h1>
                            <div className="flex items-center gap-3 pt-2">
                                <div className="h-px w-12 bg-gradient-to-r from-[#DD6451] to-transparent"></div>
                                <p className="text-sm font-semibold text-[#DD6451] uppercase tracking-wider">
                                    Advanced Laparoscopic Care
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">
                            Clinically proven treatments delivered with precision and care.
                            Combining decades of surgical expertise with cutting-edge medical
                            technology.
                        </p>

                        {/* Specialties */}
                        <div className="space-y-2.5">
                            {specialties.map((s, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle
                                        size={16}
                                        className="text-[#DD6451] flex-shrink-0"
                                    />
                                    <span className="text-sm text-gray-600 font-medium">{s}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#DD6451] to-[#C0392B] text-white rounded-2xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#DD6451]/30 hover:-translate-y-0.5 flex items-center gap-2.5">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#C0392B] to-[#94241B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative">Book Appointment</span>
                                <ArrowRight
                                    size={16}
                                    className="relative group-hover:translate-x-1 transition-transform"
                                />
                            </button>
                            <button className="group px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl font-semibold text-sm hover:border-[#DD6451]/40 hover:bg-[#DD6451]/5 transition-all duration-300 flex items-center gap-2.5 shadow-sm">
                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#DD6451]/10 to-[#94241B]/10 flex items-center justify-center">
                                    <Play
                                        size={10}
                                        className="text-[#DD6451] ml-0.5"
                                        fill="currentColor"
                                    />
                                </div>
                                <span>View Services</span>
                            </button>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div
                                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${stat.color === "amber"
                                                ? "bg-amber-50"
                                                : stat.color === "blue"
                                                    ? "bg-blue-50"
                                                    : stat.color === "violet"
                                                        ? "bg-violet-50"
                                                        : "bg-emerald-50"
                                            }`}
                                    >
                                        <stat.icon
                                            size={18}
                                            className={
                                                stat.color === "amber"
                                                    ? "text-amber-600"
                                                    : stat.color === "blue"
                                                        ? "text-blue-600"
                                                        : stat.color === "violet"
                                                            ? "text-violet-600"
                                                            : "text-emerald-600"
                                            }
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xl font-black text-gray-900">
                                            {stat.value}
                                        </p>
                                        <p className="text-[11px] text-gray-400 font-medium">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="relative flex justify-center items-end">
                        {/* Background Rings */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-[420px] h-[420px] rounded-full border-2 border-rose-100/60 animate-pulse"></div>
                            <div className="absolute w-[320px] h-[320px] rounded-full border border-rose-200/40"></div>
                            <div className="absolute w-[500px] h-[500px] rounded-full border border-rose-50/30"></div>
                        </div>

                        {/* Glow */}
                        <div className="absolute w-72 h-72 bg-gradient-to-br from-[#DD6451]/20 to-[#94241B]/10 rounded-full blur-3xl"></div>

                        {/* Doctor Image */}
                        <div className="relative z-10">
                            <div className="relative">
                                {/* Image Frame */}
                                <div className="w-[320px] md:w-[380px] h-[420px] md:h-[480px] rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#E8C5BF] to-[#D4A09A] shadow-2xl shadow-[#DD6451]/20">
                                    <img
                                        src="/doctor.png"
                                        alt="Doctor"
                                        className="w-full h-full object-cover object-top"
                                    />
                                    {/* Inner Shadow */}
                                    <div className="absolute inset-0 shadow-inner rounded-[2.5rem]"></div>
                                </div>

                                {/* Experience Badge */}
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-3.5 rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 flex items-center gap-3 whitespace-nowrap">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md shadow-amber-400/30">
                                        <Award size={18} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-black text-gray-900">
                                            45+ Years
                                        </p>
                                        <p className="text-[11px] text-gray-400 font-medium">
                                            Surgical Excellence
                                        </p>
                                    </div>
                                </div>

                                {/* Floating Rating Card */}
                                <div className="absolute -left-14 top-1/3 bg-white px-4 py-3.5 rounded-2xl shadow-xl border border-gray-100">
                                    <div className="flex items-center gap-1 mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={12}
                                                className="text-amber-400"
                                                fill="currentColor"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-sm font-black text-gray-900">4.9 / 5.0</p>
                                    <p className="text-[10px] text-gray-400">12k+ reviews</p>
                                </div>

                                {/* Floating Availability */}
                                <div className="absolute -right-10 top-12 bg-white px-4 py-3 rounded-2xl shadow-xl border border-gray-100">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                        <span className="text-[11px] font-bold text-emerald-600">
                                            Available
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-gray-500">Mon – Fri</p>
                                    <p className="text-sm font-bold text-gray-900">9AM – 6PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* APPOINTMENT BAR */}
            <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white border border-gray-200/80 rounded-t-3xl shadow-2xl shadow-gray-200/60 p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Sparkles size={16} className="text-[#DD6451]" />
                            <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                                Quick Appointment
                            </span>
                            <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* Service Select */}
                            <div className="relative">
                                <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5 block">
                                    Service
                                </label>
                                <div className="relative">
                                    <select
                                        value={selectedService}
                                        onChange={(e) => setSelectedService(e.target.value)}
                                        className="w-full appearance-none bg-gray-50 border border-gray-200 px-4 py-3.5 rounded-xl text-sm text-gray-700 font-medium focus:outline-none focus:border-[#DD6451]/60 focus:bg-white transition-all"
                                    >
                                        <option value="">Select Service</option>
                                        {services.map((s) => (
                                            <option key={s}>{s}</option>
                                        ))}
                                    </select>
                                    <ChevronDown
                                        size={14}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                    />
                                </div>
                            </div>

                            {/* Date */}
                            <div>
                                <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5 block">
                                    Date
                                </label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className="w-full bg-gray-50 border border-gray-200 px-4 py-3.5 rounded-xl text-sm text-gray-700 font-medium focus:outline-none focus:border-[#DD6451]/60 focus:bg-white transition-all"
                                    />
                                </div>
                            </div>

                            {/* Time */}
                            <div>
                                <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5 block">
                                    Time
                                </label>
                                <div className="relative">
                                    <input
                                        type="time"
                                        value={selectedTime}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                        className="w-full bg-gray-50 border border-gray-200 px-4 py-3.5 rounded-xl text-sm text-gray-700 font-medium focus:outline-none focus:border-[#DD6451]/60 focus:bg-white transition-all"
                                    />
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col justify-end">
                                <button className="group w-full bg-gradient-to-r from-[#DD6451] to-[#C0392B] text-white py-3.5 px-6 rounded-xl font-bold text-sm hover:from-[#C0392B] hover:to-[#94241B] transition-all duration-300 hover:shadow-xl hover:shadow-[#DD6451]/30 flex items-center justify-center gap-2">
                                    <span>Book Now</span>
                                    <ArrowRight
                                        size={15}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
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
                                    ? "bg-gradient-to-br from-[#DD6451] to-[#94241B] text-white shadow-lg shadow-[#DD6451]/30"
                                    : "bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-lg shadow-gray-900/30"
                                : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
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
        <section className="bg-[#080810] min-h-screen relative overflow-hidden">
            {/* Ambient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-rose-900/25 via-orange-900/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-slate-800/40 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-rose-950/20 via-transparent to-orange-950/10 rounded-full blur-3xl"></div>
            </div>

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.025]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-52 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* LEFT CONTENT */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse shadow-lg shadow-rose-400/50"></div>
                            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-300">
                                Specialist Surgeon
                            </span>
                        </div>

                        {/* Heading */}
                        <div className="space-y-2">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white leading-[1.05] tracking-tight">
                                Complex
                                <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400">
                                    Endocrine
                                </span>
                                <span className="block font-extralight text-white/80">
                                    Surgery
                                </span>
                            </h1>
                            <div className="flex items-center gap-3 pt-3">
                                <div className="h-px w-10 bg-gradient-to-r from-rose-500 to-transparent"></div>
                                <p className="text-sm font-medium text-rose-400/80 uppercase tracking-wider">
                                    Advanced Laparoscopic Care
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-white/40 text-lg leading-relaxed max-w-md font-light">
                            Clinically proven treatments delivered with precision and care.
                            Combining decades of surgical expertise with cutting-edge medical
                            technology.
                        </p>

                        {/* Specialties */}
                        <div className="space-y-2.5">
                            {specialties.map((s, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle size={12} className="text-rose-400" />
                                    </div>
                                    <span className="text-sm text-white/60 font-medium">{s}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-rose-600 to-orange-600 text-white rounded-2xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-rose-600/30 hover:-translate-y-0.5 flex items-center gap-2.5">
                                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative">Book Appointment</span>
                                <ArrowRight
                                    size={16}
                                    className="relative group-hover:translate-x-1 transition-transform"
                                />
                            </button>
                            <button className="group px-8 py-4 bg-white/5 border border-white/10 text-white/70 rounded-2xl font-semibold text-sm hover:border-white/20 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2.5 backdrop-blur-sm">
                                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                                    <Play
                                        size={10}
                                        className="text-white ml-0.5"
                                        fill="currentColor"
                                    />
                                </div>
                                <span>View Services</span>
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-3 pt-4">
                            {stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 p-4 bg-white/[0.04] hover:bg-white/[0.07] rounded-2xl border border-white/[0.06] hover:border-white/10 transition-all duration-300 group"
                                >
                                    <div
                                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${stat.color === "amber"
                                                ? "bg-amber-500/15"
                                                : stat.color === "blue"
                                                    ? "bg-blue-500/15"
                                                    : stat.color === "violet"
                                                        ? "bg-violet-500/15"
                                                        : "bg-emerald-500/15"
                                            }`}
                                    >
                                        <stat.icon
                                            size={18}
                                            className={
                                                stat.color === "amber"
                                                    ? "text-amber-400"
                                                    : stat.color === "blue"
                                                        ? "text-blue-400"
                                                        : stat.color === "violet"
                                                            ? "text-violet-400"
                                                            : "text-emerald-400"
                                            }
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xl font-black text-white">
                                            {stat.value}
                                        </p>
                                        <p className="text-[11px] text-white/30 font-medium">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="relative flex justify-center items-end">
                        {/* Rings */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-[420px] h-[420px] rounded-full border border-rose-900/40"></div>
                            <div className="absolute w-[320px] h-[320px] rounded-full border border-rose-800/30"></div>
                            <div className="absolute w-[520px] h-[520px] rounded-full border border-rose-900/20"></div>
                        </div>

                        {/* Glow */}
                        <div className="absolute w-80 h-80 bg-gradient-to-br from-rose-600/20 to-orange-600/10 rounded-full blur-3xl"></div>

                        {/* Doctor Card */}
                        <div className="relative z-10">
                            <div className="relative">
                                {/* Image */}
                                <div className="w-[320px] md:w-[380px] h-[420px] md:h-[480px] rounded-[2.5rem] overflow-hidden relative shadow-2xl shadow-black/60">
                                    <div className="absolute inset-0 bg-gradient-to-br from-rose-900/40 to-slate-900/60 z-10"></div>
                                    <img
                                        src="/doctor.png"
                                        alt="Doctor"
                                        className="w-full h-full object-cover object-top"
                                    />
                                    {/* Bottom Gradient */}
                                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080810] to-transparent z-20"></div>
                                    {/* Border Glow */}
                                    <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-white/10 z-30"></div>
                                </div>

                                {/* Experience Badge */}
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0F0F18] border border-white/10 px-6 py-3.5 rounded-2xl backdrop-blur-xl flex items-center gap-3 whitespace-nowrap shadow-2xl">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                                        <Award size={18} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-black text-white">45+ Years</p>
                                        <p className="text-[11px] text-white/30 font-medium">
                                            Surgical Excellence
                                        </p>
                                    </div>
                                </div>

                                {/* Rating Card */}
                                <div className="absolute -left-14 top-1/3 bg-[#0F0F18]/90 border border-white/10 px-4 py-3.5 rounded-2xl backdrop-blur-xl shadow-2xl">
                                    <div className="flex items-center gap-1 mb-1.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={11}
                                                className="text-amber-400"
                                                fill="currentColor"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-sm font-black text-white">4.9 / 5.0</p>
                                    <p className="text-[10px] text-white/30">12k+ reviews</p>
                                </div>

                                {/* Availability Card */}
                                <div className="absolute -right-12 top-12 bg-[#0F0F18]/90 border border-white/10 px-4 py-3 rounded-2xl backdrop-blur-xl shadow-2xl">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50"></div>
                                        <span className="text-[11px] font-bold text-emerald-400">
                                            Available
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-white/30">Mon – Fri</p>
                                    <p className="text-sm font-bold text-white/80">9AM – 6PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* APPOINTMENT BAR */}
            <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-[#0F0F1A]/95 border border-white/10 rounded-t-3xl backdrop-blur-2xl shadow-2xl p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Sparkles size={14} className="text-rose-400" />
                            <span className="text-xs font-bold text-white/50 uppercase tracking-wider">
                                Quick Appointment
                            </span>
                            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* Service */}
                            <div>
                                <label className="text-[10px] font-semibold uppercase tracking-wider text-white/25 mb-1.5 block">
                                    Service
                                </label>
                                <div className="relative">
                                    <select
                                        value={selectedService}
                                        onChange={(e) => setSelectedService(e.target.value)}
                                        className="w-full appearance-none bg-white/5 border border-white/10 px-4 py-3.5 rounded-xl text-sm text-white/70 font-medium focus:outline-none focus:border-rose-500/40 focus:bg-white/8 transition-all"
                                    >
                                        <option value="" className="bg-[#0F0F1A]">
                                            Select Service
                                        </option>
                                        {services.map((s) => (
                                            <option key={s} className="bg-[#0F0F1A]">
                                                {s}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown
                                        size={14}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none"
                                    />
                                </div>
                            </div>

                            {/* Date */}
                            <div>
                                <label className="text-[10px] font-semibold uppercase tracking-wider text-white/25 mb-1.5 block">
                                    Date
                                </label>
                                <div className="relative flex items-center bg-white/5 border border-white/10 rounded-xl hover:border-white/20 focus-within:border-rose-500/40 transition-all">
                                    <Calendar
                                        size={15}
                                        className="absolute left-4 text-white/25 pointer-events-none"
                                    />
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className="w-full bg-transparent pl-11 pr-4 py-3.5 text-sm text-white/70 font-medium focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Time */}
                            <div>
                                <label className="text-[10px] font-semibold uppercase tracking-wider text-white/25 mb-1.5 block">
                                    Time
                                </label>
                                <div className="relative flex items-center bg-white/5 border border-white/10 rounded-xl hover:border-white/20 focus-within:border-rose-500/40 transition-all">
                                    <Clock
                                        size={15}
                                        className="absolute left-4 text-white/25 pointer-events-none"
                                    />
                                    <input
                                        type="time"
                                        value={selectedTime}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                        className="w-full bg-transparent pl-11 pr-4 py-3.5 text-sm text-white/70 font-medium focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col justify-end">
                                <button className="group w-full bg-gradient-to-r from-rose-600 to-orange-600 text-white py-3.5 px-6 rounded-xl font-bold text-sm hover:from-rose-500 hover:to-orange-500 transition-all duration-300 hover:shadow-xl hover:shadow-rose-600/25 flex items-center justify-center gap-2">
                                    <span>Book Now</span>
                                    <ArrowRight
                                        size={15}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
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
                                    ? "bg-gradient-to-br from-[#DD6451] to-[#94241B] text-white shadow-lg shadow-rose-600/30"
                                    : "bg-gradient-to-br from-white to-gray-200 text-gray-900 shadow-lg"
                                : "text-white/30 hover:text-white/60 hover:bg-white/5"
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

export default HeroSection;