// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
// Add Bootstrap CSS via CDN in your HTML file:
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFeedbackSuccess, setShowFeedbackSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleRatingSubmit = () => {
    if (rating > 0) {
      setShowFeedbackSuccess(true);
      setTimeout(() => setShowFeedbackSuccess(false), 3000);
    }
  };
return (
<div className="min-vh-100 bg-light py-5">
<div className="container-fluid px-4" style={{ maxWidth: '1440px' }}>
{/* Header */}
<div className="text-center mb-5">
<h1 className="display-4 fw-bold mb-4">Contact Us</h1>
<p className="lead text-secondary mx-auto" style={{ maxWidth: '800px' }}>
We'd love to hear from you. Send us a message and we'll respond as soon as possible.
</p>
</div>
<div className="row g-4">
{/* Contact Form */}
<div className="row">
<div className="col-lg-8">
<div className="bg-white rounded shadow-sm border p-4 p-lg-5">
<h2 className="h3 fw-semibold mb-4">Send us a Message</h2>
{showSuccess && (
<div className="alert alert-success mb-4">
<p className="mb-0">Thank you! Your message has been sent successfully.</p>
</div>
)}
<form onSubmit={handleSubmit}>
<div className="mb-3">
<label htmlFor="name" className="form-label">
Name <span className="text-danger">*</span>
</label>
<input
type="text"
id="name"
name="name"
required
value={formData.name}
onChange={handleInputChange}
className="form-control"
placeholder="Your full name"
/>
</div>
<div className="mb-3">
<label htmlFor="email" className="form-label">
Email <span className="text-danger">*</span>
</label>
<input
type="email"
id="email"
name="email"
required
value={formData.email}
onChange={handleInputChange}
className="form-control"
placeholder="your.email@example.com"
/>
</div>
<div className="mb-3">
<label htmlFor="subject" className="form-label">
Subject
</label>
<select
id="subject"
name="subject"
value={formData.subject}
onChange={handleInputChange}
className="form-select"
>
<option value="">Select a subject</option>
<option value="general">General Inquiry</option>
<option value="support">Technical Support</option>
<option value="billing">Billing Question</option>
<option value="partnership">Partnership</option>
<option value="feedback">Feedback</option>
</select>
</div>
<div className="mb-4">
<label htmlFor="message" className="form-label">
Message <span className="text-danger">*</span>
</label>
<textarea
id="message"
name="message"
required
rows={6}
value={formData.message}
onChange={handleInputChange}
className="form-control"
placeholder="Tell us how we can help you..."
/>
</div>
<button
type="submit"
className="btn btn-primary w-100"
>
Send Message
</button>
</form>
</div>
{/* Company Information */}
<div className="col-lg-4">
{/* Contact Information */}
<div className="bg-white rounded shadow-sm border p-4 p-lg-5 mb-4">
<h2 className="h3 fw-semibold mb-4">Get in Touch</h2>
<div className="d-flex flex-column gap-4">
<div className="d-flex gap-3">
<div>
<i className="fas fa-map-marker-alt text-primary fs-5"></i>
</div>
<div>
<h3 className="h6 fw-semibold mb-2">Office Address</h3>
<p className="text-secondary mb-0">
123 Business Avenue<br />
Suite 456<br />
New York, NY 10001<br />
United States
</p>
</div>
</div>
<div className="d-flex gap-3">
<div>
<i className="fas fa-envelope text-primary fs-5"></i>
</div>
<div>
<h3 className="h6 fw-semibold mb-2">Email Support</h3>
<p className="text-secondary mb-1">support@company.com</p>
<p className="small text-muted mb-0">We typically respond within 24 hours</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="flex-shrink-0">
<i className="fas fa-phone text-blue-600 text-lg mt-1"></i>
</div>
<div>
<h3 className="font-medium text-gray-900 mb-1">Phone Support</h3>
<p className="text-gray-600">+1 (555) 123-4567</p>
<p className="text-sm text-gray-500 mt-1">Monday - Friday, 9 AM - 6 PM EST</p>
</div>
</div>
</div>
</div>
{/* Feedback Section */}
<div className="bg-white rounded shadow-sm border p-4 p-lg-5 mb-4">
<h2 className="h3 fw-semibold mb-4">Rate Your Experience</h2>
{showFeedbackSuccess && (
<div className="alert alert-success mb-4">
<p className="mb-0">Thank you for your feedback!</p>
</div>
)}
<div>
<p className="text-secondary mb-3">How would you rate your overall experience with us?</p>
<div className="d-flex gap-2 mb-3">
{[1, 2, 3, 4, 5].map((star) => (
<button
key={star}
type="button"
onClick={() => setRating(star)}
onMouseEnter={() => setHoverRating(star)}
onMouseLeave={() => setHoverRating(0)}
className="text-2xl transition-colors duration-200 cursor-pointer"
>
<i
className={`fas fa-star ${
star <= (hoverRating || rating)
? 'text-yellow-400'
: 'text-gray-300'
}`}
></i>
</button>
))}
</div>
{rating > 0 && (
<button
onClick={handleRatingSubmit}
className="btn btn-primary"
>
Submit Rating
</button>
)}
</div>
</div>
{/* Business Hours */}
<div className="bg-white rounded shadow-sm border p-4 p-lg-5">
<h2 className="h3 fw-semibold mb-4">Business Hours</h2>
<div className="mb-3">
<div className="d-flex justify-content-between mb-2">
<span className="text-secondary">Monday - Friday</span>
<span className="fw-medium">9:00 AM - 6:00 PM</span>
</div>
<div className="flex justify-between">
<span className="text-gray-600">Saturday</span>
<span className="font-medium text-gray-900">10:00 AM - 4:00 PM</span>
</div>
<div className="flex justify-between">
<span className="text-gray-600">Sunday</span>
<span className="font-medium text-gray-900">Closed</span>
</div>
</div>
<div className="mt-4 pt-4 border-top">
<p className="small text-muted mb-0">
<i className="fas fa-info-circle me-2"></i>
All times are in Eastern Standard Time (EST)
</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
);
};

export default Contact