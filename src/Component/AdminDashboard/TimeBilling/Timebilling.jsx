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
  Pagination
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
    <div className="min-vh-100 bg-light">
      <div className="py-4 container-fluid">
        
             <div className="mb-4">
          <h1 className="display-6 fw-bold mb-2">Time & Billing</h1>
           <p className="text-muted">Manage your time entries, expenses, invoices, and trust accounts</p>
       
        </div>
        
    
        
        {/* Time Tracking Tab */}
        <Row>
          <Col>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex align-items-center gap-3">
                <Button 
                  variant="primary" 
                  onClick={() => setShowNewEntryModal(true)}
                  className="d-flex align-items-center"
                >
                  <Plus className="me-2" />
                  New Time Entry
                </Button>
                
                <Card className="p-3 d-flex align-items-center flex-row gap-3">
                  <div className="text-muted small">Timer:</div>
                  <div className="font-monospace fw-semibold">{formatTime(timerSeconds)}</div>
                  {!timerRunning ? (
                    <Button 
                      variant="success" 
                      onClick={startTimer}
                      className="rounded-circle p-2"
                    >
                      <PlayFill />
                    </Button>
                  ) : (
                    <Button 
                      variant="danger" 
                      onClick={stopTimer}
                      className="rounded-circle p-2"
                    >
                      <StopFill />
                    </Button>
                  )}
                  {timerSeconds > 0 && (
                    <Button 
                      variant="secondary" 
                      onClick={resetTimer}
                      className="rounded-circle p-2"
                    >
                      <ArrowClockwise />
                    </Button>
                  )}
                </Card>
              </div>
              
              <div className="d-flex align-items-center gap-3">
                <Dropdown>
                  <Dropdown.Toggle variant="light" className="border">
                    {selectedMatter} <ChevronDown size={12} className="ms-2" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setSelectedMatter('All Matters')}>All Matters</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectedMatter('Smith v. Jones')}>Smith v. Jones</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectedMatter('Johnson Estate')}>Johnson Estate</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectedMatter('Corporate Restructuring')}>Corporate Restructuring</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                
                <Dropdown>
                  <Dropdown.Toggle variant="light" className="border">
                    {selectedTimeRange} <ChevronDown size={12} className="ms-2" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setSelectedTimeRange('This Month')}>This Month</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectedTimeRange('Last Month')}>Last Month</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectedTimeRange('Last 7 Days')}>Last 7 Days</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectedTimeRange('Custom Range')}>Custom Range</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                
                <InputGroup className="w-auto">
                  <InputGroup.Text>
                    <Search />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search entries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </InputGroup>
                
                <Button variant="light" className="border">
                  <Funnel />
                </Button>
              </div>
            </div>
            
            <Card className="overflow-hidden">
              <Table hover responsive className="mb-0">
                <thead className="bg-light">
                  <tr>
                    <th className="text-uppercase small text-muted">Date</th>
                    <th className="text-uppercase small text-muted">Matter/Task</th>
                    <th className="text-uppercase small text-muted">Description</th>
                    <th className="text-uppercase small text-muted">Duration</th>
                    <th className="text-uppercase small text-muted">Rate</th>
                    <th className="text-uppercase small text-muted">Amount</th>
                    <th className="text-uppercase small text-muted">Status</th>
                    <th className="text-uppercase small text-muted text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {timeEntries.map((entry) => (
                    <tr key={entry.id}>
                      <td className="align-middle">{entry.date}</td>
                      <td className="align-middle fw-medium">{entry.matter}</td>
                      <td className="align-middle">{entry.description}</td>
                      <td className="align-middle">{entry.duration}</td>
                      <td className="align-middle">{entry.rate}</td>
                      <td className="align-middle fw-medium">{entry.amount}</td>
                      <td className="align-middle">
                        <Badge bg={entry.status === 'Unbilled' ? 'warning' : 'success'} className="text-uppercase">
                          {entry.status}
                        </Badge>
                      </td>
                      <td className="align-middle text-end">
                        <Button variant="link" size="sm" className="text-primary p-0 me-2">
                          <Pencil />
                        </Button>
                        <Button variant="link" size="sm" className="text-danger p-0">
                          <Trash />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Card.Footer className="d-flex justify-content-between align-items-center bg-light">
                <div className="text-muted small">
                  Showing 5 of 24 entries
                </div>
                <Pagination className="mb-0">
                  <Pagination.Prev />
                  <Pagination.Next />
                </Pagination>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        
        {/* New Time Entry Modal */}
        <Modal show={showNewEntryModal} onHide={() => setShowNewEntryModal(false)} centered>
          <div ref={modalRef}>
            <Modal.Header closeButton>
              <Modal.Title>New Time Entry</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
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
                  <Col>
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
                  <Col>
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
                  className="mt-4"
                />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="light" onClick={() => setShowNewEntryModal(false)}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Save Time Entry
                </Button>
              </Modal.Footer>
            </Form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Timebilling;