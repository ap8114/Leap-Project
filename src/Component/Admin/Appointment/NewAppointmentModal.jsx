import React from 'react';

const NewAppointmentModal = ({ show, onHide, staffMembers }) => {
  return (
    <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex="-1" style={{ backgroundColor: show ? 'rgba(0,0,0,0.5)' : '' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">New Booking</h5>
            <button type="button" className="btn-close" onClick={onHide}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Client</label>
              <input
                type="text"
                className="form-control"
                placeholder="Select or enter client name"
              />
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Date</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Time</label>
                <input type="time" className="form-control" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Duration</label>
              <select className="form-select">
                <option>30 minutes</option>
                <option>45 minutes</option>
                <option>1 hour</option>
                <option>1.5 hours</option>
                <option>2 hours</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Staff</label>
              <select className="form-select">
                {staffMembers.slice(1).map((staff) => (
                  <option key={staff.id} value={staff.id}>{staff.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Link to Case (Optional)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Search cases…"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Reminders</label>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">Email reminder (1 hour before)</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">SMS reminder (30 minutes before)</label>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={onHide}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onHide}
              className="btn btn-primary"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAppointmentModal;
