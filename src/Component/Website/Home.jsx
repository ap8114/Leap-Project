import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import './Website.css'; // Assuming you have a CSS file for styling

const Home = () => {
    return (
        <>
            <div className="website-container">
                {/* Navigation */}
                <nav className="navbars navbar-expand-lg navbar-dark me-2 ms-2">
                    <div className="d-flex align-items-center justify-content-between p-1 me-4 ms-4">

                        {/* Logo */}
                        <a className="navbar-brand d-flex align-items-center" href="#">
                            <img src="https://i.ibb.co/Q7Vb1g8j/download-1.png" alt="Logo" height="40" />
                        </a>

                        {/* Toggler */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>

                        {/* Links and Buttons */}
                        <div className="collapse navbar-collapse justify-content-between align-items-center" id="navbarNav">

                            {/* Nav Links */}
                            <ul className="navbar-nav mx-auto text-center align-items-center">
                                <li className="nav-item">
                                    <a className="nav-link" href="#features">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#solutions">Solutions</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#company">Company</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#resources">Resources</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>

                            {/* Buttons */}
                            <div className="d-flex align-items-center gap-3 justify-content-center">
                                <Link to="/dashboard" className="btn btn-outline-light">Login</Link>
                                <Link to="#demo" className="btn btn-demo">Request Demo</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Hero Section */}
                <div className="p-5 hero-section">
                    <div className="row align-items-center">
                        {/* Text Column */}
                        <div className="col-lg-6 text-center text-lg-start">
                            <div className="mb-3">
                                <span className="badge bg-warning text-dark px-3 py-2 rounded-pill">
                                    ⭐ Trusted by 61,000+ Legal Professionals
                                </span>
                            </div>
                            <h1 className="display-5 fw-bold">Transform Your Law Practice with LEAP</h1>
                            <p className="lead text-muted mb-4">
                                Experience the future of legal practice management. LEAP delivers unmatched efficiency, security, and innovation to drive your firm’s success.
                            </p>

                            {/* Buttons */}
                            <div className="d-flex flex-column flex-sm-row gap-3 mb-4 justify-content-center justify-content-lg-start">
                                <button className="btn btn-dark btn-lg">
                                    Watch Demo Video
                                </button>
                                <button className="btn btn-outline-dark btn-lg">
                                    Schedule Live Demo
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="d-flex justify-content-center justify-content-lg-start gap-4 text-center text-lg-start">
                                <div>
                                    <h4 className="mb-0 fw-bold">98%</h4>
                                    <small className="text-muted">Client Satisfaction</small>
                                </div>
                                <div>
                                    <h4 className="mb-0 fw-bold">30%</h4>
                                    <small className="text-muted">Efficiency Boost</small>
                                </div>
                                <div>
                                    <h4 className="mb-0 fw-bold">24/7</h4>
                                    <small className="text-muted">Support Available</small>
                                </div>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="col-lg-6 mt-5 mt-lg-0 position-relative">
                            <div className="position-relative rounded-4 overflow-hidden shadow">
                                <img
                                    src="https://i.ibb.co/SD7MR15F/image.png"
                                    alt="LEAP Software"
                                    className="img-fluid rounded-4"
                                />
                                {/* "New Features" Badge */}
                                <span className="position-absolute top-0 end-0 bg-warning text-white px-3 py-1 fw-semibold rounded-bottom-start">
                                    New Features Available
                                </span>
                                {/* Trusted Platform Label */}
                                <div className="position-absolute bottom-0 start-0 m-3 bg-white d-flex align-items-center shadow rounded px-3 py-2">
                                    <span className="text-success fw-bold me-2">✔</span>
                                    <div>
                                        <div className="fw-semibold">Trusted Platform</div>
                                        <small className="text-muted">ISO 27001 Certified Security</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features & Demo Section */}
                <section className="features-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="features-card">
                                    <div className="position-relative">
                                        <div className="position-absolute top-0 end-0">
                                            <i
                                                className="fas fa-calendar-alt"
                                                style={{
                                                    fontSize: "3rem",
                                                    color: "var(--accent-color)",
                                                    opacity: "0.3"
                                                }}
                                            />
                                        </div>
                                        <h3>Why Choose LEAP?</h3>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <i className="fas fa-cogs" />
                                        </div>
                                        <div>
                                            <strong>
                                                Streamline your practice with our award-winning legal software
                                            </strong>
                                        </div>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <i className="fas fa-lock" />
                                        </div>
                                        <div>
                                            <strong>
                                                Bank-grade security to protect your sensitive data
                                            </strong>
                                        </div>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <i className="fas fa-headset" />
                                        </div>
                                        <div>
                                            <strong>24/7 dedicated customer support team</strong>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-3 border-top">
                                        <p className="mb-2">Already using LEAP?</p>
                                        <a href="#" className="text-white">
                                            Contact Support <i className="fas fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="demo-form">
                                    <h3>Book your free demonstration</h3>
                                    <p className="text-muted mb-4">
                                        Schedule a tailored demo at your convenience
                                    </p>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="First Name*"
                                                    required=""
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Last Name*"
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Business Email*"
                                            required=""
                                        />
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    placeholder="Phone Number*"
                                                    required=""
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <select className="form-control">
                                                    <option>Company Size</option>
                                                    <option>1-10 employees</option>
                                                    <option>11-50 employees</option>
                                                    <option>51+ employees</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-check mb-3">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="updates"
                                            />
                                            <label className="form-check-label" htmlFor="updates">
                                                Keep me updated with LEAP news and special offers
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-submit">
                                            <i className="fas fa-calendar-check me-2" />
                                            Schedule Demo Now
                                        </button>
                                        <small className="text-muted mt-2 d-block">
                                            By submitting this form, you agree to our{" "}
                                            <a href="#">Terms of Service</a> and{" "}
                                            <a href="#">Privacy Policy</a>
                                        </small>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <h5>COMPANY</h5>
                                <a href="#">Leadership</a>
                                <a href="#">Media</a>
                                <a href="#">Careers</a>
                                <a href="#">Innovation timeline</a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h5>FEATURES</h5>
                                <a href="#">Client and matter management</a>
                                <a href="#">Document automation</a>
                                <a href="#">Time recording and billing</a>
                                <a href="#">Legal accounting</a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h5>RESOURCES</h5>
                                <a href="#">Brochures &amp; guides</a>
                                <a href="#">White papers</a>
                                <a href="#">Testimonials</a>
                                <a href="#">Blog</a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h5>CONTACT US</h5>
                                <a href="tel:0845 683 7517">0845 683 7517</a>
                                <a href="mailto:info@leap.co.uk">info@leap.co.uk</a>
                                <a href="#">View statement</a>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <small>
                                        Copyright © 2025 LEAP Legal Software. All rights reserved.
                                    </small>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex justify-content-md-end gap-3">
                                        <a href="#" className="small">
                                            Terms
                                        </a>
                                        <a href="#" className="small">
                                            Privacy Policy
                                        </a>
                                        <a href="#" className="small">
                                            Cookie Policy
                                        </a>
                                        <a href="#" className="small">
                                            Security Statement
                                        </a>
                                        <a href="#" className="small">
                                            Sitemap
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            {/* End of website container */}
        </>
    )
}

export default Home
