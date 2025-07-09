import React, { useState, useRef, useEffect } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Card, 
  Table, 
  Form, 
  Modal, 
  InputGroup,
  Dropdown,
  Badge,
  Pagination,
  Nav
} from 'react-bootstrap';
import { 
  PlayFill, 
  StopFill, 
  ArrowClockwise, 
  Plus, 
  ChevronDown, 
  Search, 
  Funnel, 
  X, 
  Pencil, 
  Trash 
} from 'react-bootstrap-icons';

const Timebilling = () => {
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerInterval, setTimerIntervalId] = useState(null);
  const [showNewEntryModal, setShowNewEntryModal] = useState(false);
  const [selectedMatter, setSelectedMatter] = useState('All Matters');
  const [selectedTimeRange, setSelectedTimeRange] = useState('This Month');
  const [searchQuery, setSearchQuery] = useState('');
  const modalRef = useRef(null);

  // Timer functions
  const startTimer = () => {
    if (timerRunning) return;
    
    const interval = setInterval(() => {
      setTimerSeconds(prev => prev + 1);
    }, 1000);
    
    setTimerIntervalId(interval);
    setTimerRunning(true);
  };

  const stopTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
    setTimerRunning(false);
  };

  const resetTimer = () => {
    stopTimer();
    setTimerSeconds(0);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowNewEntryModal(false);
      }
    };

    if (showNewEntryModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNewEntryModal]);

  // Sample time entries data
  const timeEntries = [
    {
      id: 1,
      date: 'Jul 7, 2025',
      matter: 'Smith v. Jones',
      description: 'Case review and document preparation',
      duration: '2:30',
      rate: '$250.00',
      amount: '$625.00',
      status: 'Unbilled'
    },
    {
      id: 2,
      date: 'Jul 6, 2025',
      matter: 'Johnson Estate',
      description: 'Client consultation regarding estate planning',
      duration: '1:15',
      rate: '$275.00',
      amount: '$343.75',
      status: 'Unbilled'
    },
    {
      id: 3,
      date: 'Jul 5, 2025',
      matter: 'Corporate Restructuring',
      description: 'Contract review and amendments',
      duration: '3:45',
      rate: '$300.00',
      amount: '$1,125.00',
      status: 'Billed'
    },
    {
      id: 4,
      date: 'Jul 4, 2025',
      matter: 'Smith v. Jones',
      description: 'Court appearance and follow-up',
      duration: '4:00',
      rate: '$250.00',
      amount: '$1,000.00',
      status: 'Billed'
    },
    {
      id: 5,
      date: 'Jul 3, 2025',
      matter: 'Johnson Estate',
      description: 'Will drafting and review',
      duration: '2:00',
      rate: '$275.00',
      amount: '$550.00',
      status: 'Billed'
    }
  ];

  // New time entry form state
  const [newEntry, setNewEntry] = useState({
    date: new Date().toISOString().split('T')[0],
    matter: '',
    description: '',
    duration: '',
    rate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New time entry:', newEntry);
    setShowNewEntryModal(false);
    setNewEntry({
      date: new Date().toISOString().split('T')[0],
      matter: '',
      description: '',
      duration: '',
      rate: '',
    });
  };

  return (
<div  className="p-4">
  {/* Page Header */}
  <Row className="mb-4 align-items-center">
    <Col xs={12} md={8}>
      <h1 className="display-6 fw-bold mb-2">Time & Billing</h1>
      <p className="text-muted">
        Manage your time entries, expenses, invoices, and trust accounts
      </p>
    </Col>
    <Col xs={12} md="auto" className="mt-3 mt-md-0 text-md-end">
      <Button
        variant="custom"
        onClick={() => setShowNewEntryModal(true)}
        className="d-flex align-items-center w-100 w-md-auto justify-content-center btn-custom"
      >
        <Plus className="me-2" size={18} />
        New Time Entry
      </Button>
    </Col>
  </Row>

  {/* Filters and Search Row */}
  <div className="card p-4">
    <Row className="mb-3 g-2">
      <Col xs={12} md={4}>
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Search entries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-start-0"
          />
        </InputGroup>
      </Col>
      <Col xs={12} md={8}>
        <div className="d-flex justify-content-start justify-content-md-end flex-wrap gap-2">
          <Dropdown>
            <Dropdown.Toggle variant="light" className="border d-flex align-items-center">
              {selectedMatter}
              <ChevronDown className="ms-1" size={14} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSelectedMatter('All Matters')}>All Matters</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedMatter('Smith v. Jones')}>Smith v. Jones</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedMatter('Johnson Estate')}>Johnson Estate</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedMatter('Corporate Restructuring')}>Corporate Restructuring</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="light" className="border d-flex align-items-center">
              {selectedTimeRange}
              <ChevronDown className="ms-1" size={14} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSelectedTimeRange('This Month')}>This Month</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedTimeRange('Last Month')}>Last Month</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedTimeRange('Last 7 Days')}>Last 7 Days</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedTimeRange('Custom Range')}>Custom Range</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button variant="light" className="border d-flex align-items-center">
            <Funnel className="me-1" size={14} />
            Filters
          </Button>
        </div>
      </Col>
    </Row>

    {/* Time Entries Table */}
    <Card className="border shadow-sm">
      <Card.Body className="p-0">
        <div className="table-responsive">
          <Table hover className="mb-0">
            <thead className="bg-light">
              <tr>
                <th className="text-uppercase small text-muted fw-medium py-3 ps-4">Date</th>
                <th className="text-uppercase small text-muted fw-medium py-3">Matter/Task</th>
                <th className="text-uppercase small text-muted fw-medium py-3">Description</th>
                <th className="text-uppercase small text-muted fw-medium py-3">Duration</th>
                <th className="text-uppercase small text-muted fw-medium py-3">Rate</th>
                <th className="text-uppercase small text-muted fw-medium py-3">Amount</th>
                <th className="text-uppercase small text-muted fw-medium py-3">Status</th>
                <th className="text-uppercase small text-muted fw-medium py-3 pe-4 text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {timeEntries.map((entry) => (
                <tr key={entry.id}>
                  <td className="align-middle ps-4">{entry.date}</td>
                  <td className="align-middle fw-medium">{entry.matter}</td>
                  <td className="align-middle">{entry.description}</td>
                  <td className="align-middle">{entry.duration}</td>
                  <td className="align-middle">{entry.rate}</td>
                  <td className="align-middle fw-medium">{entry.amount}</td>
                  <td className="align-middle">
                    <Badge
                      bg={entry.status === 'Unbilled' ? 'warning' : 'success'}
                      className="text-uppercase py-2 px-2"
                      style={{ fontSize: '0.7rem' }}
                    >
                      {entry.status}
                    </Badge>
                  </td>
                  <td className="align-middle pe-4 text-end">
                    <button className="btn btn-link text-custom me-2">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn btn-link text-danger">
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card.Body>
      <Card.Footer className="bg-white border-top d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
        <div className="text-muted small mb-2 mb-md-0">
          Showing <span className="fw-medium">1</span> to <span className="fw-medium">5</span> of <span className="fw-medium">24</span> entries
        </div>
        <Pagination className="mb-0 pagination-custom">
          <Pagination.Prev disabled>Previous</Pagination.Prev>
          <Pagination.Item active>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Next>Next</Pagination.Next>
        </Pagination>
      </Card.Footer>
    </Card>
  </div>

  {/* New Time Entry Modal */}
  <Modal show={showNewEntryModal} onHide={() => setShowNewEntryModal(false)} centered>
    <div ref={modalRef}>
      <Modal.Header closeButton className="border-bottom-0 pb-0">
        <Modal.Title>New Time Entry</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body className="pt-0">
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={newEntry.date}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Matter</Form.Label>
            <Form.Select
              name="matter"
              value={newEntry.matter}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a matter</option>
              <option value="Smith v. Jones">Smith v. Jones</option>
              <option value="Johnson Estate">Johnson Estate</option>
              <option value="Corporate Restructuring">Corporate Restructuring</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={newEntry.description}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Duration (hh:mm)</Form.Label>
                <Form.Control
                  type="text"
                  name="duration"
                  value={newEntry.duration}
                  onChange={handleInputChange}
                  placeholder="e.g. 1:30"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Hourly Rate ($)</Form.Label>
                <Form.Control
                  type="text"
                  name="rate"
                  value={newEntry.rate}
                  onChange={handleInputChange}
                  placeholder="e.g. 250.00"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Check
            type="checkbox"
            id="billable"
            label="Billable time entry"
            defaultChecked
            className="mt-3"
          />
        </Modal.Body>
        <Modal.Footer className="border-top-0 pt-0">
          <Button variant="light" onClick={() => setShowNewEntryModal(false)}>
            Cancel
          </Button>
          <Button variant="custom" type="submit" className='btn-custom'>
            Save Time Entry
          </Button>
        </Modal.Footer>
      </Form>
    </div>
  </Modal>
</div>

  );
};

export default Timebilling;