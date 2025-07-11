import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const tagColors = [
    '#00B6FF', '#0074D9', '#FF69B4', '#800000',
    '#FF9800', '#B6E880', '#00B894', '#F50057',
    '#B39DDB', '#1976D2', '#90A4AE', '#263238'
];

const ManageTags = ({ onClose }) => {
    const [showModal, setShowModal] = useState(true);
    const [newTagName, setNewTagName] = useState('');
    const [colorPickerOpen, setColorPickerOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState(tagColors[0]);

    const handleClose = () => {
        setShowModal(false);
        if (onClose) onClose();
    };
    const handleTagNameChange = (e) => setNewTagName(e.target.value);
    const handleCreateTag = () => {
        // Add tag creation logic here
        setNewTagName('');
    };

    return (
        <div className="container-fluid mt-5 " >
            <Modal show={showModal} onHide={handleClose} centered dialogClassName="custom-modal-width">
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Contact tags settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="mb-4">
                        Tags help you categorize and locate contacts. Using shorter tags and keeping the number of total tags your firm uses to a minimum will make this categorization more effective.
                    </p>

                    <h6 className="fw-bold mb-3">Create new tag</h6>
                    <div className="d-flex align-items-center mb-4 position-relative" style={{ zIndex: 2 }}>
                        <span
                            style={{
                                display: 'inline-block',
                                width: 20,
                                height: 20,
                                borderRadius: '50%',
                                background: selectedColor,
                                border: '4px solid #e6f2fb',
                                marginRight: 10,
                                cursor: 'pointer',
                                boxShadow: colorPickerOpen ? '0 0 0 2px #00B6FF' : undefined
                            }}
                            onClick={() => setColorPickerOpen(!colorPickerOpen)}
                        ></span>
                        <Form.Control
                            type="text"
                            placeholder="Name your new tag"
                            value={newTagName}
                            onChange={handleTagNameChange}
                            style={{ maxWidth: 300, marginRight: 10 }}
                        />
                        <Button
                            variant="outline-primary"
                            onClick={handleCreateTag}
                            disabled={!newTagName.trim()}
                        >
                            Create tag
                        </Button>
                        {colorPickerOpen && (
                            <div style={{
                                position: 'absolute',
                                top: 35,
                                left: 0,
                                background: 'white',
                                border: '1px solid #e0e0e0',
                                borderRadius: 8,
                                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                padding: 10,
                                display: 'grid',
                                gridTemplateColumns: 'repeat(4, 28px)',
                                gap: 8,
                                zIndex: 10
                            }}>
                                {tagColors.map((color, idx) => (
                                    <span
                                        key={color}
                                        style={{
                                            width: 24,
                                            height: 24,
                                            borderRadius: 6,
                                            background: color,
                                            border: selectedColor === color ? '2px solid #00B6FF' : '2px solid #fff',
                                            boxShadow: selectedColor === color ? '0 0 0 2px #00B6FF' : undefined,
                                            cursor: 'pointer',
                                            display: 'inline-block'
                                        }}
                                        onClick={() => {
                                            setSelectedColor(color);
                                            setColorPickerOpen(false);
                                        }}
                                    ></span>
                                ))}
                            </div>
                        )}
                    </div>

                    <h6 className="fw-bold mb-2">Manage existing tags</h6>
                    <p className="text-muted">You do not have any existing tags.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Done
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ManageTags;

// Add this style at the bottom of the file or in your CSS
// .custom-modal-width .modal-dialog {
//   max-width: 480px;
//   width: 100%;
// }