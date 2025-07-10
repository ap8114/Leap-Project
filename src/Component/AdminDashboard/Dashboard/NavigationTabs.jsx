import React from 'react';

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['Personal Dashboard', 'Firm Dashboard', 'Firm Feed'];

  return (
    <ul className="nav nav-tabs mb-4">
      {tabs.map((tab) => (
        <li className="nav-item" key={tab}>
          <button
            className={`nav-link ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NavigationTabs;