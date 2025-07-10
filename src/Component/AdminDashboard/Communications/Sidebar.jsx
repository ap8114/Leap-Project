import React from 'react';

const Sidebar = ({ activeNavItem, setActiveNavItem }) => {
  const navItems = [
    { name: 'Client portals', icon: 'fas fa-folder' },
    { name: 'Text messages', icon: 'fas fa-comment-dots' },
    { name: 'Internal messages', icon: 'fas fa-envelope' },
    { name: 'Logs', icon: 'fas fa-list' }
  ];

  return (
    <div className="d-flex flex-column border-end" style={{ width: '250px', backgroundColor: 'white' }}>
      <div className="p-4">
        <h5 className="fw-semibold mb-0">Communications</h5>
      </div>
      <nav className="flex-grow-1 px-3">
        {navItems.map((item) => (
          <div
            key={item.name}
            onClick={() => setActiveNavItem(item.name)}
            className={`d-flex align-items-center px-3 py-2 mb-1 rounded cursor-pointer ${
              activeNavItem === item.name
                ? 'bg-primary bg-opacity-10 text-primary'
                : 'text-secondary hover-bg-light'
            }`}
          >
            <i className={`${item.icon} me-3`} style={{ fontSize: '0.875rem' }}></i>
            <span className="fw-medium" style={{ fontSize: '0.875rem' }}>{item.name}</span>
          </div>
        ))}
      </nav>
      <div className="p-3 border-top">
        <div className="d-flex align-items-center px-3 py-2 text-secondary hover-bg-light rounded cursor-pointer">
          <i className="fas fa-cog me-3" style={{ fontSize: '0.875rem' }}></i>
          <span className="fw-medium" style={{ fontSize: '0.875rem' }}>Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;