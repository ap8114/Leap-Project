import React, { useState } from 'react';

const Header = ({ activeNavItem, onToggleSidebar, isMobile, sidebarOpen }) => {
  const [activeTab, setActiveTab] = useState('My client portals');
  const [newDropdownOpen, setNewDropdownOpen] = useState(false);
  const [newestDropdownOpen, setNewestDropdownOpen] = useState(false);

  return (
    <div className="border-bottom p-3 bg-white">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
        <div className="d-flex align-items-center gap-3">
          {/* Mobile Menu Button (only when sidebar is closed) */}
          {isMobile && !sidebarOpen && (
            <button 
              className="btn btn-outline-secondary btn-sm"
              onClick={onToggleSidebar}
            >
              <i className="fas fa-bars"></i>
            </button>
          )}

          {/* New Button with Dropdown */}
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

          {/* Tabs */}
          <div className="d-flex overflow-auto">
            {activeNavItem === 'Client portals' && (
              <ul className="nav nav-tabs border-bottom-0 flex-nowrap">
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
          </div>
        </div>

        {/* Right Side Controls */}
        <div className="d-flex align-items-center gap-3 ms-auto">
          <button className="btn btn-outline-secondary btn-sm">
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