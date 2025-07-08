import React, { useState } from 'react';

const Conveyancing = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleFaqToggle = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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
    <div className="bg-white text-dark">
      {/* Hero Section */}
      <section className="position-relative overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 bg-white pt-5 pb-5 pb-lg-0">
              <div className="container pt-5">
                <div className="text-center text-lg-start">
                  <h1 className="display-4 fw-bold text-primary mb-4">
                    Practice the Significant<br />
                    Conveyancing Software
                  </h1>
                  <p className="lead text-muted mb-5">
                    Streamline your property transactions with our comprehensive conveyancing solution. Manage documents, track progress, and collaborate securely in one platform.
                  </p>
                  <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
                    <a href="#" className="btn btn-warning btn-lg px-4 py-3">
                      Get Started
                    </a>
                    <a href="#" className="btn btn-outline-secondary btn-lg px-4 py-3">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <img 
                className="img-fluid w-100 h-100 object-fit-cover" 
                src="https://readdy.ai/api/search-image?query=Professional%20real%20estate%20conveyancing%20concept%20with%20wooden%20desk%2C%20property%20keys%2C%20legal%20documents%2C%20and%20contracts.%20Modern%20clean%20composition%20with%20soft%20natural%20lighting%20and%20neutral%20background%2C%20perfect%20for%20property%20transaction%20services&width=800&height=600&seq=1&orientation=landscape" 
                alt="Conveyancing Software" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-warning text-white mb-3">Features</span>
            <h2 className="display-5 fw-bold mb-3 text-primary">
              Complete property transaction software
            </h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              Our comprehensive solution handles every aspect of your conveyancing workflow, from client onboarding to completion.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-warning rounded p-3 me-3">
                      <i className="fas fa-tasks text-white fs-4"></i>
                    </div>
                    <h3 className="h5 mb-0 text-primary">Streamlined Workflow</h3>
                  </div>
                  <p className="text-muted">
                    Automate routine tasks and guide your team through each stage of the conveyancing process with customizable workflows.
                  </p>
                </div>
                <div className="bg-light p-3">
                  <img 
                    className="img-fluid rounded" 
                    src="https://readdy.ai/api/search-image?query=Modern%20dashboard%20interface%20showing%20property%20transaction%20workflow%20with%20clean%20design%2C%20progress%20indicators%2C%20and%20task%20management.%20Professional%20UI%20with%20blue%20and%20orange%20color%20scheme%2C%20showing%20organized%20data%20visualization&width=600&height=300&seq=2&orientation=landscape" 
                    alt="Workflow Dashboard" 
                  />
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-warning rounded p-3 me-3">
                      <i className="fas fa-file-contract text-white fs-4"></i>
                    </div>
                    <h3 className="h5 mb-0 text-primary">Document Management</h3>
                  </div>
                  <p className="text-muted">
                    Securely store, organize and share all property transaction documents with clients and stakeholders in one central location.
                  </p>
                </div>
                <div className="bg-light p-3">
                  <img 
                    className="img-fluid rounded" 
                    src="https://readdy.ai/api/search-image?query=Document%20management%20system%20interface%20showing%20organized%20property%20documents%2C%20secure%20file%20storage%2C%20and%20sharing%20capabilities.%20Professional%20UI%20with%20folder%20structure%20and%20document%20preview%20functionality&width=600&height=300&seq=3&orientation=landscape" 
                    alt="Document Management" 
                  />
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-warning rounded p-3 me-3">
                      <i className="fas fa-chart-line text-white fs-4"></i>
                    </div>
                    <h3 className="h5 mb-0 text-primary">Real-time Tracking</h3>
                  </div>
                  <p className="text-muted">
                    Monitor transaction progress in real-time with comprehensive dashboards and automated status updates for all parties.
                  </p>
                </div>
                <div className="bg-light p-3">
                  <img 
                    className="img-fluid rounded" 
                    src="https://readdy.ai/api/search-image?query=Real-time%20property%20transaction%20tracking%20dashboard%20with%20progress%20bars%2C%20status%20indicators%2C%20and%20timeline%20visualization.%20Professional%20interface%20showing%20transaction%20milestones%20and%20completion%20percentage&width=600&height=300&seq=4&orientation=landscape" 
                    alt="Real-time Tracking" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transaction Tracking Dashboard */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-warning text-white mb-3">Dashboard</span>
            <h2 className="display-5 fw-bold mb-3 text-primary">
              Comprehensive Dashboard Overview
            </h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              Track every aspect of your property transactions with our intuitive and powerful dashboard.
            </p>
          </div>

          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img 
                className="img-fluid rounded shadow" 
                src="https://readdy.ai/api/search-image?query=Professional%20conveyancing%20software%20dashboard%20showing%20property%20transaction%20details%2C%20progress%20tracking%2C%20and%20document%20status.%20Clean%20interface%20with%20blue%20and%20orange%20color%20scheme%20on%20a%20desktop%20screen&width=700&height=500&seq=5&orientation=landscape" 
                alt="Transaction Dashboard" 
              />
            </div>
            <div className="col-lg-6">
              <h3 className="h2 fw-bold text-primary mb-4">Powerful transaction tracking capabilities</h3>
              <ul className="list-unstyled">
                <li className="d-flex mb-4">
                  <div className="flex-shrink-0">
                    <div className="d-flex align-items-center justify-content-center rounded-circle bg-warning text-white" style={{width: '40px', height: '40px'}}>
                      <i className="fas fa-check"></i>
                    </div>
                  </div>
                  <div className="ms-4">
                    <h4 className="h5 fw-bold text-primary">Visual Progress Tracking</h4>
                    <p className="text-muted mb-0">Interactive progress bars show exactly where each transaction stands at a glance.</p>
                  </div>
                </li>
                <li className="d-flex mb-4">
                  <div className="flex-shrink-0">
                    <div className="d-flex align-items-center justify-content-center rounded-circle bg-warning text-white" style={{width: '40px', height: '40px'}}>
                      <i className="fas fa-check"></i>
                    </div>
                  </div>
                  <div className="ms-4">
                    <h4 className="h5 fw-bold text-primary">Milestone Tracking</h4>
                    <p className="text-muted mb-0">Clear timeline visualization of completed and upcoming transaction milestones.</p>
                  </div>
                </li>
                <li className="d-flex mb-4">
                  <div className="flex-shrink-0">
                    <div className="d-flex align-items-center justify-content-center rounded-circle bg-warning text-white" style={{width: '40px', height: '40px'}}>
                      <i className="fas fa-check"></i>
                    </div>
                  </div>
                  <div className="ms-4">
                    <h4 className="h5 fw-bold text-primary">Document Status Indicators</h4>
                    <p className="text-muted mb-0">Color-coded indicators show which documents are pending, received, or require attention.</p>
                  </div>
                </li>
                <li className="d-flex">
                  <div className="flex-shrink-0">
                    <div className="d-flex align-items-center justify-content-center rounded-circle bg-warning text-white" style={{width: '40px', height: '40px'}}>
                      <i className="fas fa-check"></i>
                    </div>
                  </div>
                  <div className="ms-4">
                    <h4 className="h5 fw-bold text-primary">Client Communication Logs</h4>
                    <p className="text-muted mb-0">Track all client interactions and communications in one centralized location.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Document Management Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-warning text-white mb-3">Documents</span>
            <h2 className="display-5 fw-bold mb-3 text-primary">
              Streamlined Document Management
            </h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              Securely manage all property transaction documents in one centralized system.
            </p>
          </div>

          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-lg-2">
              <img 
                className="img-fluid rounded shadow" 
                src="https://readdy.ai/api/search-image?query=Document%20management%20interface%20showing%20property%20transaction%20documents%2C%20secure%20file%20storage%2C%20and%20document%20templates.%20Professional%20UI%20with%20folder%20structure%20and%20document%20preview%20functionality%20on%20a%20clean%20background&width=700&height=500&seq=6&orientation=landscape" 
                alt="Document Management System" 
              />
            </div>
            <div className="col-lg-6 order-lg-1">
              <h3 className="h2 fw-bold text-primary mb-4">Secure document handling features</h3>
              <ul className="list-unstyled">
                <li className="d-flex mb-4">
                  <div className="flex-shrink-0">
                    <div className="d-flex align-items-center justify-content-center rounded-circle bg-warning text-white" style={{width: '40px', height: '40px'}}>
                      <i className="fas fa-shield-alt"></i>
                    </div>
                  </div>
                  <div className="ms-4">
                    <h4 className="h5 fw-bold text-primary">Bank-Level Security</h4>
                    <p className="text-muted mb-0">256-bit encryption ensures all sensitive property documents remain protected.</p>
                  </div>
                </li>
                <li className="d-flex mb-4">
                  <div className="flex-shrink-0">
                    <div className="d-flex align-items-center justify-content-center rounded-circle bg-warning text-white" style={{width: '40px', height: '40px'}}>
                      <i className="fas fa-signature"></i>
                    </div>
                  </div>
                  <div className="ms-4">
                    <h4 className="h5 fw-bold text-primary">Electronic Signatures</h4>
                    <p className="text-muted mb-0">Legally binding e-signature capabilities for faster document execution.</p>
                  </div>
                </li>
                <li className="d-flex mb-4">
                  <div className="flex-shrink-0">
                    <div className="d-flex align-items-center justify-content-center rounded-circle bg-warning text-white" style={{width: '40px', height: '40px'}}>
                      <i className="fas fa-file-alt"></i>
                    </div>
                  </div>
                  <div className="ms-4">
                    <h4 className="h5 fw-bold text-primary">Document Templates</h4>
                    <p className="text-muted mb-0">Customizable templates for all standard conveyancing documents.</p>
                  </div>
                </li>
                <li className="d-flex">
                  <div className="flex-shrink-0">
                    <div className="d-flex align-items-center justify-content-center rounded-circle bg-warning text-white" style={{width: '40px', height: '40px'}}>
                      <i className="fas fa-history"></i>
                    </div>
                  </div>
                  <div className="ms-4">
                    <h4 className="h5 fw-bold text-primary">Version Control</h4>
                    <p className="text-muted mb-0">Track document changes with comprehensive version history and audit trails.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-warning text-white mb-3">FAQ</span>
            <h2 className="display-5 fw-bold mb-3 text-primary">
              Frequently Asked Questions
            </h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              Find answers to common questions about our conveyancing software.
            </p>
          </div>

          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div className="accordion-item border-0 mb-3 shadow-sm" key={index}>
                <h3 className="accordion-header" id={`heading${index}`}>
                  <button
                    className={`accordion-button ${expandedFaq === index ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => handleFaqToggle(index)}
                    aria-expanded={expandedFaq === index}
                    aria-controls={`collapse${index}`}
                  >
                    {faq.question}
                  </button>
                </h3>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${expandedFaq === index ? 'show' : ''}`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4">
                Make property transactions seamless
              </h2>
              <p className="lead mb-5">
                Contact us today to learn how our conveyancing software can transform your property transaction process, reduce errors, and improve client satisfaction.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex mb-4">
                  <div className="flex-shrink-0 text-warning">
                    <i className="fas fa-check-circle fs-4"></i>
                  </div>
                  <div className="ms-3">
                    <h3 className="h5">Reduce transaction time by up to 40%</h3>
                  </div>
                </li>
                <li className="d-flex mb-4">
                  <div className="flex-shrink-0 text-warning">
                    <i className="fas fa-check-circle fs-4"></i>
                  </div>
                  <div className="ms-3">
                    <h3 className="h5">Minimize errors with automated checks</h3>
                  </div>
                </li>
                <li className="d-flex">
                  <div className="flex-shrink-0 text-warning">
                    <i className="fas fa-check-circle fs-4"></i>
                  </div>
                  <div className="ms-3">
                    <h3 className="h5">Improve client communication and satisfaction</h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="card shadow-lg">
                <div className="card-body p-4">
                  <form>
                    <div className="mb-4">
                      <label htmlFor="name" className="form-label fw-bold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="form-label fw-bold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label fw-bold">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-warning w-100 py-3 fw-bold">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-warning text-white mb-3">Testimonials</span>
            <h2 className="display-5 fw-bold mb-3 text-primary">
              Trusted by property professionals
            </h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
              See what our clients have to say about our conveyancing software solutions.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="text-warning mb-3">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="text-muted mb-4">
                    "This software has transformed our conveyancing process. We've reduced transaction times by 35% and our clients love the transparency."
                  </p>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-user-circle text-primary fs-3 me-3"></i>
                    <div>
                      <h4 className="h6 mb-0 text-primary">Sarah Johnson</h4>
                      <small className="text-muted">Partner, Johnson & Associates</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="text-warning mb-3">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="text-muted mb-4">
                    "The document management system alone is worth the investment. We've eliminated paper files and can access everything securely from anywhere."
                  </p>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-user-circle text-primary fs-3 me-3"></i>
                    <div>
                      <h4 className="h6 mb-0 text-primary">Michael Thompson</h4>
                      <small className="text-muted">Director, Thompson Legal</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="text-warning mb-3">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <p className="text-muted mb-4">
                    "The client portal has dramatically improved our communication. Clients can check progress anytime, reducing calls to our office."
                  </p>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-user-circle text-primary fs-3 me-3"></i>
                    <div>
                      <h4 className="h6 mb-0 text-primary">Jennifer Williams</h4>
                      <small className="text-muted">Managing Partner, Williams Property Law</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="text-warning mb-3">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="text-muted mb-4">
                    "Implementation was seamless and the support team is exceptional. They understand conveyancing and have built software that truly works for us."
                  </p>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-user-circle text-primary fs-3 me-3"></i>
                    <div>
                      <h4 className="h6 mb-0 text-primary">David Roberts</h4>
                      <small className="text-muted">CEO, Roberts Conveyancing</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <h3 className="h5 mb-4">Conveyancing Software</h3>
              <p className="text-muted small">
                Streamlining property transactions for legal professionals since 2015.
              </p>
              <div className="d-flex gap-3 mt-4">
                <a href="#" className="text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h3 className="h5 mb-4">Product</h3>
              <ul className="list-unstyled small">
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Features</a></li>
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Pricing</a></li>
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Case Studies</a></li>
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Reviews</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Updates</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3">
              <h3 className="h5 mb-4">Support</h3>
              <ul className="list-unstyled small">
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Help Center</a></li>
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Documentation</a></li>
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">API Reference</a></li>
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Community</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3">
              <h3 className="h5 mb-4">Company</h3>
              <ul className="list-unstyled small">
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">About Us</a></li>
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Careers</a></li>
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Blog</a></li>
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Press</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Partners</a></li>
              </ul>
            </div>
          </div>
          <hr className="my-4 bg-secondary" />
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="d-flex gap-3 mb-3 mb-md-0">
              <a href="#" className="text-muted small text-decoration-none">Privacy Policy</a>
              <a href="#" className="text-muted small text-decoration-none">Terms of Service</a>
              <a href="#" className="text-muted small text-decoration-none">Cookie Policy</a>
            </div>
            <p className="small text-muted mb-0">
              &copy; {new Date().getFullYear()} Conveyancing Software. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Conveyancing;