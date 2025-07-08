import React, { useRef } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

const Settings = () => {
  const logoInputRef = useRef(null);

  const handleLogoClick = () => {
    if (logoInputRef.current) {
      logoInputRef.current.click();
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Selected file:', file);
    }
  };

  return (
    <div className="p-4">
      <h1 className="display-6 fw-bold mb-2">Settings</h1>

      {/* Firm Information */}
      <div className="border rounded bg-light p-4 mb-4">
        <h5 className="mb-3">Firm Information</h5>
        <div className="row">
          {/* Upload Logo */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <div className="border rounded bg-white p-3 h-100">
              <p className="mt-5 fw-semibold">Upload Logo</p>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={handleLogoClick}
              >
                Click to Upload Logo
              </button>
              <input
                type="file"
                ref={logoInputRef}
                className="d-none"
                onChange={handleLogoUpload}
              />
            </div>
          </div>

          {/* Company Info */}
          <div className="col-md-8">
            <div className="mb-3">
              <label htmlFor="companyName" className="form-label">
                Company Name
              </label>
              <input type="text" id="companyName" className="form-control" />
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="companyEmail" className="form-label">
                    Email Address
                  </label>
                  <input type="email" id="companyEmail" className="form-control" />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="contactNumber" className="form-label">
                    Contact Number
                  </label>
                  <input type="text" id="contactNumber" className="form-control" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Email & Notification Settings */}
      <div className="border rounded bg-light p-4 mb-4">
        <h5 className="mb-3">Email & Notification Settings</h5>
        <Row className="mb-3">
          <Col>
            <Form.Check
              type="switch"
              id="email-notifications"
              label="Email Notifications"
            />
          </Col>
          <Col>
            <Form.Check
              type="switch"
              id="weekly-summary"
              label="Weekly Summary"
            />
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Email Frequency</Form.Label>
          <Form.Select>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </Form.Select>
        </Form.Group>
      </div>

      {/* Document Template Setup */}
      <div className="border rounded bg-light p-4 mb-4">
        <h5 className="mb-3">Document Template Setup</h5>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Default Template</Form.Label>
              <Form.Select>
                <option>Standard</option>
                <option>Advanced</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>File Naming Convention</Form.Label>
              <Form.Control type="text" placeholder="e.g. [Client]-[Date]-[Type]" />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="outline-primary">Upload Template</Button>
      </div>

      {/* Basic Preferences */}
      <div className="border rounded bg-light p-4 mb-4">
        <h5 className="mb-3">Basic Preferences</h5>
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Time Format</Form.Label>
              <Form.Select>
                <option>12-hour (AM/PM)</option>
                <option>24-hour</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Currency</Form.Label>
              <Form.Select>
                <option>USD ($)</option>
                <option>INR (₹)</option>
                <option>EUR (€)</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Language</Form.Label>
              <Form.Select>
                <option>English</option>
                <option>Hindi</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </div>

      {/* Save Button */}
      <div className="text-center">
        <Button variant="primary" size="lg">
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default Settings;
