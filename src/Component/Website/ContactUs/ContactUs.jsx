import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import FooterSection from '../HomePages/FooterSection';
import Header from '../HomePages/Header';

const ContactUs = () => {
  return (
    <div className="w-100">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="position-relative mt-3" style={{ height: '400px' }}>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20office%20interior%20with%20geometric%20patterns%20and%20warm%20lighting%20creating%20a%20professional%20atmosphere%20perfect%20for%20a%20software%20company%20contact%20page%20with%20subtle%20orange%20and%20blue%20accents&width=1440&height=400')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="position-absolute w-100 h-100 bg-dark opacity-75"></div>
        </div>
        <Container className="h-100 position-relative text-white d-flex flex-column justify-content-center">
          <h1 className="fw-bold display-4 mb-3">Get in Touch</h1>
          <p className="fs-5" style={{ maxWidth: '600px' }}>
            We're here to help and answer any questions you might have. We look forward to hearing from you.
          </p>
        </Container>
      </section>

      {/* Contact Section */}
      <Container className="py-5">
        <Row className="g-4">
          {/* Contact Info */}
          <Col lg={6}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h4 className="text-dark fw-bold mb-4">Contact Information</h4>
                <div className="mb-3 d-flex">
                  <i className="fas fa-map-marker-alt me-3 mt-1" style={{color: '#f76b1c'}} />
                  <div>
                    <strong className="d-block">Address</strong>
                    <span>633 Halifax Road<br />Liversedge<br />WF15 8HG</span>
                  </div>
                </div>
                <div className="mb-3 d-flex">
                  <i className="fas fa-phone me-3 mt-1" style={{color: '#f76b1c'}} />
                  <div>
                    <strong className="d-block">Phone</strong>
                    <span>+44 7977 317760</span>
                  </div>
                </div>
                <div className="d-flex">
                  <i className="fas fa-envelope me-3 mt-1" style={{color: '#f76b1c'}} />
                  <div>
                    <strong className="d-block">Email</strong>
                    <span>sales@fastracksoftware.co.uk</span>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card className="shadow-sm h-50">
              <Card.Body>
                <h4 className="text-dark fw-bold mb-4">Business Hours</h4>
                <div className="d-flex justify-content-between mb-2">
                  <span>Monday - Friday</span><span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Saturday</span><span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Sunday</span><span>Closed</span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col lg={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <h4 className="text-dark fw-bold mb-4">Send us a Message</h4>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="Enter your phone" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter subject" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Type your message..." />
                  </Form.Group>
                  <Button variant="warning" className="w-100 text-white py-2" style={{backgroundColor: '#f76b1c' , color: 'white'}}
>Send Message</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <FooterSection />

        <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-[#f76b1c] text-white p-3 rounded-full shadow-lg hover:bg-[#f76b1c] transition-colors cursor-pointer"
      >
        <i className="fas fa-chevron-up"></i>
      </button>


    </div>
  );
};

export default ContactUs;
