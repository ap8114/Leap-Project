import React, { useState } from 'react';


import FooterSection from '../../HomePages/FooterSection';
import Header from '../../HomePages/Header';

const PersonalInjury = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null); // <-- yahi sahi hai

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (

    <div className='w-100'>
        <Header/>
    
    <div className="min-vh-100 mt-4 bg-white">
      {/* Navigation */}
      

      {/* Hero Section */}
      <section 
        className="py-5 position-relative bg-light"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20professional%20law%20office%20with%20clean%20minimalist%20design%20featuring%20legal%20documents%20and%20scales%20of%20justice%20on%20a%20bright%20white%20desk%20with%20natural%20lighting%20creating%20a%20sophisticated%20atmosphere&width=1440&height=600&seq=hero-bg-001&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.9'
        }}
      >
        <div className="container position-relative py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4 text-dark">
                Personal Injury Case Management Software
              </h1>
              <p className="lead text-muted mb-4">
                Streamline your personal injury practice with comprehensive case tracking, 
                secure document management, and automated client communication tools designed for modern law firms.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <button className="text-white px-4 py-3 fw-semibold" style={{backgroundColor: '#f76b1c' , color: 'white'}}>
                  Start Free Trial
                </button>
                <button className="btn btn-outline-dark px-4 py-3 fw-semibold">
                  Schedule Demo
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20medical%20x-ray%20images%20displayed%20on%20modern%20digital%20screens%20in%20a%20clean%20medical%20office%20environment%20with%20soft%20lighting%20and%20contemporary%20design%20elements&width=600&height=400&seq=hero-img-001&orientation=landscape"
                alt="Medical Documentation"
                className="img-fluid rounded shadow-lg"
                style={{ height: '400px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-dark">
              Comprehensive Case Management
            </h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              Everything you need to manage personal injury cases efficiently, 
              from initial consultation to final settlement.
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center mb-4"        style={{ backgroundColor: "#f76b1c", color: "white" , width: '64px', height: '64px', }} >
                    <i className="fa fa-folder-open fa-2x text-white"></i>
                  </div>
                  <h3 className="h4 fw-bold mb-3 text-dark">Document Management</h3>
                  <p className="text-muted">
                    Securely store, organize, and access all case documents with advanced search capabilities 
                    and automated filing systems.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center mb-4"    style={{ backgroundColor: "#f76b1c", color: "white" , width: '64px', height: '64px', }}>
                    <i className="fa fa-comments fa-2x text-white"></i>
                  </div>
                  <h3 className="h4 fw-bold mb-3 text-dark">Client Communication</h3>
                  <p className="text-muted">
                    Maintain seamless communication with clients through integrated messaging, 
                    automated updates, and secure client portals.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <div className=" rounded-circle d-flex align-items-center justify-content-center mb-4"    style={{ backgroundColor: "#f76b1c", color: "white" , width: '64px', height: '64px', }}>
                    <i className="fa fa-chart-line fa-2x text-white"></i>
                  </div>
                  <h3 className="h4 fw-bold mb-3 text-dark">Case Tracking</h3>
                  <p className="text-muted">
                    Monitor case progress with visual timelines, milestone tracking, 
                    and comprehensive reporting tools for better case outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4 text-dark">
                Intuitive Dashboard Design
              </h2>
              <p className="lead text-muted mb-4">
                Get a complete overview of your practice with our modern, 
                user-friendly dashboard that puts all critical information at your fingertips.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-center">
                  <i className="fa fa-check-circle fa-lg  me-3" style={{color: '#f76b1c'}}></i>
                  <span className="text-dark">Real-time case status updates</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <i className="fa fa-check-circle fa-lg me-3" style={{color: '#f76b1c'}}></i>
                  <span className="text-dark">Integrated calendar and task management</span>
                </li>
                <li className="d-flex align-items-center">
                  <i className="fa fa-check-circle fa-lg  me-3" style={{color: '#f76b1c'}}></i>
                  <span className="text-dark">Performance analytics and reporting</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="bg-light p-3 rounded shadow-lg">
                <img 
                  src="https://readdy.ai/api/search-image?query=modern%20legal%20case%20management%20software%20dashboard%20interface%20showing%20clean%20design%20with%20case%20tracking%20widgets%20calendar%20integration%20and%20document%20management%20sections%20on%20a%20computer%20screen&width=600&height=400&seq=dashboard-001&orientation=landscape"
                  alt="Dashboard Preview"
                  className="img-fluid rounded"
                  style={{ height: '320px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Document Management Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img 
                src="https://readdy.ai/api/search-image?query=secure%20document%20upload%20interface%20with%20progress%20indicators%20and%20file%20organization%20system%20showing%20medical%20records%20and%20legal%20documents%20in%20a%20professional%20software%20application&width=600&height=400&seq=document-001&orientation=landscape"
                alt="Document Management"
                className="img-fluid rounded shadow-lg"
                style={{ height: '400px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4 text-dark">
                Secure Document Management
              </h2>
              <p className="lead text-muted mb-4">
                Upload, organize, and manage all case documents with bank-level security 
                and intelligent categorization systems.
              </p>
              <div className="row g-3">
                <div className="col-12 d-flex">
                  <div className=" rounded-circle d-flex align-items-center justify-content-center me-3"     style={{ backgroundColor: "#f76b1c", color: "white", width: '32px', height: '32px', flexShrink: 0 }} >
                    <i className="fa fa-shield-alt text-white"></i>
                  </div>
                  <div>
                    <h4 className="h5 fw-bold mb-1 text-dark">Enterprise Security</h4>
                    <p className="text-muted">256-bit encryption and HIPAA compliance ensure your documents are always protected.</p>
                  </div>
                </div>
                <div className="col-12 d-flex">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3"  style={{ backgroundColor: "#f76b1c", color: "white", width: '32px', height: '32px', flexShrink: 0 }}>
                    <i className="fa fa-search text-white"></i>
                  </div>
                  <div>
                    <h4 className="h5 fw-bold mb-1 text-dark">Smart Search</h4>
                    <p className="text-muted">Find any document instantly with AI-powered search and automatic tagging.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-dark">
              Frequently Asked Questions
            </h2>
            <p className="lead">
              Get answers to common questions about our personal injury case management software.
            </p>
          </div>
          
          <div className="accordion" id="faqAccordion">
            {[
              {
                question: "How secure is my case data?",
                answer: "We use bank-level 256-bit encryption, regular security audits, and HIPAA-compliant infrastructure to ensure your data is completely secure."
              },
              {
                question: "Can I import existing case data?",
                answer: "Yes, our migration team will help you seamlessly import all your existing case data from any previous system you've been using."
              },
              {
                question: "What kind of support do you provide?",
                answer: "We offer 24/7 phone and email support, plus dedicated account managers for enterprise clients and comprehensive training resources."
              },
              {
                question: "How quickly can I get started?",
                answer: "Most firms are up and running within 24-48 hours. Our onboarding team provides personalized setup and training to ensure a smooth transition."
              }
            ].map((faq, index) => (
              <div key={index} className="accordion-item border mb-3">
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#collapse${index}`}
                    aria-expanded={expandedFaq === index ? "true" : "false"}
                    aria-controls={`collapse${index}`}
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div 
                  id={`collapse${index}`} 
                  className={`accordion-collapse collapse ${expandedFaq === index ? 'show' : ''}`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body bg-light">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-5 bg-dark">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className="display-5 fw-bold text-white mb-4">
                Ready to Transform Your Practice?
              </h2>
              <p className="lead text-light mb-4">
                Join thousands of personal injury attorneys who have streamlined their practice 
                with our comprehensive case management solution.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-center text-white">
                  <i className="fa fa-check fa-lg me-3" style={{color: '#f76b1c'}}></i>
                  <span>30-day free trial</span>
                </li>
                <li className="mb-3 d-flex align-items-center text-white">
                  <i className="fa fa-check fa-lg  me-3" style={{color: '#f76b1c'}}></i>
                  <span>No setup fees</span>
                </li>
                <li className="d-flex align-items-center text-white">
                  <i className="fa fa-check fa-lg me-3" style={{color: '#f76b1c'}}></i>
                  <span>Cancel anytime</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="bg-white p-4 rounded shadow-lg">
                <h3 className="h3 fw-bold mb-4 text-dark">Get Started Today</h3>
                <form className="row g-3">
                  <div className="col-12">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-12">
                    <select className="form-select form-select-lg">
                      <option>Practice Size</option>
                      <option>Solo Practice</option>
                      <option>2-5 Attorneys</option>
                      <option>6-20 Attorneys</option>
                      <option>20+ Attorneys</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea
                      placeholder="Tell us about your needs"
                      rows={4}
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn text-white w-100 py-3 fw-semibold"
                          style={{ backgroundColor: "#f76b1c", color: "white" }}
                    >
                      Start Free Trial
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-dark">
              Perfect for Every Practice
            </h2>
            <p className="lead">
              Our software adapts to practices of all sizes and specializations.
            </p>
          </div>
          
          <div className="row g-4">
            {[
              {
                icon: "fa-user",
                title: "Solo Practitioners",
                description: "Streamline your solo practice with automated workflows and client management tools."
              },
              {
                icon: "fa-users",
                title: "Small Firms",
                description: "Collaborate effectively with team features and shared case management capabilities."
              },
              {
                icon: "fa-building",
                title: "Large Firms",
                description: "Scale your operations with enterprise features and advanced reporting tools."
              },
              {
                icon: "fa-handshake",
                title: "Referral Networks",
                description: "Manage referrals and co-counsel relationships with integrated communication tools."
              }
            ].map((useCase, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body text-center p-4">
                    <div className=" rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"     style={{ backgroundColor: "#f76b1c", color: "white", width: '48px', height: '48px' }} >
                      <i className={`fa ${useCase.icon} text-white`}></i>
                    </div>
                    <h3 className="h5 fw-bold mb-3 text-dark">
                      {useCase.title}
                    </h3>
                    <p className="text-muted">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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

export default PersonalInjury;