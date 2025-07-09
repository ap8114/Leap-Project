import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col, Badge, Dropdown } from 'react-bootstrap';

const Calendar = () => {
  const [selectedView, setSelectedView] = useState('week');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    id: '',
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    description: '',
    type: 'meeting'
  });

  // Sample data
  const staffMembers = [
    { id: 1, name: 'John Smith', status: 'available' },
    { id: 2, name: 'Sarah Johnson', status: 'busy' },
    { id: 3, name: 'Mike Wilson', status: 'out-of-office' },
    { id: 4, name: 'Emma Davis', status: 'available' },
  ];

  const [upcomingReminders, setUpcomingReminders] = useState([
    { id: 1, title: 'Client Meeting', time: '10:00 AM', date: getFormattedDate(new Date()), type: 'meeting', urgency: 'high' },
    { id: 2, title: 'Document Deadline', time: '2:00 PM', date: getFormattedDate(new Date()), type: 'deadline', urgency: 'medium' },
    { id: 3, title: 'Court Hearing', time: '9:30 AM', date: getFormattedDate(new Date()), type: 'hearing', urgency: 'high' },
  ]);

  // Helper functions
  function getFormattedDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1).getDay();
  }

  function getWeekDates(date) {
    const startDate = new Date(date);
    startDate.setDate(date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1)); // Adjust to Monday
    
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      dates.push(currentDate);
    }
    return dates;
  }

  function formatTime(timeString) {
    if (!timeString) return '';
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  }

  // Calendar navigation
  const navigateDate = (direction) => {
    const newDate = new Date(currentDate);
    
    if (selectedView === 'day') {
      newDate.setDate(newDate.getDate() + (direction === 'next' ? 1 : -1));
    } else if (selectedView === 'week') {
      newDate.setDate(newDate.getDate() + (direction === 'next' ? 7 : -7));
    } else { // month
      newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
    }
    
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Appointment handling
  const handleCreateAppointment = () => {
    const appointmentId = Date.now().toString();
    const appointmentToAdd = {
      ...newAppointment,
      id: appointmentId
    };
    
    setAppointments([...appointments, appointmentToAdd]);
    
    // If the appointment is today, add to reminders
    if (newAppointment.date === getFormattedDate(new Date())) {
      setUpcomingReminders([
        ...upcomingReminders,
        {
          id: appointmentId,
          title: newAppointment.title,
          time: formatTime(newAppointment.startTime),
          date: newAppointment.date,
          type: newAppointment.type,
          urgency: 'medium'
        }
      ]);
    }
    
    setIsModalOpen(false);
    setNewAppointment({
      title: '',
      date: '',
      startTime: '',
      endTime: '',
      description: '',
      type: 'meeting'
    });
  };

  const handleDeleteReminder = (id) => {
    setUpcomingReminders(upcomingReminders.filter(reminder => reminder.id !== id));
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  // UI helpers
  const getStatusBadge = (status) => {
    switch(status) {
      case 'available':
        return <Badge bg="success" className="text-white">Available</Badge>;
      case 'busy':
        return <Badge bg="warning" className="text-dark">Busy</Badge>;
      case 'out-of-office':
        return <Badge bg="danger" className="text-white">Out of Office</Badge>;
      default:
        return <Badge bg="secondary">Unknown</Badge>;
    }
  };

  const getReminderIcon = (type) => {
    switch(type) {
      case 'meeting':
        return <i className="bi bi-people-fill text-custom me-2"></i>;
      case 'deadline':
        return <i className="bi bi-clock-fill text-warning me-2"></i>;
      case 'hearing':
        return <i className="bi bi-gavel text-danger me-2"></i>;
      default:
        return <i className="bi bi-calendar-event text-secondary me-2"></i>;
    }
  };

  const getAppointmentColor = (type) => {
    switch(type) {
      case 'meeting':
        return 'custom';
      case 'deadline':
        return 'warning';
      case 'hearing':
        return 'danger';
      default:
        return 'secondary';
    }
  };

  // Date formatting
  const formatDateDisplay = (date) => {
    if (selectedView === 'day') {
      return date.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    } else if (selectedView === 'week') {
      const startDate = new Date(date);
      startDate.setDate(date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1)); // Start from Monday
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 6);
      
      return `${startDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} - 
              ${endDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}`;
    } else {
      return date.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
    }
  };

  // Render calendar cells based on view
  const renderCalendarCells = () => {
    if (selectedView === 'day') {
      return renderDayView();
    } else if (selectedView === 'week') {
      return renderWeekView();
    } else {
      return renderMonthView();
    }
  };

  const renderDayView = () => {
    const hours = [];
    for (let i = 8; i < 20; i++) {
      hours.push(i);
    }

    const formattedCurrentDate = getFormattedDate(currentDate);
    const dayAppointments = appointments.filter(appt => appt.date === formattedCurrentDate);

    return (
      <div className="day-view">
        <div className="hour-grid">
          {hours.map(hour => {
            const hourStart = `${hour.toString().padStart(2, '0')}:00`;
            const hourEnd = `${hour === 23 ? '00' : (hour + 1).toString().padStart(2, '0')}:00`;
            
            return (
              <div key={hour} className="hour-row position-relative border-bottom" style={{ height: '60px' }}>
                <div className="hour-label text-muted small" style={{ width: '50px' }}>
                  {hour}:00
                </div>
                <div className="hour-slot position-absolute top-0 end-0 bottom-0 start-0 ps-5">
                  {dayAppointments
                    .filter(appt => {
                      const startHour = parseInt(appt.startTime.split(':')[0]);
                      return startHour === hour;
                    })
                    .map(appt => (
                      <div 
                        key={appt.id}
                        className={`bg-${getAppointmentColor(appt.type)} bg-opacity-10 text-${getAppointmentColor(appt.type)} p-2 rounded mb-1 border-start border-${getAppointmentColor(appt.type)} border-3`}
                      >
                        <div className="fw-medium small">{appt.title}</div>
                        <div className="small">{formatTime(appt.startTime)} - {formatTime(appt.endTime)}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderWeekView = () => {
    const weekDates = getWeekDates(currentDate);
    const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

    return (
      <div className="week-view" style={{ overflowX: 'auto' }}>
        <div style={{ minWidth: '700px' }}>
          <div className="row g-0 border-bottom">
            <div className="col-1 border-end" style={{ minWidth: '50px' }}></div>
            {weekDates.map((date, index) => (
              <div key={index} className={`col text-center p-2 ${date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth() ? 'bg-light' : ''}`}>
                <div className="small text-muted">{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()]}</div>
                <div className={`fw-medium ${date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth() ? 'text-custom' : ''}`}>
                  {date.getDate()}
                </div>
              </div>
            ))}
          </div>
          
          <div className="row g-0">
            <div className="col-1 border-end" style={{ minWidth: '50px' }}>
              {hours.map(hour => (
                <div key={hour} className="hour-label text-muted small text-end pe-2 py-1" style={{ height: '40px' }}>
                  {hour}:00
                </div>
              ))}
            </div>
            
            {weekDates.map((date, dayIndex) => {
              const formattedDate = getFormattedDate(date);
              const dayAppointments = appointments.filter(appt => appt.date === formattedDate);
              
              return (
                <div key={dayIndex} className="col border-end">
                  {hours.map(hour => {
                    const hourAppointments = dayAppointments.filter(appt => {
                      const startHour = parseInt(appt.startTime.split(':')[0]);
                      return startHour === hour;
                    });
                    
                    return (
                      <div 
                        key={hour} 
                        className="hour-cell border-bottom position-relative" 
                        style={{ height: '40px' }}
                        onClick={() => {
                          setNewAppointment({
                            ...newAppointment,
                            date: formattedDate,
                            startTime: `${hour.toString().padStart(2, '0')}:00`,
                            endTime: `${hour === 23 ? '00' : (hour + 1).toString().padStart(2, '0')}:00`
                          });
                          setIsModalOpen(true);
                        }}
                      >
                        {hourAppointments.map(appt => (
                          <div
                            key={appt.id}
                            className={`bg-${getAppointmentColor(appt.type)} bg-opacity-10 text-${getAppointmentColor(appt.type)} p-1 rounded small position-absolute start-0 end-0 mx-1`}
                            style={{ top: '2px', bottom: '2px', overflow: 'hidden' }}
                          >
                            <div className="text-truncate fw-medium">{appt.title}</div>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderMonthView = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    // Calculate total weeks
    const totalWeeks = Math.ceil(days.length / 7);
    
    return (
      <div className="month-view">
        {Array.from({ length: totalWeeks }).map((_, weekIndex) => (
          <div key={weekIndex} className="row g-0 border-bottom">
            {Array.from({ length: 7 }).map((_, dayIndex) => {
              const day = days[weekIndex * 7 + dayIndex];
              if (!day) {
                return <div key={dayIndex} className="col p-2 border-end" style={{ height: '100px' }}></div>;
              }
              
              const formattedDate = getFormattedDate(day);
              const dayAppointments = appointments.filter(appt => appt.date === formattedDate);
              const isToday = day.getDate() === new Date().getDate() && day.getMonth() === new Date().getMonth();
              
              return (
                <div 
                  key={dayIndex} 
                  className={`col p-1 border-end ${isToday ? 'bg-light' : ''}`} 
                  style={{ height: '100px', cursor: 'pointer' }}
                  onClick={() => {
                    setCurrentDate(day);
                    setSelectedView('day');
                  }}
                >
                  <div className={`d-flex justify-content-end ${isToday ? 'text-custom fw-bold' : ''}`}>
                    {day.getDate()}
                  </div>
                  <div className="mt-1">
                    {dayAppointments.slice(0, 2).map(appt => (
                      <div 
                        key={appt.id}
                        className={`bg-${getAppointmentColor(appt.type)} bg-opacity-10 text-${getAppointmentColor(appt.type)} p-1 rounded small mb-1 text-truncate`}
                      >
                        {formatTime(appt.startTime)} {appt.title}
                      </div>
                    ))}
                    {dayAppointments.length > 2 && (
                      <div className="small text-muted">+{dayAppointments.length - 2} more</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  // Set default date for new appointment
  useEffect(() => {
    setNewAppointment(prev => ({
      ...prev,
      date: getFormattedDate(currentDate)
    }));
  }, [currentDate]);

  return (
    <div className="min-vh-100 bg-light">
      <div className="container-fluid px-3 px-md-4 py-5">
        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
          <div className="mb-3 mb-md-0">
            <h1 className="h1 fw-bold mb-1"> Calendar</h1>
               <p className="text-muted">
    Keep track of meetings, court dates, deadlines, and team availability — all in one organized view.
  </p>
          </div>
          <Button 
            variant="custom" 
            onClick={() => setIsModalOpen(true)}
            className="d-flex align-items-center btn-custom"
          >
            <i className="bi bi-plus-lg me-2"></i>
            New Appointment
          </Button>
        </div>
        
        <div className="row g-4">
          {/* Main Calendar Area */}
          <div className="col-lg-8 order-1 order-lg-0">
            <div className="card shadow-sm border-0">
              <div className="card-body p-3">
                {/* Calendar Controls */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3 gap-2">
                  <div className="d-flex align-items-center gap-2">
                    <Button 
                      variant="outline-secondary" 
                      size="sm"
                      onClick={goToToday}
                      className="d-flex align-items-center"
                    >
                      Today
                    </Button>
                    
                    <div className="btn-group" role="group">
                      <Button
                        variant={selectedView === 'day' ? 'custom' : 'outline-secondary'}
                        onClick={() => setSelectedView('day')}
                        size="sm"
                      >
                        Day
                      </Button>
                      <Button
                        variant={selectedView === 'week' ? 'custom' : 'outline-secondary'}
                        onClick={() => setSelectedView('week')}
                        size="sm"
                      >
                        Week
                      </Button>
                      <Button
                        variant={selectedView === 'month' ? 'custom' : 'outline-secondary'}
                        onClick={() => setSelectedView('month')}
                        size="sm"
                      >
                        Month
                      </Button>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center gap-2">
                    <Button 
                      variant="outline-secondary" 
                      onClick={() => navigateDate('prev')}
                      size="sm"
                      className="d-flex align-items-center justify-content-center"
                      style={{ width: '32px', height: '32px' }}
                    >
                      <i className="bi bi-chevron-left"></i>
                    </Button>
                    <h5 className="mb-0 text-center" style={{ minWidth: '200px' }}>
                      {formatDateDisplay(currentDate)}
                    </h5>
                    <Button 
                      variant="outline-secondary" 
                      onClick={() => navigateDate('next')}
                      size="sm"
                      className="d-flex align-items-center justify-content-center"
                      style={{ width: '32px', height: '32px' }}
                    >
                      <i className="bi bi-chevron-right"></i>
                    </Button>
                  </div>
                </div>
                
                {/* Calendar View */}
                <div className="border rounded bg-white">
                  {renderCalendarCells()}
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="col-lg-4 order-0 order-lg-1">
            {/* Staff Availability */}
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="card-title mb-0">Team Availability</h5>
                  <Button variant="link" className="p-0 text-muted">
                    <i className="bi bi-arrow-clockwise"></i>
                  </Button>
                </div>
                <div className="list-group list-group-flush">
                  {staffMembers.map((staff) => (
                    <div key={staff.id} className="list-group-item d-flex justify-content-between align-items-center py-2 px-0 border-0">
                      <div className="d-flex align-items-center">
                        <div className={`rounded-circle me-2 ${staff.status === 'available' ? 'bg-success' : staff.status === 'busy' ? 'bg-warning' : 'bg-danger'}`} style={{ width: '10px', height: '10px' }}></div>
                        <span className="text-truncate">{staff.name}</span>
                      </div>
                      <div className="ms-2">
                        {getStatusBadge(staff.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Upcoming Reminders */}
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="card-title mb-0">Upcoming Reminders</h5>
                  <span className="badge bg-custom rounded-pill">{upcomingReminders.length}</span>
                </div>
                <div className="list-group gap-2">
                  {upcomingReminders.map((reminder) => (
                    <div key={reminder.id} className="list-group-item border rounded p-2">
                      <div className="d-flex align-items-start">
                        <div className="flex-shrink-0">
                          {getReminderIcon(reminder.type)}
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex justify-content-between">
                            <h6 className="mb-0">{reminder.title}</h6>
                            <Dropdown>
                              <Dropdown.Toggle variant="link" className="p-0 text-muted" id="dropdown-reminder">
                                <i className="bi bi-three-dots-vertical"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item onClick={() => handleDeleteReminder(reminder.id)}>
                                  <i className="bi bi-trash me-2"></i>Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          <div className="small text-muted">
                            {reminder.date} • {reminder.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* New Appointment Modal */}
 {isModalOpen && (
  <div className="modal d-block fade show" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
    <div className="modal-dialog modal-md ">
      <div className="modal-content">
        
        {/* Modal Header */}
        <div className="modal-header border-0 pb-0">
          <h5 className="modal-title">New Appointment</h5>
          <button type="button" className="btn-close" onClick={() => setIsModalOpen(false)}></button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Meeting with client"
                value={newAppointment.title}
                onChange={(e) => setNewAppointment({ ...newAppointment, title: e.target.value })}
                required
              />
            </div>

            <div className="row mb-3">
              <div className="col-md-6 mb-3 mb-md-0">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={newAppointment.date}
                  onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Type</label>
                <select
                  className="form-select"
                  value={newAppointment.type}
                  onChange={(e) => setNewAppointment({ ...newAppointment, type: e.target.value })}
                >
                  <option value="meeting">Meeting</option>
                  <option value="hearing">Court Hearing</option>
                  <option value="deadline">Deadline</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6 mb-3 mb-md-0">
                <label className="form-label">Start Time</label>
                <input
                  type="time"
                  className="form-control"
                  value={newAppointment.startTime}
                  onChange={(e) => setNewAppointment({ ...newAppointment, startTime: e.target.value })}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">End Time</label>
                <input
                  type="time"
                  className="form-control"
                  value={newAppointment.endTime}
                  onChange={(e) => setNewAppointment({ ...newAppointment, endTime: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Add details about the appointment"
                value={newAppointment.description}
                onChange={(e) => setNewAppointment({ ...newAppointment, description: e.target.value })}
              ></textarea>
            </div>
          </form>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer border-0">
          <button className="btn btn-outline-secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
          <button className="btn btn-custom" onClick={handleCreateAppointment}>Save Appointment</button>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Calendar;