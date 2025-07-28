import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartPie,
  faChartLine,
  faChartBar,
  faExchangeAlt,
  faFileUpload,
  faStar,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';

const ReportandAnalytics = () => {
  const reportCards = [
    {
      title: 'Case Status',
      metric: '1,247',
      subtext: 'Active Cases',
      icon: faChartPie,
      color: 'bg-primary',
    },
    {
      title: 'Monthly Intake',
      metric: '89',
      subtext: 'New Cases',
      icon: faChartLine,
      color: 'bg-success',
    },
    {
      title: 'Performance',
      metric: '94%',
      subtext: 'Success Rate',
      icon: faChartBar,
      color: 'bg-purple',
    },
    {
      title: 'Conversion',
      metric: '67%',
      subtext: 'Lead to Client',
      icon: faExchangeAlt,
      color: 'bg-warning',
    },
    {
      title: 'Documents',
      metric: '2,456',
      subtext: 'Total Files',
      icon: faFileUpload,
      color: 'bg-info',
    },
    {
      title: 'Feedback',
      metric: '4.8',
      subtext: 'Average Rating',
      icon: faStar,
      color: 'bg-yellow',
    },
  ];

  return (
    <div className="min-vh-100 bg-light p-4">
      {/* Page Heading */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <h2 className="mb-0 fw-semibold text-dark">Reports and Analytics</h2>
        <button className="btn btn-primary">
          <FontAwesomeIcon icon={faDownload} className="me-2" />
          Download Report
        </button>
      </div>

      {/* Report Cards */}
      <div className="row g-4">
        {reportCards.map((card, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-4">
            <div className="card h-100 shadow-sm hover-shadow">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className={`${card.color} rounded p-2 me-3 text-white d-flex justify-content-center align-items-center`}
                    style={{ width: '40px', height: '40px' }}
                  >
                    <FontAwesomeIcon icon={card.icon} />
                  </div>
                  <div>
                    <h3 className="h5 mb-1 text-dark">{card.title}</h3>
                    <p className="text-muted small mb-0">{card.subtext}</p>
                  </div>
                </div>

                <div className="h2 fw-bold text-dark">{card.metric}</div>

                {card.title === 'Feedback' && (
                  <div className="mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FontAwesomeIcon
                        key={star}
                        icon={faStar}
                        className={`me-1 ${
                          star <= Math.floor(parseFloat(card.metric))
                            ? 'text-warning'
                            : 'text-muted'
                        }`}
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
  );
};

export default ReportandAnalytics;
