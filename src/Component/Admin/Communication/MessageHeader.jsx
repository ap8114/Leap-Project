// MessageHeader.jsx
import React from 'react';

const MessageHeader = ({ onNewMessage }) => {
  return (
    <header className="bg-white border-bottom py-3">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Logo & Title */}
          <div className="col-12 col-md-6 d-flex align-items-center mb-3 mb-md-0">
            <div className="bg-primary rounded p-2 me-2 text-white d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>
              <i className="fas fa-comments"></i>
            </div>
            <h1 className="h5 mb-0 text-nowrap">MessageCenter</h1>
          </div>

          {/* Actions */}
          <div className="col-12 col-md-6 d-flex justify-content-md-end align-items-center gap-2 flex-wrap">
            <button 
              onClick={onNewMessage}
              className="btn btn-primary d-flex align-items-center"
            >
              <i className="fas fa-plus me-2"></i>
              <span className="d-none d-sm-inline">New Message</span>
            </button>
            <div className="bg-light rounded-circle p-2 d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>
              <i className="fas fa-user text-muted"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MessageHeader;
