import React from 'react';

const PasswordChange = ({ formData, setFormData }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="h5 mb-0">
          <i className="fas fa-lock text-primary me-2"></i>
          Change Password
        </h2>
      </div>
      <div className="card-body">
        <form className="max-w-md">
          <div className="mb-3">
            <label className="form-label">Current Password</label>
            <input
              type="password"
              className="form-control"
              value={formData.current}
              onChange={(e) => setFormData({ ...formData, current: e.target.value })}
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">New Password</label>
            <input
              type="password"
              className="form-control"
              value={formData.new}
              onChange={(e) => setFormData({ ...formData, new: e.target.value })}
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Confirm New Password</label>
            <input
              type="password"
              className="form-control"
              value={formData.confirm}
              onChange={(e) => setFormData({ ...formData, confirm: e.target.value })}
            />
          </div>
          
          <button type="button" className="btn btn-primary">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordChange;
