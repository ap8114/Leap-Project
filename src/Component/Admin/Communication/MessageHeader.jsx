// MessageHeader.jsx
import React from 'react';

const MessageHeader = ({ onNewMessage }) => {
  return (
    <header className="bg-white border-bottom py-3">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div className="bg-primary rounded p-2 me-3 text-white">
              <i className="fas fa-comments"></i>
            </div>
            <h1 className="h4 mb-0">MessageCenter</h1>
          </div>
          <div className="d-flex align-items-center">
            <button 
              onClick={onNewMessage}
              className="btn btn-primary me-3"
            >
              <i className="fas fa-plus me-2"></i>
              New Message
            </button>
            <div className="bg-light rounded-circle p-2">
              <i className="fas fa-user text-muted"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MessageHeader;