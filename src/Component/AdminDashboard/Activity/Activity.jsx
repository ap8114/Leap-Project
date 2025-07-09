import React, { useState } from 'react';

const Activity = () => {
    const [viewMode, setViewMode] = useState('timeline');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedModule, setSelectedModule] = useState('all');
    const [dateRange, setDateRange] = useState({ start: '', end: '' });

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
            case 'matters': return 'bg-primary bg-opacity-10 text-primary';
            case 'clients': return 'bg-success bg-opacity-10 text-success';
            case 'billing': return 'bg-danger bg-opacity-10 text-danger';
            default: return 'bg-secondary bg-opacity-10 text-secondary';
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
        <div className="min-vh-100 bg-light">
            <div className="container p-3">
                {/* Page Header */}
                <div className="">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
                        <h1 className="h2 mb-3 mb-md-0 text-[#2c3e50]">Activity Log</h1>
                        <div className="d-flex gap-2">
                            <button className="btn btn-outline-secondary">
                                <i className="fas fa-file-pdf text-danger me-2"></i>
                                Export PDF
                            </button>
                            <button className="btn btn-outline-secondary">
                                <i className="fas fa-file-excel text-success me-2"></i>
                                Export Excel
                            </button>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control focus:ring-[#2c3e50] focus:border-[#2c3e50]"
                            placeholder="Search activities..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* View Toggle & Filters */}
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="d-flex flex-wrap align-items-center gap-3">
                            {/* View Toggle */}
                            <div className="d-flex align-items-center">
                                <span className="me-2 text-[#2c3e50]">View:</span>
                                <div className="btn-group" role="group">
                                    <button
                                        onClick={() => setViewMode('timeline')}
                                        className={`btn ${viewMode === 'timeline' ? 'btn-custom' : 'btn-outline-custom'}`}
                                    >
                                        <i className="fas fa-timeline me-2"></i>
                                        Timeline
                                    </button>
                                    <button
                                        onClick={() => setViewMode('table')}
                                        className={`btn ${viewMode === 'table' ? 'btn-custom' : 'btn-outline-custom'}`}
                                    >
                                        <i className="fas fa-table me-2"></i>
                                        Table
                                    </button>
                                </div>

                            </div>

                            {/* Module Filter */}
                            <div className="d-flex align-items-center">
                                <button
                                    className="btn btn-outline-dark dropdown-toggle"
                                    type="button"
                                    id="moduleDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {modules.find(m => m.value === selectedModule)?.label}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="moduleDropdown">
                                    {modules.map((module) => (
                                        <li key={module.value}>
                                            <button
                                                className="dropdown-item text-[#2c3e50]"
                                                onClick={() => setSelectedModule(module.value)}
                                            >
                                                {module.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Date Range */}
                            <div className="w-100">
                                <label className="form-label mb-1 text-[#2c3e50]">Date Range:</label>
                                <div className="row g-2">
                                    <div className="col-md-5">
                                        <input
                                            type="date"
                                            className="form-control form-control-sm focus:ring-[#2c3e50] focus:border-[#2c3e50]"
                                            value={dateRange.start}
                                            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-auto d-flex align-items-center justify-content-center">
                                        <span className="text-[#2c3e50]">to</span>
                                    </div>
                                    <div className="col-md-5">
                                        <input
                                            type="date"
                                            className="form-control form-control-sm focus:ring-[#2c3e50] focus:border-[#2c3e50]"
                                            value={dateRange.end}
                                            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                {viewMode === 'timeline' ? (
                    /* Timeline View */
                    <div className="mb-5">
                        {Object.entries(groupedActivities).map(([date, dateActivities]) => (
                            <div key={date} className="mb-4">
                                {/* Date Header */}
                                <div className="d-flex align-items-center mb-3">
                                    <span className="badge bg-[#2c3e50] text-white p-2">
                                        {formatDate(date)}
                                    </span>
                                    <div className="flex-grow-1 border-top ms-3"></div>
                                </div>

                                {/* Timeline Activities */}
                                <div className="position-relative ps-4">
                                    <div className="position-absolute top-0 bottom-0 start-0 border-start h-100"></div>
                                    <div className="d-flex flex-column gap-3">
                                        {dateActivities.map((activity) => (
                                            <div key={activity.id} className="position-relative">
                                                <div className="position-absolute top-4 start-n4 bg-[#2c3e50] rounded-circle border border-2 border-white" style={{ width: '12px', height: '12px' }}></div>
                                                <div className="card hover-shadow">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex gap-3">
                                                                <div className="bg-[#2c3e50] text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                                                    {activity.user.avatar}
                                                                </div>
                                                                <div>
                                                                    <div className="d-flex align-items-center gap-2 mb-2">
                                                                        <h5 className="mb-0 text-[#2c3e50]">{activity.user.name}</h5>
                                                                        <span className={`badge ${getModuleColor(activity.module)}`}>
                                                                            {activity.module.charAt(0).toUpperCase() + activity.module.slice(1)}
                                                                        </span>
                                                                    </div>
                                                                    <p className="mb-2">{activity.action}</p>
                                                                    <small className="text-muted">{formatTime(activity.timestamp)}</small>
                                                                </div>
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
                    <div className="card mb-4">
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th className="text-[#2c3e50]">User</th>
                                        <th className="text-[#2c3e50]">Action</th>
                                        <th className="text-[#2c3e50]">Module</th>
                                        <th className="text-[#2c3e50]">Date & Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activities.map((activity) => (
                                        <tr key={activity.id}>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="bg-[#2c3e50] text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                                                        {activity.user.avatar}
                                                    </div>
                                                    <span className="text-[#2c3e50]">{activity.user.name}</span>
                                                </div>
                                            </td>
                                            <td>{activity.action}</td>
                                            <td>
                                                <span className={`badge ${getModuleColor(activity.module)}`}>
                                                    {activity.module.charAt(0).toUpperCase() + activity.module.slice(1)}
                                                </span>
                                            </td>
                                            <td>
                                                <div>
                                                    <div className="text-[#2c3e50]">{formatDate(activity.date)}</div>
                                                    <small className="text-muted">{formatTime(activity.timestamp)}</small>
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
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div className="mb-2 mb-md-0 text-[#2c3e50]">
                        Showing 1 to 6 of 6 results
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-[#2c3e50] text-[#2c3e50]" disabled>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button className="btn bg-[#2c3e50] text-white">1</button>
                        <button className="btn btn-outline-[#2c3e50] text-[#2c3e50]" disabled>
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;