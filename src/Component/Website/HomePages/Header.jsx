import React from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./Website.css"; // Assuming you have a CSS file for styling
import logoFastTrack from "../../../assets/logoFastTrack.png"; // Adjust the path as necessary

const mobileMenus = [
    {
        key: "features",
        label: "Features",
        icon: "bi bi-grid-fill",
        submenu: [
            { to: "/client-and-matter-management", icon: "bi bi-people-fill", label: "Client and matter management" },
            { to: "/document-automation", icon: "bi bi-file-earmark-text-fill", label: "Document automation and management" },
            { to: "/timerecordingbilling", icon: "bi bi-clock-fill", label: "Time recording and billing" },
            { to: "/reporting", icon: "bi bi-bar-chart-fill", label: "Reporting" },
            { to: "/clientservice", icon: "bi bi-person-lines-fill", label: "Client service" },
        ],
    },
    {
        key: "solutions",
        label: "Solutions",
        icon: "bi bi-lightbulb-fill",
        submenu: [
            { to: "/conveyancing", icon: "bi bi-house-door-fill", label: "Conveyancing" },
            { to: "/family", icon: "bi bi-people-fill", label: "Family" },
            { to: "/employment", icon: "bi bi-briefcase-fill", label: "Employment" },
            { to: "/personalinjury", icon: "bi bi-heart-pulse-fill", label: "Personal injury" },
            { to: "/estateprobate", icon: "bi bi-file-earmark-text-fill", label: "Estates and probate" },
        ],
    },
    {
        key: "company",
        label: "Company",
        icon: "bi bi-building-fill",
        submenu: [
            { to: "/company", icon: "bi bi-building-fill", label: "About Company" },
        ],
    },
    {
        key: "resources",
        label: "Resources",
        icon: "bi bi-collection-fill",
        submenu: [
            { to: "/resources", icon: "bi bi-collection-fill", label: "Resources" },
        ],
    },
    {
        key: "contact",
        label: "Contact",
        icon: "bi bi-envelope-fill",
        submenu: [
            { to: "/contactus", icon: "bi bi-envelope-fill", label: "Contact" },
        ],
    },
];


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showFeatures, setShowFeatures] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

    const [sliderMenu, setSliderMenu] = useState(null);

    // Find submenu for slider
    const currentSlider = mobileMenus.find((m) => m.key === sliderMenu);

    return (
        <div>
            <nav className="navbars navbar-expand-lg navbar-dark  p-3">
                <div className="container-fluid px-4 d-flex align-items-center justify-content-between">
                    <Link to="/" className="text-decoration-none">
                        <div className="d-flex align-items-center">
                            <img
                                src={logoFastTrack}
                                alt="Logo"
                                style={{ height: "70px", width: "170px" }}
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
                        <span
                            className="navbar-toggler-icon"
                            style={{
                                backgroundImage:
                                    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
                            }}
                        ></span>
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
                                            <div className="rounded-3 mb-2 d-flex align-items-start">
                                                <i className="bi bi-people-fill me-2  text-dark"></i>
                                                <div>
                                                    <div className="fw-semibold">
                                                        Client and matter management
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link
                                            to="/document-automation"
                                            className="text-decoration-none text-dark"
                                        >
                                            <div className="mb-2 d-flex align-items-start">
                                                <i className="bi bi-file-earmark-text-fill me-2  text-dark"></i>
                                                <div>
                                                    <div className="fw-semibold">
                                                        Document automation and management
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link
                                            to="/timerecordingbilling"
                                            className="text-decoration-none text-dark"
                                        >
                                            <div className="mb-2 d-flex align-items-start">
                                                <i className="bi bi-clock-fill me-2  text-dark"></i>
                                                <div>
                                                    <div className="fw-semibold">
                                                        Time recording and billing
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link
                                            to="/reporting"
                                            className="text-decoration-none text-dark"
                                        >
                                            <div className="mb-2 d-flex align-items-start">
                                                <i className="bi bi-bar-chart-fill me-2  text-dark"></i>
                                                <div>
                                                    <div className="fw-semibold">Reporting</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link
                                            to="/clientservice"
                                            className="text-decoration-none text-dark"
                                        >
                                            <div className="d-flex align-items-start">
                                                <i className="bi bi-person-lines-fill me-2  text-dark"></i>
                                                <div>
                                                    <div className="fw-semibold">Client service</div>
                                                </div>
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
                                                    FastTrack Software subscription
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
                                                <Link
                                                    to="/conveyancing"
                                                    className="dropdown-item fw-semibold d-flex align-items-center py-2"
                                                >
                                                    <i className="bi bi-house-door-fill me-2 text-dark"></i>
                                                    Conveyancing
                                                </Link>

                                                <Link
                                                    to="/family"
                                                    className="dropdown-item fw-semibold d-flex align-items-center py-2"
                                                >
                                                    <i className="bi bi-people-fill me-2 text-dark"></i>
                                                    Family
                                                </Link>

                                                <Link
                                                    to="/employment"
                                                    className="dropdown-item fw-semibold d-flex align-items-center py-2"
                                                >
                                                    <i className="bi bi-briefcase-fill me-2 text-dark"></i>
                                                    Employment
                                                </Link>

                                                <Link
                                                    to="/personalinjury"
                                                    className="dropdown-item fw-semibold d-flex align-items-center py-2"
                                                >
                                                    <i className="bi bi-heart-pulse-fill me-2 text-dark"></i>
                                                    Personal injury
                                                </Link>

                                                <Link
                                                    to="/estateprobate"
                                                    className="dropdown-item fw-semibold d-flex align-items-center py-2"
                                                >
                                                    <i className="bi bi-file-earmark-text-fill me-2 text-dark"></i>
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
                                <div className="nav-link" role="button">
                                    Company
                                </div>
                            </li>
                        </Link>
                        {/* Resources Dropdown */}
                        <Link to="/resources" className="text-decoration-none">
                            <li className="nav-item">
                                <div className="nav-link" role="button">
                                    Resources
                                </div>
                            </li>
                        </Link>
                        {/* Contact */}
                        <Link to="/contactus" className="text-decoration-none">
                            <li className="nav-item">
                                <div className="nav-link">Contact</div>
                            </li>
                        </Link>
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="d-none d-lg-flex gap-3 ms-auto">
                        <Link
                            to="/login                                                                                                                                                                                            "
                            className="btn btn-light text-dark p-2"
                        >
                            Login
                        </Link>
                        <Link to="#demo" className="btn btn-demo p-2">
                            REQUEST DEMO
                        </Link>
                    </div>
                </div>

                {/* Mobile Main Menu */}
                {isMenuOpen && !sliderMenu && (
                    <div className="d-lg-none mobile-main-menu px-4 pt-3 pb-4 position-fixed top-0 start-0 w-100 h-100 bg-white" style={{ zIndex: 1050 }}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <span className="fw-bold fs-5">Menu</span>
                            <button className="btn btn-link text-dark fs-3 p-0" onClick={() => setIsMenuOpen(false)}>
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>
                        <ul className="navbar-nav gap-2">
                            {mobileMenus.map((menu) => (
                                <li className="nav-item border-bottom" key={menu.key}>
                                    <button
                                        className="nav-link w-100 text-start bg-transparent border-0 d-flex justify-content-between align-items-center py-3 px-0"
                                        onClick={() => setSliderMenu(menu.key)}
                                    >
                                        <div className="d-flex align-items-center">
                                            <i className={`${menu.icon} me-2`} style={{ fontSize: "1.1rem" }}></i>
                                            <span>{menu.label}</span>
                                        </div>
                                        <i className="bi bi-arrow-right"></i>
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-3 d-flex justify-content-center align-items-center flex-column gap-2">
                            <Link to="/login" className="btn btn-light text-dark p-2 w-100">
                                Login
                            </Link>
                            <Link to="#demo" className="btn btn-demo p-2 w-100">
                                REQUEST DEMO
                            </Link>
                        </div>
                    </div>
                )}

                {/* Mobile Slider Submenu */}
                {isMenuOpen && sliderMenu && (
                    <div className="d-lg-none mobile-slider-menu position-fixed top-0 start-0 w-100 h-100 bg-white animate__animated animate__slideInRight" style={{ zIndex: 1060, transition: "transform 0.3s" }}>
                        <div className="d-flex justify-content-between align-items-center mb-4 px-4 pt-3">
                            <button className="btn btn-link text-dark fs-4 p-0" onClick={() => setSliderMenu(null)}>
                                <i className="bi bi-arrow-left"></i>
                            </button>
                            <span className="fw-bold fs-5">{currentSlider?.label}</span>
                            <button className="btn btn-link text-dark fs-3 p-0" onClick={() => { setSliderMenu(null); setIsMenuOpen(false); }}>
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>
                        <ul className="navbar-nav gap-2 px-4">
                            {currentSlider?.submenu?.map((item, idx) => (
                                <li className="nav-item border-bottom" key={idx}>
                                    <Link
                                        to={item.to}
                                        className="nav-link w-100 d-flex align-items-center py-3 px-0 text-decoration-none"
                                        onClick={() => { setSliderMenu(null); setIsMenuOpen(false); }}
                                    >
                                        <i className={`${item.icon} me-2 text-muted`}></i>
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Header;