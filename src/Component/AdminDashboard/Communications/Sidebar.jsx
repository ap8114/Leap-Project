import React from 'react';

const Sidebar = ({ activeNavItem, setActiveNavItem, onClose, isMobile }) => {
  const navItems = [
    { name: 'Client portals', icon: 'fas fa-folder' },
    { name: 'Text messages', icon: 'fas fa-comment-dots' },
    { name: 'Internal messages', icon: 'fas fa-envelope' },
    { name: 'Logs', icon: 'fas fa-list' }
  ];

  return (
    <div 
      className={`d-flex flex-column h-100 bg-white border-end ${isMobile ? 'shadow-lg' : ''}`}
      style={{ width: '250px' }}
    >
      {/* Header with Close Button (Mobile Only) */}
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
        <h5 className="mb-0">Communications</h5>
        {isMobile && (
          <button 
            className="btn btn-sm btn-outline-secondary"
            onClick={onClose}
          >
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>

      {/* Navigation Items */}
      <nav className="flex-grow-1 overflow-auto">
        {navItems.map((item) => (
          <div
            key={item.name}
            onClick={() => {
              setActiveNavItem(item.name);
              if (isMobile) onClose();
            }}
            className={`d-flex align-items-center px-3 py-2 mb-1 cursor-pointer ${
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

      {/* Settings */}
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