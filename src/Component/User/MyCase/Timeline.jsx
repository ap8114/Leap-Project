import React from 'react';

const Timeline = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="h5 card-title mb-4">Timeline of Events</h3>
        <div className="d-flex flex-column gap-4">
          <div className="d-flex align-items-start gap-3">
            <div className="flex-shrink-0">
              <div className="bg-primary bg-opacity-10 rounded-circle p-2">
                <i className="fas fa-car-crash text-primary"></i>
              </div>
            </div>
            <div>
              <h4 className="h6 mb-1">Accident Occurred</h4>
              <p className="small text-muted mb-1">Motor vehicle collision at Main St & Oak Ave</p>
              <p className="small text-muted mb-0">January 8, 2024</p>
            </div>
          </div>
          <div className="d-flex align-items-start gap-3">
            <div className="flex-shrink-0">
              <div className="bg-success bg-opacity-10 rounded-circle p-2">
                <i className="fas fa-user-md text-success"></i>
              </div>
            </div>
            <div>
              <h4 className="h6 mb-1">Medical Treatment</h4>
              <p className="small text-muted mb-1">Initial emergency room visit and ongoing therapy</p>
              <p className="small text-muted mb-0">January 8 - February 15, 2024</p>
            </div>
          </div>
          <div className="d-flex align-items-start gap-3">
            <div className="flex-shrink-0">
              <div className="bg-purple bg-opacity-10 rounded-circle p-2">
                <i className="fas fa-gavel text-purple"></i>
              </div>
            </div>
            <div>
              <h4 className="h6 mb-1">Case Filed</h4>
              <p className="small text-muted mb-1">Personal injury lawsuit filed against defendant</p>
              <p className="small text-muted mb-0">March 15, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;