import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faUserPlus,
  faBriefcase,
  faCalendarDay,
  faClock,
  faBell,
  faEnvelope,
  faTasks,
  faCalendar,
  faArrowUp,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';

const AdminDashboard = () => {
  const [notifications] = useState([
    { id: 1, type: 'message', title: 'New message from John Smith', time: '5 mins ago', unread: true },
    { id: 2, type: 'task', title: 'Contract review deadline approaching', time: '1 hour ago', unread: true },
    { id: 3, type: 'appointment', title: 'Client meeting scheduled', time: '2 hours ago', unread: false },
    { id: 4, type: 'case', title: 'Case status updated', time: '3 hours ago', unread: false },
  ]);

  const appointments = [
    { id: 1, time: '09:00', client: 'Sarah Johnson', type: 'Consultation', status: 'confirmed' },
    { id: 2, time: '11:30', client: 'Michael Brown', type: 'Contract Review', status: 'pending' },
    { id: 3, time: '14:00', client: 'Emma Davis', type: 'Court Preparation', status: 'confirmed' },
    { id: 4, time: '16:30', client: 'David Wilson', type: 'Settlement Discussion', status: 'confirmed' },
  ];

  const deadlines = [
    { id: 1, case: 'Smith vs. Johnson', task: 'File Motion to Dismiss', date: 'Today', priority: 'high' },
    { id: 2, case: 'Corporate Merger - ABC Corp', task: 'Due Diligence Report', date: 'Tomorrow', priority: 'high' },
    { id: 3, case: 'Estate Planning - Williams', task: 'Draft Will Amendment', date: '29 Jan', priority: 'medium' },
    { id: 4, case: 'Personal Injury - Martinez', task: 'Medical Records Review', date: '30 Jan', priority: 'low' },
  ];

  return (
    <div className="min-vh-100 bg-light">
      <h2 className=" fw-semibold mb-0 text-dark px-4 mt-1 py-2 ">Dashboard</h2>
      <div className="p-4">
        {/* Dashboard Widgets */}
        <div className="row g-3 g-md-4 mb-3 mb-md-4">
          {/* Total Clients */}
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card h-100 shadow-sm border-0 hover-shadow transition-all cursor-pointer">
              <div className="card-body p-3 p-sm-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 rounded p-2 me-3">
                    <FontAwesomeIcon icon={faUsers} className="text-primary fs-5" />
                  </div>
                  <h3 className="h5 mb-0 text-dark">Total Clients</h3>
                </div>
                <p className="display-6 fw-bold text-dark mb-2">1,247</p>
                <div className="d-flex align-items-center">
                  <span className="badge bg-success bg-opacity-10 text-success me-2">
                    <FontAwesomeIcon icon={faArrowUp} className="me-1" />
                    +12%
                  </span>
                  <span className="text-muted small">compared to last month</span>
                </div>
              </div>
            </div>
          </div>

          {/* New Enquiries */}
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card h-100 shadow-sm border-0 hover-shadow transition-all cursor-pointer">
              <div className="card-body p-3 p-sm-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-success bg-opacity-10 rounded p-2 me-3">
                    <FontAwesomeIcon icon={faUserPlus} className="text-success fs-5" />
                  </div>
                  <h3 className="h5 mb-0 text-dark">New Enquiries</h3>
                </div>
                <p className="display-6 fw-bold text-dark mb-2">89</p>
                <div className="d-flex align-items-center">
                  <span className="badge bg-success bg-opacity-10 text-success me-2">
                    <FontAwesomeIcon icon={faArrowUp} className="me-1" />
                    +24%
                  </span>
                  <span className="text-muted small">this month</span>
                </div>
              </div>
            </div>
          </div>

          {/* Active Cases */}
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card h-100 shadow-sm border-0 hover-shadow transition-all cursor-pointer">
              <div className="card-body p-3 p-sm-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-purple bg-opacity-10 rounded p-2 me-3">
                    <FontAwesomeIcon icon={faBriefcase} className="text-purple fs-5" />
                  </div>
                  <h3 className="h5 mb-0 text-dark">Active Cases</h3>
                </div>
                <p className="display-6 fw-bold text-dark mb-2">156</p>
                <div className="d-flex align-items-center">
                  <span className="badge bg-primary bg-opacity-10 text-primary me-2">
                    <FontAwesomeIcon icon={faMinus} className="me-1" />
                    -3%
                  </span>
                  <span className="text-muted small">compared to last month</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appointments & Deadlines */}
        <div className="row g-3 g-md-4 mb-3 mb-md-4">
          {/* Today's Appointments */}
          <div className="col-12 col-lg-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body p-3 p-sm-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-warning bg-opacity-10 rounded p-2 me-3">
                      <FontAwesomeIcon icon={faCalendarDay} className="text-warning" />
                    </div>
                    <h3 className="h5 mb-0 text-dark">Today's Appointments</h3>
                  </div>
                  <span className="badge bg-warning bg-opacity-10 text-warning">
                    {appointments.length} scheduled
                  </span>
                </div>
                <div className="list-group list-group-flush">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="list-group-item d-flex justify-content-between align-items-center py-3">
                      <div className="d-flex align-items-center">
                        <div className="fw-medium me-3" style={{ minWidth: '60px' }}>
                          {appointment.time}
                        </div>
                        <div>
                          <p className="mb-0 fw-medium">{appointment.client}</p>
                          <small className="text-muted">{appointment.type}</small>
                        </div>
                      </div>
                      <span className={`badge ${appointment.status === 'confirmed' ? 'bg-success bg-opacity-10 text-success' : 'bg-warning bg-opacity-10 text-warning'}`}>
                        {appointment.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Deadlines */}
          <div className="col-12 col-lg-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body p-3 p-sm-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-danger bg-opacity-10 rounded p-2 me-3">
                      <FontAwesomeIcon icon={faClock} className="text-danger" />
                    </div>
                    <h3 className="h5 mb-0 text-dark">Upcoming Deadlines</h3>
                  </div>
                  <span className="badge bg-danger bg-opacity-10 text-danger">
                    {deadlines.filter(d => d.priority === 'high').length} urgent
                  </span>
                </div>
                <div className="list-group list-group-flush">
                  {deadlines.map((deadline) => (
                    <div key={deadline.id} className="list-group-item d-flex justify-content-between align-items-center py-3">
                      <div>
                        <p className="mb-0 fw-medium">{deadline.case}</p>
                        <small className="text-muted d-block">{deadline.task}</small>
                        <small className="text-muted">{deadline.date}</small>
                      </div>
                      <span className={`badge ${
                        deadline.priority === 'high' ? 'bg-danger bg-opacity-10 text-danger' :
                        deadline.priority === 'medium' ? 'bg-warning bg-opacity-10 text-warning' :
                        'bg-success bg-opacity-10 text-success'
                      }`}>
                        {deadline.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Centre */}
        <div className="row">
          <div className="col-12">
            <div className="card shadow-sm border-0">
              <div className="card-body p-3 p-sm-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-info bg-opacity-10 rounded p-2 me-3">
                      <FontAwesomeIcon icon={faBell} className="text-info" />
                    </div>
                    <h3 className="h5 mb-0 text-dark">Notification Centre</h3>
                  </div>
                  <button className="btn btn-link text-primary fw-medium p-0">Mark all as read</button>
                </div>
                <div className="list-group list-group-flush">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`list-group-item d-flex justify-content-between align-items-center py-3 ${notification.unread ? ' bg-opacity-10' : ''}`}
                    >
                      <div className="d-flex align-items-center">
                        <div className={`rounded-circle p-2 me-3 ${
                          notification.type === 'message' ? 'bg-primary bg-opacity-10 text-primary' :
                          notification.type === 'task' ? 'bg-warning bg-opacity-10 text-warning' :
                          notification.type === 'appointment' ? 'bg-success bg-opacity-10 text-success' :
                          'bg-purple bg-opacity-10 text-purple'
                        }`}>
                          <FontAwesomeIcon icon={
                            notification.type === 'message' ? faEnvelope :
                            notification.type === 'task' ? faTasks :
                            notification.type === 'appointment' ? faCalendar :
                            faBriefcase
                          } size="sm" />
                        </div>
                        <div>
                          <p className={`mb-0 ${notification.unread ? 'fw-medium' : ''}`}>{notification.title}</p>
                          <small className="text-muted">{notification.time}</small>
                        </div>
                      </div>
                      {notification.unread && (
                        <span className="badge bg-primary rounded-circle p-2 ms-2"></span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
