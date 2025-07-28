// MessageTabs.jsx
import React from 'react';

const MessageTabs = ({ activeTab, onTabChange, getTabCount }) => {
  const tabs = [
    { key: 'inbox', label: 'Inbox', icon: 'fa-inbox' },
    { key: 'sent', label: 'Sent', icon: 'fa-paper-plane' },
    { key: 'client-messages', label: 'Client Messages', icon: 'fa-users' }
  ];

  return (
    <nav className="bg-white border-bottom">
      <div className="container-fluid">
        <ul className="nav nav-tabs border-0">
          {tabs.map((tab) => (
            <li key={tab.key} className="nav-item">
              <button
                onClick={() => onTabChange(tab.key)}
                className={`nav-link ${activeTab === tab.key ? 'active' : ''}`}
              >
                <i className={`fas ${tab.icon} me-2`}></i>
                {tab.label}
                {getTabCount(tab.key) > 0 && (
                  <span className="badge bg-primary ms-2">
                    {getTabCount(tab.key)}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MessageTabs;
