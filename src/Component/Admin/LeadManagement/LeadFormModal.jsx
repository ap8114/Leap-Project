import React from 'react';

const LeadFormModal = ({ show, onHide, isEditing, formData, onInputChange, onSubmit }) => {
  return (
    <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex="-1" style={{ backgroundColor: show ? 'rgba(0,0,0,0.5)' : '' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{isEditing ? 'Edit Enquiry' : 'Add New Enquiry'}</h5>
            <button type="button" className="btn-close" onClick={onHide}></button>
          </div>
          <form onSubmit={onSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Enquirer Name</label>
                <input
                  type="text"
                  name="leadName"
                  value={formData.leadName}
                  onChange={onInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Preferred Contact Method</label>
                <select
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={onInputChange}
                  className="form-select"
                >
                  <option value="Phone">Phone</option>
                  <option value="Email">Email</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Source of Enquiry</label>
                <div>
                  <div className="form-check">
                    <input
                      type="radio"
                      name="source"
                      value="Referral"
                      checked={formData.source === 'Referral'}
                      onChange={onInputChange}
                      className="form-check-input"
                      id="sourceReferral"
                    />
                    <label className="form-check-label" htmlFor="sourceReferral">Referral</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      name="source"
                      value="Website"
                      checked={formData.source === 'Website'}
                      onChange={onInputChange}
                      className="form-check-input"
                      id="sourceWebsite"
                    />
                    <label className="form-check-label" htmlFor="sourceWebsite">Website</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      name="source"
                      value="Walk-in"
                      checked={formData.source === 'Walk-in'}
                      onChange={onInputChange}
                      className="form-check-input"
                      id="sourceWalkin"
                    />
                    <label className="form-check-label" htmlFor="sourceWalkin">Walk-in</label>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Type of Enquiry</label>
                <select
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={onInputChange}
                  className="form-select"
                >
                  <option value="Injury">Injury</option>
                  <option value="Claim">Claim</option>
                  <option value="Advice">Advice</option>
                  <option value="Consultation">Consultation</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Initial Notes</label>
                <textarea
                  name="initialNotes"
                  value={formData.initialNotes}
                  onChange={onInputChange}
                  rows="4"
                  className="form-control"
                  placeholder="Enter any initial notes about the enquiry..."
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Enquiry Status</label>
                <select
                  name="leadStatus"
                  value={formData.leadStatus}
                  onChange={onInputChange}
                  className="form-select"
                >
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Converted">Converted</option>
                  <option value="Dropped">Dropped</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={onHide}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Save Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeadFormModal;
