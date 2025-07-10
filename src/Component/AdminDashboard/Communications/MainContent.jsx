import React from 'react';
import Header from './Header';
import ContentArea from './ContentArea';
import FooterPagination from './FooterPagination';

const MainContent = ({ 
  activeNavItem, 
  activeTab,
  setActiveTab,
  onToggleSidebar,
  isMobile,
  sidebarOpen
}) => {
  return (
    <div className="d-flex flex-column flex-grow-1">
      <Header 
        activeNavItem={activeNavItem}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onToggleSidebar={onToggleSidebar}
        isMobile={isMobile}
        sidebarOpen={sidebarOpen}
      />
      <ContentArea 
        activeNavItem={activeNavItem}
        activeTab={activeTab}
      />
      <FooterPagination />
    </div>
  );
};

export default MainContent;