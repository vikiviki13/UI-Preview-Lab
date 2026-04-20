import React from 'react'

const Dashboard = () => {
  const stats = [
    { label: 'Total Users', value: '24,532', change: '+12%', positive: true },
    { label: 'Revenue', value: '$89,432', change: '+8%', positive: true },
    { label: 'Active Sessions', value: '1,234', change: '-3%', positive: false },
    { label: 'Conversion', value: '3.2%', change: '+0.5%', positive: true },
  ]

  const recentActivity = [
    { user: 'John Doe', action: 'Completed purchase', time: '2 min ago', avatar: 'JD' },
    { user: 'Sarah Smith', action: 'Updated profile', time: '5 min ago', avatar: 'SS' },
    { user: 'Mike Johnson', action: 'Created account', time: '12 min ago', avatar: 'MJ' },
    { user: 'Emily Brown', action: 'Submitted ticket', time: '18 min ago', avatar: 'EB' },
  ]

  return (
    <div className="bg-gray-50 p-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">Welcome back! Here's your overview</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <p className="text-sm text-gray-500 mb-2 font-medium">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</p>
              <span
                className={`text-sm font-medium ${
                  stat.positive ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.positive ? '↑' : '↓'} {stat.change}
              </span>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                    {activity.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">
                      {activity.user}
                    </p>
                    <p className="text-sm text-gray-500 truncate">{activity.action}</p>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-blue-50 rounded-lg text-blue-700 font-medium hover:bg-blue-100 transition-colors active:scale-95">
                <span className="block text-lg mb-1">📁</span>
                New Project
              </button>
              <button className="p-4 bg-green-50 rounded-lg text-green-700 font-medium hover:bg-green-100 transition-colors active:scale-95">
                <span className="block text-lg mb-1">👤</span>
                Add User
              </button>
              <button className="p-4 bg-purple-50 rounded-lg text-purple-700 font-medium hover:bg-purple-100 transition-colors active:scale-95">
                <span className="block text-lg mb-1">📊</span>
                Reports
              </button>
              <button className="p-4 bg-orange-50 rounded-lg text-orange-700 font-medium hover:bg-orange-100 transition-colors active:scale-95">
                <span className="block text-lg mb-1">⚙️</span>
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard