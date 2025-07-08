import React, { useRef } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

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
    <div className="container py-4">
      <h4 className="mb-4 fw-bold">Settings</h4>

      {/* Firm Information */}
      <div className="border rounded p-4 mb-4 bg-light">
        <h5 className="mb-3">Firm Information</h5>
        <Row className="mb-3">
          <Col md={4} className="text-center">
            <div className="border rounded p-3 bg-white">
              <p className="mb-1">Upload Logo</p>
              <Button variant="outline-secondary" size="sm" onClick={handleLogoClick}>Click to upload logo</Button>
              <Form.Control 
                type="file" 
                ref={logoInputRef} 
                style={{ display: 'none' }} 
                onChange={handleLogoUpload} 
              />
            </div>
          </Col>
          <Col md={8}>
            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      {/* Email & Notification Settings */}
      <div className="border rounded p-4 mb-4 bg-light">
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
      <div className="border rounded p-4 mb-4 bg-light">
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
      <div className="border rounded p-4 mb-4 bg-light">
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
        <Button variant="primary">Save Changes</Button>
      </div>
    </div>
  );
};

export default Settings;