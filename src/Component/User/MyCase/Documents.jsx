import React from 'react';

const Documents = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="h5 card-title mb-4">Uploaded Documents</h3>
        
        <div className="d-flex flex-column gap-3">
          {/* Document 1 */}
          <div className="d-flex justify-content-between align-items-center p-3 border rounded">
            <div className="d-flex align-items-center gap-3">
              <i className="fas fa-file-pdf text-danger fs-4"></i>
              <div>
                <p className="mb-0 fw-bold">Medical Records – Accident & Emergency</p>
                <p className="small text-muted mb-0">Uploaded 2 hours ago • 2.4 MB</p>
              </div>
            </div>
            <button className="btn btn-link text-primary">
              <i className="fas fa-download"></i>
            </button>
          </div>
          
          {/* Document 2 */}
          <div className="d-flex justify-content-between align-items-center p-3 border rounded">
            <div className="d-flex align-items-center gap-3">
              <i className="fas fa-file-pdf text-danger fs-4"></i>
              <div>
                <p className="mb-0 fw-bold">Police Report</p>
                <p className="small text-muted mb-0">Uploaded 1 day ago • 1.8 MB</p>
              </div>
            </div>
            <button className="btn btn-link text-primary">
              <i className="fas fa-download"></i>
            </button>
          </div>
          
          {/* Document 3 */}
          <div className="d-flex justify-content-between align-items-center p-3 border rounded">
            <div className="d-flex align-items-center gap-3">
              <i className="fas fa-file-image text-primary fs-4"></i>
              <div>
                <p className="mb-0 fw-bold">Photographs of Accident Scene</p>
                <p className="small text-muted mb-0">Uploaded 3 days ago • 5.2 MB</p>
              </div>
            </div>
            <button className="btn btn-link text-primary">
              <i className="fas fa-download"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
