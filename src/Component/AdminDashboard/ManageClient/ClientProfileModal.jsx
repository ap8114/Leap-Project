import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ClientProfileModal = ({ client, onHide }) => {
  return (
    <Modal show={!!client} onHide={onHide} size="xl" scrollable>
      <Modal.Header closeButton>
        <Modal.Title>Client Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-lg-6">
            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className={`avatar avatar-xl bg-${client.color} text-white rounded-circle me-3`}
                  >
                    {client.initials}
                  </div>
                  <div>
                    <h4 className="mb-1">{client.name}</h4>
                    <p className="text-muted mb-1">{client.email}</p>
                    <p className="text-muted">{client.phone}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <p className="text-muted mb-1">Status:</p>
                    <span className={`badge bg-${client.status === 'active' ? 'success' : client.status === 'pending' ? 'warning' : 'danger'}`}>
                      {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                    </span>
                  </div>
                  <div className="col-6">
                    <p className="text-muted mb-1">Firm Size:</p>
                    <p className="mb-0">{client.firmSize}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Uploaded Files</h5>
                <Button variant="link" className="text-custom p-0">
                  <i className="bi bi-upload me-1"></i>Upload
                </Button>
              </div>
              <div className="card-body">
                <div className="list-group list-group-flush">
                  <div className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-filetype-pdf text-danger fs-4 me-3"></i>
                      <div>
                        <p className="mb-1">Contract Agreement.pdf</p>
                        <small className="text-muted">2.4 MB • Uploaded 2 days ago</small>
                      </div>
                    </div>
                    <div>
                      <Button variant="link" className="text-muted p-1 me-2">
                        <i className="bi bi-download"></i>
                      </Button>
                      <Button variant="link" className="text-danger p-1">
                        <i className="bi bi-trash"></i>
                      </Button>
                    </div>
                  </div>
                  <div className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-filetype-docx text-custom fs-4 me-3"></i>
                      <div>
                        <p className="mb-1">Case Summary.docx</p>
                        <small className="text-muted">1.8 MB • Uploaded 1 week ago</small>
                      </div>
                    </div>
                    <div>
                      <Button variant="link" className="text-muted p-1 me-2">
                        <i className="bi bi-download"></i>
                      </Button>
                      <Button variant="link" className="text-danger p-1">
                        <i className="bi bi-trash"></i>
                      </Button>
                    </div>
                  </div>
                  <div className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-filetype-xlsx text-success fs-4 me-3"></i>
                      <div>
                        <p className="mb-1">Financial Records.xlsx</p>
                        <small className="text-muted">3.2 MB • Uploaded 2 weeks ago</small>
                      </div>
                    </div>
                    <div>
                      <Button variant="link" className="text-muted p-1 me-2">
                        <i className="bi bi-download"></i>
                      </Button>
                      <Button variant="link" className="text-danger p-1">
                        <i className="bi bi-trash"></i>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Work Timeline</h5>
                <Button variant="link" className="text-custom p-0">
                  <i className="bi bi-plus me-1"></i>Add Entry
                </Button>
              </div>
              <div className="card-body">
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-point timeline-point-custom"></div>
                    <div className="timeline-event">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-1">Initial Consultation Completed</h6>
                        <small className="text-muted">2 hours ago</small>
                      </div>
                      <p className="mb-2 text-muted">
                        Met with client to discuss case details and legal strategy. Reviewed all provided documentation.
                      </p>
                      <small className="text-muted">by Attorney Johnson</small>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-point timeline-point-secondary"></div>
                    <div className="timeline-event">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-1">Documents Received</h6>
                        <small className="text-muted">1 day ago</small>
                      </div>
                      <p className="mb-2 text-muted">
                        Client submitted all required legal documents including contracts and financial records.
                      </p>
                      <small className="text-muted">by Legal Assistant Smith</small>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-point timeline-point-warning"></div>
                    <div className="timeline-event">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-1">Case Research Started</h6>
                        <small className="text-muted">3 days ago</small>
                      </div>
                      <p className="mb-2 text-muted">
                        Began comprehensive legal research on precedent cases and applicable statutes.
                      </p>
                      <small className="text-muted">by Attorney Johnson</small>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-point timeline-point-success"></div>
                    <div className="timeline-event">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-1">Client Onboarded</h6>
                        <small className="text-muted">1 week ago</small>
                      </div>
                      <p className="mb-2 text-muted">
                        Client successfully added to system and retainer agreement signed.
                      </p>
                      <small className="text-muted">by Office Manager Davis</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ClientProfileModal;