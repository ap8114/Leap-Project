import React, { useState } from 'react';
import { Modal, Button, Form, Card, Row, Col, Container, Tab, Tabs, Nav, InputGroup, FormControl, Badge, Image } from 'react-bootstrap';
import { FaSearch, FaFilter, FaTags, FaUpload, FaFileAlt, FaBook, FaSignature, FaThLarge, FaList, FaEye, FaDownload, FaShare, FaTimes } from 'react-icons/fa';

// Example Template Object
const template = {
  name: "Client Agreement",
  category: "Legal",
  id: 1,
  description: "Standard client agreement template.",
  imageUrl: "/images/template1.png"
};

// Example Document Object
const document = {
  name: "Agreement2025.pdf",
  date: "2025-07-07",
  type: "PDF",
  tags: ["contract", "signed"],
  id: 12,
  imageUrl: "/images/doc-preview.png"
};

// Example Activity Object
const activity = {
  type: "upload", // 'upload' | 'edit' | 'sign'
  document: "Agreement2025.pdf",
  user: "John Doe",
  timestamp: "2025-07-07T10:30:00"
};


const Document = () => {
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [templateSearch, setTemplateSearch] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showBriefTab, setShowBriefTab] = useState(false);
  const [showESignTab, setShowESignTab] = useState(false);
  const [briefTitle, setBriefTitle] = useState('');
  const [briefDescription, setBriefDescription] = useState('');
  const [signName, setSignName] = useState('');
  const [signTitle, setSignTitle] = useState('');
  const [signature, setSignature] = useState('');

  const templates = [
    {
      name: 'Contract Template',
      category: 'Legal',
      id: 1,
      description: 'Standard contract template with customizable terms and conditions',
      imageUrl: 'https://readdy.ai/api/search-image?query=professional%20legal%20document%20template%20with%20clean%20layout%20contract%20style%20design%20business%20paper%20on%20white%20background%20perfect%20for%20corporate%20presentation&width=300&height=200&seq=temp1&orientation=landscape'
    },
    {
      name: 'Invoice Template',
      category: 'Finance',
      id: 2,
      description: 'Professional invoice template with automatic calculations',
      imageUrl: 'https://readdy.ai/api/search-image?query=modern%20invoice%20template%20design%20with%20clean%20layout%20financial%20document%20style%20business%20paper%20on%20white%20background%20perfect%20for%20corporate%20billing&width=300&height=200&seq=temp2&orientation=landscape'
    },
    {
      name: 'NDA Template',
      category: 'Legal',
      id: 3,
      description: 'Comprehensive non-disclosure agreement template',
      imageUrl: 'https://readdy.ai/api/search-image?query=confidential%20legal%20document%20template%20with%20professional%20layout%20non%20disclosure%20agreement%20style%20paper%20on%20white%20background%20perfect%20for%20business%20contracts&width=300&height=200&seq=temp3&orientation=landscape'
    },
    {
      name: 'Report Template',
      category: 'Business',
      id: 4,
      description: 'Business report template with pre-formatted sections',
      imageUrl: 'https://readdy.ai/api/search-image?query=business%20report%20template%20with%20data%20visualization%20clean%20modern%20layout%20professional%20document%20style%20on%20white%20background%20perfect%20for%20corporate%20reports&width=300&height=200&seq=temp4&orientation=landscape'
    },
    {
      name: 'Proposal Template',
      category: 'Sales',
      id: 5,
      description: 'Sales proposal template with compelling layout',
      imageUrl: 'https://readdy.ai/api/search-image?query=sales%20proposal%20template%20design%20with%20modern%20layout%20marketing%20document%20style%20business%20paper%20on%20white%20background%20perfect%20for%20corporate%20proposals&width=300&height=200&seq=temp5&orientation=landscape'
    },
  ];


  const documents = [
    {
      name: 'Business Contract 2025',
      date: '2025-07-07',
      type: 'PDF',
      tags: ['Contract', 'Legal'],
      id: 1,
      imageUrl: 'https://readdy.ai/api/search-image?query=professional%20business%20document%20with%20clean%20modern%20design%20on%20white%20background%20featuring%20minimalist%20layout%20and%20typography%20perfect%20for%20corporate%20presentation&width=400&height=300&seq=doc1&orientation=landscape'
    },
    {
      name: 'Project Proposal',
      date: '2025-07-06',
      type: 'DOCX',
      tags: ['Proposal', 'Business'],
      id: 2,
      imageUrl: 'https://readdy.ai/api/search-image?query=elegant%20business%20proposal%20document%20with%20modern%20layout%20and%20professional%20design%20elements%20on%20clean%20white%20background%20perfect%20for%20corporate%20presentation&width=400&height=300&seq=doc2&orientation=landscape'
    },
    {
      name: 'Financial Report Q2',
      date: '2025-07-05',
      type: 'XLSX',
      tags: ['Finance', 'Report'],
      id: 3,
      imageUrl: 'https://readdy.ai/api/search-image?query=financial%20report%20document%20with%20charts%20and%20graphs%20layout%20on%20clean%20white%20background%20professional%20business%20style%20perfect%20for%20corporate%20presentation&width=400&height=300&seq=doc3&orientation=landscape'
    }
  ];

  const recentActivities = [
    { type: 'upload', document: 'Sales Report.pdf', user: 'John Doe', timestamp: '2 hours ago' },
    { type: 'edit', document: 'Meeting Minutes.docx', user: 'Jane Smith', timestamp: '3 hours ago' },
    { type: 'sign', document: 'Partner Agreement.pdf', user: 'Mike Johnson', timestamp: '5 hours ago' }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'upload':
        return 'bg-success text-white';
      case 'edit':
        return 'bg-primary text-white';
      case 'sign':
        return 'bg-info text-white';
      default:
        return 'bg-secondary text-white';
    }
  };


  return (
    <div className="p-3">

      <div className="">
        <div className="">
          <h1 className="display-6 fw-bold">Documents</h1>
        </div>
        {/* Search and Filters */}
        <div className="row g-2 align-items-center">
          {/* Search Input */}
          <div className="col-md-8 col-12">
            <input
              type="text"
              className="form-control mt-4"
              placeholder="Search..."
              aria-label="Search"
            />
          </div>

          {/* Filter Buttons */}
          <div className="col-md-4 col-12 d-flex gap-2">
            <button className="btn btn-light d-flex align-items-center gap-2 p-2">
              <FaFilter /> Filter
            </button>
            <button className="btn btn-light d-flex align-items-center gap-2 p-2">
              <FaTags /> Tags
            </button>
            <button className="btn btn-link text-secondary text-nowrap">
              Clear Filters
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="d-flex gap-2 mb-4 flex-wrap">
          <Button variant="primary" className="d-flex align-items-center gap-2">
            <FaUpload /> Upload Document
          </Button>
          <Button
            variant="outline-primary"
            className="d-flex align-items-center gap-2"
            onClick={() => setShowTemplateModal(true)}
          >
            <FaFileAlt /> Create from Template
          </Button>
          <Button
            variant={showBriefTab ? 'primary' : 'outline-primary'}
            className="d-flex align-items-center gap-2"
            onClick={() => {
              setShowBriefTab(true);
              setShowESignTab(false);
            }}
          >
            <FaBook /> Generate Brief
          </Button>
          <Button
            variant={showESignTab ? 'primary' : 'outline-primary'}
            className="d-flex align-items-center gap-2"
            onClick={() => {
              setShowESignTab(true);
              setShowBriefTab(false);
            }}
          >
            <FaSignature /> E-Sign
          </Button>
        </div>
      </div>

      {/* Templates Section */}
      <div className=" mx-auto bg-white p-4 rounded shadow-sm mb-4">
        <h2 className="h4 mb-3">Templates</h2>
        <div className="d-flex overflow-auto pb-2 gap-3">
          {templates.map(template => (
            <Card key={template.id} className="flex-shrink-0" style={{ width: '200px' }}>
              <Card.Body>
                <div className="text-primary mb-2">
                  <FaFileAlt size={24} />
                </div>
                <Card.Title className="h6">{template.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted small">{template.category}</Card.Subtitle>
                <Button variant="link" size="sm" className="p-0 text-primary">
                  Use Template
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      {/* Documents Grid/List */}
      <div className=" mx-auto bg-white p-4 rounded shadow-sm mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h4 mb-0">Documents</h2>
          <div className="btn-group">
            <Button
              variant={viewMode === 'grid' ? 'primary' : 'light'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <FaThLarge />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'primary' : 'light'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <FaList />
            </Button>
          </div>
        </div>

        <Row className={viewMode === 'grid' ? 'row-cols-1 row-cols-md-3 g-4' : 'row-cols-1 g-4'}>
          {documents.map(doc => (
            <Col key={doc.id}>
              <Card>
                <Card.Img variant="top" src={doc.imageUrl} alt={doc.name} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Card.Title className="h6">{doc.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted small">{doc.date}</Card.Subtitle>
                      <div className="d-flex gap-1 flex-wrap">
                        {doc.tags.map(tag => (
                          <Badge key={tag} bg="primary" pill>{tag}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="d-flex gap-1">
                      <Button variant="light" size="sm">
                        <FaEye />
                      </Button>
                      <Button variant="light" size="sm">
                        <FaDownload />
                      </Button>
                      <Button variant="light" size="sm">
                        <FaShare />
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Recent Activities */}
      <div className="mx-auto bg-white p-4 rounded shadow-sm">
        <h2 className="h4 mb-3">Recent Activities</h2>
        <div className="list-group">
          {recentActivities.map((activity, index) => (
            <div key={index} className="list-group-item list-group-item-action border-0 py-3">
              <div className="d-flex align-items-center gap-3">
                <div className={`rounded-circle p-2 ${getActivityIcon(activity.type)}`}>
                  {activity.type === 'upload' && <FaUpload />}
                  {activity.type === 'edit' && <FaFileAlt />}
                  {activity.type === 'sign' && <FaSignature />}
                </div>
                <div>
                  <h6 className="mb-0">{activity.document}</h6>
                  <small className="text-muted">{activity.user} - {activity.timestamp}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brief Generator Modal */}
      <Modal show={showBriefTab} onHide={() => setShowBriefTab(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Generate Brief</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Brief Title</Form.Label>
              <Form.Control
                type="text"
                value={briefTitle}
                onChange={(e) => setBriefTitle(e.target.value)}
                placeholder="Enter brief title"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={briefDescription}
                onChange={(e) => setBriefDescription(e.target.value)}
                placeholder="Enter brief description"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Generate Brief
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* E-Sign Modal */}
      <Modal show={showESignTab} onHide={() => setShowESignTab(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>E-Sign Document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={signName}
                onChange={(e) => setSignName(e.target.value)}
                placeholder="Enter your full name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={signTitle}
                onChange={(e) => setSignTitle(e.target.value)}
                placeholder="Enter your title"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Signature</Form.Label>
              <div className="border border-2 border-dashed rounded p-4 text-center">
                <FaSignature size={48} className="text-muted mb-2" />
                <p className="text-muted">Click to sign</p>
              </div>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Sign Document
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Template Modal */}
      <Modal show={showTemplateModal} onHide={() => setShowTemplateModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Choose a Template</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-4">
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
            <FormControl
              placeholder="Search templates..."
              value={templateSearch}
              onChange={(e) => setTemplateSearch(e.target.value)}
            />
          </InputGroup>
          <Row className="g-4">
            {templates
              .filter(template =>
                template.name.toLowerCase().includes(templateSearch.toLowerCase()) ||
                template.category.toLowerCase().includes(templateSearch.toLowerCase()) ||
                template.description?.toLowerCase().includes(templateSearch.toLowerCase())
              )
              .map(template => (
                <Col md={4} key={template.id}>
                  <Card>
                    <Card.Img variant="top" src={template.imageUrl} alt={template.name} style={{ height: '150px', objectFit: 'cover' }} />
                    <Card.Body>
                      <Card.Title className="h6">{template.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted small">{template.category}</Card.Subtitle>
                      <Card.Text className="small text-muted">{template.description}</Card.Text>
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-100"
                        onClick={() => {
                          // Handle template selection
                          setShowTemplateModal(false);
                        }}
                      >
                        Use Template
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Document;