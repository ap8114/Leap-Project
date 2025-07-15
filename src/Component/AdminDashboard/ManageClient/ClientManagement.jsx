import React from 'react';
import ClientTable from './ClientTable';

const ClientManagement = () => {
  return (
    <div className="container-fluid py-4">
      <div className="row mb-4">
        <div className="col-12">
           <h1 className="fw-bold m-0 ms-2"  style={{ fontSize: "2rem", fontWeight: "700" }}>Client Management</h1>
          {/* <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li className="breadcrumb-item active" aria-current="page">Clients</li>
            </ol>
          </nav> */}
        </div>
      </div>
      <ClientTable />
    </div>
  );
};

export default ClientManagement;