import React from "react";
import { Modal, Button, Card } from "react-bootstrap";

const MatterTemplate = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="xl" centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Matter Templates</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="text-center py-4">
          {/* <img
            src="/images/empty-icon.png"
            alt="No templates"
            className="mb-4"
            style={{ maxWidth: "100px", opacity: 0.7 }}
          /> */}
          <h5 className="fw-semibold text-dark">No templates found</h5>
          <p className="text-muted">
            Enhance your process and time creating matters
          </p>
          <Button variant="primary" className="mt-2">
            New matter template
          </Button>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MatterTemplate;
