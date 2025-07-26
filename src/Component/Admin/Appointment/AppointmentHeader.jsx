// AppointmentHeader.jsx
import React from 'react';

const AppointmentHeader = ({ currentView, onViewChange, onNewAppointment }) => {
  return (
    <header className="bg-white border-bottom py-3">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div className="bg-primary rounded p-2 me-3 text-white">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <h1 className="h4 mb-0">AppointmentPro</h1>
          </div>
          
          <div className="btn-group" role="group">
            {['day', 'week', 'month'].map((view) => (
              <button
                key={view}
                type="button"
                className={`btn btn-sm ${currentView === view ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => onViewChange(view)}
              >
                {view.charAt(0).toUpperCase() + view.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="d-flex align-items-center">
            <button
              onClick={onNewAppointment}
              className="btn btn-primary me-3"
            >
              <i className="fas fa-plus me-2"></i>
              New Appointment
            </button>
            <div className="bg-light rounded-circle p-2">
              <i className="fas fa-user text-muted"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentHeader;