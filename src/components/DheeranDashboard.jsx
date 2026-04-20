import React, { useState, useEffect } from 'react';
import { Home, ClipboardList, BarChart2, Settings, Plus, ArrowRight, TrendingUp, Calendar, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  const [iteration, setIteration] = useState(1);
  const [stats, setStats] = useState([
    { label: 'Total', value: '24', change: '+2' },
    { label: 'Available', value: '18', change: '+1' },
    { label: 'Sold', value: '6', change: '+1' },
  ]);
  const [activeTab, setActiveTab] = useState('home');
  const [listings, setListings] = useState([
    { id: 1, brand: 'Mahindra', model: 'Arjun 555', year: 2019, price: '₹4.8L', status: 'available', emoji: '🚜' },
    { id: 2, brand: 'Sonalika', model: 'DI 60', year: 2020, price: '₹3.5L', status: 'available', emoji: '🚜' },
    { id: 3, brand: 'TAFE', model: 'TT 35', year: 2018, price: '₹2.8L', status: 'sold', emoji: '🚜' },
  ]);
  const [commission, setCommission] = useState({ total: '₹1,25,000', sold: '₹50,000' });

  // ======================== ITERATION 1 - ELEGANT MODERN ========================
  const renderIteration1 = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex flex-col font-sans pb-24">
      
      {/* Decorative Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full opacity-10 blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-50 rounded-full opacity-10 blur-3xl -ml-48 -mb-48"></div>
      </div>

      {/* Green Header Section */}
      <div className="bg-gradient-to-br from-[#1e7d4d] to-[#165e3a] px-6 pt-12 pb-8 rounded-b-[40px] relative z-10 shadow-xl">
        
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-green-100/80 text-sm font-medium">Good morning,</p>
            <h1 className="text-white text-3xl font-bold flex items-center gap-2 mt-1">
              Rajan Kumar <span className="text-3xl">👋</span>
            </h1>
          </div>
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#a3e635] to-[#84cc16] flex items-center justify-center text-white font-bold shadow-lg transform hover:scale-110 transition-transform">
            RK
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center hover:bg-white/15 transition-all">
              <div className="text-white text-3xl font-bold">{stat.value}</div>
              <div className="text-green-100/70 text-xs mt-2">{stat.label}</div>
              <div className="text-green-200/80 text-xs mt-1 font-semibold">{stat.change}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Commission Card */}
      <div className="px-6 -mt-6 relative z-20 mb-8">
        <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl p-6 shadow-lg border border-green-100 flex items-start gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0 shadow-md">
            💰
          </div>
          <div className="flex-1">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Total Commission Earned</p>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">{commission.total}</h2>
            <div className="flex gap-2 mt-3">
              <span className="inline-block px-3 py-1 bg-green-100 text-[#1e7d4d] text-xs font-bold rounded-full border border-green-300 flex items-center gap-1">
                <TrendingUp size={12} /> +{commission.sold} from sold
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Listings Section */}
      <div className="px-6 relative z-10">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-gray-900 font-bold text-xl">Recent Listings</h3>
          <button className="text-[#1e7d4d] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
            See all <ArrowRight size={16} strokeWidth={3} />
          </button>
        </div>

        {listings.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 bg-white rounded-2xl">
            <p className="text-gray-400 font-medium">No listings yet</p>
          </div>
        ) : (
          <div className="space-y-3">
            {listings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-green-100 transition-all">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{listing.emoji}</div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">{listing.brand} {listing.model}</p>
                    <p className="text-sm text-gray-500">{listing.year} · {listing.price}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    listing.status === 'available' 
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : 'bg-red-100 text-red-700 border border-red-300'
                  }`}>
                    {listing.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 px-6 py-4 flex justify-between items-center shadow-2xl">
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
    <div className="min-h-screen bg-white flex flex-col font-sans pb-24">
      
      {/* Simple Header */}
      <div className="bg-white px-6 pt-8 pb-6 border-b border-gray-200">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-gray-600 text-sm">Good morning</p>
            <h1 className="text-gray-900 text-2xl font-bold">Rajan Kumar</h1>
          </div>
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-900 font-bold">
            RK
          </div>
        </div>

        {/* Simple Stats */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Commission Card - Simple */}
      <div className="px-6 py-6">
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
          <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Commission Earned</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">{commission.total}</h2>
          <p className="text-sm text-gray-600 mt-2">+{commission.sold} from sold</p>
        </div>
      </div>

      {/* Recent Listings - Minimal */}
      <div className="px-6">
        <h3 className="text-gray-900 font-bold mb-4">Recent Listings</h3>
        {listings.length === 0 ? (
          <p className="text-gray-400 text-center py-8">No listings yet</p>
        ) : (
          <div className="space-y-3">
            {listings.map((listing) => (
              <div key={listing.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-2xl">{listing.emoji}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 truncate">{listing.brand} {listing.model}</p>
                  <p className="text-xs text-gray-600">{listing.year} · {listing.price}</p>
                </div>
                <span className="text-xs font-bold px-2 py-1 rounded bg-green-100 text-green-700">
                  {listing.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation - Clean */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 flex justify-between items-center">
        {[
          { id: 'home', icon: Home, label: 'Home' },
          { id: 'listings', icon: ClipboardList, label: 'Listings' },
          { id: 'fab', icon: Plus, label: 'Add' },
          { id: 'reports', icon: BarChart2, label: 'Reports' },
          { id: 'settings', icon: Settings, label: 'Settings' },
        ].map((item) => (
          item.id === 'fab' ? (
            <button key={item.id} className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center text-white">
              <Plus size={24} />
            </button>
          ) : (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
                activeTab === item.id ? 'bg-green-50 text-green-600' : 'text-gray-600'
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
    <div className="min-h-screen bg-gradient-to-b from-[#1e7d4d] via-green-700 to-green-900 flex flex-col font-sans pb-24">
      
      {/* Premium Header */}
      <div className="px-6 pt-8 pb-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-green-100 text-sm font-semibold">Welcome Back</p>
            <h1 className="text-white text-3xl font-bold mt-1">Rajan Kumar</h1>
          </div>
          <div className="w-16 h-16 rounded-full bg-[#a3e635] flex items-center justify-center text-green-900 font-bold text-xl shadow-xl">
            RK
          </div>
        </div>

        {/* Premium Stats */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center hover:bg-white/15 transition-all">
              <div className="text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-green-100 text-xs mt-2 font-semibold">{stat.label}</div>
              <div className="text-[#a3e635] text-xs mt-1">{stat.change}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Commission Card - Premium */}
      <div className="px-6 py-6">
        <div className="bg-gradient-to-br from-[#a3e635] to-[#84cc16] rounded-3xl p-8 shadow-2xl border border-yellow-400">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-green-900/70 text-sm font-bold uppercase tracking-wider">Total Commission</p>
              <h2 className="text-5xl font-black text-green-900 mt-3">{commission.total}</h2>
            </div>
            <div className="text-5xl">💰</div>
          </div>
          <div className="border-t border-green-900/20 pt-4 mt-4">
            <p className="text-green-900 font-bold text-sm">📈 {commission.sold} from sold items</p>
          </div>
        </div>
      </div>

      {/* Recent Listings - Premium */}
      <div className="px-6 pb-6">
        <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
          <Calendar size={20} /> Recent Listings
        </h3>
        {listings.length === 0 ? (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center">
            <p className="text-white/70 font-medium">No listings yet</p>
            <p className="text-white/50 text-sm mt-2">Create your first listing to get started</p>
          </div>
        ) : (
          <div className="space-y-4">
            {listings.map((listing) => (
              <div key={listing.id} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{listing.emoji}</div>
                  <div className="flex-1">
                    <p className="font-bold text-white text-lg">{listing.brand} {listing.model}</p>
                    <p className="text-white/70 text-sm mt-1">{listing.year} • {listing.price}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-xl font-bold text-sm ${
                    listing.status === 'available'
                      ? 'bg-green-400/20 text-green-100 border border-green-400/50'
                      : 'bg-red-400/20 text-red-100 border border-red-400/50'
                  }`}>
                    {listing.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation - Premium */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1e7d4d]/95 backdrop-blur-xl border-t-2 border-white/20 px-4 py-4 flex justify-between items-center shadow-2xl">
        {[
          { id: 'home', icon: Home, label: 'Home' },
          { id: 'listings', icon: ClipboardList, label: 'Listings' },
          { id: 'fab', icon: Plus, label: 'Add' },
          { id: 'reports', icon: BarChart2, label: 'Reports' },
          { id: 'settings', icon: Settings, label: 'Settings' },
        ].map((item) => (
          item.id === 'fab' ? (
            <div key={item.id} className="relative -mt-12">
              <button className="bg-gradient-to-br from-[#a3e635] to-[#84cc16] w-20 h-20 rounded-full flex items-center justify-center text-green-900 shadow-2xl border-4 border-[#1e7d4d] hover:scale-110 active:scale-95 transition-all font-bold">
                <Plus size={36} strokeWidth={2} />
              </button>
            </div>
          ) : (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-2 p-2 rounded-xl transition-all ${
                activeTab === item.id
                  ? 'bg-white/20 scale-110'
                  : 'opacity-60 hover:opacity-80'
              }`}
            >
              <item.icon size={24} className="text-white" />
              <span className="text-[9px] font-bold text-white">{item.label}</span>
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

export default Dashboard;