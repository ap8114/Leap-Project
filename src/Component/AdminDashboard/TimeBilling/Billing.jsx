import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {Link} from "react-router-dom";

const tabs = [
  "Draft",
  "Pending approval",
  "Unpaid",
  "Paid",
  "All",
  "Archive",
];

const allColumns = [
  { key: "actions", label: "Actions" },
  { key: "lastSent", label: "Last sent" },
  { key: "id", label: "Id" },
  { key: "status", label: "Status" },
  { key: "due", label: "Due" },
  { key: "client", label: "Client" },
  { key: "matters", label: "Matter(s)" },
  { key: "issueDate", label: "Issue date" },
  { key: "pendingPayment", label: "Pending payment" },
  { key: "balance", label: "Balance" },
  { key: "paidOn", label: "Paid on" },
  { key: "paid", label: "Paid" },
  { key: "type", label: "Type" },
  { key: "total", label: "Total" },
];

const Billing = () => {
  const [activeTab, setActiveTab] = useState("Archive");
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState([
    "actions",
    "lastSent",
    "id",
    "status",
    "due",
    "client",
    "matters",
    "issueDate",
    "balance",
  ]);
  const [columnsDropdown, setColumnsDropdown] = useState(false);
  const [tempColumns, setTempColumns] = useState(visibleColumns);
  const [filtersDropdown, setFiltersDropdown] = useState(false);
  const [filters, setFilters] = useState({
    client: "",
    matter: "",
    responsibleAttorney: "",
    originatingAttorney: "",
    lastSentFrom: null,
    lastSentTo: null,
    dueFrom: null,
    dueTo: null,
    issueFrom: null,
    issueTo: null,
    overdueOnly: false,
    type: "All",
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const columnsDropdownRef = useRef(null);
  const filtersDropdownRef = useRef(null);

  // Dummy data example
  const exampleRow = {
    actions: "Edit",
    lastSent: "2024-07-10",
    id: "BILL-001",
    status: "Unpaid",
    due: "2024-07-20",
    client: "John Doe",
    matters: "Matter 1",
    issueDate: "2024-07-01",
    balance: "$500",
  };

  // Add data handler
  const handleAddData = () => {
    setData([...data, { ...exampleRow, id: `BILL-00${data.length + 1}` }]);
  };

  // Sorting handler
  const handleSort = (col) => {
    if (sortColumn === col) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(col);
      setSortOrder("asc");
    }
  };

  // Sorted and filtered data
  const filteredData = data
    .filter((row) => row.id.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (!sortColumn) return 0;
      const aValue = a[sortColumn] || "";
      const bValue = b[sortColumn] || "";
      if (sortOrder === "asc") return aValue > bValue ? 1 : -1;
      return aValue < bValue ? 1 : -1;
    });

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        columnsDropdownRef.current &&
        !columnsDropdownRef.current.contains(event.target)
      ) {
        setColumnsDropdown(false);
      }
      if (
        filtersDropdownRef.current &&
        !filtersDropdownRef.current.contains(event.target)
      ) {
        setFiltersDropdown(false);
      }
    }
    if (columnsDropdown || filtersDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [columnsDropdown, filtersDropdown]);

  // Responsive breakpoints
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

  return (
    <div style={{ background: "#fff", borderRadius: 12, padding: 0 }}>
       
      {/* Mobile Header */}
      {isMobile && (
        <div style={{ padding: "12px 16px", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ margin: 0 }}>Billing</h2>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: "none",
                border: "none",
                fontSize: "20px",
                cursor: "pointer"
              }}
            >
              ☰
            </button>
          </div>
          {mobileMenuOpen && (
            <div style={{ marginTop: "12px" }}>
              <input
                type="text"
                placeholder="Search by ID"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  padding: "7px 14px",
                  border: "1px solid #d1d5db",
                  borderRadius: 6,
                  fontSize: 15,
                  width: "100%",
                  marginBottom: "12px"
                }}
              />
              <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                <button
                  style={{
                    border: "1px solid #d1d5db",
                    borderRadius: 6,
                    background: "#fff",
                    padding: "7px 12px",
                    fontSize: 15,
                    cursor: "pointer",
                    flex: 1
                  }}
                  onClick={() => {
                    setTempColumns(visibleColumns);
                    setColumnsDropdown((prev) => !prev);
                  }}
                >
                  Columns ▾
                </button>
                <button
                  style={{
                    border: "1px solid #d1d5db",
                    borderRadius: 6,
                    background: "#fff",
                    padding: "7px 12px",
                    fontSize: 15,
                    cursor: "pointer",
                    flex: 1
                  }}
                  onClick={() => setFiltersDropdown((prev) => !prev)}
                >
                  Filters ▾
                </button>
              </div>
              <div style={{ overflowX: "auto", whiteSpace: "nowrap", paddingBottom: "8px" }}>
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      background: activeTab === tab ? "#e6f0fa" : "transparent",
                      color: activeTab === tab ? "#1976d2" : "#222",
                      border: "none",
                      borderRadius: 6,
                      padding: "8px 12px",
                      fontWeight: activeTab === tab ? 600 : 400,
                      fontSize: 15,
                      cursor: "pointer",
                      outline: "none",
                      marginRight: "8px"
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Desktop Header */}
      {!isMobile && (
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px 0 24px",
          marginBottom: 0,
          flexWrap: "wrap",
          gap: "16px"
        }}>
          <div style={{ 
            display: "flex", 
            gap: 24, 
            overflowX: "auto",
            paddingBottom: "8px",
            flex: isTablet ? "1 1 100%" : "0 1 auto"
          }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: activeTab === tab ? "#e6f0fa" : "transparent",
                  color: activeTab === tab ? "#1976d2" : "#222",
                  border: "none",
                  borderRadius: 6,
                  padding: "8px 18px",
                  fontWeight: activeTab === tab ? 600 : 400,
                  fontSize: 17,
                  cursor: "pointer",
                  outline: "none",
                  whiteSpace: "nowrap"
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 16, 
            position: "relative",
            flex: isTablet ? "1 1 100%" : "0 1 auto",
            justifyContent: isTablet ? "flex-end" : "flex-start"
          }}>
            <input
              type="text"
              placeholder="Search by ID"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: "7px 14px",
                border: "1px solid #d1d5db",
                borderRadius: 6,
                fontSize: 15,
                width: isTablet ? "100%" : 220,
                maxWidth: "100%"
              }}
            />
            {/* Columns Dropdown Button */}
            <div style={{ position: "relative" }} ref={columnsDropdownRef}>
              <button
                style={{
                  border: "1px solid #d1d5db",
                  borderRadius: 6,
                  background: "#fff",
                  padding: "7px 18px",
                  fontSize: 15,
                  cursor: "pointer",
                  whiteSpace: "nowrap"
                }}
                onClick={() => {
                  setTempColumns(visibleColumns);
                  setColumnsDropdown((prev) => !prev);
                }}
              >
                Columns ▾
              </button>
              {columnsDropdown && (
                <div
                  style={{
                    position: "absolute",
                    top: 40,
                    right: 0,
                    zIndex: 10,
                    background: "#fff",
                    border: "1px solid #d1d5db",
                    borderRadius: 8,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                    minWidth: 240,
                    maxHeight: "min(340px, 70vh)",
                    display: "flex",
                    flexDirection: "column",
                    padding: 0,
                    overflow: "hidden"
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: 15, padding: "16px 18px 10px 18px" }}>
                    Visible columns
                  </div>
                  <div style={{ flex: 1, overflowY: "auto", paddingBottom: 60 }}>
                    {allColumns.map((col) => (
                      <label
                        key={col.key}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "4px 18px",
                          fontSize: 15,
                          cursor: "pointer",
                          userSelect: "none",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={tempColumns.includes(col.key)}
                          onChange={() => {
                            if (tempColumns.includes(col.key)) {
                              setTempColumns(tempColumns.filter((k) => k !== col.key));
                            } else {
                              setTempColumns([...tempColumns, col.key]);
                            }
                          }}
                        />
                        {col.label}
                      </label>
                    ))}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      background: "#fff",
                      borderTop: "1px solid #eee",
                      display: "flex",
                      gap: 10,
                      padding: "12px 18px",
                      justifyContent: "flex-start",
                    }}
                  >
                    <button
                      style={{
                        background: "#1976d2",
                        color: "#fff",
                        border: "none",
                        borderRadius: 6,
                        padding: "7px 18px",
                        fontWeight: 600,
                        fontSize: 13,
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setVisibleColumns(tempColumns);
                        setColumnsDropdown(false);
                      }}
                    >
                      Update columns
                    </button>
                    <button
                      style={{
                        background: "#fff",
                        color: "#222",
                        border: "1.5px solid #d1d5db",
                        borderRadius: 6,
                        padding: "7px 18px",
                        fontWeight: 600,
                        fontSize: 13,
                        cursor: "pointer",
                      }}
                      onClick={() => setColumnsDropdown(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* Filters Dropdown Button */}
            <div style={{ position: "relative" }} ref={filtersDropdownRef}>
              <button
                style={{
                  border: "1px solid #d1d5db",
                  borderRadius: 6,
                  background: "#fff",
                  padding: "7px 18px",
                  fontSize: 15,
                  cursor: "pointer",
                  whiteSpace: "nowrap"
                }}
                onClick={() => setFiltersDropdown((prev) => !prev)}
              >
                Filters ▾
              </button>
              {filtersDropdown && (
                <div
                  style={{
                    position: "absolute",
                    top: 40,
                    right: 0,
                    zIndex: 20,
                    background: "#fff",
                    border: "1px solid #d1d5db",
                    borderRadius: 8,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                    minWidth: isMobile ? "90vw" : 320,
                    maxHeight: "min(600px, 70vh)",
                    overflowY: "auto",
                    padding: "18px 18px 12px 18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <label style={{ fontWeight: 600, fontSize: 15 }}>Client</label>
                  <input
                    type="text"
                    placeholder="Find a contact"
                    value={filters.client}
                    onChange={e => setFilters(f => ({ ...f, client: e.target.value }))}
                    style={{ padding: "7px 10px", border: "1px solid #d1d5db", borderRadius: 6 }}
                  />
                  <label style={{ fontWeight: 600, fontSize: 15 }}>Matter</label>
                  <input
                    type="text"
                    placeholder="Find a matter"
                    value={filters.matter}
                    onChange={e => setFilters(f => ({ ...f, matter: e.target.value }))}
                    style={{ padding: "7px 10px", border: "1px solid #d1d5db", borderRadius: 6 }}
                  />
                  <label style={{ fontWeight: 600, fontSize: 15 }}>Responsible Attorney</label>
                  <input
                    type="text"
                    placeholder="Find a firm user"
                    value={filters.responsibleAttorney}
                    onChange={e => setFilters(f => ({ ...f, responsibleAttorney: e.target.value }))}
                    style={{ padding: "7px 10px", border: "1px solid #d1d5db", borderRadius: 6 }}
                  />
                  <label style={{ fontWeight: 600, fontSize: 15 }}>Originating Attorney</label>
                  <input
                    type="text"
                    placeholder="Find a firm user"
                    value={filters.originatingAttorney}
                    onChange={e => setFilters(f => ({ ...f, originatingAttorney: e.target.value }))}
                    style={{ padding: "7px 10px", border: "1px solid #d1d5db", borderRadius: 6 }}
                  />
                  <label style={{ fontWeight: 600, fontSize: 15 }}>Last Sent</label>
                  <div style={{ display: "flex", gap: 8 }}>
                    <DatePicker
                      selected={filters.lastSentFrom}
                      onChange={date => setFilters(f => ({ ...f, lastSentFrom: date }))}
                      placeholderText="From"
                      dateFormat="MM/dd/yyyy"
                      className="date-picker-input"
                      style={{ width: "100%" }}
                    />
                    <DatePicker
                      selected={filters.lastSentTo}
                      onChange={date => setFilters(f => ({ ...f, lastSentTo: date }))}
                      placeholderText="To"
                      dateFormat="MM/dd/yyyy"
                      className="date-picker-input"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <label style={{ fontWeight: 600, fontSize: 15 }}>Due date</label>
                  <div style={{ display: "flex", gap: 8 }}>
                    <DatePicker
                      selected={filters.dueFrom}
                      onChange={date => setFilters(f => ({ ...f, dueFrom: date }))}
                      placeholderText="From"
                      dateFormat="MM/dd/yyyy"
                      className="date-picker-input"
                      style={{ width: "100%" }}
                    />
                    <DatePicker
                      selected={filters.dueTo}
                      onChange={date => setFilters(f => ({ ...f, dueTo: date }))}
                      placeholderText="To"
                      dateFormat="MM/dd/yyyy"
                      className="date-picker-input"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <label style={{ fontWeight: 600, fontSize: 15 }}>Issue date</label>
                  <div style={{ display: "flex", gap: 8 }}>
                    <DatePicker
                      selected={filters.issueFrom}
                      onChange={date => setFilters(f => ({ ...f, issueFrom: date }))}
                      placeholderText="From"
                      dateFormat="MM/dd/yyyy"
                      className="date-picker-input"
                      style={{ width: "100%" }}
                    />
                    <DatePicker
                      selected={filters.issueTo}
                      onChange={date => setFilters(f => ({ ...f, issueTo: date }))}
                      placeholderText="To"
                      dateFormat="MM/dd/yyyy"
                      className="date-picker-input"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <input
                      type="checkbox"
                      checked={filters.overdueOnly}
                      onChange={e => setFilters(f => ({ ...f, overdueOnly: e.target.checked }))}
                    />
                    Show overdue bills only
                  </label>
                  <label style={{ fontWeight: 600, fontSize: 15 }}>Type</label>
                  <select
                    value={filters.type}
                    onChange={e => setFilters(f => ({ ...f, type: e.target.value }))}
                    style={{ padding: "7px 10px", border: "1px solid #d1d5db", borderRadius: 6 }}
                  >
                    <option value="All">All</option>
                    <option value="Bill">Bill</option>
                    <option value="Trust">Trust</option>
                  </select>
                  <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                    <button
                      style={{
                        background: "#1976d2",
                        color: "#fff",
                        border: "none",
                        borderRadius: 6,
                        padding: "7px 18px",
                        fontWeight: 600,
                        fontSize: 15,
                        cursor: "pointer",
                      }}
                      onClick={() => setFiltersDropdown(false)}
                    >
                      Apply filters
                    </button>
                    <button
                      style={{
                        background: "#fff",
                        color: "#222",
                        border: "1.5px solid #d1d5db",
                        borderRadius: 6,
                        padding: "7px 18px",
                        fontWeight: 600,
                        fontSize: 15,
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        setFilters({
                          client: "",
                          matter: "",
                          responsibleAttorney: "",
                          originatingAttorney: "",
                          lastSentFrom: null,
                          lastSentTo: null,
                          dueFrom: null,
                          dueTo: null,
                          issueFrom: null,
                          issueTo: null,
                          overdueOnly: false,
                          type: "All",
                        })
                      }
                    >
                      Clear filters
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Table Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `40px ${visibleColumns.map(() => "1fr").join(" ")}`,
          background: "#f6f8fa",
          borderRadius: 0,
          fontWeight: 600,
          fontSize: 15,
          color: "#222",
          padding: "10px 0 10px 24px",
          marginBottom: 0,
          borderBottom: "1px solid #e5e7eb",
          marginTop: isMobile ? 0 : "15px",
          overflowX: "auto",
          minWidth: "fit-content"
        }}
      >
        <div>
          <input type="checkbox" />
        </div>
        {allColumns
          .filter((col) => visibleColumns.includes(col.key))
          .map((col) => (
            <div
              key={col.key}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                userSelect: "none",
                minWidth: 0,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
              onClick={() => handleSort(col.key)}
            >
              {col.label}
              <span style={{ marginLeft: 4, fontSize: 13 }}>
                {sortColumn === col.key ? (sortOrder === "asc" ? "▲" : "▼") : "↕"}
              </span>
            </div>
          ))}
      </div>

      {/* Table Body or Empty State */}
      {data.length === 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 340,
            background: "#fff",
            width: "100%",
            padding: isMobile ? "20px" : "40px"
          }}
        >
          <img
            src="https://app.Fasttrack.com/assets/empty-states/bills.svg"
            alt="No bills"
            style={{ width: isMobile ? "100px" : "140px", marginBottom: "16px" }}
          />
          <div style={{ fontWeight: 600, fontSize: isMobile ? "18px" : "22px", marginBottom: "6px", textAlign: "center" }}>
            No bills or trust requests found
          </div>
          <div style={{ color: "#666", marginBottom: "22px", textAlign: "center" }}>
            Start billing your clients or collect trust deposits upfront.
          </div>
          
          <div style={{ display: "flex", gap: "12px", marginBottom: "18px", flexDirection: isMobile ? "column" : "row", width: isMobile ? "100%" : "auto" }}>
            <Link to="/newbills">
            <button
              style={{
                
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "10px 24px",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
                width: isMobile ? "100%" : "auto"
              }}
              className="btn-custom"
            >
              New bills
            </button>
            </Link>
            <button
              style={{
                background: "#fff",
                color: "#222",
                border: "1.5px solid #d5d5db",
                borderRadius: 6,
                padding: "10px 24px",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
                width: isMobile ? "100%" : "auto"
              }}
            >
              New trust request
            </button>
            
          </div>
        </div>
      ) : (
        // Table rows would be rendered here (data.map...)
        <></>
      )}

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #e5e7eb",
          padding: "14px 24px",
          marginTop: 8,
          flexWrap: "wrap",
          gap: "12px"
        }}
      >
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: 12,
          order: isMobile ? 2 : 1,
          flex: isMobile ? "1 1 100%" : "0 1 auto",
          justifyContent: isMobile ? "center" : "flex-start"
        }}>
          <button
            style={{
              border: "1px solid #d5d5db",
              borderRadius: 4,
              background: "#fff",
              padding: "3px 8px",
              fontSize: 15,
              cursor: "pointer",
              marginLeft: isMobile ? 0 : 16,
            }}
          >
            {"<"}
          </button>
          <button
            style={{
              border: "1px solid #d5d5db",
              borderRadius: 4,
              background: "#fff",
              padding: "3px 8px",
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            {">"}
          </button>
          <span style={{ color: "#666", marginLeft: 8 }}>
            No results found
          </span>
        </div>
        
        <div style={{ 
          order: isMobile ? 1 : 2,
          flex: isMobile ? "1 1 100%" : "0 1 auto",
          display: "flex",
          justifyContent: isMobile ? "center" : "flex-end"
        }}>
          <button
            style={{
              border: "1px solid #d5d5db",
              borderRadius: 6,
              background: "#fff",
              padding: "7px 18px",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap"
            }}
          >
            Export ▾
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billing;