import React, { useState, useRef, useEffect } from 'react';
import { Tractor, ArrowLeft, RotateCcw, ShieldCheck, ChevronRight } from 'lucide-react';

/**
 * REDESIGNED OTP INTERFACE
 * This component is structured to work perfectly with React.lazy
 * and the import.meta.glob logic in your existing App.jsx.
 */
const DheeranTractorsOTP = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
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

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').slice(0, 4);
    if (isNaN(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split('').forEach((digit, index) => {
      newOtp[index] = digit;
    });
    setOtp(newOtp);
    if (pastedData.length > 0) {
      inputRefs[Math.min(pastedData.length - 1, 3)].current.focus();
    }
  };

  const isOtpComplete = otp.every(digit => digit !== '');

  return (
    <div className="flex items-center justify-center bg-[#041d15] min-h-[700px] w-full p-4 antialiased">
      <div className="w-full max-w-[400px] bg-[#03110d] rounded-[2.5rem] shadow-2xl border border-emerald-900/50 overflow-hidden relative flex flex-col">
        
        {/* Header Section */}
        <div className="relative z-10 px-6 pt-10 pb-6 bg-white/5 border-b border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-emerald-500/20 p-2 rounded-xl border border-white/20">
              <Tractor className="text-emerald-400" size={24} />
            </div>
            <span className="text-white font-bold tracking-tight">Dheeran Tractors</span>
          </div>

          <h1 className="text-white text-3xl font-extrabold leading-tight mb-2">
            Welcome back,<br />
            <span className="text-emerald-400">Broker!</span>
          </h1>
          <p className="text-emerald-100/60 text-xs font-medium">
            Enter the code sent to your device
          </p>
        </div>

        {/* Input Section */}
        <div className="p-8 space-y-8">
          <div className="space-y-2">
            <p className="text-white/70 text-sm">
              OTP sent to <span className="font-bold text-emerald-300">+91 1111111111</span>
            </p>
          </div>

          <div className="grid grid-cols-4 gap-3" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                ref={inputRefs[index]}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className={`w-full aspect-square text-center font-bold text-3xl rounded-xl bg-white/5 border-2 transition-all outline-none 
                ${digit ? 'border-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'border-white/10 text-white'} 
                focus:border-emerald-400`}
              />
            ))}
          </div>

          <button 
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-emerald-900/50 transition-all disabled:opacity-40 flex items-center justify-center gap-2"
            disabled={!isOtpComplete}
          >
            Verify & Continue
            <ChevronRight size={20} />
          </button>

          <div className="flex flex-col items-center gap-4 pt-4 border-t border-white/5">
            <div className="text-sm">
              {timer > 0 ? (
                <span className="text-white/40">Resend code in <b className="text-emerald-400 font-mono">{timer}s</b></span>
              ) : (
                <button onClick={() => setTimer(30)} className="text-emerald-400 font-bold flex items-center gap-1">
                  <RotateCcw size={14} /> Resend OTP
                </button>
              )}
            </div>
            <button className="text-white/30 text-xs flex items-center gap-1 hover:text-white transition-colors">
              <ArrowLeft size={12} /> Change Phone Number
            </button>
          </div>
        </div>

        {/* Footer Security Badge */}
        <div className="pb-6 flex justify-center">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-800/50 text-[10px] text-emerald-500 font-bold tracking-widest">
            <ShieldCheck size={12} />
            SECURE VERIFICATION
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * MANDATORY DEFAULT EXPORT
 * This is what allows App.jsx's React.lazy to find and render this file.
 */
export default DheeranTractorsOTP;