import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCreditCard } from 'react-icons/fa';

// Settings content stays the same
const settingsContent = [
  [
    { label: 'Account and Payment Info', desc: 'Manage your account and payments.' },
    { label: 'Profile', desc: 'Update your profile and personal performance settings.' },
    { label: 'Firm Preferences', desc: 'Matter numbering and practice areas.' },
  ],
  [
    { label: 'Manage Users', desc: 'Manage users associated with this account.' },
    { label: 'Appearance', desc: 'Customize how Fasttrack Manage looks.' },
    { label: 'Billing', desc: 'Edit bill settings, themes, and payment profiles.' },
  ],
  [
    { label: 'Groups, Job Titles, and Permissions', desc: 'Manage your groups, job titles, and permissions.' },
    { label: 'Fasttrack Mobile App', desc: 'Download Fasttrack Mobile & manage devices.' },
    { label: 'Data Escrow', desc: 'Manage back-ups using Amazon S3 cloud storage.' },
  ],
  [
    { label: 'Custom Fields', desc: 'Create custom fields or field sets.' },
    { label: 'Contact and Calendar Sync', desc: 'Connect to Google, Zoom, or Microsoft 365.' },
    { label: 'Firm Feed', desc: 'Manage Firm Feed visibility.' },
  ],
  [
    { label: 'Security & Compliance', desc: 'Passwords, 2FA, and session monitoring.' },
    { label: 'Apps', desc: 'Authorize 3rd party client applications.' },
    { label: 'Fasttrack for Co-Counsel & Sharing', desc: 'Edit branding & manage co-counsel resources.' },
  ],
  [
    { label: 'Documents', desc: 'Link to external document sources & edit preview settings.' },
    { label: 'Text Snippets', desc: 'Manage your text snippets library.' },
    { label: 'Automated Workflows', desc: 'Speed up processes using automated workflows.' },
  ],
  [
    { label: 'Bill Syncing', desc: 'Sync contacts & bills with accounting software.' },
    { label: 'Notifications', desc: 'Manage pop-up reminders, email & in-app notifications.' },
  ],
  [
    { label: 'Aggregate Reporting Participation', desc: 'Firm participation in industry stats.' },
    { label: 'Court Rules', desc: 'Manage your Court Rules settings.' },
  ],
];

const labelToRoute = {
  'Account and Payment Info': '/settings/account-info',
  'Profile': '/settings/profile',
  'Firm Preferences': '/settings/firm-preferences',
  'Manage Users': '/settings/manage-users',
  'Appearance': '/settings/appearance',
  'Billing': '/settings/billing',
  'Groups, Job Titles, and Permissions': '/settings/groups-permissions',
  'Fasttrack Mobile App': '/settings/mobile-app',
  'Data Escrow': '/settings/data-escrow',
  'Custom Fields': '/settings/custom-fields',
  'Contact and Calendar Sync': '/settings/contact-calendar-sync',
  'Firm Feed': '/settings/firm-feed',
  'Security & Compliance': '/settings/security-compliance',
  'Documents': '/settings/documents',
  'Bill Syncing': '/settings/bill-syncing',
  'Aggregate Reporting Participation': '/settings/aggregate-reporting',
  'Apps': '/settings/apps',
  'Text Snippets': '/settings/text-snippets',
  'Notifications': '/settings/notifications',
  'Court Rules': '/settings/court-rules',
  'Fasttrack for Co-Counsel & Sharing': '/settings/Fasttrack-co-counsel',
  'Automated Workflows': '/settings/automated-workflows',
};

const Settings = () => (
  <div style={{ background: '#f7f8fa', minHeight: '100vh' }}>
    <div className="p-4">
      {/* Header */}
      <div className="mb-4">
        <h1 className="fw-bold" style={{ fontSize: '2rem', }}>
          Settings
        </h1>
      </div>

      {/* Settings Grid */}
      <Row className="g-4">
        {settingsContent.flat().map((item, idx) => (
          <Col xs={12} md={6} lg={4} key={idx}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Link
                  to={labelToRoute[item.label] || '#'}
                  className="text-decoration-none fw-semibold"
                  style={{ color: '#0073E6', fontSize: '1.1rem' }}
                >
                  {item.label}
                </Link>
                <Card.Text className="text-muted mt-2" style={{ fontSize: '0.9rem' }}>
                  {item.desc}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Bottom Card */}
      <div className="justify-content-center mt-5">
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
              <div className="d-flex align-items-start gap-3 flex-wrap">
                <FaCreditCard size={40} color="#0073E6" />
                <div style={{ fontSize: 14, color: '#202223' }}>
                  <strong>You are the custom Subscriber.</strong> You can administer the{' '}
                  <a href="#" style={{ color: '#0073E6', textDecoration: 'none', fontWeight: '500' }}>
                    application subscription
                  </a>{' '}
                  and have sole control of the{' '}
                  <a href="#" style={{ color: '#0073E6', textDecoration: 'none', fontWeight: '500' }}>
                    firm calendar.
                  </a>
                </div>
              </div>
              <div className="mt-3 mt-md-0 ms-md-3">
                <Button style={{ backgroundColor: '#0073E6', border: 'none' }}>
                  Transfer role
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  </div>
);

export default Settings;
