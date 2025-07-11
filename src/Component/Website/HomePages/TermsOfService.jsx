import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TermsOfService = () => {
  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Terms of Service</h1>
          <p className="text-muted text-center">Last Updated: [Date]</p>
        </Col>
      </Row>

      <Row>
        {/* Desktop Sidebar */}
        {/* <Col md={3} className="mb-4 d-none d-md-block">
          <div className="sticky-top pt-3">
            <h5>Table of Contents</h5>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction">1. Introduction</a>
              <a className="nav-link" href="#account-terms">2. Account Terms</a>
              <a className="nav-link" href="#payment">3. Payment Terms</a>
              <a className="nav-link" href="#privacy">4. Privacy Policy</a>
              <a className="nav-link" href="#user-content">5. User Content</a>
              <a className="nav-link" href="#termination">6. Termination</a>
              <a className="nav-link" href="#disclaimer">7. Disclaimer</a>
              <a className="nav-link" href="#limitation">8. Limitation of Liability</a>
              <a className="nav-link" href="#general">9. General Terms</a>
            </nav>
          </div>
        </Col> */}

        {/* Main Content */}
        <Col md={12}>
          {/* Mobile Accordion Table of Contents */}
          {/* <Accordion className="d-md-none mb-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Table of Contents</Accordion.Header>
              <Accordion.Body>
                <nav className="nav flex-column">
                  <a className="nav-link" href="#introduction">1. Introduction</a>
                  <a className="nav-link" href="#account-terms">2. Account Terms</a>
                  <a className="nav-link" href="#payment">3. Payment Terms</a>
                  <a className="nav-link" href="#privacy">4. Privacy Policy</a>
                  <a className="nav-link" href="#user-content">5. User Content</a>
                  <a className="nav-link" href="#termination">6. Termination</a>
                  <a className="nav-link" href="#disclaimer">7. Disclaimer</a>
                  <a className="nav-link" href="#limitation">8. Limitation of Liability</a>
                  <a className="nav-link" href="#general">9. General Terms</a>
                </nav>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion> */}

          {/* Sections */}
          <section id="introduction" className="mb-5">
            <h2 className="mb-3">1. Introduction</h2>
            <p>
              Welcome to our Service. These Terms of Service ("Terms") govern your access to and use of our website, services, and applications (collectively the "Service"). By accessing or using the Service, you agree to be bound by these Terms.
            </p>
            <p>
              Please read these Terms carefully before using the Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the Service.
            </p>
          </section>

          <section id="account-terms" className="mb-5">
            <h2 className="mb-3">2. Account Terms</h2>
            <p>
              To access certain features of the Service, you may be required to create an account. When creating your account, you must provide accurate and complete information.
            </p>
            <p>
              You are solely responsible for the activity that occurs on your account and for keeping your account password secure. You must notify us immediately of any breach of security or unauthorized use of your account.
            </p>
          </section>

          <section id="payment" className="mb-5">
            <h2 className="mb-3">3. Payment Terms</h2>
            <p>
              Certain aspects of the Service may be provided for a fee. You agree to pay all applicable fees in connection with your use of the Service.
            </p>
            <p>
              All fees are non-refundable except as required by law or as otherwise specifically permitted in these Terms.
            </p>
          </section>

          <section id="privacy" className="mb-5">
            <h2 className="mb-3">4. Privacy Policy</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and disclose information about you.
            </p>
          </section>

          <section id="user-content" className="mb-5">
            <h2 className="mb-3">5. User Content</h2>
            <p>
              You retain ownership of any content you submit or make available through the Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content.
            </p>
          </section>

          <section id="termination" className="mb-5">
            <h2 className="mb-3">6. Termination</h2>
            <p>
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
            </p>
          </section>

          <section id="disclaimer" className="mb-5">
            <h2 className="mb-3">7. Disclaimer</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </section>

          <section id="limitation" className="mb-5">
            <h2 className="mb-3">8. Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.
            </p>
          </section>

          <section id="general" className="mb-5">
            <h2 className="mb-3">9. General Terms</h2>
            <p>
              These Terms constitute the entire agreement between you and us regarding the Service. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
            <p>
              We may revise these Terms from time to time. The most current version will always be posted on our website. By continuing to access or use the Service after revisions become effective, you agree to be bound by the revised Terms.
            </p>
          </section>

          <section className="mt-5">
            <h3>Contact Us</h3>
            <p>
              If you have any questions about these Terms, please contact us at <a href="mailto:legal@yourcompany.com">legal@yourcompany.com</a>.
            </p>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default TermsOfService;
