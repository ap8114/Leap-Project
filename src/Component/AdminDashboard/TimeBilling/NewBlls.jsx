import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import { ArrowLeft, ChevronDown, ChevronUp, Funnel } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const NewBills = () => {
  const [selectedTab, setSelectedTab] = useState('time');
  const [selectedClients, setSelectedClients] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="mt-4 p-4" style={{ fontSize: '14px' }}> {/* यहां मुख्य फ़ॉन्ट साइज़ सेट किया गया है */}
      {/* Back button and title */}
      <Row className="mb-4 align-items-center">
        <Col xs="auto">
         <Link to="/timebilling">
          <Button variant="secondary" className="p-2" style={{ fontSize: '14px' }}>
            
            Back to bills
          </Button>
         </Link>
        </Col>
        <Col>
          <h4 className="mb-0" style={{ fontSize: '1.25rem' }}>Select billable clients to generate new bills</h4>
        </Col>
      </Row>

      {/* Selection summary and generate button */}
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body className="py-2">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="text-muted" style={{ fontSize: '14px' }}>
                    <strong>Billable Clients selected:</strong> {selectedClients}
                  </span>
                </div>
                <div>
                  <Button variant="primary" disabled={selectedClients === 0} style={{ fontSize: '14px' }}>
                    Generate
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Filter button */}
      <Row className="mb-3">
        <Col className="text-end">
          <Button 
            variant="light" 
            onClick={() => setShowFilters(!showFilters)}
            className="d-flex align-items-center"
            style={{ fontSize: '14px' }}
          >
            <Funnel className="me-2" />
            Filters
            {showFilters ? <ChevronUp className="ms-2" /> : <ChevronDown className="ms-2" />}
          </Button>
        </Col>
      </Row>

      {/* Filters content */}
      {showFilters && (
        <div className="mb-4">
          <Card>
            <Card.Body>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontSize: '14px' }}>Client Title</Form.Label>
                    <Form.Control as="select" style={{ fontSize: '14px' }}>
                      <option>Filters</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontSize: '14px' }}>Client</Form.Label>
                    <Form.Control placeholder="Find a contact" style={{ fontSize: '14px' }} />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontSize: '14px' }}>Activities Date Range</Form.Label>
                    <Form.Control placeholder="MM/DD/YYYY" style={{ fontSize: '14px' }} />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontSize: '14px' }}>Master Custom Fields</Form.Label>
                    <div className="text-muted small" style={{ fontSize: '12px' }}>
                      Customize and export up your workflow by <a href="#">sandless.Custom</a>
                    </div>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontSize: '14px' }}>Fields</Form.Label>
                    <Form.Control as="select" style={{ fontSize: '14px' }}>
                      <option>Search</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontSize: '14px' }}>Enter search terms...</Form.Label>
                    <div className="d-flex">
                      <Form.Control style={{ fontSize: '14px' }} />
                      
                    </div>
                  </Form.Group>
                </Col>
                <Button variant="primary" className="ms-2 w-25 text-center" style={{ fontSize: '14px' }}>Search</Button>
              </Row>
            </Card.Body>
          </Card>
        </div>
      )}

      {/* Additional billable client sections */}
      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label style={{ fontSize: '14px' }}>Matter</Form.Label>
                <Form.Control placeholder="Find a matter" style={{ fontSize: '14px' }} />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label style={{ fontSize: '14px' }}>Responsible Attorney</Form.Label>
                <Form.Control placeholder="Find a firm user" style={{ fontSize: '14px' }} />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label style={{ fontSize: '14px' }}>Originating Attorney</Form.Label>
                <Form.Control placeholder="Find a firm user" style={{ fontSize: '14px' }} />
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Table header */}
      <Row className="mb-2">
        <Col>
          <div className="d-flex justify-content-between">
            <div className="fw-bold" style={{ fontSize: '14px' }}>Billable Clients</div>
            <div className="d-flex">
              <div className="fw-bold me-4" style={{ fontSize: '14px' }}>Unbilled Hours</div>
              <div className="fw-bold me-4" style={{ fontSize: '14px' }}>Amount Due</div>
              <div className="fw-bold" style={{ fontSize: '14px' }}>Amount in Trust</div>
            </div>
          </div>
        </Col>
      </Row>

      {/* Empty state */}
      <Row>
        <Col>
          <Card className="border-0">
            <Card.Body className="text-center py-5">
              <Alert variant="light" className="border">
                <p className="mb-1" style={{ fontSize: '14px' }}>No billable clients found</p>
                <p className="text-muted mb-3" style={{ fontSize: '13px' }}>
                  Track time and/or expenses spent on your clients' matter before you generate bills.
                </p>
                <Button variant="link" className="p-0" style={{ fontSize: '13px' }}>
                  Learn more about time and expense entries
                </Button>
              </Alert>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default NewBills;