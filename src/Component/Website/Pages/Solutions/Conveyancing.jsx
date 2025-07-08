import React, { useState } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Form, 
  Card, 
  Accordion, 
  ListGroup, 
  Image,
  Navbar,
  Nav
} from 'react-bootstrap';
import Header from '../../HomePages/Header';
import FooterSection from '../../HomePages/FooterSection';

const Conveyancing = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [activeKey, setActiveKey] = useState(null);

  const faqs = [
    {
      question: "What is conveyancing software?",
      answer: "Conveyancing software is a specialized digital solution designed to streamline property transactions, manage legal documentation, and facilitate communication between all parties involved in real estate transfers."
    },
    {
      question: "How secure is your document management system?",
      answer: "Our system employs bank-level encryption, secure cloud storage, and multi-factor authentication to ensure all your sensitive property documents remain protected throughout the transaction process."
    },
    {
      question: "Can multiple team members access the same transaction?",
      answer: "Yes, our platform supports collaborative workflows with customizable permission levels, allowing your team to work efficiently while maintaining appropriate access controls."
    },
    {
      question: "Do you offer integration with other legal practice management software?",
      answer: "We provide seamless integration with leading practice management systems, CRMs, and accounting software to create a unified workflow for your practice."
    },
    {
      question: "What kind of support do you offer during implementation?",
      answer: "We provide comprehensive onboarding support including personalized training sessions, data migration assistance, and dedicated technical support throughout your implementation journey."
    }
  ];

  return (
    <div className='w-100'>
      <Header/>
    <div className="bg-white text-dark">
      {/* Navigation */}
      {/* <Navbar bg="light" expand="lg" className="py-3 shadow-sm">
        <Container>
          <Navbar.Brand href="#" className="fw-bold text-primary">ConveyancingPro</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features" className="mx-2">Features</Nav.Link>
              <Nav.Link href="#dashboard" className="mx-2">Dashboard</Nav.Link>
              <Nav.Link href="#documents" className="mx-2">Documents</Nav.Link>
              <Nav.Link href="#faq" className="mx-2">FAQ</Nav.Link>
              <Button variant="primary" className="ms-3">Get Started</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {/* Hero Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">
                Practice the Significant <span className="text-primary">Conveyancing Software</span>
              </h1>
              <p className="lead mb-4">
                Streamline your property transactions with our comprehensive conveyancing solution. 
                Manage documents, track progress, and collaborate securely in one platform.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <Button variant="primary" size="lg">Get Started</Button>
                <Button variant="outline-primary" size="lg">Learn More</Button>
              </div>
            </Col>
            <Col lg={6}>
              <Image 
                src="https://via.placeholder.com/800x600" 
                alt="Conveyancing Software" 
                fluid 
                rounded 
                className="shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <span className="text-primary fw-bold">FEATURES</span>
              <h2 className="display-5 fw-bold mb-3">Complete property transaction software</h2>
              <p className="lead text-muted">
                Our comprehensive solution handles every aspect of your conveyancing workflow, 
                from client onboarding to completion.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary text-white rounded p-2 me-3">
                      <i className="fas fa-tasks fa-lg"></i>
                    </div>
                    <h3 className="mb-0">Streamlined Workflow</h3>
                  </div>
                  <p className="text-muted">
                    Automate routine tasks and guide your team through each stage of the 
                    conveyancing process with customizable workflows.
                  </p>
                </Card.Body>
                <Card.Footer className="bg-light">
                  <Image 
                    src="https://via.placeholder.com/600x300" 
                    alt="Workflow Dashboard" 
                    fluid 
                    rounded
                  />
                </Card.Footer>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary text-white rounded p-2 me-3">
                      <i className="fas fa-file-contract fa-lg"></i>
                    </div>
                    <h3 className="mb-0">Document Management</h3>
                  </div>
                  <p className="text-muted">
                    Securely store, organize and share all property transaction documents 
                    with clients and stakeholders in one central location.
                  </p>
                </Card.Body>
                <Card.Footer className="bg-light">
                  <Image 
                    src="https://via.placeholder.com/600x300" 
                    alt="Document Management" 
                    fluid 
                    rounded
                  />
                </Card.Footer>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary text-white rounded p-2 me-3">
                      <i className="fas fa-chart-line fa-lg"></i>
                    </div>
                    <h3 className="mb-0">Real-time Tracking</h3>
                  </div>
                  <p className="text-muted">
                    Monitor transaction progress in real-time with comprehensive dashboards 
                    and automated status updates for all parties.
                  </p>
                </Card.Body>
                <Card.Footer className="bg-light">
                  <Image 
                    src="https://via.placeholder.com/600x300" 
                    alt="Real-time Tracking" 
                    fluid 
                    rounded
                  />
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <span className="text-primary fw-bold">DASHBOARD</span>
              <h2 className="display-5 fw-bold mb-3">Comprehensive Dashboard Overview</h2>
              <p className="lead text-muted">
                Track every aspect of your property transactions with our intuitive and powerful dashboard.
              </p>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <Image 
                src="https://via.placeholder.com/800x600" 
                alt="Transaction Dashboard" 
                fluid 
                rounded 
                className="shadow"
              />
            </Col>
            <Col lg={6}>
              <h3 className="fw-bold mb-4">Powerful transaction tracking capabilities</h3>
              <ListGroup variant="flush">
                <ListGroup.Item className="border-0 bg-transparent">
                  <div className="d-flex">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <h4 className="h5">Visual Progress Tracking</h4>
                      <p className="text-muted mb-0">
                        Interactive progress bars show exactly where each transaction stands at a glance.
                      </p>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent">
                  <div className="d-flex">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <h4 className="h5">Milestone Tracking</h4>
                      <p className="text-muted mb-0">
                        Clear timeline visualization of completed and upcoming transaction milestones.
                      </p>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent">
                  <div className="d-flex">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <h4 className="h5">Document Status Indicators</h4>
                      <p className="text-muted mb-0">
                        Color-coded indicators show which documents are pending, received, or require attention.
                      </p>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent">
                  <div className="d-flex">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <h4 className="h5">Client Communication Logs</h4>
                      <p className="text-muted mb-0">
                        Track all client interactions and communications in one centralized location.
                      </p>
                    </div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Documents Section */}
      <section id="documents" className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <span className="text-primary fw-bold">DOCUMENTS</span>
              <h2 className="display-5 fw-bold mb-3">Streamlined Document Management</h2>
              <p className="lead text-muted">
                Securely manage all property transaction documents in one centralized system.
              </p>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col lg={6} className="order-lg-2 mb-4 mb-lg-0">
              <Image 
                src="https://via.placeholder.com/800x600" 
                alt="Document Management System" 
                fluid 
                rounded 
                className="shadow"
              />
            </Col>
            <Col lg={6} className="order-lg-1">
              <h3 className="fw-bold mb-4">Secure document handling features</h3>
              <ListGroup variant="flush">
                <ListGroup.Item className="border-0 bg-transparent">
                  <div className="d-flex">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div>
                      <h4 className="h5">Bank-Level Security</h4>
                      <p className="text-muted mb-0">
                        256-bit encryption ensures all sensitive property documents remain protected.
                      </p>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent">
                  <div className="d-flex">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <i className="fas fa-signature"></i>
                    </div>
                    <div>
                      <h4 className="h5">Electronic Signatures</h4>
                      <p className="text-muted mb-0">
                        Legally binding e-signature capabilities for faster document execution.
                      </p>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent">
                  <div className="d-flex">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <i className="fas fa-file-alt"></i>
                    </div>
                    <div>
                      <h4 className="h5">Document Templates</h4>
                      <p className="text-muted mb-0">
                        Customizable templates for all standard conveyancing documents.
                      </p>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent">
                  <div className="d-flex">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <i className="fas fa-history"></i>
                    </div>
                    <div>
                      <h4 className="h5">Version Control</h4>
                      <p className="text-muted mb-0">
                        Track document changes with comprehensive version history and audit trails.
                      </p>
                    </div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <span className="text-primary fw-bold">FAQ</span>
              <h2 className="display-5 fw-bold mb-3">Frequently Asked Questions</h2>
              <p className="lead text-muted">
                Find answers to common questions about our conveyancing software.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={8}>
              <Accordion activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                {faqs.map((faq, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body>{faq.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4">Make property transactions seamless</h2>
              <p className="lead mb-4">
                Contact us today to learn how our conveyancing software can transform your 
                property transaction process, reduce errors, and improve client satisfaction.
              </p>
              <ListGroup variant="flush" className="bg-transparent">
                <ListGroup.Item className="bg-transparent text-white border-0">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-warning me-3"></i>
                    <span>Reduce transaction time by up to 40%</span>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent text-white border-0">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-warning me-3"></i>
                    <span>Minimize errors with automated checks</span>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent text-white border-0">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-warning me-3"></i>
                    <span>Improve client communication and satisfaction</span>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col lg={6}>
              <Card className="shadow">
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Message</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter your message"
                      />
                    </Form.Group>
                    <Button variant="warning" className="w-100">Send Message</Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <span className="text-primary fw-bold">TESTIMONIALS</span>
              <h2 className="display-5 fw-bold mb-3">Trusted by property professionals</h2>
              <p className="lead text-muted">
                See what our clients have to say about our conveyancing software solutions.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {[1, 2, 3, 4].map((item) => (
              <Col md={6} lg={3} key={item}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="text-warning mb-3">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                    <p className="text-muted mb-4">
                      "This software has transformed our conveyancing process. We've reduced 
                      transaction times by 35% and our clients love the transparency."
                    </p>
                    <div className="d-flex align-items-center">
                      <i className="fas fa-user-circle text-primary me-3 fs-3"></i>
                      <div>
                        <h5 className="mb-0">Sarah Johnson</h5>
                        <small className="text-muted">Partner, Johnson & Associates</small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    </div>
    
      {/* Footer */}
      <FooterSection/>
    </div>
  );
};

export default Conveyancing;