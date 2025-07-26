import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartPie,
  faChartLine,
  faChartBar,
  faExchangeAlt,
  faFileUpload,
  faStar
} from '@fortawesome/free-solid-svg-icons';

const ReportandAnalytics = () => {
  const reportCards = [
    {
      title: 'Case Status',
      metric: '1,247',
      subtext: 'Active Cases',
      icon: faChartPie,
      color: 'bg-primary'
    },
    {
      title: 'Monthly Intake',
      metric: '89',
      subtext: 'New Cases',
      icon: faChartLine,
      color: 'bg-success'
    },
    {
      title: 'Performance',
      metric: '94%',
      subtext: 'Success Rate',
      icon: faChartBar,
      color: 'bg-purple'
    },
    {
      title: 'Conversion',
      metric: '67%',
      subtext: 'Lead to Client',
      icon: faExchangeAlt,
      color: 'bg-warning'
    },
    {
      title: 'Documents',
      metric: '2,456',
      subtext: 'Total Files',
      icon: faFileUpload,
      color: 'bg-info'
    },
    {
      title: 'Feedback',
      metric: '4.8',
      subtext: 'Avg Rating',
      icon: faStar,
      color: 'bg-yellow'
    }
  ];

  return (
    <div className="min-vh-100 bg-light">
      <div className="bg-white shadow-sm">
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="h2 mb-0 text-dark">Reports & Analytics</h1>
            <button className="btn btn-primary">
              <FontAwesomeIcon icon="download" className="me-2" />
              Export
            </button>
          </div>
        </div>
      </div>
      
      <div className="container py-5">
        <div className="row g-4">
          {reportCards.map((card, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm hover-shadow">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className={`${card.color} rounded p-2 me-3 text-white`}>
                      <FontAwesomeIcon icon={card.icon} />
                    </div>
                    <div>
                      <h3 className="h5 mb-1 text-dark">{card.title}</h3>
                      <p className="text-muted small mb-0">{card.subtext}</p>
                    </div>
                  </div>
                  <div className="display-5 fw-bold text-dark">{card.metric}</div>
                  {card.title === 'Feedback' && (
                    <div className="mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FontAwesomeIcon
                          key={star}
                          icon={faStar}
                          className={`${star <= Math.floor(parseFloat(card.metric)) ? 'text-warning' : 'text-muted'}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bootstrap purple background utility class */}
      <style>{`
        .bg-purple { background-color: #6f42c1; }
        .bg-yellow { background-color: #ffc107; }
        .hover-shadow:hover { box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important; }
      `}</style>
    </div>
  );
};

export default ReportandAnalytics;