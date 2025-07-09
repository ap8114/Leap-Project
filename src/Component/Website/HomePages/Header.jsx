import React from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./Website.css"; // Assuming you have a CSS file for styling
import logoFastTrack from "../../../assets/logoFastTrack.png"; // Adjust the path as necessary

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showFeatures, setShowFeatures] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
    return (
        <div>
            <nav className="navbars navbar-expand-lg navbar-dark  p-3">
                <div className="container-fluid px-4 d-flex align-items-center justify-content-between">

                    <Link to="/" className="text-decoration-none">
                        <div className="d-flex align-items-center">
                            <img
                                src={logoFastTrack}
                                alt="Logo"
                                style={{ height: '70px', width: '170px' }}
                            />
                        </div>
                    </Link>

                    {/* Toggle button for mobile - Dark Version */}
                    <button
                        className="navbar-toggler d-lg-none border-0"
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" style={{
                            backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")"
                        }}></span>
                    </button>

                    {/* Desktop Nav items */}
                    <ul className="navbar-nav d-none d-lg-flex flex-row gap-3 mx-auto mb-0">
                        {/* Features Dropdown */}
                        <li
                            className={`nav-item dropdown position-static${showFeatures ? " show" : ""
                                }`}
                            onMouseEnter={() => setShowFeatures(true)}
                            onMouseLeave={() => setShowFeatures(false)}
                        >
                            <a
                                className="nav-link dropdown-toggle"
                                href="#features"
                                id="featuresDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Features
                            </a>
                            <div
                                className="dropdown-menu shadow border-0 mt-2 p-4 rounded-4"
                                aria-labelledby="featuresDropdown"
                                style={{ minWidth: "1100px", maxWidth: "1200px" }}
                            >
                                <div className="row">
                                    {/* Column 1: Features List */}
                                    <div className="col-6">
                                        <Link
                                            to="/client-and-matter-management"
                                            className="text-decoration-none text-dark"
                                        >
                                            <div className="rounded-3 mb-2">
                                                <div className="fw-semibold">
                                                    Client and matter management
                                                </div>
                                                {/* <div className="small text-muted">
                                                    Manage and collaborate on matters in one secure and
                                                    searchable location
                                                </div> */}
                                            </div>
                                        </Link>

                                        <Link
                                            to="/document-automation"
                                            className="text-decoration-none text-dark"
                                        >
                                            <div className="mb-2">
                                                <div className="fw-semibold">
                                                    Document automation and management
                                                </div>
                                                {/* <div className="small text-muted">
                                                    Utilise fully automated and integrated legal forms and
                                                    precedents
                                                </div> */}
                                            </div>
                                        </Link>

                                        <Link
                                            to="/timerecordingbilling"
                                            className="text-decoration-none text-dark"
                                        >
                                            <div className="mb-2">
                                                <div className="fw-semibold">
                                                    Time recording and billing
                                                </div>
                                                {/* <div className="small text-muted">
                                                    Revolutionary AI time-tracking tools, capture every
                                                    billable minute for your firm
                                                </div> */}
                                            </div>
                                        </Link>


                                        <Link to="/reporting" className="text-decoration-none text-dark">
                                            <div className="mb-2">
                                                <div className="fw-semibold">Reporting</div>
                                                {/* <div className="small text-muted">
                                                    Gain quick insights into your data to make intelligent
                                                    decisions across your firm
                                                </div> */}
                                            </div>
                                        </Link>

                                        <Link to="/clientservice" className="text-decoration-none text-dark">
                                            <div>
                                                <div className="fw-semibold">Client service</div>
                                                {/* <div className="small text-muted">
                                                    Connect, communicate and collaborate with clients online
                                                </div> */}
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col-6 border-start">
                                        <div className="mb-4 d-flex align-items-start">
                                            <img
                                                src="https://i.ibb.co/WbCNCfh/image.png"
                                                alt="Mobile Working"
                                                className="rounded-3 me-3"
                                                style={{ width: 90, height: 70, objectFit: "cover" }}
                                            />
                                            <div>
                                                <div className="text-custom fw-semibold small mb-1">
                                                    MOBILE WORKING
                                                </div>
                                                <div className="small text-muted">
                                                    Work on your matters effectively away from the office
                                                    on any device
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-start">
                                            <img
                                                src="https://i.ibb.co/6c5QbfXx/image.png"
                                                alt="Apps & Integrations"
                                                className="rounded-3 me-3"
                                                style={{ width: 90, height: 70, objectFit: "cover" }}
                                            />
                                            <div>
                                                <div className="text-custom fw-semibold small mb-1">
                                                    APPS & INTEGRATIONS
                                                </div>
                                                <div className="small text-muted">
                                                    Seamless integrations provide additional value to your
                                                    FastTrack Software Software subscription
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        {/* Solutions Dropdown */}
                        <li className="nav-item dropdown position-static">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#solutions"
                                id="solutionsDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Solutions
                            </a>
                            <div
                                className="dropdown-menu shadow border-0 mt-2 p-4 rounded-4"
                                aria-labelledby="solutionsDropdown"
                                style={{ minWidth: "900px", maxWidth: "1000px" }}
                            >
                                <div className="row">
                                    {/* Areas of Law */}
                                    <div className="col-5">
                                        <div className="row">
                                            <div className="col-12">
                                                {" "}
                                                {/* Changed to single column for better mobile display */}
                                                <Link to="/conveyancing" className="dropdown-item fw-semibold">
                                                    Conveyancing{" "}
                                                </Link>
                                                <Link
                                                    to="/family"
                                                    className="dropdown-item fw-semibold"
                                                    href="#family"
                                                >
                                                    Family
                                                </Link>
                                                <Link
                                                    to="/employment"
                                                    className="dropdown-item fw-semibold"
                                                    href="#employment"
                                                >
                                                    Employment
                                                </Link>
                                                <Link
                                                    to="/personalinjury"
                                                    className="dropdown-item fw-semibold"
                                                    href="#personal-injury"
                                                >
                                                    Personal injury
                                                </Link>
                                                <Link to="/estateprobate" className="dropdown-item fw-semibold">
                                                    Estates and probate
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Images and Info */}
                                    <div className="col-4 border-start">
                                        <div className="mb-4 d-flex align-items-start">
                                            <img
                                                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=120&q=80"
                                                alt="Legal Aid"
                                                className="rounded-3 me-3"
                                                style={{ width: 70, height: 70, objectFit: "cover" }}
                                            />
                                            <div>
                                                <div className="text-primary fw-semibold small mb-1">
                                                    LEGAL AID
                                                </div>
                                                <div className="small text-muted">
                                                    Streamline the way you carry out publicly funded work
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-start">
                                            <img
                                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=120&q=80"
                                                alt="Switch to LEAP"
                                                className="rounded-3 me-3"
                                                style={{ width: 70, height: 70, objectFit: "cover" }}
                                            />
                                            <div>
                                                <div className="text-primary fw-semibold small mb-1">
                                                    SWITCH TO LEAP
                                                </div>
                                                <div className="small text-muted">
                                                    Discover why law firms are choosing LEAP
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* Company Dropdown */}
                      <Link to="/company" className="text-decoration-none">
                        <li className="nav-item">
                            <div
                                className="nav-link"
                                role="button"
                            >
                                Company
                            </div>
                        </li>
                      </Link>
                        {/* Resources Dropdown */}
                      <Link  to="/resources" className="text-decoration-none">
                        <li className="nav-item">
                            <div
                                className="nav-link"
                                role="button"    
                            >
                                Resources
                            </div>
                        </li>
                      </Link>
                        {/* Contact */}
                      <Link  to="/contactus" className="text-decoration-none">
                        <li className="nav-item">
                            <div className="nav-link">
                                Contact
                            </div>
                        </li>
                      </Link>
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="d-none d-lg-flex gap-3 ms-auto">
                        <Link to="/login                                                                                                                                                                                            " className="btn btn-light text-dark p-2">
                            Login
                        </Link>
                        <Link to="#demo" className="btn btn-demo p-2">
                            REQUEST DEMO
                        </Link>
                    </div>
                </div>

         
                {/* Mobile menu */}                                                                                                                                                                                                                                                         
                {isMenuOpen && (
                    <div className="d-lg-none px-4 pt-3 pb-4">
                        <ul className="navbar-nav gap-2">
                            {/* Features Mobile Dropdown */}
                            <li className="nav-item">
                                <button
                                    className="nav-link w-100 text-start bg-transparent border-0"
                                    onClick={() =>
                                        setOpenMobileDropdown(
                                            openMobileDropdown === "features" ? null : "features"
                                        )
                                    }
                                >
                                    Features
                                </button>
                                {openMobileDropdown === "features" && (
                                    <div className="ps-3 text-dark">
                                        <Link
                                            to="/client-and-matter-management"
                                            className="dropdown-item"
                                        >
                                            Client and matter management
                                        </Link>
                                        <Link to="/document-automation" className="dropdown-item">
                                            Document automation and management
                                        </Link>
                                        <div className="dropdown-item">
                                            Time recording and billing
                                        </div>
                                        <Link to="/reporting" className="dropdown-item">
                                            Reporting
                                        </Link>
                                        <Link to="/clientservice" className="dropdown-item">
                                            Client service
                                        </Link>
                                    </div>
                                )}
                            </li>
                            {/* Solutions Mobile Dropdown */}
                            <li className="nav-item">
                                <button
                                    className="nav-link text-light w-100 text-start bg-transparent border-0"
                                    onClick={() =>
                                        setOpenMobileDropdown(
                                            openMobileDropdown === "solutions" ? null : "solutions"
                                        )
                                    }
                                >
                                    Solutions
                                </button>
                                {openMobileDropdown === "solutions" && (
                                    <div className="ps-3 text-dark">
                                        <Link to="/conveyancing" className="dropdown-item">Conveyancing</Link>
                                        <Link to="/family" className="dropdown-item">Family</Link>
                                        <Link to="/employment" className="dropdown-item">Employment</Link>
                                        <Link to="/personalinjury" className="dropdown-item">Personal injury</Link>
                                        <Link to="/estateprobate" className="dropdown-item">Estates and probate</Link>
                                    </div>
                                )}
                            </li>
                            {/* Company Mobile Dropdown */}
                            <Link to="/company" className="text-decoration-none">
                                <li className="nav-item">
                                    <button className="nav-link text-light w-100 text-start bg-transparent border-0">
                                        Company
                                    </button>
                                </li>
                            </Link>
                            {/* Resources Mobile Dropdown */}
                            <Link to="/resources" className="text-decoration-none">
                                <li className="nav-item">
                                    <button className="nav-link text-light w-100 text-start bg-transparent border-0">
                                        Resources
                                    </button>
                                </li>
                            </Link>
                            {/* Contact */}
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <div className="mt-3 d-flex justify-content-center align-items-center flex-column gap-2">
                            <Link to="/dashboard" className="btn btn-outline-light">
                                Login
                            </Link>
                            <Link to="#demo" className="btn btn-demo">
                                REQUEST DEMO
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Header;
