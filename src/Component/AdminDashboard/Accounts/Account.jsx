import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileInvoice, 
  faCreditCard, 
  faUndo, 
  faReceipt,
  faDownload,
  faChartBar,
  faShieldAlt,
  faUniversity
} from '@fortawesome/free-solid-svg-icons';

const Account = () => {
  const [activeTab, setActiveTab] = useState('invoices');
  const [invoiceFilter, setInvoiceFilter] = useState('all');
  
  const tabData = {
    invoices: [
      { id: 'INV-001', client: 'Johnson & Associates', amount: '$2,500.00', status: 'Paid', date: '2024-01-15' },
      { id: 'INV-002', client: 'Smith Legal Group', amount: '$3,750.00', status: 'Pending', date: '2024-01-18' },
      { id: 'INV-003', client: 'Davis Corporation', amount: '$1,200.00', status: 'Issued', date: '2024-01-20' },
      { id: 'INV-004', client: 'Wilson & Partners', amount: '$4,100.00', status: 'Paid', date: '2024-01-22' },
    ],
    payments: [
      { id: 'PAY-001', client: 'Johnson & Associates', amount: '$2,500.00', method: 'Bank Transfer', date: '2024-01-16' },
      { id: 'PAY-002', client: 'Wilson & Partners', amount: '$4,100.00', method: 'Check', date: '2024-01-23' },
      { id: 'PAY-003', client: 'Brown LLC', amount: '$1,800.00', method: 'Credit Card', date: '2024-01-25' },
    ],
    refunds: [
      { id: 'REF-001', client: 'Taylor Industries', amount: '$750.00', reason: 'Service Cancellation', date: '2024-01-12' },
      { id: 'REF-002', client: 'Miller Group', amount: '$1,250.00', reason: 'Overpayment', date: '2024-01-19' },
    ],
    expenses: [
      { id: 'EXP-001', category: 'Office Supplies', amount: '$245.00', vendor: 'Office Depot', date: '2024-01-10' },
      { id: 'EXP-002', category: 'Software License', amount: '$599.00', vendor: 'Adobe Systems', date: '2024-01-14' },
      { id: 'EXP-003', category: 'Travel', amount: '$1,200.00', vendor: 'Delta Airlines', date: '2024-01-21' },
    ]
  };

  const getFilteredInvoices = () => {
    if (invoiceFilter === 'all') return tabData.invoices;
    return tabData.invoices.filter(invoice => 
      invoice.status.toLowerCase() === invoiceFilter
    );
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Paid': return 'badge bg-success';
      case 'Pending': return 'badge bg-warning text-dark';
      case 'Issued': return 'badge bg-custom';
      default: return 'badge bg-secondary';
    }
  };

  const renderTableContent = () => {
    switch (activeTab) {
      case 'invoices':
        const invoices = getFilteredInvoices();
        return (
          <div className="table-responsive">
            <div className="mb-4 btn-group">
              <button
                onClick={() => setInvoiceFilter('all')}
                className={`btn btn-sm ${invoiceFilter === 'all' ? 'btn-custom' : 'btn-outline-secondary'}`}
              >
                All
              </button>
              <button
                onClick={() => setInvoiceFilter('issued')}
                className={`btn btn-sm ${invoiceFilter === 'issued' ? 'btn-custom' : 'btn-outline-secondary'}`}
              >
                Issued
              </button>
              <button
                onClick={() => setInvoiceFilter('paid')}
                className={`btn btn-sm ${invoiceFilter === 'paid' ? 'btn-custom' : 'btn-outline-secondary'}`}
              >
                Paid
              </button>
              <button
                onClick={() => setInvoiceFilter('pending')}
                className={`btn btn-sm ${invoiceFilter === 'pending' ? 'btn-custom' : 'btn-outline-secondary'}`}
              >
                Pending
              </button>
            </div>
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th scope="col">Invoice ID</th>
                  <th scope="col">Client</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td className="fw-medium">{invoice.id}</td>
                    <td>{invoice.client}</td>
                    <td className="fw-semibold">{invoice.amount}</td>
                    <td>
                      <span className={getStatusBadge(invoice.status)}>
                        {invoice.status}
                      </span>
                    </td>
                    <td>{invoice.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'payments':
        return (
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th scope="col">Payment ID</th>
                  <th scope="col">Client</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Method</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {tabData.payments.map((payment) => (
                  <tr key={payment.id}>
                    <td className="fw-medium">{payment.id}</td>
                    <td>{payment.client}</td>
                    <td className="fw-semibold text-success">{payment.amount}</td>
                    <td>{payment.method}</td>
                    <td>{payment.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'refunds':
        return (
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th scope="col">Refund ID</th>
                  <th scope="col">Client</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Reason</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {tabData.refunds.map((refund) => (
                  <tr key={refund.id}>
                    <td className="fw-medium">{refund.id}</td>
                    <td>{refund.client}</td>
                    <td className="fw-semibold text-danger">-{refund.amount}</td>
                    <td>{refund.reason}</td>
                    <td>{refund.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'expenses':
        return (
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th scope="col">Expense ID</th>
                  <th scope="col">Category</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Vendor</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {tabData.expenses.map((expense) => (
                  <tr key={expense.id}>
                    <td className="fw-medium">{expense.id}</td>
                    <td>{expense.category}</td>
                    <td className="fw-semibold text-danger">-{expense.amount}</td>
                    <td>{expense.vendor}</td>
                    <td>{expense.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-vh-100 bg-light">
      <div className="container py-4">
        {/* Page Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center gap-3">
            <h1 className="mb-0">Accounts</h1>
            <span className="badge bg-success">New</span>
          </div>
          <div className="d-flex gap-3">
            <button className="btn btn-outline-secondary">
              <FontAwesomeIcon icon={faDownload} className="me-2" />
              Export Report
            </button>
            <button className="btn btn-custom">
              <FontAwesomeIcon icon={faChartBar} className="me-2" />
              Go to Reports
            </button>
          </div>
        </div>

        {/* Balance Overview Section */}
        <div className="row mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="text-muted mb-2">Trust Account Balance</p>
                    <h2 className="mb-0">$127,450.00</h2>
                  </div>
                  <div className="p-3 bg-custom bg-opacity-10 rounded">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-custom fs-3" />
                  </div>
                </div>
                <div className="mt-3 d-flex align-items-center">
                  <span className="text-success fw-medium me-2">+2.5%</span>
                  <span className="text-muted">from last month</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="text-muted mb-2">Operating Account Balance</p>
                    <h2 className="mb-0">$45,280.00</h2>
                  </div>
                  <div className="p-3 bg-success bg-opacity-10 rounded">
                    <FontAwesomeIcon icon={faUniversity} className="text-success fs-3" />
                  </div>
                </div>
                <div className="mt-3 d-flex align-items-center">
                  <span className="text-success fw-medium me-2">+1.8%</span>
                  <span className="text-muted">from last month</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction Tabs Container */}
        <div className="card">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 'invoices' ? 'active' : ''}`}
                  onClick={() => setActiveTab('invoices')}
                >
                  <FontAwesomeIcon icon={faFileInvoice} className="me-2" />
                  Invoices
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 'payments' ? 'active' : ''}`}
                  onClick={() => setActiveTab('payments')}
                >
                  <FontAwesomeIcon icon={faCreditCard} className="me-2" />
                  Payments Received
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 'refunds' ? 'active' : ''}`}
                  onClick={() => setActiveTab('refunds')}
                >
                  <FontAwesomeIcon icon={faUndo} className="me-2" />
                  Refunds Issued
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 'expenses' ? 'active' : ''}`}
                  onClick={() => setActiveTab('expenses')}
                >
                  <FontAwesomeIcon icon={faReceipt} className="me-2" />
                  Expense Records
                </button>
              </li>
            </ul>
          </div>
          <div className="card-body">
            {renderTableContent()}
            
            {/* Pagination */}
            <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
              <div className="text-muted">
                Showing 1 to 10 of 97 results
              </div>
              <nav aria-label="Page navigation">
                <ul className="pagination mb-0">
                  <li className="page-item">
                    <button className="page-link">Previous</button>
                  </li>
                  <li className="page-item active">
                    <button className="page-link">1</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">2</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">3</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">Next</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;