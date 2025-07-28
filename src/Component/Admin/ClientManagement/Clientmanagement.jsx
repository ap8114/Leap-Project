import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, faSearch, faChevronDown, faSort, faEdit, faEye, 
  faArchive, faUndo, faPaperclip, faTimes, faCloudUploadAlt, 
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';

const ClientManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add' or 'edit'
  const [selectedClient, setSelectedClient] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    emergency: false,
    accident: false,
    vehicle: false,
    history: false,
    documents: false,
  });

  const [clients, setClients] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      contact: '+44 7700 900123',
      dateOfBirth: '1985-03-15',
      caseCategory: 'Road Traffic Accident',
      status: 'Active',
      assignedSolicitor: 'Sarah Johnson',
      dateAdded: '2024-01-15',
    },
    {
      id: 2,
      name: 'Emma Wilson',
      email: 'emma.wilson@email.com',
      contact: '+44 7700 900456',
      dateOfBirth: '1990-07-22',
      caseCategory: 'Medical Negligence',
      status: 'Active',
      assignedSolicitor: 'Michael Brown',
      dateAdded: '2024-01-20',
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    contact: '',
    dateOfBirth: '',
    nextOfKin: { name: '', contact: '', relation: '' },
    gpDetails: { name: '', address: '', phone: '' },
    hospitalDetails: '',
    accidentDetails: { date: '', description: '', location: '' },
    injuries: { shortTerm: '', longTerm: '', description: '', severity: '' },
    thirdPartyDetails: { insurer: '', regNumber: '', contactInfo: '' },
    ownInsurance: { policyNumber: '', provider: '', expiry: '' },
    vehicleDetails: { make: '', model: '', regNumber: '', year: '' },
    pastAccidents: { date: '', summary: '', policeReport: '' },
    caseCategory: '',
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleInputChange = (field, value, section) => {
    if (section) {
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleSubmit = () => {
    if (modalMode === 'add') {
      const newClient = {
        id: clients.length + 1,
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        dateOfBirth: formData.dateOfBirth,
        caseCategory: formData.caseCategory,
        status: 'Active',
        assignedSolicitor: 'Unassigned',
        dateAdded: new Date().toISOString().split('T')[0],
      };
      setClients(prev => [...prev, newClient]);
    } else {
      setClients(prev => prev.map(client => 
        client.id === selectedClient?.id 
          ? { 
              ...client, 
              name: formData.name, 
              email: formData.email, 
              contact: formData.contact, 
              dateOfBirth: formData.dateOfBirth, 
              caseCategory: formData.caseCategory 
            }
          : client
      ));
    }
    setShowModal(false);
    setFormData({
      name: '',
      address: '',
      email: '',
      contact: '',
      dateOfBirth: '',
      nextOfKin: { name: '', contact: '', relation: '' },
      gpDetails: { name: '', address: '', phone: '' },
      hospitalDetails: '',
      accidentDetails: { date: '', description: '', location: '' },
      injuries: { shortTerm: '', longTerm: '', description: '', severity: '' },
      thirdPartyDetails: { insurer: '', regNumber: '', contactInfo: '' },
      ownInsurance: { policyNumber: '', provider: '', expiry: '' },
      vehicleDetails: { make: '', model: '', regNumber: '', year: '' },
      pastAccidents: { date: '', summary: '', policeReport: '' },
      caseCategory: '',
    });
  };

  const toggleClientStatus = (id) => {
    setClients(prev => prev.map(client =>
      client.id === id
        ? { ...client, status: client.status === 'Active' ? 'Archived' : 'Active' }
        : client
    ));
  };

  return (
    <div className="min-vh-100 bg-light">
      {/* Header */}
      <div className="bg-light ">
        <div className="container-fluid py-3">
          <div className="d-flex align-items-center justify-content-between">
            <h2 className=" fw-semibold mb-0 text-dark">Client Management</h2>
            <button
              onClick={() => setShowModal(true)}
              className="btn btn-primary"
            >
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Add New Client
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid py-4">
        {/* Search and Filter */}
        <div className="card mb-4">
          <div className="card-body">
            <div className="row g-3 align-items-center">
              <div className="col-md-5">
                <div className="input-group">
                  
                  <input
                    type="text"
                    placeholder="Search clients..."
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <select className="form-select">
                  <option>All Categories</option>
                  <option>Road Traffic Accident</option>
                  <option>Medical Negligence</option>
                  <option>Workplace Injury</option>
                </select>
              </div>
              <div className="col-md-2">
                <select className="form-select">
                  <option>All Statuses</option>
                  <option>Active</option>
                  <option>Archived</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Client Table */}
        <div className="card">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th className="cursor-pointer">
                    Client Name <FontAwesomeIcon icon={faSort} className="ms-1" />
                  </th>
                  <th className="cursor-pointer">
                    Case Category <FontAwesomeIcon icon={faSort} className="ms-1" />
                  </th>
                  <th className="cursor-pointer">
                    Date Added <FontAwesomeIcon icon={faSort} className="ms-1" />
                  </th>
                  <th className="cursor-pointer">
                    Status <FontAwesomeIcon icon={faSort} className="ms-1" />
                  </th>
                  <th className="cursor-pointer">
                    Assigned Solicitor <FontAwesomeIcon icon={faSort} className="ms-1" />
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.id}>
                    <td>
                      <div className="fw-medium">{client.name}</div>
                      <div className="text-muted small">{client.email}</div>
                    </td>
                    <td>
                      <span className="badge bg-primary bg-opacity-10 text-primary">
                        {client.caseCategory}
                      </span>
                    </td>
                    <td>{new Date(client.dateAdded).toLocaleDateString('en-GB')}</td>
                    <td>
                      <span className={`badge ${client.status === 'Active' ? 'bg-success bg-opacity-10 text-success' : 'bg-secondary bg-opacity-10 text-secondary'}`}>
                        {client.status}
                      </span>
                    </td>
                    <td>{client.assignedSolicitor}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button 
                          onClick={() => {
                            setModalMode('edit');
                            setSelectedClient(client);
                            setFormData({
                              ...formData,
                              name: client.name,
                              email: client.email,
                              contact: client.contact,
                              dateOfBirth: client.dateOfBirth,
                              caseCategory: client.caseCategory
                            });
                            setShowModal(true);
                          }}
                          className="btn btn-sm btn-link text-primary"
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button 
                          onClick={() => {
                            setSelectedClient(client);
                            setShowViewModal(true);
                          }}
                          className="btn btn-sm btn-link text-success"
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          onClick={() => toggleClientStatus(client.id)}
                          className={`btn btn-sm btn-link ${client.status === 'Active' ? 'text-secondary' : 'text-success'}`}
                        >
                          <FontAwesomeIcon icon={client.status === 'Active' ? faArchive : faUndo} />
                        </button>
                        <button className="btn btn-sm btn-link text-purple">
                          <FontAwesomeIcon icon={faPaperclip} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="card-footer d-flex justify-content-between align-items-center">
            <div className="text-muted">
              Showing 1 to {clients.length} of {clients.length} entries
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-secondary btn-sm">
                Previous
              </button>
              <button className="btn btn-primary btn-sm">
                1
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* View Modal */}
      {showViewModal && selectedClient && (
        <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Client Details</h5>
                <button
                  onClick={() => setShowViewModal(false)}
                  className="btn-close"
                ></button>
              </div>
              <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label text-muted">Name</label>
                    <p>{selectedClient.name}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted">Email</label>
                    <p>{selectedClient.email}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted">Contact Number</label>
                    <p>{selectedClient.contact}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted">Date of Birth</label>
                    <p>{selectedClient.dateOfBirth}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted">Case Category</label>
                    <p>{selectedClient.caseCategory}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted">Status</label>
                    <p>{selectedClient.status}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted">Assigned Solicitor</label>
                    <p>{selectedClient.assignedSolicitor}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted">Date Added</label>
                    <p>{selectedClient.dateAdded}</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => setShowViewModal(false)}
                  className="btn btn-secondary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalMode === 'add' ? 'Add New Client' : 'Edit Client'}</h5>
                <button
                  onClick={() => setShowModal(false)}
                  className="btn-close"
                ></button>
              </div>
              <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                <div className="accordion" id="clientFormAccordion">
                  {/* Basic Information */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${expandedSections.basic ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleSection('basic')}
                      >
                        Basic Information
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${expandedSections.basic ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <div className="row g-3">
                          <div className="col-md-6">
                            <label className="form-label">Name *</label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              className="form-control"
                              placeholder="Enter full name"
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Email *</label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="form-control"
                              placeholder="Enter email address"
                            />
                          </div>
                          <div className="col-12">
                            <label className="form-label">Address</label>
                            <textarea
                              value={formData.address}
                              onChange={(e) => handleInputChange('address', e.target.value)}
                              className="form-control"
                              rows={3}
                              placeholder="Enter full address including postcode"
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Contact Number</label>
                            <input
                              type="tel"
                              value={formData.contact}
                              onChange={(e) => handleInputChange('contact', e.target.value)}
                              className="form-control"
                              placeholder="Enter phone number"
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Date of Birth</label>
                            <input
                              type="date"
                              value={formData.dateOfBirth}
                              onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Emergency Contacts */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${expandedSections.emergency ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleSection('emergency')}
                      >
                        Emergency Contacts
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${expandedSections.emergency ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <div className="mb-4">
                          <h6 className="fw-bold mb-3">Next of Kin</h6>
                          <div className="row g-3">
                            <div className="col-md-4">
                              <label className="form-label">Name</label>
                              <input
                                type="text"
                                value={formData.nextOfKin.name}
                                onChange={(e) => handleInputChange('name', e.target.value, 'nextOfKin')}
                                className="form-control"
                                placeholder="Next of kin name"
                              />
                            </div>
                            <div className="col-md-4">
                              <label className="form-label">Contact Number</label>
                              <input
                                type="tel"
                                value={formData.nextOfKin.contact}
                                onChange={(e) => handleInputChange('contact', e.target.value, 'nextOfKin')}
                                className="form-control"
                                placeholder="Contact number"
                              />
                            </div>
                            <div className="col-md-4">
                              <label className="form-label">Relationship</label>
                              <input
                                type="text"
                                value={formData.nextOfKin.relation}
                                onChange={(e) => handleInputChange('relation', e.target.value, 'nextOfKin')}
                                className="form-control"
                                placeholder="Relationship to client"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <h6 className="fw-bold mb-3">GP Details</h6>
                          <div className="row g-3">
                            <div className="col-md-6">
                              <label className="form-label">GP Name</label>
                              <input
                                type="text"
                                value={formData.gpDetails.name}
                                onChange={(e) => handleInputChange('name', e.target.value, 'gpDetails')}
                                className="form-control"
                                placeholder="GP name"
                              />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label">GP Phone</label>
                              <input
                                type="tel"
                                value={formData.gpDetails.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value, 'gpDetails')}
                                className="form-control"
                                placeholder="GP phone number"
                              />
                            </div>
                            <div className="col-12">
                              <label className="form-label">GP Practice Address</label>
                              <textarea
                                value={formData.gpDetails.address}
                                onChange={(e) => handleInputChange('address', e.target.value, 'gpDetails')}
                                className="form-control"
                                rows={2}
                                placeholder="GP practice address including postcode"
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="form-label">Hospital Details</label>
                          <textarea
                            value={formData.hospitalDetails}
                            onChange={(e) => handleInputChange('hospitalDetails', e.target.value)}
                            className="form-control"
                            rows={2}
                            placeholder="Hospital name and address including postcode"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Accident Information */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${expandedSections.accident ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleSection('accident')}
                      >
                        Accident Information
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${expandedSections.accident ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <div className="row g-3 mb-4">
                          <div className="col-md-6">
                            <label className="form-label">Accident Date</label>
                            <input
                              type="date"
                              value={formData.accidentDetails.date}
                              onChange={(e) => handleInputChange('date', e.target.value, 'accidentDetails')}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Location</label>
                            <input
                              type="text"
                              value={formData.accidentDetails.location}
                              onChange={(e) => handleInputChange('location', e.target.value, 'accidentDetails')}
                              className="form-control"
                              placeholder="Accident location including postcode"
                            />
                          </div>
                          <div className="col-12">
                            <label className="form-label">Description</label>
                            <textarea
                              value={formData.accidentDetails.description}
                              onChange={(e) => handleInputChange('description', e.target.value, 'accidentDetails')}
                              className="form-control"
                              rows={3}
                              placeholder="Detailed description of the accident"
                            />
                          </div>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-3">Injuries</h6>
                          <div className="row g-3">
                            <div className="col-md-6">
                              <label className="form-label">Short-Term Injuries</label>
                              <textarea
                                value={formData.injuries.shortTerm}
                                onChange={(e) => handleInputChange('shortTerm', e.target.value, 'injuries')}
                                className="form-control"
                                rows={2}
                                placeholder="Short-term injuries sustained"
                              />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label">Long-Term Injuries</label>
                              <textarea
                                value={formData.injuries.longTerm}
                                onChange={(e) => handleInputChange('longTerm', e.target.value, 'injuries')}
                                className="form-control"
                                rows={2}
                                placeholder="Long-term injuries sustained"
                              />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label">Injury Description</label>
                              <textarea
                                value={formData.injuries.description}
                                onChange={(e) => handleInputChange('description', e.target.value, 'injuries')}
                                className="form-control"
                                rows={2}
                                placeholder="Detailed medical description of injuries"
                              />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label">Severity</label>
                              <select
                                value={formData.injuries.severity}
                                onChange={(e) => handleInputChange('severity', e.target.value, 'injuries')}
                                className="form-select"
                              >
                                <option value="">Select severity</option>
                                <option value="Minor">Minor</option>
                                <option value="Moderate">Moderate</option>
                                <option value="Severe">Severe</option>
                                <option value="Critical">Critical</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vehicle & Insurance */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${expandedSections.vehicle ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleSection('vehicle')}
                      >
                        Vehicle & Insurance
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${expandedSections.vehicle ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <div className="mb-4">
                          <h6 className="fw-bold mb-3">Third Party Details</h6>
                          <div className="row g-3">
                            <div className="col-md-4">
                              <label className="form-label">Insurer</label>
                              <input
                                type="text"
                                value={formData.thirdPartyDetails.insurer}
                                onChange={(e) => handleInputChange('insurer', e.target.value, 'thirdPartyDetails')}
                                className="form-control"
                                placeholder="Third party insurer"
                              />
                            </div>
                            <div className="col-md-4">
                              <label className="form-label">Registration Number</label>
                              <input
                                type="text"
                                value={formData.thirdPartyDetails.regNumber}
                                onChange={(e) => handleInputChange('regNumber', e.target.value, 'thirdPartyDetails')}
                                className="form-control"
                                placeholder="Vehicle registration number"
                              />
                            </div>
                            <div className="col-md-4">
                              <label className="form-label">Contact Information</label>
                              <input
                                type="text"
                                value={formData.thirdPartyDetails.contactInfo}
                                onChange={(e) => handleInputChange('contactInfo', e.target.value, 'thirdPartyDetails')}
                                className="form-control"
                                placeholder="Contact details"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <h6 className="fw-bold mb-3">Own Insurance</h6>
                          <div className="row g-3">
                            <div className="col-md-4">
                              <label className="form-label">Policy Number</label>
                              <input
                                type="text"
                                value={formData.ownInsurance.policyNumber}
                                onChange={(e) => handleInputChange('policyNumber', e.target.value, 'ownInsurance')}
                                className="form-control"
                                placeholder="Insurance policy number"
                              />
                            </div>
                            <div className="col-md-4">
                              <label className="form-label">Provider</label>
                              <input
                                type="text"
                                value={formData.ownInsurance.provider}
                                onChange={(e) => handleInputChange('provider', e.target.value, 'ownInsurance')}
                                className="form-control"
                                placeholder="Insurance provider"
                              />
                            </div>
                            <div className="col-md-4">
                              <label className="form-label">Expiry Date</label>
                              <input
                                type="date"
                                value={formData.ownInsurance.expiry}
                                onChange={(e) => handleInputChange('expiry', e.target.value, 'ownInsurance')}
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-3">Own Vehicle Details</h6>
                          <div className="row g-3">
                            <div className="col-md-3">
                              <label className="form-label">Make</label>
                              <input
                                type="text"
                                value={formData.vehicleDetails.make}
                                onChange={(e) => handleInputChange('make', e.target.value, 'vehicleDetails')}
                                className="form-control"
                                placeholder="Vehicle make"
                              />
                            </div>
                            <div className="col-md-3">
                              <label className="form-label">Model</label>
                              <input
                                type="text"
                                value={formData.vehicleDetails.model}
                                onChange={(e) => handleInputChange('model', e.target.value, 'vehicleDetails')}
                                className="form-control"
                                placeholder="Vehicle model"
                              />
                            </div>
                            <div className="col-md-3">
                              <label className="form-label">Registration</label>
                              <input
                                type="text"
                                value={formData.vehicleDetails.regNumber}
                                onChange={(e) => handleInputChange('regNumber', e.target.value, 'vehicleDetails')}
                                className="form-control"
                                placeholder="Vehicle registration number"
                              />
                            </div>
                            <div className="col-md-3">
                              <label className="form-label">Year</label>
                              <input
                                type="text"
                                value={formData.vehicleDetails.year}
                                onChange={(e) => handleInputChange('year', e.target.value, 'vehicleDetails')}
                                className="form-control"
                                placeholder="Manufacture year"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Case History */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${expandedSections.history ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleSection('history')}
                      >
                        Case History
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${expandedSections.history ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <div className="mb-4">
                          <label className="form-label">Case Category</label>
                          <select
                            value={formData.caseCategory}
                            onChange={(e) => handleInputChange('caseCategory', e.target.value)}
                            className="form-select"
                          >
                            <option value="">Select case category</option>
                            <option value="Road Traffic Accident">Road Traffic Accident</option>
                            <option value="Medical Negligence">Medical Negligence</option>
                            <option value="Workplace Injury">Workplace Injury</option>
                            <option value="Public Liability">Public Liability</option>
                          </select>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-3">Past Accidents</h6>
                          <div className="row g-3 mb-3">
                            <div className="col-md-6">
                              <label className="form-label">Date</label>
                              <input
                                type="date"
                                value={formData.pastAccidents.date}
                                onChange={(e) => handleInputChange('date', e.target.value, 'pastAccidents')}
                                className="form-control"
                              />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label">Police Report Reference</label>
                              <input
                                type="text"
                                value={formData.pastAccidents.policeReport}
                                onChange={(e) => handleInputChange('policeReport', e.target.value, 'pastAccidents')}
                                className="form-control"
                                placeholder="Police report reference number"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="form-label">Summary</label>
                            <textarea
                              value={formData.pastAccidents.summary}
                              onChange={(e) => handleInputChange('summary', e.target.value, 'pastAccidents')}
                              className="form-control"
                              rows={3}
                              placeholder="Summary of past accidents and claims"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Document Upload */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${expandedSections.documents ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleSection('documents')}
                      >
                        Document Upload
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${expandedSections.documents ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <div className="border border-2 border-dashed rounded p-5 text-center">
                          <FontAwesomeIcon icon={faCloudUploadAlt} className="text-muted mb-3" size="2x" />
                          <h5 className="mb-2">Drag and drop files here</h5>
                          <p className="text-muted mb-3">or click to browse</p>
                          <p className="small text-muted">Supported formats: PDF, DOCX, PNG (Max 10MB each)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => setShowModal(false)}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="btn btn-primary"
                >
                  Save Client
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientManagement;