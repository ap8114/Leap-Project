import React, { useState } from "react";
import { BsChevronDown, BsCalendar, BsPaperclip } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewExpenseModals = ({ show, onClose }) => {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showMatterDropdown, setShowMatterDropdown] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTaxDropdown, setShowTaxDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date("2025-07-10"));
  const [isNonBillable, setIsNonBillable] = useState(false);
  const [showOnBill, setShowOnBill] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [rate, setRate] = useState(0);
 const [showFirmUserDropdown, setShowFirmUserDropdown] = useState(false);

  if (!show) return null;

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  };

  const calculateTotal = () => {
    return (quantity * rate).toFixed(2);
  };

  return (
    <div className="modal-backdrop" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1050
    }}>
      <div className="modal-content bg-white rounded-3" style={{
        width: '90%',
        maxWidth: '500px',
        padding: '16px',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        {/* Modal Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold mb-0">New expense entry</h5>
          <button 
            onClick={onClose}
            className="btn p-0 border-0"
            style={{ fontSize: '20px', lineHeight: 1 }}
          >
            &times;
          </button>
        </div>

        {/* Receipt Section */}
        <div className="mb-4">
          <h6 className="fw-bold mb-2" style={{ fontSize: '14px' }}>Receipt</h6>
          <div className="d-flex align-items-center gap-2 mb-2">
            <span style={{ fontSize: '14px' }}>New</span>
          </div>
          <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1">
            <BsPaperclip size={14} />
            <span>Attach receipt</span>
          </button>
        </div>

        {/* Expense Details Section */}
        <div className="mb-4">
          <h6 className="fw-bold mb-3" style={{ fontSize: '16px' }}>Expense details</h6>
          
          {/* Expense Category */}
          <div className="mb-3">
            <h6 className="fw-bold mb-2" style={{ fontSize: '14px' }}>Expense category</h6>
            <div className="dropdown">
              <button 
                className="btn btn-outline-secondary btn-sm w-100 text-start d-flex justify-content-between align-items-center"
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              >
                <span>Select an expense category</span>
                <BsChevronDown size={14} />
              </button>
              {showCategoryDropdown && (
                <div className="dropdown-menu w-100 show" style={{ marginTop: '2px' }}>
                  <div className="px-2 py-1">
                    <input type="text" className="form-control form-control-sm mb-1" placeholder="Search categories" />
                    <div className="dropdown-item" style={{ fontSize: '14px' }}>No categories found</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quantity, Rate, Total */}
          <div className="mb-3">
            <table className="table table-bordered mb-0">
              <thead>
                <tr>
                  <th style={{ fontSize: '14px' }}>Quantity</th>
                  <th style={{ fontSize: '14px' }}>Rate *</th>
                  <th style={{ fontSize: '14px' }}>Total amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input 
                      type="number" 
                      className="form-control form-control-sm" 
                      value={quantity} 
                      onChange={(e) => setQuantity(parseFloat(e.target.value) || 0)}
                      min="0"
                      step="0.01"
                    />
                  </td>
                  <td>
                    <div className="input-group input-group-sm">
                      <span className="input-group-text">$</span>
                      <input 
                        type="number" 
                        className="form-control" 
                        value={rate} 
                        onChange={(e) => setRate(parseFloat(e.target.value) || 0)}
                        min="0"
                        step="0.01"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="me-1">$</span>
                      <span>{calculateTotal()}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Checkboxes */}
          <div className="mb-3">
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="nonBillable"
                checked={isNonBillable}
                onChange={() => setIsNonBillable(!isNonBillable)}
                style={{ 
                  width: '16px',
                  height: '16px',
                  marginTop: '0'
                }}
              />
              <label className="form-check-label" htmlFor="nonBillable" style={{ fontSize: '14px', marginLeft: '8px' }}>
                Non-billable
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="showOnBill"
                checked={showOnBill}
                onChange={() => setShowOnBill(!showOnBill)}
                style={{ 
                  width: '16px',
                  height: '16px',
                  marginTop: '0'
                }}
              />
              <label className="form-check-label" htmlFor="showOnBill" style={{ fontSize: '14px', marginLeft: '8px' }}>
                Show this entry on the bill
              </label>
            </div>
          </div>

          {/* Description */}
          <div className="mb-3">
            <h6 className="fw-bold mb-2" style={{ fontSize: '14px' }}>Description</h6>
            <textarea className="form-control form-control-sm" rows="2" style={{ fontSize: '14px' }}></textarea>
          </div>
        </div>

        {/* Tax Section */}
        <div className="mb-4">
          <h6 className="fw-bold mb-2" style={{ fontSize: '16px' }}>Tax</h6>
          <div className="dropdown">
            <button 
              className="btn btn-outline-secondary btn-sm w-100 text-start d-flex justify-content-between align-items-center"
              onClick={() => setShowTaxDropdown(!showTaxDropdown)}
            >
              <span>(Default) Use tax applied to invoice</span>
              <BsChevronDown size={14} />
            </button>
            {showTaxDropdown && (
              <div className="dropdown-menu w-100 show" style={{ marginTop: '2px' }}>
                <div className="px-2 py-1">
                  <div className="dropdown-item" style={{ fontSize: '14px' }}>(Default) Use tax applied to invoice</div>
                  <div className="dropdown-item" style={{ fontSize: '14px' }}>No tax</div>
                  <div className="dropdown-item" style={{ fontSize: '14px' }}>Custom tax rate</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Matter Section */}
        <div className="mb-4">
          <h6 className="fw-bold mb-2" style={{ fontSize: '16px' }}>Matter</h6>
          <div className="dropdown mb-3">
            <button 
              className="btn btn-outline-secondary btn-sm w-100 text-start d-flex justify-content-between align-items-center"
              onClick={() => setShowMatterDropdown(!showMatterDropdown)}
            >
              <span>Find a matter</span>
              <BsChevronDown size={14} />
            </button>
            {showMatterDropdown && (
              <div className="dropdown-menu w-100 show" style={{ marginTop: '2px' }}>
                <div className="px-2 py-1">
                  <input type="text" className="form-control form-control-sm mb-1" placeholder="Search matters" />
                  <div className="dropdown-item" style={{ fontSize: '14px' }}>No matters found</div>
                </div>
              </div>
            )}
          </div>

          {/* Date */}
          <div className="mb-2">
            <div className="fw-bold" style={{ fontSize: '14px', marginBottom: '4px' }}>Date *</div>
            <div className="position-relative">
              <div 
                className="d-flex align-items-center" 
                style={{ 
                  padding: '6px 12px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '4px',
                  border: '1px solid #dee2e6',
                  cursor: 'pointer'
                }}
                onClick={() => setShowDatePicker(!showDatePicker)}
              >
                <span className="flex-grow-1">{formatDate(selectedDate)}</span>
                <BsCalendar size={14} className="text-muted" />
              </div>
              
              {showDatePicker && (
                <div className="position-absolute" style={{ zIndex: 10 }}>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => {
                      setSelectedDate(date);
                      setShowDatePicker(false);
                    }}
                    inline
                  />
                </div>
              )}
            </div>
          </div>

          {/* Firm User */}
          <div className="mb-2">
            <div className="fw-bold" style={{ fontSize: '14px', marginBottom: '4px' }}>Firm user *</div>
            <div className="dropdown">
              <button 
                className="btn btn-outline-secondary btn-sm w-100 text-start d-flex justify-content-between align-items-center"
                onClick={() => setShowFirmUserDropdown(!showFirmUserDropdown)}
                style={{
                  padding: '6px 12px',
                  backgroundColor: '#f8f9fa',
                  border: '1px solid #dee2e6',
                  borderRadius: '4px'
                }}
              >
                <span>aman patidar</span>
                <BsChevronDown size={14} />
              </button>
              {showFirmUserDropdown && (
                <div className="dropdown-menu w-100 show" style={{ marginTop: '2px' }}>
                  <div className="px-2 py-1">
                    <input type="text" className="form-control form-control-sm mb-1" placeholder="Search users" />
                    <div className="dropdown-item" style={{ fontSize: '14px' }}>aman patidar</div>
                    <div className="dropdown-item" style={{ fontSize: '14px' }}>Other User 1</div>
                    <div className="dropdown-item" style={{ fontSize: '14px' }}>Other User 2</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="d-flex flex-wrap justify-content-between gap-2 pt-2">
          <div className="d-flex gap-2">
            <button className="btn btn-primary btn-sm fw-semibold">
              Save entry
            </button>
            <button className="btn btn-outline-primary btn-sm fw-semibold">
              Save and create another
            </button>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary btn-sm fw-semibold">
              Save and duplicate
            </button>
            <button className="btn btn-outline-secondary btn-sm fw-semibold" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewExpenseModals;