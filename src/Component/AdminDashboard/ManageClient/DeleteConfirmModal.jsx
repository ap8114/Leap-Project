import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeleteConfirmModal = ({ client, onHide, onConfirm }) => {
  return (
    <Modal show={!!client} onHide={onHide} centered>
      <Modal.Body>
        <h5 className="mb-4">
          Are you sure you want to delete {client?.name}?
        </h5>
        <div className="d-flex justify-content-end">
          <Button variant="secondary" onClick={onHide} className="me-2">
            Cancel
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            Delete Client
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteConfirmModal;