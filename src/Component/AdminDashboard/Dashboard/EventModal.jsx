import React, { useState } from 'react';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';
import { X, Calendar, Clock, ChevronDown, InfoCircle } from 'react-bootstrap-icons';

const EventModal = ({ show, handleClose }) => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('10/18/2025');
  const [startTime, setStartTime] = useState('4:00 PM');
  const [endDate, setEndDate] = useState('10/18/2025');
  const [endTime, setEndTime] = useState('4:30 PM');
  const [allDay, setAllDay] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [location, setLocation] = useState('');
  const [inviteType, setInviteType] = useState('Type to invite...');
  const [matter, setMatter] = useState('Type in a matter name');
  const [addReminder, setAddReminder] = useState(false);
  const [calendar, setCalendar] = useState('email gender');
  const [addToFirmCalendar, setAddToFirmCalendar] = useState(false);
  const [eventType, setEventType] = useState('meeting');
  const [description, setDescription] = useState('');

  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      dialogClassName="modal-fullscreen" 
      centered
    >
      <Modal.Header className="border-bottom-0 pb-0 px-4 pt-4">
        <Modal.Title className="fs-6">New event</Modal.Title>
        <Button variant="link" onClick={handleClose} className="p-0">
          <X size={20} />
        </Button>
      </Modal.Header>
      
      <Modal.Body className="p-0">
        <div className="d-flex flex-column flex-xl-row h-100">
          {/* Event Details Section - Takes full width on mobile, 2/3 on desktop */}
          <div className="flex-grow-1 p-4" style={{ minHeight: 'calc(100vh - 180px)' }}>
            <h6 className="mb-4 fw-medium">Event details</h6>
            
            {/* Title */}
            <Form.Group className="mb-4">
              <Form.Label>
                Title <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                size="lg"
              />
              <Form.Text className="text-primary">This field is required</Form.Text>
            </Form.Group>

            {/* Start Time */}
            <Form.Group className="mb-4">
              <Form.Label>
                Start time <span className="text-danger">*</span>
              </Form.Label>
              <Row className="g-2">
                <Col xs={6}>
                  <div className="position-relative">
                    <Form.Control 
                      type="text"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      size="lg"
                    />
                    <Calendar className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted" size={18} />
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="position-relative">
                    <Form.Control 
                      type="text"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      size="lg"
                    />
                    <Clock className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted" size={18} />
                  </div>
                </Col>
              </Row>
            </Form.Group>

            {/* End Time */}
            <Form.Group className="mb-4">
              <Form.Label>
                End time <span className="text-danger">*</span>
              </Form.Label>
              <Row className="g-2">
                <Col xs={6}>
                  <div className="position-relative">
                    <Form.Control 
                      type="text"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      size="lg"
                    />
                    <Calendar className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted" size={18} />
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="position-relative">
                    <Form.Control 
                      type="text"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      size="lg"
                    />
                    <Clock className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted" size={18} />
                  </div>
                </Col>
              </Row>
            </Form.Group>

            {/* All Day and Repeat */}
            <Form.Group className="mb-4">
              <div className="d-flex gap-4">
                <Form.Check 
                  type="checkbox"
                  id="allDay"
                  label="All Day"
                  checked={allDay}
                  onChange={(e) => setAllDay(e.target.checked)}
                  className="fs-5"
                />
                <Form.Check 
                  type="checkbox"
                  id="repeat"
                  label="Repeat"
                  checked={repeat}
                  onChange={(e) => setRepeat(e.target.checked)}
                  className="fs-5"
                />
              </div>
            </Form.Group>

            {/* Location */}
            <Form.Group className="mb-4">
              <Form.Label>Location</Form.Label>
              <Form.Control 
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                size="lg"
              />
            </Form.Group>

            {/* Zoom Integration */}
            <div className="mb-4">
              <p className="text-muted fs-6">
                Connect to Zoom in your <a href="#" className="text-primary">settings</a> to add a video call to this event. <a href="#" className="text-primary">Learn more</a>
              </p>
            </div>

            {/* Matter */}
            <Form.Group className="mb-4">
              <Form.Label>Matter</Form.Label>
              <div className="position-relative">
                <Button variant="outline-secondary" className="w-100 text-start text-muted py-2 fs-6">
                  {matter}
                </Button>
                <ChevronDown className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted" size={18} />
              </div>
            </Form.Group>

            {/* Reminders */}
            <Form.Group className="mb-4">
              <Form.Label>Reminders</Form.Label>
              <Form.Check 
                type="checkbox"
                id="addReminder"
                label="Add new reminder"
                checked={addReminder}
                onChange={(e) => setAddReminder(e.target.checked)}
                className="fs-5"
              />
            </Form.Group>

            {/* Save to Calendar */}
            <Form.Group className="mb-4">
              <Form.Label>
                Save to this calendar <span className="text-danger">*</span>
              </Form.Label>
              <div className="position-relative mb-2">
                <Button variant="outline-secondary" className="w-100 text-start py-2 fs-6">
                  {calendar}
                </Button>
                <ChevronDown className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted" size={18} />
              </div>
              <Form.Check 
                type="checkbox"
                id="addToFirmCalendar"
                label="Add this event to the firm calendar as well as the selected calendar"
                checked={addToFirmCalendar}
                onChange={(e) => setAddToFirmCalendar(e.target.checked)}
                className="fs-5"
              />
            </Form.Group>

            {/* Event Type */}
            <Form.Group className="mb-4">
              <Form.Label>
                Event type <InfoCircle className="text-primary ms-1" />
              </Form.Label>
              <Form.Check 
                type="radio"
                id="meeting"
                name="eventType"
                label="Create event types"
                value="meeting"
                checked={eventType === 'meeting'}
                onChange={(e) => setEventType(e.target.value)}
                className="text-primary fs-5"
              />
            </Form.Group>

            {/* Description */}
            <Form.Group className="mb-4">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                as="textarea"
                rows={6}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                size="lg"
              />
            </Form.Group>
          </div>

          {/* Invite Attendees Section - Fixed width right sidebar */}
          <div className="p-4 bg-light border-start" style={{ width: '400px' }}>
            <h6 className="mb-4 fw-medium">Invite attendees</h6>
            
            <Form.Group className="mb-4">
              <Form.Label className="small text-muted">Find firm users or contacts to invite</Form.Label>
              <div className="position-relative">
                <Button variant="outline-secondary" className="w-100 text-start text-muted py-2 fs-6">
                  {inviteType}
                </Button>
                <ChevronDown className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted" size={18} />
              </div>
            </Form.Group>

            <div>
              <h6 className="small fw-medium mb-2">Suggested attendees</h6>
              <p className="small text-muted">No suggestions at this time.</p>
            </div>
          </div>
        </div>
      </Modal.Body>
      
      <Modal.Footer className="border-top-0 bg-light px-4 py-3">
        <Button variant="primary" size="lg" className="px-4 py-2 fs-6">
          Save event
        </Button>
        <Button variant="outline-secondary" size="lg" className="px-4 py-2 fs-6">
          Save and create another
        </Button>
        <Button variant="link" size="lg" className="px-4 py-2 text-muted fs-6" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EventModal;