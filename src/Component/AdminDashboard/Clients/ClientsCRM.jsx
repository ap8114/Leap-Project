import React, { useState } from 'react';


const initialClients = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91-9876543210',
    onboardingStatus: 'Completed',
    intakeFormSigned: true,
    notes: ['Called for onboarding', 'Sent intake form link'],
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya@example.com',
    phone: '+91-9988776655',
    onboardingStatus: 'Pending',
    intakeFormSigned: false,
    notes: ['Waiting for e-sign on form'],
  },
];

const ClientsCRM = () => {
  const [clients, setClients] = useState(initialClients);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newClient, setNewClient] = useState({ name: '', email: '', phone: '' });

  const handleAddClient = () => {
    const newEntry = {
      ...newClient,
      id: Date.now(),
      onboardingStatus: 'Pending',
      intakeFormSigned: false,
      notes: [],
    };
    setClients([...clients, newEntry]);
    setNewClient({ name: '', email: '', phone: '' });
    setIsModalOpen(false);
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Clients / CRM</h2>
        <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
          <i className="fas fa-user-plus me-2"></i>Add New Client
        </button>
      </div>

      {/* Clients List */}
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {clients.map((client) => (
          <div className="col" key={client.id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{client.name}</h5>
                <p className="mb-1"><strong>Email:</strong> {client.email}</p>
                <p className="mb-2"><strong>Phone:</strong> {client.phone}</p>
                
                <div className="mb-2">
                  <span className="badge bg-success me-1">
                    Onboarding: {client.onboardingStatus}
                  </span>
                  <span className={`badge ${client.intakeFormSigned ? 'bg-info' : 'bg-secondary'}`}>
                    Intake: {client.intakeFormSigned ? 'Signed' : 'Pending'}
                  </span>
                </div>

                <div>
                  <strong className="d-block mb-1">Communication Logs:</strong>
                  <ul className="ps-3 small mb-0">
                    {client.notes.length ? (
                      client.notes.map((note, idx) => (
                        <li key={idx}>{note}</li>
                      ))
                    ) : (
                      <li className="text-muted">No logs yet</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Client Modal */}
      {isModalOpen && (
        <div className="modal d-block fade show" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Client</h5>
                <button type="button" className="btn-close" onClick={() => setIsModalOpen(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    className="form-control"
                    value={newClient.name}
                    onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={newClient.email}
                    onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    className="form-control"
                    value={newClient.phone}
                    onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button className="btn btn-primary" onClick={handleAddClient}>Save Client</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientsCRM;
