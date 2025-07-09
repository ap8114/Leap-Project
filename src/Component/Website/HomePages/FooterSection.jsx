
import React from 'react'
import { useState } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import './Website.css'; // Assuming you have a CSS file for styling

const FooterSection = () => {
  return (
    <div>
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
                                <a href="mailto:info@FastTrack.co.uk">info@FastTrack.co.uk</a>
                                <a href="#">View statement</a>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <small>
                                        Copyright © 2025 FastTrack Legal Software. All rights reserved.
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
  )
}

export default FooterSection
