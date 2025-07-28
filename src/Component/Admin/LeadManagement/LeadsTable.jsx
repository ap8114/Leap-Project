import React from 'react';

const LeadsTable = ({ leads, onEdit, getStatusColor }) => {
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h2 className="h5 mb-0">Recent Enquiries</h2>
        <div className="d-flex">
          <select className="form-select form-select-sm me-2">
            <option>All Statuses</option>
            <option>New</option>
            <option>Contacted</option>
            <option>In Progress</option>
            <option>Converted</option>
            <option>Dropped</option>
          </select>
          <button className="btn btn-sm btn-outline-secondary">
            <i className="fas fa-download me-1"></i>Export
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-hover mb-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact Method</th>
              <th>Source</th>
              <th>Type</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td className="fw-bold">{lead.name}</td>
                <td>
                  <i className={`fas ${lead.contactMethod === 'Phone' ? 'fa-phone' : 'fa-envelope'} me-2`}></i>
                  {lead.contactMethod}
                </td>
                <td>{lead.source}</td>
                <td>{lead.enquiryType}</td>
                <td>
                  <span className={`badge ${getStatusColor(lead.status)}`}>
                    {lead.status}
                  </span>
                </td>
                <td>{lead.date}</td>
                <td>
                  <div className="d-flex">
                    <button
                      onClick={() => onEdit(lead)}
                      className="btn btn-sm btn-link text-primary"
                      title="Edit Enquiry"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn btn-sm btn-link text-success" title="Assign to Client">
                      <i className="fas fa-user-plus"></i>
                    </button>
                    <button className="btn btn-sm btn-link text-danger" title="Delete Enquiry">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsTable;
