import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiMenuUnfold2Line } from "react-icons/ri";
import "./Navbar.css"; // Import your CSS file for styling

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    const storedDetail = localStorage.getItem("login-detail");
    if (storedDetail) {
      try {
        const parsedDetail = JSON.parse(storedDetail);
        setUserName(parsedDetail.customerName || "Admin");
      } catch (err) {
        setUserName("User");
      }
    } else {
      setUserName("User");
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotification(false);
      }
    };

    if (showNotification) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNotification]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("login-detail");
    localStorage.removeItem("userRole");
    navigate("/");
  };

  return (
    <nav className="navbar custom-navbar p-0">
      <div className="container-fluid px-0">
        {/* Left: Logo and Sidebar Toggle */}
        <div className="d-flex align-items-center">
          <Link to="/" className="navbar-brand d-flex align-items-center me-3">
            <img
              src="/vite.svg" // replace with your logo path if needed
              alt="Ladybug Lending Logo"
              style={{
                height: 40,
                width: 40,
                objectFit: "contain",
                marginRight: 10,
              }}
            />
            Clio
          </Link>
          <div
            className="nav-toggle-icon ms-2"
            onClick={toggleSidebar}
            style={{ cursor: "pointer" }}
          >
            <RiMenuUnfold2Line size={28} />
          </div>
        </div>

        {/* Center: Search Bar or Icon */}
        <div className="flex-grow-1 d-flex justify-content-center align-items-center">
          {/* Desktop search bar */}
          <input
            type="text"
            className="search-bar d-none d-md-block"
            placeholder="Search"
            style={{ minWidth: 200, maxWidth: 350 }}
          />
          {/* Mobile search icon */}
          <button
            className="btn btn-link text-white d-block d-md-none"
            style={{ fontSize: 22 }}
            aria-label="Search"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {/* Right: Actions (always in one line) */}
        <div className="d-flex align-items-center right-actions ms-2 gap-2 flex-nowrap">
          {/* Notification bell */}
          <div className="position-relative">
            <button
              className="btn btn-sm p-0 border-0 bg-transparent"
              onClick={() => setShowNotification(!showNotification)}
              aria-label="Notifications"
            >
              <i className="fa-regular fa-bell fs-4 text-white"></i>
            </button>
            {showNotification && (
              <div
                ref={notificationRef}
                className="notification-dropdown"
              >
                <div className="fw-bold mb-2" style={{ color: "#1976d2" }}>Notifications</div>
                <div style={{ color: "#333", fontSize: "0.97rem" }}>
                  {/* Example notification */}
                  <div className="mb-2">No new notifications.</div>
                </div>
              </div>
            )}
          </div>
          {/* Profile dropdown */}
          <div className="dropdown">
            <div
              className="d-flex align-items-center gap-2"
              style={{ cursor: "pointer" }}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="avatar online">
                <i className="fa-solid fa-circle-user fs-2"></i>
              </div>
            </div>
            <ul className="dropdown-menu dropdown-menu-end shadow-lg border-0 rounded-3 p-2 mt-2">
              <li>
                <a className="dropdown-item d-flex align-items-center gap-2" href="/profile">
                  <i className="bi bi-person-circle"></i> Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item d-flex align-items-center gap-2" href="/settings">
                  <i className="bi bi-gear"></i> Settings
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item d-flex align-items-center gap-2 text-danger" onClick={handleLogout}>
                  <i className="bi bi-box-arrow-right"></i> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;














