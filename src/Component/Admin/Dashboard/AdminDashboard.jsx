import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  faMinus 
} from '@fortawesome/free-solid-svg-icons';

const AdminDashboard = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'message', title: 'New message from John Smith', time: '5 min ago', unread: true },
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
    { id: 3, case: 'Estate Planning - Williams', task: 'Draft Will Amendment', date: 'Jan 29', priority: 'medium' },
    { id: 4, case: 'Personal Injury - Martinez', task: 'Medical Records Review', date: 'Jan 30', priority: 'low' },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
   <div className="min-vh-100 bg-light">
  {/* Main Content */}
  <div className="container-fluid px-3 px-sm-4 py-3 py-sm-4">
    {/* Dashboard Grid - Widgets Row */}
    <div className="row g-3 g-md-4 mb-3 mb-md-4">
      {/* Total Clients Widget */}
      <div className="col-12 col-sm-6 col-md-4 mb-3 mb-md-0">
        <div className="card h-100 shadow-sm border-0 hover-shadow transition-all cursor-pointer">
          <div className="card-body p-3 p-sm-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center">
                <div className="bg-primary bg-opacity-10 rounded p-2 me-3">
                  <FontAwesomeIcon icon={faUsers} className="text-primary fs-5" />
                </div>
                <h3 className="h5 mb-0 text-dark">Total Clients</h3>
              </div>
            </div>
            <div className="mb-2">
              <p className="display-6 fw-bold text-dark">1,247</p>
            </div>
            <div className="d-flex align-items-center flex-wrap">
              <span className="badge bg-success bg-opacity-10 text-success me-2 mb-1 mb-sm-0">
                <FontAwesomeIcon icon={faArrowUp} className="me-1" />
                +12%
              </span>
              <span className="text-muted small">vs last month</span>
            </div>
          </div>
        </div>
      </div>

      {/* New Leads Widget */}
      <div className="col-12 col-sm-6 col-md-4 mb-3 mb-md-0">
        <div className="card h-100 shadow-sm border-0 hover-shadow transition-all cursor-pointer">
          <div className="card-body p-3 p-sm-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center">
                <div className="bg-success bg-opacity-10 rounded p-2 me-3">
                  <FontAwesomeIcon icon={faUserPlus} className="text-success fs-5" />
                </div>
                <h3 className="h5 mb-0 text-dark">New Leads</h3>
              </div>
            </div>
            <div className="mb-2">
              <p className="display-6 fw-bold text-dark">89</p>
            </div>
            <div className="d-flex align-items-center flex-wrap">
              <span className="badge bg-success bg-opacity-10 text-success me-2 mb-1 mb-sm-0">
                <FontAwesomeIcon icon={faArrowUp} className="me-1" />
                +24%
              </span>
              <span className="text-muted small">this month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Active Cases Widget */}
      <div className="col-12 col-sm-6 col-md-4">
        <div className="card h-100 shadow-sm border-0 hover-shadow transition-all cursor-pointer">
          <div className="card-body p-3 p-sm-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center">
                <div className="bg-purple bg-opacity-10 rounded p-2 me-3">
                  <FontAwesomeIcon icon={faBriefcase} className="text-purple fs-5" />
                </div>
                <h3 className="h5 mb-0 text-dark">Active Cases</h3>
              </div>
            </div>
            <div className="mb-2">
              <p className="display-6 fw-bold text-dark">156</p>
            </div>
            <div className="d-flex align-items-center flex-wrap">
              <span className="badge bg-primary bg-opacity-10 text-primary me-2 mb-1 mb-sm-0">
                <FontAwesomeIcon icon={faMinus} className="me-1" />
                -3%
              </span>
              <span className="text-muted small">vs last month</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Second Row - Appointments and Deadlines */}
    <div className="row g-3 g-md-4 mb-3 mb-md-4">
      {/* Appointments Today */}
      <div className="col-12 col-lg-6">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body p-3 p-sm-4">
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mb-3 mb-sm-4">
              <div className="d-flex align-items-center mb-2 mb-sm-0">
                <div className="bg-warning bg-opacity-10 rounded p-2 me-3">
                  <FontAwesomeIcon icon={faCalendarDay} className="text-warning" />
                </div>
                <h3 className="h5 mb-0 text-dark">Appointments Today</h3>
              </div>
              <span className="badge bg-warning bg-opacity-10 text-warning">
                {appointments.length} scheduled
              </span>
            </div>
            <div className="list-group list-group-flush">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="list-group-item list-group-item-action d-flex flex-column flex-sm-row justify-content-between align-items-sm-center py-3">
                  <div className="d-flex align-items-center mb-2 mb-sm-0">
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

      {/* Upcoming Deadlines */}
      <div className="col-12 col-lg-6">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body p-3 p-sm-4">
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mb-3 mb-sm-4">
              <div className="d-flex align-items-center mb-2 mb-sm-0">
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
                <div key={deadline.id} className="list-group-item list-group-item-action d-flex flex-column flex-sm-row justify-content-between align-items-sm-center py-3">
                  <div className="flex-grow-1 mb-2 mb-sm-0">
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
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mb-3 mb-sm-4">
              <div className="d-flex align-items-center mb-2 mb-sm-0">
                <div className="bg-info bg-opacity-10 rounded p-2 me-3">
                  <FontAwesomeIcon icon={faBell} className="text-info" />
                </div>
                <h3 className="h5 mb-0 text-dark">Notification Centre</h3>
              </div>
              <button className="btn btn-link text-primary p-0 text-decoration-none fw-medium">
                Mark all as read
              </button>
            </div>
            <div className="list-group list-group-flush">
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`list-group-item list-group-item-action d-flex flex-column flex-sm-row justify-content-between align-items-sm-center py-3 ${
                    notification.unread ? 'border-start border-primary border-3 bg-primary bg-opacity-10' : ''
                  }`}
                >
                  <div className="d-flex align-items-center mb-2 mb-sm-0">
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
                      <p className={`mb-0 ${notification.unread ? 'fw-medium' : ''}`}>
                        {notification.title}
                      </p>
                      <small className="text-muted">{notification.time}</small>
                    </div>
                  </div>
                  {notification.unread && (
                    <span className="badge bg-primary rounded-circle p-1 align-self-sm-center"></span>
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