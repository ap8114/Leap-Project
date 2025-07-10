import React from 'react';

const ContentArea = ({ activeNavItem, activeTab }) => {
  return (
    <div className="flex-grow-1 p-5 d-flex flex-column">
      {activeNavItem === 'Internal messages' ? (
        <div className="flex-grow-1 d-flex flex-column">
          <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <button className="nav-link active text-primary border-primary">My threads</button>
            </li>
            <li className="nav-item">
              <button className="nav-link text-secondary">Matter threads</button>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="position-relative flex-grow-1">
              <i className="fas fa-search position-absolute top-50 start-3 translate-middle-y text-secondary"></i>
              <input
                type="text"
                placeholder="Filter by subject or body"
                className="form-control ps-5"
              />
            </div>
          </div>
          <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
            <div className="text-center">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20minimalist%20illustration%20of%20a%20chat%20or%20message%20bubble%20with%20a%20plus%20sign%2C%20using%20blue%20and%20white%20colors%20on%20a%20clean%20background%2C%20professional%20business%20style&width=200&height=200&seq=message-empty&orientation=squarish"
                alt="No messages"
                className="img-fluid mb-4"
                style={{ height: '128px' }}
              />
              <h5 className="fw-semibold mb-2">No internal messages found.</h5>
              <p className="text-secondary mb-4">Keep track of every conversation.</p>
              <button className="btn btn-primary">New internal message</button>
            </div>
          </div>
        </div>
      ) : activeNavItem === 'Logs' ? (
        <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
          <div className="text-center" style={{ maxWidth: '500px' }}>
            <div className="mb-5">
              <div className="mx-auto mb-4 rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center" style={{ width: '128px', height: '128px' }}>
                <div className="position-relative">
                  <i className="fas fa-list text-primary fs-3"></i>
                  <div className="position-absolute top-0 start-100 translate-middle badge bg-primary rounded-circle">
                    <i className="fas fa-plus text-white" style={{ fontSize: '0.5rem' }}></i>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="fw-semibold mb-3">No {activeTab.toLowerCase()} logs found.</h5>
            <p className="text-secondary mb-4">Try adjusting your filters.</p>
            <div className="d-flex gap-3 justify-content-center">
              <button className="btn btn-outline-secondary">Clear filters</button>
              <button className="btn btn-outline-secondary">Edit filters</button>
            </div>
          </div>
        </div>
      ) : activeNavItem === 'Client portals' ? (
        <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
          <div className="text-center" style={{ maxWidth: '500px' }}>
            <div className="mb-5">
              <img
                src="https://readdy.ai/api/search-image?query=Simple%20clean%20illustration%20of%20a%20computer%20screen%20showing%20a%20document%20portal%20interface%20with%20a%20folder%20icon%20and%20file%20documents%20floating%20around%20it%20in%20a%20minimal%20flat%20design%20style%20with%20blue%20and%20gray%20colors%20on%20a%20white%20background&width=300&height=240&seq=portal-empty-state&orientation=landscape"
                alt="No client portals found"
                className="img-fluid mb-4"
                style={{ height: '160px' }}
              />
            </div>
            <h5 className="fw-semibold mb-3">No client portals found.</h5>
            <p className="text-secondary mb-4">
              Share a message, document, bill or calendar event with your clients on a matter via Clio for Clients.
            </p>
            <button className="btn btn-primary px-4 py-2">New client portal</button>
          </div>
        </div>
      ) : (
        <div className="text-center mx-auto" style={{ maxWidth: '500px' }}>
          <div className="mb-5">
            <div className="mx-auto mb-4 rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center" style={{ width: '128px', height: '128px' }}>
              <div className="position-relative">
                <i className="fas fa-comment-dots text-primary fs-3"></i>
                <div className="position-absolute top-0 start-100 translate-middle badge bg-primary rounded-circle">
                  <i className="fas fa-plus text-white" style={{ fontSize: '0.5rem' }}></i>
                </div>
              </div>
            </div>
          </div>
          <h5 className="fw-semibold mb-3">Get quick responses when you need them.</h5>
          <p className="text-secondary mb-4">
            Use text messages to send clients updates, event notifications, and automated reminders. Included in Essentials plan and up.
          </p>
          <button className="btn btn-primary px-4 py-2">Upgrade to turn on text messaging</button>
        </div>
      )}
    </div>
  );
};

export default ContentArea;