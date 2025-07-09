
import React from 'react'
import { useState } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import './Website.css'; // Assuming you have a CSS file for styling

const FeaturesSection = () => {
    return (
        <div>
            <section className="features-section mt-3">
                <div className="container-fluid">
                    <div className="row g-4 align-items-stretch">
                        {/* Left Column - Features */}
                        <div className="col-12 col-lg-6">
                            <div className="features-card h-100 p-4 text-white">
                                <div className="position-relative mb-4">
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
                                    <h3 className="mb-3">Why Choose FastTrack?</h3>
                                </div>

                                {/* Feature Items */}
                                <div className="feature-item d-flex align-items-start mb-3">
                                    <div className="feature-icon me-3 text-warning fs-4">
                                        <i className="fas fa-cogs" />
                                    </div>
                                    <strong>Streamline your practice with our award-winning legal software</strong>
                                </div>

                                <div className="feature-item d-flex align-items-start mb-3">
                                    <div className="feature-icon me-3 text-warning fs-4">
                                        <i className="fas fa-lock" />
                                    </div>
                                    <strong>Bank-grade security to protect your sensitive data</strong>
                                </div>

                                <div className="feature-item d-flex align-items-start mb-3">
                                    <div className="feature-icon me-3 text-warning fs-4">
                                        <i className="fas fa-headset" />
                                    </div>
                                    <strong>24/7 dedicated customer support team</strong>
                                </div>

                                <div className="mt-4 pt-4 border-top">
                                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                                        <div>
                                            <h6 className="mb-1 text-white fw-semibold">Already using FastTrack?</h6>
                                            <p className="mb-0">Get help from our dedicated support team.</p>
                                        </div>
                                        <Link to="contactus" className='text-decoration-none'>
                                            <button
                                                type="button"
                                                className="btn btn-outline-light  d-inline-flex align-items-center justify-content-center px-3 py-2"
                                            >
                                                Contact Support
                                            </button>
                                        </Link>


                                    </div>

                                </div>

                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="col-12 col-lg-6">
                            <div className="demo-form h-100 p-4 bg-light">
                                <h3>Book your free demonstration</h3>
                                <p className="text-muted mb-4">Schedule a tailored demo at your convenience</p>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="First Name*"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Last Name*"
                                                required
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Business Email*"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="Phone Number*"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <select className="form-select">
                                                <option>Company Size</option>
                                                <option>1-10 employees</option>
                                                <option>11-50 employees</option>
                                                <option>51+ employees</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="updates" />
                                                <label className="form-check-label" htmlFor="updates">
                                                    Keep me updated with FastTrack news and special offers
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn custom-orange-outline1 w-100">
                                                <i className="fas fa-calendar-check me-2"></i>
                                                Schedule Demo Now
                                            </button>

                                            <small className="text-muted mt-2 d-block text-center">
                                                By submitting this form, you agree to our{" "}
                                                <a href="#">Terms of Service</a> and{" "}
                                                <a href="#">Privacy Policy</a>
                                            </small>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturesSection
