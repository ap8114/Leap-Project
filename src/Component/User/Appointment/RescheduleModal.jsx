import React, { useState } from 'react';

const RescheduleModal = ({ appointment, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [rescheduleReason, setRescheduleReason] = useState('');

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const handleRescheduleConfirm = () => {
    // Handle reschedule logic here
    onClose();
  };

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Request Consultation Reschedule</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {appointment && (
              <div className="alert alert-info mb-4">
                <h6 className="alert-heading">Current Appointment</h6>
                <p className="mb-1 small">{appointment.lawyer} - {appointment.specialty}</p>
                <p className="mb-0 small">
                  {new Date(appointment.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })} at {appointment.time}
                </p>
              </div>
            )}

            <div className="mb-3">
              <label className="form-label">New Date</label>
              <input
                type="date"
                className="form-control"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Available Time Slots</label>
              <div className="row g-2">
                {timeSlots.map((time) => (
                  <div key={time} className="col-4">
                    <button
                      className={`btn w-100 btn-sm ${
                        selectedTime === time ? 'btn-primary' : 'btn-outline-primary'
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Reason for Reschedule (Optional)</label>
              <textarea
                className="form-control"
                rows="3"
                value={rescheduleReason}
                onChange={(e) => setRescheduleReason(e.target.value)}
                placeholder="Please provide a reason for rescheduling..."
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleRescheduleConfirm}
              disabled={!selectedDate || !selectedTime}
            >
              Confirm Reschedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RescheduleModal;