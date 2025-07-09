// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';

const Activity = () => {
  const [viewMode, setViewMode] = useState('timeline');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState('all');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [showModuleDropdown, setShowModuleDropdown] = useState(false);

  const modules = [
    { value: 'all', label: 'All Modules' },
    { value: 'matters', label: 'Matters' },
    { value: 'clients', label: 'Clients' },
    { value: 'billing', label: 'Billing' }
  ];

  const activities = [
    {
      id: 1,
      user: { name: 'Sarah Johnson', avatar: 'SJ' },
      action: 'Created new matter for Johnson vs. Smith case',
      module: 'matters',
      timestamp: '2025-01-09 14:30:00',
      date: '2025-01-09'
    },
    {
      id: 2,
      user: { name: 'Michael Chen', avatar: 'MC' },
      action: 'Updated client contact information',
      module: 'clients',
      timestamp: '2025-01-09 13:45:00',
      date: '2025-01-09'
    },
    {
      id: 3,
      user: { name: 'Emily Rodriguez', avatar: 'ER' },
      action: 'Generated invoice #INV-2025-001',
      module: 'billing',
      timestamp: '2025-01-09 12:15:00',
      date: '2025-01-09'
    },
    {
      id: 4,
      user: { name: 'David Wilson', avatar: 'DW' },
      action: 'Added new document to case file',
      module: 'matters',
      timestamp: '2025-01-08 16:20:00',
      date: '2025-01-08'
    },
    {
      id: 5,
      user: { name: 'Lisa Thompson', avatar: 'LT' },
      action: 'Processed payment for client account',
      module: 'billing',
      timestamp: '2025-01-08 15:10:00',
      date: '2025-01-08'
    },
    {
      id: 6,
      user: { name: 'Robert Kim', avatar: 'RK' },
      action: 'Created new client profile',
      module: 'clients',
      timestamp: '2025-01-08 11:30:00',
      date: '2025-01-08'
    }
  ];

  const getModuleColor = (module) => {
    switch (module) {
      case 'matters': return 'bg-blue-100 text-blue-800';
      case 'clients': return 'bg-green-100 text-green-800';
      case 'billing': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const groupActivitiesByDate = (activities) => {
    const grouped = {};
    activities.forEach(activity => {
      if (!grouped[activity.date]) {
        grouped[activity.date] = [];
      }
      grouped[activity.date].push(activity);
    });
    return grouped;
  };

  const groupedActivities = groupActivitiesByDate(activities);

  return (
    <div className="bg-gray-50">
      <div className="mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Activity Log</h1>
            <div className="flex gap-3">
              <button className="!rounded-button whitespace-nowrap cursor-pointer px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                <i className="fas fa-file-pdf text-red-500"></i>
                Export PDF
              </button>
              <button className="!rounded-button whitespace-nowrap cursor-pointer px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                <i className="fas fa-file-excel text-green-500"></i>
                Export Excel
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search activities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>

        {/* View Toggle & Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-wrap items-center gap-6">
            {/* View Toggle */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">View:</span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('timeline')}
                  className={`!rounded-button whitespace-nowrap cursor-pointer px-4 py-2 text-sm font-medium transition-colors ${
                    viewMode === 'timeline' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <i className="fas fa-timeline mr-2"></i>
                  Timeline
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`!rounded-button whitespace-nowrap cursor-pointer px-4 py-2 text-sm font-medium transition-colors ${
                    viewMode === 'table' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <i className="fas fa-table mr-2"></i>
                  Table
                </button>
              </div>
            </div>

            {/* Module Filter */}
            <div className="relative">
              <label className="text-sm font-medium text-gray-700 mr-3">Module:</label>
              <button
                onClick={() => setShowModuleDropdown(!showModuleDropdown)}
                className="!rounded-button whitespace-nowrap cursor-pointer px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2 min-w-40"
              >
                {modules.find(m => m.value === selectedModule)?.label}
                <i className={`fas fa-chevron-down transition-transform ${showModuleDropdown ? 'rotate-180' : ''}`}></i>
              </button>
              {showModuleDropdown && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  {modules.map((module) => (
                    <button
                      key={module.value}
                      onClick={() => {
                        setSelectedModule(module.value);
                        setShowModuleDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 cursor-pointer first:rounded-t-lg last:rounded-b-lg"
                    >
                      {module.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Date Range */}
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-700">Date Range:</label>
              <input
                type="date"
                value={dateRange.start}
                onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <span className="text-gray-500">to</span>
              <input
                type="date"
                value={dateRange.end}
                onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Content Area */}
        {viewMode === 'timeline' ? (
          /* Timeline View */
          <div className="space-y-8">
            {Object.entries(groupedActivities).map(([date, dateActivities]) => (
              <div key={date} className="relative">
                {/* Date Header */}
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
                    {formatDate(date)}
                  </div>
                  <div className="flex-1 h-px bg-gray-300 ml-4"></div>
                </div>

                {/* Timeline Activities */}
                <div className="relative pl-8">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                  <div className="space-y-6">
                    {dateActivities.map((activity, index) => (
                      <div key={activity.id} className="relative">
                        <div className="absolute -left-6 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow"></div>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-4 flex-1">
                              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                                {activity.user.avatar}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className="font-medium text-gray-900">{activity.user.name}</h3>
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getModuleColor(activity.module)}`}>
                                    {activity.module.charAt(0).toUpperCase() + activity.module.slice(1)}
                                  </span>
                                </div>
                                <p className="text-gray-700 mb-2">{activity.action}</p>
                                <p className="text-sm text-gray-500">{formatTime(activity.timestamp)}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Table View */
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">User</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Action</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Module</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Date & Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {activities.map((activity, index) => (
                    <tr key={activity.id} className={`hover:bg-gray-50 cursor-pointer ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                            {activity.user.avatar}
                          </div>
                          <span className="font-medium text-gray-900">{activity.user.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{activity.action}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getModuleColor(activity.module)}`}>
                          {activity.module.charAt(0).toUpperCase() + activity.module.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        <div>
                          <div className="font-medium">{formatDate(activity.date)}</div>
                          <div className="text-sm text-gray-500">{formatTime(activity.timestamp)}</div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing 1 to 6 of 6 results
          </div>
          <div className="flex items-center gap-2">
            <button className="!rounded-button whitespace-nowrap cursor-pointer px-3 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="!rounded-button whitespace-nowrap cursor-pointer px-3 py-2 bg-blue-600 text-white">
              1
            </button>
            <button className="!rounded-button whitespace-nowrap cursor-pointer px-3 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;