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
        { label: 'Appearance', desc: 'Customize how Clio Manage looks on your device.' },
        { label: 'Billing', desc: 'Edit your bill settings, themes, payment profiles, and UTBMS options...' },
    ],
    [
        { label: 'Groups, Job Titles, and Permissions', desc: 'Manage your groups, job titles, and permissions.' },
        { label: 'Clio Mobile App', desc: 'Download Clio Mobile. Manage your device authorization and notifications.' },
        { label: 'Data Escrow', desc: 'Manage back-ups using Amazon S3 cloud storage.' },
    ],
    [
        { label: 'Custom Fields', desc: 'Create individual custom fields or custom field sets.' },
        { label: 'Contact and Calendar Sync', desc: 'Connect your account to Google, Zoom or Microsoft 365.' },
        { label: 'Firm Feed', desc: 'Manage your Firm Feed s visibility.' },

    ],
    [
        { label: 'Security & Compliance', desc: 'Manage passwords, set up two-factor authentication, and monitor account sessions.' },
        { label: 'Apps', desc: 'Authorize 3rd party client applications.' },
        { label: 'Clio for Co-Counsel & Sharing', desc: 'Edit branding options for Clio for Co-Counsel and email notifications. Manage resources and bill preview settings.' },
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

export const allSettingsFlat = settingsContent.flat().filter(Boolean);

const labelToRoute = {
    'Account and Payment Info': '/settings/account-info',
    'Profile': '/settings/profile',
    'Firm Preferences': '/settings/firm-preferences',
    'Manage Users': '/settings/manage-users',
    'Appearance': '/settings/appearance',
    'Billing': '/settings/billing',
    'Groups, Job Titles, and Permissions': '/settings/groups-permissions',
    'Clio Mobile App': '/settings/mobile-app',
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
    'Clio for Co-Counsel & Sharing': '/settings/clio-co-counsel',
    'Automated Workflows': '/settings/automated-workflows',

};

const Settings = () => (
    <div style={{ background: '#f7f8fa', minHeight: '100vh', width: '100vw' }}>
        <Container fluid className="px-0" style={{ maxWidth: '100%' }}>
            {/* Top bar */}
            <div
                className="border"
                style={{ background: '#f7f8fa', borderColor: '#d3dbe3', borderTop: '1px solid #d3dbe3' }}
            >
                <div className="ps-4 py-3 text-start">
                    <span style={{ color: '#2074d4', fontWeight: 500, fontSize: 24 }}>Settings</span>
                </div>
            </div>

            {/* Tab headings */}
            <div className="border" style={{ background: '#fff', borderBottom: '1px solid #d3dbe3' }}>
                {/* Section headers row */}
                <div className="border " style={{ background: '#fff', borderColor: '#d3dbe3', borderWidth: '0 0 1px 0', borderStyle: 'solid' }}>
                    <Row className="text-start" style={{ margin: 0 }}>
                        <Col md={3} className="py-4">
                            <span style={{ fontWeight: 700, fontSize: 32, color: '#232933', letterSpacing: 1 }}>SYSTEM</span>
                        </Col>
                        <Col md={3} className="py-4">
                            <span style={{ fontWeight: 700, fontSize: 32, color: '#232933', letterSpacing: 1 }}>PERSONAL</span>
                        </Col>
                        <Col md={3} className="py-4">
                            <span style={{ fontWeight: 700, fontSize: 32, color: '#232933', letterSpacing: 1 }}>CLIO SETTINGS</span>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* Clickable setting rows */}
            <Container fluid className="px-0 mx-0 text-start" style={{ background: '#fff', width: '100vw' }}>
                {settingsContent.map((row, idx) => (
                    <Row key={idx} className="py-0 text-start" style={{ minHeight: 70 }}>
                        {row.map((item, colIdx) => (
                            <Col md={3} key={colIdx} className="px-4 text-start" style={{ minHeight: 60 }}>
                                {item && (
                                    <div className="mb-2">
                                        <Link
                                            to={labelToRoute[item.label] || '#'}
                                            style={{
                                                color: '#2074d4',
                                                fontWeight: 700,
                                                fontSize: 19,
                                                textDecoration: 'none',
                                                display: 'block',
                                                marginBottom: 2,
                                            }}
                                        >
                                            {item.label}
                                        </Link>
                                        <div style={{ color: '#444', fontSize: 16, fontWeight: 400, lineHeight: 1.3 }}>
                                            {item.desc}
                                        </div>
                                    </div>
                                )}
                            </Col>
                        ))}
                    </Row>
                ))}
            </Container>

        </Container>

        {/* Responsive Container */}
        <div className="container-fluid px-3 py-3 text-start">
            <div className=" w-md-75 w-75">
                <div
                    className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between p-3 rounded border"
                    style={{ backgroundColor: '#fff', borderColor: '#d3dbe3' }}
                >
                    {/* Icon + Text */}
                    <div className="d-flex align-items-start gap-3 flex-grow-1 flex-wrap">
                        <div className="mt-1">
                            <FaCreditCard size={40} color="#0073E6" />
                        </div>

                        <div style={{ fontSize: 14, color: '#202223' }}>
                            <strong>You are the Primary Subscriber.</strong>{' '}
                            You can administer the{' '}
                            <a
                                href="#"
                                style={{ color: '#0073E6', textDecoration: 'none', fontWeight: '500' }}
                            >
                                application subscription
                            </a>{' '}
                            and have sole control of the{' '}
                            <a
                                href="#"
                                style={{ color: '#0073E6', textDecoration: 'none', fontWeight: '500' }}
                            >
                                firm calendar.
                            </a>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="mt-3 mt-md-0 ms-md-3">
                        <Button style={{ backgroundColor: '#0073E6', border: 'none' }}>
                            Transfer role
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        {/* License attribution */}
    </div>

);

export default Settings;