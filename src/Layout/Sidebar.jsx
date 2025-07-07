import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ collapsed, menuItemClick }) => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      menuItemClick(); // Close sidebar automatically on mobile after navigation
    }
  };

  // Only admin menu items
  const adminMenuItems = [
    { path: "/dashboard", icon: "fa-tachometer-alt", text: "Dashboard" },
    { path: "/managecustomer", icon: "fa-users", text: "Manage Customers" },
    { path: "/fundrequest", icon: "fa-hand-holding-usd", text: "Fund Requests" },
    { path: "/paymenttracking", icon: "fa-bell", text: "Payment Tracking" },
    { path: "/balancetracker", icon: "fa-receipt", text: "Funding Balance Tracker" },
    { path: "/payoff", icon: "fa-comments-dollar", text: "Payoff Management" },
    { path: "/creditupgraderequests", icon: "fa-arrow-up", text: "Credit Upgrade Requests" },
    { path: "/reportdownload", icon: "fa-file-download", text: "Reports & Download" }
  ];

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <ul className="menu">
          {adminMenuItems.map((item) => (
            <li
              key={item.path}
              className={`menu-item ${isActive(item.path) ? "active" : ""}`}
              style={{ width: "100%" }}
            >
              <div
                className="menu-link d-flex align-items-center"
                style={{
                  padding: "12px 16px",
                  cursor: "pointer",
                  justifyContent: collapsed ? "center" : "flex-start",
                  width: "100%",
                }}
                onClick={() => handleNavigation(item.path)}
              >
                <i
                  className={`fas ${item.icon}`}
                  style={{
                    fontSize: "1.25rem",
                    minWidth: "24px",
                    textAlign: "center",
                    color: isActive(item.path) ? "white" : "white",
                  }}
                ></i>
                {!collapsed && (
                  <span className="menu-text ms-2" style={{ fontSize: "1rem" }}>
                    {item.text}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;