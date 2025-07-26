import React, { useState } from 'react';

const Feedback = () => {
  // Feedback form state
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  
  // FAQ state
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Data
  const ratingLabels = ['Very Poor', 'Poor', 'Fair', 'Good', 'Excellent'];
  
  const faqTopics = [
    {
      title: 'Case Management',
      description: 'Learn how to manage your legal cases efficiently',
      articles: 12,
      icon: 'fa-briefcase'
    },
    {
      title: 'Client Communication',
      description: 'Best practices for client correspondence',
      articles: 8,
      icon: 'fa-comments'
    },
    {
      title: 'Document Management',
      description: 'Organize and store legal documents securely',
      articles: 15,
      icon: 'fa-file-alt'
    },
    {
      title: 'Billing & Invoicing',
      description: 'Manage client billing and payment processing',
      articles: 10,
      icon: 'fa-pound-sign'
    },
    {
      title: 'Calendar & Scheduling',
      description: 'Schedule appointments and court dates',
      articles: 6,
      icon: 'fa-calendar-alt'
    },
    {
      title: 'Reporting & Analytics',
      description: 'Generate reports and track firm performance',
      articles: 9,
      icon: 'fa-chart-bar'
    }
  ];

  const faqItems = [
    {
      question: 'How do I create a new case in the CRM?',
      answer: 'To create a new case, click on the "New Case" button in the top navigation bar. Fill in the required client information, case details, and any relevant documents. The system will automatically generate a unique case reference number.'
    },
    {
      question: 'How can I track billable hours?',
      answer: 'Use the time tracking feature in each case view. Click the timer icon to start recording your time. You can also manually enter hours, add descriptions, and categorize the type of work. The system automatically calculates billable amounts based on your hourly rate.'
    },
    {
      question: 'How do I share documents with clients?',
      answer: 'Navigate to the case documents section and select the files you want to share. Click the "Share" button and enter your client\'s email address. They will receive a secure link to access the documents through the client portal.'
    },
    {
      question: 'How can I set up automated reminders?',
      answer: 'Go to the Calendar section and click "Create Reminder." You can set up reminders for court dates, document deadlines, and client meetings. Choose the frequency, notification method, and recipients for each reminder.'
    },
    {
      question: 'How do I generate reports?',
      answer: 'Access the Reports dashboard from the main menu. Select from pre-built report templates or create custom reports. You can filter by date range, case type, or client. Reports can be exported in PDF, Excel, or CSV formats.'
    }
  ];

  // Handlers
  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleRatingHover = (value) => {
    setHoveredRating(value);
  };

  const handleRatingLeave = () => {
    setHoveredRating(0);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        {/* Feedback Form */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="card shadow-sm">
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-4">
                  <h1 className="h2 mb-2">Leave Your Feedback</h1>
                  <p className="text-muted">Help us improve our CRM system for your law firm</p>
                </div>
                
                <div className="mb-4">
                  <label className="form-label">Rate your experience</label>
                  <div className="d-flex justify-content-center mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingClick(star)}
                        onMouseEnter={() => handleRatingHover(star)}
                        onMouseLeave={handleRatingLeave}
                        className="btn p-0 border-0 bg-transparent"
                      >
                        <i
                          className={`fas fa-star fs-1 mx-1 ${
                            star <= (hoveredRating || rating)
                              ? 'text-warning'
                              : 'text-light'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  {(rating > 0 || hoveredRating > 0) && (
                    <p className="text-center text-muted">
                      {ratingLabels[(hoveredRating || rating) - 1]}
                    </p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label className="form-label">
                    Additional Comments (Optional)
                  </label>
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Tell us more about your experience..."
                    rows={4}
                    className="form-control"
                  />
                </div>
                
                <div className="text-center">
                  <button className="btn btn-primary px-4 py-2">
                    Submit Feedback
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Options */}
        <div className="row mb-5">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-success bg-opacity-10 rounded p-3 me-3">
                    <i className="fas fa-comments text-success fs-4"></i>
                  </div>
                  <div>
                    <h3 className="h5 mb-0">Live Chat Support</h3>
                    <div className="d-flex align-items-center">
                      <span className="badge bg-success me-2"></span>
                      <small className="text-success">Online Now</small>
                    </div>
                  </div>
                </div>
                <p className="text-muted mb-4">
                  Get instant help from our support team. Available Monday to Friday, 9 AM to 6 PM GMT.
                </p>
                <button className="btn btn-success w-100">
                  Start Live Chat
                </button>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 rounded p-3 me-3">
                    <i className="fas fa-envelope text-primary fs-4"></i>
                  </div>
                  <div>
                    <h3 className="h5 mb-0">Email Support</h3>
                    <small className="text-muted">Response within 2 hours</small>
                  </div>
                </div>
                <p className="text-muted mb-4">
                  Send us a detailed message and we'll get back to you as soon as possible.
                </p>
                <button className="btn btn-primary w-100">
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="row">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-4">
                  <h2 className="h2 mb-2">Frequently Asked Questions</h2>
                  <p className="text-muted">Find answers to common questions about our CRM system</p>
                </div>
                
                <div className="accordion" id="faqAccordion">
                  {faqItems.map((item, index) => (
                    <div className="accordion-item border mb-3" key={index}>
                      <h3 className="accordion-header">
                        <button
                          className={`accordion-button ${expandedFaq === index ? '' : 'collapsed'}`}
                          type="button"
                          onClick={() => toggleFaq(index)}
                        >
                          {item.question}
                        </button>
                      </h3>
                      <div
                        className={`accordion-collapse collapse ${expandedFaq === index ? 'show' : ''}`}
                      >
                        <div className="accordion-body">
                          <p className="text-muted mb-0">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;