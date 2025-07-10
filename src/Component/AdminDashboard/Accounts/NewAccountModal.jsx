import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const NewAccountModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="xl" fullscreen>
      <Modal.Header closeButton>
        <Modal.Title>Create new bank account</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Account type <span className="text-danger">*</span></Form.Label>
              <Form.Select>
                <option>Select an account type...</option>
                <option>Checking</option>
                <option>Savings</option>
                <option>Trust</option>
              </Form.Select>
            </Col>
            <Col md={6}>
              <Form.Label>Account name <span className="text-danger">*</span></Form.Label>
              <Form.Control type="text" placeholder="Enter account name" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Account number</Form.Label>
              <Form.Control type="text" />
            </Col>
            <Col md={6}>
              <Form.Label>Transit number</Form.Label>
              <Form.Control type="text" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Account holder</Form.Label>
              <Form.Control type="text" />
            </Col>
            <Col md={6}>
              <Form.Label>Institution</Form.Label>
              <Form.Control type="text" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Domicile branch</Form.Label>
              <Form.Control type="text" />
              <Form.Text className="text-muted">
                This is the specific branch of the institution where the account is held.
              </Form.Text>
            </Col>
            <Col md={6}>
              <Form.Label>Swift</Form.Label>
              <Form.Control type="text" />
              <Form.Text className="text-muted">
                This is a code for facilitating wire transfers via Society for Worldwide Interbank Financial Telecommunication.
              </Form.Text>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Currency</Form.Label>
              <Form.Select>
                <option>USD ($)</option>
                <option>INR (₹)</option>
                <option>EUR (€)</option>
              </Form.Select>
              <Form.Text className="text-muted">
                This is the native holding currency of the account.
              </Form.Text>
            </Col>
            <Col md={6}>
              <Form.Label>Opening balance</Form.Label>
              <div className="input-group">
                <span className="input-group-text">$</span>
                <Form.Control type="number" placeholder="0.00" />
                <span className="input-group-text">USD</span>
              </div>
              <Form.Text className="text-muted">
                Once the bank account is created, you can use transactions to make further changes to your balance.
              </Form.Text>
            </Col>
          </Row>

          <Form.Group className="mb-4">
            <Form.Check 
              type="checkbox" 
              label="Show this bank account first when viewing the transactions tab of a matter or contact" 
            />
          </Form.Group>

          <div className="d-flex gap-2">
            <Button variant="primary">Create New Bank Account</Button>
            <Button variant="secondary" onClick={onHide}>Cancel</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NewAccountModal;
