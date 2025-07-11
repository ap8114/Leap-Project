import React, { useState, useRef, useEffect } from "react";
import {
  BsCalendar,
  BsFilter,
  BsColumns,
  BsPlus,
  BsChevronDown,
  BsDownload,
  BsChevronLeft,
  BsChevronRight,
  BsClock,
  BsCurrencyDollar,
  BsChevronRight as BsPlay,
} from "react-icons/bs";
import ManageCategories from "./ManageCategories";
import NewTimeEntryModal from "./NewTimeEntryModal";
import NewExpenseModals from "./NewExpenseModals";
import ExportModal from "./ExportModal";


const columnsList = [
  "Actions",
  "Type",
  "Qty",
  "Description",
  "Attachments",
  "Matter",
  "Rate ($)",
  "Non-billable ($)",
  "Billable ($)",
  "Date",
  "User",
  "Invoice status",
  "Expense Category",
  "Notes",
];

const defaultVisible = [
  "Actions",
  "Type",
  "Qty",
  "Description",
  "Attachments",
  "Matter",
  "Rate ($)",
  "Non-billable ($)",
  "Billable ($)",
  "Date",
  "User",
  "Invoice status",
];

const timeRows = [
  {
    id: 1,
    type: "Time",
    qty: "0.01h",
    description: "—",
    attachments: "—",
    matter: "—",
    rate: "—",
    nonBillable: "—",
    billable: "—",
    date: "07/10/2025",
    user: "john smith",
    invoiceStatus: "Unbilled",
    time: "00:00:03",
  },
  {
    id: 2,
    type: "Time",
    qty: "0.01h",
    description: "—",
    attachments: "—",
    matter: "—",
    rate: "—",
    nonBillable: "—",
    billable: "—",
    date: "07/10/2025",
    user: "john smith",
    invoiceStatus: "Unbilled",
    time: "00:00:05",
  },
];

