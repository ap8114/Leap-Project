import React, { useState } from 'react';
import { FaBuilding, FaCheckCircle, FaUser } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ManageTags from './ManageTags';

const ContactPage = () => {
    const [contactType, setContactType] = useState('person');
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='p-4'>
            {/* Header */}
            <div className="bg-white  border-bottom sticky-top" style={{ zIndex: 100 }}>
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <h3 className="fw-bold mb-3 ">Contacts</h3>
                    <div className="d-flex gap-2 mt-2 mt-md-0">
                        <button
                            className="btn btn-outline-secondary"
                            onClick={() => setShowModal(true)}
                        >
                            Manage tags
                        </button>
                        <Link to="/newperson" className="btn btn-custom" style={{ backgroundColor: "#0073E6", color: "white" }}>
                            New person
                        </Link>
                        <Link to="/newperson" className="btn btn-custom" style={{ backgroundColor: "#0073E6", color: "white" }}>
                            New company
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-2 w-100">
                <div className="">
                    <div className="">
                        <div className="card shadow-sm border-0 rounded-3 flex-md-row flex-column d-flex align-items-stretch" style={{ minHeight: 500 }}>
                            {/* Left Panel */}
                            <div className="col-12 col-md-5 p-4 d-flex flex-column justify-content-between" style={{ backgroundColor: "#f5f6f7", minWidth: 320 }}>
                                <div>
                                    <h4 className="fw-bold mb-3 text-start">Your Clients, All Here</h4>
                                    <div className='text-start'>
                                        <p className="text-muted mb-2" style={{ color: "black" }}>Start by adding your first client contact to</p>
                                        <p className='text-muted mb-2'>store essential information, track</p>
                                        <p>communications and to share invoices.</p>
                                    </div>
                                    <p className="mb-4 text-start">
                                        <a href="https://help.Fasttrack.com/hc/en-us/articles/9290466190363-Create-Contacts" className="text-decoration-none ">
                                            Learn more about contacts <i className="fas fa-external-link-alt ms-1"></i>
                                        </a>
                                    </p>
                                    <div className="mb-3 p-3 border rounded bg-white shadow-sm text-start">
                                        <h6 className="fw-semibold text-start">Contact information</h6>
                                        <hr />
                                        <label className="form-label text-muted mb-2 mt-3">
                                            Which type of contact do you want to create?
                                        </label>
                                        <div className="d-flex gap-2 mb-3 flex-wrap">
                                            <button
                                                className={`btn ${contactType === "person" ? "btn-custom" : "btn-outline-secondary"} d-flex align-items-center gap-2 px-3 py-2`}
                                                onClick={() => setContactType("person")}
                                                style={{ borderRadius: "8px" }}
                                            >
                                                <FaUser size={16} /> Person
                                            </button>
                                            <button
                                                className={`btn ${contactType === "company" ? "btn-custom" : "btn-outline-secondary"} d-flex align-items-center gap-2 px-3 py-2`}
                                                onClick={() => setContactType("company")}
                                                style={{ borderRadius: "8px" }}
                                            >
                                                <FaBuilding size={16} /> Company
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-6">
                                            <label className="form-label text-muted">Prefix</label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                        <div className="col-6">
                                            <label className="form-label text-muted">
                                                First Name <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-6">
                                            <label className="form-label text-muted">Company</label>
                                            <select className="form-select">
                                                <option>What's the company's name</option>
                                            </select>
                                        </div>
                                        <div className="col-6">
                                            <label className="form-label text-muted">Title</label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Right Panel */}
                            <div className="col-12 col-md-7 p-4 d-flex flex-column align-items-center justify-content-center">
                                <div className="w-100 text-center">
                                    <div className="mb-3 mt-5">
                                        <div className="d-flex align-items-center justify-content-center mb-2">
                                            <div
                                                className="bg-custom rounded-circle d-flex align-items-center justify-content-center"
                                                style={{ width: "40px", height: "40px" }}
                                            >
                                                <BsCheckCircleFill size={24} color="white" />
                                            </div>
                                        </div>
                                        <h5 className="fw-bold mb-2">Contacts</h5>
                                        <p className="text-muted mb-4">
                                            The cornerstone of your workflow, start building yours today
                                        </p>
                                    </div>
                                    {/* Video Box */}
                                    <div
                                        className="position-relative mb-4 rounded-3 d-flex align-items-center justify-content-center mx-auto"
                                        style={{ height: "280px", background: "#0067C5", maxWidth: 500 }}
                                    >
                                        <div className="text-white text-center" style={{ fontSize: "24px" }}>
                                            How to Create a Contact
                                        </div>
                                        <div className="position-absolute bottom-0 start-0 end-0 p-3">
                                            <div className="d-flex align-items-center gap-2">
                                                <button
                                                    className="btn p-0 border-0"
                                                    style={{ width: "35px", height: "35px", background: "rgba(255,255,255,0.3)", borderRadius: "50%", color: "white" }}
                                                >
                                                    <i className="fas fa-play"></i>
                                                </button>
                                                <span className="text-white small">0:00</span>
                                                <div
                                                    className="flex-grow-1 position-relative"
                                                    style={{ height: "4px", background: "rgba(255,255,255,0.3)", borderRadius: "2px" }}
                                                >
                                                    <div
                                                        style={{ width: "5%", height: "100%", background: "white", borderRadius: "2px", position: "relative" }}
                                                    >
                                                        <div
                                                            style={{ position: "absolute", right: "-6px", top: "-4px", width: "12px", height: "12px", background: "white", borderRadius: "50%" }}
                                                        ></div>
                                                    </div>
                                                </div>
                                                <div className="d-flex gap-2">
                                                    <i className="fas fa-closed-captioning text-white"></i>
                                                    <i className="fas fa-volume-up text-white"></i>
                                                    <i className="fas fa-cog text-white"></i>
                                                    <i className="fas fa-expand text-white"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/newperson">
                                        <button
                                            className="btn btn-custom btn-lg px-4"
                                            style={{ backgroundColor: "#0073E6", color: "white" }}
                                        >
                                            Create new contact
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && <ManageTags onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default ContactPage;