import React from 'react';

const CaseSummary = () => {
  return (
    <div className="row g-4">
      <div className="col-md-6">
        <div className="card h-100">
          <div className="card-body">
            <h3 className="h5 card-title mb-3">Case Information</h3>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Case Number:</span>
              <span className="fw-bold">LC-2024-001234</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Case Type:</span>
              <span className="fw-bold">Personal Injury</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Date Filed:</span>
              <span className="fw-bold">March 15, 2024</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="text-muted">Status:</span>
              <span className="badge bg-warning text-dark">In Progress</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card h-100">
          <div className="card-body">
            <h3 className="h5 card-title mb-3">Key Dates</h3>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Next Hearing:</span>
              <span className="fw-bold">August 12, 2024</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Discovery Deadline:</span>
              <span className="fw-bold">September 30, 2024</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="text-muted">Trial Date:</span>
              <span className="fw-bold">November 18, 2024</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h3 className="h5 card-title mb-3">Case Description</h3>
            <p className="card-text">
              This personal injury case involves a motor vehicle accident that occurred on January 8, 2024, at the intersection of Main Street and Oak Avenue. The plaintiff sustained injuries including whiplash, back strain, and emotional distress. We are seeking compensation for medical expenses, lost wages, pain and suffering, and property damage to the vehicle.
            </p>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h3 className="h5 card-title mb-3">Recent Activity</h3>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="bg-primary bg-opacity-10 rounded-circle p-2">
                    <i className="fas fa-file-upload text-primary"></i>
                  </div>
                </div>
                <div>
                  <p className="mb-0 small">Medical records uploaded</p>
                  <p className="small text-muted">2 hours ago</p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="bg-success bg-opacity-10 rounded-circle p-2">
                    <i className="fas fa-comment text-success"></i>
                  </div>
                </div>
                <div>
                  <p className="mb-0 small">Message from solicitor</p>
                  <p className="small text-muted">1 day ago</p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="bg-purple bg-opacity-10 rounded-circle p-2">
                    <i className="fas fa-calendar text-purple"></i>
                  </div>
                </div>
                <div>
                  <p className="mb-0 small">Hearing scheduled</p>
                  <p className="small text-muted">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseSummary;