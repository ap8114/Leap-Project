import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoFastTrack from "../../src/assets/logoFastTrack.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    // Dummy role-based login (Replace with real API in production)
    if (email === 'admin@example.com') {
      localStorage.setItem('userRole', 'admin');
      navigate('/admin-dashboard');
    } else if (email === 'user@example.com') {
      localStorage.setItem('userRole', 'user');
      navigate('/user-dashboard');
    } else {
      alert('Invalid credentials or unknown role.');
    }
  };

  return (
    <Container fluid className="min-vh-100 d-flex flex-column flex-md-row p-0 overflow-hidden">
      {/* Left Panel - Login Form */}
      <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center px-4 px-sm-5 py-4 vh-100 overflow-auto">
        {/* Logo */}
        <div className="mb-4 d-flex align-items-center">
          <img src={logoFastTrack} alt="Logo" style={{ height: '60px' }} className="me-2" />
        </div>

        {/* Welcome */}
        <div className="text-center mb-4 px-2">
          <h2 className="fw-bold fs-3">Welcome to FastTrack Software</h2>
          <p className="text-muted mb-1 fs-6">Sign in to your account</p>
          <small className="text-muted">The most trusted legal practice management software</small>
        </div>

        <Form className="w-100" style={{ maxWidth: '400px' }} onSubmit={handleSignIn}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <button
            type="submit"
            className="w-100 btn btn-lg text-white fw-bold rounded"
            style={{ backgroundColor: '#f76b1c', border: 'none' }}
          >
            Sign In
          </button>
        </Form>

        <div className="mt-4 text-center">
          <small className="text-muted">Don't have an account?</small>{' '}
          <Link to="/signup" className="text-[#f76b1c] fw-medium">Sign Up</Link>
        </div>

        <div className="mt-4">
          <div className="d-flex align-items-center bg-light px-3 py-2 rounded">
            <i className="fas fa-shield-alt text-success me-2"></i>
            <span className="text-muted small">ISO 27001 Certified Security</span>
          </div>
        </div>
      </Col>

      {/* Right Panel - Image Section */}
      <Col xs={12} md={6} className="position-relative p-0 d-none d-md-block vh-100">
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20professional%20office%20workspace%20with%20laptop%20showing%20legal%20software%20dashboard%20analytics%20charts%20on%20screen%20warm%20lighting%20large%20windows%20minimalist%20design%20contemporary%20furniture%20clean%20background&width=800&height=1024&seq=FastTrack Software-login-bg&orientation=portrait')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background: 'linear-gradient(to right, rgba(255,255,255,0.9), rgba(0,0,0,0.2))',
            }}
          ></div>
        </div>

        <div className="position-relative z-2 h-100 d-flex align-items-center justify-content-center p-4 p-lg-5">
          <div className="bg-white bg-opacity-75 p-4 p-md-5 rounded shadow text-center w-100 mx-2" style={{ maxWidth: '500px' }}>
            <div className="mb-3">
              <span className="badge bg-[#f76b1c]">New Features Available</span>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <i className="fas fa-users text-[#f76b1c] me-2"></i>
              <span className="fw-medium">Trusted by 61,000+ Legal Professionals</span>
            </div>
            <Row>
              <Col className="text-center">
                <h4 className="fw-bold text-dark">98%</h4>
                <small className="text-muted">Client Satisfaction</small>
              </Col>
              <Col className="text-center">
                <h4 className="fw-bold text-dark">24/7</h4>
                <small className="text-muted">Support Available</small>
              </Col>
            </Row>
            <hr />
            <h5 className="fw-bold text-dark mb-2">Transform Your Law Practice with FastTrack Software</h5>
            <p className="text-muted mb-0">
              Experience the future of legal practice management. FastTrack Software delivers unmatched efficiency, security, and innovation to drive your firm's success.
            </p>
          </div>
        </div>
      </Col>
    </Container>
  );
};

export default Login;
