import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Table,
  Nav,
  Dropdown,
  Modal,
} from "react-bootstrap";
import {
  FaBriefcase,
  FaAngleLeft,
  FaAngleRight,
  FaPlus,
  FaSort,
} from "react-icons/fa";
import MatterTemplate from "./MatterTemplate";
import NewMatterForm from "./NewMatterForm";

const MattersDashboard = () => {
  const [activeColumn, setActiveColumn] = useState("");
  const [activeTab, setActiveTab] = useState("matters");
  const [selectedStatus, setSelectedStatus] = useState("All");
  
  const tableHeaders = [
    "Actions",
    "Matter",
    "Client",
    "Responsible att...",
    "Originating att...",
    "Responsible staff",
    "Matter notific...",
    "Practice Area",
    "Matter Stage",
    "Open Stage",
  ];

  const [visibleColumns, setVisibleColumns] = useState({
    Actions: true,
    Matter: true,
    Client: true,
    "Responsible att...": true,
    "Originating att...": true,
    "Responsible staff": true,
    "Matter notific...": true,
    "Practice Area": true,
    "Matter Stage": true,
    "Open Stage": true,
  });

  const [filters, setFilters] = useState({
    client: "",
    responsibleAttorney: "",
    originatingAttorney: "",
    responsibleStaff: "",
    notifications: "",
  });
// Empty matter data (no dummy records)
const [matters] = useState([]);
const [showNewMatter, setShowNewMatter] = useState(false);

const [showTemplates, setShowTemplates] = useState(false);
  const filteredMatters = matters.filter((item) =>
    selectedStatus === "All" ? true : item.status === selectedStatus
  );

  return (
    <div  className="px-4 pt-3">
      <h1 className="fw-bold mt-2 ms-1 mb-4" style={{ fontSize: "2rem", fontWeight: "700" }}>Matters</h1>
      {/* Main Tabs + Buttons */}
      <Row className="align-items-center mb-3 justify-content-between">
        <Col>
          <Nav
            variant="tabs"
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
          >
            <Nav.Item>
              <Nav.Link eventKey="matters" className="fw-bold">
                Matters
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="stages">Stages</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col className="text-end">
          <div className="d-flex justify-content-end gap-2">
          <Button
  variant="outline-dark"
  onClick={() => setShowTemplates(true)}
>
  Matter Templates
</Button>
<Button
    variant="custom"
    onClick={() => setShowNewMatter(true)} 
  >
    New matter
  </Button>
          </div>
        </Col>
      </Row>



      {showNewMatter && (
 

  <NewMatterForm      show={showNewMatter}
  onHide={() => setShowNewMatter(false)} />
)}
      {showTemplates && (


  <MatterTemplate    show={showTemplates}
  onHide={() => setShowTemplates(false)} />
)}
      {/* -------- MATTERS TAB CONTENT -------- */}
      {activeTab === "matters" && (
        <div className="border rounded p-2">
          {/* Sub Tabs */}
   <Row className="align-items-center mb-3 p-1">
  <Col xs={12}>
    <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
      {["All", "Open", "Pending", "Closed"].map((tab, i) => (
        <Button
          key={i}
          variant={
            selectedStatus === tab ? "custom" : "outline-secondary"
          }
          size="sm"
          onClick={() => setSelectedStatus(tab)}
        >
          {tab}
        </Button>
      ))}
    </div>
  </Col>
</Row>


          {/* Search + Dropdowns */}
  <Row className="mb-3 gy-3 align-items-start">
  {/* === Keyword Filter === */}
  <Col xs={12} md={4}>
    <Form.Control type="text" placeholder="Filter by keyword" />
  </Col>

  {/* === Columns & Filters Dropdowns === */}
  <Col xs={12} md={8} className="text-md-end text-start">
    {/* Columns Dropdown */}
    <Dropdown className="d-inline me-2 mb-2 mb-md-0">
      <Dropdown.Toggle variant="light">Columns</Dropdown.Toggle>

      <Dropdown.Menu
        className="p-3"
        style={{ minWidth: "100%", maxWidth: "600px", maxHeight: "400px", overflowY: "auto" }}
      >
        <Row>
          {/* Visible Columns */}
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <h6 className="fw-bold mb-2">Visible columns</h6>
            <div style={{ maxHeight: "300px", overflowY: "auto" }}>
              {Object.entries(visibleColumns).map(([col, isVisible], idx) => (
                <Form.Check
                  key={idx}
                  type="checkbox"
                  id={`col-${idx}`}
                  label={col}
                  checked={isVisible}
                  onChange={() =>
                    setVisibleColumns((prev) => ({
                      ...prev,
                      [col]: !prev[col],
                    }))
                  }
                  className="mb-2"
                />
              ))}
            </div>
          </Col>

          {/* Custom Fields */}
          <Col xs={12} md={6}>
            <h6 className="fw-bold mb-2">Custom Fields</h6>
            <Form.Group controlId="customFields">
              <Form.Select>
                <option>Select or search fields</option>
                <option>Field 1</option>
                <option>Field 2</option>
                <option>Field 3</option>
              </Form.Select>
              <Form.Text muted>Select up to 5 fields</Form.Text>
            </Form.Group>
          </Col>
        </Row>

        {/* Footer Buttons */}
        <div className="d-flex justify-content-end mt-3 gap-2">
          <Button variant="outline-secondary" size="sm">
            Cancel
          </Button>
          <Button variant="primary" size="sm">
            Update columns
          </Button>
        </div>
      </Dropdown.Menu>
    </Dropdown>

    {/* Filters Dropdown */}
    <Dropdown className="d-inline">
      <Dropdown.Toggle variant="light" active>
        Filters
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ minWidth: "100%", maxWidth: "300px", padding: "15px" }}>
        <Form.Group className="mb-3">
          <Form.Label>Client</Form.Label>
          <Form.Select
            value={filters.client}
            onChange={(e) =>
              setFilters({ ...filters, client: e.target.value })
            }
          >
            <option>Find a contact</option>
            <option>John Doe</option>
            <option>Jane Smith</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Responsible attorney</Form.Label>
          <Form.Select
            value={filters.responsibleAttorney}
            onChange={(e) =>
              setFilters({
                ...filters,
                responsibleAttorney: e.target.value,
              })
            }
          >
            <option>Find a firm user</option>
            <option>John Lawyer</option>
            <option>Emily Law</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Originating attorney</Form.Label>
          <Form.Select
            value={filters.originatingAttorney}
            onChange={(e) =>
              setFilters({
                ...filters,
                originatingAttorney: e.target.value,
              })
            }
          >
            <option>Find a firm user</option>
            <option>Alex Origin</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Responsible staff</Form.Label>
          <Form.Select
            value={filters.responsibleStaff}
            onChange={(e) =>
              setFilters({
                ...filters,
                responsibleStaff: e.target.value,
              })
            }
          >
            <option>Find a firm user</option>
            <option>Staff A</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Matter notifications</Form.Label>
          <Form.Select
            value={filters.notifications}
            onChange={(e) =>
              setFilters({
                ...filters,
                notifications: e.target.value,
              })
            }
          >
            <option>Find a firm user</option>
            <option>Notification A</option>
          </Form.Select>
        </Form.Group>
      </Dropdown.Menu>
    </Dropdown>
  </Col>
</Row>


          {/* Table */}
          <div className="border rounded" style={{ overflowX: "auto" }}>
            <Table hover className="mb-0">
              <thead className="table-light text-nowrap">
                <tr>
                  <th style={{ width: "30px" }}>
                    <Form.Check />
                  </th>
                  {tableHeaders.map(
                    (heading, idx) =>
                      visibleColumns[heading] && (
                        <th key={idx} className="text-nowrap">
                          {heading}{" "}
                          <FaSort
                            className="text-muted ms-1"
                            style={{ cursor: "pointer" }}
                            onClick={() => setActiveColumn(heading)}
                          />
                        </th>
                      )
                  )}
                </tr>
              </thead>
              <tbody>
                {filteredMatters.length > 0 ? (
                  filteredMatters.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <Form.Check />
                      </td>
                      {visibleColumns["Actions"] && <td>⋮</td>}
                      {visibleColumns["Matter"] && <td className="px-4">{item.matter}</td>}
                      {visibleColumns["Client"] && <td>{item.client}</td>}
                      {visibleColumns["Responsible att..."] && (
                        <td>{item.responsibleAttorney}</td>
                      )}
                      {visibleColumns["Originating att..."] && (
                        <td>{item.originatingAttorney}</td>
                      )}
                      {visibleColumns["Responsible staff"] && (
                        <td>{item.responsibleStaff}</td>
                      )}
                      {visibleColumns["Matter notific..."] && (
                        <td>{item.notifications}</td>
                      )}
                      {visibleColumns["Practice Area"] && (
                        <td>{item.practiceArea}</td>
                      )}
                      {visibleColumns["Matter Stage"] && (
                        <td>{item.matterStage}</td>
                      )}
                      {visibleColumns["Open Stage"] && (
                        <td>{item.openStage}</td>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={tableHeaders.length + 1} className="text-center py-5">
                      <div
                        className="mx-auto mb-3 position-relative"
                        style={{
                          width: "80px",
                          height: "80px",
                          backgroundColor: "#002f56",
                          borderRadius: "50%",
                        }}
                      >
                        <FaBriefcase
                          size={30}
                          color="white"
                          style={{ position: "absolute", top: "25%", left: "28%" }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            bottom: -4,
                            right: -4,
                            backgroundColor: "#0073e6",
                            borderRadius: "50%",
                            width: 24,
                            height: 24,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <FaPlus size={12} color="white" />
                        </div>
                      </div>
                      <h5 className="mb-2">
  No {selectedStatus.toLowerCase()} matters found.
</h5>

                      <p className="text-muted">
                        Stay organized by keeping every case detail in one
                        place.
                      </p>
                      <Button variant="custom">Clear all filters</Button>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>

            {/* Footer */}
            <Row className="mt-4 align-items-center flex-wrap">
              <Col xs="auto" className="d-flex align-items-center mb-2 mb-md-0">
                <Button variant="light" className="me-2">
                  <FaAngleLeft />
                </Button>
                <Button variant="light">
                  <FaAngleRight />
                </Button>
              </Col>
              <Col xs="auto" className="text-muted mb-2 mb-md-0">
                {filteredMatters.length === 0
                  ? "No results found"
                  : `${filteredMatters.length} result(s)`}
              </Col>
              <Col
                xs="auto"
                className="d-flex align-items-center gap-2 mb-2 mb-md-0"
              >
                <Form.Check
                  type="switch"
                  id="expand-rows"
                  defaultChecked
                  label="Expand rows"
                />
              </Col>
              <Col xs="auto">
                <Button variant="outline-dark">Export</Button>
              </Col>
            </Row>
          </div>
        </div>
      )}

{activeTab === "stages" && (
<div className="border rounded p-3 bg-light">
  <Row className="align-items-center mb-3 gy-2">
    <Col xs={12} md="auto">
      <Form.Select className="form-select border-custom text-dark w-100">
        <option>Administrative</option>
        <option>Litigation</option>
        <option>Contract</option>
      </Form.Select>
    </Col>

    <Col xs={12} md="auto">
      <span className="text-custom d-flex align-items-center">
        <i className="bi bi-info-circle-fill me-1" />
        Assign a matter to this practice area
      </span>
    </Col>

    <Col xs={12} md className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-end">
      <Form.Control
        type="text"
        placeholder="Filter by keyword"
        className="w-100 w-md-auto"
      />
      <Dropdown>
        <Dropdown.Toggle variant="outline-secondary">Filters</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>By Date</Dropdown.Item>
          <Dropdown.Item>By Stage</Dropdown.Item>
          <Dropdown.Item>Reset</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
  </Row>

  <Row className="mt-4">
    <Col xs={12} md={3}>
      <div className="border rounded-2 text-center p-4 bg-white dashed-box h-100">
        <span className="text-custom fw-semibold" role="button">
          <i className="bi bi-plus-circle me-1" />
          Add a matter stage
        </span>
      </div>
    </Col>
  </Row>

  <Row>
    <Col xs={12}>
      <div className="d-flex flex-column align-items-center justify-content-center h-100 text-muted text-center p-4">
        {/* <img
          src="/images/stages-placeholder.png"
          alt="Workflow stages"
          className="img-fluid mb-3"
          style={{ maxHeight: "220px", objectFit: "contain" }}
        /> */}
        <h5>
          <strong>Create matter stages</strong> to visualize your workflow.
        </h5>
        <p className="mt-2">
          <strong>Assign matters</strong> to track and manage progress easily.
        </p>
      </div>
    </Col>
  </Row>
</div>

)}


    </div>
  );
};

export default MattersDashboard;
