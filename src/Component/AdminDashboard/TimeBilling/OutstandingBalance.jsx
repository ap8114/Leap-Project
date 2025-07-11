import React, { useState } from "react";
import { Container, Row, Col, Table, Form, Button, Dropdown, InputGroup } from "react-bootstrap";

const OutstandingBalance = () => {
  const [showColumnsDropdown, setShowColumnsDropdown] = useState(false);
  const [showFiltersDropdown, setShowFiltersDropdown] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState({
    Actions: true,
    Reminders: true,
    Client: true,
    "Last sent": true,
    "Newest bill's due date": true,
    "Last paid": true,
    Balance: true,
  });

  // Nested dropdown states
  const [showOriginatingAttorneyDropdown, setShowOriginatingAttorneyDropdown] = useState(false);
  const [showResponsibleAttorneyDropdown, setShowResponsibleAttorneyDropdown] = useState(false);
  const [showLastPaidDropdown, setShowLastPaidDropdown] = useState(false);
  const [showDueDateDropdown, setShowDueDateDropdown] = useState(false);

  // Selected values
  const [selectedOriginatingAttorney, setSelectedOriginatingAttorney] = useState("Find a firm user");
  const [selectedResponsibleAttorney, setSelectedResponsibleAttorney] = useState("Find a firm user");
  const [selectedLastPaid, setSelectedLastPaid] = useState("Select range");
  const [selectedDueDate, setSelectedDueDate] = useState("All dates");

  const toggleColumn = (column) => {
    setVisibleColumns({
      ...visibleColumns,
      [column]: !visibleColumns[column],
    });
  };

  const handleOriginatingAttorneySelect = (option) => {
    setSelectedOriginatingAttorney(option);
    setShowOriginatingAttorneyDropdown(false);
  };

  const handleResponsibleAttorneySelect = (option) => {
    setSelectedResponsibleAttorney(option);
    setShowResponsibleAttorneyDropdown(false);
  };

  const handleLastPaidSelect = (option) => {
    setSelectedLastPaid(option);
    setShowLastPaidDropdown(false);
  };

  const handleDueDateSelect = (option) => {
    setSelectedDueDate(option);
    setShowDueDateDropdown(false);
  };

  const dateRangeOptions = ["All dates", "Last 7 days", "Last 30 days", "Last 90 days", "Custom range"];
  const attorneyOptions = ["All attorneys", "John Smith", "Sarah Johnson", "Michael Brown", "Emily Davis"];

  return (
    <Container fluid className="p-0">
      <div className="bg-white rounded border border-light shadow-sm">
        {/* Top bar with controls */}
        <Row className="align-items-center p-3 border-bottom g-3">
          <Col xs={12} md={6} lg={4}>
            <Form.Control 
              type="text" 
              placeholder="Search clients..." 
              className="w-100"
            />
          </Col>
          
          <Col xs={12} md={6} lg={8} className="d-flex justify-content-md-end">
            <div className="d-flex flex-wrap gap-2">
              <Dropdown show={showColumnsDropdown} onToggle={setShowColumnsDropdown}>
                <Dropdown.Toggle variant="light" className="d-flex align-items-center">
                  Columns ▾
                </Dropdown.Toggle>
                
                <Dropdown.Menu className="p-2" style={{ width: '280px' }}>
                  <div className="fw-bold px-2 py-1 border-bottom">Visible columns</div>
                  {Object.keys(visibleColumns).map((column) => (
                    <Dropdown.Item 
                      key={column} 
                      as="div"
                      className="d-flex align-items-center px-2 py-2"
                      onClick={() => toggleColumn(column)}
                    >
                      <Form.Check 
                        type="checkbox" 
                        checked={visibleColumns[column]} 
                        onChange={() => {}}
                        className="me-3"
                      />
                      {column}
                    </Dropdown.Item>
                  ))}
                  <div className="border-top mt-2 pt-2">
                    <Button variant="light" className="w-100 mb-2">
                      Update columns
                    </Button>
                    <Button 
                      variant="light" 
                      className="w-100" 
                      onClick={() => setShowColumnsDropdown(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              
              <Dropdown show={showFiltersDropdown} onToggle={setShowFiltersDropdown}>
                <Dropdown.Toggle variant="light">
                  Filters ▾
                </Dropdown.Toggle>
                
                <Dropdown.Menu style={{ width: '280px' }}>
                  <div className="px-3 py-2 border-bottom">
                    <Form.Label className="fw-bold d-block mb-1">Originating Attorney</Form.Label>
                    <Dropdown show={showOriginatingAttorneyDropdown} onToggle={setShowOriginatingAttorneyDropdown}>
                      <Dropdown.Toggle variant="light" className="w-100 d-flex justify-content-between align-items-center">
                        {selectedOriginatingAttorney} <span>▾</span>
                      </Dropdown.Toggle>
                      
                      <Dropdown.Menu style={{ width: '280px' }}>
                        {attorneyOptions.map((option) => (
                          <Dropdown.Item
                            key={option}
                            onClick={() => handleOriginatingAttorneySelect(option)}
                          >
                            {option}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  
                  <div className="px-3 py-2 border-bottom">
                    <Form.Label className="fw-bold d-block mb-1">Responsible Attorney</Form.Label>
                    <Dropdown show={showResponsibleAttorneyDropdown} onToggle={setShowResponsibleAttorneyDropdown}>
                      <Dropdown.Toggle variant="light" className="w-100 d-flex justify-content-between align-items-center">
                        {selectedResponsibleAttorney} <span>▾</span>
                      </Dropdown.Toggle>
                      
                      <Dropdown.Menu style={{ width: '280px' }}>
                        {attorneyOptions.map((option) => (
                          <Dropdown.Item
                            key={option}
                            onClick={() => handleResponsibleAttorneySelect(option)}
                          >
                            {option}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  
                  <div className="px-3 py-2 border-bottom">
                    <Form.Label className="fw-bold d-block mb-1">Last Paid</Form.Label>
                    <Dropdown show={showLastPaidDropdown} onToggle={setShowLastPaidDropdown}>
                      <Dropdown.Toggle variant="light" className="w-100 d-flex justify-content-between align-items-center">
                        {selectedLastPaid} <span>▾</span>
                      </Dropdown.Toggle>
                      
                      <Dropdown.Menu style={{ width: '280px' }}>
                        {dateRangeOptions.map((option) => (
                          <Dropdown.Item
                            key={option}
                            onClick={() => handleLastPaidSelect(option)}
                          >
                            {option}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  
                  <div className="px-3 py-2 border-bottom">
                    <Form.Label className="fw-bold d-block mb-1">Newest Bill's Due Date</Form.Label>
                    <Dropdown show={showDueDateDropdown} onToggle={setShowDueDateDropdown}>
                      <Dropdown.Toggle variant="light" className="w-100 d-flex justify-content-between align-items-center">
                        {selectedDueDate} <span>▾</span>
                      </Dropdown.Toggle>
                      
                      <Dropdown.Menu style={{ width: '280px' }}>
                        {dateRangeOptions.map((option) => (
                          <Dropdown.Item
                            key={option}
                            onClick={() => handleDueDateSelect(option)}
                          >
                            {option}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  
                  <div className="d-flex justify-content-between px-3 py-2 border-top">
                    <Button 
                      variant="outline-primary" 
                      size="sm"
                      onClick={() => setShowFiltersDropdown(false)}
                    >
                      Apply 
                    </Button>
                    <Button 
                      variant="outline-secondary" 
                      size="sm"
                      onClick={() => {
                        setSelectedOriginatingAttorney("Find a firm user");
                        setSelectedResponsibleAttorney("Find a firm user");
                        setSelectedLastPaid("Select range");
                        setSelectedDueDate("All dates");
                      }}
                    >
                      Clear 
                    </Button>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>

        <div className="table-responsive">
          <Table hover className="mb-0">
            <thead>
              <tr>
                <th className="p-3" style={{ width: '40px' }}>
                  <Form.Check type="checkbox" />
                </th>
                {visibleColumns.Actions && <th className="p-3">Actions</th>}
                {visibleColumns.Reminders && <th className="p-3">Reminders</th>}
                {visibleColumns.Client && (
                  <th className="p-3">
                    Client
                    <span className="ms-1 text-muted">▲▼</span>
                  </th>
                )}
                {visibleColumns["Last sent"] && (
                  <th className="p-3">
                    Last sent
                    <span className="ms-1 text-muted">▲▼</span>
                  </th>
                )}
                {visibleColumns["Newest bill's due date"] && (
                  <th className="p-3">
                    Newest bill's due date
                    <span className="ms-1 text-muted">▲▼</span>
                  </th>
                )}
                {visibleColumns["Last paid"] && (
                  <th className="p-3">
                    Last paid
                    <span className="ms-1 text-muted">▲▼</span>
                  </th>
                )}
                {visibleColumns.Balance && (
                  <th className="p-3">
                    Balance
                    <span className="ms-1 text-muted">▲▼</span>
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td 
                  colSpan={Object.values(visibleColumns).filter(Boolean).length + 1}
                  className="text-center py-5"
                >
                  <div className="fw-bold fs-5 mb-2">No clients with outstanding balance found.</div>
                  <div className="text-muted mb-4">Start billing your clients!</div>
                  <Button variant="primary" size="lg">New bills</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="d-flex align-items-center justify-content-between p-3 border-top flex-wrap gap-3">
          <div className="d-flex align-items-center gap-2">
            <Button variant="light" size="sm" disabled>
              &lt;
            </Button>
            <Button variant="light" size="sm" disabled>
              &gt;
            </Button>
            <span className="text-muted">No results found</span>
          </div>
          <Button variant="outline-primary">Export</Button>
        </div>
      </div>
    </Container>
  );
};

export default OutstandingBalance;