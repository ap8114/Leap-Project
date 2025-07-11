import React from "react";
import { Modal, Button, Form, InputGroup, Dropdown } from "react-bootstrap";

const NewClientPortalModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="fw-semibold">New client portal</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label className="fw-medium">
            Select matter <span className="text-danger">*</span>
          </Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Find a matter"
            />
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" />
              <Dropdown.Menu>
                <Dropdown.Item>Example Matter 1</Dropdown.Item>
                <Dropdown.Item>Example Matter 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </InputGroup>
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary">
          Create client portal
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewClientPortalModal;
