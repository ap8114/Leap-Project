import React, { useState } from "react";

const tableHeaderStyle = {
  padding: "12px 16px",
  background: "#f9fafb",
  borderBottom: "1px solid #e5e7eb",
  fontWeight: 600,
  fontSize: 15,
  textAlign: "left",
  color: "#222",
  whiteSpace: "nowrap",
};

const sortIconStyle = {
  marginLeft: 6,
  fontSize: 13,
  color: "#bdbdbd",
  cursor: "pointer",
  verticalAlign: "middle",
};

const inputStyle = {
  padding: "8px 12px",
  border: "1px solid #e5e7eb",
  borderRadius: 6,
  fontSize: 14,
  width: 200,
  marginLeft: 16,
};

const buttonStyle = {
  background: "#fff",
  color: "#4b5563",
  border: "1px solid #e5e7eb",
  borderRadius: 6,
  padding: "8px 16px",
  fontWeight: 530,
  fontSize: 14,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  marginLeft: 16,
};

const iconStyle = {
  marginRight: 8,
  fontSize: 16,
};

const dropdownStyle = {
  position: "absolute",
  right: 0,
  top: "100%",
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: 8,
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  padding: "8px 0",
  zIndex: 10,
  width: 240,
};

const nestedDropdownStyle = {
  position: "absolute",
  top: 0,
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: 8,
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  padding: "8px 0",
  zIndex: 20,
  width: 240,
  marginLeft: 8,
};

const dropdownItemStyle = {
  padding: "8px 16px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
};

const checkboxStyle = {
  marginRight: 12,
};

const buttonContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "16px 24px",
  borderBottom: "1px solid #e5e7eb",
  gap: 16,
};

const actionButtonsStyle = {
  display: "flex",
  gap: 16,
};

const filterDropdownItemStyle = {
  padding: "12px 16px",
  borderBottom: "1px solid #f3f4f6",
  position: "relative",
};

const filterLabelStyle = {
  display: "block",
  marginBottom: 8,
  fontWeight: 600,
  fontSize: 14,
};

const filterFooterStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "12px 16px",
  borderTop: "1px solid #f3f4f6",
};

const dateRangeOptions = ["All dates", "Last 7 days", "Last 30 days", "Last 90 days", "Custom range"];
const attorneyOptions = ["All attorneys", "John Smith", "Sarah Johnson", "Michael Brown", "Emily Davis"];

