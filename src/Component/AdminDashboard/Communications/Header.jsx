import React from 'react';

const Header = ({ 
  activeNavItem, 
  activeTab, 
  setActiveTab,
  newDropdownOpen,
  setNewDropdownOpen,
  newestDropdownOpen,
  setNewestDropdownOpen
}) => {
  return (
    <div className="border-bottom p-4 bg-white">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-4">
          <div className="position-relative">
            <button
              onClick={() => setNewDropdownOpen(!newDropdownOpen)}
              className="btn btn-primary btn-sm d-flex align-items-center"
            >
              <i className="fas fa-plus me-2"></i>
              <span className="fw-semibold">New</span>
              <i className="fas fa-chevron-down ms-2"></i>
            </button>
            {newDropdownOpen && (
              <div className="position-absolute start-0 mt-1 w-100 bg-white border rounded shadow-lg z-3">
                <div className="py-2">
                  <a href="#" className="d-block px-3 py-2 text-decoration-none hover-bg-light">
                    <span className="text-primary fw-medium">Client portal</span>
                  </a>
                  <a href="#" className="d-block px-3 py-2 text-decoration-none hover-bg-light">
                    <span className="text-primary fw-medium">Internal message</span>
                  </a>
                  <a href="#" className="d-block px-3 py-2 text-decoration-none hover-bg-light">
                    <span className="text-primary fw-medium">Phone log</span>
                  </a>
                  <a href="#" className="d-block px-3 py-2 text-decoration-none hover-bg-light">
                    <span className="text-primary fw-medium">Email log</span>
                  </a>
                  <div className="border-top my-2"></div>
                  <a href="#" className="d-block px-3 py-2 text-decoration-none hover-bg-light">
                    <span className="text-primary fw-medium">Copy Maildrop address</span>
                  </a>
                  <a href="#" className="d-block px-3 py-2 text-decoration-none hover-bg-light">
                    <span className="text-primary fw-medium">Learn more about Maildrop</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {activeNavItem === 'Client portals' && (
            <ul className="nav nav-tabs border-bottom-0">
              <li className="nav-item">
                <button
                  onClick={() => setActiveTab('My client portals')}
                  className={`nav-link ${activeTab === 'My client portals' ? 'active text-primary border-primary' : 'text-secondary'}`}
                >
                  My client portals
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => setActiveTab('All')}
                  className={`nav-link ${activeTab === 'All' ? 'active text-primary border-primary' : 'text-secondary'}`}
                >
                  All
                </button>
              </li>
            </ul>
          )}

          {activeNavItem === 'Text messages' && (
            <ul className="nav nav-tabs border-bottom-0">
              <li className="nav-item">
                <button
                  onClick={() => setActiveTab('All text messages')}
                  className={`nav-link ${activeTab === 'All text messages' ? 'active text-primary border-primary' : 'text-secondary'}`}
                >
                  All text messages
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => setActiveTab('Following')}
                  className={`nav-link ${activeTab === 'Following' ? 'active text-primary border-primary' : 'text-secondary'}`}
                >
                  Following
                </button>
              </li>
            </ul>
          )}

          {activeNavItem === 'Logs' && (
            <ul className="nav nav-tabs border-bottom-0">
              <li className="nav-item">
                <button
                  onClick={() => setActiveTab('All')}
                  className={`nav-link ${activeTab === 'All' ? 'active text-primary border-primary' : 'text-secondary'}`}
                >
                  All
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => setActiveTab('Email')}
                  className={`nav-link ${activeTab === 'Email' ? 'active text-primary border-primary' : 'text-secondary'}`}
                >
                  Email
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => setActiveTab('Phone')}
                  className={`nav-link ${activeTab === 'Phone' ? 'active text-primary border-primary' : 'text-secondary'}`}
                >
                  Phone
                </button>
              </li>
            </ul>
          )}
        </div>

        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-link text-secondary p-2">
            <i className="fas fa-filter"></i>
          </button>
          <div className="position-relative">
            <button
              onClick={() => setNewestDropdownOpen(!newestDropdownOpen)}
              className="btn btn-outline-secondary btn-sm d-flex align-items-center"
            >
              Newest
              <i className="fas fa-chevron-down ms-2"></i>
            </button>
            {newestDropdownOpen && (
              <div className="position-absolute end-0 mt-1 bg-white border rounded shadow z-3" style={{ width: '120px' }}>
                <div className="py-1">
                  <a href="#" className="d-block px-3 py-2 text-decoration-none hover-bg-light">Newest</a>
                  <a href="#" className="d-block px-3 py-2 text-decoration-none hover-bg-light">Oldest</a>
                  <a href="#" className="d-block px-3 py-2 text-decoration-none hover-bg-light">A-Z</a>
                  <a href="#" className="d-block px-3 py-2 text-decoration-none hover-bg-light">Z-A</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;