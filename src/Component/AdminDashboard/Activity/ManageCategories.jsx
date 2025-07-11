import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const NewCategoryModal = ({ show, onClose }) => {
  const [categoryType, setCategoryType] = useState("time");
  return (
    show && (
      <div
        className="modal-backdrop"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.15)',
          zIndex: 1050,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}
      >
        <div
          className="modal-content"
          style={{
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            width: '100%',
            maxWidth: '700px',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '1.5rem',
            position: 'relative'
          }}
        >
          <button
            className="close-button"
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
          >
            ×
          </button>

          <h3 style={{
            fontWeight: 'bold',
            marginBottom: '1rem',
            fontSize: 'clamp(1.25rem, 4vw, 1.75rem)' // Responsive font size
          }}>
            New activity category
          </h3>

          {/* Category type */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{
              fontWeight: '600',
              marginBottom: '0.5rem',
              fontSize: '1rem'
            }}>
              Category type
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="categoryType"
                id="cat-time"
                checked={categoryType === "time"}
                onChange={() => setCategoryType("time")}
              />
              <label className="form-check-label" htmlFor="cat-time">
                Time entry category
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="categoryType"
                id="cat-expense"
                checked={categoryType === "expense"}
                onChange={() => setCategoryType("expense")}
              />
              <label className="form-check-label" htmlFor="cat-expense">
                Expense category
              </label>
            </div>
          </div>

          {/* Name */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
              Name <span style={{ color: 'red' }}>*</span>
            </div>
            <input className="form-control" />
          </div>

          {/* Dynamic fields based on category type */}
          {categoryType === "time" ? (
            <>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                  Billing method
                </div>
                <select className="form-select">
                  <option>User default rate</option>
                </select>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                  Permission groups
                </div>
                <input
                  className="form-control"
                  value="Everyone"
                  readOnly
                />
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="co-counsel" />
                <label className="form-check-label" htmlFor="co-counsel">
                  Visible to co-counsel
                </label>
              </div>
            </>
          ) : (
            <>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                  Rate
                </div>
                <div className="input-group">
                  <span className="input-group-text">$</span>
                  <input className="form-control" value="0.00" readOnly />
                </div>
              </div>
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                    Permission groups
                  </div>
                  <input
                    className="form-control"
                    value="Everyone"
                    readOnly
                  />
                </div>
                <div className="col-12 col-md-6">
                  <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                    Tax
                  </div>
                  <select className="form-select">
                    <option>(Default) Use tax applied to invoice</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {/* Footer buttons */}
          <div className="d-flex flex-wrap gap-2 mt-3">
            <button
              className="btn btn-custom fw-semibold flex-grow-1"
              style={{ minWidth: '120px' }}
            >
              Save category
            </button>
            <button
              className="btn btn-outline-secondary fw-semibold flex-grow-1"
              style={{ minWidth: '120px' }}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

const ManageCategories = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState("Time");
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{
      background: "#f7fafd",
      minHeight: "100vh",
      paddingBottom: '2rem'
    }}>
      <NewCategoryModal show={showModal} onClose={() => setShowModal(false)} />

      {/* Back Button */}
      <div className="p-3">
        <button
          className="btn btn-light fw-semibold d-flex align-items-center"
          style={{
            background: "#eaf2fd",
            color: "#1976d2",
            fontWeight: 600,
            fontSize: 'clamp(1rem, 4vw, 1.25rem)',
            border: "none",
            borderRadius: 10,
            padding: "0.5rem 1rem",
          }}
          onClick={onBack}
        >
          <BsChevronLeft className="me-2" style={{ fontSize: '1.25rem' }} />
          Back to activities
        </button>
      </div>

      {/* Tabs and Actions */}
      <div className="container-fluid px-3 px-md-4">
        <div
          className="bg-white rounded-3 p-3 mb-3"
          style={{
            border: "1px solid #e5e7eb",
            overflow: 'hidden'
          }}
        >
          <div className="d-flex flex-column flex-md-row align-items-stretch align-items-md-center gap-3">
            {/* Tabs */}
            <div className="d-flex flex-grow" >
              <button
                className={`btn fw-semibold px-3 py-2 ${activeTab === "Time" ? "active-tab bg-primary bg-opacity-10 text-primary border-primary" : ""}`}
                onClick={() => setActiveTab("Time")}
              >
                Time entry
              </button>
              <button
                className={`btn fw-semibold px-3${activeTab === "Expense" ? "active-tab bg-primary bg-opacity-10 text-primary border-primary" : ""}`}

                onClick={() => setActiveTab("Expense")}
              >
                Expense
              </button>
            </div>

            {/* Search and New Category button */}
            <div className="d-flex flex-column flex-md-row gap-2 align-items-center justify-content-center">
              <input
                type="text"
                className="form-control mt-4"
                placeholder="Filter by keyword"
              />
              <button
                className="btn btn-custom fw-semibold text-nowrap p-2"
                onClick={() => setShowModal(true)}
              >
                New category
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="container-fluid px-3 px-md-4">
        <div
          className="bg-white rounded-3 border overflow-auto"
          style={{
            border: "1px solid #e5e7eb",
            minHeight: '300px'
          }}
        >
          <div style={{ minWidth: '800px' }}>
            <table className="table mb-0 w-100">
              <thead>
                <tr className="table-light align-middle">
                  <th style={{ minWidth: '100px' }}>Actions</th>
                  <th style={{ minWidth: '200px' }}>Activity category</th>
                  <th style={{ minWidth: '150px' }}>Permission groups</th>
                  <th style={{ minWidth: '100px' }}>Co-counsel</th>
                  <th style={{ minWidth: '100px' }}>Rate ($)</th>
                  <th style={{ minWidth: '150px' }}>Hourly or flat fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6} style={{ height: '300px', textAlign: "center", verticalAlign: "middle" }}>
                    <span className="fw-bold" style={{ color: "#222", fontSize: 'clamp(1rem, 4vw, 1.5rem)' }}>
                      No records match your filters.
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container-fluid px-3 px-md-4 pt-3">
        <div className="d-flex align-items-center flex-wrap gap-2">
          <button className="btn btn-light btn-sm border d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
            <BsChevronLeft />
          </button>
          <button className="btn btn-light btn-sm border d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
            <BsChevronRight />
          </button>
          <span style={{ fontSize: 'clamp(0.875rem, 3vw, 1rem)', color: "#222" }}>
            No results found
          </span>
        </div>
      </div>
    </div>
  );
};

export default ManageCategories;