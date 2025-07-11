import React from "react";

const ExportModal = ({ onClose, onExport }) => {
  return (
    <div className="modal" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-bold">Export activities</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label fw-semibold">Select export format</label>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exportFormat" id="pdfFormat" defaultChecked />
                <label className="form-check-label" htmlFor="pdfFormat">
                  PDF
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exportFormat" id="csvFormat" />
                <label className="form-check-label" htmlFor="csvFormat">
                  CSV
                </label>
              </div>
            </div>
          </div>
          <div className="modal-footer border-0">
            <button 
              type="button" 
              className="btn btn-outline-secondary" 
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              type="button" 
              className="btn btn-primary" 
              onClick={() => {
                const selectedFormat = document.querySelector('input[name="exportFormat"]:checked').value;
                onExport(selectedFormat);
              }}
            >
              Export
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;