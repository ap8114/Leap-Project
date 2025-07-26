import React from 'react';

const Messages = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="h5 card-title mb-0">Secure Messages</h3>
          <div className="d-flex align-items-center gap-2 small text-success">
            <i className="fas fa-lock"></i>
            <span>End-to-end encrypted</span>
          </div>
        </div>
        
        <div className="d-flex flex-column gap-3" style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {/* Received Message */}
          <div className="d-flex align-items-start gap-2">
            <div className="flex-shrink-0">
              <div className="bg-primary bg-opacity-10 rounded-circle p-2">
                <i className="fas fa-user-tie text-primary"></i>
              </div>
            </div>
            <div>
              <div className="bg-light rounded p-3">
                <p className="small mb-0">Hi John, I've reviewed the medical records you submitted. They look comprehensive and will be very helpful for our case. I'll be in touch soon with next steps.</p>
              </div>
              <p className="small text-muted mt-1">Sarah Johnson • 1 day ago</p>
            </div>
          </div>
          
          {/* Sent Message */}
          <div className="d-flex align-items-start gap-2 justify-content-end">
            <div className="text-end">
              <div className="bg-primary text-white rounded p-3">
                <p className="small mb-0">Thank you for the update. I have some additional documentation from my physical therapy sessions. Should I upload those as well?</p>
              </div>
              <p className="small text-muted mt-1 text-end">You • 2 hours ago</p>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-light rounded-circle p-2">
                <i className="fas fa-user text-muted"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-top mt-4 pt-3">
          <div className="d-flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="form-control"
            />
            <button className="btn btn-primary">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;