import React from 'react';

const ContactInfo = ({ data, setData, editing, onEdit, onSave, onCancel }) => {
  return (
    <div className="card h-100">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h2 className="h5 mb-0">
          <i className="fas fa-address-book text-primary me-2"></i>
          Contact Information
        </h2>
        {!editing && (
          <button onClick={onEdit} className="btn btn-sm btn-outline-primary">
            <i className="fas fa-edit me-1"></i>Edit
          </button>
        )}
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label d-flex align-items-center">
            <i className="fas fa-map-marker-alt text-muted me-2"></i>
            Address
          </label>
          {editing ? (
            <textarea
              className="form-control"
              rows={2}
              value={data.address}
              onChange={(e) => setData({...data, address: e.target.value})}
            />
          ) : (
            <p className="form-control-plaintext">{data.address}</p>
          )}
        </div>
        
        <div className="mb-3">
          <label className="form-label d-flex align-items-center">
            <i className="fas fa-phone text-muted me-2"></i>
            Phone
          </label>
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
        
        <div className="mb-3">
          <label className="form-label d-flex align-items-center">
            <i className="fas fa-envelope text-muted me-2"></i>
            Email
          </label>
          {editing ? (
            <input
              type="email"
              className="form-control"
              value={data.email}
              onChange={(e) => setData({...data, email: e.target.value})}
            />
          ) : (
            <p className="form-control-plaintext">{data.email}</p>
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

export default ContactInfo;