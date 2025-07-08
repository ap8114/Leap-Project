import React from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./Website.css"; // Assuming you have a CSS file for styling

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showFeatures, setShowFeatures] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
    return (
        <div>
            <nav className="navbars navbar-expand-lg navbar-dark p-3">
                <div className="container-fluid px-4 d-flex align-items-center justify-content-between">
                    {/* Logo */}
                    <Link className="navbar-brand" to="/">
                        {/* https://i.ibb.co/SD7MR15F/image.png */}
                        {/* <img
                            src="https://i.ibb.co/r2dVqZRg/C401-F892-948-F-4567-B30-E-34-D20-C772502-1.jpg"
                            alt="Logo"
                            height="10"
                        /> */}
                        
                    </Link>

                    {/* Toggle button for mobile */}
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="navbar-toggler-icon"></span>
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
                                    <div className="col-4">
                                        <h6 className="dropdown-header text-primary">FEATURES</h6>

                                        <Link
                                            to="/client-and-matter-management"
                                            className="text-decoration-none text-dark"
                                        >
                                            <div className="bg-light rounded-3 p-2 mb-2">
                                                <div className="fw-semibold">
                                                    Client and matter management
                                                </div>
                                                <div className="small text-muted">
                                                    Manage and collaborate on matters in one secure and
                                                    searchable location
                                                </div>
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
                                                <div className="small text-muted">
                                                    Utilise fully automated and integrated legal forms and
                                                    precedents
                                                </div>
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
                                                <div className="small text-muted">
                                                    Revolutionary AI time-tracking tools, capture every
                                                    billable minute for your firm
                                                </div>
                                            </div>
                                        </Link>


                                        <Link to="/reporting" className="text-decoration-none text-dark">
                                            <div className="mb-2">
                                                <div className="fw-semibold">Reporting</div>
                                                <div className="small text-muted">
                                                    Gain quick insights into your data to make intelligent
                                                    decisions across your firm
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="/clientservice" className="text-decoration-none text-dark">
                                            <div>
                                                <div className="fw-semibold">Client service</div>
                                                <div className="small text-muted">
                                                    Connect, communicate and collaborate with clients online
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col-4 border-start">
                                        <div className="mb-4 d-flex align-items-start">
                                            <img
                                                src="https://i.ibb.co/6y9wK3y/mobile-working.png"
                                                alt="Mobile Working"
                                                className="rounded-3 me-3"
                                                style={{ width: 90, height: 70, objectFit: "cover" }}
                                            />
                                            <div>
                                                <div className="text-primary fw-semibold small mb-1">
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
                                                src="https://i.ibb.co/6Jm1qkQ/integrations.png"
                                                alt="Apps & Integrations"
                                                className="rounded-3 me-3"
                                                style={{ width: 90, height: 70, objectFit: "cover" }}
                                            />
                                            <div>
                                                <div className="text-primary fw-semibold small mb-1">
                                                    APPS & INTEGRATIONS
                                                </div>
                                                <div className="small text-muted">
                                                    Seamless integrations provide additional value to your
                                                    Clio subscription
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
                                            <div className="col-12"> {/* Changed to single column for better mobile display */}
                                                <Link to="/conveyancing" className="dropdown-item ">Conveyancing </Link>
                                                <a className="dropdown-item" href="#family">Family</a>
                                                <a className="dropdown-item" href="#employment">Employment</a>
                                                <a className="dropdown-item" href="#personal-injury">Personal injury</a>
                                                <Link to="/estateprobate"className="dropdown-item">Estates and probate</Link>
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
                                                alt="Switch to Clio"
                                                className="rounded-3 me-3"
                                                style={{ width: 70, height: 70, objectFit: "cover" }}
                                            />
                                            <div>
                                                <div className="text-primary fw-semibold small mb-1">
                                                    SWITCH TO Clio
                                                </div>
                                                <div className="small text-muted">
                                                    Discover why law firms are choosing Clio
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* Company Dropdown */}
                        <li className="nav-item dropdown position-static">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#company"
                                id="companyDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Company
                            </a>
                            <div
                                className="dropdown-menu shadow border-0 mt-2 p-4 rounded-4"
                                aria-labelledby="companyDropdown"
                                style={{ minWidth: "950px", maxWidth: "1100px" }}
                            >
                                <div className="row">
                                    {/* Company */}
                                    <div className="col-3">
                                        <h6 className="dropdown-header text-primary">COMPANY</h6>
                                        <a className="dropdown-item fw-semibold" href="#leadership">
                                            Leadership
                                        </a>
                                        <div className="small text-muted mb-2 ms-3">
                                            We understand that our greatest asset is our people
                                        </div>
                                        <a
                                            className="dropdown-item fw-semibold"
                                            href="#innovations"
                                        >
                                            Innovations
                                        </a>
                                        <div className="small text-muted ms-3">
                                            Clio is the result of valuable feedback from users across
                                            the globe
                                        </div>
                                    </div>
                                    {/* Business Partners */}
                                    <div className="col-3 border-start">
                                        <h6 className="dropdown-header text-primary">
                                            BUSINESS PARTNERS
                                        </h6>
                                        <a className="dropdown-item fw-semibold" href="#partners">
                                            Partner Network Directory
                                        </a>
                                        <div className="small text-muted mb-2 ms-3">
                                            Certified Consultants, Accounting, Bookkeepers and IT
                                            Partners
                                        </div>
                                        <a
                                            className="dropdown-item fw-semibold"
                                            href="#joinpartner"
                                        >
                                            Join our Partner Network
                                        </a>
                                        <div className="small text-muted mb-2 ms-3">
                                            For individuals and companies skilled in providing support
                                            to law firms
                                        </div>
                                        <a className="dropdown-item fw-semibold" href="#lawsociety">
                                            The Law Society
                                        </a>
                                        <div className="small text-muted ms-3">
                                            Proud to be a strategic partner of The Law Society
                                        </div>
                                    </div>
                                    {/* Ideas Hub */}
                                    <div className="col-3 border-start">
                                        <div className="mb-3">
                                            <img
                                                src="https://i.ibb.co/4VwQyqF/ideas-hub.png"
                                                alt="Ideas Hub"
                                                className="rounded-3 mb-2"
                                                style={{ width: 120, height: 70, objectFit: "cover" }}
                                            />
                                        </div>
                                        <div>
                                            <div className="text-primary fw-semibold small mb-1">
                                                IDEAS HUB
                                            </div>
                                            <div className="small text-muted">
                                                Provide feedback, read discussions and vote on improved
                                                Clio features
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* Resources Dropdown */}
                        <li className="nav-item dropdown position-static">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#resources"
                                id="resourcesDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Resources
                            </a>
                            <div
                                className="dropdown-menu shadow border-0 mt-2 p-4 rounded-4"
                                aria-labelledby="resourcesDropdown"
                                style={{ minWidth: "950px", maxWidth: "1100px" }}
                            >
                                <div className="row">
                                    {/* Resources */}
                                    <div className="col-3">
                                        <h6 className="dropdown-header text-primary">RESOURCES</h6>
                                        <a
                                            className="dropdown-item fw-semibold"
                                            href="#testimonials"
                                        >
                                            Testimonials
                                        </a>
                                        <div className="small text-muted mb-2 ms-3">
                                            Don't take our word for it, hear from our clients
                                        </div>
                                        <a className="dropdown-item fw-semibold" href="#brochures">
                                            Brochures and guides
                                        </a>
                                        <div className="small text-muted mb-2 ms-3">
                                            Learn more about how Clio can improve your practice
                                        </div>
                                        <a
                                            className="dropdown-item fw-semibold"
                                            href="#whitepapers"
                                        >
                                            White papers
                                        </a>
                                        <div className="small text-muted ms-3">
                                            Thought leadership articles to help you overcome
                                            challenges in your firm
                                        </div>
                                    </div>
                                    {/* Webinars & Events */}
                                    <div className="col-3 border-start">
                                        <h6 className="dropdown-header text-primary">
                                            WEBINARS & EVENTS
                                        </h6>
                                        <a className="dropdown-item fw-semibold" href="#events">
                                            Upcoming events & webinars
                                        </a>
                                        <div className="small text-muted ms-3">
                                            Clio hosts and attends industry events both online and in
                                            person across the UK
                                        </div>
                                    </div>

                                    {/* Help Centre */}
                                    <div className="col-3 border-start">
                                        <div className="mb-3">
                                            <img
                                                src="https://i.ibb.co/4VwQyqF/ideas-hub.png"
                                                alt="Clio Help Centre"
                                                className="rounded-3 mb-2"
                                                style={{ width: 120, height: 70, objectFit: "cover" }}
                                            />
                                        </div>
                                        <div>
                                            <div className="text-primary fw-semibold small mb-1">
                                                Clio HELP CENTRE
                                            </div>
                                            <div className="small text-muted">
                                                Browse our articles, access support and engage with the
                                                Clio Community
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* Contact */}
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="d-none d-lg-flex gap-3 ms-auto">
                        <Link to="/dashboard" className="btn btn-outline-light">
                            Login
                        </Link>
                        <Link to="#demo" className="btn btn-demo">
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
                                    <div className="ps-3 text-white">
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
                                        <Link to="/clientservice" className="dropdown-item">Client service</Link>
                                        <div className="dropdown-item">Security and compliance</div>
                                        <div className="dropdown-item">Legal accounting</div>
                                        <div className="dropdown-item">NEW: Matter AI</div>
                                        <div className="dropdown-item">NEW: Prompts</div>
                                        <div className="dropdown-item">NEW: Clio Leads</div>
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
                                    <div className="ps-3 text-white">
                                        <div className="dropdown-item fw-semibold">
                                            Starting your own law firm?
                                        </div>
                                        <div className="dropdown-item fw-semibold">
                                            For mid-sized law firms
                                        </div>
                                        <div className="dropdown-item">Conveyancing</div>
                                        <div className="dropdown-item">Corporate & Commercial</div>
                                        <div className="dropdown-item">Criminal</div>
                                        <div className="dropdown-item">Employment</div>
                                        <div className="dropdown-item">Estates and probate</div>
                                        <div className="dropdown-item">Family</div>
                                        <div className="dropdown-item">Immigration</div>
                                        <div className="dropdown-item">Lifetime planning</div>
                                        <div className="dropdown-item">Personal injury</div>
                                        <div className="dropdown-item">Specialist litigation</div>
                                        <div className="dropdown-item">Legal Aid</div>
                                        <div className="dropdown-item">Switch to Clio</div>
                                    </div>
                                )}
                            </li>
                            {/* Company Mobile Dropdown */}
                            <li className="nav-item">
                                <button
                                    className="nav-link text-light w-100 text-start bg-transparent border-0"
                                    onClick={() =>
                                        setOpenMobileDropdown(
                                            openMobileDropdown === "company" ? null : "company"
                                        )
                                    }
                                >
                                    Company
                                </button>
                                {openMobileDropdown === "company" && (
                                    <div className="ps-3 text-white">
                                        <div className="dropdown-item">Leadership</div>
                                        <div className="dropdown-item">Careers</div>
                                        <div className="dropdown-item">Innovations</div>
                                        <div className="dropdown-item">Contact us</div>
                                        <div className="dropdown-item">Client Support</div>
                                        <div className="dropdown-item">Clio Help Centre</div>
                                        <div className="dropdown-item">
                                            Partner Network Directory
                                        </div>
                                        <div className="dropdown-item">
                                            Join our Partner Network
                                        </div>
                                        <div className="dropdown-item">The Law Society</div>
                                        <div className="dropdown-item">Ideas Hub</div>
                                    </div>
                                )}
                            </li>
                            {/* Resources Mobile Dropdown */}
                            <li className="nav-item">
                                <button
                                    className="nav-link text-light w-100 text-start bg-transparent border-0"
                                    onClick={() =>
                                        setOpenMobileDropdown(
                                            openMobileDropdown === "resources" ? null : "resources"
                                        )
                                    }
                                >
                                    Resources
                                </button>
                                {openMobileDropdown === "resources" && (
                                    <div className="ps-3 text-white">
                                        <div className="dropdown-item">Testimonials</div>
                                        <div className="dropdown-item">Brochures and guides</div>
                                        <div className="dropdown-item">White papers</div>
                                        <div className="dropdown-item">
                                            Upcoming events & webinars
                                        </div>
                                        <div className="dropdown-item">Blog</div>
                                        <div className="dropdown-item">LinkedIn</div>
                                        <div className="dropdown-item">Clio Help Centre</div>
                                    </div>
                                )}
                            </li>
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
