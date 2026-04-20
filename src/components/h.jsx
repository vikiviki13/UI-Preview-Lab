import React, { useState, useRef, useEffect } from 'react';
import { Tractor, ArrowLeft, RotateCcw, ShieldCheck, ChevronRight, Lock, Cpu } from 'lucide-react';

/**
 * UI DESIGN: "TECH-NOIR" INDUSTRIAL
 * A high-fidelity, data-centric approach using deep emerald 
 * shadows and segmented UI blocks.
 */
const DheeranTractorsOTP = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const isOtpComplete = otp.every(digit => digit !== '');

  return (
    <div className="flex items-center justify-center bg-[#060a09] min-h-[750px] w-full p-8 antialiased selection:bg-emerald-500/30">
      <div className="w-full max-w-[420px] bg-[#0b1210] rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] border border-emerald-900/20 overflow-hidden relative flex flex-col">
        
        {/* Animated Scanning Beam Decor */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent animate-pulse" />

        {/* --- Branding Header --- */}
        <div className="px-10 pt-14 pb-10 relative">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                <Tractor className="text-emerald-400" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-sm tracking-widest uppercase">Dheeran</span>
                <span className="text-emerald-500/50 text-[10px] font-bold tracking-[0.3em] uppercase">Logistics</span>
              </div>
            </div>
            <div className="h-8 w-8 rounded-full border border-white/5 flex items-center justify-center bg-white/[0.02]">
              <Cpu className="text-emerald-500/40" size={14} />
            </div>
          </div>

          <h1 className="text-white text-4xl font-extrabold tracking-tighter leading-none mb-4">
            AUTH_<span className="text-emerald-500 underline decoration-emerald-500/30 underline-offset-8">CODE</span>
          </h1>
          <p className="text-emerald-100/30 text-[11px] font-bold uppercase tracking-widest leading-relaxed">
            Identity verification required to<br/>access broker dashboard v4.0
          </p>
        </div>

        {/* --- Main Input Hub --- */}
        <div className="px-10 pb-14 space-y-12">
          
          <div className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
               <span className="text-[10px] text-white/20 font-black uppercase tracking-[0.2em]">Enter Protocol</span>
               <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  ref={inputRefs[index]}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className={`w-full aspect-[3/4] text-center font-black text-4xl rounded-xl bg-black/40 border-2 transition-all duration-300 outline-none 
                  ${digit ? 'border-emerald-500 text-white shadow-[0_0_25px_rgba(16,185,129,0.2)]' : 'border-white/5 text-white/10 hover:border-white/10'} 
                  focus:border-emerald-400 focus:bg-emerald-950/20`}
                />
              ))}
            </div>
          </div>

          {/* Action Trigger */}
          <div className="space-y-6">
            <button 
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-[0_15px_30px_-10px_rgba(16,185,129,0.4)] transition-all active:scale-[0.98] disabled:opacity-10 disabled:grayscale flex items-center justify-center gap-3 group"
              disabled={!isOtpComplete}
            >
              Initialize Access
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center justify-between px-1">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] text-white/20 font-black uppercase tracking-widest">Resend Window</span>
                {timer > 0 ? (
                  <span className="text-emerald-500/80 font-mono text-xs font-bold tracking-widest">00:{timer < 10 ? `0${timer}` : timer}</span>
                ) : (
                  <button onClick={() => setTimer(30)} className="text-emerald-400 text-xs font-black uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                    <RotateCcw size={12} /> Sync Now
                  </button>
                )}
              </div>
              
              <button className="flex flex-col items-end gap-1 group">
                <span className="text-[9px] text-white/20 font-black uppercase tracking-widest group-hover:text-white transition-colors">Target Phone</span>
                <span className="text-white/60 text-xs font-bold">+91 ••• ••• 1111</span>
              </button>
            </div>
          </div>
        </div>

        {/* --- Footer Status --- */}
        <div className="mt-auto bg-black/40 border-t border-white/5 px-10 py-6 flex items-center justify-between">
           <div className="flex items-center gap-2">
              <Lock size={14} className="text-emerald-600" />
              <span className="text-[10px] text-white/20 font-black tracking-tighter uppercase">End-to-End Encrypted</span>
           </div>
           <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/5 border border-emerald-500/10">
              <ShieldCheck size={12} className="text-emerald-500" />
              <span className="text-[9px] text-emerald-500 font-bold uppercase tracking-widest">Verified</span>
           </div>
        </div>
      </div>
    </div>
  );
};

/**
 * CRITICAL: DEFAULT EXPORT
 * Required for the dynamic import logic in App.jsx (import.meta.glob + React.lazy).
 */
export default DheeranTractorsOTP;