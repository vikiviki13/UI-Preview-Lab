import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);

  // Resend OTP Timer
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  // Handle OTP Input
  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setError('');

    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  // Handle Backspace
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  // Handle Paste
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4);
    const newOtp = [...otp];
    pasteData.split('').forEach((char, i) => {
      if (i < 4) newOtp[i] = char;
    });
    setOtp(newOtp);
    setError('');
  };

  // Verify OTP
  const handleVerify = async () => {
    const otpValue = otp.join('');
    if (otpValue.length < 4) {
      setError('Please enter complete OTP');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
      setTimeout(() => {
        // Redirect or next action
      }, 1500);
    }, 1200);
  };

  // Resend OTP
  const handleResend = () => {
    setOtp(['', '', '', '']);
    setError('');
    setResendTimer(30);
    // API call for resend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center items-start font-sans">
      <div className="w-full max-w-md bg-white min-h-screen shadow-xl flex flex-col relative overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full opacity-20 blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-50 rounded-full opacity-30 blur-2xl -ml-24 -mb-24"></div>

        {/* Header Section */}
        <div className="bg-gradient-to-br from-[#1e7d4d] to-[#165e3a] px-8 pt-8 pb-20 rounded-b-[40px] relative z-10">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-[#a3e635] to-[#84cc16] p-3 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e7d4d" strokeWidth="2.5" className="font-bold">
                <circle cx="7" cy="18" r="3" />
                <circle cx="17" cy="18" r="3" />
                <path d="M1 1h4l2 12h12l1-7H7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-green-100 text-xs font-semibold tracking-widest uppercase">Dheeeran</p>
              <span className="text-white font-bold text-lg">Tractors</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-2">
            Verify Your<br />Phone Number
          </h1>
          <p className="text-green-100 text-sm md:text-base">
            Enter the 4-digit code we sent to your phone
          </p>
        </div>

        {/* Form Section */}
        <div className="px-6 md:px-8 -mt-8 bg-white rounded-t-[40px] flex-grow pt-12 pb-8 relative z-20">
          
          {/* Phone Display */}
          <div className="mb-8 p-4 bg-green-50 rounded-2xl border-2 border-green-100">
            <p className="text-gray-700 text-sm">
              OTP sent to <span className="text-[#1e7d4d] font-bold text-base">+91 98765 43210</span>
            </p>
          </div>

          {/* OTP Label */}
          <label className="block text-gray-700 font-bold text-sm uppercase tracking-wider mb-4 text-center">
            Enter 4-Digit Code
          </label>

          {/* OTP Inputs */}
          <div className="flex gap-3 mb-8 justify-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                onFocus={() => setFocusedIndex(index)}
                className={`w-14 h-16 md:w-16 md:h-18 text-center text-3xl font-bold rounded-2xl transition-all duration-200 ${
                  error
                    ? 'border-2 border-red-400 bg-red-50'
                    : focusedIndex === index
                    ? 'border-2 border-[#1e7d4d] bg-green-50 shadow-lg'
                    : digit
                    ? 'border-2 border-[#1e7d4d] bg-green-50'
                    : 'border-2 border-gray-200 bg-gray-50 hover:border-gray-300'
                } focus:outline-none text-gray-900`}
              />
            ))}
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-3 bg-red-50 border-l-4 border-red-400 rounded">
              <p className="text-red-600 text-sm font-medium">⚠️ {error}</p>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-400 rounded flex items-center gap-3">
              <CheckCircle size={20} className="text-green-600" />
              <p className="text-green-700 font-medium">OTP verified successfully!</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleVerify}
              disabled={loading || otp.join('').length < 4 || success}
              className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg transition-all duration-200 transform ${
                loading || success
                  ? 'bg-green-600 text-white cursor-wait'
                  : 'bg-gradient-to-r from-[#1e7d4d] to-[#15a34a] text-white hover:shadow-xl hover:scale-105 active:scale-95'
              }`}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  Verifying...
                </>
              ) : success ? (
                <>
                  <CheckCircle size={20} />
                  Verified!
                </>
              ) : (
                <>
                  Verify & Continue
                  <ArrowRight size={20} />
                </>
              )}
            </button>

            {/* Resend OTP Section */}
            <div className="text-center py-2">
              <span className="text-gray-600 text-sm">Didn't receive? </span>
              <button
                onClick={handleResend}
                disabled={resendTimer > 0}
                className={`font-bold text-sm transition-colors ${
                  resendTimer > 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-[#1e7d4d] hover:text-[#165e3a] underline'
                }`}
              >
                {resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Resend OTP'}
              </button>
            </div>

            {/* Change Number Button */}
            <button className="w-full border-2 border-[#1e7d4d] text-[#1e7d4d] py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-green-50 transition-all duration-200 transform hover:scale-105 active:scale-95">
              <ArrowLeft size={20} />
              Change Phone Number
            </button>
          </div>

          {/* Footer Info */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-xs">
              🔒 Your phone number is secure and encrypted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;