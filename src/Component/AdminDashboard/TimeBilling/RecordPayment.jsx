import React, { useState } from 'react';
import './RecordPayment.css'; // We'll create this CSS file next

const RecordPayment = () => {
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

  return (
    <div className="record-payment-container">
      <h1>Record payment</h1>
      
      <div className="form-section">
        <h2 className="required">Client</h2>
        <div className="form-row">
          <input 
            type="text" 
            placeholder="Type to search client"
            name="client"
            value={formData.client}
            onChange={handleChange}
          />
        </div>
        <p>Select a client to record a payment.</p>
      </div>
      
      <div className="form-section">
        <h2 className="required">Payment source</h2>
        <div className="form-row">
          <select
            name="paymentSource"
            value={formData.paymentSource}
            onChange={handleChange}
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
            name="paymentDate"
            value={formData.paymentDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <select
            name="depositAccount"
            value={formData.depositAccount}
            onChange={handleChange}
          >
            <option value="">Select deposit account</option>
            <option value="checking">Checking Account</option>
            <option value="savings">Savings Account</option>
          </select>
        </div>
      </div>
      
      <div className="form-section">
        <h2>Reference</h2>
        <div className="form-row">
          <input 
            type="text" 
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
            name="depositAccount"
            value={formData.depositAccount}
            onChange={handleChange}
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
            placeholder="Who made the payment?"
            name="paper"
            value={formData.paper}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="divider"></div>
      
      <h2>Select a client to record a payment.</h2>
      
      <table className="payment-table">
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
      
      <table className="summary-table">
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
      
      <div className="button-container">
        <button className="btn btn-secondary">Cancel</button>
        <button className="btn btn-primary">Record payment</button>
      </div>
    </div>
  );
};

export default RecordPayment;