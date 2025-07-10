import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Communication = () => {
  const [activeNavItem, setActiveNavItem] = useState('Client portals');

  return (
    <div className="d-flex" style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Sidebar activeNavItem={activeNavItem} setActiveNavItem={setActiveNavItem} />
      <MainContent activeNavItem={activeNavItem} />
    </div>
  );
};

export default Communication;