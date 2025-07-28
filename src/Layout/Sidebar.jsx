// Sidebar.js
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ collapsed, menuItemClick }) => {
  const [role, setRole] = useState(localStorage.getItem("userRole") || "user");
  const navigate = useNavigate();
  const location = useLocation();

  // Close sidebar on first load if on mobile only once
  useEffect(() => {
    if (window.innerWidth < 768) {
      menuItemClick(true);
    }
    // Do not auto-close again on scroll/resize
  }, []); // Removed menuItemClick from dependency to prevent re-trigger

  const isActive = (path) => location.pathname === path;

  const handleNavigation = (path) => {
    navigate(path);
    if (window.innerWidth < 768) {
      menuItemClick(true);
    }
  };

  const adminMenuItems = [
    { path: "/admin-dashboard", icon: "fa-solid fa-chart-line", text: "Dashboard" },
    { path: "/clientmanagement", icon: "fa-solid fa-user-tie", text: "Client Management" },
    { path: "/leadmanagement", icon: "fa-solid fa-briefcase", text: "Lead Management" },
    { path: "/communication", icon: "fa-solid fa-comments", text: "Communication" },
    { path: "/appointement", icon: "fa-solid fa-calendar-check", text: "Appointment" },
    { path: "/reports", icon: "fa-solid fa-chart-pie", text: "Reports & Analytics" },
    { path: "/integration", icon: "fa-solid fa-plug", text: "Integrations" },
    { path: "/setting", icon: "fa-solid fa-gear", text: "Setting" },
  ];

  const userMenuItems = [
    { path: "/user-myprofile", icon: "fa-solid fa-user", text: "My Profile" },
    { path: "/mycase", icon: "fa-solid fa-scale-balanced", text: "My Case" },
    { path: "/message", icon: "fa-solid fa-envelope", text: "Message" },
    { path: "/appointments", icon: "fa-solid fa-calendar-check", text: "Appointments" },
    { path: "/documents", icon: "fa-solid fa-file-alt", text: "Documents" },
    { path: "/feedback", icon: "fa-solid fa-headset", text: "Feedback & Support" },
  ];

  const menuToRender = role === "admin" ? adminMenuItems : userMenuItems;

  return (
    <div className={`sidebar-container  ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <div className="sidebar-header"></div>
        <ul className="menu">
          {menuToRender.map((item) => (
            <li key={item.path} className={`menu-item ${isActive(item.path) ? "active" : ""}`}>
              <div className="menu-link" onClick={() => handleNavigation(item.path)}>
                <i className={`fas ${item.icon}`}></i>
                {!collapsed && <span>{item.text}</span>}
              </div>
            </li>
          ))}
        </ul>

        {role === "admin" && !collapsed && (
          <div className="sidebar-bottom">
            <div className="admin-section">{/* Optional admin section */}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
