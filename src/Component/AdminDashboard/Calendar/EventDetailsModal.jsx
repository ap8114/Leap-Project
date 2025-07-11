import React, { useState } from 'react';
import { Form, Button, Card, Row, Col, InputGroup, Container } from 'react-bootstrap';
import { Calendar, Clock, MapPin, Users, Type, Plus, Info } from 'react-feather';

const EventDetailsPage = () => {
  const [isAllDay, setIsAllDay] = useState(false);
  const [showRepeatOptions, setShowRepeatOptions] = useState(false);
  const [addToFirmCalendar, setAddToFirmCalendar] = useState(false);

  return (
    <div className="w-100 bg-light min-vh-100">
      {/* Top Header */}
      <div className="bg-white border-bottom py-3 px-4 d-flex justify-content-between align-items-center">
        <h5 className="mb-0 fw-semibold">New event</h5>
        <button type="button" className="btn-close" aria-label="Close"></button>
      </div>

      {/* Main Content */}
      <Container fluid className="py-4 px-4">
        <Row>
          {/* Left Column */}
          <Col lg={8}>
            <h5 className="mb-3">Event details</h5>

            {/* Title */}
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Title <span className="text-danger">*</span></Form.Label>
              <Form.Control type="text" placeholder="This field is required." required isInvalid />
              <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
            </Form.Group>

            {/* Date and Time */}
            <Form.Group className="mb-3">
              <Row className="g-2 align-items-end">
                <Col md={6}>
                  <Form.Label className="fw-bold">Start time <span className="text-danger">*</span></Form.Label>
                  <InputGroup>
                    <InputGroup.Text><Calendar size={16} /></InputGroup.Text>
                    <Form.Control type="text" defaultValue="07/07/2025" />
                  </InputGroup>
                </Col>
                <Col md={6}>
                  <InputGroup>
                    <InputGroup.Text><Clock size={16} /></InputGroup.Text>
                    <Form.Control type="text" defaultValue="6:00 PM" />
                  </InputGroup>
                </Col>
              </Row>

              <Row className="g-2 mt-3 align-items-end">
                <Col md={6}>
                  <Form.Label className="fw-bold">End time <span className="text-danger">*</span></Form.Label>
                  <InputGroup>
                    <InputGroup.Text><Calendar size={16} /></InputGroup.Text>
                    <Form.Control type="text" defaultValue="07/07/2025" />
                  </InputGroup>
                </Col>
                <Col md={6}>
                  <InputGroup>
                    <InputGroup.Text><Clock size={16} /></InputGroup.Text>
                    <Form.Control type="text" defaultValue="6:30 PM" />
                  </InputGroup>
                </Col>
              </Row>

              <div className="d-flex gap-3 mt-2">
                <Form.Check type="checkbox" label="All Day" checked={isAllDay} onChange={() => setIsAllDay(!isAllDay)} />
                <Form.Check type="checkbox" label="Repeat" checked={showRepeatOptions} onChange={() => setShowRepeatOptions(!showRepeatOptions)} />
              </div>
            </Form.Group>

            {/* Location */}
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Location</Form.Label>
              <InputGroup>
                <InputGroup.Text><MapPin size={16} /></InputGroup.Text>
                <Form.Control type="text" placeholder="Add location" />
              </InputGroup>
              <Form.Text className="text-muted">
                Connect to Zoom in your <a href="#">Settings</a> to add a video call to this event. <a href="#">Learn more</a>
              </Form.Text>
            </Form.Group>

            {/* Matter */}
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Matter</Form.Label>
              <InputGroup>
                <InputGroup.Text><Type size={16} /></InputGroup.Text>
                <Form.Control type="text" placeholder="Type in a matter name" />
              </InputGroup>
            </Form.Group>

            {/* Reminders */}
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Reminders</Form.Label>
              <Card className="border">
                <Card.Body className="p-2">
                  <Button variant="link" size="sm" className="text-decoration-none">
                    <Plus size={16} className="me-1" /> Add new reminder
                  </Button>
                </Card.Body>
              </Card>
            </Form.Group>

            {/* Calendar */}
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Save to this calendar <span className="text-danger">*</span></Form.Label>
              <Form.Select>
                <option>Kundan Kelwa</option>
              </Form.Select>
              <Form.Check
                type="checkbox"
                label="Add this event to the Firm calendar as well as the selected calendar"
                checked={addToFirmCalendar}
                onChange={() => setAddToFirmCalendar(!addToFirmCalendar)}
                className="mt-2"
              />
            </Form.Group>

            {/* Event Type */}
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Event type <Info size={14} className="ms-1 text-muted" /></Form.Label>
              <Card className="border">
                <Card.Body className="p-2">
                  <Button variant="link" size="sm" className="text-decoration-none">
                    <Plus size={16} className="me-1" /> Create event types
                  </Button>
                </Card.Body>
              </Card>
            </Form.Group>

            {/* Description */}
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Col>

          {/* Right Column: Attendees */}
          <Col lg={4}>
            <h5 className="mb-3">Invite attendees</h5>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Find firm users or contacts to invite</Form.Label>
              <InputGroup>
                <InputGroup.Text><Users size={16} /></InputGroup.Text>
                <Form.Control type="text" placeholder="Type in name" />
                <Button variant="outline-secondary" disabled>▼</Button>
              </InputGroup>
            </Form.Group>

            <Card className="border">
              <Card.Body>
                <h6 className="fw-bold">Suggested attendees</h6>
                <p className="text-muted mb-0">No suggestions at this time.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Footer Action Buttons */}
        <div className="d-flex justify-content-end mt-4">
          <Button variant="light" className="me-2 border">Cancel</Button>
          <Button variant="outline-custom" className="me-2">Save and create another</Button>
          <Button variant="custom">Save event</Button>
        </div>
      </Container>
    </div>
  );
};

export default EventDetailsPage;
