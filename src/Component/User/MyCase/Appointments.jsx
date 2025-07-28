import React from 'react';

const Appointments = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="h5 card-title mb-4">Upcoming Appointments</h3>
        
        <div className="d-flex flex-column gap-3">
          {/* Appointment 1 */}
          <div className="border rounded p-3">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h4 className="h6 mb-1">Court Hearing</h4>
                <p className="small text-muted mb-2">Pre-trial conference with judge</p>
                <div className="d-flex flex-wrap gap-3 small text-muted">
                  <span><i className="fas fa-calendar me-1"></i>12 August 2024</span>
                  <span><i className="fas fa-clock me-1"></i>10:00 am</span>
                  <span><i className="fas fa-map-marker-alt me-1"></i>Courthouse Room 3A</span>
                </div>
              </div>
              <span className="badge bg-danger">Mandatory</span>
            </div>
          </div>
          
          {/* Appointment 2 */}
          <div className="border rounded p-3">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h4 className="h6 mb-1">Client Meeting</h4>
                <p className="small text-muted mb-2">Case strategy discussion with Sarah Johnson</p>
                <div className="d-flex flex-wrap gap-3 small text-muted">
                  <span><i className="fas fa-calendar me-1"></i>5 August 2024</span>
                  <span><i className="fas fa-clock me-1"></i>2:00 pm</span>
                  <span><i className="fas fa-map-marker-alt me-1"></i>Law Office</span>
                </div>
              </div>
              <span className="badge bg-primary">Scheduled</span>
            </div>
          </div>
          
          {/* Appointment 3 */}
          <div className="border rounded p-3">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h4 className="h6 mb-1">Medical Examination</h4>
                <p className="small text-muted mb-2">Independent medical evaluation</p>
                <div className="d-flex flex-wrap gap-3 small text-muted">
                  <span><i className="fas fa-calendar me-1"></i>30 July 2024</span>
                  <span><i className="fas fa-clock me-1"></i>9:00 am</span>
                  <span><i className="fas fa-map-marker-alt me-1"></i>Medical Centre</span>
                </div>
              </div>
              <span className="badge bg-warning text-dark">Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
