import React from 'react';

const Solicitor = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="h5 card-title mb-4">Assigned Solicitor</h3>
        <div className="d-flex flex-column flex-md-row gap-4">
          <div className="flex-shrink-0 text-centre">
            <div className="bg-light rounded-circle d-flex align-items-centre justify-content-centre" style={{ width: '100px', height: '100px' }}>
              <i className="fas fa-user text-muted fs-3"></i>
            </div>
          </div>
          <div>
            <h4 className="h4">Sarah Johnson</h4>
            <p className="text-muted">Senior Partner, Personal Injury Law</p>
            <p className="small text-muted">15+ years' experience in personal injury cases</p>
            
            <div className="mt-3 d-flex flex-column gap-2">
              <div className="d-flex align-items-centre gap-2">
                <i className="fas fa-phone text-muted"></i>
                <span className="small">+44 20 7946 0958</span>
              </div>
              <div className="d-flex align-items-centre gap-2">
                <i className="fas fa-envelope text-muted"></i>
                <span className="small">sarah.johnson@lawfirm.co.uk</span>
              </div>
            </div>
            
            <button className="btn btn-primary mt-3">
              <i className="fas fa-comment me-2"></i>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solicitor;