const OutstandingBalance = () => {
  const [showColumnsDropdown, setShowColumnsDropdown] = useState(false);
  const [showFiltersDropdown, setShowFiltersDropdown] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState({
    Actions: true,
    Reminders: true,
    Client: true,
    "Last sent": true,
    "Newest bill's due date": true,
    "Last paid": true,
    Balance: true,
  });

  // Nested dropdown states
  const [showOriginatingAttorneyDropdown, setShowOriginatingAttorneyDropdown] = useState(false);
  const [showResponsibleAttorneyDropdown, setShowResponsibleAttorneyDropdown] = useState(false);
  const [showLastPaidDropdown, setShowLastPaidDropdown] = useState(false);
  const [showDueDateDropdown, setShowDueDateDropdown] = useState(false);

  // Selected values
  const [selectedOriginatingAttorney, setSelectedOriginatingAttorney] = useState("Find a firm user");
  const [selectedResponsibleAttorney, setSelectedResponsibleAttorney] = useState("Find a firm user");
  const [selectedLastPaid, setSelectedLastPaid] = useState("Select range");
  const [selectedDueDate, setSelectedDueDate] = useState("All dates");

  const toggleColumn = (column) => {
    setVisibleColumns({
      ...visibleColumns,
      [column]: !visibleColumns[column],
    });
  };

  const handleOriginatingAttorneySelect = (option) => {
    setSelectedOriginatingAttorney(option);
    setShowOriginatingAttorneyDropdown(false);
  };

  const handleResponsibleAttorneySelect = (option) => {
    setSelectedResponsibleAttorney(option);
    setShowResponsibleAttorneyDropdown(false);
  };

  const handleLastPaidSelect = (option) => {
    setSelectedLastPaid(option);
    setShowLastPaidDropdown(false);
  };

  const handleDueDateSelect = (option) => {
    setSelectedDueDate(option);
    setShowDueDateDropdown(false);
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 8,
        border: "1px solid #e5e7eb",
        padding: 0,
        position: "relative",
      }}
    >
      {/* Top bar with controls */}
      <div style={buttonContainerStyle}>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search clients..."
            style={inputStyle}
          />
        </div>
        
        <div style={actionButtonsStyle}>
          <div style={{ position: "relative" }}>
            <button 
              style={buttonStyle} 
              onClick={() => setShowColumnsDropdown(!showColumnsDropdown)}
            >
              Columns ▾
            </button>
            
            {showColumnsDropdown && (
              <div style={dropdownStyle}>
                <div style={{ padding: "8px 16px", fontWeight: 600, borderBottom: "1px solid #e5e7eb" }}>
                  Visible columns
                </div>
                {Object.keys(visibleColumns).map((column) => (
                  <div 
                    key={column} 
                    style={dropdownItemStyle}
                    onClick={() => toggleColumn(column)}
                  >
                    <input 
                      type="checkbox" 
                      checked={visibleColumns[column]} 
                      onChange={() => {}}
                      style={checkboxStyle}
                    />
                    {column}
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #e5e7eb", marginTop: 8, paddingTop: 8 }}>
                  <button 
                    style={{ 
                      ...buttonStyle, 
                      border: "none", 
                      padding: "8px 16px", 
                      width: "100%", 
                      justifyContent: "center",
                      background: "#f9fafb",
                    }}
                  >
                    Update columns
                  </button>
                  <button 
                    style={{ 
                      ...buttonStyle, 
                      border: "none", 
                      padding: "8px 16px", 
                      width: "100%", 
                      justifyContent: "center", 
                      marginTop: 4,
                      background: "#f9fafb",
                    }}
                    onClick={() => setShowColumnsDropdown(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div style={{ position: "relative" }}>
            <button 
              style={buttonStyle}
              onClick={() => setShowFiltersDropdown(!showFiltersDropdown)}
            >
              Filters ▾
            </button>
            
            {showFiltersDropdown && (
              <div style={dropdownStyle}>
                <div style={filterDropdownItemStyle}>
                  <label style={filterLabelStyle}>Originating Attorney</label>
                  <div style={{ position: "relative" }}>
                    <button 
                      style={{ ...buttonStyle, width: "100%", justifyContent: "space-between" }}
                      onClick={() => setShowOriginatingAttorneyDropdown(!showOriginatingAttorneyDropdown)}
                    >
                      {selectedOriginatingAttorney} <span>▾</span>
                    </button>
                    
                    {showOriginatingAttorneyDropdown && (
                      <div style={nestedDropdownStyle}>
                        {attorneyOptions.map((option) => (
                          <div
                            key={option}
                            style={dropdownItemStyle}
                            onClick={() => handleOriginatingAttorneySelect(option)}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div style={filterDropdownItemStyle}>
                  <label style={filterLabelStyle}>Responsible Attorney</label>
                  <div style={{ position: "relative" }}>
                    <button 
                      style={{ ...buttonStyle, width: "100%", justifyContent: "space-between" }}
                      onClick={() => setShowResponsibleAttorneyDropdown(!showResponsibleAttorneyDropdown)}
                    >
                      {selectedResponsibleAttorney} <span>▾</span>
                    </button>
                    
                    {showResponsibleAttorneyDropdown && (
                      <div style={nestedDropdownStyle}>
                        {attorneyOptions.map((option) => (
                          <div
                            key={option}
                            style={dropdownItemStyle}
                            onClick={() => handleResponsibleAttorneySelect(option)}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div style={filterDropdownItemStyle}>
                  <label style={filterLabelStyle}>Last Paid</label>
                  <div style={{ position: "relative" }}>
                    <button 
                      style={{ ...buttonStyle, width: "100%", justifyContent: "space-between" }}
                      onClick={() => setShowLastPaidDropdown(!showLastPaidDropdown)}
                    >
                      {selectedLastPaid} <span>▾</span>
                    </button>
                    
                    {showLastPaidDropdown && (
                      <div style={nestedDropdownStyle}>
                        {dateRangeOptions.map((option) => (
                          <div
                            key={option}
                            style={dropdownItemStyle}
                            onClick={() => handleLastPaidSelect(option)}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div style={filterDropdownItemStyle}>
                  <label style={filterLabelStyle}>Newest Bill's Due Date</label>
                  <div style={{ position: "relative" }}>
                    <button 
                      style={{ ...buttonStyle, width: "100%", justifyContent: "space-between" }}
                      onClick={() => setShowDueDateDropdown(!showDueDateDropdown)}
                    >
                      {selectedDueDate} <span>▾</span>
                    </button>
                    
                    {showDueDateDropdown && (
                      <div style={nestedDropdownStyle}>
                        {dateRangeOptions.map((option) => (
                          <div
                            key={option}
                            style={dropdownItemStyle}
                            onClick={() => handleDueDateSelect(option)}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div style={filterFooterStyle}>
                  <button 
                    style={{ 
                      ...buttonStyle, 
                      border: "1px solid #2563eb", 
                      color: "#2563eb",
                      background: "#fff",
                    }}
                    onClick={() => setShowFiltersDropdown(false)}
                  >
                    Apply 
                  </button>
                  <button 
                    style={{ 
                      ...buttonStyle, 
                      border: "1px solid #e5e7eb", 
                      background: "#fff",
                    }}
                    onClick={() => {
                      setSelectedOriginatingAttorney("Find a firm user");
                      setSelectedResponsibleAttorney("Find a firm user");
                      setSelectedLastPaid("Select range");
                      setSelectedDueDate("All dates");
                    }}
                  >
                    Clear 
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <table
        style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}
      >
        <thead>
          <tr>
            <th style={{ ...tableHeaderStyle, width: 40 }}>
              <input type="checkbox" />
            </th>
            {visibleColumns.Actions && <th style={tableHeaderStyle}>Actions</th>}
            {visibleColumns.Reminders && <th style={tableHeaderStyle}>Reminders</th>}
            {visibleColumns.Client && (
              <th style={tableHeaderStyle}>
                Client
                <span style={sortIconStyle}>▲▼</span>
              </th>
            )}
            {visibleColumns["Last sent"] && (
              <th style={tableHeaderStyle}>
                Last sent
                <span style={sortIconStyle}>▲▼</span>
              </th>
            )}
            {visibleColumns["Newest bill's due date"] && (
              <th style={tableHeaderStyle}>
                Newest bill's due date
                <span style={sortIconStyle}>▲▼</span>
              </th>
            )}
            {visibleColumns["Last paid"] && (
              <th style={tableHeaderStyle}>
                Last paid
                <span style={sortIconStyle}>▲▼</span>
              </th>
            )}
            {visibleColumns.Balance && (
              <th style={tableHeaderStyle}>
                Balance
                <span style={sortIconStyle}>▲▼</span>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              colSpan={Object.values(visibleColumns).filter(Boolean).length + 1}
              style={{
                textAlign: "center",
                padding: "80px 0",
                background: "#fff",
              }}
            >
              <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>
                No clients with outstanding balance found.
              </div>
              <div style={{ color: "#6b7280", marginBottom: 24 }}>
                Start billing your clients!
              </div>
              <button
                style={{
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "10px 32px",
                  fontWeight: 600,
                  fontSize: 16,
                  cursor: "pointer",
                }}
              >
                New bills
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderTop: "1px solid #e5e7eb",
          padding: "12px 24px",
        }}
      >
        <button
          style={{
            border: "1px solid #e5e7eb",
            background: "#f9fafb",
            borderRadius: 4,
            padding: "4px 8px",
            marginRight: 4,
            cursor: "pointer",
          }}
          disabled
        >
          &#60;
        </button>
        <button
          style={{
            border: "1px solid #e5e7eb",
            background: "#f9fafb",
            borderRadius: 4,
            padding: "4px 8px",
            marginRight: 16,
            cursor: "pointer",
          }}
          disabled
        >
          &#62;
        </button>
        <span style={{ color: "#6b7280", marginRight: 16 }}>
          No results found
        </span>
        <button
          style={{
            background: "#fff",
            color: "#2563eb",
            border: "1px solid #2563eb",
            borderRadius: 6,
            padding: "6px 24px",
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Export
        </button>
      </div>
    </div>
  );
};

export default OutstandingBalance;