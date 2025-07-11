import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCreditCard } from 'react-icons/fa';

const settingsContent = [
  [
    { label: 'Account and Payment Info', desc: 'Manage your account and payments.' },
    { label: 'Profile', desc: 'Update your profile information, personal performance settings, and maildrop email aliases.' },
    { label: 'Firm Preferences', desc: 'Matter numbering and practice areas.' },
  ],
  [
    { label: 'Manage Users', desc: 'Manage users associated with this account.' },
    { label: 'Appearance', desc: 'Customize how Fasttrack Manage looks on your device.' },
    { label: 'Billing', desc: 'Edit your bill settings, themes, payment profiles, and UTBMS options...' },
  ],
  [
    { label: 'Groups, Job Titles, and Permissions', desc: 'Manage your groups, job titles, and permissions.' },
    { label: 'Fasttrack Mobile App', desc: 'Download Fasttrack Mobile. Manage your device authorization and notifications.' },
    { label: 'Data Escrow', desc: 'Manage back-ups using Amazon S3 cloud storage.' },
  ],
  [
    { label: 'Custom Fields', desc: 'Create individual custom fields or custom field sets.' },
    { label: 'Contact and Calendar Sync', desc: 'Connect your account to Google, Zoom or Microsoft 365.' },
    { label: 'Firm Feed', desc: 'Manage your Firm Feed visibility.' },
  ],
  [
    { label: 'Security & Compliance', desc: 'Manage passwords, set up two-factor authentication, and monitor account sessions.' },
    { label: 'Apps', desc: 'Authorize 3rd party client applications.' },
    { label: 'Fasttrack for Co-Counsel & Sharing', desc: 'Edit branding options for Fasttrack for Co-Counsel and email notifications. Manage resources and bill preview settings.' },
  ],
  [
    { label: 'Documents', desc: 'View your automation merge fields. Link your account to external document sources. Edit document preview settings.' },
    { label: 'Text Snippets', desc: 'Manage your text snippets library.' },
    { label: 'Automated Workflows', desc: 'Speed up your firm\'s processes using Automated workflows.' },
  ],
  [
    { label: 'Bill Syncing', desc: 'Sync your contacts and bills with accounting software.' },
    { label: 'Notifications', desc: 'Manage pop-up reminders, email, and in-app notification settings.' },
  ],
  [
    { label: 'Aggregate Reporting Participation', desc: 'Firm participation in industry-wide statistics.' },
    { label: 'Court Rules', desc: 'Manage your Court Rules settings.' },
  ]
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
  <div style={{ background: '#f7f8fa', minHeight: '100vh', width: '100%' }}>
    <Container fluid className="p-3">
      {/* Header */}
      <div className="ps-3 py-3">
        <h3 className="fw-bold mb-2">Settings</h3>
      </div>

      {/* Section Headings */}
      <div className="border-bottom bg-white">
        <Row className="m-0 text-start">
          <Col xs={12} md={4} className="py-3">
            <span style={{ fontWeight: 700, fontSize: 28, color: '#232933', letterSpacing: 1 }}>SYSTEM</span>
          </Col>
          <Col xs={12} md={4} className="py-3">
            <span style={{ fontWeight: 700, fontSize: 28, color: '#232933', letterSpacing: 1 }}>PERSONAL</span>
          </Col>
          <Col xs={12} md={4} className="py-3">
            <span style={{ fontWeight: 700, fontSize: 28, color: '#232933', letterSpacing: 1 }}>Fasttrack SETTINGS</span>
          </Col>
        </Row>
      </div>

      {/* Settings Rows */}
      <div className="bg-white">
        {settingsContent.map((row, idx) => (
          <Row key={idx} className="py-3 border-bottom">
            {row.map((item, colIdx) => (
              <Col xs={12} md={4} key={colIdx} className="mb-3">
                {item && (
                  <>
                    <Link
                      to={labelToRoute[item.label] || '#'}
                      className="d-block mb-1 fw-bold text-decoration-none"
                      style={{ color: '#2074d4', fontSize: 18 }}
                    >
                      {item.label}
                    </Link>
                    <div style={{ fontSize: 15, color: '#444' }}>{item.desc}</div>
                  </>
                )}
              </Col>
            ))}
          </Row>
        ))}
      </div>

      {/* Bottom Card */}
      <Container fluid className="px-0 py-4">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between p-4 rounded border bg-white">
              <div className="d-flex align-items-start gap-3 flex-grow-1 flex-wrap">
                <FaCreditCard size={40} color="#0073E6" />
                <div style={{ fontSize: 14, color: '#202223' }}>
                  <strong>You are the custom Subscriber.</strong>{' '}
                  You can administer the{' '}
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
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  </div>
);

export default Settings;
