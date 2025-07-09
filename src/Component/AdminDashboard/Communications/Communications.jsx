// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';

const Communications = () => {
  const [activeTab, setActiveTab] = useState('inbox');
  const [expandedMessage, setExpandedMessage] = useState(null);
  const [showNewMessage, setShowNewMessage] = useState(false);
  const [showLinkMatter, setShowLinkMatter] = useState(null);
  const [showAddNote, setShowAddNote] = useState(null);

  const messages = [
    {
      id: 1,
      sender: 'Sarah Johnson',
      subject: 'Contract Review Required - Smith Property Deal',
      preview: 'Hi team, I need your review on the purchase agreement for the Smith property. The client has requested some modifications to the closing terms...',
      time: '2 hours ago',
      unread: true,
      linkedMatter: 'Smith Property Purchase',
      type: 'internal'
    },
    {
      id: 2,
      sender: 'client@example.com',
      subject: 'Question about Estate Planning Documents',
      preview: 'Dear Attorney, I have some questions regarding the estate planning documents we discussed last week. Specifically about the trust structure...',
      time: '4 hours ago',
      unread: true,
      linkedMatter: null,
      type: 'email'
    },
    {
      id: 3,
      sender: 'Michael Chen',
      subject: 'Court Date Confirmation - Johnson vs. Anderson',
      preview: 'The court has confirmed the hearing date for Johnson vs. Anderson case. Please review the attached documents and prepare accordingly...',
      time: '1 day ago',
      unread: false,
      linkedMatter: 'Johnson vs. Anderson',
      type: 'internal'
    },
    {
      id: 4,
      sender: 'legal.assistant@firm.com',
      subject: 'Document Filing Deadline Reminder',
      preview: 'This is a reminder that several document filings are due this week. Please review the attached list and ensure all deadlines are met...',
      time: '2 days ago',
      unread: false,
      linkedMatter: null,
      type: 'email'
    }
  ];

  const sentMessages = [
    {
      id: 5,
      recipient: 'client@business.com',
      subject: 'Contract Terms Update - Business Acquisition',
      preview: 'Dear Client, Following our discussion yesterday, I have updated the contract terms as requested. Please review the attached revised agreement...',
      time: '3 hours ago',
      linkedMatter: 'Business Acquisition Deal',
      type: 'email'
    },
    {
      id: 6,
      recipient: 'Jennifer Walsh',
      subject: 'Case Strategy Discussion',
      preview: 'Hi Jennifer, I wanted to discuss our strategy for the upcoming mediation session. Based on the latest developments...',
      time: '1 day ago',
      linkedMatter: 'Corporate Dispute Case',
      type: 'internal'
    }
  ];

  const linkedMessages = [
    {
      id: 7,
      sender: 'David Miller',
      subject: 'Discovery Documents Ready for Review',
      preview: 'The discovery documents for the Miller case are now ready for your review. I have organized them by category and priority...',
      time: '5 hours ago',
      linkedMatter: 'Miller Personal Injury',
      type: 'internal'
    },
    {
      id: 8,
      sender: 'opposing.counsel@law.com',
      subject: 'Settlement Proposal - Wilson Case',
      preview: 'Dear Counsel, We are writing to present a settlement proposal for the Wilson case. Our client is prepared to offer...',
      time: '1 day ago',
      linkedMatter: 'Wilson Employment Dispute',
      type: 'email'
    }
  ];

  const getCurrentMessages = () => {
    switch (activeTab) {
      case 'sent':
        return sentMessages;
      case 'linked':
        return linkedMessages;
      default:
        return messages;
    }
  };

  const toggleMessage = (id) => {
    setExpandedMessage(expandedMessage === id ? null : id);
  };

  return (
 <div className="container-fluid py-4">
  {/* Header */}
  <div className="mb-4">
    <h1 className="display-6 fw-bold  mb-3">Communications</h1>

    {/* Tab Navigation */}
    <div className="d-flex flex-wrap bg-light p-2 rounded">
      {['Inbox', 'Sent', 'Linked to Matters'].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab.toLowerCase().replace(/ /g, ''))}
          className={`btn btn-sm me-2 mb-2 ${
            activeTab === tab.toLowerCase().replace(/ /g, '')
              ? 'btn-custom'
              : 'btn-outline-secondary'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  </div>

  {/* Action Bar */}
  <div className="row align-items-center mb-3">
    <div className="col-12 col-md-6 mb-2 mb-md-0">
      <div className="d-flex align-items-center gap-2">
        <i className="fas fa-envelope text-custom"></i>
        <span className="text-muted small">Email Integration Active</span>
      </div>
    </div>
    <div className="col-12 col-md-6 text-md-end">
      <button
        onClick={() => setShowNewMessage(true)}
        className="btn btn-custom d-inline-flex align-items-center"
      >
        <i className="fas fa-plus me-2"></i>
        New Message
      </button>
    </div>
  </div>

  {/* Messages List */}
  <div className="row g-3">
    {getCurrentMessages().map((message) => (
      <div key={message.id} className="col-12">
        <div className="card shadow-sm">
          <div
            className="card-body cursor-pointer"
            onClick={() => toggleMessage(message.id)}
          >
            <div className="d-flex justify-content-between align-items-start">
              <div className="flex-grow-1">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <i
                    className={`fas ${
                      message.type === 'email'
                        ? 'fa-envelope text-custom'
                        : 'fa-comment text-success'
                    }`}
                  ></i>
                  <strong>{
                    activeTab === 'sent' ? message.recipient : message.sender
                  }</strong>
                  {message.unread && activeTab !== 'sent' && (
                    <span className="badge bg-custom rounded-circle p-1"></span>
                  )}
                  {message.linkedMatter && (
                    <span className="badge bg-light text-dark border">
                      {message.linkedMatter}
                    </span>
                  )}
                </div>
                <h5 className="mb-1">{message.subject}</h5>
                <p className="text-muted small mb-0 text-truncate">
                  {message.preview}
                </p>
              </div>
              <div className="text-end">
                <small className="text-muted">{message.time}</small>
                <div>
                  <i
                    className={`fas fa-chevron-${
                      expandedMessage === message.id ? 'up' : 'down'
                    } text-muted`}
                  ></i>
                </div>
              </div>
            </div>
          </div>

          {/* Expanded Content */}
          {expandedMessage === message.id && (
            <div className="border-top p-3 bg-light">
              <p className="mb-3 text-muted small">{message.preview} + details...</p>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-2">
                {activeTab !== 'sent' && (
                  <>
                    <button className="btn btn-sm btn-custom">
                      <i className="fas fa-reply me-1"></i> Reply
                    </button>
                    <button className="btn btn-sm btn-secondary">
                      <i className="fas fa-share me-1"></i> Forward
                    </button>
                  </>
                )}
                <button
                  className="btn btn-sm btn-purple text-white"
                  onClick={() => setShowLinkMatter(message.id)}
                >
                  <i className="fas fa-link me-1"></i> Link to Matter
                </button>
                <button
                  className="btn btn-sm btn-success text-white"
                  onClick={() => setShowAddNote(message.id)}
                >
                  <i className="fas fa-sticky-note me-1"></i> Add Note
                </button>
                <button className="btn btn-sm btn-dark">
                  <i className="fas fa-archive me-1"></i> Archive
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default Communications;