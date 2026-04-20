import React, { useState } from 'react';
import { Search, Plus, Home, ClipboardList, BarChart2, Settings, ChevronRight, Trash2, Edit2 } from 'lucide-react';

const MyListings = () => {
  const [iteration, setIteration] = useState(1);
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeTab, setActiveTab] = useState('listings');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filters = ['All', 'Available', 'Sold', 'Mahindra', 'Sonalika', 'TAFE'];
  
  const listings = [
    { id: 1, brand: 'Mahindra', model: 'Arjun 555', year: 2019, price: '₹4.8L', status: 'available', emoji: '🚜' },
    { id: 2, brand: 'Sonalika', model: 'DI 60', year: 2020, price: '₹3.5L', status: 'available', emoji: '🚜' },
    { id: 3, brand: 'TAFE', model: 'TT 35', year: 2018, price: '₹2.8L', status: 'sold', emoji: '🚜' },
  ];

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.brand.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         listing.model.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'All' || 
                         listing.status === activeFilter.toLowerCase() || 
                         listing.brand === activeFilter;
    return matchesSearch && matchesFilter;
  });

  // ======================== ITERATION 1 - ELEGANT MODERN ========================
  const renderIteration1 = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex flex-col font-sans">
      {/* Status Bar */}
      <div className="bg-gradient-to-r from-[#1e7d4d] to-[#165e3a] px-4 py-2 flex justify-between items-center text-white text-xs font-bold shadow-md">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-white/30 rounded-sm border border-white/50" />
          <span>92%</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-5 py-5 flex justify-between items-center border-b border-gray-100 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">My Listings</h1>
        <span className="text-gray-500 text-sm font-medium bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
          {filteredListings.length} tractors
        </span>
      </div>

      {/* Search and Filters Section */}
      <div className="bg-white px-5 py-4 shadow-sm border-b border-gray-100">
        <div className="relative flex items-center mb-4">
          <Search className="absolute left-4 text-gray-400" size={18} />
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search brand, model, year..."
            className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-[#1e7d4d] focus:ring-1 focus:ring-[#1e7d4d] placeholder-gray-400 transition-all"
          />
        </div>

        {/* Horizontal Scrollable Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold border transition-all transform hover:scale-105 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#1e7d4d] to-[#15a34a] text-white border-transparent shadow-md'
                  : 'bg-white text-gray-600 border-gray-100 hover:border-gray-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      {filteredListings.length === 0 ? (
        <div className="flex-grow flex flex-col items-center justify-center px-10 text-center">
          <div className="mb-8 text-8xl opacity-80">🚜</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No listings available</h2>
          <p className="text-gray-500 font-medium mb-10">
            {searchQuery ? 'No results found' : 'Add your first tractor to get started'}
          </p>
          <button className="bg-gradient-to-r from-[#1e7d4d] to-[#15a34a] text-white px-10 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 shadow-lg shadow-green-900/20 hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all">
            <Plus size={20} strokeWidth={3} />
            Add Tractor
          </button>
        </div>
      ) : (
        <div className="flex-grow px-5 py-4 space-y-3 overflow-y-auto pb-32">
          {filteredListings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-green-100 transition-all">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{listing.emoji}</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900">{listing.brand} {listing.model}</p>
                  <p className="text-sm text-gray-500">{listing.year} · {listing.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    listing.status === 'available'
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : 'bg-red-100 text-red-700 border border-red-300'
                  }`}>
                    {listing.status}
                  </span>
                  <ChevronRight size={18} className="text-gray-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 px-6 py-4 flex justify-between items-end shadow-2xl">
        {[
          { id: 'home', icon: Home, label: 'Home' },
          { id: 'listings', icon: ClipboardList, label: 'Listings' },
          { id: 'fab', icon: Plus, label: 'Add' },
          { id: 'reports', icon: BarChart2, label: 'Reports' },
          { id: 'settings', icon: Settings, label: 'Settings' },
        ].map((item) => (
          item.id === 'fab' ? (
            <div key={item.id} className="relative -mt-10">
              <button className="bg-gradient-to-br from-[#1e7d4d] to-[#15a34a] w-16 h-16 rounded-full flex items-center justify-center text-white shadow-xl shadow-green-900/30 border-4 border-white hover:shadow-2xl transform hover:scale-110 active:scale-95 transition-all">
                <Plus size={32} strokeWidth={2.5} />
              </button>
            </div>
          ) : (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 transition-all transform ${
                activeTab === item.id ? 'scale-110' : 'opacity-50 hover:opacity-75'
              }`}
            >
              {activeTab === item.id && <div className="w-8 h-1 bg-[#1e7d4d] rounded-full mb-1" />}
              <item.icon size={24} className={activeTab === item.id ? 'text-[#1e7d4d]' : 'text-gray-600'} />
              <span className={`text-[10px] font-bold ${activeTab === item.id ? 'text-[#1e7d4d]' : 'text-gray-600'}`}>
                {item.label}
              </span>
            </button>
          )
        ))}
      </div>
    </div>
  );

  // ======================== ITERATION 2 - MINIMAL CLEAN ========================
  const renderIteration2 = () => (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Status Bar */}
      <div className="bg-white px-4 py-2 flex justify-between items-center text-gray-900 text-xs font-bold border-b border-gray-200">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-300 rounded-sm border border-gray-400" />
          <span>92%</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-5 py-4 flex justify-between items-center border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">My Listings</h1>
        <span className="text-gray-600 text-sm font-medium">{filteredListings.length} tractors</span>
      </div>

      {/* Search and Filters Section */}
      <div className="bg-white px-5 py-4 border-b border-gray-200">
        <div className="relative flex items-center mb-4">
          <Search className="absolute left-4 text-gray-400" size={18} />
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search brand, model, year..."
            className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-gray-900 placeholder-gray-400"
          />
        </div>

        {/* Horizontal Scrollable Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-5 py-2 rounded-lg text-sm font-bold border transition-all ${
                activeFilter === filter
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      {filteredListings.length === 0 ? (
        <div className="flex-grow flex flex-col items-center justify-center px-10 text-center">
          <div className="mb-8 text-6xl opacity-60">🚜</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">No listings available</h2>
          <p className="text-gray-600 font-medium mb-10">
            {searchQuery ? 'No results found' : 'Add your first tractor to get started'}
          </p>
          <button className="bg-gray-900 text-white px-10 py-4 rounded-lg font-bold text-lg flex items-center gap-2 hover:bg-black transition-all">
            <Plus size={20} strokeWidth={3} />
            Add Tractor
          </button>
        </div>
      ) : (
        <div className="flex-grow px-5 py-4 space-y-3 overflow-y-auto pb-32">
          {filteredListings.map((listing) => (
            <div key={listing.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:bg-gray-100 transition-all">
              <div className="flex items-center gap-4">
                <div className="text-3xl">{listing.emoji}</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900">{listing.brand} {listing.model}</p>
                  <p className="text-sm text-gray-600">{listing.year} · {listing.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded text-xs font-bold ${
                    listing.status === 'available'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {listing.status}
                  </span>
                  <ChevronRight size={18} className="text-gray-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-between items-center">
        {[
          { id: 'home', icon: Home, label: 'Home' },
          { id: 'listings', icon: ClipboardList, label: 'Listings' },
          { id: 'fab', icon: Plus, label: 'Add' },
          { id: 'reports', icon: BarChart2, label: 'Reports' },
          { id: 'settings', icon: Settings, label: 'Settings' },
        ].map((item) => (
          item.id === 'fab' ? (
            <button key={item.id} className="bg-gray-900 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-black transition-all">
              <Plus size={24} />
            </button>
          ) : (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
                activeTab === item.id ? 'bg-gray-100 text-gray-900' : 'text-gray-600'
              }`}
            >
              <item.icon size={20} />
              <span className="text-[9px] font-bold">{item.label}</span>
            </button>
          )
        ))}
      </div>
    </div>
  );

  // ======================== ITERATION 3 - BOLD PREMIUM ========================
  const renderIteration3 = () => (
    <div className="min-h-screen bg-gradient-to-b from-[#1e7d4d] via-green-700 to-green-900 flex flex-col font-sans">
      {/* Status Bar */}
      <div className="bg-gradient-to-r from-[#1e7d4d] to-[#15a34a] px-4 py-2 flex justify-between items-center text-white text-xs font-bold shadow-lg">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-white/40 rounded-sm border border-white/60" />
          <span>92%</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white/10 backdrop-blur-lg px-5 py-5 flex justify-between items-center border-b border-white/20">
        <h1 className="text-2xl font-bold text-white">My Listings</h1>
        <span className="text-white/80 text-sm font-bold bg-white/10 px-4 py-1 rounded-full border border-white/20 backdrop-blur-sm">
          {filteredListings.length} tractors
        </span>
      </div>

      {/* Search and Filters Section */}
      <div className="bg-white/5 backdrop-blur-lg px-5 py-4 border-b border-white/10">
        <div className="relative flex items-center mb-4">
          <Search className="absolute left-4 text-green-100/60" size={18} />
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search brand, model, year..."
            className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635]"
          />
        </div>

        {/* Horizontal Scrollable Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold backdrop-blur-sm border transition-all ${
                activeFilter === filter
                  ? 'bg-[#a3e635] text-green-900 border-transparent shadow-lg'
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      {filteredListings.length === 0 ? (
        <div className="flex-grow flex flex-col items-center justify-center px-10 text-center">
          <div className="mb-8 text-8xl opacity-60">🚜</div>
          <h2 className="text-2xl font-bold text-white mb-2">No listings available</h2>
          <p className="text-green-100/70 font-medium mb-10">
            {searchQuery ? 'No results found' : 'Add your first tractor to get started'}
          </p>
          <button className="bg-gradient-to-r from-[#a3e635] to-cyan-400 text-green-900 px-10 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 shadow-xl shadow-green-900/40 hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all">
            <Plus size={20} strokeWidth={3} />
            Add Tractor
          </button>
        </div>
      ) : (
        <div className="flex-grow px-5 py-4 space-y-3 overflow-y-auto pb-32">
          {filteredListings.map((listing) => (
            <div key={listing.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 hover:bg-white/15 hover:border-[#a3e635]/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{listing.emoji}</div>
                <div className="flex-1">
                  <p className="font-bold text-white">{listing.brand} {listing.model}</p>
                  <p className="text-sm text-green-100/70">{listing.year} · {listing.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-4 py-1 rounded-full text-xs font-bold backdrop-blur-sm border ${
                    listing.status === 'available'
                      ? 'bg-green-400/20 text-green-100 border-green-400/50'
                      : 'bg-red-400/20 text-red-100 border-red-400/50'
                  }`}>
                    {listing.status}
                  </span>
                  <ChevronRight size={18} className="text-green-100/50" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1e7d4d]/95 backdrop-blur-xl border-t-2 border-white/20 px-6 py-4 flex justify-between items-end shadow-2xl">
        {[
          { id: 'home', icon: Home, label: 'Home' },
          { id: 'listings', icon: ClipboardList, label: 'Listings' },
          { id: 'fab', icon: Plus, label: 'Add' },
          { id: 'reports', icon: BarChart2, label: 'Reports' },
          { id: 'settings', icon: Settings, label: 'Settings' },
        ].map((item) => (
          item.id === 'fab' ? (
            <div key={item.id} className="relative -mt-12">
              <button className="bg-gradient-to-br from-[#a3e635] to-cyan-400 w-20 h-20 rounded-full flex items-center justify-center text-green-900 shadow-2xl border-4 border-[#1e7d4d] hover:scale-110 active:scale-95 transition-all font-bold">
                <Plus size={36} strokeWidth={2} />
              </button>
            </div>
          ) : (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-2 p-2 rounded-xl transition-all ${
                activeTab === item.id
                  ? 'bg-white/20 scale-110 text-white'
                  : 'opacity-60 hover:opacity-80 text-white'
              }`}
            >
              <item.icon size={24} />
              <span className="text-[9px] font-bold">{item.label}</span>
            </button>
          )
        ))}
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

export default MyListings;