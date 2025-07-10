import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const ExportModal = ({ show, onHide }) => {
  const [dateOption, setDateOption] = useState('all');

  return (
    <Modal show={show} onHide={onHide} size="xl" fullscreen>
      <Modal.Header closeButton>
        <Modal.Title>Export transactions</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          {/* Bank Account */}
          <Form.Group className="mb-4" controlId="bankAccount">
            <Form.Label>Bank Account</Form.Label>
            <Form.Select>
              <option>Select an Option</option>
              <option>Account A</option>
              <option>Account B</option>
            </Form.Select>
          </Form.Group>

          {/* Date Range */}
          <div className="mb-4">
            <h6 className="fw-semibold mb-2">Date Range</h6>
            <Form.Check
              type="radio"
              id="allDates"
              name="dateOption"
              label="All transactions across all dates"
              checked={dateOption === 'all'}
              onChange={() => setDateOption('all')}
              className="mb-2"
            />
            <Form.Check
              type="radio"
              id="customRange"
              name="dateOption"
              label={
                <Row className="mt-2">
                  <Col md={3}>
                    <Form.Control type="date" disabled={dateOption !== 'custom'} />
                  </Col>
                  <Col md="auto" className="d-flex align-items-center">
                    To
                  </Col>
                  <Col md={3}>
                    <Form.Control type="date" disabled={dateOption !== 'custom'} />
                  </Col>
                </Row>
              }
              checked={dateOption === 'custom'}
              onChange={() => setDateOption('custom')}
            />
          </div>

          {/* Export Format */}
          <div className="mb-4">
            <h6 className="fw-semibold mb-2">Export Format</h6>
            <p className="text-muted small mb-2">
              You may also want to view your{' '}
              <a href="#" className="text-primary text-decoration-none">
                Quickbooks Export Options
              </a>.
            </p>
            <Form.Select>
              <option>Quickbooks IIF</option>
              <option>CSV</option>
              <option>PDF</option>
            </Form.Select>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 d-flex gap-3">
            <Button variant="primary">Export Transactions</Button>
            <Button variant="link" className="text-decoration-none text-muted" onClick={onHide}>
              Cancel
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ExportModal;
