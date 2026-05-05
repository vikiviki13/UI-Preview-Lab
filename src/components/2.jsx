import React from 'react';
import { Calendar, Clock, ChevronDown } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="relative min-h-[600px] bg-gradient-to-br from-[#d48c7e] to-[#c16355] rounded-[40px] overflow-hidden p-8 md:p-16 flex flex-col justify-center m-6">

            {/* Decorative Geometric Shapes */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 border-[40px] border-white rotate-45 rounded-lg" />
                <div className="absolute top-40 right-40 w-48 h-48 bg-white/30 rotate-45 rounded-lg" />
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content */}
                <div className="space-y-6 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-90">Specialist In</p>
                    <h1 className="text-5xl md:text-6xl font-bold leading-[1.1]">
                        Complex Endocrine Surgery <br />
                        <span className="font-light">Advanced laparoscopic Surgery</span>
                    </h1>
                    <p className="text-lg opacity-90 max-w-lg leading-relaxed">
                        Clinically-proven treatments delivered with personal attention. Dr. Rao combines decades of experience with cutting-edge medical technology.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="px-8 py-4 bg-[#631c12] text-white font-bold rounded-2xl hover:bg-[#4d150e] transition-all shadow-xl shadow-black/10 active:scale-95">
                            Book Appointment
                        </button>
                        <button className="px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl hover:bg-slate-50 transition-all active:scale-95 shadow-lg shadow-black/5">
                            View Services
                        </button>
                    </div>
                </div>

                {/* Right Content: Dr. Rao Image & Floating Badges */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative w-72 h-[400px] md:w-80 md:h-[450px] bg-red-600 rounded-[32px] border-8 border-white overflow-hidden shadow-2xl">
                        <img
                            src="https://via.placeholder.com/400x600" // Replace with actual Dr. Rao transparent PNG
                            alt="Dr. Rao"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Floating Badges */}
                    <div className="absolute -left-12 top-1/2 bg-white px-6 py-4 rounded-2xl shadow-xl animate-bounce-slow">
                        <p className="text-[#631c12] font-bold">Endocrine Expert</p>
                    </div>
                    <div className="absolute -right-8 bottom-24 bg-white px-6 py-4 rounded-2xl shadow-xl">
                        <p className="text-[#631c12] font-bold">45+ Years Experience</p>
                    </div>
                </div>
            </div>

            {/* Quick Booking Bar */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-white rounded-[32px] p-6 shadow-2xl border border-slate-100 flex flex-col md:flex-row items-end gap-6">
                <div className="flex-1 space-y-2 w-full">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Select Service</label>
                    <div className="relative">
                        <select className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl appearance-none outline-none focus:border-[#631c12] font-semibold text-slate-700">
                            <option>Parathyroid</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    </div>
                </div>

                <div className="flex-1 space-y-2 w-full">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Pick a Date</label>
                    <div className="relative">
                        <input type="text" defaultValue="25-10-2026" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#631c12] font-semibold text-slate-700" />
                        <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    </div>
                </div>

                <div className="flex-1 space-y-2 w-full">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Pick a Time</label>
                    <div className="relative">
                        <input type="text" defaultValue="08:00 PM" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#631c12] font-semibold text-slate-700" />
                        <Clock className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    </div>
                </div>

                <button className="w-full md:w-auto px-10 py-4 bg-[#631c12] text-white font-bold rounded-2xl hover:bg-[#4d150e] transition-all shadow-lg shadow-[#631c12]/20 active:scale-95">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default HeroSection;