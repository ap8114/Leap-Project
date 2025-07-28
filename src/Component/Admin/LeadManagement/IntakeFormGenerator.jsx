// IntakeFormGenerator.jsx
import React from 'react';

const IntakeFormGenerator = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title h5">Custom Intake Form Generator</h3>
        <div className="mt-3">
          <div className="border border-2 border-dashed rounded p-4 text-center mb-3">
            <i className="fas fa-plus text-muted fs-4 mb-2"></i>
            <p className="small text-muted">Drag and drop form fields here</p>
          </div>
          <div className="row g-2 mb-3">
            <div className="col-6">
              <button className="btn btn-outline-secondary w-100">
                <i className="fas fa-font me-1"></i>Text Field
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-outline-secondary w-100">
                <i className="fas fa-list me-1"></i>Dropdown
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-outline-secondary w-100">
                <i className="fas fa-check-square me-1"></i>Checkbox
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-outline-secondary w-100">
                <i className="fas fa-calendar me-1"></i>Date
              </button>
            </div>
          </div>
          <button className="btn btn-primary w-100">
            Save Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntakeFormGenerator;