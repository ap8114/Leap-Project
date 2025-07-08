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
  Image 
} from 'react-bootstrap';
import FooterSection from '../../HomePages/FooterSection';
import Header from '../../HomePages/Header';

const ClientService = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [activeKey, setActiveKey] = useState(null);

  const faqItems = [
    {
      question: "What is LawConnect?",
      answer: "LawConnect is a secure client portal that allows legal professionals to share documents, communicate, and collaborate with clients in a secure environment."
    },
    {
      question: "How secure is my data?",
      answer: "All data is stored on secure servers provided by Amazon Web Services, one of the world's largest and most secure data storage providers. LawConnect is SOC 2 Type 1 compliant, ensuring the highest standards for security and confidentiality."
    },
    {
      question: "How do I share documents with clients?",
      answer: "You can easily share documents with clients directly from your matter. Simply select the document you wish to share and choose the recipient from your contacts."
    }
  ];

  return (
    <div className="bg-white">

        <Header />
      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <p className="text-muted mb-2">Powered by lawconnect</p>
              <h1 className="display-4 font-weight-bold mb-4">Streamline your client communication</h1>
              <p className="lead mb-4">
                Experience simplified and secure client communication through LEAP's integrated customizable client portal.
              </p>
              <Button variant="warning" size="lg">BOOK DEMONSTRATION</Button>
            </Col>
            <Col md={6}>
              <Image 
                src="https://via.placeholder.com/600x400" 
                alt="Client communication platform" 
                fluid
                rounded
                className="shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Overview */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Secure document sharing made simple</h2>
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
            {['Secure data', 'Revoke access', 'Share large files', 'Your firm\'s brand', 'Get paid faster'].map((feature, index) => (
              <span key={index} className="badge bg-light text-dark p-3">
                {feature}
              </span>
            ))}
          </div>

          {/* Security Features Section */}
          <Row className="align-items-center mb-5">
            <Col md={6} className="mb-4 mb-md-0">
              <p className="text-muted mb-2">Powered by lawconnect</p>
              <h3 className="mb-4">Safeguard your data with secure correspondence</h3>
              <p className="text-muted mb-3">
                Unlike email, which can be susceptible to cybersecurity breaches, LEAP offers a secure environment.
              </p>
              <p className="text-muted">
                You can work confidently and securely, without worrying that yours or your clients' files will fall into the wrong hands.
              </p>
            </Col>
            <Col md={6}>
              <Image 
                src="https://via.placeholder.com/600x400" 
                alt="Secure document management dashboard" 
                fluid
                rounded
                className="shadow"
              />
            </Col>
          </Row>

          {/* Electronic Signatures Section */}
          <Row className="align-items-center mb-5">
            <Col md={6} className="order-md-2 mb-4 mb-md-0">
              <h3 className="mb-4">Start work quickly</h3>
              <p className="text-muted mb-3">
                Backed by industry leaders DocuSign, our integrated electronic signatures shorten the time it takes for a matter to start.
              </p>
              <p className="text-muted">
                By requesting a signature online, directly from the matter for your Terms and Conditions, you can begin working immediately.
              </p>
            </Col>
            <Col md={6} className="order-md-1">
              <Image 
                src="https://via.placeholder.com/600x400" 
                alt="Electronic signature interface" 
                fluid
                rounded
                className="shadow"
              />
            </Col>
          </Row>

          {/* Security Certification */}
          <Row className="align-items-center mb-5">
            <Col md={8} className="mb-4 mb-md-0">
              <h3 className="mb-4">Security and compliance</h3>
              <p className="text-muted mb-3">
                LawConnect is SOC 2 Type 1 compliant. This attests to our unwavering commitment to the highest standards for security.
              </p>
              <p className="text-muted">
                Our internal security controls underwent a rigorous and independent audit by AssuranceLab.
              </p>
            </Col>
            <Col md={4} className="text-center">
              <div className="bg-primary rounded-circle p-5 d-inline-flex align-items-center justify-content-center shadow">
                <div className="text-white text-center">
                  <div className="font-weight-bold">AICPA</div>
                  <div className="font-weight-bold display-4 mb-1">SOC</div>
                  <div className="small">SERVICE ORGANIZATION</div>
                </div>
              </div>
            </Col>
          </Row>

          {/* Testimonial */}
          <div className="text-center mb-5">
            <Image 
              src="https://via.placeholder.com/100x100" 
              roundedCircle 
              className="mb-3"
            />
            <blockquote className="blockquote mb-3 mx-auto" style={{maxWidth: '800px'}}>
              <p className="font-italic text-muted">
                "LawConnect has transformed how we interact with clients. The secure document sharing and electronic signatures have cut our onboarding time in half."
              </p>
              <footer className="blockquote-footer">Jane Doe, Legal Partner at Smith & Associates</footer>
            </blockquote>
          </div>

          {/* Contact Form Section */}
          <Row className="align-items-center mb-5">
            <Col md={6} className="mb-4 mb-md-0">
              <h3 className="mb-4">Provide 24/7 access to information and services</h3>
              <ListGroup variant="flush">
                <ListGroup.Item className="border-0">
                  <i className="fas fa-check-circle text-warning mr-2"></i>
                  Secure document sharing
                </ListGroup.Item>
                <ListGroup.Item className="border-0">
                  <i className="fas fa-check-circle text-warning mr-2"></i>
                  Electronic signatures
                </ListGroup.Item>
                <ListGroup.Item className="border-0">
                  <i className="fas fa-check-circle text-warning mr-2"></i>
                  Client communication
                </ListGroup.Item>
                <ListGroup.Item className="border-0">
                  <i className="fas fa-check-circle text-warning mr-2"></i>
                  24/7 portal access
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={6}>
              <Card className="shadow">
                <Card.Body>
                  <Form>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control 
                            type="text" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control 
                            type="text" 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Company</Form.Label>
                      <Form.Control 
                        type="text" 
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </Form.Group>
                    <Button variant="dark" className="w-100 mb-3">SEND REQUEST</Button>
                    <p className="text-muted small text-center">
                      By submitting this form, you agree to our <a href="#" className="text-warning">Privacy Policy</a>
                    </p>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Access Documents CTA */}
          <Card className="mb-5">
            <Card.Body className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div className="mb-3 mb-md-0">
                <h3 className="mb-2">Access your shared documents</h3>
                <p className="text-muted mb-0">Click below to access documents that have been shared with you.</p>
              </div>
              <Button variant="warning">ACCESS DOCUMENTS</Button>
            </Card.Body>
          </Card>

          {/* FAQ Section */}
          <div className="mb-5">
            <h3 className="text-center mb-4">Frequently asked questions</h3>
            <Accordion activeKey={activeKey} onSelect={(k) => setActiveKey(k)} className="mx-auto" style={{maxWidth: '800px'}}>
              {faqItems.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>
                    {item.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <FooterSection />
     
    </div>
  );
};

export default ClientService;