import React from 'react';

const CalendarView = ({ appointments }) => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const generateCalendarDays = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const appointmentDates = appointments.map(apt => apt.date);

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const dateString = date.toISOString().split('T')[0];
      const hasAppointment = appointmentDates.includes(dateString);
      const isCurrentMonth = date.getMonth() === currentMonth;
      const isToday = dateString === today.toISOString().split('T')[0];

      days.push({
        date: date.getDate(),
        dateString,
        hasAppointment,
        isCurrentMonth,
        isToday
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h3 mb-0">
            {monthNames[new Date().getMonth()]} {new Date().getFullYear()}
          </h2>
          <div className="btn-group">
            <button className="btn btn-outline-secondary">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="btn btn-outline-secondary">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="row row-cols-7 g-1 mb-2">
          {weekDays.map((day) => (
            <div key={day} className="col text-center small text-muted fw-bold">
              {day}
            </div>
          ))}
        </div>

        <div className="row row-cols-7 g-1">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`col p-2 text-center rounded ${
                day.isCurrentMonth
                  ? day.isToday
                    ? 'bg-primary text-white fw-bold'
                    : 'bg-white text-dark'
                  : 'text-muted'
              }`}
              style={{ minHeight: '60px' }}
            >
              <div className="small">{day.date}</div>
              {day.hasAppointment && (
                <div className="d-flex justify-content-center mt-1">
                  <span className="badge rounded-circle bg-primary p-1"></span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;