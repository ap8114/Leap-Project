import React, { useState } from "react";
import Billing from "./Billing";
import OutstandingBalance from "./OutstandingBalance";
import JobStatus from "./JobStatus";
import { Link } from "react-router-dom";

const tabs = [
  { label: "Bills" },
  { label: "Outstanding Balances" },
  { label: "Job Status" },
];

const tabContents = [
  <div><Billing/></div>,
  <div><OutstandingBalance/></div>,
  <div><JobStatus/></div>,
];

const Timebilling = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="container-fluid p-0">
      {/* Header Section */}
      <div className="timebilling-header p-3 p-md-4 bg-white">
        <div className="row align-items-center">
          {/* Tabs Section */}
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <div className="d-flex ">
              <nav className="nav nav-tabs border-0 flex-nowrap">
                {tabs.map((tab, idx) => (
                  <button
                    key={tab.label}
                    className={`nav-link ${activeTab === idx ? 'active' : ''}`}
                    onClick={() => setActiveTab(idx)}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          
          {/* Buttons Section */}
          <div className="col-12 col-md-6">
            <div className="d-flex flex-wrap justify-content-md-end gap-2">
              <Link to="/recordpayment" className="text-decoration-none">
                <button className="btn btn-outline-secondary">
                  Record payment
                </button>
              </Link>
              
              <div className="btn-group">
                <Link to="/newbills" className="text-decoration-none">
                  <button className="btn btn-custom">
                    New bills
                  </button>
                </Link>
                <button
                  className="btn btn-custom dropdown-toggle dropdown-toggle-split"
                  onClick={toggleDropdown}
                  aria-expanded={showDropdown}
                />
                
                {/* Dropdown Menu */}
                <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`} style={{marginLeft:"-60px", marginTop:"40px"}}>
                  <li><button className="dropdown-item">New trust request</button></li>
                  <li><button className="dropdown-item">New statements of account</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tab Content Section */}
      <div className="tab-content p-3 p-md-4">
        {tabContents[activeTab]}
      </div>
    </div>
  );
};

export default Timebilling;