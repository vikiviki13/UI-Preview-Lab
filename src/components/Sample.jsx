import React, { useState } from 'react';
import { ChevronRight, Phone, Tractor } from 'lucide-react';

const TractorLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans antialiased">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white relative">
        
        {/* --- Top Decorative Section --- */}
        <div className="bg-emerald-700 pt-12 pb-24 px-8 relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 rounded-full bg-emerald-400 blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-emerald-500/20 p-2 rounded-xl backdrop-blur-md border border-white/20">
                <Tractor className="text-white" size={24} />
              </div>
              <span className="text-white font-bold tracking-tight text-lg">Dheeeran Tractors</span>
            </div>

            <h1 className="text-white text-4xl font-extrabold leading-tight mb-3">
              Welcome back,<br />
              <span className="text-emerald-300">Broker!</span>
            </h1>
            <p className="text-emerald-100/80 text-sm font-medium">
              Enter your phone number to access your account
            </p>
          </div>

          {/* Custom SVG Wave Shape */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px]">
              <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" className="fill-white"></path>
            </svg>
          </div>
        </div>

        {/* --- Form Section --- */}
        <div className="px-8 pb-12 pt-4 bg-white">
          <div className="mb-8">
            <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-3 ml-1">
              Phone Number
            </label>
            
            <div className={`flex items-center bg-slate-50 border-2 rounded-2xl transition-all duration-200 ${isFocused ? 'border-emerald-500 bg-white shadow-lg shadow-emerald-500/10' : 'border-slate-100'}`}>
              <div className="px-4 py-4 border-r border-slate-200 flex items-center gap-2">
                <span className="text-slate-400 font-bold text-sm">IN</span>
                <span className="text-slate-800 font-bold text-sm">+91</span>
              </div>
              <div className="flex-1 flex items-center px-4">
                <Phone size={18} className={`${isFocused ? 'text-emerald-500' : 'text-slate-300'} transition-colors mr-3`} />
                <input 
                  type="tel" 
                  placeholder="98765 43210"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="w-full bg-transparent border-none py-4 text-slate-800 font-bold placeholder:text-slate-300 focus:ring-0 outline-none text-lg"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button className="w-full group bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-emerald-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            <span>Send OTP</span>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="mt-8 text-center text-xs text-slate-400 font-medium">
            By continuing, you agree to our{' '}
            <a href="#" className="text-emerald-600 font-bold hover:underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TractorLogin;