import React from 'react';
import { Modal, Button, Container, Row, Col, Form, Accordion } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
const NewMatterForm = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} dialogClassName="modal-xxl" size="xl" centered scrollable>
      <Modal.Header closeButton>
        <Modal.Title>Create New Matter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          <Row>
            {/* Sidebar */}
            <Col md={2} className="border-end">
              <div className="d-flex flex-column gap-2">
                <a href="#">Template information</a>
                <a href="#">Matter details</a>
                <a href="#">Matter permissions</a>
                <a href="#">Matter notifications</a>
                <a href="#">Block users</a>
                <a href="#">Related contacts</a>
                <a href="#">Custom fields</a>
                <a href="#">Billing preference</a>
                <a href="#">Task lists</a>
                <a href="#">Document folders</a>
                <a href="#">Reports</a>
              </div>
            </Col>

            {/* Main Content */}
            <Col md={10}>
              <Accordion defaultActiveKey="0">
                {/* Template Info */}
                <Accordion.Item eventKey="0">
  <Accordion.Header>📘 Template information</Accordion.Header>
  <Accordion.Body>
    <div className="p-3 mb-3 border border-primary bg-light rounded text-dark">
      Enhance your process by{' '}
      <a href="/create-template" className="text-primary fw-semibold" target="_blank" rel="noopener noreferrer">
        creating a template <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} />
      </a>{' '}
      that can be applied to any matter.
    </div>

    <Form.Group className="mt-2">
      <Form.Label className="fw-semibold">Use an existing template</Form.Label>
      <Form.Select className="rounded">
        <option>Select your template</option>
      </Form.Select>
    </Form.Group>
  </Accordion.Body>
</Accordion.Item>
                {/* Matter Details */}
                <Accordion.Item eventKey="1">
                  <Accordion.Header>📘 Matter details</Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      <Row className="mb-3">
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Client *</Form.Label>
                            <Form.Control placeholder="What’s the contact’s name?" />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Matter description *</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter matter description" />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row className="mb-3">
                        <Col md={4}>
                          <Form.Group>
                            <Form.Label>Responsible attorney</Form.Label>
                            <Form.Select>
                              <option>Find a firm user</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group>
                            <Form.Label>Originating attorney</Form.Label>
                            <Form.Select>
                              <option>Find a firm user</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group>
                            <Form.Label>
                              Responsible staff <span title="This is info">ℹ️</span>
                            </Form.Label>
                            <Form.Select>
                              <option>Find a firm user</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row className="mb-3">
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Client reference number</Form.Label>
                            <Form.Control placeholder="Enter reference number" />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Location</Form.Label>
                            <Form.Control placeholder="Enter location" />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row className="mb-3">
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Practice area</Form.Label>
                            <Form.Select>
                              <option>Find a practice area</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Matter Stage</Form.Label>
                            <Form.Select>
                              <option>Find a matter stage</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row className="mb-3">
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Matter status</Form.Label>
                            <Form.Select>
                              <option>Open</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row className="mb-3">
                        <Col md={3}>
                          <Form.Group>
                            <Form.Label>Open date</Form.Label>
                            <Form.Control type="date" defaultValue="2025-07-10" />
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group>
                            <Form.Label>Closed date</Form.Label>
                            <Form.Control type="date" />
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group>
                            <Form.Label>Pending date</Form.Label>
                            <Form.Control type="date" />
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group>
                            <Form.Label>Statute of limitations date</Form.Label>
                            <Form.Control type="date" />
                            <Form.Check type="checkbox" label="Statute of limitations date satisfied" />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>

        

 
  {/* Matter Permissions */}
  <Accordion.Item eventKey="2">
    <Accordion.Header>📘 Matter permissions</Accordion.Header>
    <Accordion.Body>
      <Form>
        <Form.Label className="fw-semibold">Firm users with access <span className="text-danger">*</span></Form.Label>
        <div className="mb-2">
          <Form.Check
            type="radio"
            name="permissions"
            id="everyone"
            label="Everyone"
            defaultChecked
          />
          <Form.Check
            type="radio"
            name="permissions"
            id="specific"
            label="Specific users or groups"
          />
        </div>
      </Form>
    </Accordion.Body>
  </Accordion.Item>

  {/* Matter Notifications */}
  <Accordion.Item eventKey="3">
    <Accordion.Header>🔔 Matter notifications</Accordion.Header>
    <Accordion.Body>
      <div className="p-3 bg-light border border-primary rounded mb-3 text-dark small">
        Firm users that you select will receive notifications when the status of this matter changes or the matter is deleted.
        They will also be notified when documents are uploaded by clients and related contacts.
      </div>
      <Form.Group>
        <Form.Label className="fw-semibold">Firm user</Form.Label>
        <Form.Control placeholder="Find a firm user" />
      </Form.Group>
    </Accordion.Body>
  </Accordion.Item>

  {/* Block Users */}
  <Accordion.Item eventKey="4">
    <Accordion.Header>🔒 Block users</Accordion.Header>
    <Accordion.Body>
      <div className="p-3 bg-light border border-primary rounded mb-3 text-dark small">
        Prevent users from accessing this matter by blocking them. Blocking will override any matter permissions,
        including any groups that the users are a part of. Only admins can block a user.
      </div>
      <Form.Group>
        <Form.Label className="fw-semibold">Choose users to block</Form.Label>
        <Form.Control placeholder="Find a firm user" />
      </Form.Group>
    </Accordion.Body>
  </Accordion.Item>
























