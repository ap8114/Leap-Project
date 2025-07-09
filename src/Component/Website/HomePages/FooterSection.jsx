import React from 'react';
import { Link } from 'react-router-dom';
import './Website.css';

const FooterSection = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h5>COMPANY</h5>
              <Link to="/company">Leadership</Link>
              <Link to="/company">Media</Link>
              <Link to="/company">Careers</Link>
              <Link to="/company">Innovation timeline</Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>FEATURES</h5>
              <Link to="/client-and-matter-management">Client and matter management</Link>
              <Link to="/document-automation">Document automation</Link>
              <Link to="/timerecordingbilling">Time recording and billing</Link>
              <Link to="/reporting">Legal accounting</Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>RESOURCES</h5>
              <Link to="/resources">Brochures & guides</Link>
              <Link to="/resources">White papers</Link>
              <Link to="/resources">Testimonials</Link>
              <Link to="/resources">Blog</Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>CONTACT US</h5>
              <p className="footer-address">
                Fastrack Software Ltd<br />
                633 Halifax Road<br />
                Liversedge<br />
                WF15 8HG
              </p>
              <a href="tel:+44 7977 317760">Tel: +44 7977 317760</a>
              <a href="mailto:sales@fastracksoftware.co.uk">Email: sales@fastracksoftware.co.uk</a>
              <Link to="/contactus">Contact Form</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-md-6">
                <small>
                  Copyright © 2025 Fastrack Software Ltd. All rights reserved.
                </small>
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-md-end gap-3">
                  <Link to="/terms" className="small">Terms</Link>
                  <Link to="/privacy-policy" className="small">Privacy Policy</Link>
                  {/* <Link to="/cookie-policy" className="small">Cookie Policy</Link> */}
                  {/* <Link to="/security" className="small">Security Statement</Link>
                  <Link to="/sitemap" className="small">Sitemap</Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;