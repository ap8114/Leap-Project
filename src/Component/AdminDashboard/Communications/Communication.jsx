import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const App = () => {
  const [activeNavItem, setActiveNavItem] = useState('Client portals');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('All'); // Added activeTab state

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      if (window.innerWidth >= 992) {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="d-flex flex-column flex-lg-row" style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      

      {sidebarOpen && (
        <div className={`${isMobile ? 'position-fixed h-100 z-2' : ''}`} style={{ width: isMobile ? '250px' : 'auto' }}>
          <Sidebar 
            activeNavItem={activeNavItem} 
            setActiveNavItem={(item) => {
              setActiveNavItem(item);
              // Reset tab when switching sections
              if (item === 'Client portals') setActiveTab('All');
              if (item === 'Text messages') setActiveTab('All text messages');
              if (item === 'Logs') setActiveTab('All');
            }}
            onClose={toggleSidebar}
            isMobile={isMobile}
          />
        </div>
      )}

      <div className={`flex-grow-1 ${isMobile && sidebarOpen ? 'ms-250' : ''}`}>
        <MainContent 
          activeNavItem={activeNavItem} 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onToggleSidebar={toggleSidebar}
          isMobile={isMobile}
          sidebarOpen={sidebarOpen}
        />
      </div>
    </div>
  );
};

export default App;