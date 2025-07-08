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
    <div className="w-100"> {/* Fixed typo */}

      <Header />
      <div className="w-100"> {/* Fixed typo */}
        {/* Navigation */}

        {/* Hero Section */}
        <section className="py-5 position-relative">
          <div className="position-absolute top-0 start-0 w-100 h-100 opacity-90"></div>
          <Container className="position-relative">
            <Row className="align-items-center">
              <Col xs={12} lg={6} className="mb-4 mb-lg-0 text-center text-lg-start">
                <h1 className="display-5 fw-bold mb-3 " style={{color: '#f76b1c'}}>
                  Practice management for family law software
                </h1>
                <p className="lead text-muted mb-4">
                  Streamline your family law practice with comprehensive case management,
                  secure document handling, and automated workflow solutions designed
                  specifically for divorce, custody, and domestic relations cases.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                  <Button  size="lg" className="w-100 w-sm-auto" style={{backgroundColor: '#f76b1c' , color: 'white'}}>Get Started Free</Button>
                  <Button variant="outline-dark" size="lg" className="w-100 w-sm-auto">Schedule Demo</Button>
                </div>
              </Col>
              <Col xs={12} lg={6} className="text-center">
                <Image
                  src="https://readdy.ai/api/search-image?query=professional%20female%20lawyer%20holding%20documents%20in%20modern%20law%20office%2C%20confident%20and%20caring%20expression%2C%20natural%20lighting%2C%20clean%20background%20with%20legal%20books%20and%20family%20photos%2C%20representing%20trust%20and%20expertise%20in%20family%20law&width=600&height=400&seq=hero002&orientation=landscape"
                  alt="Family Law Professional"
                  fluid
                  rounded
                  className="shadow mx-auto"
                  style={{ maxWidth: "100%", height: "auto" }}
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
                <h2 className="display-6 fw-bold mb-3 text-dark">
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
                    <span className="bg-danger rounded-circle" style={{ width: '12px', height: '12px' }}></span>
                    <span className="bg-warning rounded-circle" style={{ width: '12px', height: '12px' }}></span>
                    <span className="bg-success rounded-circle" style={{ width: '12px', height: '12px' }}></span>
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
                      <Col xs={12} sm={6} md={3}>
                        <Card className="border-0 bg-blue-50">
                          <Card.Body>
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <p className="mb-1" >Active Cases</p>
                                <h3 className="mb-0">24</h3>
                              </div>
                              <i className="fas fa-briefcase text-primary fs-3"></i>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={12} sm={6} md={3}>
                        <Card className="border-0 bg-orange-50">
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
                      <Col xs={12} sm={6} md={3}>
                        <Card className="border-0 bg-green-50">
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
                      <Col xs={12} sm={6} md={3}>
                        <Card className="border-0 bg-purple-50">
                          <Card.Body>
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <p className="text-purple mb-1">Revenue</p>
                                <h3 className="mb-0">$89K</h3>
                              </div>
                              <i className="fas fa-dollar-sign text-purple fs-3"></i>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>

                    <Card className="border">
                      <Card.Header className="bg-light">
                        <h3 className="h5 mb-0">Recent Cases</h3>
                      </Card.Header>
                      <div className="table-responsive">
                        <Table striped hover className="mb-0">
                          <thead>
                            <tr>
                              <th>Case</th>
                              <th>Client</th>
                              <th>Type</th>
                              <th>Status</th>
                              <th>Next Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="fw-bold">Johnson vs. Johnson</div>
                                <div className="text-muted small">Case #2024-001</div>
                              </td>
                              <td>Sarah Johnson</td>
                              <td>Divorce</td>
                              <td><span className="badge bg-warning">In Progress</span></td>
                              <td>Mediation - Dec 15</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="fw-bold">Smith Custody Case</div>
                                <div className="text-muted small">Case #2024-002</div>
                              </td>
                              <td>Michael Smith</td>
                              <td>Child Custody</td>
                              <td><span className="badge bg-success">Settled</span></td>
                              <td>Final Review</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="fw-bold">Davis Property Division</div>
                                <div className="text-muted small">Case #2024-003</div>
                              </td>
                              <td>Jennifer Davis</td>
                              <td>Property Division</td>
                              <td><span className="badge bg-dark">Discovery</span></td>
                              <td>Document Review</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Card>
                  </div>
                )}

                {activeTab === 'documents' && (
                  <div>
                    <Card className="border-2 border-dashed text-center p-4 p-md-5 mb-4">
                      <i className="fas fa-cloud-upload-alt text-muted fs-1 mb-3"></i>
                      <h3 className="h4 mb-2">Upload Documents</h3>
                      <p className="text-muted mb-4">Drag and drop files here, or click to browse</p>
                      <Button style={{backgroundColor: '#f76b1c' , color: 'white'}} onClick={simulateUpload}>
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
                      <Col xs={12} lg={8} className="mb-4 mb-lg-0">
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
                      <Col xs={12} lg={4}>
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
                <h2 className="display-6 fw-bold mb-3">Built specifically for family law practices</h2>
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
                    <div style={{backgroundColor: '#f76b1c' , color: 'white'}} className=" text-white rounded p-3 mb-4 d-inline-flex">
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
                    <div className=" text-white rounded p-3 mb-4 d-inline-flex" style={{backgroundColor: '#f76b1c' , color: 'white'}}>
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
                    <div className=" text-white rounded p-3 mb-4 d-inline-flex" style={{backgroundColor: '#f76b1c' , color: 'white'}}>
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
                    <div className=" text-white rounded p-3 mb-4 d-inline-flex" style={{backgroundColor: '#f76b1c' , color: 'white'}}>
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
                    <div className=" text-white rounded p-3 mb-4 d-inline-flex" style={{backgroundColor: '#f76b1c' , color: 'white'}}>
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
                    <div className="text-white rounded p-3 mb-4 d-inline-flex" style={{backgroundColor: '#f76b1c' , color: 'white'}}>
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

        {/* Contact Form Section */}
        <section className="py-5 bg-dark text-white">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} lg={6} className="mb-5 mb-lg-0">
                <h2 className="display-5 fw-bold mb-4" style={{color: '#f76b1c'}}>Ready to transform your family law practice?</h2>
                <p className="lead text-muted mb-4">
                  Join thousands of family law attorneys who trust our platform 
                  to manage their most sensitive cases with confidence and efficiency.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-check-circle me-2" style={{color: '#f76b1c'}}></i>
                    <span>30-day free trial with full access</span>
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle me-2" style={{color: '#f76b1c'}}></i>
                    <span>No setup fees or hidden costs</span>
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle  me-2" style={{color: '#f76b1c'}}></i>
                    <span>24/7 customer support</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle me-2" style={{color: '#f76b1c'}}></i>
                    <span>Data migration assistance</span>
                  </li>
                </ul>
              </Col>
              <Col xs={12} lg={6}>
                <Card className="shadow-lg">
                  <Card.Body>
                    <h3 className="h3 mb-4">Get Started Today</h3>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Law Firm Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enter your law firm name"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Message (Optional)</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          placeholder="Tell us about your practice needs"
                        />
                      </Form.Group>
                      <Button type="submit"  size="lg" className="w-100" >
                        Start Free Trial
                      </Button>
                      <p className="text-muted small mt-3 text-center">
                        By submitting this form, you agree to our{' '}
                        <a href="#" className="text-primary">Terms of Service</a> and{' '}
                        <a href="#" className="text-primary">Privacy Policy</a>
                      </p>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Footer */}
      </div>
      <FooterSection />
    </div>
  );
};

export default Family;