// MessageList.jsx
import React from 'react';

const MessageList = ({ messages, searchQuery, onSearchChange }) => {
  return (
    <div className="card h-100 border-0">
      <div className="card-header bg-white border-bottom">
        <div className="input-group">
          <span className="input-group-text bg-white">
            <i className="fas fa-search text-muted"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search messages..."
            value={searchQuery}
            onChange={onSearchChange}
          />
        </div>
      </div>
      <div className="card-body p-0 overflow-auto">
        {messages.length === 0 ? (
          <div className="d-flex flex-column align-items-center justify-content-center h-100 text-muted py-5">
            <i className="fas fa-inbox fs-1 mb-3"></i>
            <p>No messages in this folder</p>
          </div>
        ) : (
          <div className="list-group list-group-flush">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`list-group-item list-group-item-action ${!message.isRead ? 'bg-light' : ''}`}
              >
                <div className="d-flex">
                  <div className={`rounded-circle p-2 me-3 ${message.isClient ? 'bg-primary bg-opacity-10' : 'bg-light'}`}>
                    <i className={`fas ${message.isClient ? 'fa-building' : 'fa-user'} text-muted`}></i>
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between mb-1">
                      <div className="d-flex align-items-center">
                        <h6 className={`mb-0 ${!message.isRead ? 'fw-bold' : ''}`}>
                          {message.sender}
                        </h6>
                        {message.recipient && (
                          <>
                            <i className="fas fa-chevron-right text-xs mx-2 text-muted"></i>
                            <small className="text-muted">{message.recipient}</small>
                          </>
                        )}
                        {message.isClient && (
                          <span className="badge bg-primary bg-opacity-10 text-primary ms-2">
                            Client
                          </span>
                        )}
                      </div>
                      <small className="text-muted">{message.timestamp}</small>
                    </div>
                    <h5 className={`mb-1 ${!message.isRead ? 'fw-bold' : ''}`}>
                      {message.subject}
                    </h5>
                    <p className="text-muted mb-0 text-truncate">{message.preview}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageList;