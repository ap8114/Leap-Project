import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddClientModal = ({ show, onHide, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    firmSize: '',
    notes: ''
  });

  const [selectedFirmSize, setSelectedFirmSize] = useState('Select firm size');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFirmSizeSelect = (size, displayText) => {
    setFormData(prev => ({ ...prev, firmSize: size }));
    setSelectedFirmSize(displayText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const initials = formData.name.split(' ').map(n => n[0]).join('').toUpperCase();
    const newClient = {
      ...formData,
      initials,
      status: 'active',
      color: 'primary'
    };
    onSave(newClient);
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add New Client</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  required
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </Form.Group>
            </div>
          </div>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Firm Size</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" className="w-100 text-start">
                {selectedFirmSize}
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-100">
                <Dropdown.Item onClick={() => handleFirmSizeSelect('solo', 'Solo Practice')}>
                  Solo Practice
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleFirmSizeSelect('small', 'Small (2-9 attorneys)')}>
                  Small (2-9 attorneys)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleFirmSizeSelect('medium', 'Medium (10-49 attorneys)')}>
                  Medium (10-49 attorneys)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleFirmSizeSelect('large', 'Large (50+ attorneys)')}>
                  Large (50+ attorneys)
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>File Upload</Form.Label>
            <div className="border border-2 border-dashed rounded p-4 text-center">
              <i className="bi bi-cloud-upload fs-1 text-muted mb-2"></i>
              <p className="text-muted mb-2">
                Drag and drop files here, or click to browse
              </p>
              <Button variant="link" className="text-primary">
                Browse Files
              </Button>
              <Form.Control type="file" className="d-none" />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Add any additional notes about the client..."
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save Client
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddClientModal;