import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faCalculator,
  faChartLine,
  faMailBulk,
  faFileSignature,
  faPenFancy,
  faInfoCircle,
  faCircle
} from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Integrations = () => {
  const integrations = [
    {
      id: 1,
      name: 'Microsoft Outlook / 365',
      category: 'Calendar & Email',
      description: 'Sync your calendar events and manage emails seamlessly with Microsoft Office suite integration.',
      icon: faEnvelope,
      connected: true,
      color: 'text-primary'
    },
    {
      id: 2,
      name: 'Google Calendar',
      category: 'Calendar & Email',
      description: 'Connect your Google Calendar to automatically sync appointments and schedule meetings.',
      icon: faGoogle,
      connected: false,
      color: 'text-danger'
    },
    {
      id: 3,
      name: 'QuickBooks',
      category: 'Financial',
      description: 'Streamline your accounting with automated invoice generation and financial reporting.',
      icon: faCalculator,
      connected: true,
      color: 'text-success'
    },
    {
      id: 4,
      name: 'Xero',
      category: 'Financial',
      description: 'Manage your business finances with cloud-based accounting and invoicing solutions.',
      icon: faChartLine,
      connected: false,
      color: 'text-info'
    },
    {
      id: 5,
      name: 'Mailchimp',
      category: 'Communication',
      description: 'Create and send targeted email campaigns to engage with your customers effectively.',
      icon: faMailBulk,
      connected: true,
      color: 'text-warning'
    },
    {
      id: 6,
      name: 'DocuSign',
      category: 'Document Management',
      description: 'Enable secure electronic signatures and document workflow automation for your business.',
      icon: faFileSignature,
      connected: false,
      color: 'text-purple'
    },
    {
      id: 7,
      name: 'Adobe Sign',
      category: 'Document Management',
      description: 'Digitally sign documents and automate approval processes with Adobe\'s trusted platform.',
      icon: faPenFancy,
      connected: false,
      color: 'text-danger'
    }
  ];

  const toggleConnection = (id) => {
    console.log(`Toggling connection for integration ${id}`);
  };

  return (
    <div className="min-vh-100 bg-light">
      <div className=" p-4">
        {/* Header Section */}
        <div className="text-start mb-3">
          <h2 className="fw-bold text-dark mb-2">Integrations</h2>
          <p className="lead text-muted mb-4">Connect your favorite tools seamlessly</p>
        </div>
        
        {/* Integration Grid */}
        <div className="row g-4">
          {integrations.map((integration) => (
            <div key={integration.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border hover-shadow">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <div className={`rounded p-2 me-3 bg-light ${integration.color}`}>
                        <FontAwesomeIcon icon={integration.icon} size="lg" />
                      </div>
                      <div>
                        <h3 className="h5 mb-1 text-dark">{integration.name}</h3>
                        <span className="text-muted small">{integration.category}</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <FontAwesomeIcon 
                        icon={faCircle} 
                        className={`me-2 ${integration.connected ? 'text-success' : 'text-secondary'}`} 
                        size="xs" 
                      />
                      <FontAwesomeIcon 
                        icon={faInfoCircle} 
                        className="text-muted cursor-pointer hover-text-dark" 
                      />
                    </div>
                  </div>
                  
                  <p className="text-muted mb-4">
                    {integration.description}
                  </p>
                  
                  <div className="d-flex justify-content-between align-items-center">
                    <span className={`small fw-medium ${integration.connected ? 'text-success' : 'text-muted'}`}>
                      {integration.connected ? 'Connected' : 'Available'}
                    </span>
                    <button
                      onClick={() => toggleConnection(integration.id)}
                      className={`btn btn-sm ${integration.connected ? 'btn-outline-danger' : 'btn-primary'}`}
                    >
                      {integration.connected ? 'Disconnect' : 'Connect'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    
    </div>
  );
};

export default Integrations;