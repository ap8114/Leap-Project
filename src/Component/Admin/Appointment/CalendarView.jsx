// CalendarView.jsx
import React from 'react';
import './Appointement.css'; // optional for custom styles

const CalendarView = ({
  currentView,
  selectedDate,
  onDateNavigation,
  formatDate,
  getWeekDays,
  getDaysInMonth,
  staffMembers
}) => {
  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  function renderWeekView() {
    return (
      <div className="table-responsive">
        <table className="table table-bordered text-nowrap">
          <thead className="table-light">
            <tr>
              <th style={{ width: '100px' }}></th>
              {getWeekDays().map((day, index) => (
                <th key={index} className="text-center">
                  <div className="text-muted small">
                    {day.toLocaleDateString('en-GB', { weekday: 'short' })}
                  </div>
                  <div className={`${day.toDateString() === new Date().toDateString() ? 'text-primary fw-bold' : ''}`}>
                    {day.getDate()}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((time, timeIndex) => (
              <tr key={timeIndex}>
                <td className="text-muted text-end pe-3">{time}</td>
                {getWeekDays().map((day, dayIndex) => (
                  <td key={dayIndex} className="position-relative" style={{ height: '60px', minWidth: '100px' }}>
                    {timeIndex === 1 && dayIndex === 1 && (
                      <div className="event-card bg-primary border-primary">John Smith<br /><small>Consultation</small></div>
                    )}
                    {timeIndex === 6 && dayIndex === 3 && (
                      <div className="event-card bg-success border-success">Maria Garcia<br /><small>Contract Review</small></div>
                    )}
                    {timeIndex === 2 && dayIndex === 5 && (
                      <div className="event-card bg-purple border-purple">Robert Wilson<br /><small>Deposition</small></div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  function renderDayView() {
    return (
      <div className="list-group">
        {timeSlots.map((time, index) => (
          <div key={index} className="list-group-item">
            <div className="d-flex flex-wrap align-items-start">
              <div className="text-muted me-3" style={{ width: '80px' }}>{time}</div>
              <div className="flex-grow-1">
                {index === 1 && (
                  <div className="event-card bg-primary border-primary">
                    <strong>John Smith - Consultation</strong><br />
                    <small>Dr. Sarah Johnson • 1 hour</small>
                  </div>
                )}
                {index === 6 && (
                  <div className="event-card bg-success border-success">
                    <strong>Maria Garcia - Contract Review</strong><br />
                    <small>Dr. Michael Chen • 45 minutes</small>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  function renderMonthView() {
    return (
      <div className="calendar-grid-month">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="calendar-month-header">{day}</div>
        ))}
        {getDaysInMonth(selectedDate).map((day, index) => (
          <div
            key={index}
            className={`calendar-month-day ${!day ? 'calendar-month-day-empty' : ''} 
              ${
                day === new Date().getDate() &&
                selectedDate.getMonth() === new Date().getMonth() &&
                selectedDate.getFullYear() === new Date().getFullYear()
                  ? 'calendar-month-day-current'
                  : ''
              }`}
          >
            {day && (
              <>
                <div className="calendar-month-day-number">{day}</div>
                {day === 15 && (
                  <>
                    <div className="calendar-month-event bg-primary text-primary">9:00 AM John S.</div>
                    <div className="calendar-month-event bg-success text-success">2:00 PM Maria G.</div>
                  </>
                )}
                {day === 22 && (
                  <div className="calendar-month-event bg-purple text-purple">10:30 AM Robert W.</div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header d-flex flex-wrap justify-content-between align-items-center gap-2">
        <h5 className="mb-0">
          {currentView === 'day' && formatDate(selectedDate)}
          {currentView === 'week' && `Week of ${selectedDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`}
          {currentView === 'month' && selectedDate.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
        </h5>
        <div className="d-flex gap-2">
          <button onClick={() => onDateNavigation('prev')} className="btn btn-sm btn-outline-secondary">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button onClick={() => onDateNavigation('today')} className="btn btn-sm btn-outline-primary">
            Today
          </button>
          <button onClick={() => onDateNavigation('next')} className="btn btn-sm btn-outline-secondary">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="card-body">
        {currentView === 'week' && renderWeekView()}
        {currentView === 'day' && renderDayView()}
        {currentView === 'month' && renderMonthView()}
      </div>

      <div className="card-footer">
        <h5>Staff Availability</h5>
        <div className="mt-3">
          {staffMembers.slice(1).map((staff) => (
            <div key={staff.id} className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span>{staff.name}</span>
                <span className="text-muted">Available</span>
              </div>
              <div className="progress" style={{ height: '8px' }}>
                <div
                  className={`progress-bar ${staff.color}`}
                  style={{ width: `${Math.random() * 60 + 40}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
