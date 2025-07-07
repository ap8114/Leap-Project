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
  { path: "/dashboard", icon: "fa-solid fa-tachometer-alt", text: "Dashboard" },           // Dashboard
  { path: "/matter", icon: "fa-solid fa-briefcase", text: "Matters" },             // Legal cases / Matters
  { path: "/document", icon: "fa-solid fa-file-alt", text: "Documents" },               // Documents
  { path: "/calendar", icon: "fa-solid fa-calendar-days", text: "Calendar" },       // Calendar
  { path: "/timebilling", icon: "fa-solid fa-clock", text: "Time & Billing" },          // Time Tracking
  { path: "/client", icon: "fa-solid fa-user", text: "Clients" },                          // Clients
  { path: "/creditupgraderequests", icon: "fa-solid fa-user-tie", text: "CRM" },           // CRM
  { path: "/reportdownload", icon: "fa-solid fa-robot", text: "AI & Workflow" },           // AI & Workflow
  { path: "/accounting", icon: "fa-solid fa-file-invoice-dollar", text: "Accounting" },    // Accounting
  { path: "/admin", icon: "fa-solid fa-user-gear", text: "Admin" }                         // Admin
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