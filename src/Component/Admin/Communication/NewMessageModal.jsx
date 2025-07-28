// NewMessageModal.jsx
import React from 'react';

const NewMessageModal = ({ show, onHide, newMessage, onChange, onSend }) => {
  return (
    <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex="-1" style={{ backgroundColor: show ? 'rgba(0,0,0,0.5)' : '' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">New Message</h5>
            <button type="button" className="btn-close" onClick={onHide}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">To</label>
              <input
                type="text"
                name="to"
                value={newMessage.to}
                onChange={onChange}
                className="form-control"
                placeholder="Enter recipient email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input
                type="text"
                name="subject"
                value={newMessage.subject}
                onChange={onChange}
                className="form-control"
                placeholder="Enter subject"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                value={newMessage.message}
                onChange={onChange}
                rows={6}
                className="form-control"
                placeholder="Type your message here..."
              ></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={onHide}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onSend}
              className="btn btn-primary"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMessageModal;