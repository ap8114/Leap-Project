import React, { useState } from 'react';

const Client = () => {
  const [clients, setClients] = useState([
    {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@example.com',
      phone: '(555) 123-4567',
      address: '123 Main St, New York, NY 10001',
      status: 'Active',
      lastContact: '2025-07-01'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      phone: '(555) 987-6543',
      address: '456 Park Ave, Boston, MA 02108',
      status: 'Active',
      lastContact: '2025-07-05'
    },
    {
      id: '3',
      name: 'Michael Brown',
      email: 'michael.b@example.com',
      phone: '(555) 456-7890',
      address: '789 Oak St, Chicago, IL 60601',
      status: 'Pending',
      lastContact: '2025-06-28'
    },
    {
      id: '4',
      name: 'Emily Davis',
      email: 'emily.d@example.com',
      phone: '(555) 234-5678',
      address: '321 Pine St, San Francisco, CA 94101',
      status: 'Active',
      lastContact: '2025-07-06'
    },
    {
      id: '5',
      name: 'Robert Wilson',
      email: 'robert.w@example.com',
      phone: '(555) 876-5432',
      address: '654 Maple Ave, Austin, TX 78701',
      status: 'Pending',
      lastContact: '2025-06-25'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [newClient, setNewClient] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    status: 'Pending'
  });

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.includes(searchTerm)
  );

  const handleAddClient = () => {
    const today = new Date().toISOString().split('T')[0];
    const newId = (Math.max(...clients.map(c => parseInt(c.id))) + 1).toString();

    const clientToAdd = {
      ...newClient,
      id: newId,
      lastContact: today
    };

    setClients([...clients, clientToAdd]);
    setNewClient({
      name: '',
      email: '',
      phone: '',
      address: '',
      status: 'Pending'
    });
    setShowAddForm(false);
  };

  const handleUpdateClient = () => {
    if (!editingClient) return;

    setClients(clients.map(client =>
      client.id === editingClient.id ? editingClient : client
    ));

    setEditingClient(null);
  };

  const handleDeleteClient = (id) => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      setClients(clients.filter(client => client.id !== id));
    }
  };

  return (
    <div className="container-fluid p-4">
      <div className="p-4">
        <div className="col">
           <h1 className="display-6 fw-bold mb-2">Client</h1>
          <p className="text-muted">Manage your clients and their information</p>
        </div>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="input-group">
               
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search clients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                
                />
              </div>
            </div>
            <div className="col-md-6 text-md-end">
              <button
                onClick={() => setShowAddForm(true)}
                className="btn btn-primary"
              >
                <i className="fas fa-plus me-2"></i>
                Add New Client
              </button>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Client</th>
                  <th>Contact Info</th>
                  <th>Status</th>
                  <th>Last Contact</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.length > 0 ? (
                  filteredClients.map((client) => (
                    <tr key={client.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                            <span className="text-primary fw-medium">
                              {client.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="fw-medium">{client.name}</div>
                            <div className="text-muted small">{client.address}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>{client.email}</div>
                        <div className="text-muted small">{client.phone}</div>
                      </td>
                      <td>
                        <span className={`badge ${client.status === 'Active' ? 'bg-success' : 'bg-warning'}`}>
                          {client.status}
                        </span>
                      </td>
                      <td>
                        {new Date(client.lastContact).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </td>
                      <td className="text-end">
                        <div className="d-flex justify-content-end gap-2">
                          <button 
                            onClick={() => setEditingClient(client)}
                            className="btn btn-link text-primary"
                            title="Edit Client"
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          <button 
                            className="btn btn-link text-info"
                            title="View Details"
                          >
                            <i className="fas fa-eye"></i>
                          </button>
                         
                          <button 
                            onClick={() => handleDeleteClient(client.id)}
                            className="btn btn-link text-danger"
                            title="Delete Client"
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center py-5 text-muted">
                      No clients found matching your search criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          <div className="card-footer text-muted">
            Showing <span className="fw-medium">{filteredClients.length}</span> of <span className="fw-medium">{clients.length}</span> clients
          </div>
        </div>
      </div>
{/* add modal */}
    {showAddForm && (
  <>
    <div className="modal fade show d-block mt-5 " tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg mt-3" role="document">
    <div className="modal-content" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
      <div className="modal-header">
        <h5 className="modal-title">Add New Client</h5>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => setShowAddForm(false)}
        ></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={newClient.name}
                onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={newClient.email}
                onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={newClient.phone}
                onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="address" className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={newClient.address}
                onChange={(e) => setNewClient({ ...newClient, address: e.target.value })}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Status</label>
              <div className="btn-group w-100 gap-2" role="group">
                <button
                  type="button"
                  className={`btn ${newClient.status === 'Active' ? 'btn-success' : 'btn-outline-success '}`}
                  onClick={() => setNewClient({ ...newClient, status: 'Active' })}
                >
                  Active
                </button>
                <button
                  type="button"
                  className={`btn ${newClient.status === 'Pending' ? 'btn-warning' : 'btn-outline-warning'}`}
                  onClick={() => setNewClient({ ...newClient, status: 'Pending' })}
                >
                  Pending
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="modal-footer flex-column flex-sm-row gap-2">
        <button type="button" className="btn btn-secondary w-100 w-sm-auto" onClick={() => setShowAddForm(false)}>
          Cancel
        </button>
        <button type="button" className="btn btn-primary w-100 w-sm-auto" onClick={handleAddClient}>
          Save Client
        </button>
      </div>
    </div>
  </div>
</div>

    {/* Backdrop */}
    <div className="modal-backdrop fade show"></div>
  </>
)}


      {/* Edit Client Modal */}
 {editingClient && (
  <>
    <div className="modal fade show d-block mt-5 py-5" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h5 className="modal-title fs-5">Edit Client</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => setEditingClient(null)}
            ></button>
          </div>

          {/* Modal Body - Mobile Optimized Form */}
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="edit-name" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="edit-name"
                  value={editingClient.name}
                  onChange={(e) => setEditingClient({ ...editingClient, name: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="edit-email" className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="edit-email"
                  value={editingClient.email}
                  onChange={(e) => setEditingClient({ ...editingClient, email: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="edit-phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control form-control-lg"
                  id="edit-phone"
                  value={editingClient.phone}
                  onChange={(e) => setEditingClient({ ...editingClient, phone: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="edit-address" className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="edit-address"
                  value={editingClient.address}
                  onChange={(e) => setEditingClient({ ...editingClient, address: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Status</label>
                <div className="d-grid gap-2 d-md-block">
                  <button
                    type="button"
                    className={`btn ${editingClient.status === 'Active' ? 'btn-success' : 'btn-outline-success'} w-100 mb-2`}
                    onClick={() => setEditingClient({ ...editingClient, status: 'Active' })}
                  >
                    Active
                  </button>
                  <button
                    type="button"
                    className={`btn ${editingClient.status === 'Pending' ? 'btn-warning' : 'btn-outline-warning'} w-100`}
                    onClick={() => setEditingClient({ ...editingClient, status: 'Pending' })}
                  >
                    Pending
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Modal Footer - Mobile Friendly Buttons */}
          <div className="modal-footer d-block d-md-flex">
            <button
              type="button"
              className="btn btn-secondary w-100 mb-2 mb-md-0 me-md-2"
              onClick={() => setEditingClient(null)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={handleUpdateClient}
            >
              Update Client
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Backdrop */}
    <div className="modal-backdrop fade show"></div>
  </>
)}

    </div>
  );
};

export default Client;