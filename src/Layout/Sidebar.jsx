// Sidebar.js
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ collapsed, menuItemClick }) => {
  const [role, setRole] = useState(localStorage.getItem("userRole") || "user");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        menuItemClick(true);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuItemClick]);

  const isActive = (path) => location.pathname === path;

  const handleNavigation = (path) => {
    navigate(path);
    if (window.innerWidth < 768) {
      menuItemClick(true);
    }
  };

  // Updated menu items with correct paths
  const adminMenuItems = [
    { path: "/admin-dashboard", icon: "fa-solid fa-gauge", text: "Dashboard" },
    { path: "/calendar", icon: "fa-solid fa-calendar-check", text: "Calendar" },
    { path: "/tasks", icon: "fa-solid fa-diagram-project", text: "Tasks" },
    { path: "/client-management", icon: "fa-solid fa-users", text: "Client Management" },
    { path: "/matters", icon: "fa-solid fa-scale-balanced", text: "Matters" },
    { path: "/contacts", icon: "fa-solid fa-envelope", text: "Contacts" },
    { path: "/activity", icon: "fa-solid fa-clock-rotate-left", text: "Activity" },
    { path: "/time-billing", icon: "fa-solid fa-stopwatch", text: "Time & Billing" },
    { path: "/accounts", icon: "fa-solid fa-file-invoice-dollar", text: "Accounts" },
    { path: "/documents", icon: "fa-solid fa-file-lines", text: "Documents" },
    { path: "/communications", icon: "fa-solid fa-comments", text: "Communications" },
    { path: "/reports-analytics", icon: "fa-solid fa-chart-line", text: "Reports & Analytics" },
    { path: "/settings", icon: "fa-solid fa-gear", text: "Settings" }
  ];

  const userMenuItems = [
    { path: "/user-dashboard", icon: "fa-solid fa-gauge", text: "Dashboard" },
    { path: "/tasks", icon: "fa-solid fa-diagram-project", text: "Tasks" },
    { path: "/contacts", icon: "fa-solid fa-envelope", text: "Contacts" },
    { path: "/documents", icon: "fa-solid fa-file-lines", text: "Documents" },
    { path: "/communications", icon: "fa-solid fa-comments", text: "Communications" },
  ];

  const menuToRender = role === "admin" ? adminMenuItems : userMenuItems;

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <div className="sidebar-header">
          {!collapsed && <h3>Navigation</h3>}
        </div>
        <ul className="menu">
          {menuToRender.map((item) => (
            <li
              key={item.path}
              className={`menu-item ${isActive(item.path) ? "active" : ""}`}
            >
              <div
                className="menu-link"
                onClick={() => handleNavigation(item.path)}
              >
                <i className={`fas ${item.icon}`}></i>
                {!collapsed && <span>{item.text}</span>}
              </div>
            </li>
          ))}
        </ul>

        {role === "admin" && !collapsed && (
          <div className="sidebar-bottom">
            <div className="admin-section">
              <div className="admin-icon">Ad</div>
              <span>Admin Panel</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;