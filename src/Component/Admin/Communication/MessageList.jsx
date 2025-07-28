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
            placeholder="Search messages…"
            value={searchQuery}
            onChange={onSearchChange}
          />
        </div>
      </div>
      <div className="card-body p-0 overflow-auto">
        {messages.length === 0 ? (
          <div className="d-flex flex-column align-items-center justify-content-center h-100 text-muted py-5">
            <i className="fas fa-inbox fs-1 mb-3"></i>
            <p className="mb-0">No messages in this folder.</p>
          </div>
        ) : (
          <div className="list-group list-group-flush">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`list-group-item list-group-item-action ${!message.isRead ? 'bg-light' : ''}`}
              >
                <div className="d-flex align-items-start">
                  <div
                    className={`rounded-circle d-flex align-items-center justify-content-center p-2 me-3 ${
                      message.isClient ? 'bg-primary bg-opacity-10' : 'bg-light'
                    }`}
                    style={{ width: '40px', height: '40px' }}
                  >
                    <i
                      className={`fas ${
                        message.isClient ? 'fa-building' : 'fa-user'
                      } text-muted`}
                    ></i>
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between mb-1">
                      <div className="d-flex align-items-center flex-wrap">
                        <h6 className={`mb-0 me-2 ${!message.isRead ? 'fw-bold' : ''}`}>
                          {message.sender}
                        </h6>
                        {message.recipient && (
                          <>
                            <i className="fas fa-chevron-right text-muted mx-1 small"></i>
                            <small className="text-muted me-2">{message.recipient}</small>
                          </>
                        )}
                        {message.isClient && (
                          <span className="badge bg-primary bg-opacity-10 text-primary ms-1">
                            Client Message
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
