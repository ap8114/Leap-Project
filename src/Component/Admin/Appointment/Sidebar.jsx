import React from 'react';

const Sidebar = ({
  selectedStaff,
  onStaffChange,
  selectedDate,
  onDateChange,
  reminderSettings,
  onReminderSettingsChange,
  staffMembers,
  upcomingAppointments,
  getDaysInMonth
}) => {
  function handlePrevMonth() {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() - 1);
    onDateChange(newDate);
  }

  function handleNextMonth() {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + 1);
    onDateChange(newDate);
  }

  function handleDayClick(day) {
    if (day) {
      const newDate = new Date(selectedDate);
      newDate.setDate(day);
      onDateChange(newDate);
    }
  }

  return (
    <div className="pe-3" style={{ height: 'calc(100vh - 70px)', overflowY: 'auto' }}>
      {/* Staff Filter */}
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Staff Member Filter</h5>
          <select
            value={selectedStaff}
            onChange={(e) => onStaffChange(e.target.value)}
            className="form-select"
          >
            {staffMembers.map((staff) => (
              <option key={staff.id} value={staff.id}>
                {staff.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mini Calendar */}
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-centre mb-3">
            <h5 className="card-title mb-0">
              {selectedDate.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
            </h5>
            <div>
              <button onClick={handlePrevMonth} className="btn btn-sm btn-outline-secondary me-1">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button onClick={handleNextMonth} className="btn btn-sm btn-outline-secondary">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <div className="calendar-grid">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
              <div key={day} className="calendar-header">{day}</div>
            ))}

            {getDaysInMonth(selectedDate).map((day, index) => (
              <div
                key={index}
                className={`calendar-day ${
                  day === selectedDate.getDate() &&
                  selectedDate.getMonth() === new Date().getMonth() &&
                  selectedDate.getFullYear() === new Date().getFullYear()
                    ? 'calendar-day-active'
                    : ''
                } ${!day ? 'calendar-day-empty' : ''}`}
                onClick={() => handleDayClick(day)}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Upcoming Bookings</h5>
          <div className="list-group list-group-flush">
            {upcomingAppointments.map((appointment, index) => (
              <div key={index} className="list-group-item">
                <div className="d-flex align-items-centre">
                  <div className="bg-primary rounded-circle me-3" style={{ width: '8px', height: '8px' }}></div>
                  <div className="flex-grow-1">
                    <h6 className="mb-1">{appointment.client}</h6>
                    <small className="text-muted">{appointment.time}</small>
                  </div>
                  <span className="badge bg-light text-muted">{appointment.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Quick Links</h5>
          <div className="d-grid gap-2">
            <button className="btn btn-outline-secondary text-start">
              <i className="fas fa-folder-open me-2"></i>
              Client Files
            </button>
            <button className="btn btn-outline-secondary text-start">
              <i className="fas fa-users me-2"></i>
              Staff Timetable
            </button>
          </div>
        </div>
      </div>

      {/* Reminder Settings */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Reminder Settings</h5>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={reminderSettings.email}
              onChange={(e) => onReminderSettingsChange({ ...reminderSettings, email: e.target.checked })}
            />
            <label className="form-check-label">Email Reminders</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={reminderSettings.sms}
              onChange={(e) => onReminderSettingsChange({ ...reminderSettings, sms: e.target.checked })}
            />
            <label className="form-check-label">SMS Text Alerts</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
