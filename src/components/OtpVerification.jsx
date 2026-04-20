import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Phone, Lock, Shield } from 'lucide-react';

const OtpVerification = () => {
  const [iteration, setIteration] = useState(1);
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

    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${iteration}-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${iteration}-${index - 1}`);
      prevInput?.focus();
    }
  };

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

  const handleVerify = async () => {
    const otpValue = otp.join('');
    if (otpValue.length < 4) {
      setError('Please enter complete OTP');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
      setTimeout(() => {
        // Reset for next iteration demo
        if (iteration < 3) {
          setIteration(iteration + 1);
          setOtp(['', '', '', '']);
          setSuccess(false);
          setError('');
        }
      }, 1500);
    }, 1200);
  };

  const handleResend = () => {
    setOtp(['', '', '', '']);
    setError('');
    setResendTimer(30);
  };

  // ======================== ITERATION 1 - ELEGANT MODERN ========================
  const renderIteration1 = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center items-start font-sans">
      <div className="w-full max-w-md bg-white min-h-screen shadow-xl flex flex-col relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full opacity-20 blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-50 rounded-full opacity-30 blur-2xl -ml-24 -mb-24"></div>

        <div className="bg-gradient-to-br from-[#1e7d4d] to-[#165e3a] px-8 pt-8 pb-20 rounded-b-[40px] relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-[#a3e635] to-[#84cc16] p-3 rounded-2xl shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e7d4d" strokeWidth="2.5">
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

          <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-2">
            Verify Your<br />Phone Number
          </h1>
          <p className="text-green-100 text-sm md:text-base">
            Enter the 4-digit code we sent to your phone
          </p>
        </div>

        <div className="px-6 md:px-8 -mt-8 bg-white rounded-t-[40px] flex-grow pt-12 pb-8 relative z-20">
          
          <div className="mb-8 p-4 bg-green-50 rounded-2xl border-2 border-green-100">
            <p className="text-gray-700 text-sm">
              OTP sent to <span className="text-[#1e7d4d] font-bold text-base">+91 98765 43210</span>
            </p>
          </div>

          <label className="block text-gray-700 font-bold text-sm uppercase tracking-wider mb-4 text-center">
            Enter 4-Digit Code
          </label>

          <div className="flex gap-3 mb-8 justify-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${iteration}-${index}`}
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

          {error && (
            <div className="mb-6 p-3 bg-red-50 border-l-4 border-red-400 rounded">
              <p className="text-red-600 text-sm font-medium">⚠️ {error}</p>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-400 rounded flex items-center gap-3">
              <CheckCircle size={20} className="text-green-600" />
              <p className="text-green-700 font-medium">OTP verified successfully!</p>
            </div>
          )}

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

            <button className="w-full border-2 border-[#1e7d4d] text-[#1e7d4d] py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-green-50 transition-all duration-200 transform hover:scale-105 active:scale-95">
              <ArrowLeft size={20} />
              Change Phone Number
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-xs">
              🔒 Your phone number is secure and encrypted
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // ======================== ITERATION 2 - MINIMAL CLEAN ========================
  const renderIteration2 = () => (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-sm">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1e7d4d] mb-6">
            <Phone size={32} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Verify OTP</h1>
          <p className="text-gray-600">
            We've sent a code to <br />
            <span className="text-[#1e7d4d] font-semibold">+91 98765 43210</span>
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-900">Enter Code</label>
            <div className="flex gap-2 justify-center">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${iteration}-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  onFocus={() => setFocusedIndex(index)}
                  className={`w-12 h-12 text-center text-2xl font-bold border-2 rounded-lg transition-all ${
                    error
                      ? 'border-red-400 text-red-600'
                      : digit
                      ? 'border-[#1e7d4d] text-[#1e7d4d]'
                      : 'border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-[#1e7d4d] focus:ring-offset-2`}
                />
              ))}
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-center">
              <p className="text-red-600 text-sm font-medium">{error}</p>
            </div>
          )}

          {success && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-center flex items-center justify-center gap-2">
              <CheckCircle size={18} className="text-green-600" />
              <p className="text-green-600 font-medium">Verified!</p>
            </div>
          )}

          <button
            onClick={handleVerify}
            disabled={loading || otp.join('').length < 4 || success}
            className={`w-full py-3 rounded-lg font-bold text-white transition-all ${
              loading || success
                ? 'bg-green-600 cursor-wait'
                : 'bg-[#1e7d4d] hover:bg-[#165e3a] active:scale-95'
            }`}
          >
            {loading ? 'Verifying...' : success ? 'Continue' : 'Verify Code'}
          </button>

          <div className="text-center">
            <p className="text-gray-600 text-sm mb-2">Didn't get the code?</p>
            <button
              onClick={handleResend}
              disabled={resendTimer > 0}
              className={`text-sm font-semibold ${
                resendTimer > 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-[#1e7d4d] hover:underline'
              }`}
            >
              {resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Resend Code'}
            </button>
          </div>

          <button className="w-full py-3 border-2 border-gray-300 rounded-lg font-bold text-gray-700 hover:bg-gray-50 transition-all">
            Change Number
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
            <Shield size={14} />
            <span>Secure • Encrypted • Private</span>
          </div>
        </div>
      </div>
    </div>
  );

  // ======================== ITERATION 3 - BOLD PREMIUM ========================
  const renderIteration3 = () => (
    <div className="min-h-screen bg-gradient-to-b from-[#1e7d4d] via-[#1e7d4d] to-green-900 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md">
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          <div className="bg-gradient-to-r from-[#1e7d4d] to-[#15a34a] px-8 py-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#a3e635] mb-6 shadow-lg">
              <Lock size={40} className="text-[#1e7d4d]" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Secure Verification</h1>
            <p className="text-green-100 text-sm">Your OTP code is ready</p>
          </div>

          <div className="px-8 py-10 space-y-8">
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <Phone size={20} className="text-[#1e7d4d]" />
                <span className="text-sm text-gray-600">Verification Code Sent</span>
              </div>
              <p className="text-xl font-bold text-[#1e7d4d]">+91 98765 43210</p>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-bold text-gray-900 uppercase tracking-wider">
                Enter Your Code
              </label>
              <div className="flex gap-3 justify-center">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${iteration}-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    onFocus={() => setFocusedIndex(index)}
                    className={`w-14 h-14 text-center text-2xl font-bold rounded-xl transition-all border-2 ${
                      error
                        ? 'border-red-400 bg-red-50 text-red-600'
                        : focusedIndex === index
                        ? 'border-[#1e7d4d] bg-green-50 shadow-lg text-[#1e7d4d]'
                        : digit
                        ? 'border-[#1e7d4d] bg-green-50 text-[#1e7d4d]'
                        : 'border-gray-300 bg-gray-50 text-gray-900'
                    } focus:outline-none`}
                  />
                ))}
              </div>
            </div>

            {error && (
              <div className="p-4 bg-red-50 border-l-4 border-red-400 rounded-lg">
                <p className="text-red-600 text-sm font-medium">⚠️ {error}</p>
              </div>
            )}

            {success && (
              <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  <p className="text-green-700 font-bold">Verification Successful!</p>
                </div>
              </div>
            )}

            <button
              onClick={handleVerify}
              disabled={loading || otp.join('').length < 4 || success}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform ${
                loading || success
                  ? 'bg-green-600 text-white cursor-wait'
                  : 'bg-gradient-to-r from-[#1e7d4d] to-[#15a34a] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95'
              }`}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  Processing...
                </>
              ) : success ? (
                <>
                  <CheckCircle size={20} />
                  Verified!
                </>
              ) : (
                <>
                  Continue to Dashboard
                  <ArrowRight size={20} />
                </>
              )}
            </button>

            <div className="space-y-3">
              <div className="text-center">
                <span className="text-gray-600 text-sm">Didn't receive code? </span>
                <button
                  onClick={handleResend}
                  disabled={resendTimer > 0}
                  className={`font-bold text-sm transition-colors ${
                    resendTimer > 0
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-[#1e7d4d] hover:text-[#165e3a]'
                  }`}
                >
                  {resendTimer > 0 ? `Try again in ${resendTimer}s` : 'Resend OTP'}
                </button>
              </div>

              <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                <ArrowLeft size={18} />
                Use Different Number
              </button>
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-4 text-center border-t border-gray-200">
            <p className="text-gray-600 text-xs">
              🔐 Bank-level encryption • Your data is safe
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
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white shadow-lg rounded-lg p-2">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => {
              setIteration(num);
              setOtp(['', '', '', '']);
              setError('');
              setSuccess(false);
              setLoading(false);
              setResendTimer(0);
            }}
            className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${
              iteration === num
                ? 'bg-[#1e7d4d] text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Design {num}
          </button>
        ))}
      </div>

      {/* Version Indicator */}
      <div className="fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-lg px-4 py-2 text-xs text-gray-600 font-medium">
        Version {iteration}/3
      </div>

      {/* Render Selected Iteration */}
      {iteration === 1 && renderIteration1()}
      {iteration === 2 && renderIteration2()}
      {iteration === 3 && renderIteration3()}
    </div>
  );
};

export default OtpVerification;