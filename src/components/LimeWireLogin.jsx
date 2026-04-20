import React, { useState } from 'react';
import { Mail, Wallet, MessageSquare, Globe, ArrowRight, User, ShieldCheck, Zap } from 'lucide-react';

const LimeWireLogin = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#050505] font-sans overflow-hidden relative p-4">
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="w-full max-w-[1000px] min-h-[650px] flex rounded-3xl border border-white/10 overflow-hidden bg-white/[0.02] backdrop-blur-2xl shadow-2xl z-10">
        
        {/* Left Side: Form */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                <Zap className="w-6 h-6 text-black fill-current" />
              </div>
              <span className="text-white font-bold text-2xl tracking-tighter uppercase italic">LimeWire</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Sign In</h2>
            <p className="text-gray-400 text-sm">Access the future of high-fidelity digital assets.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-[0.2em] mb-2 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-12 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all outline-none"
                />
              </div>
            </div>

            <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(16,185,129,0.2)] active:scale-[0.98]">
              Continue with Email
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/5"></span>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-[0.3em]">
                <span className="bg-[#0b0b0b] px-4 text-gray-600 font-bold">Secure Gateway</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <SocialButton icon={<GoogleIcon />} label="Google" />
              <SocialButton icon={<MessageSquare className="w-4 h-4 text-indigo-400" />} label="Discord" />
              <SocialButton icon={<User className="w-4 h-4 text-blue-500" />} label="Facebook" />
              <SocialButton icon={<Wallet className="w-4 h-4 text-orange-400" />} label="Wallet" />
            </div>
          </div>

          <p className="mt-10 text-[10px] text-gray-600 text-center leading-relaxed max-w-[280px] mx-auto">
            Protected by enterprise-grade encryption. <br />
            View <span className="text-gray-400 underline cursor-pointer">Terms</span> and <span className="text-gray-400 underline cursor-pointer">Privacy Policy</span>.
          </p>
        </div>

        {/* Right Side: High-Fidelity Visual */}
        <div className="hidden lg:flex flex-1 bg-[#080808] relative items-center justify-center border-l border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent"></div>
          
          <div className="relative z-10 text-center p-12">
            <div className="w-64 h-64 mx-auto mb-10 relative">
              {/* Outer Ring */}
              <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_30s_linear_infinite]"></div>
              {/* Inner Pulsing Core */}
              <div className="absolute inset-4 border border-emerald-500/20 rounded-full flex items-center justify-center backdrop-blur-3xl bg-emerald-500/5">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full border border-emerald-500/30 flex items-center justify-center animate-pulse">
                   <ShieldCheck className="w-10 h-10 text-emerald-500 opacity-80" />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Institutional Security</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[280px] mx-auto">
              Your assets are guarded by multi-layer cold storage and advanced biometric verification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Inline SVG for Google to prevent any import errors
const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/>
  </svg>
);

const SocialButton = ({ icon, label }) => (
  <button className="flex items-center justify-center gap-3 bg-white/[0.03] border border-white/10 rounded-2xl py-3 px-4 text-white text-[13px] font-semibold hover:bg-white/[0.08] hover:border-white/20 transition-all active:scale-[0.95]">
    {icon}
    <span>{label}</span>
  </button>
);

export default LimeWireLogin;