import React from 'react';
import { Dropdown } from 'react-bootstrap';

const ClientRow = ({ client, onView, onStatusChange, onDelete }) => {
  const getStatusBadge = () => {
    switch (client.status) {
      case 'active':
        return 'success';
      case 'pending':
        return 'warning';
      case 'inactive':
        return 'danger';
      default:
        return 'secondary';
    }
  };

  const handleStatusSelect = (status) => {
    onStatusChange(client.id, status);
  };

  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <div
            className={`avatar avatar-sm bg-${client.color} text-white rounded-circle me-3`}
          >
            {client.initials}
          </div>
          <div>
            <div className="fw-bold">{client.name}</div>
          </div>
        </div>
      </td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <span className={`badge bg-${getStatusBadge()}`}>
          {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
        </span>
      </td>
      <td>{client.firmSize}</td>
      <td>
        <div className="d-flex align-items-center">
          <button
            className="btn btn-link text-custom p-0 me-3 text-decoration-none"
            onClick={onView}
          >
             <i className="bi bi-eye"></i>
          </button>
          <Dropdown onSelect={handleStatusSelect}>
            <Dropdown.Toggle variant="link" className="text-muted p-0 me-3">
              <i className="bi bi-toggle-off"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="active">Active</Dropdown.Item>
              <Dropdown.Item eventKey="pending">Pending</Dropdown.Item>
              <Dropdown.Item eventKey="inactive">Inactive</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button
            className="btn btn-link text-danger p-0"
            onClick={onDelete}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ClientRow;