{/* Related Contacts */}
<Accordion.Item eventKey="5">
  <Accordion.Header>👤 Related contacts</Accordion.Header>
  <Accordion.Body>
    <div className="p-3 bg-light border border-primary rounded mb-3 text-dark small">
      Information for related contacts appears on the matter dashboard. These contacts will also appear in future conflict checks.
    </div>

    <Form>
      <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
        <Form.Control placeholder="What’s the contact’s name?" style={{ flex: 1 }} />
        <Form.Select style={{ width: "40px" }}>
          <option>▼</option>
        </Form.Select>
        <Form.Control placeholder="Relationship" style={{ flex: 1 }} />
        <Button variant="light" className="text-danger px-2">×</Button>
      </div>

      <div className="mb-3 d-flex align-items-center gap-2">
        <Form.Check type="checkbox" id="bill-recipient" />
        <Form.Label htmlFor="bill-recipient" className="mb-0">
          Bill recipient <span title="Bill this contact" className="text-info">ℹ️</span>
        </Form.Label>
      </div>

      <Button variant="outline-primary" className="fw-semibold">
        + Add related contact
      </Button>
    </Form>
  </Accordion.Body>
</Accordion.Item>

{/* Custom Fields */}
<Accordion.Item eventKey="6">
  <Accordion.Header>⚙️ Custom fields</Accordion.Header>
  <Accordion.Body>
    <div className="p-3 bg-light border border-primary rounded mb-3 text-dark small">
      Speed up your workflow by{' '}
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary fw-semibold">
        creating custom field sets
      </a>{' '}
      for often-used custom fields. Customize data within your template to always be visible for a Matter. <span className="text-info">ℹ️</span>
    </div>

    <Form.Group>
      <Form.Select>
        <option>Add a custom field or custom field set</option>
      </Form.Select>
    </Form.Group>
  </Accordion.Body>
</Accordion.Item>


<Accordion.Item eventKey="7">
  <Accordion.Header>💳 Billing preference</Accordion.Header>
  <Accordion.Body>
    {/* Billable Row */}
    <div className="d-flex flex-wrap justify-content-between align-items-center border border-primary rounded p-3 mb-3">
      <Form.Check
        type="checkbox"
        id="is-billable"
        label={
          <span>
            <strong>This matter is billable</strong>
            <br />
            <a
              href="#"
              className="text-primary fw-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more about billing <span className="text-info">↗</span>
            </a>
          </span>
        }
        className="me-3"
        defaultChecked
      />
      <Form.Group className="mb-0" style={{ minWidth: "180px" }}>
        <Form.Label className="fw-semibold">Billing method</Form.Label>
        <Form.Select>
          <option>Hourly</option>
          <option>Flat Fee</option>
          <option>Contingency</option>
        </Form.Select>
      </Form.Group>
    </div>

    {/* Custom billing rates */}
    <div className="mb-3">
      <h6 className="fw-semibold">Custom billing rates</h6>
      <Button variant="outline-primary" className="fw-semibold">
        + Add a custom billing rate
      </Button>
    </div>

    <hr />

    {/* Budget */}
    <div className="mb-3">
      <Form.Check
        type="checkbox"
        id="budget"
        label="Set a budget for this matter"
      />
    </div>

    {/* Split Invoice */}
    <div className="mb-3">
      <Form.Check
        type="checkbox"
        id="split-invoice"
        label="Split the invoices for this matter"
      />
    </div>

    {/* Trust balance notification */}
    <div>
      <Form.Check
        type="checkbox"
        id="trust-balance"
        label="Notify firm users when matter trust funds are low"
      />
    </div>
  </Accordion.Body>
</Accordion.Item>



