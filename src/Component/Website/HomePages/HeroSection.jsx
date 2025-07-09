
import React from 'react'
import { useState } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import './Website.css'; // Assuming you have a CSS file for styling

const HeroSection = () => {
  return (
    <div>
        <div className="p-5 hero-section">
                    <div className="row align-items-center">
                        {/* Text Column */}
                        <div className="col-lg-6 text-center text-lg-start">
                            <div className="mb-3">
                                <span className="badge bg-[#f76b1c] text-white px-3 py-2 rounded-pill">
                                    ⭐ Trusted by 61,000+ Legal Professionals
                                </span>
                            </div>
                            <h1 className="display-5 fw-bold">Transform Your Law Practice with FastTrack Software</h1>
                            <p className="lead text-muted mb-4">
                                Experience the future of legal practice management. FastTrack Software delivers unmatched efficiency, security, and innovation to drive your firm’s success.
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
                                    alt="FastTrack Software Software"
                                    className="img-fluid rounded-4"
                                />
                                {/* "New Features" Badge */}
                                <span className="position-absolute top-0 end-0 bg-[#f76b1c]  text-white px-3 py-1 fw-semibold rounded-bottom-start">
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
    </div>
  )
}

export default HeroSection
