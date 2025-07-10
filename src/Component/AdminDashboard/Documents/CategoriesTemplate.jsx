import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col, Tab, Nav, Button, Form, Table
} from 'react-bootstrap';
import {
  Folder, FileEarmarkPlus, ThreeDotsVertical, ChevronLeft, ChevronRight
} from 'react-bootstrap-icons';
import NewCategoryModal from './NewCategoryModal';

const categories = [
  'Agreements', 'Answers', 'Briefs', 'Closings', 'Communications', 'Complaints',
  'Contracts', 'Disclosures', 'Forms', 'Instructions', 'Letters', 'Motions', 'Offers', 'Opinions'
];

const CategoriesTemplate = () => {
  const [activeTab, setActiveTab] = useState('templates');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  // Ref for hidden file input
  const fileInputRef = useRef(null);

  // Trigger file input
  const handleNewTemplateClick = () => {
    fileInputRef.current?.click();
  };

  // Handle selected file
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`Selected file: ${file.name}`);
      // You can process the file here (e.g., upload to server)
    }
  };

  return (
    <Container fluid className="bg-light py-4 min-vh-100">
   <Row className="mb-3">
  <Col>
  <Link to="/document">
    <Button variant="link" className="text-primary d-flex align-items-center gap-1 p-0 text-decoration-none" >
      <ChevronLeft size={16} /> <span>Back to Documents</span>
    </Button>
    </Link>
  </Col>
</Row>


      <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
        <Row className="mb-3 border-bottom">
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="templates">Templates</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="categories">Categories</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>

        <Row className="bg-white rounded border">
  <Col>
    <Row className="border-bottom p-3 align-items-center justify-content-between">
      <Col xs={12} md={6}>
        <h5>{activeTab === 'templates' ? 'Document Templates' : 'Document Categories'}</h5>
      </Col>

      <Col xs={12} md={6}>
        <div className="d-flex flex-wrap justify-content-md-end align-items-center gap-2 mt-2 mt-md-0">
          <Form.Control
            type="text"
            placeholder="Filter by keyword"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="flex-grow-1"
          />
          {activeTab === 'templates' ? (
            <>
              <Button variant="primary" onClick={handleNewTemplateClick}>
                <FileEarmarkPlus className="me-1" /> New Template
              </Button>
              <Form.Control
                type="file"
                ref={fileInputRef}
                className="d-none"
                onChange={handleFileChange}
              />
            </>
          ) : (
            <Button variant="primary" onClick={() => setShowCategoryModal(true)}>
              <Folder className="me-1" /> New Category
            </Button>
          )}
        </div>
      </Col>
    </Row>

            <Tab.Content>
              <Tab.Pane eventKey="templates">
                <Table responsive hover className="mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Action</th>
                      <th>Template Name</th>
                      <th>Category</th>
                      <th>Last Edit At</th>
                      <th>Last Edited By</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Empty Table for now */}
                  </tbody>
                </Table>
                <div className="text-center text-muted py-5">
                  <i className="bi bi-file-earmark text-secondary" style={{ fontSize: '2rem' }}></i>
                  <p className="mt-2 mb-0">No results found</p>
                  <small>Try adjusting your search criteria or create a new template.</small>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="categories">
                <div className="p-3">
                  {categories.map((category, idx) => (
                    <Row key={idx} className="border-bottom py-2 d-flex justify-content-between align-items-center">
                      <Col>{category}</Col>
                      <Col xs="auto">
                        <ThreeDotsVertical className="text-muted" />
                      </Col>
                    </Row>
                  ))}
                </div>
              </Tab.Pane>
            </Tab.Content>

            <Row className="border-top p-3 d-flex justify-content-between align-items-center">
              <Col xs="auto">
                <Button variant="outline-secondary" disabled><ChevronLeft /></Button>{' '}
                <Button variant="outline-secondary" disabled><ChevronRight /></Button>
              </Col>
              <Col xs="auto">
                <small className="text-muted">No results found</small>
              </Col>
            </Row>
          </Col>
        </Row>
      </Tab.Container>

      <NewCategoryModal
        show={showCategoryModal}
        onHide={() => setShowCategoryModal(false)}
      />
    </Container>
  );
};

export default CategoriesTemplate;
