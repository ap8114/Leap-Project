import React from 'react';

const LeadStats = () => {
  return (
    <div className="row mt-1">
      <div className="col-md-3 mb-3">
        <div className="card bg-primary text-white">
          <div className="card-body">
            <h5 className="card-title">124</h5>
            <p className="card-text">Total Enquiries</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-3">
        <div className="card bg-success text-white">
          <div className="card-body">
            <h5 className="card-title">32</h5>
            <p className="card-text">Converted</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-3">
        <div className="card bg-warning text-white">
          <div className="card-body">
            <h5 className="card-title">45</h5>
            <p className="card-text">In Progress</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-3">
        <div className="card bg-info text-white">
          <div className="card-body">
            <h5 className="card-title">25.8%</h5>
            <p className="card-text">Conversion Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadStats;
