import React from "react";
import { Person, Envelope, Clock, Telephone, People, CashCoin, PersonCheck } from "react-bootstrap-icons";

const UserProfile = () => {
  return (
    <div className="container mt-4" style={{ maxWidth: "800px" }}>
      <div className="card shadow-sm">
        <div className="card-header bg-light">
          <h1 className="h4 mb-0">Kundan Kelwa</h1>
          <p className="mb-0 text-muted">Law Office of Kundan Kelwa</p>
        </div>

        <div className="card-body">
          <h2 className="h5 mb-3">
            <i className="bi bi-image me-2"></i>Edit Pictures
          </h2>

          <div className="mb-4">
            <h3 className="h6 mb-3">User Information</h3>
            <div className="table-responsive">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td className="d-flex align-items-center">
                      <Person className="me-2" /> Job Title
                    </td>
                    <td>-</td>
                    <td>Rolex</td>
                    <td>Administrator</td>
                  </tr>
                  <tr>
                    <td className="d-flex align-items-center">
                      <Envelope className="me-2" /> Email
                    </td>
                    <td colSpan="3">kundankelwa8675@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="d-flex align-items-center">
                      <Telephone className="me-2" /> Phone
                    </td>
                    <td>-</td>
                    <td className="d-flex align-items-center">
                      <Clock className="me-2" /> Time Zone
                    </td>
                    <td>Pacific Time (US & Canada)</td>
                  </tr>
                  <tr>
                    <td className="d-flex align-items-center">
                      <People className="me-2" /> Groups
                    </td>
                    <td>$0.00</td>
                    <td className="d-flex align-items-center">
                      <PersonCheck className="me-2" /> Subscription
                    </td>
                    <td>Attorney</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <hr className="my-4" />

          <div className="mb-3">
            <h3 className="h6 mb-3">Firm Feed</h3>
            <div className="card">
              <div className="card-body">
                <h4 className="h6">Description</h4>
                <p className="text-muted mb-0">No Results</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-footer text-muted small">
          Last Login: 07/12/2025
        </div>
      </div>
    </div>
  );
};

export default UserProfile;