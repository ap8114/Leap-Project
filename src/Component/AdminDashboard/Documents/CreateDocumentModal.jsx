import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CreateDocumentModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Create document from template</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>

          {/* Document Template */}
          <Form.Group className="mb-3" controlId="documentTemplate">
            <Form.Label>Document template <span className="text-danger">*</span></Form.Label>
            <Form.Select required>
              <option>Find a document template</option>
              <option>Template A</option>
              <option>Template B</option>
            </Form.Select>
          </Form.Group>

          {/* Matter */}
          <Form.Group className="mb-3" controlId="matterSelect">
            <Form.Label>Matter <span className="text-danger">*</span></Form.Label>
            <Form.Select required>
              <option>Find a matter</option>
              <option>Matter 1</option>
              <option>Matter 2</option>
            </Form.Select>
          </Form.Group>

          {/* File Name */}
          <Form.Group className="mb-3" controlId="fileName">
            <Form.Label>File name</Form.Label>
            <Form.Control type="text" placeholder="Name your new document" />
          </Form.Group>

          {/* Checkbox */}
          <Form.Group className="mb-3" controlId="createPdf">
            <Form.Check 
              type="checkbox" 
              label="Create a PDF document" 
              defaultChecked 
            />
          </Form.Group>

          {/* Policy Info */}
          <div className="small text-muted mb-3">
            Documents made from templates are created using <a href="#" target="_blank" rel="noopener noreferrer">Nintex</a>, an authorized Clio sub-processor. 
            For further information, please refer to Clio’s 
            <a href="#" target="_blank" rel="noopener noreferrer"> Terms of Service</a>, 
            <a href="#" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>, 
            and <a href="#" target="_blank" rel="noopener noreferrer">Nintex’s Privacy Policy</a>.
          </div>

          {/* Buttons */}
          <div className="d-flex gap-2">
            <Button variant="custom">Create</Button>
            <Button variant="light" onClick={onHide}>Cancel</Button>
            <a href="#" className="align-self-center ms-auto small">Learn more about document automation</a>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateDocumentModal;
