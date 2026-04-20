import React, { useState } from 'react';
import { ArrowLeft, ChevronUp, ChevronDown, Camera, Save, ArrowRight } from 'lucide-react';

const AddTractor = () => {
  const [iteration, setIteration] = useState(1);
  const [formData, setFormData] = useState({
    brand: 'Mahindra',
    model: 'Arjun 555',
    year: '2021',
    hp: '55',
    location: 'Tumkur, Karnataka',
    overallCond: '75',
    engineCond: '80',
    tyreCond: '70',
    condNotes: '',
    price: '480000',
    negotiable: 'Yes',
    commType: 'Manual',
    commission: '5000',
    contact: '98765 43210'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Helper for Input Groups
  const InputField = ({ label, placeholder, type = "text", field, value }) => (
    <div className="flex-1">
      <label className="block text-[11px] font-bold text-gray-700 mb-1 uppercase tracking-tight">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => handleInputChange(field, e.target.value)}
        placeholder={placeholder}
        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1e7d4d] focus:ring-1 focus:ring-[#1e7d4d]"
      />
    </div>
  );

  const SelectField = ({ label, options, field, value }) => (
    <div className="flex-1">
      <label className="block text-[11px] font-bold text-gray-700 mb-1 uppercase tracking-tight">
        {label} <span className="text-red-500">*</span>
      </label>
      <select 
        value={value}
        onChange={(e) => handleInputChange(field, e.target.value)}
        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1e7d4d] appearance-none cursor-pointer"
      >
        {options.map(opt => <option key={opt}>{opt}</option>)}
      </select>
    </div>
  );

  // ======================== ITERATION 1 - ELEGANT MODERN ========================
  const renderIteration1 = () => (
    <div className="min-h-screen bg-gray-50 font-sans pb-24">
      {/* Top Header */}
      <div className="bg-[#1e7d4d] px-4 py-3 flex justify-between items-center text-white sticky top-0 z-50 shadow-lg">
        <span className="text-sm font-medium">9:41</span>
        <div className="flex gap-1.5">
          <div className="w-4 h-4 rounded-sm border border-white/50" />
          <div className="w-4 h-4 rounded-full border border-white/50" />
        </div>
      </div>

      {/* Navigation Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-100 sticky top-12 z-40 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowLeft size={18} className="text-[#1e7d4d]" />
            </button>
            <div>
              <h1 className="font-bold text-gray-800">Add Tractor</h1>
              <p className="text-[10px] text-gray-400 flex items-center gap-1">
                <span className="w-2 h-2 bg-emerald-400 rounded-full inline-block animate-pulse" /> Auto-save on
              </p>
            </div>
          </div>
          <div className="bg-emerald-50 text-[#1e7d4d] px-4 py-2 rounded-full text-xs font-bold border border-emerald-200 shadow-sm">
            7/7
          </div>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
          <div className="bg-gradient-to-r from-[#1e7d4d] to-[#15a34a] h-full w-full rounded-full" style={{ width: '100%' }}></div>
        </div>
      </div>

      {/* Form Sections Container */}
      <div className="p-4 space-y-4">
        
        {/* Section: Basic Info */}
        <FormSection icon="📝" title="Basic Info">
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Brand" placeholder="e.g. Mahindra" field="brand" value={formData.brand} />
            <InputField label="Model" placeholder="e.g. Arjun 555" field="model" value={formData.model} />
            <InputField label="Year" placeholder="e.g. 2021" field="year" value={formData.year} />
            <InputField label="Horsepower (HP)" placeholder="e.g. 55 HP" field="hp" value={formData.hp} />
          </div>
          <div className="mt-4">
            <InputField label="Location / District" placeholder="e.g. Tumkur, Karnataka" field="location" value={formData.location} />
          </div>
        </FormSection>

        {/* Section: Condition */}
        <FormSection icon="🔋" title="Condition">
          <div className="grid grid-cols-3 gap-3">
            <InputField label="Overall Cond. (%)" field="overallCond" value={formData.overallCond} />
            <InputField label="Engine Cond. (%)" field="engineCond" value={formData.engineCond} />
            <InputField label="Tyre Cond. (%)" field="tyreCond" value={formData.tyreCond} />
          </div>
          <div className="mt-4">
            <label className="block text-[11px] font-bold text-gray-700 mb-1 uppercase tracking-tight">Condition Notes *</label>
            <textarea 
              placeholder="Any specific condition details..."
              value={formData.condNotes}
              onChange={(e) => handleInputChange('condNotes', e.target.value)}
              className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm h-24 focus:outline-none focus:border-[#1e7d4d]"
            />
          </div>
        </FormSection>

        {/* Section: Sale Info */}
        <FormSection icon="💰" title="Sale Info">
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Asking Price (₹)" field="price" value={formData.price} />
            <SelectField label="Negotiable?" options={["Yes", "No"]} field="negotiable" value={formData.negotiable} />
            <div className="col-span-2">
              <SelectField label="Commission Type" options={["Manual", "Percentage"]} field="commType" value={formData.commType} />
            </div>
            <InputField label="Commission (₹)" field="commission" value={formData.commission} />
            <InputField label="Contact Number" field="contact" value={formData.contact} />
          </div>
        </FormSection>

        {/* Section: Photos */}
        <FormSection icon="📸" title="Photos">
          <p className="text-[11px] text-gray-500 mb-4 font-medium">Upload at least one photo *</p>
          <div className="grid grid-cols-3 gap-3">
            {['Front', 'Side', 'Engine', 'Rear', 'Cabin', 'Other'].map(label => (
              <div key={label} className="aspect-square bg-gradient-to-br from-gray-50 to-white border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-[#1e7d4d] hover:bg-green-50 transition-all cursor-pointer">
                <Camera size={20} className="text-gray-400" />
                <span className="text-[10px] font-bold text-gray-400 uppercase">{label}</span>
              </div>
            ))}
          </div>
        </FormSection>

      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-2xl">
        <div className="flex gap-3">
          <button className="flex-1 border-2 border-gray-200 py-4 rounded-2xl font-bold text-gray-600 flex items-center justify-center gap-2 hover:border-gray-300 hover:bg-gray-50 transition-all">
            <Save size={18} /> Draft
          </button>
          <button className="flex-[2] bg-gradient-to-r from-[#1e7d4d] to-[#15a34a] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-900/30 hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all">
            Publish Listing <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );

  // ======================== ITERATION 2 - MINIMAL CLEAN ========================
  const renderIteration2 = () => (
    <div className="min-h-screen bg-white font-sans pb-24">
      {/* Top Header */}
      <div className="bg-white px-4 py-3 flex justify-between items-center border-b border-gray-200 sticky top-0 z-50">
        <span className="text-sm font-medium text-gray-900">9:41</span>
        <div className="flex gap-1.5">
          <div className="w-4 h-4 rounded-sm border border-gray-300" />
          <div className="w-4 h-4 rounded-full border border-gray-300" />
        </div>
      </div>

      {/* Navigation Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-200 sticky top-11 z-40">
        <div className="flex items-center gap-3 mb-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft size={18} className="text-gray-900" />
          </button>
          <div>
            <h1 className="font-bold text-gray-900">Add Tractor</h1>
            <p className="text-[10px] text-gray-500">Complete all fields</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-600 font-medium">Progress: 7/7</div>
          <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="bg-gray-900 h-full w-full"></div>
          </div>
        </div>
      </div>

      {/* Form Sections Container */}
      <div className="p-4 space-y-4">
        
        {/* Section: Basic Info */}
        <FormSection icon="📝" title="Basic Info">
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Brand" placeholder="e.g. Mahindra" field="brand" value={formData.brand} />
            <InputField label="Model" placeholder="e.g. Arjun 555" field="model" value={formData.model} />
            <InputField label="Year" placeholder="e.g. 2021" field="year" value={formData.year} />
            <InputField label="Horsepower (HP)" placeholder="e.g. 55 HP" field="hp" value={formData.hp} />
          </div>
          <div className="mt-4">
            <InputField label="Location / District" placeholder="e.g. Tumkur, Karnataka" field="location" value={formData.location} />
          </div>
        </FormSection>

        {/* Section: Condition */}
        <FormSection icon="🔋" title="Condition">
          <div className="grid grid-cols-3 gap-3">
            <InputField label="Overall Cond. (%)" field="overallCond" value={formData.overallCond} />
            <InputField label="Engine Cond. (%)" field="engineCond" value={formData.engineCond} />
            <InputField label="Tyre Cond. (%)" field="tyreCond" value={formData.tyreCond} />
          </div>
          <div className="mt-4">
            <label className="block text-[11px] font-bold text-gray-900 mb-1 uppercase tracking-tight">Condition Notes *</label>
            <textarea 
              placeholder="Any specific condition details..."
              value={formData.condNotes}
              onChange={(e) => handleInputChange('condNotes', e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm h-24 focus:outline-none focus:border-gray-900"
            />
          </div>
        </FormSection>

        {/* Section: Sale Info */}
        <FormSection icon="💰" title="Sale Info">
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Asking Price (₹)" field="price" value={formData.price} />
            <SelectField label="Negotiable?" options={["Yes", "No"]} field="negotiable" value={formData.negotiable} />
            <div className="col-span-2">
              <SelectField label="Commission Type" options={["Manual", "Percentage"]} field="commType" value={formData.commType} />
            </div>
            <InputField label="Commission (₹)" field="commission" value={formData.commission} />
            <InputField label="Contact Number" field="contact" value={formData.contact} />
          </div>
        </FormSection>

        {/* Section: Photos */}
        <FormSection icon="📸" title="Photos">
          <p className="text-[11px] text-gray-600 mb-4 font-medium">Upload at least one photo *</p>
          <div className="grid grid-cols-3 gap-3">
            {['Front', 'Side', 'Engine', 'Rear', 'Cabin', 'Other'].map(label => (
              <div key={label} className="aspect-square bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 hover:border-gray-900 hover:bg-gray-100 transition-all cursor-pointer">
                <Camera size={20} className="text-gray-600" />
                <span className="text-[10px] font-bold text-gray-600 uppercase">{label}</span>
              </div>
            ))}
          </div>
        </FormSection>

      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex gap-3">
          <button className="flex-1 border-2 border-gray-300 py-4 rounded-lg font-bold text-gray-900 flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
            <Save size={18} /> Draft
          </button>
          <button className="flex-[2] bg-gray-900 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-black transition-all">
            Publish Listing <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );

  // ======================== ITERATION 3 - BOLD PREMIUM ========================
  const renderIteration3 = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#1e7d4d] to-green-900 font-sans pb-24">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-[#1e7d4d] to-[#15a34a] px-4 py-3 flex justify-between items-center text-white sticky top-0 z-50 shadow-lg">
        <span className="text-sm font-medium">9:41</span>
        <div className="flex gap-1.5">
          <div className="w-4 h-4 rounded-sm border border-white/50" />
          <div className="w-4 h-4 rounded-full border border-white/50" />
        </div>
      </div>

      {/* Navigation Header */}
      <div className="bg-white/10 backdrop-blur-lg px-4 py-4 border-b border-white/20 sticky top-12 z-40">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
              <ArrowLeft size={18} className="text-white" />
            </button>
            <div>
              <h1 className="font-bold text-white text-lg">Add Tractor</h1>
              <p className="text-[10px] text-green-100/70 flex items-center gap-1">
                <span className="w-2 h-2 bg-[#a3e635] rounded-full inline-block animate-pulse" /> Premium Listing
              </p>
            </div>
          </div>
          <div className="bg-[#a3e635] text-green-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg">
            7/7 Complete
          </div>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden backdrop-blur-sm">
          <div className="bg-gradient-to-r from-[#a3e635] to-cyan-400 h-full w-full rounded-full" style={{ width: '100%' }}></div>
        </div>
      </div>

      {/* Form Sections Container */}
      <div className="p-4 space-y-4">
        
        {/* Section: Basic Info */}
        <FormSectionPremium icon="📝" title="Basic Info">
          <div className="grid grid-cols-2 gap-4">
            <InputFieldPremium label="Brand" placeholder="e.g. Mahindra" field="brand" value={formData.brand} onChange={handleInputChange} />
            <InputFieldPremium label="Model" placeholder="e.g. Arjun 555" field="model" value={formData.model} onChange={handleInputChange} />
            <InputFieldPremium label="Year" placeholder="e.g. 2021" field="year" value={formData.year} onChange={handleInputChange} />
            <InputFieldPremium label="Horsepower (HP)" placeholder="e.g. 55 HP" field="hp" value={formData.hp} onChange={handleInputChange} />
          </div>
          <div className="mt-4">
            <InputFieldPremium label="Location / District" placeholder="e.g. Tumkur, Karnataka" field="location" value={formData.location} onChange={handleInputChange} />
          </div>
        </FormSectionPremium>

        {/* Section: Condition */}
        <FormSectionPremium icon="🔋" title="Condition">
          <div className="grid grid-cols-3 gap-3">
            <InputFieldPremium label="Overall Cond. (%)" field="overallCond" value={formData.overallCond} onChange={handleInputChange} />
            <InputFieldPremium label="Engine Cond. (%)" field="engineCond" value={formData.engineCond} onChange={handleInputChange} />
            <InputFieldPremium label="Tyre Cond. (%)" field="tyreCond" value={formData.tyreCond} onChange={handleInputChange} />
          </div>
          <div className="mt-4">
            <label className="block text-[11px] font-bold text-green-100 mb-1 uppercase tracking-tight">Condition Notes *</label>
            <textarea 
              placeholder="Any specific condition details..."
              value={formData.condNotes}
              onChange={(e) => handleInputChange('condNotes', e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm h-24 focus:outline-none focus:border-[#a3e635] text-white placeholder-white/50 backdrop-blur-sm"
            />
          </div>
        </FormSectionPremium>

        {/* Section: Sale Info */}
        <FormSectionPremium icon="💰" title="Sale Info">
          <div className="grid grid-cols-2 gap-4">
            <InputFieldPremium label="Asking Price (₹)" field="price" value={formData.price} onChange={handleInputChange} />
            <SelectFieldPremium label="Negotiable?" options={["Yes", "No"]} field="negotiable" value={formData.negotiable} onChange={handleInputChange} />
            <div className="col-span-2">
              <SelectFieldPremium label="Commission Type" options={["Manual", "Percentage"]} field="commType" value={formData.commType} onChange={handleInputChange} />
            </div>
            <InputFieldPremium label="Commission (₹)" field="commission" value={formData.commission} onChange={handleInputChange} />
            <InputFieldPremium label="Contact Number" field="contact" value={formData.contact} onChange={handleInputChange} />
          </div>
        </FormSectionPremium>

        {/* Section: Photos */}
        <FormSectionPremium icon="📸" title="Photos">
          <p className="text-[11px] text-green-100/70 mb-4 font-medium">Upload at least one photo *</p>
          <div className="grid grid-cols-3 gap-3">
            {['Front', 'Side', 'Engine', 'Rear', 'Cabin', 'Other'].map(label => (
              <div key={label} className="aspect-square bg-white/10 backdrop-blur-sm border-2 border-dashed border-white/30 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-[#a3e635] hover:bg-white/20 transition-all cursor-pointer">
                <Camera size={20} className="text-green-100" />
                <span className="text-[10px] font-bold text-green-100 uppercase">{label}</span>
              </div>
            ))}
          </div>
        </FormSectionPremium>

      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-xl border-t border-white/20 p-4 shadow-2xl">
        <div className="flex gap-3">
          <button className="flex-1 border-2 border-white/30 py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-2 hover:bg-white/10 transition-all backdrop-blur-sm">
            <Save size={18} /> Draft
          </button>
          <button className="flex-[2] bg-gradient-to-r from-[#a3e635] to-cyan-400 text-green-900 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-green-900/40 hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all">
            Publish Listing <ArrowRight size={18} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );

  // Premium Input Field Component
  const InputFieldPremium = ({ label, placeholder, type = "text", field, value, onChange }) => (
    <div className="flex-1">
      <label className="block text-[11px] font-bold text-green-100 mb-1 uppercase tracking-tight">
        {label} <span className="text-yellow-300">*</span>
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(field, e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635]"
      />
    </div>
  );

  const SelectFieldPremium = ({ label, options, field, value, onChange }) => (
    <div className="flex-1">
      <label className="block text-[11px] font-bold text-green-100 mb-1 uppercase tracking-tight">
        {label} <span className="text-yellow-300">*</span>
      </label>
      <select 
        value={value}
        onChange={(e) => onChange(field, e.target.value)}
        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#a3e635] appearance-none cursor-pointer"
      >
        {options.map(opt => <option key={opt} className="bg-green-900">{opt}</option>)}
      </select>
    </div>
  );

  // Premium Form Section Component
  const FormSectionPremium = ({ icon, title, children }) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border border-white/20 hover:border-white/40 transition-all">
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="px-5 py-4 flex items-center justify-between cursor-pointer active:bg-white/5"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">{icon}</span>
            <h2 className="font-bold text-white text-sm tracking-tight">{title}</h2>
          </div>
          {isOpen ? <ChevronUp size={18} className="text-green-100/70" /> : <ChevronDown size={18} className="text-green-100/70" />}
        </div>
        {isOpen && <div className="px-5 pb-6 border-t border-white/10 pt-4">{children}</div>}
      </div>
    );
  };

  // ======================== MAIN RENDER ========================
  return (
    <div className="w-full">
      {/* Iteration Selector */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white shadow-xl rounded-full p-1 border-2 border-gray-100">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => setIteration(num)}
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

// Reusable Section Wrapper (for Iteration 1 & 2)
const FormSection = ({ icon, title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-white rounded-[24px] shadow-sm overflow-hidden border border-gray-50 hover:shadow-md transition-all">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="px-5 py-4 flex items-center justify-between cursor-pointer active:bg-gray-50"
      >
        <div className="flex items-center gap-3">
          <span className="text-lg">{icon}</span>
          <h2 className="font-bold text-gray-800 text-sm tracking-tight">{title}</h2>
        </div>
        {isOpen ? <ChevronUp size={18} className="text-gray-300" /> : <ChevronDown size={18} className="text-gray-300" />}
      </div>
      {isOpen && <div className="px-5 pb-6 border-t border-gray-50 pt-4">{children}</div>}
    </div>
  );
};

export default AddTractor;