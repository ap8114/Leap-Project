import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecordPayment.css';

const RecordPayment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    client: '',
    paymentSource: '',
    paymentDate: '2025-07-10',
    reference: '',
    depositAccount: '',
    paper: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCancel = () => {
    navigate(-1); // Goes back to previous page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // navigate('/success-page'); // Uncomment to navigate after submission
  };

  return (
    <div className="w-100 record-payment-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <button 
          className="btn btn-back"
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </button>
        <h1>Record payment</h1>
        <div style={{ width: '70px' }}></div> {/* Spacer for alignment */}
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h2 className="required">Client</h2>
          <div className="form-row">
            <input 
              type="text" 
              className="form-control"
              placeholder="Type to search client"
              name="client"
              value={formData.client}
              onChange={handleChange}
              required
            />
          </div>
          <p>Select a client to record a payment.</p>
        </div>
        
        <div className="form-section">
          <h2 className="required">Payment source</h2>
          <div className="form-row">
            <select
              className="form-select"
              name="paymentSource"
              value={formData.paymentSource}
              onChange={handleChange}
              required
            >
              <option value="">Select payment source</option>
              <option value="credit-card">Credit Card</option>
              <option value="bank-transfer">Bank Transfer</option>
              <option value="cash">Cash</option>
              <option value="check">Check</option>
            </select>
          </div>
        </div>
        
        <div className="form-section">
          <h2 className="required">Payment date</h2>
          <div className="form-row">
            <input 
              type="date" 
              className="form-control"
              name="paymentDate"
              value={formData.paymentDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="form-section">
          <h2>Reference</h2>
          <div className="form-row">
            <input 
              type="text" 
              className="form-control"
              placeholder="Enter a checking or reference # here"
              name="reference"
              value={formData.reference}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="form-section">
          <h2 className="required">Deposit Account</h2>
          <div className="form-row">
            <select
              className="form-select"
              name="depositAccount"
              value={formData.depositAccount}
              onChange={handleChange}
              required
            >
              <option value="">Select deposit account</option>
              <option value="main">Main Account</option>
              <option value="operating">Operating Account</option>
            </select>
          </div>
        </div>
        
        <div className="form-section">
          <h2>Paper</h2>
          <div className="form-row">
            <input 
              type="text" 
              className="form-control"
              placeholder="Who made the payment?"
              name="paper"
              value={formData.paper}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="divider my-4"></div>
        
        <h2>Select a client to record a payment.</h2>
        
        <table className="table payment-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Write offs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
        
        <table className="table summary-table">
          <thead>
            <tr>
              <th>Summary</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Payments:</td>
              <td></td>
            </tr>
            <tr>
              <td>Write offs:</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
        
        <div className="button-container mt-4">
          <button 
            type="button"
            className="btn btn-secondary me-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="btn btn-primary"
          >
            Record payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecordPayment;