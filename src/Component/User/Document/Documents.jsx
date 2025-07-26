import React, { useState } from 'react';

import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const Documents = () => {
  const [uploadedFiles, setUploadedFiles] = useState([
    { id: 1, name: 'Contract_Agreement.pdf', uploadDate: '2024-01-15', size: '2.3 MB' },
    { id: 2, name: 'Financial_Report_Q4.xlsx', uploadDate: '2024-01-12', size: '1.8 MB' },
    { id: 3, name: 'Project_Proposal.docx', uploadDate: '2024-01-10', size: '956 KB' },
    { id: 4, name: 'Marketing_Strategy.pptx', uploadDate: '2024-01-08', size: '4.2 MB' },
  ]);

  const legalDocuments = [
    { id: 1, title: 'Terms of Service', description: 'Complete terms and conditions for service usage' },
    { id: 2, title: 'Privacy Policy', description: 'Data protection and privacy guidelines' },
    { id: 3, title: 'User Agreement', description: 'Standard user agreement and responsibilities' },
    { id: 4, title: 'Cookie Policy', description: 'Information about cookie usage and management' },
  ];

  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files) {
      console.log('Files selected:', files);
    }
  };

  const handleDeleteFile = (id) => {
    setUploadedFiles(uploadedFiles.filter(file => file.id !== id));
  };

  return (
    <div className="bg-light py-5">
      <Container>
        {/* Upload Zone */}
        <Card className="mb-5">
          <Card.Body>
            <h2 className="h4 mb-4">Upload Zone</h2>
            <div className="border border-2 border-secondary border-dashed p-5 text-center bg-light">
              <Form.Group controlId="file-upload">
                <Form.Label className="d-block">
                  <i className="fas fa-cloud-upload-alt fa-2x text-secondary mb-3"></i>
                  <div>
                    <Button variant="primary" className="mb-2">Upload Files</Button>
                    <p className="text-muted small">Drop files here or click to upload</p>
                  </div>
                </Form.Label>
                <Form.Control type="file" multiple onChange={handleFileUpload} className="d-none" />
              </Form.Group>
            </div>
          </Card.Body>
        </Card>

        {/* Document List */}
        <Card className="mb-5">
          <Card.Body>
            <h2 className="h4 mb-4">List of All Shared Docs</h2>
            {uploadedFiles.map((file, index) => (
              <div
                key={file.id}
                className={`d-flex justify-content-between align-items-center p-3 rounded ${index % 2 === 0 ? 'bg-light' : 'bg-white'} mb-2`}
              >
                <div className="d-flex align-items-center">
                  <i className="fas fa-file-alt text-secondary me-3"></i>
                  <div>
                    <h6 className="mb-0">{file.name}</h6>
                    <small className="text-muted">Uploaded on {file.uploadDate} • {file.size}</small>
                  </div>
                </div>
                <div>
                  <Button variant="success" className="me-2">
                    <i className="fas fa-download me-1"></i> Download
                  </Button>
                  <Button variant="danger" onClick={() => handleDeleteFile(file.id)}>
                    <i className="fas fa-trash me-1"></i> Delete
                  </Button>
                </div>
              </div>
            ))}
          </Card.Body>
        </Card>

        {/* Legal Documents Section */}
        <Card>
          <Card.Body>
            <h2 className="h4 mb-4">Download Legal Documents</h2>
            <Row>
              {legalDocuments.map((doc) => (
                <Col md={6} className="mb-4" key={doc.id}>
                  <Card className="h-100">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <h5 className="mb-2">{doc.title}</h5>
                          <p className="text-muted small mb-0">{doc.description}</p>
                        </div>
                        <i className="fas fa-file-contract text-secondary"></i>
                      </div>
                      <Button variant="primary" className="w-100">
                        <i className="fas fa-download me-2"></i>
                        Download Document
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Documents;
