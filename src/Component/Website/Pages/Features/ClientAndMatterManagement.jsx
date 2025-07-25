import React, { useState } from 'react';

import Header from '../../HomePages/Header'
import FooterSection from '../../HomePages/FooterSection'
import { Row, Col, Container, Card, Button, Accordion, ListGroup } from 'react-bootstrap'






const ClientAndMatterManagement = () => {


     const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);};
    
const faqs = [
  {
    question: 'What does a legal practice system do?',
    answer:
      'A legal practice system is a specialized platform that helps law firms manage client relationships, case files, documents, deadlines, billing, and compliance requirements in an integrated digital environment, replacing traditional paper-based systems.',
  },
  {
    question: "How can this improve our firm's operations?",
    answer:
      'By centralizing information, automating routine tasks, ensuring compliance, and providing remote access, our solution reduces administrative burdens, minimizes errors, and allows legal professionals to focus on client service rather than paperwork.',
  },
  {
    question: 'Can we create automated legal processes?',
    answer:
      'Yes, our platform includes tools to automate document assembly, deadline tracking, client communications, and other repetitive tasks specific to your practice areas, all without requiring programming knowledge.',
  },
  {
    question: 'What efficiency gains can we expect?',
    answer:
      'Firms typically see 30–50% reduction in administrative time, faster conflict checking, improved billing accuracy, better deadline compliance, and enhanced collaboration among team members.',
  },
];
    return (
        <div>
            <Header />
            <div className="">
                {/* Hero Section */}
                <div className="container-fluid py-5 mt-4" style={{ backgroundColor: '#2c3e50', color: 'white' }}>
                    <div className="container-fluid">
                        <Row className="align-items-center">
                            <Col lg={6} className="ps-lg-5">
                                <h1 className="display-4 fw-bold mb-4">Modern Legal Practice Solution</h1>
                                <p className="lead mb-4">
                                    Streamline your firm's operations with our comprehensive legal practice platform designed to enhance efficiency and compliance.
                                </p>
                                <Button
                                    variant="outline-light"
                                    size="lg"
                                    className="rounded-pill px-4"
                                    style={{ borderWidth: '2px', color: 'white', borderColor: '#f76b1c', backgroundColor: '#f76b1c' }}
                                >
                                    Schedule a Demo
                                </Button>
                            </Col>
                            <Col lg={6} className="pe-lg-5">
                                <img
                                    src="https://i.ibb.co/pjTYW5Fw/hands-using-laptop-with-scale-icon-legal-court-word-concept.jpg"
                                    alt="Legal software dashboard"
                                    className="img-fluid rounded shadow"
                                />
                            </Col>
                        </Row>
                    </div>
                </div>

                {/* Features Section */}
                <section className="py-5">
                    <div className="container-fluid">
                        <h2 className="text-center mb-5">Transform Your Legal Practice</h2>
                        <Row className="g-4 px-lg-5">
                            <Col md={4}>
                                <Card className="h-100 border-0 shadow-sm">
                                    <Card.Body className="p-4">
                                        <div
                                            className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                backgroundColor: 'rgba(247, 107, 28, 0.1)'
                                            }}
                                        >
                                            <i className="bi bi-search fs-3" style={{ color: '#f76b1c' }}></i>
                                        </div>
                                        <h3 style={{ color: '#2c3e50' }}>Instant Compliance Verification</h3>
                                        <p>
                                            Our system performs comprehensive ethical screening with a single action, scanning your entire database to identify potential professional responsibility concerns.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={4}>
                                <Card className="h-100 border-0 shadow-sm">
                                    <Card.Body className="p-4">
                                        <div
                                            className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                backgroundColor: 'rgba(247, 107, 28, 0.1)'
                                            }}
                                        >
                                            <i className="bi bi-folder fs-3" style={{ color: '#f76b1c' }}></i>
                                        </div>
                                        <h3 style={{ color: '#2c3e50' }}>Unified Case Hub</h3>
                                        <p>
                                            All client files, communications, and financial data consolidated in one secure digital workspace accessible from anywhere, at any time.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={4}>
                                <Card className="h-100 border-0 shadow-sm">
                                    <Card.Body className="p-4">
                                        <div
                                            className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                backgroundColor: 'rgba(247, 107, 28, 0.1)'
                                            }}
                                        >
                                            <i className="bi bi-calendar-check fs-3" style={{ color: '#f76b1c' }}></i>
                                        </div>
                                        <h3 style={{ color: '#2c3e50' }}>Smart Calendar System</h3>
                                        <p>
                                            Synchronized with Microsoft 365 to ensure you never miss deadlines, hearings, or important appointments across all your devices.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-5 bg-white">
                    <div className="container-fluid">
                        <Row className="align-items-center px-lg-5">
                            <Col lg={6} className="mb-4 mb-lg-0">
                                <img
                                    src="https://i.ibb.co/99yVGDhK/automation-production-system-operation-precess-concept.jpg"
                                    alt="Workflow automation"
                                    className="img-fluid rounded shadow"
                                />
                            </Col>
                            <Col lg={6}>
                                <h2 className="mb-4" style={{ color: '#2c3e50' }}>Tailored to Your Practice Needs</h2>
                                <p>
                                    Our platform comes pre-configured with practice area templates but adapts to your specific requirements. Create custom matter blueprints, automated task sequences, and sophisticated processes without coding expertise.
                                </p>
                                <ListGroup variant="flush" className="mb-4">
                                    <ListGroup.Item className="border-0 ps-0">
                                        <i className="bi bi-check-circle-fill me-2" style={{ color: '#f76b1c' }}></i>
                                        Pre-built legal matter frameworks
                                    </ListGroup.Item>
                                    <ListGroup.Item className="border-0 ps-0">
                                        <i className="bi bi-check-circle-fill me-2" style={{ color: '#f76b1c' }}></i>
                                        customizable document generation
                                    </ListGroup.Item>
                                    <ListGroup.Item className="border-0 ps-0">
                                        <i className="bi bi-check-circle-fill me-2" style={{ color: '#f76b1c' }}></i>
                                        Visual process designer for complex workflows
                                    </ListGroup.Item>
                                </ListGroup>
                                <Button
                                    variant="custom"
                                    className="rounded-pill px-4"
                                    style={{ backgroundColor: '#f76b1c', borderColor: '#f76b1c' }}
                                >
                                    Learn More About customization
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
                    <Container fluid>
                        <h2 className="text-center mb-5" style={{ color: '#2c3e50' }}>Key Advantages for Your Firm</h2>
                        <Row className="px-lg-5">
                            <Col md={6} lg={4} className="mb-4">
                                <div className="d-flex">
                                    <div className="me-3">
                                        <i className="bi bi-check2-circle fs-3" style={{ color: '#f76b1c' }}></i>
                                    </div>
                                    <div>
                                        <h4 style={{ color: '#2c3e50' }}>Centralized Information</h4>
                                        <p>All case details in one secure location with version control</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className="mb-4">
                                <div className="d-flex">
                                    <div className="me-3">
                                        <i className="bi bi-check2-circle fs-3" style={{ color: '#f76b1c' }}></i>
                                    </div>
                                    <div>
                                        <h4 style={{ color: '#2c3e50' }}>Paperless File Management</h4>
                                        <p>Digitize correspondence and evidence with powerful search</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className="mb-4">
                                <div className="d-flex">
                                    <div className="me-3">
                                        <i className="bi bi-check2-circle fs-3" style={{ color: '#f76b1c' }}></i>
                                    </div>
                                    <div>
                                        <h4 style={{ color: '#2c3e50' }}>Secure Client Portals</h4>
                                        <p>Exchange documents safely with clients and co-counsel</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className="mb-4">
                                <div className="d-flex">
                                    <div className="me-3">
                                        <i className="bi bi-check2-circle fs-3" style={{ color: '#f76b1c' }}></i>
                                    </div>
                                    <div>
                                        <h4 style={{ color: '#2c3e50' }}>Mobile Practice Management</h4>
                                        <p>Access files and manage cases from any location</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className="mb-4">
                                <div className="d-flex">
                                    <div className="me-3">
                                        <i className="bi bi-check2-circle fs-3" style={{ color: '#f76b1c' }}></i>
                                    </div>
                                    <div>
                                        <h4 style={{ color: '#2c3e50' }}>Rapid Ethical Screening</h4>
                                        <p>Immediate identification of professional conflicts</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className="mb-4">
                                <div className="d-flex">
                                    <div className="me-3">
                                        <i className="bi bi-check2-circle fs-3" style={{ color: '#f76b1c' }}></i>
                                    </div>
                                    <div>
                                        <h4 style={{ color: '#2c3e50' }}>Team Collaboration Tools</h4>
                                        <p>Work simultaneously on cases with internal and external teams</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* FAQ Section */}
         <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-md shadow-sm">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center text-gray-800 font-medium text-lg focus:outline-none"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5  transform transition-transform duration-200 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

                {/* CTA Section */}
                <section className="py-5 mb-2" style={{ backgroundColor: '#2c3e50', color: 'white' }}>
                    <div className="text-center px-lg-5">
                        <h2 className="mb-4">Ready to Modernize Your Practice?</h2>
                        <p className="lead mb-4">Discover how our solution can transform your firm's operations and client service.</p>
                        <Button
                            variant="outline-light"
                            size="lg"
                            className="rounded-pill px-4 me-2"
                            style={{ borderWidth: '2px', color: 'white', borderColor: '#f76b1c', backgroundColor: '#f76b1c' }}
                        >
                            Request Demo
                        </Button>
                        <Button
                            variant="outline-light"
                            size="lg"
                            className="rounded-pill px-4"
                            style={{ borderWidth: '2px', color: '#f76b1c', borderColor: '#f76b1c' }}
                        >
                            Contact Sales
                        </Button>
                    </div>
                </section>
            </div>

            <FooterSection />

            {/* Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-[#f76b1c] text-white p-3 rounded-full shadow-lg hover:bg-[#f76b1c] transition-colors cursor-pointer"
            >
                <i className="fas fa-chevron-up"></i>
            </button>

        </div>
    )
}

export default ClientAndMatterManagement