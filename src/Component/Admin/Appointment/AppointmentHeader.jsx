// AppointmentHeader.jsx
import React from 'react';

const AppointmentHeader = ({ currentView, onViewChange, onNewAppointment }) => {
  return (
    <header className="bg-white border-bottom py-3">
      <div className="container-fluid">
        <div className="row align-items-center gy-3">
          {/* Title & Icon */}
          <div className="col-12 col-md-4 d-flex align-items-center">
            <div
              className="bg-primary rounded p-2 me-2 text-white d-flex justify-content-center align-items-center"
              style={{ width: '40px', height: '40px' }}
            >
              <i className="fas fa-calendar-alt"></i>
            </div>
            <h1 className="h5 mb-0 text-nowrap">AppointmentPro</h1>
          </div>

          {/* View Selector Buttons */}
          <div className="col-12 col-md-4 text-md-center">
            <div className="btn-group" role="group">
              {['day', 'week', 'month'].map((view) => (
                <button
                  key={view}
                  type="button"
                  className={`btn btn-sm ${
                    currentView === view ? 'btn-primary' : 'btn-outline-primary'
                  }`}
                  onClick={() => onViewChange(view)}
                >
                  {view.charAt(0).toUpperCase() + view.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="col-12 col-md-4 d-flex justify-content-md-end align-items-center gap-2">
            <button
              onClick={onNewAppointment}
              className="btn btn-primary w-100 w-md-auto"
            >
              <i className="fas fa-plus me-2"></i>
              <span className="d-none d-sm-inline">New Appointment</span>
            </button>
            <div
              className="bg-light rounded-circle p-2 d-flex justify-content-center align-items-center"
              style={{ width: '40px', height: '40px' }}
            >
              <i className="fas fa-user text-muted"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentHeader;
