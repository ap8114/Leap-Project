import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import EventDetailsModal from './EventDetailsModal';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const CalendarUI = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 6, 10)); // July 10, 2025
  const [selectedView, setSelectedView] = useState('Week');
  const [showHeaderCalendar, setShowHeaderCalendar] = useState(false);
  const [headerCalendarDate, setHeaderCalendarDate] = useState(new Date(2025, 6, 10));
  const [showEventModal, setShowEventModal] = useState(false);
  const startDay = new Date(2025, 5, 29); // June 29, 2025 (Sunday)
  const days = [];

  for (let i = 0; i < 42; i++) {
    const day = new Date(startDay);
    day.setDate(startDay.getDate() + i);
    days.push(day);
  }

  const today = new Date().toDateString();
  // Sample events data
  const [events] = useState([
    { date: '2025-07-10', time: '9:00 AM', event: 'Team Meeting' },
    { date: '2025-07-10', time: '2:00 PM', event: 'Client Call' },
    { date: '2025-07-11', time: '10:00 AM', event: 'Project Review' },
    { date: '2025-07-12', time: '3:00 PM', event: 'Workshop' },
    { date: '2025-07-15', time: '11:00 AM', event: 'Design Review' },
    { date: '2025-07-20', time: '4:00 PM', event: 'Sprint Planning' }
  ]);
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayNamesShort = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  const calendars = [
    { name: ' Glossary', color: '#007bff', checked: true },
    { name: 'Firm', color: '#fd7e14', checked: true },
    { name: 'Tasks', color: '#28a745', checked: true },
    { name: 'Statute of Limitations', color: '#dc3545', checked: true }
  ];
  
  const timeSlots = [
    '12:00 am', '1:00 am', '2:00 am', '3:00 am', '4:00 am', '5:00 am', 
    '6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am',
    '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm',
    '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm', '11:00 pm',
  ];
  
  const navigateDate = (direction) => {
    const newDate = new Date(currentDate);
    if (selectedView === 'Day') {
      newDate.setDate(currentDate.getDate() + direction);
    } else if (selectedView === 'Week' || selectedView === 'Work week') {
      newDate.setDate(currentDate.getDate() + (direction * 7));
    } else if (selectedView === 'Month') {
      newDate.setMonth(currentDate.getMonth() + direction);
    }
    setCurrentDate(newDate);
  };
  
  const goToToday = () => {
    setCurrentDate(new Date());
  };
  
  const formatDateHeader = () => {
    const options = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return currentDate.toLocaleDateString('en-US', options);
  };
  
  const getWeekDays = () => {
    const startOfWeek = new Date(currentDate);
    const day = startOfWeek.getDay();
    startOfWeek.setDate(currentDate.getDate() - day);
    
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      weekDays.push(day);
    }
    return weekDays;
  };

  const getWorkWeekDays = () => {
    const startOfWeek = new Date(currentDate);
    const day = startOfWeek.getDay();
    startOfWeek.setDate(currentDate.getDate() - day);
    
    const workWeekDays = [];
    for (let i = 1; i <= 5; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      workWeekDays.push(day);
    }
    return workWeekDays;
  };
  
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const current = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      days.push({
        date: new Date(current),
        isCurrentMonth: current.getMonth() === month,
        isToday: current.toDateString() === new Date().toDateString(),
        isSelected: current.toDateString() === currentDate.toDateString()
      });
      current.setDate(current.getDate() + 1);
    }
    
    return days;
  };
  
  const generateHeaderCalendarDays = () => {
    const year = headerCalendarDate.getFullYear();
    const month = headerCalendarDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const current = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      days.push({
        date: new Date(current),
        isCurrentMonth: current.getMonth() === month,
        isToday: current.toDateString() === new Date().toDateString(),
        isSelected: current.toDateString() === currentDate.toDateString()
      });
      current.setDate(current.getDate() + 1);
    }
    
    return days;
  };
  
  const navigateHeaderCalendar = (direction) => {
    const newDate = new Date(headerCalendarDate);
    newDate.setMonth(headerCalendarDate.getMonth() + direction);
    setHeaderCalendarDate(newDate);
  };
  
  const selectHeaderDate = (date) => {
    setCurrentDate(date);
    setShowHeaderCalendar(false);
  };

  const getEventsForDate = (date) => {
    const dateStr = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateStr);
  };

  const renderMonthView = () => {
    return (
      <div className="p-3">
          <Container className="mt-4 border p-3 bg-white shadow">
      <Row className="text-center fw-bold border-bottom pb-2">
        {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((d, idx) => (
          <Col key={idx} className="border-end">{d}</Col>
        ))}
      </Row>

      {[0, 1, 2, 3, 4, 5].map((week) => (
        <Row key={week} className="text-center" style={{ minHeight: '80px' }}>
          {[0, 1, 2, 3, 4, 5, 6].map((d) => {
            const current = days[week * 7 + d];
            const isToday = current.toDateString() === today;

            return (
              <Col key={d} className={`border p-2 ${isToday ? 'bg-warning' : ''}`} style={{ height: '80px' }}>
                <div className="small text-muted">{current.getDate().toString().padStart(2, '0')}</div>
              </Col>
            );
          })}
        </Row>
      ))}
    </Container>
      </div>
    );
  };

  const renderDayView = () => {
    const dayEvents = getEventsForDate(currentDate);
    
    return (
      <div className="p-3">
        {/* Day Header */}
        <div className="border-bottom p-3 bg-white shadow-sm mb-3">
          <div className="row g-0">
            <div className="col-md-2 text-center">
              <div className="small text-muted">All Day</div>
            </div>
            <div className="col-md-10 text-center">
              <div className="fw-bold">
                {dayNames[currentDate.getDay()]} {currentDate.getDate()} {monthNames[currentDate.getMonth()]}
              </div>
            </div>
          </div>
        </div>
        
        {/* Time Slots */}
        <div className="overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
          {timeSlots.map((time, index) => (
            <div key={index} className="row g-0 border-bottom" style={{ minHeight: '60px' }}>
              <div className="col-md-2 border-end p-2 text-end small text-muted">
                {time}
              </div>
              <div className="col-md-10 position-relative" style={{ minHeight: '60px' }}>
                {dayEvents.filter(event => event.time === time).map((event, eventIndex) => (
                  <div 
                    key={eventIndex}
                    className="position-absolute text-white px-2 py-1 rounded"
                    style={{
                      backgroundColor: calendars[0].color,
                      left: '8px',
                      right: '8px',
                      top: '4px',
                      fontSize: '0.8rem'
                    }}
                  >
                    {event.event}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  const calendarDays = generateCalendarDays();
  const headerCalendarDays = generateHeaderCalendarDays();
  const weekDays = getWeekDays();
  const workWeekDays = getWorkWeekDays();
  
  return (
    <div className="container-fluid p-0" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css" 
        rel="stylesheet"
      />
      <style>
        {`
          .hover-bg-light:hover {
            background-color: #f8f9fa !important;
          }
          .btn-link:hover {
            text-decoration: none !important;
          }
          .week-today {
            background-color: #fff2cc !important;
          }
          .time-slot {
            border-right: 1px solid #dee2e6;
            min-height: 60px;
            font-size: 0.75rem;
            color: #6c757d;
            text-align: right;
            padding-right: 8px;
            padding-top: 4px;
          }
          .week-day-column {
            border-right: 1px solid #dee2e6;
            position: relative;
            min-height: 60px;
          }
          .week-day-column:hover {
            background-color: #f8f9fa;
          }
          .week-header {
            height: 80px;
            border-bottom: 1px solid #dee2e6;
          }
          .all-day-row {
            height: 40px;
            border-bottom: 1px solid #dee2e6;
          }
          .week-day-header {
            text-align: center;
            padding: 8px;
            font-size: 0.85rem;
          }
          .hide-scrollbar {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .month-day-cell {
            transition: background-color 0.2s;
            cursor: pointer;
          }
          .month-day-cell:hover {
            background-color: #f8f9fa !important;
          }
          .calendar-container {
            min-height: calc(100vh - 80px);
          }
          .sidebar {
            overflow-y: auto;
            height: calc(100vh - 80px);
          }
          .agenda-view {
            min-height: calc(100vh - 80px);
          }
          @media (max-width: 768px) {
            .sidebar {
              height: auto;
              overflow-y: visible;
            }
            .calendar-container {
              min-height: auto;
            }
          }
        `}
      </style>
      
      {/* Header */}
      <div className="bg-white border-bottom p-3 shadow-sm">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <button 
                className="btn btn-outline-secondary btn-sm order-1"
                onClick={goToToday}
              >
                Today
              </button>
              <div className="position-relative order-3 order-md-2">
                <button 
                  className="btn btn-link text-decoration-none text-dark p-0 ms-2"
                  onClick={() => setShowHeaderCalendar(!showHeaderCalendar)}
                >
                  <h5 className="mb-0">{formatDateHeader()} <span className="d-none d-md-inline">▼</span></h5>
                </button>
                
                {showHeaderCalendar && (
                  <div className="position-absolute bg-white border rounded shadow-lg p-3 mt-2" style={{ zIndex: 1050, minWidth: '300px' }}>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => navigateHeaderCalendar(-1)}
                      >
                        ‹
                      </button>
                      <h6 className="mb-0">{monthNames[headerCalendarDate.getMonth()]} {headerCalendarDate.getFullYear()}</h6>
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => navigateHeaderCalendar(1)}
                      >
                        ›
                      </button>
                    </div>
                    
                    <div className="row g-0 mb-2">
                      {dayNames.map(day => (
                        <div key={day} className="col text-center small text-muted p-1">
                          <strong>{day}</strong>
                        </div>
                      ))}
                    </div>
                    
                    <div className="row g-0 mb-3">
                      {headerCalendarDays.map((day, index) => (
                        <div key={index} className="col text-center p-1">
                          <button
                            className={`btn btn-sm w-100 ${
                              day.isSelected 
                                ? 'btn-primary' 
                                : day.isToday 
                                ? 'btn-outline-primary' 
                                : day.isCurrentMonth 
                                ? 'btn-outline-light text-dark hover-bg-light' 
                                : 'btn-outline-light text-muted'
                            }`}
                            style={{ fontSize: '0.75rem', height: '32px' }}
                            onClick={() => selectHeaderDate(day.date)}
                          >
                            {day.date.getDate()}
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center border-top pt-2">
                      <small className="text-primary">
                        {currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </small>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
              <div className="btn-group order-2 order-md-1" role="group">
                {['Agenda', 'Day', 'Week', 'Work week', 'Month'].map(view => (
                  <button
                    key={view}
                    type="button"
                    className={`btn btn-sm ${selectedView === view ? 'btn-primary' : 'btn-outline-secondary'}`}
                    onClick={() => setSelectedView(view)}
                  >
                    {view}
                  </button>
                ))}
              </div>
              
             <div className="dropdown order-3 order-md-2">
      <button 
        className="btn btn-outline-secondary btn-sm dropdown-toggle" 
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        More
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
         <li><button className="dropdown-item">Refresh</button></li>
    <li><button className="dropdown-item">Add new calendar</button></li>
    <li><button className="dropdown-item">Calendar settings</button></li>
    <li><button className="dropdown-item">Calendar sharing</button></li>
    <li><button className="dropdown-item">Calendar sync</button></li>
    <li><button className="dropdown-item">Calendar feeds</button></li>
    <li><button className="dropdown-item">Print</button></li>
      </ul>
    </div>
              
              <button className="btn btn-primary btn-sm order-1 order-md-3 mb-2 mb-md-0"  onClick={() => setShowEventModal(true)}>
                New event
              </button>
                {/* Show modal */}
      <Modal
        show={showEventModal}
        onHide={() => setShowEventModal(false)}
        size="lg"
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EventDetailsModal />
        </Modal.Body>
      </Modal>
              
              <div className="d-flex align-items-center order-4">
                <button 
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => navigateDate(-1)}
                >
                  ‹
                </button>
                <span className="small text-muted mx-2 d-none d-md-inline">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </span>
                <button 
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => navigateDate(1)}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row g-0 calendar-container">
        <div className="col-lg-9 bg-white">
          {selectedView === 'Agenda' ? (
            /* Agenda View */
            <div className="p-4 agenda-view">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr className="border-bottom">
                      <th className="text-muted fw-normal py-3" style={{ width: '20%' }}>Date</th>
                      <th className="text-muted fw-normal py-3" style={{ width: '20%' }}>Time</th>
                      <th className="text-muted fw-normal py-3" style={{ width: '60%' }}>Event</th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.map((event, index) => (
                      <tr key={index}>
                        <td className="py-3">{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</td>
                        <td className="py-3">{event.time}</td>
                        <td className="py-3">{event.event}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : selectedView === 'Day' ? (
            /* Day View */
            renderDayView()
          ) : selectedView === 'Month' ? (
            /* Month View */
            renderMonthView()
          ) : selectedView === 'Week' || selectedView === 'Work week' ? (
            /* Week/Work Week View */
            <div className="h-100">
              {/* Week Header with Days */}
              <div className="week-header bg-white border-bottom">
                <div className="row g-0 h-100">
                  {/* Empty corner for time column */}
                  <div className="col-1 border-end d-none d-md-block"></div>
                  {(selectedView === 'Week' ? weekDays : workWeekDays).map((day, index) => {
                    const isToday = day.toDateString() === new Date().toDateString();
                    const isSelected = day.toDateString() === currentDate.toDateString();
                    return (
                      <div key={index} className={`col border-end text-center d-flex flex-column justify-content-center ${isToday ? 'week-today' : ''}`}>
                        <div className="small text-muted mb-1 d-none d-md-block">{dayNames[day.getDay()]}</div>
                        <div className="small text-muted mb-1 d-md-none">{dayNames[day.getDay()].substring(0, 1)}</div>
                        <div className={`h4 mb-0 ${isToday ? 'text-primary fw-bold' : ''}`}>{day.getDate()}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* All Day Row */}
              <div className="all-day-row">
                <div className="row g-0 h-100">
                  <div className="col-1 border-end d-flex align-items-center justify-content-center d-none d-md-block">
                    <small className="text-muted">All Day</small>
                  </div>
                  {(selectedView === 'Week' ? weekDays : workWeekDays).map((day, index) => {
                    const isToday = day.toDateString() === new Date().toDateString();
                    return (
                      <div key={index} className={`col border-end ${isToday ? 'week-today' : ''}`}>
                        {/* All day events would go here */}
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Time Slots */}
              <div className="overflow-auto hide-scrollbar" style={{ height: 'calc(100vh - 200px)' }}>
                {timeSlots.map((time, timeIndex) => (
                  <div key={timeIndex} className="row g-0 border-bottom" style={{ minHeight: '60px' }}>
                    <div className="col-1 time-slot d-flex align-items-start justify-content-end pe-3 pt-1 d-none d-md-block">
                      <span style={{ fontSize: '0.75rem', color: '#6c757d' }}>{time}</span>
                    </div>
                    {(selectedView === 'Week' ? weekDays : workWeekDays).map((day, dayIndex) => {
                      const isToday = day.toDateString() === new Date().toDateString();
                      const dayEvents = getEventsForDate(day);
                      const timeEvent = dayEvents.find(event => event.time === time);
                      
                      return (
                        <div key={dayIndex} className={`col week-day-column ${isToday ? 'week-today' : ''}`}>
                          {timeEvent && (
                            <div className="position-absolute" style={{ 
                              top: '0', 
                              left: '4px', 
                              right: '4px',
                              backgroundColor: '#007bff',
                              color: 'white',
                              padding: '2px 6px',
                              borderRadius: '3px',
                              fontSize: '0.75rem',
                              height: '20px',
                              lineHeight: '16px'
                            }}>
                              {timeEvent.event}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Default View */
            <div className="col-9 bg-white d-flex align-items-center justify-content-center">
              <div className="text-center">
                <h5 className="text-muted">Select a view to display calendar</h5>
              </div>
            </div>
          )}
        </div>
        
        {/* Right Sidebar - Always visible now */}
        <div className="col-lg-3 border-start bg-white sidebar">
          <div className="p-3">
            {/* Mini Calendar */}
            <div className="mb-4">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <button 
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => {
                    const newDate = new Date(currentDate);
                    newDate.setMonth(currentDate.getMonth() - 1);
                    setCurrentDate(newDate);
                  }}
                >
                  ‹
                </button>
                <h6 className="mb-0">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h6>
                <button 
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => {
                    const newDate = new Date(currentDate);
                    newDate.setMonth(currentDate.getMonth() + 1);
                    setCurrentDate(newDate);
                  }}
                >
                  ›
                </button>
              </div>
              
              <div className="row g-0 mb-2">
                {dayNamesShort.map(day => (
                  <div key={day} className="col text-center small text-muted p-1">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="row g-0">
                {calendarDays.map((day, index) => (
                  <div key={index} className="col text-center p-1">
                    <button
                      className={`btn btn-sm w-100 ${
                        day.isSelected 
                          ? 'btn-primary' 
                          : day.isToday 
                          ? 'btn-outline-primary' 
                          : day.isCurrentMonth 
                          ? 'btn-outline-light text-dark' 
                          : 'btn-outline-light text-muted'
                      }`}
                      style={{ fontSize: '0.75rem', height: '28px' }}
                      onClick={() => setCurrentDate(day.date)}
                    >
                      {day.date.getDate()}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* My Calendars */}
            <div className="mb-4 ms-3">
              <div className="d-flex m align-items-center justify-content-between mb-3">
                <h6 className="mb-0">My calendars</h6>
                <button className="btn btn-sm btn-outline-secondary">▼</button>
              </div>
              {calendars.map((calendar, index) => (
                <div key={index} className="d-flex align-items-center mb-2">
                  <input 
                    className="form-check-input me-2" 
                    type="checkbox" 
                    defaultChecked={calendar.checked}
                    id={`calendar-${index}`}
                  />
                  <span 
                    className="badge me-2" 
                    style={{ backgroundColor: calendar.color, width: '12px', height: '12px' }}
                  ></span>
                  <label className="form-check-label small flex-grow-1" htmlFor={`calendar-${index}`}>
                    {calendar.name}
                  </label>
                  <button className="btn btn-sm btn-outline-secondary">⋮</button>
                </div>
              ))}
            </div>
            
            {/* Other Calendars */}
            <div>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h6 className="mb-0">Other calendars</h6>
                <button className="btn btn-sm btn-outline-secondary">▼</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarUI;










