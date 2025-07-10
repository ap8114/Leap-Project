import React from 'react';

const FirmFeed = () => {
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h2 className="h6 mb-0">Description</h2>
        <button className="btn btn-link text-muted p-0 d-flex align-items-center gap-1">
          <span>Filter</span>
          <i className="fas fa-chevron-down small"></i>
        </button>
      </div>
      <div className="list-group list-group-flush">
        <div className="list-group-item">
          <div className="d-flex gap-3">
            <div className="flex-shrink-0 rounded bg-primary bg-opacity-10 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
              <span className="small fw-bold text-primary">AP</span>
            </div>
            <div className="flex-grow-1">
              <div className="d-flex flex-wrap align-items-center gap-1">
                <a href="#" className="text-primary fw-medium">john smith</a>
                <span className="text-muted">completed a task,</span>
                <a href="#" className="text-primary">'jhf',</a>
                <span className="text-muted">about 21 hours ago.</span>
              </div>
              <div className="text-end small text-muted mt-1">
                07/09/2025 3:53 AM
              </div>
            </div>
          </div>
        </div>
        <div className="list-group-item">
          <div className="d-flex gap-3">
            <div className="flex-shrink-0 rounded bg-primary bg-opacity-10 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
              <span className="small fw-bold text-primary">AP</span>
            </div>
            <div className="flex-grow-1">
              <div className="d-flex flex-wrap align-items-center gap-1">
                <a href="#" className="text-primary fw-medium">john smith</a>
                <span className="text-muted">created a task,</span>
                <a href="#" className="text-primary">'jhf',</a>
                <span className="text-muted">about 21 hours ago.</span>
              </div>
              <div className="text-end small text-muted mt-1">
                07/09/2025 3:49 AM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirmFeed;