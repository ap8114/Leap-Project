import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewClientPortalModal from './NewClientPortalModal';
import NewInternalMessageModal from './NewInternalMessageModal';

const ContentArea = ({ activeNavItem, activeTab = 'All' }) => {
  const navigate = useNavigate();

  // Modal states
  const [showNewClientPortal, setShowNewClientPortal] = useState(false);
  const [showInternalMessage, setShowInternalMessage] = useState(false);

  const handleShowNewClientPortal = () => setShowNewClientPortal(true);
  const handleCloseNewClientPortal = () => setShowNewClientPortal(false);

  const handleShowInternalMessage = () => setShowInternalMessage(true);
  const handleCloseInternalMessage = () => setShowInternalMessage(false);

  // Sample data
  const clientPortalsData = {
    'My client portals': [],
    'All': []
  };

  const textMessagesData = {
    'All text messages': [],
    'Following': []
  };

  const logsData = {
    'All': [],
    'Email': [],
    'Phone': []
  };

  const internalMessagesData = {
    'My threads': [],
    'Matter threads': []
  };

  // Reusable empty state
  const renderEmptyState = (icon, title, description, buttonText, onClick) => (
    <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
      <div className="text-center" style={{ maxWidth: '500px' }}>
        <div className="mb-5">
          <div className="mx-auto mb-4 rounded-circle bg-custom bg-opacity-10 d-flex align-items-center justify-content-center" style={{ width: '128px', height: '128px' }}>
            <i className={`fas ${icon} text-light fs-3`}></i>
          </div>
        </div>
        <h5 className="fw-semibold mb-3">{title}</h5>
        <p className="text-secondary mb-4">{description}</p>
        <button className="btn btn-custom px-4 py-2" onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex-grow-1 p-3 p-md-4 p-lg-5 d-flex flex-column">
      {activeNavItem === 'Client portals' ? (
        <div className="flex-grow-1 d-flex flex-column">
          <ul className="nav nav-tabs mb-4">
            {Object.keys(clientPortalsData).map(tab => (
              <li key={tab} className="nav-item">
                <button
                  onClick={() => {}}
                  className={`nav-link ${activeTab === tab ? 'active text-custom border-custom' : 'text-secondary'}`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
          {clientPortalsData[activeTab]?.length > 0 ? (
            <div>Client portals content</div>
          ) : (
            renderEmptyState(
              'fa-folder',
              'No client portals found',
              'Share a message, document, bill or calendar event with your clients',
              'New client portal',
              handleShowNewClientPortal
            )
          )}
        </div>
      ) : activeNavItem === 'Text messages' ? (
        <div className="flex-grow-1 d-flex flex-column">
          <ul className="nav nav-tabs mb-4">
            {Object.keys(textMessagesData).map(tab => (
              <li key={tab} className="nav-item">
                <button
                  onClick={() => {}}
                  className={`nav-link ${activeTab === tab ? 'active text-custom border-custom' : 'text-secondary'}`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
          {textMessagesData[activeTab]?.length > 0 ? (
            <div>Text messages content</div>
          ) : (
            renderEmptyState(
              'fa-comment-dots',
              'Get quick responses when you need them',
              'Use text messages to send clients updates, event notifications, and automated reminders',
              'Upgrade to turn on text messaging',
              () => navigate('/pricingplan')
            )
          )}
        </div>
      ) : activeNavItem === 'Internal messages' ? (
        <div className="flex-grow-1 d-flex flex-column">
          <ul className="nav nav-tabs mb-4">
            {Object.keys(internalMessagesData).map(tab => (
              <li key={tab} className="nav-item">
                <button
                  onClick={() => {}}
                  className={`nav-link ${activeTab === tab ? 'active text-custom border-custom' : 'text-secondary'}`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="position-relative flex-grow-1">
              <i className="fas fa-search position-absolute top-50 start-3 translate-middle-y text-secondary"></i>
              <input
                type="text"
                placeholder="Filter by subject or body"
                className="form-control ps-5"
              />
            </div>
          </div>
          {internalMessagesData[activeTab]?.length > 0 ? (
            <div>Internal messages content</div>
          ) : (
            renderEmptyState(
              'fa-envelope',
              'No internal messages found',
              'Keep track of every conversation',
              'New internal message',
              handleShowInternalMessage
            )
          )}
        </div>
      ) : activeNavItem === 'Logs' ? (
        <div className="flex-grow-1 d-flex flex-column">
          <ul className="nav nav-tabs mb-4">
            {Object.keys(logsData).map(tab => (
              <li key={tab} className="nav-item">
                <button
                  onClick={() => {}}
                  className={`nav-link ${activeTab === tab ? 'active text-custom border-custom' : 'text-secondary'}`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
          {logsData[activeTab]?.length > 0 ? (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Contact</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {logsData[activeTab].map((log, index) => (
                    <tr key={index}>
                      <td>{log.date}</td>
                      <td>{log.type}</td>
                      <td>{log.contact}</td>
                      <td>{log.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            renderEmptyState(
              'fa-list',
              `No ${activeTab?.toLowerCase() || 'logs'} found`,
              'Try adjusting your filters',
              'Clear filters'
            )
          )}
        </div>
      ) : (
        <div>Select a section</div>
      )}

      {/* Modals */}
      <NewClientPortalModal
        show={showNewClientPortal}
        handleClose={handleCloseNewClientPortal}
      />

      <NewInternalMessageModal
        show={showInternalMessage}
        handleClose={handleCloseInternalMessage}
      />
    </div>
  );
};

export default ContentArea;
