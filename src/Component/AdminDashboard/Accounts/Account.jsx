import React, { useState } from 'react';
import NewAccountModal from './NewAccountModal';
import ExportModal from './ExportModal';
import { Modal } from 'react-bootstrap';



const Account = () => {
  const [showColumns, setShowColumns] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showNewAccountModal, setShowNewAccountModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);

  const [columns, setColumns] = useState({
    accountName: true,
    accountType: true,
    actions: true,
    currency: true,
    balance: true,
  });
  const [filterOption, setFilterOption] = useState('');

  const handleColumnChange = (col) => {
    setColumns({ ...columns, [col]: !columns[col] });
  };

  return (
    <div className="container-fluid bg-light min-vh-100 py-3">
      {/* HEADER */}
      <div className="bg-white border p-3 mb-3 d-flex justify-content-between align-items-center">
        <h2 className="mb-0">Bank Accounts</h2>
        <div className="d-flex gap-2">
          <button
            className="btn btn-outline-secondary"
            onClick={() => setShowExportModal(true)}
          >
            Export transactions
          </button>
          <button
            className="btn btn-primary text-white"
            onClick={() => setShowNewAccountModal(true)}
          >
            New account
          </button>
        </div>
      </div>

      {/* FILTERS & COLUMNS */}
      <div className="bg-white border p-3 mb-3 d-flex justify-content-end gap-2">
        {/* Columns Dropdown */}
        <div className="position-relative">
          <button
            onClick={() => setShowColumns(!showColumns)}
            className="btn btn-outline-secondary d-flex align-items-center"
          >
            Columns <i className="bi bi-chevron-down ms-2"></i>
          </button>
          {showColumns && (
            <div className="position-absolute end-0 mt-2 p-3 bg-white border rounded shadow" style={{ width: '240px', zIndex: 999 }}>
              <strong className="d-block mb-2">Visible columns</strong>
              {Object.entries(columns).map(([key, value]) => (
                <div className="form-check" key={key}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={value}
                    onChange={() => handleColumnChange(key)}
                    id={key}
                  />
                  <label className="form-check-label text-capitalize" htmlFor={key}>
                    {key.replace(/([A-Z])/g, ' $1')}
                  </label>
                </div>
              ))}
              <div className="d-flex justify-content-between mt-3">
                <button className="btn btn-primary btn-sm">Update columns</button>
                <button className="btn btn-outline-secondary btn-sm" onClick={() => setShowColumns(false)}>Cancel</button>
              </div>
            </div>
          )}
        </div>

        {/* Filters Dropdown */}
        <div className="position-relative">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="btn btn-outline-secondary d-flex align-items-center"
          >
            Filters <i className="bi bi-chevron-down ms-2"></i>
          </button>
          {showFilters && (
            <div className="position-absolute end-0 mt-2 p-3 bg-white border rounded shadow" style={{ width: '260px', zIndex: 999 }}>
              <label className="form-label fw-semibold mb-2">Show accounts with empty balance</label>
              <select
                className="form-select"
                value={filterOption}
                onChange={(e) => setFilterOption(e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <div className="d-flex justify-content-between mt-3">
                <button className="btn btn-primary btn-sm">Apply filters</button>
                <button className="btn btn-outline-secondary btn-sm" onClick={() => setFilterOption('')}>
                  Clear filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* TABLE HEADER */}
      <div className="bg-white border p-3 mb-0">
        <div className="row fw-bold text-muted text-uppercase">
          {columns.accountName && <div className="col">Account name</div>}
          {columns.accountType && <div className="col">Account type</div>}
          {columns.actions && <div className="col">Actions</div>}
          {columns.currency && <div className="col">Currency</div>}
          {columns.balance && <div className="col text-end">Balance</div>}
        </div>
      </div>

      {/* EMPTY STATE */}
      <div className="bg-white border p-5 text-center">
        <div className="d-flex justify-content-center align-items-center mb-4 gap-3">
          <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 64, height: 64 }}>
            <i className="bi bi-check2 fs-2"></i>
          </div>
          <div className="d-flex gap-1">
            <div className="rounded-circle bg-primary" style={{ width: 10, height: 10 }}></div>
            <div className="rounded-circle bg-info" style={{ width: 10, height: 10 }}></div>
            <div className="rounded-circle bg-secondary" style={{ width: 10, height: 10 }}></div>
          </div>
          <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 64, height: 64 }}>
            <i className="bi bi-bank fs-2"></i>
          </div>
        </div>
        <h4 className="fw-bold">What are accounts in Clio Manage?</h4>
        <p className="text-muted">
          Accounts in Clio Manage are designed to mirror your real-life bank accounts at your financial institution for collecting bill payments and retaining trust funds.
        </p>
        <a href="#" className="text-primary d-block mb-3">Learn more about accounts</a>
        <button
          className="btn btn-primary"
          onClick={() => setShowNewAccountModal(true)}
        >
          Create new account
        </button>
      </div>

      {/* FOOTER */}
      <div className="bg-white border-top py-3 px-3 d-flex justify-content-between align-items-center">
        <div>
          <button className="btn btn-light btn-sm me-2">
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="btn btn-light btn-sm">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
        <span className="text-muted">No results found</span>
      </div>

      {/* -------- MODAL TRIGGERS (Put actual modal components in separate files) -------- */}
    {/* ✅ Modal Mount Area */}
      {showNewAccountModal && (
        <NewAccountModal show={showNewAccountModal} onHide={() => setShowNewAccountModal(false)} />
      )}
      {showExportModal && (
        <ExportModal show={showExportModal} onHide={() => setShowExportModal(false)} />
      )}
    </div>
  );
};

export default Account;
