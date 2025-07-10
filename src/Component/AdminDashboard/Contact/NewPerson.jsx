import React, { useState } from 'react';
import { Button, Form, Collapse, Modal } from 'react-bootstrap';
import { FaUser, FaBuilding, FaCamera } from 'react-icons/fa';
import NewCompany from './NewCompany';
import ManageTags from './ManageTags';

const NewPerson = () => {
    const [contactType, setContactType] = useState('person');
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [emails, setEmails] = useState([{ value: '', type: 'Work', primary: true }]);
    const [phones, setPhones] = useState([{ value: '', type: 'Work', primary: true }]);
    const [websites, setWebsites] = useState([{ value: '', type: 'Work', primary: true }]);
    const [addresses, setAddresses] = useState([
        { street: '', city: '', state: '', zip: '', country: 'United States', type: 'Work', primary: true }
    ]);
    const [showCustomFields, setShowCustomFields] = useState(false);
    const [showBilling, setShowBilling] = useState(false);
    const [showEmployeesOpen, setShowEmployeesOpen] = useState(false);
    const [employees, setEmployees] = useState([{ name: '' }]);
    const [showNewCompanyModal, setShowNewCompanyModal] = useState(false);
    const [companySearch, setCompanySearch] = useState('');
    const [companyOptions, setCompanyOptions] = useState([]); // You can fill this with your company list
    const [showManageTags, setShowManageTags] = useState(false);
    const [showTagModal, setShowTagModal] = useState(false);
    const [tagSearch, setTagSearch] = useState('');
    const [tags, setTags] = useState([]); // List of tags
    const [newTagName, setNewTagName] = useState('');
    const tagColors = [
        '#00c3ff', '#0073e6', '#ff7eb9', '#6a040f',
        '#ff8800', '#baff80', '#00c9a7', '#ff206e',
        '#b39ddb', '#8e24aa', '#90a4ae', '#263445'
    ];
    const [selectedTagColor, setSelectedTagColor] = useState(tagColors[0]);

    // Handlers for dynamic fields (add/remove)
    const handleAdd = (setter, arr, obj) => setter([...arr, obj]);
    const handleRemove = (setter, arr, idx) => setter(arr.filter((_, i) => i !== idx));
    const handleChange = (setter, arr, idx, key, value) => {
        const updated = arr.map((item, i) => i === idx ? { ...item, [key]: value } : item);
        setter(updated);
    };

    // Profile photo upload
    const handlePhotoChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfilePhoto(URL.createObjectURL(e.target.files[0]));
        }
    };

    // Employee handlers
    const handleAddEmployee = () => setEmployees([...employees, { name: '' }]);
    const handleRemoveEmployee = (idx) => setEmployees(employees.filter((_, i) => i !== idx));

    return (
        <div className="container py-4" style={{ maxWidth: 1100, minHeight: '100vh' }}>
            <div className="mb-3 text-start">
                <h6 className="fw-bold" style={{ fontSize: 18, color: '#222' }}>New contact</h6>
            </div>
            <Form className="bg-white p-4 rounded shadow-sm mb-4 border" autoComplete="off">
                <h5 className="fw-bold mb-4 text-start">Contact information</h5>
                <div className="row align-items-center mb-3 text-start">
                    <div className="col-md-7 mb-3 mb-md-0">
                        <div className="mb-2">Is this contact a person or a company?</div>
                        <div className="btn-group" role="group">
                            <Button
                                variant={contactType === 'person' ? 'primary' : 'outline-secondary'}
                                onClick={() => setContactType('person')}
                                className={`d-flex align-items-center px-4 py-2 ${contactType === 'person' ? '' : 'bg-white'}`}
                                style={{ borderRadius: '8px 0 0 8px', fontWeight: 600 }}
                            >
                                <FaUser className="me-2" /> Person
                            </Button>
                            <Button
                                variant={contactType === 'company' ? 'primary' : 'outline-secondary'}
                                onClick={() => setContactType('company')}
                                className={`d-flex align-items-center px-4 py-2 ${contactType === 'company' ? '' : 'bg-white'}`}
                                style={{ borderRadius: '0 8px 8px 0', fontWeight: 600 }}
                            >
                                <FaBuilding className="me-2" /> Company
                            </Button>
                        </div>
                    </div>
                    <div className="col-md-5 text-md-end text-center">
                        <div className="d-inline-block position-relative mb-2">
                            <div className="rounded-circle border d-flex align-items-center justify-content-center" style={{ width: 56, height: 56, background: '#f8fafc' }}>
                                <img
                                    src={profilePhoto || 'https://cdn-icons-png.flaticon.com/512/847/847969.png'}
                                    alt="Profile"
                                    className="rounded-circle"
                                    style={{ width: 36, height: 36, objectFit: 'cover' }}
                                />
                                <Form.Label htmlFor="profilePhoto" className="position-absolute top-50 start-50 translate-middle bg-white rounded-circle p-2 border shadow-sm" style={{ cursor: 'pointer', left: '70%', top: '70%' }}>
                                    <FaCamera color="#0073E6" size={18} />
                                </Form.Label>
                                <Form.Control
                                    type="file"
                                    id="profilePhoto"
                                    accept="image/*"
                                    onChange={handlePhotoChange}
                                    style={{ display: 'none' }}
                                />
                            </div>
                        </div>
                        <div>
                            <a href="#" className="text-primary fw-semibold text-decoration-none" style={{ fontSize: 15 }}>
                                <FaCamera className="me-1 mb-1" /> Upload photo
                            </a>
                            <span className="ms-1" title="Profile photo helps you identify contacts.">
                                <span style={{ color: '#0073E6', cursor: 'pointer', fontWeight: 700, fontSize: 18 }}>?</span>
                            </span>
                        </div>
                    </div>
                </div>
                <hr className="my-3" />
                <div className="row g-3 mb-3">
                    {contactType === 'person' && (
                        <>
                            <div className="col-md-2">
                                <Form.Label>Prefix</Form.Label>
                                <Form.Control type="text" />
                            </div>
                            <div className="col-md-3">
                                <Form.Label>First name <span className="text-danger">*</span></Form.Label>
                                <Form.Control type="text" required />
                            </div>
                            <div className="col-md-3">
                                <Form.Label>Middle name</Form.Label>
                                <Form.Control type="text" />
                            </div>
                            <div className="col-md-4">
                                <Form.Label>Last name <span className="text-danger">*</span></Form.Label>
                                <Form.Control type="text" required />
                            </div>
                            <div className="row g-3 mb-3">
                                <div className="col-md-4">
                                    <Form.Label>Company</Form.Label>
                                    <div className="position-relative">
                                        <Form.Control
                                            type="text"
                                            placeholder="What's the company's name?"
                                            value={companySearch}
                                            onChange={e => setCompanySearch(e.target.value)}
                                            onFocus={() => setCompanyOptions([])} // Simulate search
                                            autoComplete="off"
                                        />
                                        {companySearch !== '' && (
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: '100%',
                                                    left: 0,
                                                    right: 0,
                                                    zIndex: 10,
                                                    background: '#fff',
                                                    border: '1px solid #d1d5db',
                                                    borderRadius: 8,
                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                                }}
                                            >
                                                <div className="p-3 text-center text-muted" style={{ minHeight: 60 }}>
                                                    No results found.
                                                </div>
                                                <div
                                                    className="d-flex align-items-center gap-2 px-3 py-2 border-top"
                                                    style={{ cursor: 'pointer', color: '#0073E6', fontWeight: 500 }}
                                                    onMouseDown={() => setShowNewCompanyModal(true)} // 👈 Fixed here
                                                >
                                                    <span style={{ fontSize: 18, color: '#0073E6' }}>+</span> New company
                                                </div>
                                            </div>
                                        )}



                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" />
                                </div>
                                <div className="col-md-4">
                                    <Form.Label>Date of birth</Form.Label>
                                    <Form.Control type="date" placeholder="mm/dd/yyyy" />
                                </div>
                            </div>
                        </>
                    )}
                    {contactType === 'company' && (
                        <>
                            <div className="col-md-3 text-start" >
                                <Form.Label>Name <span className="text-danger">*</span></Form.Label>
                                <Form.Control type="text" required />
                            </div>
                        </>
                    )}
                </div>

                {/* Email Section */}
                <hr className="my-3" />
                <h6 className="fw-bold mb-2 text-start">Email</h6>
                {emails.map((email, idx) => (
                    <div className="row g-2 align-items-center mb-2" key={idx}>
                        <div className="col-md-5">
                            <Form.Control
                                type="email"
                                placeholder="Email address"
                                value={email.value}
                                onChange={e => handleChange(setEmails, emails, idx, 'value', e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <Form.Select
                                value={email.type}
                                onChange={e => handleChange(setEmails, emails, idx, 'type', e.target.value)}
                            >
                                <option>Work</option>
                                <option>Personal</option>
                                <option>Other</option>
                            </Form.Select>
                        </div>
                        <div className="col-md-2 d-flex align-items-center gap-2">
                            <Form.Check
                                type="radio"
                                label="Primary"
                                checked={email.primary}
                                onChange={() => setEmails(emails.map((em, i) => ({ ...em, primary: i === idx })))}
                            />
                            {emails.length > 1 && (
                                <Button variant="link" size="sm" className="p-0 ms-2" style={{ color: '#0067C5' }} onClick={() => handleRemove(setEmails, emails, idx)}>
                                    Remove
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
                <div className='text-start'>  <Button className="text-start p-0 mb-2" variant="link" size="sm" onClick={() => handleAdd(setEmails, emails, { value: '', type: 'Work', primary: false })}>
                    + Add email address
                </Button></div>
                {/* Phone Section */}
                <hr className="my-3" />
                <h6 className="fw-bold mb-2 text-start">Phone</h6>
                {phones.map((phone, idx) => (
                    <div className="row g-2 align-items-center mb-2" key={idx}>
                        <div className="col-md-5">
                            <Form.Control
                                type="text"
                                placeholder="Phone number"
                                value={phone.value}
                                onChange={e => handleChange(setPhones, phones, idx, 'value', e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <Form.Select
                                value={phone.type}
                                onChange={e => handleChange(setPhones, phones, idx, 'type', e.target.value)}
                            >
                                <option>Work</option>
                                <option>Personal</option>
                                <option>Other</option>
                            </Form.Select>
                        </div>
                        <div className="col-md-2 d-flex align-items-center gap-2">
                            <Form.Check
                                type="radio"
                                label="Primary"
                                checked={phone.primary}
                                onChange={() => setPhones(phones.map((ph, i) => ({ ...ph, primary: i === idx })))}
                            />
                            {phones.length > 1 && (
                                <Button variant="link" size="sm" className="p-0 ms-2" style={{ color: '#0067C5' }} onClick={() => handleRemove(setPhones, phones, idx)}>
                                    Remove
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
                <div className='text-start'><Button className="text-start p-0 mb-2" variant="link" size="sm" onClick={() => handleAdd(setPhones, phones, { value: '', type: 'Work', primary: false })}>
                    + Add phone number
                </Button></div>
                {/* Website Section */}
                <hr className="my-3" />
                <h6 className="fw-bold mb-2 text-start">Website</h6>
                {websites.map((website, idx) => (
                    <div className="row g-2 align-items-center mb-2" key={idx}>
                        <div className="col-md-6">
                            <Form.Control
                                type="text"
                                placeholder="Web address"
                                value={website.value}
                                onChange={e => handleChange(setWebsites, websites, idx, 'value', e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <Form.Select
                                value={website.type}
                                onChange={e => handleChange(setWebsites, websites, idx, 'type', e.target.value)}
                            >
                                <option>Work</option>
                                <option>Personal</option>
                                <option>Other</option>
                            </Form.Select>
                        </div>
                        <div className="col-md-2 d-flex align-items-center gap-2">
                            <Form.Check
                                type="radio"
                                label="Primary"
                                checked={website.primary}
                                onChange={() => setWebsites(websites.map((w, i) => ({ ...w, primary: i === idx })))}
                            />
                            {websites.length > 1 && (
                                <Button variant="link" size="sm" className="p-0 ms-2" style={{ color: '#0067C5' }} onClick={() => handleRemove(setWebsites, websites, idx)}>
                                    Remove
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
                <div className='text-start'>  <Button className="text-start p-0 mb-2" variant="link" size="sm" onClick={() => handleAdd(setWebsites, websites, { value: '', type: 'Work', primary: false })}>
                    + Add website
                </Button></div>
                {/* Address Section */}
                <hr className="my-3" />
                <h6 className="fw-bold mb-2 text-start">Address</h6>
                {addresses.map((address, idx) => (
                    <div className="row g-2 align-items-center mb-2" key={idx}>
                        <div className="col-md-4">
                            <Form.Control
                                type="text"
                                placeholder="Street"
                                value={address.street}
                                onChange={e => handleChange(setAddresses, addresses, idx, 'street', e.target.value)}
                            />
                        </div>
                        <div className="col-md-2">
                            <Form.Control
                                type="text"
                                placeholder="City"
                                value={address.city}
                                onChange={e => handleChange(setAddresses, addresses, idx, 'city', e.target.value)}
                            />
                        </div>
                        <div className="col-md-2">
                            <Form.Control
                                type="text"
                                placeholder="State/Province"
                                value={address.state}
                                onChange={e => handleChange(setAddresses, addresses, idx, 'state', e.target.value)}
                            />
                        </div>
                        <div className="col-md-2">
                            <Form.Control
                                type="text"
                                placeholder="Zip/Postal code"
                                value={address.zip}
                                onChange={e => handleChange(setAddresses, addresses, idx, 'zip', e.target.value)}
                            />
                        </div>
                        <div className="col-md-1">
                            <Form.Select
                                value={address.country}
                                onChange={e => handleChange(setAddresses, addresses, idx, 'country', e.target.value)}
                            >
                                <option>United States</option>
                                <option>India</option>
                                <option>Canada</option>
                                <option>Other</option>
                            </Form.Select>
                        </div>
                        <div className="col-md-1">
                            <Form.Select
                                value={address.type}
                                onChange={e => handleChange(setAddresses, addresses, idx, 'type', e.target.value)}
                            >
                                <option>Work</option>
                                <option>Home</option>
                                <option>Other</option>
                            </Form.Select>
                        </div>
                        <div className="col-12 mt-2">
                            {addresses.length > 1 && (
                                <Button variant="link" size="sm" className="p-0 ms-2" style={{ color: '#0067C5' }} onClick={() => handleRemove(setAddresses, addresses, idx)}>
                                    Remove
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
                <div className='text-start'>  <Button className="text-start p-0 mb-2" variant="link" size="sm" onClick={() => handleAdd(setAddresses, addresses, { street: '', city: '', state: '', zip: '', country: 'United States', type: 'Work', primary: false })}>
                    + Add address
                </Button></div>
                {/* Tags Section */}
                <hr className="my-3" />
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="fw-bold mb-0">Tags</h6>
                    <Button variant="outline-secondary" size="sm" onClick={() => setShowManageTags(true)}>Manage tags</Button>
                </div>
                <div className="alert alert-info py-2 mb-2">
                    <span className="me-2" style={{ display: 'inline-block', width: 18, height: 18, borderRadius: '50%', background: '#0099ff', border: '4px solid #e6f2fb', verticalAlign: 'middle' }}></span>
                    <span className="ms-2">Add up to 50 tags to a contact for easier searching, filtering, and categorization. The tags will appear on a contact’s dashboard, the contacts table, related contacts section in matter’s dashboard, and contact selector drop-downs. <a href="https://help.clio.com/hc/en-us/articles/9290561867931-Contact-Tags" className="text-decoration-underline">How do I manage my contact tags?</a></span>
                </div>
                <Form.Group className="mb-3 position-relative">
                    <Form.Label>Contact tags</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Search contact tags"
                        value={tagSearch}
                        onChange={e => setTagSearch(e.target.value)}
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
                {/* Tag creation modal */}
                <Modal show={showTagModal} onHide={() => setShowTagModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title className="fw-bold">Contact tags settings</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mb-3">Tags help you categorize and locate contacts. Using shorter tags and keeping the number of total tags your firm uses to a minimum will make this categorization more effective.</div>
                        <div className="mb-2 fw-bold">Create new tag</div>
                        <div className="mb-3">
                            <div className="mb-2">Choose a color:</div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 32px)', gap: 10 }}>
                                {tagColors.map(color => (
                                    <div
                                        key={color}
                                        onClick={() => setSelectedTagColor(color)}
                                        style={{
                                            width: 28,
                                            height: 28,
                                            borderRadius: 6,
                                            background: color,
                                            border: selectedTagColor === color ? '3px solid #00c3ff' : '2px solid #fff',
                                            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                                            cursor: 'pointer',
                                            outline: selectedTagColor === color ? '2px solid #0073e6' : 'none'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-2 mb-2">
                            <span style={{ width: 18, height: 18, borderRadius: '50%', background: selectedTagColor, display: 'inline-block', border: '2px solid #e0e0e0' }}></span>
                            <Form.Control
                                value={newTagName}
                                onChange={e => setNewTagName(e.target.value)}
                                placeholder="Name your new tag"
                                style={{ maxWidth: 300 }}
                            />
                            <Button
                                variant="outline-primary"
                                onClick={() => {
                                    if (newTagName.trim()) {
                                        setTags([...tags, { name: newTagName.trim(), color: selectedTagColor }]);
                                        setNewTagName('');
                                        setShowTagModal(false);
                                        setSelectedTagColor(tagColors[0]);
                                    }
                                }}
                            >
                                Create tag
                            </Button>
                        </div>
                    </Modal.Body>
                </Modal>
                {/* Custom Fields */}
                <div className="border rounded mb-2">
                    <Button
                        variant="link"
                        className="w-100 text-start fw-bold"
                        onClick={() => setShowCustomFields(!showCustomFields)}
                        aria-controls="custom-fields-collapse"
                        aria-expanded={showCustomFields}
                    >
                        ▸ Custom fields
                    </Button>
                    <Collapse in={showCustomFields}>
                        <div id="custom-fields-collapse" className="p-3">
                            <div className="mb-2">
                                <span>Speed up your workflow by <a href="#" className="text-primary text-decoration-underline">creating custom field sets</a> for often-used custom fields.</span>
                            </div>
                            <div className="mb-2">
                                <Form.Select style={{ maxWidth: 320 }}>
                                    <option>Add a custom field or custom field set…</option>
                                </Form.Select>
                            </div>
                        </div>
                    </Collapse>
                </div>
                {/* Employees (only for company) */}
                {contactType === 'company' && (
                    <div className="border rounded mb-2">

                        <Button
                            variant="link"
                            className="w-100 text-start fw-bold"
                            onClick={() => setShowEmployeesOpen && setShowEmployeesOpen(v => !v)}
                            aria-controls="employees-collapse"
                            aria-expanded={typeof showEmployeesOpen !== 'undefined' && showEmployeesOpen}
                        >

                            ▸ Employees
                        </Button>

                        <Collapse in={typeof showEmployeesOpen !== 'undefined' && showEmployeesOpen}>
                            <div id="employees-collapse" className="p-3">
                                {typeof employees !== 'undefined' && employees.map((emp, idx) => (
                                    <div className="d-flex align-items-center mb-2" key={idx}>
                                        <Form.Select style={{ maxWidth: 320 }}>
                                            <option>What's the person's name?</option>
                                        </Form.Select>
                                        <Button variant="link" size="sm" className="ms-2 p-0" style={{ color: '#0067C5' }} onClick={() => handleRemoveEmployee(idx)}>
                                            Remove
                                        </Button>
                                    </div>
                                ))}

                                <div className='text-start'> <Button variant="link" size="sm" className="ps-0" onClick={handleAddEmployee}>
                                    + Add employee
                                </Button></div>
                            </div>
                        </Collapse>
                    </div>
                )}
                {/* Billing Preferences */}
                <div className="border rounded mb-4">
                    <Button
                        variant="link"
                        className="w-100 text-start fw-bold"
                        onClick={() => setShowBilling(!showBilling)}
                        aria-controls="billing-collapse"
                        aria-expanded={showBilling}
                    >
                        ▸ Billing preferences
                    </Button>
                    <Collapse in={showBilling}>
                        <div id="billing-collapse" className="p-3">
                            <div className="mb-2">
                                <Form.Label>Payment profile <span className="ms-1" style={{ color: '#00B6FF', cursor: 'pointer' }}>?</span></Form.Label>
                                <Form.Select style={{ maxWidth: 220, display: 'inline-block' }}>
                                    <option>Default</option>
                                </Form.Select>
                                <span className="ms-2 text-muted" style={{ fontSize: 13 }}>30 days grace period. No discount. No interest.</span>
                            </div>
                        </div>
                    </Collapse>
                </div>
                {/* Action Buttons */}
                <div className="d-flex flex-wrap gap-2 justify-content-end mt-3 bg-white pt-3 pb-2 sticky-bottom" style={{ zIndex: 10 }}>
                    <Button variant="primary" className="px-4 py-2 fw-bold" style={{ borderRadius: 8 }}>Save contact</Button>
                    <Button variant="outline-primary" className="px-4 py-2 fw-bold" style={{ borderRadius: 8 }}>Save and create new matter</Button>
                    <Button variant="secondary" className="px-4 py-2 fw-bold" style={{ borderRadius: 8 }}>Cancel</Button>
                </div>
            </Form>

            {/* New Company Modal */}
            {showNewCompanyModal && (
                <NewCompany show={showNewCompanyModal} onHide={() => setShowNewCompanyModal(false)} />
            )}

            {/* Manage Tags Modal */}
            {showManageTags && <ManageTags onClose={() => setShowManageTags(false)} />}
        </div>
    );
};

export default NewPerson;