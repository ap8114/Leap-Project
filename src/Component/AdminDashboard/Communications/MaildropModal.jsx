import React from "react";
import { Modal, Button } from "react-bootstrap";

const MaildropModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>File emails with Maildrop</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          File emails directly to Fasttrack by sending them to the Maildrop address below.
          Save the email address to your contacts and then use the To:, Bcc: or Cc: to file.
          <a href="#" className="ms-1">Learn more.</a>
        </p>
        <p className="mt-3">
          <strong>b10b0426@maildrop.Fasttrack.com</strong>
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="light">
          Download Vcard
        </Button>
        <Button variant="custom">
          Copy email
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MaildropModal;
