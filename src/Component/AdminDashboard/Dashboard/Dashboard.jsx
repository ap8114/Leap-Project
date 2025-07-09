import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBriefcase, 
  faClock, 
  faCheckCircle, 
  faExclamationTriangle,
  faGavel,
  faUsers,
  faFileAlt,
  faHandshake,
  faSearch,
  faCalendar
} from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [tasks] = useState([
    { id: 1, name: 'Review Johnson vs. Smith case documents', priority: 'high', time: '09:00 AM', status: 'pending' },
    { id: 2, name: 'Prepare deposition questions for Martinez case', priority: 'medium', time: '11:30 AM', status: 'in-progress' },
    { id: 3, name: 'Client meeting - Thompson divorce settlement', priority: 'high', time: '02:00 PM', status: 'pending' },
    { id: 4, name: 'File motion for summary judgment', priority: 'low', time: '04:30 PM', status: 'pending' },
    { id: 5, name: 'Review contract amendments for Davis Corp', priority: 'medium', time: '05:15 PM', status: 'pending' }
  ]);

  const [events] = useState([
    {
      date: 'Today, Dec 8',
      items: [
        { title: 'Court Hearing - Wilson vs. State', time: '10:00 AM', description: 'Criminal defense hearing', type: 'court' },
        { title: 'Client Consultation', time: '03:00 PM', description: 'Initial consultation with new client', type: 'meeting' }
      ]
    },
    {
      date: 'Tomorrow, Dec 9',
      items: [
        { title: 'Deposition - Anderson Case', time: '09:30 AM', description: 'Witness deposition session', type: 'deposition' },
        { title: 'Team Meeting', time: '02:00 PM', description: 'Weekly case review meeting', type: 'meeting' }
      ]
    },
    {
      date: 'Dec 10, Friday',
      items: [
        { title: 'Settlement Conference', time: '11:00 AM', description: 'Mediation for Parker vs. LLC', type: 'conference' },
        { title: 'Document Review', time: '04:00 PM', description: 'Review discovery materials', type: 'review' }
      ]
    }
  ]);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-danger';
      case 'medium': return 'bg-warning';
      case 'low': return 'bg-success';
      default: return 'bg-secondary';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'pending': return 'bg-warning text-white';
      case 'in-progress': return 'bg-primary text-white';
      case 'completed': return 'bg-success text-white';
      default: return 'bg-secondary text-white';
    }
  };

  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'court': return faGavel;
      case 'meeting': return faUsers;
      case 'deposition': return faFileAlt;
      case 'conference': return faHandshake;
      case 'review': return faSearch;
      default: return faCalendar;
    }
  };

  return (
    <div className="container-fluid p-4 bg-light ">
      {/* Page Header */}
      <div className="mb-5">
        <h1 className="display-6 fw-bold mb-2">Dashboard</h1>
        <p>Welcome back! Here's what's happening with your cases today.</p>
      </div>

      {/* Overview of Cases Section */}
      <div className="mb-5">
        <h3 className="fw-semibold mb-4">Case Overview</h3>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">Total Active Cases</p>
                    <h3 className="mb-0">24</h3>
                  </div>
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle">
                    <FontAwesomeIcon icon={faBriefcase} className="text-primary" size="lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">Cases in Progress</p>
                    <h3 className="mb-0">18</h3>
                  </div>
                  <div className="bg-warning bg-opacity-10 p-3 rounded-circle">
                    <FontAwesomeIcon icon={faClock} className="text-warning" size="lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">Completed Cases</p>
                    <h3 className="mb-0">142</h3>
                  </div>
                  <div className="bg-success bg-opacity-10 p-3 rounded-circle">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-success" size="lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">Urgent Cases</p>
                    <h3 className="mb-0">6</h3>
                  </div>
                  <div className="bg-danger bg-opacity-10 p-3 rounded-circle">
                    <FontAwesomeIcon icon={faExclamationTriangle} className="text-danger" size="lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tasks Due Today Section */}
      <div className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h3 mb-0 fw-semibold">Tasks Due Today</h2>
          <button className="btn btn-link text-decoration-none p-0">
            View All Tasks
          </button>
        </div>
        <div className="card">
          <div className="list-group list-group-flush">
            {tasks.map((task) => (
              <div key={task.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3 flex-grow-1">
                    <span className={`rounded-circle ${getPriorityColor(task.priority)}`} style={{width: '12px', height: '12px'}}></span>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">{task.name}</h6>
                      <small className="text-muted">Due at {task.time}</small>
                    </div>
                  </div>
                  <span className={`badge ${getStatusBadge(task.status)}`}>
                    {task.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Calendar Events Section */}
      <div>
        <h2 className="h3 mb-4 fw-semibold">Upcoming Events</h2>
        <div className="row g-4">
          {events.map((day, dayIndex) => (
            <div key={dayIndex} className="col-12">
              <h4 className="h5 mb-3">{day.date}</h4>
              <div className="row g-3">
                {day.items.map((event, eventIndex) => (
                  <div key={eventIndex} className="col-md-6">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="d-flex gap-3">
                          <div className="bg-primary bg-opacity-10 p-3 rounded">
                            <FontAwesomeIcon icon={getEventTypeIcon(event.type)} className="text-primary" />
                          </div>
                          <div className="flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <h5 className="card-title mb-1">{event.title}</h5>
                              <small className="text-muted">{event.time}</small>
                            </div>
                            <p className="card-text text-muted">{event.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;