import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CreateFolderModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Create folder</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Folder Name */}
          <Form.Group className="mb-3" controlId="folderName">
            <Form.Label>Folder name <span className="text-danger">*</span></Form.Label>
            <Form.Control type="text" placeholder="" required />
          </Form.Group>

          {/* Category */}
          <Form.Group className="mb-4" controlId="categorySelect">
            <Form.Label>Category</Form.Label>
            <Form.Select>
              <option>Find a document category</option>
              <option>Legal</option>
              <option>Finance</option>
              <option>HR</option>
            </Form.Select>
          </Form.Group>

          {/* Action Buttons */}
          <div className="d-flex gap-2 justify-content-start">
            <Button variant="custom">Create</Button>
            <Button variant="light" onClick={onHide}>Cancel</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateFolderModal;
