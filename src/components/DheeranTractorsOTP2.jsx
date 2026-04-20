import React, { useState, useRef, useEffect } from 'react';
import { Tractor, ArrowLeft, RotateCcw, ShieldCheck, ChevronRight } from 'lucide-react';

/**
 * REDESIGN: Premium "Deep Emerald" Aesthetic
 * Features: Automatic focus management, glassmorphism header, 
 * and interactive state transitions.
 */
const DheeranTractorsOTP = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [timer, setTimer] = useState(30);

  // Resend Timer Logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Handle digit entry and auto-focus
  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  // Handle backspace navigation
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const isOtpComplete = otp.every(digit => digit !== '');

  return (
    <div className="flex items-center justify-center bg-[#041d15] min-h-[700px] w-full p-6 antialiased selection:bg-emerald-500/30">
      <div className="w-full max-w-[400px] bg-[#03110d] rounded-[3rem] shadow-2xl border border-emerald-900/50 overflow-hidden relative flex flex-col">
        
        {/* Glow Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-emerald-500/10 blur-[60px] pointer-events-none" />

        {/* Header Section (Glassmorphism) */}
        <div className="relative z-10 px-8 pt-12 pb-8 bg-white/5 border-b border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-emerald-500/20 p-2.5 rounded-2xl border border-white/20 shadow-inner">
              <Tractor className="text-emerald-400" size={24} />
            </div>
            <span className="text-white font-bold tracking-tight text-lg">Dheeran Tractors</span>
          </div>

          <h1 className="text-white text-4xl font-extrabold leading-tight tracking-tighter mb-2">
            Welcome back,<br />
            <span className="text-emerald-400">Broker!</span>
          </h1>
          <p className="text-emerald-100/50 text-sm font-medium">
            Verify your identity to continue
          </p>
        </div>

        {/* Body Section */}
        <div className="p-10 space-y-10">
          <div className="space-y-3">
            <p className="text-white/70 text-sm leading-relaxed">
              We sent a 4-digit code to <br/>
              <span className="font-bold text-emerald-300 text-base">+91 1111111111</span>
            </p>
          </div>

          {/* OTP Input Group */}
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
                className={`w-full aspect-square text-center font-bold text-4xl rounded-2xl bg-white/[0.03] border-2 transition-all duration-300 outline-none 
                ${digit ? 'border-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.25)]' : 'border-white/10 text-white/20 hover:border-white/20'} 
                focus:border-emerald-400 focus:bg-white/[0.07]`}
              />
            ))}
          </div>

          {/* Verification Action */}
          <button 
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-emerald-950/50 transition-all active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            disabled={!isOtpComplete}
          >
            Verify & Continue
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Footer Actions */}
          <div className="flex flex-col items-center gap-6 pt-6 border-t border-white/5">
            <div className="text-sm">
              {timer > 0 ? (
                <p className="text-white/40">Resend code in <span className="text-emerald-400 font-mono font-bold">{timer}s</span></p>
              ) : (
                <button onClick={() => setTimer(30)} className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors flex items-center gap-2">
                  <RotateCcw size={16} /> Resend OTP
                </button>
              )}
            </div>
            <button className="text-white/30 text-xs font-semibold flex items-center gap-1.5 hover:text-white transition-colors">
              <ArrowLeft size={14} /> Change Phone Number
            </button>
          </div>
        </div>

        {/* Security Badge */}
        <div className="pb-8 flex justify-center">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-[10px] text-emerald-500 font-black tracking-[0.15em]">
            <ShieldCheck size={14} />
            SECURE ACCESS
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * IMPORTANT: This default export is required for the 
 * dynamic loader in App.jsx to function properly.
 */
export default DheeranTractorsOTP;