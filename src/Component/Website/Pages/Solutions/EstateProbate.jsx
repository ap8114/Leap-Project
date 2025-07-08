import React, { useState } from 'react';
import FooterSection from '../../HomePages/FooterSection';
import Header from '../../HomePages/Header';

const EstateProbate = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-100">
      {/* Navigation */}
      <Header />
      <div className='w-100'>

        {/* Hero Section */}
        <section className="pt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-1 order-2">
                <h1 className="display-4 fw-bold mb-4">
                  Simplify Your <span className="" style={{color: '#f76b1c'}}>Property Transactions</span>
                </h1>
                <p className="lead text-muted mb-4">
                  Streamline your property management process with our comprehensive digital platform. Track transactions, manage documents, and close deals faster.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3">
                  <button className="btn btn-lg px-4 py-3" style={{backgroundColor: '#f76b1c' , color: 'white'}}>
                    Start Free Trial
                  </button>
                  <button className="btn btn-outline-secondary btn-lg px-4 py-3">
                    Watch Demo
                  </button>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0">
                <img
                  className="img-fluid rounded shadow"
                  src="https://readdy.ai/api/search-image?query=modern%20office%20interior%20with%20digital%20screens%20showing%20property%20management%20software%20interface%20clean%20minimalist%20design%20with%20blue%20and%20orange%20accents%20professional%20workspace%20environment&width=800&height=600&seq=1&orientation=landscape"
                  alt="Property Management Platform"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3" style={{color: '#f76b1c'}}>
                Powerful Features for Property Management
              </h2>
              <p className="lead text-muted">
                Everything you need to manage your property transactions efficiently
              </p>
            </div>

            <div className="row g-4">
              {/* Feature 1 */}
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-lg hover-shadow">
                  <div className="card-body text-center p-4">
                    <div className="bg-warning bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '64px', height: '64px' }}>
                      <i className="fas fa-chart-line fs-3" style={{color: '#f76b1c'}}></i>
                    </div>
                    <h3 className="h4 fw-bold text-custom mb-3">Transaction Tracking</h3>
                    <p className="text-muted">
                      Real-time monitoring of all your property transactions in one place
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-lg hover-shadow">
                  <div className="card-body text-center p-4">
                    <div className="bg-warning bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '64px', height: '64px' }}>
                      <i className="fas fa-file-signature fs-3" style={{color: '#f76b1c'}}></i>
                    </div>
                    <h3 className="h4 fw-bold text-custom mb-3">Document Management</h3>
                    <p className="text-muted">
                      Secure storage and easy access to all property-related documents
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-lg hover-shadow">
                  <div className="card-body text-center p-4">
                    <div className="bg-warning bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '64px', height: '64px' }}>
                      <i className="fas fa-users fs-3" style={{color: '#f76b1c'}}></i>
                    </div>
                    <h3 className="h4 fw-bold text-custom mb-3">Team Collaboration</h3>
                    <p className="text-muted">
                      Seamless communication and workflow management for your team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-dark text-white py-5 mb-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 mb-4 mb-lg-0">
                <h2 className="display-5 fw-bold mb-3">
                  Ready to get started?
                </h2>
                <h3 className="display-6 fw-bold" style={{color: '#f76b1c'}}>
                  Start your free trial today.
                </h3>
              </div>
              <div className="col-lg-4 text-lg-end">
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-lg-end">
                  <button className="btn btn-lg px-4"  style={{backgroundColor: '#f76b1c' , color: 'white'}} >
                    Get started
                  </button>
                  <button className="btn btn-light btn-lg px-4">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
      <FooterSection />
    </div>
  );
}

export default EstateProbate;