<Accordion.Item eventKey="8">
  <Accordion.Header>📋 Task Lists & Documents</Accordion.Header>
  <Accordion.Body>
    {/* Task Lists Section */}
    <div className="mb-4">
      <h6 className="fw-semibold mb-3">Task lists</h6>
      <p className="text-muted mb-3">
        Automatically generate and assign tasks when this matter is created.
        <a href="#" className="text-primary fw-semibold ms-1" target="_blank" rel="noopener noreferrer">
          Learn more about using task lists <span className="text-info">↗</span>
        </a>
      </p>
      
      <Form.Check
        type="checkbox"
        id="notify-assignees"
        label="Notify assignees when these tasks are created"
        className="mb-3"
      />
      
      <hr className="my-3" />
      
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
        <Form.Group className="mb-2" style={{ minWidth: "250px" }}>
          <Form.Label className="fw-semibold">Task list</Form.Label>
          <div className="d-flex">
            <Form.Control placeholder="Find a task list" />
            <Button variant="outline-secondary" className="ms-2">
              <i className="bi bi-search"></i>
            </Button>
          </div>
        </Form.Group>
        <Button variant="outline-primary" className="fw-semibold mb-2">
          + Add task list
        </Button>
      </div>
    </div>
    
    {/* Document Folders Section */}
    <div>
      <h6 className="fw-semibold mb-3">Document folders</h6>
      <p className="text-muted mb-3">
        Create folders within this matter to keep incoming files organized.
        <a href="#" className="text-primary fw-semibold ms-1" target="_blank" rel="noopener noreferrer">
          Learn more about Clio Documents <span className="text-info">↗</span>
        </a>
      </p>
      
      <hr className="my-3" />
      
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <Form.Group className="mb-2" style={{ minWidth: "250px" }}>
          <Form.Label className="fw-semibold">Folder name</Form.Label>
          <div className="d-flex">
            <Form.Control placeholder="Category" />
            <Form.Control placeholder="Find a document category" className="ms-2" />
          </div>
        </Form.Group>
        <Button variant="outline-primary" className="fw-semibold mb-2">
          + Add a document folder
        </Button>
      </div>
    </div>
  </Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="9">
  <Accordion.Header>📁 Documents & Reports</Accordion.Header>
  <Accordion.Body>
    {/* Document Folders Section */}
    <div className="mb-4">
      <h6 className="fw-semibold mb-3">Document folders</h6>
      <p className="text-muted mb-3">
        Create folders within this matter to keep incoming files organized.
        <a href="#" className="text-primary fw-semibold ms-1" target="_blank" rel="noopener noreferrer">
          Learn more about Clio Documents <span className="text-info">↗</span>
        </a>
      </p>
      
      <div className="mb-3">
        <Form.Label className="fw-semibold">Folder name</Form.Label>
        <div className="d-flex flex-wrap gap-2">
          <Form.Select style={{ minWidth: "120px" }}>
            <option>Category</option>
          </Form.Select>
          <Form.Select style={{ minWidth: "200px" }}>
            <option>Find a document category</option>
          </Form.Select>
        </div>
      </div>
      
      <Button variant="outline-primary" className="fw-semibold">
        + Add a document folder
      </Button>
      
      <hr className="my-4" />
    </div>
    
    {/* Reports Section */}
    <div>
      <h6 className="fw-semibold mb-3">Reports</h6>
      <p className="text-muted mb-3">
        Attorney allocation: Select the percentage of collected funds to allocate to originating and/or responsible attorneys. Previously generated reports will not be affected by updated attorney allocations.
        <a href="#" className="text-primary fw-semibold ms-1" target="_blank" rel="noopener noreferrer">
          Learn more about attorney allocation <span className="text-info">↗</span>
        </a>
      </p>
      
      <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
        <div>
          <Form.Label className="fw-semibold">Originating attorney allocation</Form.Label>
          <div className="d-flex align-items-center">
            <Form.Control type="number" min="0" max="100" defaultValue="0" style={{ width: "70px" }} />
            <span className="ms-2">%</span>
          </div>
        </div>
        
        <div>
          <Form.Label className="fw-semibold">Responsible attorney allocation</Form.Label>
          <div className="d-flex align-items-center">
            <Form.Control type="number" min="0" max="100" defaultValue="0" style={{ width: "70px" }} />
            <span className="ms-2">%</span>
          </div>
        </div>
      </div>
      
      <Form.Check
        type="checkbox"
        id="use-firm-settings"
        label="Use firm settings"
        className="mt-3"
      />
    </div>
  </Accordion.Body>
</Accordion.Item>









              </Accordion>




            </Col>


          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary">Save Matter</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewMatterForm;
