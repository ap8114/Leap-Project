import React from 'react';

const LeadFunnel = () => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title h5">Enquiry Funnel Report</h2>
        <div className="mt-4">
          <div className="d-flex align-items-centre mb-3">
            <div className="w-25">New</div>
            <div className="progress flex-grow-1 mx-3" style={{ height: '30px' }}>
              <div 
                className="progress-bar bg-primary" 
                role="progressbar" 
                style={{ width: '100%' }}
                aria-valuenow="100" 
                aria-valuemin="0" 
                aria-valuemax="100"
              >
                47 enquiries
              </div>
            </div>
            <div>100%</div>
          </div>
          <div className="d-flex align-items-centre mb-3">
            <div className="w-25">Contacted</div>
            <div className="progress flex-grow-1 mx-3" style={{ height: '30px' }}>
              <div 
                className="progress-bar bg-warning" 
                role="progressbar" 
                style={{ width: '85%' }}
                aria-valuenow="85" 
                aria-valuemin="0" 
                aria-valuemax="100"
              >
                40 enquiries
              </div>
            </div>
            <div>85%</div>
          </div>
          <div className="d-flex align-items-centre mb-3">
            <div className="w-25">In Progress</div>
            <div className="progress flex-grow-1 mx-3" style={{ height: '30px' }}>
              <div 
                className="progress-bar bg-info" 
                role="progressbar" 
                style={{ width: '60%' }}
                aria-valuenow="60" 
                aria-valuemin="0" 
                aria-valuemax="100"
              >
                28 enquiries
              </div>
            </div>
            <div>60%</div>
          </div>
          <div className="d-flex align-items-centre">
            <div className="w-25">Converted</div>
            <div className="progress flex-grow-1 mx-3" style={{ height: '30px' }}>
              <div 
                className="progress-bar bg-success" 
                role="progressbar" 
                style={{ width: '35%' }}
                aria-valuenow="35" 
                aria-valuemin="0" 
                aria-valuemax="100"
              >
                16 enquiries
              </div>
            </div>
            <div>35%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadFunnel;
