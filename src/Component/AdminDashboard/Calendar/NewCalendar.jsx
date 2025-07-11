import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Plus, Calendar as CalendarIcon } from 'react-feather';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewCalendarPage = () => {
  const [activeTab, setActiveTab] = useState('new-calendar');

  const renderTabs = () => (
    <ul className="nav nav-tabs mb-4 border-bottom">
      {['Calendar', 'Feeds', 'Sharing', 'Settings', 'New Calendar'].map((label, index) => {
        const tabKeys = ['calendar', 'feeds', 'sharing', 'settings', 'new-calendar'];
        const currentKey = tabKeys[index];
        return (
          <li className="nav-item" key={label}>
            <button
              className={`nav-link ${activeTab === currentKey ? 'active text-primary fw-semibold border-primary border-bottom' : 'text-dark'}`}
              onClick={() => setActiveTab(currentKey)}
            >
              {label}
            </button>
          </li>
        );
      })}
    </ul>
  );

  const renderNewCalendar = () => (
    <>
      <h6 className="fw-bold mb-2">Calendar</h6>
      <Card className="mb-4" style={{ maxWidth: '500px' }}>
        <Card.Body>
          <Form.Group>
            <div className="d-flex justify-content-between">
              <Form.Label className="fw-semibold mb-1">Name</Form.Label>
              <span className="text-success small">required</span>
            </div>
            <Form.Control type="text" className="mt-1" />
          </Form.Group>
        </Card.Body>
      </Card>

      <h6 className="fw-bold mb-2">Sharing Permissions</h6>
      <Card className="mb-3" style={{ maxWidth: '500px' }}>
        <Card.Body>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Group</Form.Label>
            <Form.Select disabled>
              <option> Glossary</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label className="fw-semibold">Permission</Form.Label>
            <Form.Select disabled>
              <option>Owner</option>
            </Form.Select>
          </Form.Group>
        </Card.Body>
      </Card>

      <div className="mb-4" style={{ maxWidth: '500px' }}>
        <Button variant="link" className="text-primary text-decoration-none p-0">
          <Plus size={16} className="me-1" /> Add Calendar Share
        </Button>
      </div>

      <div className="d-flex align-items-center" style={{ maxWidth: '500px' }}>
        <Button variant="primary" className="me-2">Save New Calendar</Button>
        <Button variant="link" className="text-decoration-none text-muted p-0">Cancel</Button>
      </div>
    </>
  );

  const renderSettingsTab = () => (
    <>
      <h6 className="fw-bold">Calendar Sorting Options</h6>
      <p className="text-muted">
        This setting applies a sort order to the sidebar and the day view of your calendar.
      </p>
      <div style={{ maxWidth: '500px' }}>
        <Form.Group className="mb-4">
          <Form.Label className="fw-semibold">Sort order</Form.Label>
          <Form.Select>
            <option>Sort by calendar creation date</option>
          </Form.Select>
        </Form.Group>
        <div className="d-flex align-items-center">
          <Button variant="primary" className="me-2">Update Calendar Settings</Button>
          <Button variant="link" className="text-decoration-none text-muted p-0">Cancel</Button>
        </div>
      </div>
    </>
  );

  const renderSharingTab = () => (
    <>
      <h6 className="fw-bold mb-2">Calendar</h6>
      <Card className="mb-4" style={{ maxWidth: '500px' }}>
        <Card.Body>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Calendar</Form.Label>
            <Form.Select>
              <option> Glossary</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label className="fw-semibold">Name</Form.Label>
            <Form.Control type="text" value=" Glossary" disabled />
          </Form.Group>
        </Card.Body>
      </Card>

      <h6 className="fw-bold mb-2">Sharing Permissions</h6>
      <Card className="mb-3" style={{ maxWidth: '500px' }}>
        <Card.Body>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Group</Form.Label>
            <Form.Select disabled>
              <option> Glossary</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label className="fw-semibold">Permission</Form.Label>
            <Form.Select disabled>
              <option>Owner</option>
            </Form.Select>
          </Form.Group>
        </Card.Body>
      </Card>

      <div className="mb-4" style={{ maxWidth: '500px' }}>
        <Button variant="link" className="text-primary text-decoration-none p-0">
          <Plus size={16} className="me-1" /> Add Calendar Share
        </Button>
      </div>

      <hr style={{ maxWidth: '500px' }} />

      <div className="d-flex align-items-center" style={{ maxWidth: '500px' }}>
        <Button variant="primary" className="me-2">Update Calendar</Button>
        <Button variant="link" className="text-decoration-none text-muted p-0">Cancel</Button>
      </div>
    </>
  );

  const renderFeedsTab = () => (
    <div style={{ maxWidth: '700px' }}>
      <p className="text-muted">
        Calendar feeds allow you to view your Clio calendar events from third-party applications such as Outlook or iCal.
        For more information, you can read our support article on <a href="#" className="text-primary">what calendar feeds are, and how to use them</a>.
      </p>
      <hr />
      <div className="mb-3">
        <p className="fw-semibold mb-1">
          <CalendarIcon size={14} className="me-1" /> Your Calendar ics feed (Outlook/iCal)
        </p>
        <a href="#" className="text-primary text-decoration-none">Download Your Calendar ics</a>
      </div>
      <hr />
      <div className="mb-3">
        <p className="fw-semibold mb-1">
          <CalendarIcon size={14} className="me-1" /> Firm ics feed (Outlook/iCal)
        </p>
        <a href="#" className="text-primary text-decoration-none">Download Firm ics</a>
      </div>
      <hr />
      <div className="mb-3">
        <p className="fw-semibold mb-1">
          <CalendarIcon size={14} className="me-1" /> All visible calendars ics feed (Outlook/iCal)
        </p>
        <a href="#" className="text-primary text-decoration-none">Download All visible calendars ics</a>
      </div>
      <hr />
    </div>
  );

  return (
    <div className="container-fluid px-5 py-4" style={{ maxWidth: '1000px' }}>
      {renderTabs()}
      {activeTab === 'new-calendar' && renderNewCalendar()}
      {activeTab === 'settings' && renderSettingsTab()}
      {activeTab === 'sharing' && renderSharingTab()}
      {activeTab === 'feeds' && renderFeedsTab()}
    </div>
  );
};

export default NewCalendarPage;
