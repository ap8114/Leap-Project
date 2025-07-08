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
    { path: "/dashboard", icon: "fa-solid fa-gauge", text: "Dashboard" },                          // Dashboard
    { path: "/matter", icon: "fa-solid fa-scale-balanced", text: "Matters" },                      // Matters
    { path: "/client", icon: "fa-solid fa-handshake", text: "Clients & CRM" },                     // Clients / CRM
    { path: "/document", icon: "fa-solid fa-file-lines", text: "Documents" },                      // Documents
    { path: "/calendar", icon: "fa-solid fa-calendar-check", text: "Calendar" },                   // Calendar
    { path: "/tasksworkflow", icon: "fa-solid fa-diagram-project", text: "Tasks & Workflow" },     // Tasks & Workflow
    { path: "/timebilling", icon: "fa-solid fa-stopwatch", text: "Time & Billing" },               // Time & Billing
    { path: "/reports-analytics", icon: "fa-solid fa-chart-line", text: "Reports & Analytics" },   // Reports & Analytics
    { path: "/admin", icon: "fa-solid fa-user-shield", text: "Admin" },                            // Admin
    { path: "/settings", icon: "fa-solid fa-gear", text: "Settings" }                              // Settings
  ];

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <ul className="menu">
          {adminMenuItems.map((item) => (
            <li
              key={item.path}
              className={`menu-item ${isActive(item.path) ? "active" : ""}`}
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