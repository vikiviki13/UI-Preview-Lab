import React, { useState } from 'react';
import { ArrowRight, Phone, Lock, Check } from 'lucide-react';

const PhoneLogin = () => {
  const [iteration, setIteration] = useState(1);
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 10) value = value.slice(0, 10);
    setPhone(value);
    setError('');
  };

  const handleSendOtp = async () => {
    if (phone.length < 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    
    setLoading(true);
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
      setTimeout(() => {
        if (iteration < 3) {
          setIteration(iteration + 1);
          setPhone('');
          setSuccess(false);
          setError('');
        }
      }, 1500);
    }, 1200);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSendOtp();
  };

  // ======================== ITERATION 1 - ELEGANT MODERN ========================
  const renderIteration1 = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex justify-center items-start font-sans">
      <div className="w-full max-w-md bg-white min-h-screen shadow-2xl flex flex-col relative overflow-hidden">
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full opacity-15 blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute -bottom-32 left-0 w-96 h-96 bg-green-50 rounded-full opacity-20 blur-3xl -ml-48"></div>

        {/* Top Branding Section */}
        <div className="bg-gradient-to-br from-[#1e7d4d] to-[#165e3a] px-8 pt-8 pb-24 rounded-b-[45px] relative z-10 shadow-lg">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-gradient-to-br from-[#a3e635] to-[#84cc16] p-3 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15C5 13.8954 5.89543 13 7 13H17C18.1046 13 19 13.8954 19 15V17H5V15Z" fill="#1e7d4d"/>
                <circle cx="7" cy="18" r="2" fill="#1e7d4d"/>
                <circle cx="17" cy="18" r="2" fill="#1e7d4d"/>
                <path d="M9 13V9L12 7L15 9V13" stroke="#1e7d4d" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <p className="text-green-100 text-xs font-semibold tracking-widest uppercase">Dheeeran</p>
              <span className="text-white font-bold text-lg">Tractors</span>
            </div>
          </div>

          <h1 className="text-white text-4xl font-extrabold leading-tight tracking-tight mb-2">
            Welcome back,<br />Broker!
          </h1>
          <p className="text-green-100/90 text-base font-medium">
            Enter your phone to get started
          </p>
        </div>

        {/* Form Section */}
        <div className="px-8 -mt-12 bg-white rounded-t-[45px] flex-grow pt-14 pb-10 relative z-20">
          
          <label className="block text-gray-700 font-bold text-sm uppercase tracking-widest mb-4 ml-1">
            Phone Number
          </label>
          
          {/* Split Input Group */}
          <div className={`flex h-16 w-full rounded-2xl overflow-hidden transition-all duration-300 ${
            error 
              ? 'border-2 border-red-400 bg-red-50 shadow-md' 
              : 'border-2 border-gray-100 bg-white shadow-sm focus-within:border-[#1e7d4d] focus-within:shadow-lg focus-within:bg-green-50'
          }`}>
            <div className="w-24 flex items-center justify-center bg-gray-50 border-r border-gray-100 text-gray-600 text-sm font-bold">
              🇮🇳 +91
            </div>
            <input 
              type="tel"
              inputMode="numeric"
              value={phone}
              onChange={handlePhoneChange}
              onKeyPress={handleKeyPress}
              placeholder="98765 43210"
              className="flex-1 px-6 text-lg font-semibold text-gray-900 placeholder-gray-400 outline-none bg-transparent"
            />
            {phone.length === 10 && (
              <div className="flex items-center justify-center pr-4 text-green-600">
                <Check size={24} />
              </div>
            )}
          </div>

          {error && (
            <p className="text-red-600 text-sm font-medium mt-3 ml-1 flex items-center gap-2">
              ⚠️ {error}
            </p>
          )}

          {success && (
            <div className="mt-4 p-4 bg-green-50 border-2 border-green-400 rounded-2xl text-center">
              <p className="text-green-700 font-bold flex items-center justify-center gap-2">
                <Check size={20} />
                OTP sent successfully!
              </p>
            </div>
          )}

          {/* Action Button */}
          <button 
            onClick={handleSendOtp}
            disabled={loading || success || phone.length < 10}
            className={`w-full mt-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg transition-all transform ${
              loading || success
                ? 'bg-green-600 text-white cursor-wait'
                : phone.length === 10
                ? 'bg-gradient-to-r from-[#1e7d4d] to-[#15a34a] text-white hover:shadow-xl hover:scale-105 active:scale-95'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                Sending OTP...
              </>
            ) : success ? (
              <>
                <Check size={20} />
                OTP Sent!
              </>
            ) : (
              <>
                Send OTP
                <ArrowRight size={20} strokeWidth={3} />
              </>
            )}
          </button>

          {/* Footer Terms */}
          <p className="text-center mt-10 text-sm text-gray-500 font-medium leading-relaxed">
            By continuing, you agree to our <span className="text-[#1e7d4d] font-bold cursor-pointer hover:underline">Terms of Service</span> and <span className="text-[#1e7d4d] font-bold cursor-pointer hover:underline">Privacy Policy</span>
          </p>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-xs flex items-center justify-center gap-2">
              <Lock size={14} />
              Your data is secure and encrypted
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // ======================== ITERATION 2 - MINIMAL CLEAN ========================
  const renderIteration2 = () => (
    <div className="min-h-screen bg-white flex justify-center items-center p-4 font-sans">
      <div className="w-full max-w-md">
        
        {/* Centered Logo */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1e7d4d] mb-8 shadow-lg">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 15C5 13.8954 5.89543 13 7 13H17C18.1046 13 19 13.8954 19 15V17H5V15Z" fill="#a3e635"/>
              <circle cx="7" cy="18" r="2" fill="#a3e635"/>
              <circle cx="17" cy="18" r="2" fill="#a3e635"/>
              <path d="M9 13V9L12 7L15 9V13" stroke="#a3e635" strokeWidth="2"/>
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Dheeeran</h1>
          <p className="text-gray-600 text-base">Welcome back, Broker!</p>
        </div>

        {/* Form Container */}
        <div className="space-y-6">
          
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-900">Your Phone Number</label>
            <div className="flex h-12 rounded-lg overflow-hidden border-2 border-gray-300 hover:border-gray-400 transition-colors focus-within:border-[#1e7d4d] focus-within:ring-2 focus-within:ring-green-100">
              <div className="px-4 flex items-center bg-gray-50 text-gray-700 font-semibold text-sm border-r border-gray-300">
                +91
              </div>
              <input 
                type="tel"
                inputMode="numeric"
                value={phone}
                onChange={handlePhoneChange}
                onKeyPress={handleKeyPress}
                placeholder="98765 43210"
                className="flex-1 px-4 text-gray-900 outline-none bg-white text-lg font-medium"
              />
            </div>
            {error && <p className="text-red-600 text-xs font-medium">{error}</p>}
            {phone.length === 10 && <p className="text-green-600 text-xs font-medium">✓ Valid number</p>}
          </div>

          {success && (
            <div className="p-4 bg-green-50 border border-green-300 rounded-lg">
              <p className="text-green-700 font-medium text-center text-sm">✓ OTP sent to +91 {phone}</p>
            </div>
          )}

          <button 
            onClick={handleSendOtp}
            disabled={loading || success || phone.length < 10}
            className={`w-full py-3 rounded-lg font-bold text-white transition-all ${
              loading || success
                ? 'bg-green-600 cursor-wait'
                : phone.length === 10
                ? 'bg-[#1e7d4d] hover:bg-[#165e3a] active:scale-95'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {loading ? 'Sending...' : success ? 'OTP Sent!' : 'Send OTP'}
          </button>

          <p className="text-center text-xs text-gray-600 leading-relaxed">
            By continuing, you accept our <span className="text-[#1e7d4d] font-semibold cursor-pointer">Terms</span> and <span className="text-[#1e7d4d] font-semibold cursor-pointer">Privacy</span>
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          🔒 Secure Login
        </div>
      </div>
    </div>
  );

  // ======================== ITERATION 3 - BOLD PREMIUM ========================
  const renderIteration3 = () => (
    <div className="min-h-screen bg-gradient-to-b from-[#1e7d4d] via-[#0f6d3a] to-green-900 flex justify-center items-center p-4 font-sans">
      <div className="w-full max-w-md">
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Premium Header */}
          <div className="bg-gradient-to-r from-[#1e7d4d] to-[#15a34a] px-8 py-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#a3e635] mb-6 shadow-xl">
              <Phone size={40} className="text-[#1e7d4d]" strokeWidth={2.5} />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Login to Your Account</h1>
            <p className="text-green-100 text-sm">Quick & Secure Authentication</p>
          </div>

          {/* Form Content */}
          <div className="px-8 py-10 space-y-8">
            
            <div className="space-y-3">
              <label className="block text-sm font-bold text-gray-900 uppercase tracking-wider">Mobile Number</label>
              
              <div className={`flex h-14 rounded-xl overflow-hidden border-2 transition-all ${
                error 
                  ? 'border-red-400 bg-red-50' 
                  : 'border-gray-200 bg-gray-50 focus-within:border-[#1e7d4d] focus-within:bg-green-50 focus-within:shadow-lg'
              }`}>
                <div className="px-4 flex items-center bg-white border-r border-gray-200 text-gray-700 font-bold text-sm">
                  🇮🇳 +91
                </div>
                <input 
                  type="tel"
                  inputMode="numeric"
                  value={phone}
                  onChange={handlePhoneChange}
                  onKeyPress={handleKeyPress}
                  placeholder="98765 43210"
                  className="flex-1 px-4 text-lg font-bold text-gray-900 placeholder-gray-400 outline-none bg-transparent"
                />
              </div>

              {error && (
                <div className="p-3 bg-red-50 border-l-4 border-red-400 rounded text-red-600 text-sm font-medium">
                  ⚠️ {error}
                </div>
              )}

              {phone.length > 0 && phone.length < 10 && (
                <p className="text-sm text-gray-600 font-medium">
                  {10 - phone.length} digits remaining
                </p>
              )}

              {phone.length === 10 && (
                <p className="text-sm text-green-600 font-bold flex items-center gap-2">
                  <Check size={16} /> Valid number
                </p>
              )}
            </div>

            {success && (
              <div className="p-4 bg-green-50 border-2 border-green-400 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center">
                    <Check size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-green-900 font-bold text-sm">OTP Sent Successfully!</p>
                    <p className="text-green-700 text-xs">Check your SMS for the code</p>
                  </div>
                </div>
              </div>
            )}

            <button 
              onClick={handleSendOtp}
              disabled={loading || success || phone.length < 10}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform ${
                loading || success
                  ? 'bg-green-600 text-white cursor-wait'
                  : phone.length === 10
                  ? 'bg-gradient-to-r from-[#1e7d4d] to-[#15a34a] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  Sending OTP...
                </>
              ) : success ? (
                <>
                  <Check size={20} />
                  OTP Sent!
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight size={20} strokeWidth={3} />
                </>
              )}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-600 font-medium">OR</span>
              </div>
            </div>

            <button className="w-full border-2 border-gray-300 text-gray-900 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
              <Lock size={18} />
              Login with ID
            </button>
          </div>

          {/* Premium Footer */}
          <div className="bg-gradient-to-r from-gray-50 to-green-50 px-8 py-6 border-t-2 border-gray-200 text-center">
            <p className="text-xs text-gray-600 mb-3">
              🔐 Bank-grade encryption • 256-bit SSL • ISO 27001 Certified
            </p>
            <p className="text-xs text-gray-500">
              By continuing, you agree to our <span className="text-[#1e7d4d] font-bold cursor-pointer">Terms</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // ======================== MAIN RENDER ========================
  return (
    <div className="w-full">
      {/* Iteration Selector */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white shadow-xl rounded-full p-1 border-2 border-gray-100">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => {
              setIteration(num);
              setPhone('');
              setError('');
              setSuccess(false);
              setLoading(false);
            }}
            className={`w-10 h-10 rounded-full font-bold text-xs transition-all transform ${
              iteration === num
                ? 'bg-[#1e7d4d] text-white shadow-lg scale-110'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
              {num}
            </button>
          ))}
      </div>

      {/* Version Label */}
      <div className="fixed top-4 left-4 z-50 bg-white shadow-lg rounded-full px-4 py-2 text-xs font-bold text-[#1e7d4d] border-2 border-[#1e7d4d]">
        Design {iteration}/3
      </div>

      {/* Render Selected Iteration */}
      {iteration === 1 && renderIteration1()}
      {iteration === 2 && renderIteration2()}
      {iteration === 3 && renderIteration3()}
    </div>
  );
};

export default PhoneLogin;