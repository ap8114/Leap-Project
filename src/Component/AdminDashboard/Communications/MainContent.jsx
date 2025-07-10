import React, { useState } from 'react';
import Header from './Header';
import ContentArea from './ContentArea';
import FooterPagination from './FooterPagination';

const MainContent = ({ activeNavItem }) => {
  const [activeTab, setActiveTab] = useState('My client portals');
  const [newDropdownOpen, setNewDropdownOpen] = useState(false);
  const [newestDropdownOpen, setNewestDropdownOpen] = useState(false);

  return (
    <div className="d-flex flex-column flex-grow-1">
      <Header 
        activeNavItem={activeNavItem} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        newDropdownOpen={newDropdownOpen}
        setNewDropdownOpen={setNewDropdownOpen}
        newestDropdownOpen={newestDropdownOpen}
        setNewestDropdownOpen={setNewestDropdownOpen}
      />
      <ContentArea activeNavItem={activeNavItem} activeTab={activeTab} />
      <FooterPagination />
    </div>
  );
};

export default MainContent;