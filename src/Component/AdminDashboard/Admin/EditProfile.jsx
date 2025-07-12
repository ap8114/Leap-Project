import React from "react";
import { useState } from "react";
import { Tabs, Tab, Form, Row, Col, Button,Table} from "react-bootstrap";
import { Link } from "react-router-dom";
import {  InputGroup,  } from "react-bootstrap";
import AddEmailAliasModal from "./AddEmailAliasModal";



const EditProfile = () => {
      const [showModal, setShowModal] = useState(false);
  return (
    <div className="container-fluid mt-4">
      {/* Tabs */}
      <Tabs defaultActiveKey="your-info" id="profile-tabs" className="mb-4">
        <Tab eventKey="your-info" title="Your Information">
          {/* Form */}
          <Form>
       <Row className="mb-4 justify-content-center text-center">
  <Col xs="auto">
    <div
      style={{
        width: '120px',
        height: '120px',
        backgroundColor: '#f8f9fa',
        borderRadius: '4px',
        position: 'relative',
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        alt="Profile"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '4px',
        }}
      />
    </div>
    <div className="mt-2">
      <Button variant="link" className="p-0 text-custom">
        Edit Picture
      </Button>
    </div>
  </Col>
</Row>


            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="firstName">
                  <Form.Label>First name <span className="text-danger">required</span></Form.Label>
                  <Form.Control type="text" placeholder="Enter first name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="lastName">
                  <Form.Label>Last name <span className="text-danger">required</span></Form.Label>
                  <Form.Control type="text" placeholder="Enter last name" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="initials">
                  <Form.Label>Initials</Form.Label>
                  <Form.Control type="text" placeholder="e.g. AP" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter address" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <Form.Group controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="state">
                  <Form.Label>State/Province</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="zip">
                  <Form.Label>Zip/Postal Code</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="country">
                  <Form.Label>Country</Form.Label>
                  <Form.Select>
                    <option>Select an Option</option>
                    <option>India</option>
                    <option>USA</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="phone">
                  <Form.Label>custom Phone</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="timezone">
                  <Form.Label>Time Zone</Form.Label>
                  <Form.Select>
                    <option>(GMT-07:00) Pacific Time (US & Canada)</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="locale">
                  <Form.Label>Locale</Form.Label>
                  <Form.Select>
                    <option>English (United States)</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="billingRate">
                  <Form.Label>Billing Rate</Form.Label>
                  <Form.Control type="number" placeholder="0.00" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="billingRateVisibility">
                  <Form.Label>Billing Rate Visibility</Form.Label>
                  <Form.Select>
                    <option>All</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="activityRateVisibility">
                  <Form.Label>Activity Rate Visibility</Form.Label>
                  <Form.Select>
                    <option>All</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="subscriberType">
                  <Form.Label>Subscriber Type</Form.Label>
                  <Form.Select>
                    <option>Attorney</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="groups">
                  <Form.Label>Groups</Form.Label>
                  <Form.Control type="text" placeholder="Select user groups" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="jobTitle">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Select>
                    <option>Select a job title</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            {/* Roles (Read-only Info Text) */}
            <Row className="mb-4">
              <Col>
                <p className="text-muted">
                  Roles for the custom subscriber cannot be edited. <a href="#">Learn more here.</a>
                </p>
              </Col>
            </Row>

            {/* Submit Button */}
            <Row>
              <Col>
                <Button variant="custom" type="submit">Save</Button>
              </Col>
            </Row>
          </Form>
        </Tab>

        <Tab eventKey="change-email" title="Change Login Email">
  <div className="p-4">
    <h6><strong>Email address</strong></h6>
    <p className="text-muted">
      Change the email address you use to sign in to Clio Manage and Clio Grow.
    </p>

    <Button variant="custom" className="d-flex align-items-center gap-2">
      Change email
      <i className="bi bi-box-arrow-up-right"></i>
    </Button>
  </div>
</Tab>

        <Tab eventKey="performance" title="Personal Performance">
  <div className="p-4">
    {/* Default Billing Rate */}
<Form.Group className="mb-3">
  <Form.Label>Default Billing Rate</Form.Label>
 <InputGroup>
  <InputGroup.Text className="py-0">$</InputGroup.Text>
  <Form.Control type="number" placeholder="0.0" defaultValue={200.0} />
  <InputGroup.Text className="py-0">/ Hr</InputGroup.Text>
</InputGroup>

</Form.Group>

{/* Target Billings */}
<Form.Group className="mb-3">
  <Form.Label>Target Billings</Form.Label>
  <InputGroup>
    <InputGroup.Text>$</InputGroup.Text>
    <Form.Control type="number" placeholder="0.0" defaultValue={100000.0} />
    <InputGroup.Text>/ Year</InputGroup.Text>
  </InputGroup>
</Form.Group>

{/* Working Days */}
<Form.Group className="mb-3">
  <Form.Label>Working Days</Form.Label>
  <InputGroup>
    <Form.Control type="number" placeholder="0" defaultValue={260} />
    <InputGroup.Text>/ Year</InputGroup.Text>
  </InputGroup>
</Form.Group>


    {/* Fiscal Year End */}
    <Form.Group className="mb-4">
      <Form.Label>Fiscal Year End</Form.Label>
      <Form.Control type="date" defaultValue="2025-01-01" />
    </Form.Group>

    {/* Action Buttons */}
    <div className="d-flex align-items-center gap-2 mt-3">
      <Button variant="custom">Save Performance Information</Button>
      <Button variant="link" className="text-decoration-none text-custom">Cancel</Button>
    </div>
  </div>
</Tab>

       <Tab eventKey="profile-picture" title="Profile Picture">
  <div className="p-4">
    <Row>
      {/* Left: Profile Placeholder */}
      <Col md={4} className="mb-4 mb-md-0">
        <div
          className="d-flex align-items-center justify-content-center text-secondary fw-bold"
          style={{
            width: "100%",
            height: "250px",
            backgroundColor: "#f3f4f6",
            fontSize: "48px",
            border: "1px solid #ddd",
          }}
        >
          AP
        </div>
      </Col>

      {/* Right: Upload Section */}
      <Col md={8}>
        <div className="p-4 bg-light border">
          <p>
            Accepted profile picture formats are <strong>JPEG, PNG or GIF</strong>. Profile pictures
            should not exceed <strong>2MB</strong> in size.
          </p>
          <Form className="d-flex align-items-center gap-3 mb-3">
            <Form.Control type="file" style={{ maxWidth: "300px" }} />
            <Button variant="custom">Upload</Button>
          </Form>
          <p className="mb-0">
            To get the most out of how you appear on Clio, please read our support article on{" "}
            <a href="#" className="text-decoration-underline">
              selecting a profile picture.
            </a>
          </p>
        </div>
      </Col>
    </Row>
  </div>
</Tab>

       <Tab eventKey="mail-aliases" title="Maildrop Email Aliases">
  <div className="p-4">
    <p className="mb-3">
      Add aliases to be able to send emails to your communication maildrop from that address.
    </p>

    <div className="d-flex justify-content-between align-items-center mb-3">
      <h5 className="mb-0 fw-semibold">Email Aliases</h5>
         <Button variant="custom" onClick={() => setShowModal(true)}>
            Add
          </Button>
           <AddEmailAliasModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>

    <Table bordered responsive className="mb-0">
      <thead className="table-light">
        <tr>
          <th>User <i className="bi bi-caret-down-fill ms-1"></i></th>
          <th>Email</th>
          <th className="text-end">Filter <i className="bi bi-caret-down-fill ms-1"></i></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="3" className="text-center text-muted">No Results</td>
        </tr>
      </tbody>
    </Table>
  </div>
</Tab>

      </Tabs>
    </div>
  );
};

export default EditProfile;
