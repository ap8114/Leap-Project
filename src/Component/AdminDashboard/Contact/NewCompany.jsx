import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const NewCompany = ({ show, onHide }) => {
    const [company, setCompany] = useState({
        name: '',
        email: '',
        phone: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        country: 'United States',
        tags: ''
    });
    const [showTagModal, setShowTagModal] = useState(false);
    const [tagSearch, setTagSearch] = useState('');
    const [tags, setTags] = useState([]); // List of tags
    const [newTagName, setNewTagName] = useState('');

    const handleChange = (e) => {
        setCompany({ ...company, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                centered
                dialogClassName="custom-modal-width"
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">New company</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ maxHeight: '65vh', overflowY: 'auto' }}>
                    <Form autoComplete="off">
                        <Form.Group className="mb-3">
                            <Form.Label>Name <span className="text-danger">*</span></Form.Label>
                            <Form.Control name="name" value={company.name} onChange={handleChange} required autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" value={company.email} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control name="phone" value={company.phone} onChange={handleChange} />
                        </Form.Group>
                        <h6 className="fw-bold mt-4 mb-2">Address</h6>
                        <Form.Group className="mb-2">
                            <Form.Label>Street</Form.Label>
                            <Form.Control name="street" value={company.street} onChange={handleChange} />
                        </Form.Group>
                        <div className="row g-2 mb-2">
                            <div className="col-md-6">
                                <Form.Label>City</Form.Label>
                                <Form.Control name="city" value={company.city} onChange={handleChange} />
                            </div>
                            <div className="col-md-6">
                                <Form.Label>State/Province</Form.Label>
                                <Form.Control name="state" value={company.state} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row g-2 mb-2">
                            <div className="col-md-6">
                                <Form.Label>Zip/Postal Code</Form.Label>
                                <Form.Control name="zip" value={company.zip} onChange={handleChange} />
                            </div>
                            <div className="col-md-6">
                                <Form.Label>Country</Form.Label>
                                <Form.Select name="country" value={company.country} onChange={handleChange}>
                                    <option>United States</option>
                                    <option>India</option>
                                    <option>Canada</option>
                                    <option>Other</option>
                                </Form.Select>
                            </div>
                        </div>
                        <h6 className="fw-bold mt-4 mb-2">Tags</h6>
                        <Form.Group className="mb-2 position-relative">
                            <Form.Label>Contact tags</Form.Label>
                            <Form.Control
                                name="tags"
                                value={tagSearch}
                                onChange={e => setTagSearch(e.target.value)}
                                placeholder="Search contact tags"
                                autoComplete="off"
                                onFocus={() => setTagSearch(tagSearch)}
                            />
                            {/* Dropdown for tag search */}
                            {tagSearch !== '' && (
                                <div style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: 0,
                                    right: 0,
                                    zIndex: 10,
                                    background: '#fff',
                                    border: '1px solid #d1d5db',
                                    borderRadius: 8,
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                                }}>
                                    <div className="p-3 text-center text-muted" style={{ minHeight: 60 }}>
                                        No results found.
                                    </div>
                                    <div
                                        className="d-flex align-items-center gap-2 px-3 py-2 border-top"
                                        style={{ cursor: 'pointer', color: '#0073E6', fontWeight: 500 }}
                                        onMouseDown={() => setShowTagModal(true)}
                                    >
                                        <span style={{ fontSize: 18, color: '#0073E6' }}>+</span> New contact tag
                                    </div>
                                </div>
                            )}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between flex-wrap">
                    <Button variant="custom" className="px-4 fw-bold" style={{ borderRadius: 8 }}>Save company</Button>
                    <Button variant="secondary" className="px-4 fw-bold" style={{ borderRadius: 8 }} onClick={onHide}>Cancel</Button>
                </Modal.Footer>
            </Modal>

            {/* Tag creation modal */}
            <Modal show={showTagModal} onHide={() => setShowTagModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Contact tags settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">Tags help you categorize and locate contacts. Using shorter tags and keeping the number of total tags your firm uses to a minimum will make this categorization more effective.</div>
                    <div className="mb-2 fw-bold">Create new tag</div>
                    <div className="d-flex align-items-center gap-2 mb-2">
                        <span style={{ width: 18, height: 18, borderRadius: '50%', background: '#0099ff', display: 'inline-block' }}></span>
                        <Form.Control
                            value={newTagName}
                            onChange={e => setNewTagName(e.target.value)}
                            placeholder="Name your new tag"
                            style={{ maxWidth: 300 }}
                        />
                        <Button
                            variant="outline-custom"
                            onClick={() => {
                                if (newTagName.trim()) {
                                    setTags([...tags, newTagName.trim()]);
                                    setNewTagName('');
                                    setShowTagModal(false);
                                }
                            }}
                        >
                            Create tag
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default NewCompany;
