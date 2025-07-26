import React from 'react';

const PersonalInfo = ({ data, setData, editing, onEdit, onSave, onCancel }) => {
  return (
    <div className="card h-100">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h2 className="h5 mb-0">
          <i className="fas fa-user text-primary me-2"></i>
          Personal Information
        </h2>
        {!editing && (
          <button onClick={onEdit} className="btn btn-sm btn-outline-primary">
            <i className="fas fa-edit me-1"></i>Edit
          </button>
        )}
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          {editing ? (
            <input
              type="text"
              className="form-control"
              value={data.name}
              onChange={(e) => setData({...data, name: e.target.value})}
            />
          ) : (
            <p className="form-control-plaintext">{data.name}</p>
          )}
        </div>
        
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          {editing ? (
            <input
              type="date"
              className="form-control"
              value={data.dateOfBirth}
              onChange={(e) => setData({...data, dateOfBirth: e.target.value})}
            />
          ) : (
            <p className="form-control-plaintext">{new Date(data.dateOfBirth).toLocaleDateString()}</p>
          )}
        </div>
        
        <div className="mb-3">
          <label className="form-label">Gender</label>
          {editing ? (
            <select
              className="form-select"
              value={data.gender}
              onChange={(e) => setData({...data, gender: e.target.value})}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <p className="form-control-plaintext">{data.gender}</p>
          )}
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

export default PersonalInfo;