import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddEmailAliasModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Email Alias</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* User Dropdown */}
          <Form.Group className="mb-3">
            <Form.Label>User</Form.Label>
            <Form.Select>
              <option>Me</option>
              <option>Other User</option>
            </Form.Select>
          </Form.Group>

          {/* Email Input */}
          <Form.Group className="mb-3">
            <div className="d-flex justify-content-between">
              <Form.Label>Email</Form.Label>
              <span className="text-success small">required</span>
            </div>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          {/* Buttons */}
          <div className="d-flex align-items-center gap-2">
            <Button variant="custom" type="submit">
              Save
            </Button>
            <Button variant="link" onClick={handleClose} className="text-decoration-none">
              Cancel
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddEmailAliasModal;
