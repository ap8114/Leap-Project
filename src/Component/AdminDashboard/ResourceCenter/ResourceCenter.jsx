import React from 'react';
import { Container, Row, Col, Form, Card, Button, InputGroup } from 'react-bootstrap';
import FooterSection from '../../Website/HomePages/FooterSection';
import { FaSearch } from 'react-icons/fa';
const ResourceCenter = () => {
  return (
    <div>
      <div className="p-5">
        <div className="py-5">
          <div className='w-100 p-5 bg-dark text-white'>
            {/* Hero Section */}
            <div className="row align-items-center">
              <div className="col-md-7 text-center text-md-start">
                <span
                  className="mb-3 px-3 py-2 fw-semibold"
                  style={{
                    borderRadius: '20px',
                    backgroundColor: '#f76b1c',
                    color: '#fff',
                    display: 'inline-block',
                  }}
                >
                  WELCOME TO THE FASTTRACK HELP CENTER
                </span>

                <h1 className="display-4 fw-bold mb-3">How can we help you?</h1>
                <p className="lead mb-4">
                  Search our knowledge base for answers to common questions
                </p>

                <form className="" style={{ maxWidth: '700px' }}>
                  <div className="input-group align-items-start">
                    <div
                      className="input-group-text border-0"
                      style={{
                        height: '48px',
                        borderTopLeftRadius: '50px',
                        borderBottomLeftRadius: '50px',
                         backgroundColor: '#f76b1c',
                         
                      }}
                    >
                      <i className="fa fa-search text-white"></i>
                    </div>

                    <input
                      type="search"
                      placeholder="Search..."
                      className="form-control border-3"
                      style={{
                        height: '48px',
                        borderRadius: '0',
                      }}
                    />

                    <button
                      type="submit"
                      className="btn text-white"
                      style={{
                        backgroundColor: '#f76b1c',
                        border: 'none',
                        height: '48px',
                        borderTopRightRadius: '50px',
                        borderBottomRightRadius: '50px',
                        padding: '0 24px',
                      }}
                    >
                      Search
                    </button>
                  </div>
                </form>

              </div>

              <div className="col-md-5 mt-5 mt-md-0">
                <div className="card shadow-lg border-0 rounded-4">
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">For first time users</h5>

                    <div className="border-bottom py-2">
                      <div className="fw-semibold">Create Contacts</div>
                      <small className="text-muted">
                        In Clio Manage, you can create person or company cont...
                      </small>
                    </div>
                    <div className="border-bottom py-2">
                      <div className="fw-semibold">Set Up Clio Manage</div>
                      <small className="text-muted">
                        Clio Manage is a practice management software where y...
                      </small>
                    </div>
                    <div className="py-2">
                      <div className="fw-semibold">Create Matters</div>
                      <small className="text-muted">
                        Matters in Clio are your legal cases. In Clio Manage, matt...
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* <hr className="my-5" /> */}

        {/* Categories Section */}
      <Row className="mb-5">
  <Col>
    <h2 className="mb-4">Categories</h2>
    <Row>
      {[
        {
          title: 'Accounting',
          desc: 'Track expenses, manage ledgers, and reconcile transactions.',
          icon: 'fa-file-invoice-dollar',
        },
        {
          title: 'Billing',
          desc: 'Create, send, and manage invoices and payment reminders.',
          icon: 'fa-receipt',
        },
        {
          title: 'Calendar',
          desc: 'Schedule events, deadlines, and court dates seamlessly.',
          icon: 'fa-calendar-alt',
        },
        {
          title: 'Communications',
          desc: 'Centralize emails, texts, and client messages in one place.',
          icon: 'fa-comments',
        },
        {
          title: 'Documents',
          desc: 'Create, edit, and securely store legal documents.',
          icon: 'fa-file-alt',
        },
        {
          title: 'Get Started',
          desc: 'Quick setup guides to get your practice up and running.',
          icon: 'fa-rocket',
        },
        {
          title: 'Matters',
          desc: 'Organize and manage all your legal matters and cases.',
          icon: 'fa-briefcase',
        },
        {
          title: 'Payments',
          desc: 'Accept online payments and track transaction history.',
          icon: 'fa-credit-card',
        },
        {
          title: 'Reports',
          desc: 'Analyze firm performance with detailed reports.',
          icon: 'fa-chart-line',
        },
      ].map((category, index) => (
        <Col key={index} sm={6} md={4} lg={3} className="mb-4">
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="text-center">
              <div
                className="mb-3"
                style={{
                  fontSize: '1.8rem',
                  color: '#f76b1c',
                }}
              >
                <i className={`fas ${category.icon}`}></i>
              </div>
              <Card.Title className="fw-bold">{category.title}</Card.Title>
              <Card.Text className="text-muted small">{category.desc}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Col>
</Row>


        {/* <hr className="my-5" /> */}

        {/* Quick Links Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="mb-4">Quick links</h2>
            <Row>
              <Col md={4} className="mb-4">
                <Card className="h-100 border-primary">
                  <Card.Body className="text-center">
                    <Card.Title>Live Training Sessions</Card.Title>
                    <Card.Text>
                      Learn Clio faster with live, interactive training. Get the essential skills to manage your practice efficiently, whether you're just starting or refining your workflow.
                    </Card.Text>
                    <Button variant="primary">View Schedule</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="h-100 border-success">
                  <Card.Body className="text-center">
                    <Card.Title>Customer Community</Card.Title>
                    <Card.Text>
                      Connect with fellow Clio users, get answers to your questions, and stay informed about new features and pilot programs.
                    </Card.Text>
                    <Button variant="success">Join Community</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="h-100 border-warning">
                  <Card.Body className="text-center">
                    <Card.Title>Clio Certification</Card.Title>
                    <Card.Text>
                      Build expertise in legal practice management with content designed to enhance your skills, improve efficiency, and deepen your understanding of Clio.
                    </Card.Text>
                    <Button variant="warning">Get Certified</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      {/* Rest of page remains unchanged */}
      <div className="bg-white text-dark py-5">
        <Container>
          <Row className="text-center">
            <Col md={6} className="text-start">
              <h3 className="fw-bold mb-3">Still have questions?</h3>
              <p className="mb-4">
                Get personalized support—24 hours a day, 5 days a week—from the largest and most experienced team in the industry.
              </p>
              <Button variant="primary">
                <i className="bi bi-telephone me-2"></i> 1-888-858-2546
              </Button>
            </Col>
            <Col md={6}>
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                alt="Support Agent"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <FooterSection />
    </div>
  );
};

export default ResourceCenter;