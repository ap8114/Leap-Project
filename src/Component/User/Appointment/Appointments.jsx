import React, { useState } from 'react';
import RescheduleModal from './RescheduleModal';
import CalendarView from './CalendarView';

const Appointments = () => {
  const [currentView, setCurrentView] = useState('list');
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  
  const appointments = [
    {
      id: 1,
      date: '2025-07-28',
      time: '09:00 AM',
      lawyer: 'Mr. William Bennett',
      speciality: 'Corporate Law',
      location: 'London Office - Meeting Room A',
      status: 'confirmed',
      statusColor: 'bg-success'
    },
    {
      id: 2,
      date: '2025-07-30',
      time: '02:30 PM',
      lawyer: 'Ms. Elizabeth Clarke',
      speciality: 'Property Law',
      location: 'Manchester Office - Conference Room 2',
      status: 'pending',
      statusColor: 'bg-warning'
    },
    {
      id: 3,
      date: '2025-08-02',
      time: '11:15 AM',
      lawyer: 'Mr. James Harrison',
      speciality: 'Employment Law',
      location: 'Birmingham Office - Client Suite',
      status: 'confirmed',
      statusColor: 'bg-success'
    },
    {
      id: 4,
      date: '2025-08-05',
      time: '04:00 PM',
      lawyer: 'Ms. Victoria Palmer',
      speciality: 'Family Law',
      location: 'Leeds Office - Meeting Room C',
      status: 'rescheduled',
      statusColor: 'bg-primary'
    }
  ];

  const handleRescheduleClick = (appointment) => {
    setSelectedAppointment(appointment);
    setShowRescheduleModal(true);
  };

  return (
    <div className="container-fluid py-4 bg-light min-vh-100">
      <div className="container">
        {/* View Toggle */}
        <div className="d-flex justify-content-center mb-4">
          <div className="bg-white rounded p-1 shadow-sm border d-flex">
            <button
              onClick={() => setCurrentView('list')}
              className={`btn ${currentView === 'list' ? 'btn-primary' : 'btn-light'}`}
            >
              <i className="fas fa-list me-2"></i>
              List View
            </button>
            <button
              onClick={() => setCurrentView('calendar')}
              className={`btn ${currentView === 'calendar' ? 'btn-primary' : 'btn-light'}`}
            >
              <i className="fas fa-calendar-alt me-2"></i>
              Calendar View
            </button>
          </div>
        </div>

        {/* List View */}
        {currentView === 'list' && (
          <div className="row">
            <div className="col-12">
              <h2 className="fw-semibold mb-4">Upcoming Consultations</h2>
              <div className="row g-3">
                {appointments.map((appointment) => (
                  <div key={appointment.id} className="col-12">
                    <div className="card shadow-sm h-100">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-md-2 text-center text-md-start mb-3 mb-md-0">
                            <div className="fw-bold fs-4">
                              {new Date(appointment.date).toLocaleDateString('en-GB', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </div>
                            <div className="text-primary fs-5">
                              {appointment.time}
                            </div>
                          </div>
                          <div className="col-md-1 d-none d-md-flex justify-content-center">
                            <div className="vr h-100"></div>
                          </div>
                          <div className="col-md-5 mb-3 mb-md-0">
                            <h3 className="h5 mb-1">{appointment.lawyer}</h3>
                            <p className="text-muted small mb-1">{appointment.speciality}</p>
                            <p className="text-muted small mb-0">
                              <i className="fas fa-building me-1"></i>
                              {appointment.location}
                            </p>
                          </div>
                          <div className="col-md-4 d-flex align-items-center justify-content-md-end">
                            <div className="d-flex align-items-center me-3">
                              <span className={`badge rounded-circle ${appointment.statusColor} p-1 me-2`}></span>
                              <span className="text-capitalize">{appointment.status}</span>
                            </div>
                            <button
                              onClick={() => handleRescheduleClick(appointment)}
                              className="btn btn-primary btn-sm"
                            >
                              <i className="fas fa-calendar-check me-2"></i>
                              Reschedule
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Calendar View */}
        {currentView === 'calendar' && (
          <CalendarView appointments={appointments} />
        )}

        {/* Reschedule Modal */}
        {showRescheduleModal && (
          <RescheduleModal
            appointment={selectedAppointment}
            onClose={() => setShowRescheduleModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Appointments;