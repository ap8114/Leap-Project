import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Col, Form } from 'react-bootstrap';
import logoFastTrack from "../../src/assets/logoFastTrack.png";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [firmSize, setFirmSize] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Submit data logic here
    navigate('/dashboard');
  };

  return (
    <div className="w-100 d-flex flex-column flex-md-row p-0 overflow-hidden">
      {/* Left Panel - Sign Up Form */}
      <Col className="d-flex flex-column justify-content-center align-items-center px-4 px-sm-5 py-4 overflow-auto">
        <div className="d-flex flex-column" style={{ maxHeight: '100%', overflow: 'hidden' }}>
          <div className="mb-3 d-flex align-items-center justify-content-center">
            <img src={logoFastTrack} alt="Logo" style={{ height: '50px' }} className="me-2" />
          </div>

          <div className="text-center mb-3 px-2">
            <h2 className="fw-bold fs-4">Create your FastTrack Account</h2>
            <p className="text-muted mb-1 fs-7">Sign up to get started</p>
            <small className="text-muted">The most trusted legal practice management software</small>
          </div>

          <Form className="w-100" style={{ maxWidth: '400px', maxHeight: '60vh', overflowY: 'auto' , scrollbarWidth: 'none'}} onSubmit={handleSignUp}>
            <Form.Group className="mb-2" controlId="formName">
              <Form.Label className="small">Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                size="sm"
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formMobile">
              <Form.Label className="small">Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                size="sm"
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formEmail">
              <Form.Label className="small">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                size="sm"
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formFirmSize">
              <Form.Label className="small">Firm Size</Form.Label>
              <Form.Select
                value={firmSize}
                onChange={(e) => setFirmSize(e.target.value)}
                required
                size="sm"
              >
                <option value="">Select...</option>
                <option value="1">1</option>
                <option value="2 to 4">2 to 4</option>
                <option value="5 to 9">5 to 9</option>
                <option value="10 to 19">10 to 19</option>
                <option value="20 to 60">20 to 60</option>
                <option value="61 to 200">61 to 200</option>
                <option value="201 to 500">201 to 500</option>
                <option value="501+">501+</option>
                <option value="Not a Law Firm">Not a Law Firm</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-2" controlId="formPassword">
              <Form.Label className="small">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                size="sm"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label className="small">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                size="sm"
              />
            </Form.Group>

            <button
              type="submit"
              className="w-100 btn btn-sm text-white fw-bold rounded"
              style={{ backgroundColor: '#f76b1c', border: 'none' }}
            >
              Sign Up
            </button>
          </Form>

          <div className="mt-2 text-center">
            <small className="text-muted">Already have an account?</small>{' '}
            <a href="#" onClick={() => navigate('/login')} className="text-[#f76b1c] fw-medium small">Login</a>
          </div>

          <div className="mt-2 text-center">
            <div className="d-inline-flex align-items-center bg-light px-2 py-1 rounded">
              <i className="fas fa-shield-alt text-success me-1 small"></i>
              <span className="text-muted small">ISO 27001 Certified Security</span>
            </div>
          </div>
        </div>
      </Col>

      {/* Right Panel - Same as Login */}
      <Col xs={12} md={6} className="position-relative p-0 d-none d-md-flex vh-100">
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20professional%20office%20workspace%20with%20laptop%20showing%20legal%20software%20dashboard%20analytics%20charts%20on%20screen%20warm%20lighting%20large%20windows%20minimalist%20design%20contemporary%20furniture%20clean%20background&width=800&height=1024&seq=FastTrack Software-login-bg&orientation=portrait')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.9), rgba(0,0,0,0.2))' }}></div>
        </div>

        <div className="position-relative z-2 h-100 d-flex align-items-center justify-content-center p-4 p-lg-5">
          <div className="bg-white bg-opacity-75 p-3 p-md-4 rounded shadow text-center w-100 mx-2" style={{ maxWidth: '400px' }}>
            <div className="mb-2">
              <span className="badge bg-[#f76b1c] small">New Features Available</span>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-2 small">
              <i className="fas fa-users text-[#f76b1c] me-2"></i>
              <span className="fw-medium">Trusted by 61,000+ Legal Professionals</span>
            </div>
            <div className="d-flex justify-content-center mb-2 small">
              <div className="mx-2">
                <h5 className="fw-bold text-dark mb-0">98%</h5>
                <small className="text-muted">Client Satisfaction</small>
              </div>
              <div className="mx-2">
                <h5 className="fw-bold text-dark mb-0">24/7</h5>
                <small className="text-muted">Support Available</small>
              </div>
            </div>
            <hr className="my-2" />
            <h6 className="fw-bold text-dark mb-1 small">Transform Your Law Practice with FastTrack Software</h6>
            <p className="text-muted mb-0 small">
              Experience the future of legal practice management. FastTrack Software delivers unmatched efficiency, security, and innovation to drive your firm's success.
            </p>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default Signup;