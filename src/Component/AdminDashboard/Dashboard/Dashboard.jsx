import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBriefcase, 
  faClock, 
  faDollarSign,
  faTasks,
  faFileInvoice,
  faBell,
  faCalendarAlt,
  faGavel,
  faUsers,
  faFileAlt,
  faHandshake,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  // Quick Summary Cards Data
  const [summaryCards] = useState([
    { id: 1, title: 'Total Cases', value: 42, icon: faBriefcase, color: 'custom' },
    { id: 2, title: 'Billable Hours', value: '156.5', icon: faDollarSign, color: 'success' },
    { id: 3, title: 'Open Tasks', value: 18, icon: faTasks, color: 'warning' },
    { id: 4, title: 'Pending Invoices', value: 7, icon: faFileInvoice, color: 'danger' }
  ]);

  // Recent Activity Feed Data
  const [activities] = useState([
    { id: 1, type: 'case', title: 'New case assigned - Johnson vs. Smith', time: '2 hours ago', icon: faBriefcase },
    { id: 2, type: 'document', title: 'Contract signed for Davis Corp', time: 'Yesterday', icon: faFileAlt },
    { id: 3, type: 'payment', title: 'Invoice #1425 paid', time: 'Dec 7', icon: faDollarSign },
    { id: 4, type: 'court', title: 'Court date scheduled for Wilson case', time: 'Dec 6', icon: faGavel },
    { id: 5, type: 'meeting', title: 'Client meeting with Thompson', time: 'Dec 5', icon: faUsers }
  ]);

  // Calendar Events Data
  const [events] = useState([
    { id: 1, title: 'Court Hearing', time: '10:00 AM', date: 'Today, Dec 8', type: 'court' },
    { id: 2, title: 'Client Consultation', time: '3:00 PM', date: 'Today, Dec 8', type: 'meeting' },
    { id: 3, title: 'Deposition - Anderson', time: '9:30 AM', date: 'Tomorrow, Dec 9', type: 'deposition' },
    { id: 4, title: 'Settlement Conference', time: '11:00 AM', date: 'Dec 10', type: 'conference' }
  ]);

  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'court': return faGavel;
      case 'meeting': return faUsers;
      case 'deposition': return faFileAlt;
      case 'conference': return faHandshake;
      case 'review': return faSearch;
      default: return faCalendarAlt;
    }
  };

  return (
    <div className="container-fluid p-4 bg-light">
      {/* Page Header */}
      <div className="mb-5">
        <h1 className="display-6 fw-bold mb-2">Dashboard</h1>
        <p>Welcome back! Here's your quick overview.</p>
      </div>

      {/* Quick Summary Cards Section */}
      <div className="mb-5">
        <h3 className="fw-semibold mb-4">Quick Summary</h3>
        <div className="row g-4">
          {summaryCards.map((card) => (
            <div key={card.id} className="col-md-6 col-lg-3">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="text-muted mb-1">{card.title}</p>
                      <h3 className="mb-0">{card.value}</h3>
                    </div>
                    <div className={`bg-${card.color} bg-opacity-10 p-3 rounded-circle`}>
                      <FontAwesomeIcon icon={card.icon} className={`text-${card.color}`} size="lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="row g-4">
        {/* Recent Activity Feed Section */}
        <div className="col-lg-7">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-semibold mb-0">Recent Activity</h3>
                <button className="btn btn-link text-decoration-none p-0">
                  View All Activity
                </button>
              </div>
              <div className="list-group list-group-flush">
                {activities.map((activity) => (
                  <div key={activity.id} className="list-group-item border-0 px-0">
                    <div className="d-flex gap-3">
                      <div className="bg-custom bg-opacity-10 p-2 rounded">
                        <FontAwesomeIcon icon={activity.icon} className="text-custom" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1">{activity.title}</h6>
                        <small className="text-muted">{activity.time}</small>
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faBell} className="text-muted" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Preview Section */}
        <div className="col-lg-5">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-semibold mb-0">Upcoming Events</h3>
                <button className="btn btn-link text-decoration-none p-0">
                  View Full Calendar
                </button>
              </div>
              <div className="list-group list-group-flush">
                {events.map((event) => (
                  <div key={event.id} className="list-group-item border-0 px-0">
                    <div className="d-flex gap-3 align-items-center">
                      <div className={`bg-custom bg-opacity-10 p-3 rounded`}>
                        <FontAwesomeIcon icon={getEventTypeIcon(event.type)} className="text-custom" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1">{event.title}</h6>
                        <small className="text-muted">{event.date} at {event.time}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;