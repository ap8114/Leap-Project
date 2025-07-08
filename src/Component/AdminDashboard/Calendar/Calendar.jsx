import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Badge } from 'react-bootstrap';

const Calendar = () => {
  const [selectedView, setSelectedView] = useState('week');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    description: '',
    type: 'meeting'
  });

  const staffMembers = [
    { id: 1, name: 'John Smith', status: 'available' },
    { id: 2, name: 'Sarah Johnson', status: 'busy' },
    { id: 3, name: 'Mike Wilson', status: 'out-of-office' },
    { id: 4, name: 'Emma Davis', status: 'available' },
  ];

  const upcomingReminders = [
    { id: 1, title: 'Client Meeting', time: '10:00 AM', type: 'meeting', urgency: 'high' },
    { id: 2, title: 'Document Deadline', time: '2:00 PM', type: 'deadline', urgency: 'medium' },
    { id: 3, title: 'Court Hearing', time: '9:30 AM', type: 'hearing', urgency: 'high' },
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'available':
        return <Badge bg="success">Available</Badge>;
      case 'busy':
        return <Badge bg="warning" text="dark">Busy</Badge>;
      case 'out-of-office':
        return <Badge bg="danger">Out of Office</Badge>;
      default:
        return <Badge bg="secondary">Unknown</Badge>;
    }
  };

  const getReminderIcon = (type) => {
    switch(type) {
      case 'meeting':
        return <i className="bi bi-people-fill text-primary"></i>;
      case 'deadline':
        return <i className="bi bi-clock-fill text-warning"></i>;
      case 'hearing':
        return <i className="bi bi-gavel text-danger"></i>;
      default:
        return <i className="bi bi-calendar-event text-secondary"></i>;
    }
  };

  const handleDateNavigation = (direction) => {
    const newDate = new Date(selectedDate);
    if (selectedView === 'day') {
      newDate.setDate(newDate.getDate() + (direction === 'next' ? 1 : -1));
    } else if (selectedView === 'week') {
      newDate.setDate(newDate.getDate() + (direction === 'next' ? 7 : -7));
    } else {
      newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
    }
    setSelectedDate(newDate);
  };

  const handleCreateAppointment = () => {
    console.log('New appointment:', newAppointment);
    setIsModalOpen(false);
    // Reset form
    setNewAppointment({
      title: '',
      date: '',
      startTime: '',
      endTime: '',
      description: '',
      type: 'meeting'
    });
  };

  // Format date for display
  const formatDateDisplay = (date) => {
    const options = { month: 'long', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-vh-100 bg-light p-4">
      <div className="container-fluid px-0 px-md-3">
        <div className="mb-4 mt-3 px-3 px-md-0">
          <h1 className="display-6 fw-bold mb-2">Calendar</h1>
        </div>  
        
        <div className="row g-3">
          {/* Main Calendar Section - full width on mobile, 8 columns on md+ */}
          <div className="col-12 col-md-8 order-1 order-md-0">
            <div className="card mb-4">
              <div className="card-body">
                {/* Calendar Controls - stacked on mobile, flex row on larger screens */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-2">
                  <div className="d-flex flex-column flex-md-row align-items-center gap-2 w-100 w-md-auto">
                    <Button 
                      variant="primary" 
                      onClick={() => setIsModalOpen(true)}
                      className="me-md-2 w-100 w-md-auto"
                    >
                      <i className="bi bi-plus me-2"></i>
                      New Appointment
                    </Button>
                    
                    <div className="btn-group w-100 w-md-auto" role="group">
                      <Button
                        variant={selectedView === 'day' ? 'primary' : 'outline-secondary'}
                        onClick={() => setSelectedView('day')}
                        className="flex-grow-0"
                      >
                        <span className="d-none d-md-inline">Day</span>
                        <span className="d-md-none">D</span>
                      </Button>
                      <Button
                        variant={selectedView === 'week' ? 'primary' : 'outline-secondary'}
                        onClick={() => setSelectedView('week')}
                        className="flex-grow-0"
                      >
                        <span className="d-none d-md-inline">Week</span>
                        <span className="d-md-none">W</span>
                      </Button>
                      <Button
                        variant={selectedView === 'month' ? 'primary' : 'outline-secondary'}
                        onClick={() => setSelectedView('month')}
                        className="flex-grow-0"
                      >
                        <span className="d-none d-md-inline">Month</span>
                        <span className="d-md-none">M</span>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center gap-2 w-100 justify-content-center justify-content-md-end">
                    <Button 
                      variant="outline-secondary" 
                      onClick={() => handleDateNavigation('prev')}
                      size="sm"
                    >
                      <i className="bi bi-chevron-left"></i>
                    </Button>
                    <h5 className="mb-0 text-center">{formatDateDisplay(selectedDate)}</h5>
                    <Button 
                      variant="outline-secondary" 
                      onClick={() => handleDateNavigation('next')}
                      size="sm"
                    >
                      <i className="bi bi-chevron-right"></i>
                    </Button>
                  </div>
                </div>
                
                {/* Calendar Grid */}
                <div className="border rounded" style={{ overflowX: 'auto' }}>
                  <div style={{ minWidth: '600px' }}>
                    {/* Calendar Header */}
                    <div className="row g-0 border-bottom">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                        <div key={day} className="col p-2 text-center fw-medium text-muted">
                          <span className="d-none d-sm-inline">{day}</span>
                          <span className="d-sm-none">{day[0]}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Calendar Body */}
                    <div className="row g-0">
                      {Array.from({ length: 35 }).map((_, index) => (
                        <div 
                          key={index} 
                          className="col p-1 p-sm-2 border-end border-bottom" 
                          style={{ 
                            minHeight: selectedView === 'month' ? '80px' : '120px',
                            fontSize: '0.8rem'
                          }}
                        >
                          <span className={`text-muted small ${index < 7 ? 'd-block' : 'd-none d-sm-block'}`}>
                            {index + 1}
                          </span>
                          {index === 6 && (
                            <div className="mt-1 mt-sm-2">
                              <div className="bg-primary bg-opacity-10 text-primary p-1 p-sm-2 rounded mb-1 mb-sm-2">
                                <div className="fw-medium">Client Meeting</div>
                                <div className="small">10:00 - 11:00</div>
                              </div>
                              <div className="bg-danger bg-opacity-10 text-danger p-1 p-sm-2 rounded">
                                <div className="fw-medium">Court Hearing</div>
                                <div className="small">14:00 - 16:00</div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Sidebar - full width on mobile, 4 columns on md+ */}
          <div className="col-12 col-md-4 order-0 order-md-1">
            {/* Staff Availability */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-between align-items-center">
                  Staff Availability
                  <Button 
                    variant="link" 
                    className="p-0 text-muted d-md-none"
                    onClick={() => {/* Add toggle functionality if needed */}}
                  >
                    <i className="bi bi-chevron-down"></i>
                  </Button>
                </h5>
                <div className="list-group list-group-flush">
                  {staffMembers.map((staff) => (
                    <div key={staff.id} className="list-group-item d-flex justify-content-between align-items-center py-2">
                      <div className="d-flex align-items-center text-truncate">
                        <span className={`me-2 d-inline-block rounded-circle ${staff.status === 'available' ? 'bg-success' : staff.status === 'busy' ? 'bg-warning' : 'bg-danger'}`} style={{ width: '10px', height: '10px', minWidth: '10px' }}></span>
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
            <div className="card">
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-between align-items-center">
                  Upcoming Reminders
                  <Button 
                    variant="link" 
                    className="p-0 text-muted d-md-none"
                    onClick={() => {/* Add toggle functionality if needed */}}
                  >
                    <i className="bi bi-chevron-down"></i>
                  </Button>
                </h5>
                <div className="list-group">
                  {upcomingReminders.map((reminder) => (
                    <div key={reminder.id} className="list-group-item py-2">
                      <div className="d-flex align-items-center">
                        <div className="me-2 me-sm-3">
                          {getReminderIcon(reminder.type)}
                        </div>
                        <div className="flex-grow-1 text-truncate">
                          <div className="fw-medium text-truncate">{reminder.title}</div>
                          <div className="text-muted small">{reminder.time}</div>
                        </div>
                        <Button variant="link" className="text-muted p-0 ms-2">
                          <i className="bi bi-three-dots-vertical"></i>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* New Appointment Modal - responsive by default */}
      <Modal className='mt-5' show={isModalOpen} onHide={() => setIsModalOpen(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>New Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={newAppointment.title}
                onChange={(e) => setNewAppointment({...newAppointment, title: e.target.value})}
                placeholder="Enter appointment title"
              />
            </Form.Group>
            
            <Row className="mb-3">
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={newAppointment.date}
                    onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Type</Form.Label>
                  <Form.Select
                    value={newAppointment.type}
                    onChange={(e) => setNewAppointment({...newAppointment, type: e.target.value})}
                  >
                    <option value="meeting">Meeting</option>
                    <option value="hearing">Hearing</option>
                    <option value="deadline">Deadline</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            
            <Row className="mb-3">
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Start Time</Form.Label>
                  <Form.Control
                    type="time"
                    value={newAppointment.startTime}
                    onChange={(e) => setNewAppointment({...newAppointment, startTime: e.target.value})}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>End Time</Form.Label>
                  <Form.Control
                    type="time"
                    value={newAppointment.endTime}
                    onChange={(e) => setNewAppointment({...newAppointment, endTime: e.target.value})}
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newAppointment.description}
                onChange={(e) => setNewAppointment({...newAppointment, description: e.target.value})}
                placeholder="Enter appointment description"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCreateAppointment}>
            Create Appointment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Calendar;