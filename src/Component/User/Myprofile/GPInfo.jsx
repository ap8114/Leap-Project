import React from 'react';

const GPInfo = ({ data, setData, editing, onEdit, onSave, onCancel }) => {
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-centre">
        <h2 className="h5 mb-0">
          <i className="fas fa-user-md text-primary me-2"></i>
          GP & Emergency Details
        </h2>
        {!editing && (
          <button onClick={onEdit} className="btn btn-sm btn-outline-primary">
            <i className="fas fa-edit me-1"></i>Edit
          </button>
        )}
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <h3 className="h6 mb-3">GP Information</h3>
            
            <div className="mb-3">
              <label className="form-label">Doctor Name</label>
              {editing ? (
                <input
                  type="text"
                  className="form-control"
                  value={data.doctorName}
                  onChange={(e) => setData({...data, doctorName: e.target.value})}
                />
              ) : (
                <p className="form-control-plaintext">{data.doctorName}</p>
              )}
            </div>
            
            <div className="mb-3">
              <label className="form-label">Practice</label>
              {editing ? (
                <input
                  type="text"
                  className="form-control"
                  value={data.practice}
                  onChange={(e) => setData({...data, practice: e.target.value})}
                />
              ) : (
                <p className="form-control-plaintext">{data.practice}</p>
              )}
            </div>
            
            <div className="mb-3">
              <label className="form-label">Telephone</label>
              {editing ? (
                <input
                  type="tel"
                  className="form-control"
                  value={data.phone}
                  onChange={(e) => setData({...data, phone: e.target.value})}
                />
              ) : (
                <p className="form-control-plaintext">{data.phone}</p>
              )}
            </div>
          </div>
          
          <div className="col-md-6">
            <h3 className="h6 mb-3">Emergency Contact</h3>
            
            <div className="mb-3">
              <label className="form-label">Contact Name</label>
              {editing ? (
                <input
                  type="text"
                  className="form-control"
                  value={data.emergencyContact}
                  onChange={(e) => setData({...data, emergencyContact: e.target.value})}
                />
              ) : (
                <p className="form-control-plaintext">{data.emergencyContact}</p>
              )}
            </div>
            
            <div className="mb-3">
              <label className="form-label">Telephone</label>
              {editing ? (
                <input
                  type="tel"
                  className="form-control"
                  value={data.emergencyPhone}
                  onChange={(e) => setData({...data, emergencyPhone: e.target.value})}
                />
              ) : (
                <p className="form-control-plaintext">{data.emergencyPhone}</p>
              )}
            </div>
            
            <div className="mb-3">
              <label className="form-label">Relationship</label>
              {editing ? (
                <input
                  type="text"
                  className="form-control"
                  value={data.relationship}
                  onChange={(e) => setData({...data, relationship: e.target.value})}
                />
              ) : (
                <p className="form-control-plaintext">{data.relationship}</p>
              )}
            </div>
          </div>
        </div>
        
        {editing && (
          <div className="d-flex gap-2">
            <button onClick={onSave} className="btn btn-primary">
              Save Changes
            </button>
            <button onClick={onCancel} className="btn btn-outline-secondary">
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GPInfo;
