import React, { useState } from 'react';
import CaseSummary from './CaseSummary';
import Timeline from './Timeline';
import Solicitor from './Solicitor';
import Messages from './Messages';
import Documents from './Documents';
import Appointments from './Appointments';

const MyCase = () => {
  const [activeTab, setActiveTab] = useState('case-summary');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const tabs = [
    { id: 'case-summary', label: 'Case Summary', icon: 'fa-file-alt' },
    { id: 'timeline', label: 'Timeline of Events', icon: 'fa-clock' },
    { id: 'solicitor', label: 'Assigned Solicitor', icon: 'fa-user-tie' },
    { id: 'messages', label: 'Messages', icon: 'fa-comments' },
    { id: 'documents', label: 'Uploaded Docs', icon: 'fa-folder-open' },
    { id: 'appointments', label: 'Upcoming Appointments', icon: 'fa-calendar-alt' }
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      setUploadProgress(0);
      
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'case-summary':
        return <CaseSummary />;
      case 'timeline':
        return <Timeline />;
      case 'solicitor':
        return <Solicitor />;
      case 'messages':
        return <Messages />;
      case 'documents':
        return <Documents />;
      case 'appointments':
        return <Appointments />;
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid py-4 bg-light min-vh-100">
      {/* Header */}
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h2">My Case</h1>
          <div className="d-flex gap-2">
            <div className="position-relative">
              <input
                type="file"
                id="file-upload"
                className="d-none"
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
              <label
                htmlFor="file-upload"
                className="btn btn-primary"
              >
                <i className="fas fa-upload me-2"></i>
                Upload Evidence
              </label>
            </div>
            <button className="btn btn-secondary">
              <i className="fas fa-download me-2"></i>
              Download Documents
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="card mb-4">
          <div className="card-body">
            <div className="d-flex justify-content-between mb-2">
              <span className="small fw-bold">Case Progress</span>
              <span className="small fw-bold">40% Complete</span>
            </div>
            <div className="progress">
              <div 
                className="progress-bar" 
                role="progressbar" 
                style={{ width: '40%' }}
                aria-valuenow="40" 
                aria-valuemin="0" 
                aria-valuemax="100"
              ></div>
            </div>
            <p className="small text-muted mt-2 mb-0">Discovery phase in progress</p>
          </div>
        </div>

        {/* Upload Progress */}
        {isUploading && (
          <div className="card mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center gap-3">
                <i className="fas fa-file-upload text-primary"></i>
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="small fw-bold">Uploading file...</span>
                    <span className="small text-muted">{uploadProgress}%</span>
                  </div>
                  <div className="progress" style={{ height: '4px' }}>
                    <div 
                      className="progress-bar" 
                      role="progressbar" 
                      style={{ width: `${uploadProgress}%` }}
                      aria-valuenow={uploadProgress} 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="mb-4">
        <ul className="nav nav-tabs">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab.id}>
              <button
                className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <i className={`fas ${tab.icon} me-2`}></i>
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="pb-4">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default MyCase;