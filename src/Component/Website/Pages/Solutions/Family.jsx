import React, { useState } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Navbar, 
  Nav, 
  Button, 
  Card, 
  Tab, 
  Tabs, 
  Table, 
  ProgressBar,
  Form,
  Image
} from 'react-bootstrap';
import Header from '../../HomePages/Header';
import FooterSection from '../../HomePages/FooterSection';

const Family = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="w-100">
      <Header />
      <div className="w-100">
        {/* Hero Section */}
        <section className="py-5 position-relative">
          <div className="position-absolute top-0 start-0 w-100 h-100 opacity-90"></div>
          <Container className="position-relative">
            <Row className="align-items-center">
              <Col lg={6} className="mb-5 mb-lg-0">
                <h1 className="display-4 fw-bold mb-4 text-dark">
                  Practice management for family law software
                </h1>
                <p className="lead text-muted mb-4">
                  Streamline your family law practice with comprehensive case management, 
                  secure document handling, and automated workflow solutions designed 
                  specifically for divorce, custody, and domestic relations cases.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3">
                  <Button  style={{backgroundColor: '#f76b1c' , color: 'white'}}
 size="lg">Get Started Free</Button>
                  <Button variant="outline-dark" size="lg">Schedule Demo</Button>
                </div>
              </Col>
              <Col lg={6}>
                <Image 
                  src="https://readdy.ai/api/search-image?query=professional%20female%20lawyer%20holding%20documents%20in%20modern%20law%20office%2C%20confident%20and%20caring%20expression%2C%20natural%20lighting%2C%20clean%20background%20with%20legal%20books%20and%20family%20photos%2C%20representing%20trust%20and%20expertise%20in%20family%20law&width=600&height=400&seq=hero002&orientation=landscape" 
                  alt="Family Law Professional" 
                  fluid 
                  rounded 
                  className="shadow"
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Dashboard Preview */}
        <section id="dashboard-preview" className="py-5 bg-light">
          <Container>
            <Row className="text-center mb-5">
              <Col>
                <h2 className="display-5 fw-bold mb-3 text-dark">
                  Everything you need to manage family law cases
                </h2>
                <p className="lead text-muted">
                  Our comprehensive dashboard gives you complete visibility into your cases, 
                  deadlines, documents, and client communications all in one place.
                </p>
              </Col>
            </Row>

            <Card className="shadow-lg">
              <Card.Header className="bg-light">
                <div className="d-flex align-items-center">
                  <div className="d-flex gap-2 me-3">
                    <span className="bg-danger rounded-circle" style={{width: '12px', height: '12px'}}></span>
                    <span className="bg-warning rounded-circle" style={{width: '12px', height: '12px'}}></span>
                    <span className="bg-success rounded-circle" style={{width: '12px', height: '12px'}}></span>
                  </div>
                  <span className="text-muted">FamilyLaw Pro Dashboard</span>
                </div>
              </Card.Header>
              <Card.Body>
                <Tabs
                  activeKey={activeTab}
                  onSelect={(k) => setActiveTab(k)}
                  className="mb-4 border-bottom"
                >
                  <Tab eventKey="dashboard" title="Case Dashboard" className="border-0"></Tab>
                  <Tab eventKey="documents" title="Document Management" className="border-0"></Tab>
                  <Tab eventKey="calendar" title="Calendar & Deadlines" className="border-0"></Tab>
                </Tabs>

                {activeTab === 'dashboard' && (
                  <div>
                    <Row className="mb-4 g-4">
                      <Col md={3}>
                        <Card className="border-0 bg-primary bg-opacity-10">
                          <Card.Body>
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <p className="text-primary mb-1">Active Cases</p>
                                <h3 className="mb-0">24</h3>
                              </div>
                              <i className="fas fa-briefcase text-primary fs-3"></i>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={3}>
                        <Card className="border-0 bg-warning bg-opacity-10">
                          <Card.Body>
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <p className="text-warning mb-1">Pending Tasks</p>
                                <h3 className="mb-0">12</h3>
                              </div>
                              <i className="fas fa-tasks text-warning fs-3"></i>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={3}>
                        <Card className="border-0 bg-success bg-opacity-10">
                          <Card.Body>
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <p className="text-success mb-1">Completed</p>
                                <h3 className="mb-0">156</h3>
                              </div>
                              <i className="fas fa-check-circle text-success fs-3"></i>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={3}>
                        <Card className="border-0 bg-info bg-opacity-10">
                          <Card.Body>
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <p className="text-info mb-1">Revenue</p>
                                <h3 className="mb-0">$89K</h3>
                              </div>
                              <i className="fas fa-dollar-sign text-info fs-3"></i>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg={8} className="mb-4 mb-lg-0">
                        <Card>
                          <Card.Body>
                            <h3 className="h5 mb-3">Recent Activity</h3>
                            <Table striped bordered hover>
                              <thead>
                                <tr>
                                  <th>Case</th>
                                  <th>Activity</th>
                                  <th>Date</th>
                                  <th>Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Johnson Divorce</td>
                                  <td>Filed Petition</td>
                                  <td>Today</td>
                                  <td><span className="badge bg-primary">Active</span></td>
                                </tr>
                                <tr>
                                  <td>Smith Custody</td>
                                  <td>Mediation Scheduled</td>
                                  <td>Yesterday</td>
                                  <td><span className="badge bg-warning">Pending</span></td>
                                </tr>
                                <tr>
                                  <td>Davis Support</td>
                                  <td>Order Signed</td>
                                  <td>Dec 1, 2024</td>
                                  <td><span className="badge bg-success">Completed</span></td>
                                </tr>
                              </tbody>
                            </Table>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col lg={4}>
                        <Card>
                          <Card.Body>
                            <h3 className="h5 mb-3">Case Distribution</h3>
                            <div className="text-center">
                              <div className="d-flex justify-content-center mb-3">
                                <div style={{ width: '200px', height: '200px' }}>
                                  {/* Placeholder for chart */}
                                  <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                                    <span className="text-muted">Case Chart</span>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex flex-wrap justify-content-center gap-3">
                                <div className="d-flex align-items-center">
                                  <span className="bg-primary rounded-circle me-2" style={{ width: '10px', height: '10px' }}></span>
                                  <small>Divorce (45%)</small>
                                </div>
                                <div className="d-flex align-items-center">
                                  <span className="bg-warning rounded-circle me-2" style={{ width: '10px', height: '10px' }}></span>
                                  <small>Custody (30%)</small>
                                </div>
                                <div className="d-flex align-items-center">
                                  <span className="bg-success rounded-circle me-2" style={{ width: '10px', height: '10px' }}></span>
                                  <small>Support (15%)</small>
                                </div>
                                <div className="d-flex align-items-center">
                                  <span className="bg-info rounded-circle me-2" style={{ width: '10px', height: '10px' }}></span>
                                  <small>Other (10%)</small>
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                )}

                {activeTab === 'documents' && (
                  <div>
                    <Card className="border-2 border-dashed text-center p-4 p-md-5 mb-4">
                      <i className="fas fa-cloud-upload-alt text-muted fs-1 mb-3"></i>
                      <h3 className="h4 mb-2">Upload Documents</h3>
                      <p className="text-muted mb-4">Drag and drop files here, or click to browse</p>
                      <Button style={{backgroundColor: '#f76b1c', color: 'white'}} onClick={simulateUpload}>
                        Choose Files
                      </Button>
                      {uploadProgress > 0 && (
                        <div className="mt-4">
                          <ProgressBar now={uploadProgress} label={`${uploadProgress}%`} className="mb-2" />
                          <small className="text-muted">{uploadProgress}% uploaded</small>
                        </div>
                      )}
                    </Card>

                    <Row>
                      <Col xs={12} md={6} className="mb-4 mb-md-0">
                        <Card className="h-100">
                          <Card.Body>
                            <h3 className="h5 mb-3">Recent Documents</h3>
                            <div className="d-flex flex-column gap-3">
                              <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded">
                                <div className="d-flex align-items-center">
                                  <i className="fas fa-file-pdf text-danger me-3 fs-4"></i>
                                  <div>
                                    <div className="fw-bold">Divorce Petition.pdf</div>
                                    <small className="text-muted">Uploaded 2 hours ago</small>
                                  </div>
                                </div>
                                <Button variant="link" className="text-muted p-0">
                                  <i className="fas fa-download"></i>
                                </Button>
                              </div>
                              <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded">
                                <div className="d-flex align-items-center">
                                  <i className="fas fa-file-word text-primary me-3 fs-4"></i>
                                  <div>
                                    <div className="fw-bold">Custody Agreement.docx</div>
                                    <small className="text-muted">Uploaded yesterday</small>
                                  </div>
                                </div>
                                <Button variant="link" className="text-muted p-0">
                                  <i className="fas fa-download"></i>
                                </Button>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={12} md={6}>
                        <Card className="h-100">
                          <Card.Body>
                            <h3 className="h5 mb-3">Document Categories</h3>
                            <div className="d-flex flex-column gap-3">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <i className="fas fa-folder text-warning me-3 fs-4"></i>
                                  <span>Pleadings</span>
                                </div>
                                <small className="text-muted">12 files</small>
                              </div>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <i className="fas fa-folder text-primary me-3 fs-4"></i>
                                  <span>Discovery</span>
                                </div>
                                <small className="text-muted">8 files</small>
                              </div>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <i className="fas fa-folder text-success me-3 fs-4"></i>
                                  <span>Agreements</span>
                                </div>
                                <small className="text-muted">5 files</small>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                )}

                {activeTab === 'calendar' && (
                  <div>
                    <Row>
                      <Col lg={8} className="mb-4 mb-lg-0">
                        <Card>
                          <Card.Body>
                            <h3 className="h5 mb-3">Upcoming Deadlines</h3>
                            <div className="d-flex flex-column gap-3">
                              <div className="d-flex align-items-center p-3 bg-danger bg-opacity-10 border-start border-danger border-4 rounded">
                                <div className="flex-grow-1">
                                  <div className="fw-bold text-danger">Discovery Response Due</div>
                                  <small className="text-danger">Johnson vs. Johnson - Due in 2 days</small>
                                </div>
                                <i className="fas fa-exclamation-triangle text-danger fs-4"></i>
                              </div>
                              <div className="d-flex align-items-center p-3 bg-warning bg-opacity-10 border-start border-warning border-4 rounded">
                                <div className="flex-grow-1">
                                  <div className="fw-bold text-warning">Mediation Session</div>
                                  <small className="text-warning">Smith Custody Case - Dec 15, 2024</small>
                                </div>
                                <i className="fas fa-clock text-warning fs-4"></i>
                              </div>
                              <div className="d-flex align-items-center p-3 bg-primary bg-opacity-10 border-start border-primary border-4 rounded">
                                <div className="flex-grow-1">
                                  <div className="fw-bold text-primary">Court Hearing</div>
                                  <small className="text-primary">Davis Property Division - Dec 20, 2024</small>
                                </div>
                                <i className="fas fa-gavel text-primary fs-4"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col lg={4}>
                        <Card>
                          <Card.Body>
                            <h3 className="h5 mb-3">Quick Actions</h3>
                            <div className="d-flex flex-column gap-3">
                              <Button variant="outline-secondary" className="text-start">
                                <i className="fas fa-plus me-2 text-primary"></i>
                                New Case
                              </Button>
                              <Button variant="outline-secondary" className="text-start">
                                <i className="fas fa-calendar-plus me-2 text-primary"></i>
                                Schedule Meeting
                              </Button>
                              <Button variant="outline-secondary" className="text-start">
                                <i className="fas fa-file-upload me-2 text-primary"></i>
                                Upload Document
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Container>
        </section>

        {/* Features Section */}
        <section id="features" className="py-5">
          <Container>
            <Row className="text-center mb-5">
              <Col>
                <h2 className="display-5 fw-bold mb-3">Built specifically for family law practices</h2>
                <p className="lead text-muted">
                  Every feature is designed with family law attorneys in mind, 
                  from sensitive document handling to complex case tracking.
                </p>
              </Col>
            </Row>

            <Row className="g-4">
              <Col xs={12} md={6} lg={4}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <div className="text-white rounded p-3 mb-4 d-inline-flex" style={{backgroundColor: '#f76b1c'}}>
                      <i className="fas fa-shield-alt fs-4"></i>
                    </div>
                    <h3 className="h4 mb-3">Secure Document Management</h3>
                    <p className="text-muted">
                      Bank-level encryption and secure storage for all sensitive family law documents 
                      with role-based access controls.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <div className="text-white rounded p-3 mb-4 d-inline-flex" style={{backgroundColor: '#f76b1c'}}>
                      <i className="fas fa-users fs-4"></i>
                    </div>
                    <h3 className="h4 mb-3">Client Portal</h3>
                    <p className="text-muted">
                      Give clients secure access to their case information, documents, 
                      and communication history through a dedicated portal.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <div className="text-white rounded p-3 mb-4 d-inline-flex" style={{backgroundColor: '#f76b1c'}}>
                      <i className="fas fa-calendar-check fs-4"></i>
                    </div>
                    <h3 className="h4 mb-3">Deadline Tracking</h3>
                    <p className="text-muted">
                      Never miss a critical deadline with automated reminders and 
                      comprehensive deadline management for all case types.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <div className="text-white rounded p-3 mb-4 d-inline-flex" style={{backgroundColor: '#f76b1c'}}>
                      <i className="fas fa-chart-line fs-4"></i>
                    </div>
                    <h3 className="h4 mb-3">Financial Tracking</h3>
                    <p className="text-muted">
                      Track child support, alimony, and asset division with built-in 
                      calculators and financial reporting tools.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <div className="text-white rounded p-3 mb-4 d-inline-flex" style={{backgroundColor: '#f76b1c'}}>
                      <i className="fas fa-comments fs-4"></i>
                    </div>
                    <h3 className="h4 mb-3">Communication Hub</h3>
                    <p className="text-muted">
                      Centralized communication with clients, opposing counsel, 
                      and court personnel with full audit trails.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <div className="text-white rounded p-3 mb-4 d-inline-flex" style={{backgroundColor: '#f76b1c'}}>
                      <i className="fas fa-file-contract fs-4"></i>
                    </div>
                    <h3 className="h4 mb-3">Document Templates</h3>
                    <p className="text-muted">
                      Pre-built templates for common family law documents including 
                      petitions, agreements, and court filings.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

      {/* Footer */}
  
    </div>
<FooterSection/>

  {/* Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-[#f76b1c] text-white p-3 rounded-full shadow-lg hover:bg-[#f76b1c] transition-colors cursor-pointer"
            >
                <i className="fas fa-chevron-up"></i>
            </button>
            
    </div>
  );
};

export default Family;