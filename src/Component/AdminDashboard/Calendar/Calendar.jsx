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

  return (
    <div className="min-vh-100 bg-light ">
   
       
      <div className="container-fluid">
        
        <div className="mb-4 mt-3">
          <h1 className="display-6 fw-bold mb-2">Calendar</h1>
        
        </div>  
        <div className="row">
          {/* Main Calendar Section */}
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-body">
                {/* Calendar Controls */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="d-flex align-items-center gap-2">
                    <Button 
                      variant="primary" 
                      onClick={() => setIsModalOpen(true)}
                      className="me-2"
                    >
                      <i className="bi bi-plus me-2"></i>
                      New Appointment
                    </Button>
                    
                    <div className="btn-group" role="group">
                      <Button
                        variant={selectedView === 'day' ? 'primary' : 'outline-secondary'}
                        onClick={() => setSelectedView('day')}
                      >
                        Day
                      </Button>
                      <Button
                        variant={selectedView === 'week' ? 'primary' : 'outline-secondary'}
                        onClick={() => setSelectedView('week')}
                      >
                        Week
                      </Button>
                      <Button
                        variant={selectedView === 'month' ? 'primary' : 'outline-secondary'}
                        onClick={() => setSelectedView('month')}
                      >
                        Month
                      </Button>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center gap-2">
                    <Button 
                      variant="outline-secondary" 
                      onClick={() => handleDateNavigation('prev')}
                    >
                      <i className="bi bi-chevron-left"></i>
                    </Button>
                    <h5 className="mb-0">July 2025</h5>
                    <Button 
                      variant="outline-secondary" 
                      onClick={() => handleDateNavigation('next')}
                    >
                      <i className="bi bi-chevron-right"></i>
                    </Button>
                  </div>
                </div>
                
                {/* Calendar Grid */}
                <div className="border rounded">
                  {/* Calendar Header */}
                  <div className="row g-0 border-bottom">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                      <div key={day} className="col p-2 text-center fw-medium text-muted">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  {/* Calendar Body */}
                  <div className="row g-0">
                    {Array.from({ length: 35 }).map((_, index) => (
                      <div key={index} className="col p-2 border-end border-bottom" style={{ minHeight: '120px' }}>
                        <span className="text-muted small">{index + 1}</span>
                        {index === 6 && (
                          <div className="mt-2">
                            <div className="bg-primary bg-opacity-10 text-primary p-2 rounded mb-2">
                              <div className="fw-medium">Client Meeting</div>
                              <div className="small">10:00 AM - 11:00 AM</div>
                            </div>
                            <div className="bg-danger bg-opacity-10 text-danger p-2 rounded">
                              <div className="fw-medium">Court Hearing</div>
                              <div className="small">2:00 PM - 4:00 PM</div>
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
          
          {/* Right Sidebar */}
          <div className="col-md-4">
            {/* Staff Availability */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Staff Availability</h5>
                <div className="list-group list-group-flush">
                  {staffMembers.map((staff) => (
                    <div key={staff.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className={`me-2 d-inline-block rounded-circle ${staff.status === 'available' ? 'bg-success' : staff.status === 'busy' ? 'bg-warning' : 'bg-danger'}`} style={{ width: '10px', height: '10px' }}></span>
                        <span>{staff.name}</span>
                      </div>
                      {getStatusBadge(staff.status)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Upcoming Reminders */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Upcoming Reminders</h5>
                <div className="list-group">
                  {upcomingReminders.map((reminder) => (
                    <div key={reminder.id} className="list-group-item">
                      <div className="d-flex align-items-center">
                        <div className="me-3">
                          {getReminderIcon(reminder.type)}
                        </div>
                        <div className="flex-grow-1">
                          <div className="fw-medium">{reminder.title}</div>
                          <div className="text-muted small">{reminder.time}</div>
                        </div>
                        <Button variant="link" className="text-muted p-0">
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
      
      {/* New Appointment Modal */}
      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)} centered>
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
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={newAppointment.date}
                    onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
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
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Start Time</Form.Label>
                  <Form.Control
                    type="time"
                    value={newAppointment.startTime}
                    onChange={(e) => setNewAppointment({...newAppointment, startTime: e.target.value})}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
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