const ActivitiesTable = () => {
    const [date, setDate] = useState("2025-07-10");
       const dateRef = useRef(null);
  const [showColumns, setShowColumns] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState(defaultVisible);
  const [activeTab, setActiveTab] = useState("All");
  const [showManageCategories, setShowManageCategories] = useState(false);
  const [showNewTimeEntryModal, setShowNewTimeEntryModal] = useState(false);
  const [showNewExpenseModals, setShowNewExpenseModals] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);

  // For closing dropdowns on outside click
  const columnsRef = useRef();
  const filtersRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (columnsRef.current && !columnsRef.current.contains(e.target)) {
        setShowColumns(false);
      }
      if (filtersRef.current && !filtersRef.current.contains(e.target)) {
        setShowFilters(false);
      }
    };
    if (showColumns || showFilters) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showColumns, showFilters]);

  const toggleColumn = (col) => {
    setVisibleColumns((prev) =>
      prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col]
    );
  };
  const handleExport = (format) => {
    console.log(`Exporting as ${format}`);
    // Add your export logic here
    setShowExportModal(false);
  };

  if (showManageCategories) {
    return <ManageCategories onBack={() => setShowManageCategories(false)} />;
  }

  // Table rows for each tab
  const renderRows = () => {
    if (activeTab === "Time") {
      return timeRows.map((row) => (
        <tr key={row.id}>
          {visibleColumns.includes("Actions") && (
            <>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <div className="btn-group">
                  <td>
                    <div className="btn-group">
                      <button className="btn btn-light btn-sm fw-semibold">
                        Edit
                      </button>
                      <button
                        className="btn btn-light btn-sm dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <button className="dropdown-item">Edit</button>
                        </li>
                        <li>
                          <button className="dropdown-item">Duplicate</button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button className="dropdown-item text-danger">
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                  {/* <button className="btn btn-light btn-sm dropdown-toggle dropdown-toggle-split"></button> */}
                </div>
              </td>
            </>
          )}
          {visibleColumns.includes("Type") && (
            <td>
              <BsPlay className="me-1" />{" "}
              <span style={{ color: "#1976d2" }}>{row.time}</span>
            </td>
          )}
          {visibleColumns.includes("Qty") && <td>{row.qty}</td>}
          {visibleColumns.includes("Description") && <td>{row.description}</td>}
          {visibleColumns.includes("Attachments") && <td>{row.attachments}</td>}
          {visibleColumns.includes("Matter") && <td>{row.matter}</td>}
          {visibleColumns.includes("Rate ($)") && <td>{row.rate}</td>}
          {visibleColumns.includes("Non-billable ($)") && (
            <td>{row.nonBillable}</td>
          )}
          {visibleColumns.includes("Billable ($)") && <td>{row.billable}</td>}
          {visibleColumns.includes("Date") && <td>{row.date}</td>}
          {visibleColumns.includes("User") && (
            <td>
              <a
                href="#"
                style={{ color: "#1976d2", textDecoration: "underline" }}
              >
                {row.user}
              </a>
            </td>
          )}
          {visibleColumns.includes("Invoice status") && (
            <td>
              <span
                className="badge bg-light text-dark border px-3 py-1"
                style={{ fontWeight: 500, fontSize: 14 }}
              >
                {row.invoiceStatus}
              </span>
            </td>
          )}
          {visibleColumns.includes("Expense Category") && <td></td>}
          {visibleColumns.includes("Notes") && <td></td>}
        </tr>
      ));
    }
    if (activeTab === "All") {
      return timeRows.map((row) => (
        <tr key={row.id}>
          {visibleColumns.includes("Actions") && (
            <>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <div className="btn-group">
                  <button className="btn btn-light btn-sm fw-semibold">
                    Edit
                  </button>
                  <button
                    className="btn btn-light btn-sm dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item">Edit</button>
                    </li>
                    <li>
                      <button className="dropdown-item">Duplicate</button>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button className="dropdown-item text-danger">
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </>
          )}
          {visibleColumns.includes("Type") && (
            <td>
              <BsPlay className="me-1" />{" "}
              <span style={{ color: "#1976d2" }}>{row.time}</span>
            </td>
          )}
          {visibleColumns.includes("Qty") && <td>{row.qty}</td>}
          {visibleColumns.includes("Description") && <td>{row.description}</td>}
          {visibleColumns.includes("Attachments") && <td>{row.attachments}</td>}
          {visibleColumns.includes("Matter") && <td>{row.matter}</td>}
          {visibleColumns.includes("Rate ($)") && <td>{row.rate}</td>}
          {visibleColumns.includes("Non-billable ($)") && (
            <td>{row.nonBillable}</td>
          )}
          {visibleColumns.includes("Billable ($)") && <td>{row.billable}</td>}
          {visibleColumns.includes("Date") && <td>{row.date}</td>}
          {visibleColumns.includes("User") && (
            <td>
              <a
                href="#"
                style={{ color: "#1976d2", textDecoration: "underline" }}
              >
                {row.user}
              </a>
            </td>
          )}
          {visibleColumns.includes("Invoice status") && (
            <td>
              <span
                className="badge bg-light text-dark border px-3 py-1"
                style={{ fontWeight: 500, fontSize: 14 }}
              >
                {row.invoiceStatus}
              </span>
            </td>
          )}
          {visibleColumns.includes("Expense Category") && <td></td>}
          {visibleColumns.includes("Notes") && <td></td>}
        </tr>
      ));
    }
    // Expense tab: show empty state
    return (
      <tr>
        <td
          colSpan={visibleColumns.length + 1}
          style={{
            height: 120,
            background: "#fff",
            position: "relative",
            padding: 0,
          }}
        >
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: 180 }}
          >
            <div style={{ position: "relative", marginBottom: 12 }}>
              <svg width="120" height="80" viewBox="0 0 90 60" fill="none">
                <circle cx="50" cy="30" r="24" fill="#e6f0fa" />
                <circle cx="60" cy="34" r="18" fill="#f2f6fa" />
                <circle cx="50" cy="30" r="18" fill="#fff" />
                <path
                  d="M50 18a12 12 0 1 1 0 24 12 12 0 0 1 0-24zm0 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm.75 4.5v6.25l5.25 5.25-1.5 1.5-6-6V24.5h2.25z"
                  fill="#1976d2"
                />
              </svg>
              <span
                style={{
                  position: "absolute",
                  right: 10,
                  bottom: 6,
                  background: "#1976d2",
                  color: "#fff",
                  borderRadius: "50%",
                  width: 28,
                  height: 28,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  border: "2px solid #fff",
                }}
              >
                <BsPlus />
              </span>
            </div>
            <div>
              <h5
                className="fw-bold mb-1"
                style={{
                  color: "#222",
                  background: "#fff",
                  display: "inline-block",
                  padding: "0 6px",
                }}
              >
                No time or expense entries found.
              </h5>
            </div>
            <div className="text-muted mb-3" style={{ fontSize: 16 }}>
              Bill for every minute by tracking all of your time and expenses.
            </div>
            <div className="d-flex justify-content-center gap-2 flex-wrap">
              <button
                className="btn btn-custom btn-sm fw-semibold"
                onClick={() => setShowNewTimeEntryModal(true)}
              >
                {" "}
                <BsPlus className="me-1" />
                New time entry
              </button>

              <button
                className="btn btn-custom btn-sm fw-semibold"
                onClick={() => setShowNewExpenseModals(true)}
              >
                {" "}
                <BsPlus className="me-1" />
                New expense
              </button>
            </div>
          </div>
        </td>
      </tr>
    );
  };

  // Tab button style helpers (fixed for correct color)
  const tabBtn = (tab, icon, label, color, iconOnly = false) => {
    let btnClass = "btn btn-sm fw-semibold d-flex align-items-center";
    let style = {
      minWidth: iconOnly ? 60 : 80,
      background: "",
      borderColor: "#d1d5db",
      color: "#1976d2",
      boxShadow: "",
    };
    if (activeTab === tab) {
      if (tab === "All") {
        btnClass += " btn-outline-custom";
        style.background = "#1976d2";
        style.color = "#fff";
        style.borderColor = "#1976d2";
      } else if (tab === "Time") {
        btnClass += " btn-outline-warning";
        style.background = "#FFA646";
        style.color = "#fff";
        style.borderColor = "#FFA646";
      } else if (tab === "Expense") {
        btnClass += " btn-outline-custom";
        style.background = "#eaf2fd";
        style.color = "#7e3ff2";
        style.borderColor = "#7e3ff2";
      }
    } else {
      if (tab === "Time") {
        style.color = "#FFA646";
      }
      if (tab === "Expense") {
        style.color = "#7e3ff2";
      }
    }
    return (
      <button
        className={btnClass}
        style={style}
        onClick={() => setActiveTab(tab)}
      >
        <span
          className="me-1"
          style={{
            color: color,
            fontSize: 18,
            ...(activeTab === tab && tab === "Expense"
              ? { color: "#7e3ff2" }
              : {}),
            ...(activeTab === tab && tab === "Time" ? { color: "#fff" } : {}),
            ...(activeTab === tab && tab === "All" ? { color: "#fff" } : {}),
          }}
        >
          {icon}
        </span>
        {label}
      </button>
    );
  };

  // Responsive styles
  const responsiveContainer = {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    width: "100%",
    maxWidth: "100vw",
    overflowX: "auto",
  };

  return (
    <div style={{ background: "#f7fafd", minHeight: "100vh" }}>
      {/* Header Section */}
      <div className="bg-white px-2 px-md-4 pt-4 pb-3 border-bottom">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
          <h1 className="fw-bold mb-0" style={{ fontSize: "2rem", fontWeight: "700" }}>Activities</h1>
          <div className="d-flex gap-2 flex-wrap">
            <button
              className="btn btn-outline-custom btn-sm fw-semibold"
              onClick={() => setShowManageCategories(true)}
            >
              Manage categories
            </button>
            <button
              className="btn btn-custom btn-sm fw-semibold"
              onClick={() => setShowNewTimeEntryModal(true)}
            >
              New time entry
            </button>
            <button
              className="btn btn-custom btn-sm fw-semibold"
              onClick={() => setShowNewExpenseModals(true)}
            >
              New expense
            </button>
          </div>
        </div>
      </div>

      {/* Filters Row */}
     <div className="container-fluid px-2 px-md-4 py-3 bg-light">
  <div className="d-flex flex-column flex-md-row align-items-center align-items-md-stretch gap-2 mb-2 overflow-auto">
    {/* Tabs */}
    <div className="d-flex flex-nowrap gap-2 me-md-auto">
      {tabBtn("All", null, "All", "#1976d2")}
      {tabBtn("Time", <BsClock />, "Time", "#FFA646")}
      {tabBtn("Expense", <BsCurrencyDollar />, "Expense", "#7e3ff2")}
    </div>

    {/* Date Range */}
    <div className="d-flex align-items-center gap-2 flex-wrap flex-md-nowrap">
      <div className="d-flex align-items-center gap-2">
   <div
      className="input-group input-group-sm"
      style={{
        minWidth: "180px",
        height: "40px",
      }}
    >
      <input
        ref={dateRef}
        type="date"
        className="form-control"
        value={date}
        onChange={e => setDate(e.target.value)}
        style={{
          border: "1.5px solid #1A2744",
          borderRight: "none",
          borderRadius: "8px 0 0 8px",
          height: "100%",
          fontSize: "1rem",
        }}
      />
      <div
        className="input-group-text bg-white"
        style={{
          border: "1.5px solid #1A2744",
          borderLeft: "none",
          borderRadius: "0 8px 8px 0",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          // Focus input when calendar icon is clicked
          dateRef.current?.showPicker?.(); // modern browsers
          dateRef.current?.focus();
        }}
      >
        
      </div>
    </div>

        <span className="fw-bold d-none d-md-inline">-</span>
   <div
      className="input-group input-group-sm"
      style={{
        minWidth: "180px",
        height: "40px",
      }}
    >
      <input
        type="date"
        className="form-control"
        value={date}
        onChange={e => setDate(e.target.value)}
        style={{
          border: "1.5px solid #1A2744",
          borderRight: "none",
          borderRadius: "8px 0 0 8px",
          height: "100%",
          fontSize: "1rem",
        }}
      />
      <span
        className="input-group-text bg-white"
        onClick={() => {
          // Focus input on icon click
          document.getElementById("dateInput").showPicker?.();
        }}
        style={{
          border: "1.5px solid #1A2744",
          borderLeft: "none",
          borderRadius: "0 8px 8px 0",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        
      </span>
    </div>

      </div>

      {/* Pagination Arrows */}
      <div className="d-flex gap-2">
        <button className="btn btn-light btn-sm border px-2">
          <BsChevronLeft />
        </button>
        <button className="btn btn-light btn-sm border px-2">
          <BsChevronRight />
        </button>
      </div>

      {/* Today Dropdown */}
      <select
        className="form-select form-select-sm"
        style={{ minWidth: "110px" }}
      >
        <option>Today</option>
        <option>This Week</option>
        <option>This Month</option>
        <option>This Year</option>
      </select>

      {/* Search */}
      <input
        type="text"
        className="form-control form-control-sm"
        placeholder="Filter by keyword"
        style={{ minWidth: "150px" }}
      />

      {/* Columns Dropdown */}
      <div className="dropdown">
        <button
          className="btn btn-sm fw-bold d-flex align-items-center border"
          type="button"
          aria-expanded={showColumns ? "true" : "false"}
          onClick={() => {
            setShowColumns((v) => !v);
            setShowFilters(false);
          }}
          style={{ minWidth: "90px" }}
        >
          Columns <BsChevronDown className="ms-1" />
        </button>
        <ul
          className="dropdown-menu p-3 border-0 shadow-sm"
          style={{
            minWidth: "220px",
            maxHeight: "340px",
            overflowY: "auto",
            display: showColumns ? "block" : "none",
          }}
        >
          <li className="mb-2 fw-bold fs-6">Visible columns</li>
          {columnsList.map((col) => (
            <li key={col} className="mb-1">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={visibleColumns.includes(col)}
                  id={`col-${col}`}
                  onChange={() => toggleColumn(col)}
                  style={{
                    borderColor: "#1976d2",
                    backgroundColor: visibleColumns.includes(col)
                      ? "#1976d2"
                      : "#fff",
                  }}
                />
                <label className="form-check-label fs-6" htmlFor={`col-${col}`}>
                  {col}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Filters Dropdown */}
      <div className="dropdown">
        <button
          className="btn btn-sm fw-bold d-flex align-items-center"
          type="button"
          aria-expanded={showFilters ? "true" : "false"}
          onClick={() => {
            setShowFilters((v) => !v);
            setShowColumns(false);
          }}
          style={{
            minWidth: "90px",
            border: "1.5px solid #1976d2",
            background: showFilters ? "#1976d2" : "#fff",
            color: showFilters ? "#fff" : "#1976d2",
            boxShadow: showFilters ? "0 0 0 3px #eaf2fd" : "",
          }}
        >
          <BsFilter className="me-1" /> Filters{" "}
          <BsChevronDown className="ms-1" />
        </button>
        <div
          className="dropdown-menu p-3 border-0 shadow-sm"
          style={{
            minWidth: "260px",
            maxWidth: "320px",
            display: showFilters ? "block" : "none",
          }}
        >
          <div className="mb-2 fw-bold fs-6">Firm user</div>
          <div className="input-group input-group-sm mb-3">
            <input
              type="text"
              className="form-control"
              value="john smith (me)"
              readOnly
            />
            <button
              className="btn btn-outline-secondary"
              tabIndex={-1}
              type="button"
            >
              ×
            </button>
          </div>
          <div className="mb-2 fw-bold fs-6">Invoice status</div>
          <select className="form-select form-select-sm mb-3">
            <option>Select an option</option>
          </select>
          <div className="mb-2 fw-bold fs-6">Matter</div>
          <div className="input-group input-group-sm mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Find a matter"
            />
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              tabIndex={-1}
            ></button>
          </div>
          <div className="mb-2 fw-bold fs-6">Expense attachments</div>
          <select className="form-select form-select-sm mb-3">
            <option>Select an option</option>
          </select>
          <div className="mb-2 fw-bold fs-6">Time entry category</div>
          <div className="input-group input-group-sm mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Find a time entry category"
            />
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              tabIndex={-1}
            ></button>
          </div>
          <div className="mb-2 fw-bold fs-6">Expense category</div>
          <div className="input-group input-group-sm mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Find an expense category"
            />
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              tabIndex={-1}
            ></button>
          </div>
          <div className="d-flex gap-2 mt-3">
            <button className="btn btn-custom btn-sm flex-grow-1">
              Apply filters
            </button>
            <button className="btn btn-outline-secondary btn-sm flex-grow-1">
              Clear filters
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Table */}
      <div
        className="container-fluid px-0 px-md-4 pb-3"
        style={responsiveContainer}
      >
        <div
          className="at-table-container table-responsive bg-white rounded-3 border"
          style={{ minHeight: 400 }}
        >
          <table
            className="at-table table table-bordered mb-0"
            style={{ minWidth: 900 }}
          >
            <thead>
              <tr className="table-light align-middle">
                {visibleColumns.includes("Actions") && (
                  <th style={{ width: 30 }}>
                    <input type="checkbox" />
                  </th>
                )}
                {visibleColumns.includes("Actions") && <th>Actions</th>}
                {visibleColumns.includes("Type") && <th>Type</th>}
                {visibleColumns.includes("Qty") && <th>Qty</th>}
                {visibleColumns.includes("Description") && <th>Description</th>}
                {visibleColumns.includes("Attachments") && <th>Attachments</th>}
                {visibleColumns.includes("Matter") && <th>Matter</th>}
                {visibleColumns.includes("Rate ($)") && <th>Rate ($)</th>}
                {visibleColumns.includes("Non-billable ($)") && (
                  <th>Non-billable ($)</th>
                )}
                {visibleColumns.includes("Billable ($)") && (
                  <th>Billable ($)</th>
                )}
                {visibleColumns.includes("Date") && <th>Date</th>}
                {visibleColumns.includes("User") && <th>User</th>}
                {visibleColumns.includes("Invoice status") && (
                  <th>Invoice status</th>
                )}
                {visibleColumns.includes("Expense Category") && (
                  <th>Expense Category</th>
                )}
                {visibleColumns.includes("Notes") && <th>Notes</th>}
              </tr>
            </thead>
            <tbody>{renderRows()}</tbody>
            {/* Table footer summary row */}
            <tfoot>
              <tr>
                <td colSpan={7}></td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-h</td>
                <td className="text-center">-h</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      {/* Footer Actions */}
      <div className="container-fluid px-2 px-md-4 pb-4">
        <div className="at-footer-actions d-flex flex-column flex-md-row justify-content-between align-items-center mt-2 gap-2">
          <div className="d-flex align-items-center gap-2 mb-2 mb-md-0">
            <button className="btn btn-light btn-sm border">
              <BsChevronLeft />
            </button>
            <button className="btn btn-light btn-sm border">
              <BsChevronRight />
            </button>
            <span className="text-muted ms-2">No results found</span>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-sm btn-outline-secondary d-flex align-items-center">
              <BsChevronDown className="me-1" /> Expand rows
            </button>
            <button
              className="btn btn-sm btn-custom d-flex align-items-center fw-semibold"
              onClick={() => setShowExportModal(true)}
            >
              <BsDownload className="me-1" /> Export
            </button>
          </div>
        </div>
      </div>
      <NewTimeEntryModal
        show={showNewTimeEntryModal}
        onClose={() => setShowNewTimeEntryModal(false)}
      />
      <NewExpenseModals
        show={showNewExpenseModals}
        onClose={() => setShowNewExpenseModals(false)}
      />
      {showExportModal && (
        <ExportModal
          onClose={() => setShowExportModal(false)}
          onExport={handleExport}
        />
      )}
    </div>
  );
};

export default ActivitiesTable;
