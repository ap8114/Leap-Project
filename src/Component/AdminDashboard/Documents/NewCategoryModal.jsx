// NewCategoryModal.jsx
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const NewCategoryModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Create a new category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="categoryName">
            <Form.Label>Category name</Form.Label>
            <Form.Control type="text" placeholder="Enter category name" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Save</Button>
        <Button variant="outline-secondary" onClick={onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewCategoryModal;
