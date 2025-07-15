import React, { useState } from 'react';
import { Modal, Button, Form, Table, Dropdown, Pagination } from 'react-bootstrap';
import ClientRow from './ClientRow';
import ClientProfileModal from './ClientProfileModal';
import DeleteConfirmModal from './DeleteConfirmModal';
import AddClientModal from './AddClientModal';

const ClientTable = () => {
  const [clients, setClients] = useState([
    {
      id: 1,
      name: 'James Sullivan',
      initials: 'JS',
      email: 'james.sullivan@lawfirm.com',
      phone: '+1 (555) 123-4567',
      status: 'active',
      firmSize: 'Large (50+ attorneys)',
      color: 'custom'
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      initials: 'MR',
      email: 'maria.rodriguez@associates.com',
      phone: '+1 (555) 987-6543',
      status: 'active',
      firmSize: 'Medium (10-49 attorneys)',
      color: 'secondary'
    },
    {
      id: 3,
      name: 'David Wilson',
      initials: 'DW',
      email: 'david.wilson@solopractice.com',
      phone: '+1 (555) 456-7890',
      status: 'pending',
      firmSize: 'Solo Practice',
      color: 'warning'
    },
    {
      id: 4,
      name: 'Sarah Chen',
      initials: 'SC',
      email: 'sarah.chen@corporatelaw.com',
      phone: '+1 (555) 234-5678',
      status: 'active',
      firmSize: 'Large (50+ attorneys)',
      color: 'info'
    },
    {
      id: 5,
      name: 'Robert Thompson',
      initials: 'RT',
      email: 'robert.thompson@familylaw.com',
      phone: '+1 (555) 345-6789',
      status: 'inactive',
      firmSize: 'Small (2-9 attorneys)',
      color: 'success'
    }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [clientToDelete, setClientToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStatusChange = (clientId, newStatus) => {
    setClients(clients.map(client =>
      client.id === clientId ? { ...client, status: newStatus } : client
    ));
  };

  const handleDeleteClient = (clientId) => {
    setClients(clients.filter(client => client.id !== clientId));
    setClientToDelete(null);
  };

  const handleAddClient = (newClient) => {
    const newId = Math.max(...clients.map(c => c.id), 0) + 1;
    setClients([...clients, { ...newClient, id: newId }]);
    setShowAddModal(false);
  };

  return (
    <div className="container-fluid">
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-8 mb-3 mb-md-0">
              <div className="input-group">
                {/* <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search clients by name, email, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-4 text-md-end">
              <Button variant="custom" onClick={() => setShowAddModal(true)}>
                <i className="bi bi-plus me-2"></i>Add Client
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="table-responsive">
          <Table hover className="mb-0">
            <thead className="table-light">
              <tr>
                <th>Client Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Status</th>
                <th>Firm Size</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map(client => (
                <ClientRow
                  key={client.id}
                  client={client}
                  onView={() => setSelectedClient(client)}
                  onStatusChange={handleStatusChange}
                  onDelete={() => setClientToDelete(client)}
                />
              ))}
            </tbody>
          </Table>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <div className="text-muted ">
            Showing <span className="fw-bold ">1</span> to <span className="fw-bold">5</span> of{' '}
            <span className="fw-bold">47</span> results
          </div>
          <Pagination >
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>
      </div>

      <AddClientModal
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        onSave={handleAddClient}
      />

      {selectedClient && (
        <ClientProfileModal
          client={selectedClient}
          onHide={() => setSelectedClient(null)}
        />
      )}

      {clientToDelete && (
        <DeleteConfirmModal
          client={clientToDelete}
          onHide={() => setClientToDelete(null)}
          onConfirm={() => handleDeleteClient(clientToDelete.id)}
        />
      )}
    </div>
  );
};

export default ClientTable;