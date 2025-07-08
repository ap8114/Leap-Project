import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from '../../HomePages/Header';
import FooterSection from '../../HomePages/FooterSection';

const Employment = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'Document Management',
      description: 'Securely store and organize all your property documents in one centralized location with advanced search capabilities.',
      icon: 'fa fa-folder-open',
      image: 'https://readdy.ai/api/search-image?query=modern%20digital%20document%20management%20system%20with%20organized%20folders%20and%20files%20on%20a%20clean%20white%20background%2C%20professional%20office%20setting%20with%20soft%20lighting%20and%20minimal%20design%20elements&width=600&height=400&seq=feat1&orientation=landscape'
    },
    {
      title: 'Transaction Tracking',
      description: 'Monitor every step of your property transactions with real-time updates and automated milestone notifications.',
      icon: 'fa fa-line-chart',
      image: 'https://readdy.ai/api/search-image?query=property%20transaction%20progress%20tracking%20dashboard%20on%20computer%20screen%20with%20clean%20white%20background%2C%20modern%20interface%20design%20with%20progress%20indicators%20and%20charts&width=600&height=400&seq=feat2&orientation=landscape'
    },
    {
      title: 'Team Collaboration',
      description: 'Enable seamless communication between all stakeholders with integrated messaging and task management tools.',
      icon: 'fa fa-users',
      image: 'https://readdy.ai/api/search-image?query=professional%20team%20collaboration%20workspace%20with%20multiple%20people%20working%20together%20on%20property%20management%2C%20clean%20modern%20office%20environment%20with%20white%20background&width=600&height=400&seq=feat3&orientation=landscape'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Real Estate Agent',
      content: 'PropertyTracker Pro has revolutionized how I manage my transactions. The document organization is incredible.',
      avatar: 'SJ',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Property Developer',
      content: 'The progress tracking feature keeps all my stakeholders informed. It\'s been a game-changer for our business.',
      avatar: 'MC',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Mortgage Broker',
      content: 'Finally, a platform that understands the complexity of property transactions. Highly recommended!',
      avatar: 'ER',
      rating: 5
    }
  ];

  return (

    <div className='w-100'>
        <Header/>
    <div className="min-vh-100 bg-white">
      {/* Navigation */}
   

      {/* Hero Section */}
      <section 
        className="pt-5 min-vh-100 d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://readdy.ai/api/search-image?query=modern%20professional%20property%20management%20office%20environment%20with%20clean%20white%20background%2C%20sophisticated%20business%20setting%20with%20soft%20natural%20lighting%2C%20minimalist%20design%20elements%20and%20subtle%20geometric%20patterns&width=1440&height=1024&seq=hero1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="mb-5">
                <h1 className="display-4 fw-bold mb-4">
                  Streamline Your
                  <span className="text-warning"> Property </span>
                  Transactions
                </h1>
                <p className="lead">
                  Professional property management software that simplifies document handling, transaction tracking, and team collaboration for real estate professionals.
                </p>
              </div>
              <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
                <button className="btn btn-warning btn-lg px-4 py-3 fw-semibold text-white">
                  Start Free Trial
                </button>
                <button className="btn btn-outline-primary btn-lg px-4 py-3 fw-semibold">
                  Watch Demo
                </button>
              </div>
              <div className="d-flex flex-wrap align-items-center gap-4 pt-3">
                <div className="d-flex align-items-center gap-2">
                  <div className="d-flex">
                    <div className="rounded-circle bg-warning d-flex align-items-center justify-content-center text-white fw-bold" style={{width: '32px', height: '32px'}}>A</div>
                    <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fw-bold ms-n2" style={{width: '32px', height: '32px'}}>B</div>
                    <div className="rounded-circle bg-success d-flex align-items-center justify-content-center text-white fw-bold ms-n2" style={{width: '32px', height: '32px'}}>C</div>
                  </div>
                  <span className="small text-muted">1000+ satisfied customers</span>
                </div>
                <div className="d-flex align-items-center">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa fa-star text-warning small"></i>
                  ))}
                  <span className="small text-muted ms-2">4.9/5 rating</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-white rounded-3 shadow-lg p-4 p-md-5">
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="h5 fw-bold mb-0">Transaction Overview</h3>
                    <div className="rounded-circle bg-success" style={{width: '12px', height: '12px'}}></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded mb-2">
                    <span className="small fw-medium">Document Review</span>
                    <span className="badge bg-success text-white small">Complete</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded mb-2">
                    <span className="small fw-medium">Property Inspection</span>
                    <span className="badge bg-warning text-dark small">In Progress</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded">
                    <span className="small fw-medium">Final Approval</span>
                    <span className="badge bg-secondary text-white small">Pending</span>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="progress" style={{height: '8px'}}>
                    <div className="progress-bar bg-warning" style={{width: '75%'}}></div>
                  </div>
                  <p className="small text-muted mt-2">75% Complete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Powerful Features for Property Professionals</h2>
            <p className="lead mx-auto" style={{maxWidth: '700px'}}>
              Everything you need to manage property transactions efficiently, from initial listing to final closing.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-3 mb-4 cursor-pointer ${activeFeature === index ? 'bg-white shadow-lg border-start border-warning border-4' : 'bg-white shadow-sm'}`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="d-flex">
                    <div className={`rounded-2 flex-shrink-0 d-flex align-items-center justify-content-center ${activeFeature === index ? 'bg-warning text-white' : 'bg-light text-muted'}`} style={{width: '48px', height: '48px'}}>
                      <i className={`${feature.icon} fa-lg`}></i>
                    </div>
                    <div className="ms-3">
                      <h3 className="h5 fw-bold mb-2">{feature.title}</h3>
                      <p className="text-muted mb-0">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              <div className="bg-white rounded-3 shadow overflow-hidden">
                <img 
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  className="img-fluid w-100" 
                  style={{height: '384px', objectFit: 'cover', objectPosition: 'top'}}
                />
                <div className="p-4">
                  <h4 className="h5 fw-bold mb-2">{features[activeFeature].title}</h4>
                  <p className="text-muted mb-0">{features[activeFeature].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Trusted by Property Professionals Worldwide</h2>
            <p className="lead">Join thousands of satisfied users who have streamlined their workflows</p>
          </div>
          <div className="row text-center">
            <div className="col-6 col-md-3 mb-4 mb-md-0">
              <div className="display-4 fw-bold text-warning mb-2">10K+</div>
              <div className="text-light">Active Users</div>
            </div>
            <div className="col-6 col-md-3 mb-4 mb-md-0">
              <div className="display-4 fw-bold text-warning mb-2">50K+</div>
              <div className="text-light">Transactions Processed</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="display-4 fw-bold text-warning mb-2">99.9%</div>
              <div className="text-light">Uptime</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="display-4 fw-bold text-warning mb-2">24/7</div>
              <div className="text-light">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">What Our Customers Say</h2>
            <p className="lead">See how PropertyTracker Pro is transforming businesses</p>
          </div>
          <div className="row">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-md-4 mb-4 mb-md-0">
                <div className="bg-light rounded-3 p-4 h-100">
                  <div className="d-flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fa fa-star text-warning me-1"></i>
                    ))}
                  </div>
                  <p className="text-muted mb-4 fst-italic">"{testimonial.content}"</p>
                  <div className="d-flex align-items-center mt-auto">
                    <div className="rounded-circle bg-warning d-flex align-items-center justify-content-center text-white fw-bold me-3" style={{width: '48px', height: '48px'}}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="fw-bold">{testimonial.name}</div>
                      <div className="small text-muted">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-warning">
        <div className="container py-5">
          <div className="text-center mx-auto" style={{maxWidth: '800px'}}>
            <h2 className="display-5 fw-bold text-white mb-4">
              Ready to Transform Your Property Management?
            </h2>
            <p className="lead text-white mb-5">
              Join thousands of property professionals who trust PropertyTracker Pro to streamline their workflows and boost productivity.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <button className="btn btn-white btn-lg px-4 py-3 fw-semibold text-warning">
                Start Free Trial
              </button>
              <button className="btn btn-outline-white btn-lg px-4 py-3 fw-semibold">
                Schedule Demo
              </button>
            </div>
            <p className="text-white small mt-4">No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
    <FooterSection/>
    </div>
  );
};

export default Employment;