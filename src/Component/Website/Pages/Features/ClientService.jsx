import React, { useState } from 'react';
import Header from '../../HomePages/Header';
import FooterSection from '../../HomePages/FooterSection';

const ClientService = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

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
    <div className='w-100'>
      <Header />

      <div className="w-100 mt-3">
        {/* Hero Section */}
        <div className="bg-dark text-white">
          <div className="container px-4 py-5">
            <div className="row align-items-center g-5 py-5">
              <div className="col-lg-6">
                <div className="small mb-3">Powered by lawconnect</div>
                <h1 className="display-4 fw-bold mb-4">Streamline your client communication</h1>
                <p className="lead mb-4">
                  Experience simplified and secure client communication through Clio's integrated customizable client portal. Sign documents electronically, share correspondence, accept payments and collaborate in real-time directly from your matter.
                </p>
                <button className="btn btn-warning btn-lg px-4">
                  BOOK DEMONSTRATION
                </button>
              </div>
              <div className="col-lg-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20workspace%20with%20smartphone%20displaying%20secure%20document%20sharing%20app%20next%20to%20laptop%20computer%2C%20modern%20office%20setting%2C%20clean%20minimal%20design%2C%20blue%20and%20orange%20interface%20elements%2C%20high%20quality%20professional%20photo&width=600&height=400&seq=hero-image-1&orientation=landscape"
                  alt="Client communication platform"
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Overview */}
        <div className="container px-4 py-5">
          <h2 className="text-center display-5 fw-bold mb-5">Secure document sharing made simple</h2>
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {['Secure data', 'Revoke access', 'Share large files', 'Your firm\'s brand', 'Get paid faster'].map((feature, index) => (
              <span key={index} className="badge bg-light text-dark px-3 py-2 rounded-pill">
                {feature}
              </span>
            ))}
          </div>

          {/* Security Features Section */}
          <div className="row align-items-center g-5 py-5">
            <div className="col-lg-6">
              <div className="small text-muted mb-2">Powered by lawconnect</div>
              <h3 className="display-6 fw-bold mb-4">Safeguard your data with secure correspondence</h3>
              <p className="text-muted mb-4">
                Unlike email, which can be susceptible to cybersecurity breaches, hacking and unauthorized access, Clio offers a secure environment for sharing documents and working with clients.
              </p>
              <p className="text-muted">
                You can work confidently and securely, without worrying that yours or your clients' files will fall into the wrong hands. All data is stored on secure servers provided by Amazon Web Services, one of the world's largest and most secure data storage providers.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20document%20management%20dashboard%20interface%2C%20secure%20file%20sharing%20platform%2C%20clean%20modern%20UI%20design%20with%20blue%20navigation%20and%20document%20list%2C%20corporate%20software%20interface%20with%20AWS%20logo%2C%20high%20quality%20professional%20screenshot&width=600&height=400&seq=security-dashboard-2&orientation=landscape"
                alt="Secure document management dashboard"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>

          {/* Electronic Signatures Section */}
          <div className="row align-items-center g-5 py-5">
            <div className="col-lg-6 order-lg-2">
              <h3 className="display-6 fw-bold mb-4">Start work quickly</h3>
              <p className="text-muted mb-4">
                Backed by industry leaders DocuSign, our integrated electronic signatures shorten the time it takes for a matter to start.
              </p>
              <p className="text-muted">
                By requesting a signature online, directly from the matter for your Terms and Conditions, you can begin working immediately without waiting for returned documents in the post.
              </p>
            </div>
            <div className="col-lg-6 order-lg-1">
              <img
                src="https://readdy.ai/api/search-image?query=Electronic%20signature%20interface%20with%20document%20preview%2C%20DocuSign%20style%20interface%20with%20signature%20field%20highlighted%2C%20professional%20document%20signing%20platform%20with%20clean%20design%2C%20digital%20contract%20signing%20page%20with%20form%20fields%2C%20high%20quality%20professional%20screenshot&width=600&height=400&seq=esign-interface-3&orientation=landscape"
                alt="Electronic signature interface"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>

          {/* Security Certification */}
          <div className="row align-items-center g-5 py-5">
            <div className="col-lg-8">
              <h3 className="display-6 fw-bold mb-4">Security and compliance</h3>
              <p className="text-muted mb-4">
                LawConnect is SOC 2 Type 1 compliant. This attests to our unwavering commitment to the highest standards for security and confidentiality in safeguarding our users' data.
              </p>
              <p className="text-muted">
                Our internal security controls underwent a rigorous and independent audit by AssuranceLab, culminating in this certification for all Clio subsidiaries, including LawConnect.
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <div className="rounded-circle bg-info d-flex align-items-center justify-content-center mx-auto" style={{ width: '200px', height: '200px' }}>
                <div className="text-white text-center">
                  <div className="fw-bold fs-5">AICPA</div>
                  <div className="fw-bold display-6 mb-1">SOC</div>
                  <div className="small">SERVICE ORGANIZATION</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="text-center py-5">
            <div className="mx-auto mb-4 rounded-circle overflow-hidden" style={{ width: '80px', height: '80px' }}>
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20female%20lawyer%20or%20legal%20professional%20with%20neutral%20background%2C%20business%20attire%2C%20confident%20expression%2C%20high%20quality%20professional%20photo&width=100&height=100&seq=testimonial-4&orientation=squarish"
                alt="Client testimonial"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
            <p className="text-muted fst-italic mb-4 mx-auto" style={{ maxWidth: '800px' }}>
              "LawConnect has transformed how we interact with clients. The secure document sharing and electronic signatures have cut our onboarding time in half while giving our clients peace of mind."
            </p>
            <p className="fw-bold">Jane Doe, Legal Partner at Smith & Associates</p>
          </div>

          {/* Contact Form Section */}
          <div className="row align-items-center g-5 py-5">
            <div className="col-lg-6">
              <h3 className="display-6 fw-bold mb-4">Provide 24/7 access to information and services</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="fas fa-check-circle text-warning me-2"></i>
                  Secure document sharing
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-warning me-2"></i>
                  Electronic signatures
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-warning me-2"></i>
                  Client communication
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-warning me-2"></i>
                  24/7 portal access
                </li>
              </ul>
            </div>
            <div className="col-lg-6 bg-white p-4 rounded shadow">
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="company" className="form-label">Company</label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-dark w-100 py-2"
                  >
                    SEND REQUEST
                  </button>
                  <p className="small text-center text-muted mt-2">
                    By submitting this form, you agree to our <a href="#" className="text-warning text-decoration-none">Privacy Policy</a>
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Access Documents CTA */}
          <div className="bg-light p-4 rounded mb-5">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div className="mb-3 mb-md-0">
                <h3 className="fw-bold mb-2">Access your shared documents</h3>
                <p className="text-muted mb-0">Click below to access documents that have been shared with you.</p>
              </div>
              <button className="btn btn-warning px-4">
                ACCESS DOCUMENTS
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="py-5">
            <h3 className="text-center display-6 fw-bold mb-5">Frequently asked questions</h3>
            <div className="mx-auto" style={{ maxWidth: '800px' }}>
              {faqItems.map((item, index) => (
                <div key={index} className="border-bottom pb-3 mb-3">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="d-flex justify-content-between align-items-center w-100 text-start fw-bold py-2 bg-transparent border-0"
                  >
                    <span>{item.question}</span>
                    <i className={`fas ${activeAccordion === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-muted`}></i>
                  </button>
                  {activeAccordion === index && (
                    <div className="mt-2 text-muted">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default ClientService;