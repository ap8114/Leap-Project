import React, { useState } from 'react';

const Messages = () => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    {
      id: 1,
      sender: 'John Smith',
      content: "Hey, I've reviewed the project proposal. The security implementation looks solid.",
      timestamp: '2:34 PM',
      isSent: false,
      isRead: true,
      hasAttachment: false,
    },
    {
      id: 2,
      sender: 'You',
      content: "Thanks for the feedback! I've also added the encryption protocols we discussed.",
      timestamp: '2:36 PM',
      isSent: true,
      isRead: true,
      hasAttachment: false,
    },
    {
      id: 3,
      sender: 'John Smith',
      content: 'Perfect. Can you send me the latest documentation?',
      timestamp: '2:38 PM',
      isSent: false,
      isRead: true,
      hasAttachment: false,
    },
    {
      id: 4,
      sender: 'You',
      content: "Sure, I'll attach the updated files right now.",
      timestamp: '2:40 PM',
      isSent: true,
      isRead: false,
      hasAttachment: true,
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex flex-column py-3 px-2">
      <div className=" p-3 rounded shadow-sm mb-3">
       <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center flex-wrap gap-3">
  {/* Left Side: Title & Info */}
  <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3">
    <h2 className="mb-0 fw-semibold me-sm-3">Messages</h2>
    <span className="badge bg-success">
      Encrypted Chat <i className="fas fa-lock ms-1"></i>
    </span>
    <span className="text-muted small">
      <i className="fas fa-clock me-1"></i>Response ETA: 5 mins
    </span>
  </div>

  {/* Right Side: Buttons & Icon */}
  <div className="d-flex flex-wrap align-items-center gap-1">
    <button className="btn btn-primary btn-sm">
      <i className="fas fa-download me-2"></i>Download PDF
    </button>
    <button className="btn btn-outline-secondary btn-sm">
      <i className="fas fa-paperclip me-2"></i>Attach Documents
    </button>
    <div
      className="bg-primary  text-white rounded-circle d-flex align-items-center justify-content-center"
      style={{ width: '40px', height: '40px' }}
    >
      <i className="fas fa-user "></i>
    </div>
  </div>
</div>

    
        <div className="d-flex align-items-center mt-4 gap-3">
          <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
            <i className="fas fa-user"></i>
          </div>
          <div>
            <strong>John Smith</strong>
            <div className="text-success small">Online</div>
          </div>
        </div>
      </div>

      <div className="flex-grow-1 overflow-auto mb-3 px-2">
        {messages.map((msg) => (
          <div key={msg.id} className={`d-flex ${msg.isSent ? 'justify-content-end' : 'justify-content-start'} mb-2`}>
            {!msg.isSent && (
              <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '32px', height: '32px' }}>
                <i className="fas fa-user"></i>
              </div>
            )}
            <div className={`p-3 rounded ${msg.isSent ? 'bg-primary text-white' : 'bg-white border'}`} style={{ maxWidth: '70%' }}>
              <div className="small mb-1">{msg.content}</div>
              {msg.hasAttachment && (
                <div className="text-muted small"><i className="fas fa-paperclip me-1"></i>Attachment included</div>
              )}
              <div className="text-end small text-muted mt-1">
                {msg.timestamp} {msg.isSent && msg.isRead && (<i className="fas fa-check-double text-white ms-2"></i>)}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="d-flex justify-content-start mb-2">
            <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '32px', height: '32px' }}>
              <i className="fas fa-user"></i>
            </div>
            <div className="p-3 bg-white border rounded" style={{ maxWidth: '70%' }}>
              <div className="d-flex align-items-center gap-1">
                <div className="spinner-grow spinner-grow-sm text-muted"></div>
                <div className="spinner-grow spinner-grow-sm text-muted"></div>
                <div className="spinner-grow spinner-grow-sm text-muted"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white border-top p-3">
        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-outline-secondary">
            <i className="fas fa-paperclip"></i>
          </button>
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="btn btn-outline-secondary">
            <i className="fas fa-smile"></i>
          </button>
          <button className="btn btn-primary" onClick={handleSendMessage}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
        <div className="text-muted text-center small mt-2">
          <i className="fas fa-shield-alt text-success me-2"></i>Messages secured with AES-256 encryption
        </div>
      </div>
    </div>
  );
};

export default Messages;