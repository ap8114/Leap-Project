import React from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";

const NewInternalMessageModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>New internal message thread</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Alert variant="info">
          Starting a new internal message thread with contacts will invite them to use 
          <a href="#"> Clio for Co-Counsel</a>, a secure web portal intended for co-counsels 
          to collaborate with your firm. If you want to communicate with your clients via 
          <a href="#"> Clio for Clients</a>, you can use the <a href="#">client portals</a> feature.
        </Alert>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>To</Form.Label>
            <Form.Control type="text" placeholder="Find a user or contact" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Matter</Form.Label>
            <Form.Control type="text" placeholder="Find a matter" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Thread subject <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Message <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>

          <Alert variant="warning" className="mb-0">
            <i className="bi bi-exclamation-triangle-fill"></i>
            &nbsp; Attachments are only available for messages connected to a matter.
          </Alert>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="custom">
          Send message
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewInternalMessageModal;
