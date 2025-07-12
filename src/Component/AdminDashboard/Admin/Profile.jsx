import React from "react";
import { Container, Row, Col, Card, Button, Table, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <Container fluid className="mt-4">
      {/* Breadcrumb */}
      <div className="mb-3">
        <span className="text-custom">&lt; Users </span>
        <span className="text-muted">/ john smith</span>
      </div>

      {/* Profile Header */}
      <Card className="mb-4">
        <Card.Body>
          <Row className="align-items-center">
            <Col md={1} xs={3}>
              <div className="rounded-circle bg-secondary text-white text-center fw-bold" style={{ width: 60, height: 60, lineHeight: "60px", fontSize: "20px" }}>
                AP
              </div>
            </Col>
            <Col md={9} xs={6}>
              <h5 className="mb-0">john smith</h5>
              <small className="text-muted">Law Office of john smith</small>
              <div>
                <Button variant="link" className="px-0">Edit Picture</Button>
              </div>
            </Col>
            <Col md={2} xs={3} className="text-end">
            <Link to="/editprofile">
              <Button variant="custom">Edit</Button>
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* User Information */}
{/* User Information */}
<Card.Body className="p-0 mb-4">
  <Row className="g-0 border">
    <Col md={4} className="border-end p-3">
      <p><strong>Job Title</strong><br />-</p>
      <p><strong>Email</strong><br />johnsmith086@gmail.com</p>
      <p><strong>Phone</strong><br />-</p>
      <p><strong>Groups</strong><br />-</p>
      <p><strong>Billing Rate</strong><br />$0.00</p>
    </Col>

    <Col md={4} className="border-end p-3">
      <p><strong>Roles</strong></p>
      <p><strong>Time Zone</strong><br />Pacific Time (US & Canada)</p>
      <p><strong>Last Login</strong><br />07/12/2025</p>
      <p><strong>Subscription</strong><br />Attorney</p>
    </Col>

    <Col md={4} className="p-3">
      <p><strong>Administrator</strong></p>
      <p>Pacific Time (US & Canada)</p>
      <p>07/12/2025</p>
      <p>Attorney</p>
    </Col>
  </Row>
</Card.Body>



      {/* Firm Feed */}
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <span className="fw-semibold">Firm Feed</span>
          <Button variant="light" className="border dropdown-toggle">Filter</Button>
        </Card.Header>
        <Card.Body className="p-0">
          <Table responsive borderless hover className="mb-0">
            <thead>
              <tr className="bg-light">
                <th>Description</th>
                <th className="text-end pe-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                "updated Time Entry",
                "created Time Entry",
                "updated Time Entry",
                "created Time Entry",
              ].map((action, index) => (
                <tr key={index}>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="rounded-circle bg-secondary text-white text-center fw-bold" style={{ width: 30, height: 30, fontSize: "12px", lineHeight: "30px" }}>
                        AP
                      </div>
                      <span className="text-custom">john smith</span> {action}, about 21 hours ago.
                    </div>
                  </td>
                  <td className="text-end pe-3">
                    07/11/2025 2:3{6 + index} AM
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>

        {/* Pagination */}
        <Card.Footer className="d-flex justify-content-between">
          <span></span>
          <Pagination size="sm" className="mb-0">
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Profile;
