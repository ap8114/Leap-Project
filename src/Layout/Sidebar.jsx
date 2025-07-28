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
  {
    path: "/admin-dashboard",
    icon: "fa-solid fa-chart-line", // Dashboard
    text: "Dashboard",
  },
  {
    path: "/clientmanagement",
    icon: "fa-solid fa-user-tie", // Client Management
    text: "Client Management",
  },
  {
    path: "/leadmanagement",
    icon: "fa-solid fa-briefcase", // Lead Management
    text: "Lead Management",
  },
  {
    path: "/communication",
    icon: "fa-solid fa-comments", // Communication
    text: "Communication",
  },
  {
    path: "/appointement",
    icon: "fa-solid fa-calendar-check", // Appointment
    text: "Appointment",
  },
  {
    path: "/reports",
    icon: "fa-solid fa-chart-pie", // Reports & Analytics
    text: "Reports & Analytics",
  },
  {
    path: "/integration",
    icon: "fa-solid fa-plug", // Integrations
    text: "Integrations",
  },
  {
    path: "/setting",
    icon: "fa-solid fa-gear", // Settings
    text: "Setting",
  },
];


 const userMenuItems = [
  { path: "/user-myprofile", icon: "fa-solid fa-user", text: "My Profile" },
  { path: "/mycase", icon: "fa-solid fa-scale-balanced", text: "My Case" },
  { path: "/message", icon: "fa-solid fa-envelope", text: "Message" },
  { path: "/appointments", icon: "fa-solid fa-calendar-check", text: "Appointments" },
  { path: "/documents", icon: "fa-solid fa-file-alt", text: "Documents" },
  { path: "/feedback", icon: "fa-solid fa-headset", text: "Feedback & Support" }
];



  const menuToRender = role === "admin" ? adminMenuItems : userMenuItems;

  return (
    <div className={`sidebar-container  ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <div className="sidebar-header">
          
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
             
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;