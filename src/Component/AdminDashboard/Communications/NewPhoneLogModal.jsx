import React from "react";
import { Modal, Button, Form, Row, Col, InputGroup } from "react-bootstrap";

const NewPhoneLogModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>New phone log</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Matter</Form.Label>
              <InputGroup>
                <Form.Control type="text" placeholder="Find a matter" />
                <Button variant="outline-secondary">▼</Button>
              </InputGroup>
            </Col>

            <Col md={3}>
              <Form.Label>Date and time <span className="text-danger">*</span></Form.Label>
              <Form.Control type="date" />
            </Col>

            <Col md={3} className="mt-md-0 mt-2">
              <Form.Label>&nbsp;</Form.Label>
              <Form.Control type="time" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>From</Form.Label>
              <Form.Control type="text" placeholder="Find a user or contact" />
            </Col>
            <Col md={6}>
              <Form.Label>To</Form.Label>
              <Form.Control type="text" value="john smith" readOnly />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Subject <span className="text-danger">*</span></Form.Label>
            <Form.Control type="text" placeholder="Enter subject" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Body <span className="text-danger">*</span></Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter body" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Recorded time</Form.Label>
            <Row>
              <Col md={6}>
                <Form.Control type="text" placeholder="1h 12m, 1:12..." />
              </Col>
              <Col md={6}>
                <Button variant="outline-secondary" className="w-100">
                  ▶️ 00:00:00
                </Button>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Form.Label>Notifications</Form.Label>
            <Form.Control type="text" value="john smith" readOnly />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="custom">
          Save phone log
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewPhoneLogModal;
