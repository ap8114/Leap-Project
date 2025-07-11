import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateFolderModal from './CreateFolderModal';
import CreateDocumentModal from './CreateDocumentModal';
import {
  Container, Row, Col,
  Nav, NavItem, NavLink,
  Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Form, FormControl, InputGroup, FormCheck,
  Table, Card, Badge
} from 'react-bootstrap';
import {
  ChevronDown, ChevronLeft, ChevronRight,
  FolderSymlink, Upload, FolderPlus, FileText,
  SortDown, Filter, X, Check, ArrowsExpand
} from 'react-bootstrap-icons';

const Document = () => {
  const [activeTab, setActiveTab] = useState('');
  const [sortDropdown, setSortDropdown] = useState(false);
  const [columnsDropdown, setColumnsDropdown] = useState(false);
  const [filtersDropdown, setFiltersDropdown] = useState(false);
  const [newDropdown, setNewDropdown] = useState(false);
  const [expandRows, setExpandRows] = useState(false);
  const [showFoldersFirst, setShowFoldersFirst] = useState(false);
  const [showTrashedFiles, setShowTrashedFiles] = useState(false);
  const [showCreateFolderModal, setShowCreateFolderModal] = useState(false);
  const [showCreateDocumentModal, setShowCreateDocumentModal] = useState(false);

  const documents = [
    {
      id: 1,
      action: 'View',
      recordedTime: '2025-07-10 09:30 AM',
      name: 'Project Report.pdf',
      category: 'Documents',
      lastEditAt: '2025-07-09',
      receivedAt: '2025-07-08',
      comments: 2,
      uploaded: 'John Doe'
    },
    {
      id: 2,
      action: 'View',
      recordedTime: '2025-07-10 10:15 AM',
      name: 'Meeting Notes.docx',
      category: 'Documents',
      lastEditAt: '2025-07-10',
      receivedAt: '2025-07-09',
      comments: 0,
      uploaded: 'Jane Smith'
    },
    {
      id: 3,
      action: 'View',
      recordedTime: '2025-07-09 02:45 PM',
      name: 'Financial Report.xlsx',
      category: 'Spreadsheets',
      lastEditAt: '2025-07-08',
      receivedAt: '2025-07-07',
      comments: 5,
      uploaded: 'Mike Johnson'
    }
  ];

  return (
    <div className="min-vh-100 bg-light" style={{overflowX: 'hidden'}}>
      <Container fluid className="px-0 bg-white max-w-1440 mx-auto min-vh-100">
        {/* Header */}
        <Row className="align-items-center px-3 px-md-4 py-2 py-md-3 border-bottom">
          <Col xs={6} md={4} lg={6}>
             <h1 className="fw-bold mb-2 mt-2 ms-3" style={{ fontSize: "2rem", fontWeight: "700" }}>Documents</h1>
          </Col>
          <Col xs={6} md={8} lg={6} className="text-end">
            <Link to="/categories">
              <Button variant="outline-secondary" size="sm" className="ms-auto">
                Categories and templates
              </Button>
            </Link>
          </Col>
        </Row>

        {/* Subheader */}
        <Row className="px-3 px-md-4 py-2 bg-light border-bottom">
          <Col>
            <p className="text-muted small mb-0">All files and folders</p>
          </Col>
        </Row>

        {/* Filter Bar */}
        <Row className="px-3 px-md-4 py-2 py-md-3 border-bottom align-items-center">
          <Col xs={12} md={6} className="mb-2 mb-md-0">
            <Nav variant="pills" className="flex-nowrap">
              <NavItem>
                <NavLink
                  active={activeTab === 'all'}
                  onClick={() => setActiveTab('all')}
                  className="py-1 py-md-2 px-2 px-md-3 custom-tabs"
                >
                  All
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={activeTab === 'files'}
                  onClick={() => setActiveTab('files')}
                  className="py-1 py-md-2 px-2 px-md-3 custom-tabs"
                >
                  Files only
                </NavLink>
              </NavItem>
            </Nav>
          </Col>

          <Col xs={12} md={6}>
            <div className="d-flex flex-wrap justify-content-md-end gap-2">
              <Form.Group className="me-2" style={{ minWidth: '150px' }}>
                <FormControl
                  type="text"
                  placeholder="Filter by keyword"
                  size="sm"
                />
              </Form.Group>

              {/* Sort Dropdown */}
              <Dropdown align="end" onToggle={setSortDropdown} show={sortDropdown} className="me-2">
                <Dropdown.Toggle variant="outline-secondary" size="sm" className="d-flex align-items-center">
                  Sort
                </Dropdown.Toggle>
                <DropdownMenu className="p-3" style={{ width: '300px' }}>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <FormCheck
                      type="switch"
                      id="showFoldersFirst"
                      label="Show folders first"
                      checked={showFoldersFirst}
                      onChange={() => setShowFoldersFirst(!showFoldersFirst)}
                      className="small"
                    />
                    <Button variant="link" size="sm" className="text-muted p-0" onClick={() => setSortDropdown(false)}>
                      <X size={16} />
                    </Button>
                  </div>
                  <p className="small text-muted mb-3">
                    With this setting turned on, folders will appear at the top of the list when sorting by the Name,
                    Last edit at and Uploaded date columns.
                  </p>
                  <div className="d-grid gap-1">
                    <Button variant="outline-secondary" size="sm" className="text-start">Name A-Z</Button>
                    <Button variant="outline-secondary" size="sm" className="text-start">Name Z-A</Button>
                    <Button variant="outline-secondary" size="sm" className="text-start">Last edit at</Button>
                    <Button variant="outline-secondary" size="sm" className="text-start">Uploaded date</Button>
                  </div>
                </DropdownMenu>
              </Dropdown>

              {/* Columns Dropdown */}
              <Dropdown align="end" onToggle={setColumnsDropdown} show={columnsDropdown} className="me-2">
                <Dropdown.Toggle variant="outline-secondary" size="sm" className="d-flex align-items-center">
                  Columns
                </Dropdown.Toggle>
                <DropdownMenu className="p-3" style={{ width: '250px' }}>
                  <h6 className="mb-3">Visible columns</h6>
                  <div className="d-grid gap-1">
                    <FormCheck label="Action" defaultChecked className="small" />
                    <FormCheck label="Recorded time" defaultChecked className="small" />
                    <FormCheck label="Name" defaultChecked className="small" />
                    <FormCheck label="Matter" className="small" />
                    <FormCheck label="Category" defaultChecked className="small" />
                    <FormCheck label="Last edit at" defaultChecked className="small" />
                    <FormCheck label="Received at" defaultChecked className="small" />
                    <FormCheck label="Comments" defaultChecked className="small" />
                    <FormCheck label="Contact" className="small" />
                    <FormCheck label="Uploaded by" className="small" />
                    <FormCheck label="Uploaded date" defaultChecked className="small" />
                    <FormCheck label="ID" className="small" />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <Button variant="custom" size="sm">Update columns</Button>
                    <Button variant="outline-secondary" size="sm">Cancel</Button>
                  </div>
                </DropdownMenu>
              </Dropdown>

              {/* Filters Dropdown */}
              <Dropdown
                align="end"
                show={filtersDropdown}
                onToggle={(isOpen) => setFiltersDropdown(isOpen)}
              >
                <Dropdown.Toggle
                  variant="outline-secondary"
                  size="sm"
                  className="d-flex align-items-center"
                >
                  Filters
                </Dropdown.Toggle>

                <Dropdown.Menu className="p-3" style={{ width: '300px' }}>
                  <Form.Group className="mb-2">
                    <Form.Label className="small">Matter</Form.Label>
                    <InputGroup size="sm">
                      <FormControl placeholder="Find a matter" />

                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-5">
                    <Form.Label className="small">Category</Form.Label>
                    <InputGroup size="sm mb-2">
                      <FormControl placeholder="Find a document category" className="py-1" />

                    </InputGroup>
                  </Form.Group>

                  <FormCheck
                    label="Show trashed files"
                    checked={showTrashedFiles}
                    onChange={() => setShowTrashedFiles(!showTrashedFiles)}
                    className="small mb-3"
                  />

                  <div className="d-flex gap-2">
                    <Button variant="custom" size="sm">Apply filters</Button>
                    <Button variant="outline-secondary" size="sm">Clear filters</Button>
                  </div>
                </Dropdown.Menu>
              </Dropdown>

              {/* New Dropdown */}
              <Dropdown align="end" onToggle={setNewDropdown} show={newDropdown}>
                <Dropdown.Toggle variant="custom" size="sm" className="d-flex align-items-center">
                  New
                </Dropdown.Toggle>
                <DropdownMenu className='mt-2'>
                  <Dropdown.Item as="label" className="d-flex align-items-center gap-2 mb-0">
                    <Upload size={14} /> Upload file
                    <input
                      type="file"
                      hidden
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          console.log("Uploaded file:", file.name);
                          // TODO: Handle file upload logic here
                        }
                      }}
                    />
                  </Dropdown.Item>

                  <Dropdown.Item as="label" className="d-flex align-items-center gap-2 mb-0">
                    <FolderPlus size={14} /> Upload folder
                    <input
                      type="file"
                      hidden
                      webkitdirectory="true"
                      directory=""
                      onChange={(e) => {
                        const files = Array.from(e.target.files);
                        console.log("Folder contents:", files.map(f => f.name));
                        // TODO: Handle folder upload logic here
                      }}
                    />
                  </Dropdown.Item>

                  <Dropdown.Item onClick={() => setShowCreateFolderModal(true)} className='d-flex align-items-center gap-2 mb-0'>
                    <FolderPlus size={14} className="me-2" /> Create folder
                  </Dropdown.Item>

                  <CreateFolderModal
                    show={showCreateFolderModal}
                    onHide={() => setShowCreateFolderModal(false)}
                  />
                  <Dropdown.Item onClick={() => setShowCreateDocumentModal(true)} className='d-flex align-items-center gap-2 mb-0'>
                    <FileText size={14} className="me-2" /> Create document from template
                  </Dropdown.Item>

                  {/* Modal Component */}
                  <CreateDocumentModal
                    show={showCreateDocumentModal}
                    onHide={() => setShowCreateDocumentModal(false)}
                  />
                </DropdownMenu>
              </Dropdown>
            </div>
          </Col>
        </Row>

        {/* Table */}
        <div className="responsive">
          {activeTab === 'all' ? (
            <>
              {/* Table Header */}
              <Row className="px-3 px-md-4 py-2 bg-light border-bottom d-none d-md-flex">
                <Col md={1} className="d-flex align-items-center">
                  <FormCheck />
                </Col>
                <Col md={1} className="d-flex align-items-center small fw-bold">
                  Action
                </Col>
                <Col md={1} className="d-flex align-items-center small fw-bold">
                  Recorded time
                </Col>
                <Col md={2} className="d-flex align-items-center small fw-bold">
                  Name <SortDown size={12} className="ms-1 text-muted" />
                </Col>
                <Col md={1} className="d-flex align-items-center small fw-bold">
                  Category
                </Col>
                <Col md={2} className="d-flex align-items-center small fw-bold">
                  Last edit at <SortDown size={12} className="ms-1 text-muted" />
                </Col>
                <Col md={2} className="d-flex align-items-center small fw-bold">
                  Received at <SortDown size={12} className="ms-1 text-muted" />
                </Col>
                <Col md={1} className="d-flex align-items-center small fw-bold">
                  Comments
                </Col>
                <Col md={1} className="d-flex align-items-center small fw-bold">
                  Uploaded <SortDown size={12} className="ms-1 text-muted" />
                </Col>
              </Row>

              {/* Table Content */}
              {documents.map((doc) => (
                <Row key={doc.id} className="px-3 px-md-4 py-2 py-md-3 border-bottom hover-bg-light align-items-center">
                  <Col xs={2} md={1} className="d-flex align-items-center">
                    <FormCheck className="me-2 me-md-0" />
                  </Col>
                  <Col xs={10} md={1} className="mb-2 mb-md-0">
                    <Button variant="link" size="sm" className="p-0 text-custom">
                      {doc.action}
                    </Button>
                  </Col>
                  <Col xs={6} md={1} className="small">
                    {doc.recordedTime}
                  </Col>
                  <Col xs={6} md={2} className="fw-bold mb-2 mb-md-0">
                    {doc.name}
                  </Col>
                  <Col xs={6} md={1} className="small">
                    {doc.category}
                  </Col>
                  <Col xs={6} md={2} className="small">
                    {doc.lastEditAt}
                  </Col>
                  <Col xs={6} md={2} className="small">
                    {doc.receivedAt}
                  </Col>
                  <Col xs={6} md={1} className="small">
                    <Badge bg="light" text="dark" pill>
                      {doc.comments}
                    </Badge>
                  </Col>
                  <Col xs={6} md={1} className="small">
                    {doc.uploaded}
                  </Col>
                </Row>
              ))}
            </>
          ) : (
            <Row className="py-5 py-md-8 d-flex justify-content-center text-center">
              <Col md="auto">
                <FolderSymlink size={48} className="text-muted mb-3 " style={{ marginLeft: "200" }} />
                <h5 className="mb-2">No results found</h5>
                <p className="text-muted">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </Col>
            </Row>

          )}
        </div>

        {/* Pagination */}
        <Row className="px-3 px-md-4 py-2 py-md-3 border-top align-items-center">
          <Col xs={6} md={4} className="d-flex align-items-center">
            <Button variant="link" size="sm" className="text-muted p-1 me-2">
              <ChevronLeft size={16} />
            </Button>
            <Button variant="link" size="sm" className="text-muted p-1">
              <ChevronRight size={16} />
            </Button>
            <span className="small text-muted ms-2">No results found</span>
          </Col>
          <Col xs={6} md={8} className="d-flex justify-content-end">
            <FormCheck
              type="switch"
              id="expandRows"
              label="Expand rows"
              checked={expandRows}
              onChange={() => setExpandRows(!expandRows)}
              className="small"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Document;