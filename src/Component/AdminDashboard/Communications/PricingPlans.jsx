import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PricingPlans = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/communications");
  };

  return (
    <Container className="py-5">
      {/* Back Button */}
      <div className="mb-4">
        <Button variant="secondary" onClick={handleBack}>
          ← Back
        </Button>
      </div>

      <h4 className="text-center mb-2">Choose your plan</h4>
      <p className="text-center">
        Choose your plan and continue using Clio to help run your firm. <br />
        <strong>You've been trialing Advanced.</strong>
      </p>

      <div className="text-center mb-4">
        <Form.Check
          inline
          label="Pay monthly"
          name="paymentOption"
          type="radio"
          id="monthly"
        />
        <Form.Check
          inline
          label="Pay annually"
          name="paymentOption"
          type="radio"
          id="annually"
          defaultChecked
        />
        <div className="small text-muted">(save more with an annual plan)</div>
      </div>

      <Row className="justify-content-center">
        {/* EasyStart */}
        <Col md={3} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>EasyStart</Card.Title>
              <h4>$49.00</h4>
              <div className="text-muted mb-2">per user / month (USD)</div>
              <ul className="list-unstyled">
                <li>✅ Manage calendars, documents, and tasks in one place</li>
                <li>✅ Get paid faster with online payment options</li>
                <li>✅ Track time and bill accurately</li>
                <li>✅ Work efficiently with email & e-signature</li>
              </ul>
              <a href="#">See full feature list</a>
            </Card.Body>
            <Card.Footer className="bg-white border-0">
              <Button variant="primary" className="w-100">Select</Button>
            </Card.Footer>
          </Card>
        </Col>

        {/* Essentials */}
        <Col md={3} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Essentials</Card.Title>
              <h4>$89.00</h4>
              <div className="text-muted mb-2">per user / month (USD)</div>
              <ul className="list-unstyled">
                <li>✅ Secure client collaboration</li>
                <li>✅ Auto-fill case data</li>
                <li>✅ Automated scheduling & reminders</li>
                <li>✅ 250+ integrations</li>
              </ul>
              <a href="#">See full feature list</a>
            </Card.Body>
            <Card.Footer className="bg-white border-0">
              <Button variant="primary" className="w-100">Select</Button>
            </Card.Footer>
          </Card>
        </Col>

        {/* Advanced */}
        <Col md={3} className="mb-4">
          <Card className="h-100 border-danger">
            <Card.Body>
              <div className="text-danger mb-1 small">You've been trialing</div>
              <Card.Title>Advanced</Card.Title>
              <h4>$119.00</h4>
              <div className="text-muted mb-2">per user / month (USD)</div>
              <ul className="list-unstyled">
                <li>✅ Case progress & profitability</li>
                <li>✅ Full document search</li>
                <li>✅ Unlimited e-signatures</li>
                <li>✅ Live onboarding & support</li>
              </ul>
              <a href="#">See full feature list</a>
            </Card.Body>
            <Card.Footer className="bg-white border-0">
              <Button variant="primary" className="w-100">Select</Button>
            </Card.Footer>
          </Card>
        </Col>

        {/* Complete */}
        <Col md={3} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Complete</Card.Title>
              <h4>
                <a href="#">Talk to our Team for Pricing</a>
              </h4>
              <ul className="list-unstyled">
                <li>✅ Simplify client intake</li>
                <li>✅ Automate appointments & reminders</li>
                <li>✅ Online intake forms</li>
                <li>✅ Attract clients via website & ads</li>
              </ul>
              <a href="#">See full feature list</a>
            </Card.Body>
            <Card.Footer className="bg-white border-0">
              <Button variant="primary" className="w-100">Contact Us</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <p className="text-center mt-4">
        Not sure which plan would best suit your firm?{" "}
        <a href="#">Talk to our team</a> and we'll help you decide which plan best suits your needs.
      </p>
    </Container>
  );
};

export default PricingPlans;
