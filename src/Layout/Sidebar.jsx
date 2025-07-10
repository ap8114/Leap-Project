import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
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
      menuItemClick(); // Close sidebar on mobile
    }
  };

  const adminMenuItems = [
    { path: "/dashboard", icon: "fa-solid fa-gauge", text: "Dashboard" },
    { path: "/matter", icon: "fa-solid fa-scale-balanced", text: "Matters" },
    { path: "/client", icon: "fa-solid fa-handshake", text: "Clients & CRM" },
    { path: "/document", icon: "fa-solid fa-file-lines", text: "Documents" },
    { path: "/calendar", icon: "fa-solid fa-calendar-check", text: "Calendar" },
    { path: "/tasksworkflow", icon: "fa-solid fa-diagram-project", text: "Tasks & Workflow" },
    { path: "/timebilling", icon: "fa-solid fa-stopwatch", text: "Time & Billing" },
    { path: "/reportsanalytics", icon: "fa-solid fa-chart-line", text: "Reports & Analytics" },
    { path: "/adminpage", icon: "fa-solid fa-user-shield", text: "Admin" },
    { path: "/activity", icon: "fa-solid fa-clock-rotate-left", text: "Activity" },
    { path: "/accounts", icon: "fa-solid fa-file-invoice-dollar", text: "Accounts" },
    { path: "/communications", icon: "fa-solid fa-comments", text: "Communications" },
    { path: "/contact", icon: "fa-solid fa-envelope", text: "Contact" },
    { path: "/setting", icon: "fa-solid fa-gear", text: "Settings" }
  ];

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar ">
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
                    textAlign: "center"
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

        {/* Bottom Section */}
        <div className="sidebar-bottom mt-auto px-2 pb-3">
          {/* Resource Center */}

          <Link to="/resourcecenter" className="text-decoration-none">
             <div className="menu-link d-flex align-items-center mb-3" style={{ cursor: "pointer" }}>
            <div
              className="d-flex align-items-center justify-content-center resource-icon"

            >
              <i className="fa-solid fa-question"></i>
            </div>

            {!collapsed && <span className="">Resource center</span>}
          </div>
          </Link>
       

          {/* User Info */}
          <div className="menu-link d-flex align-items-center mb-3" style={{ cursor: "pointer" }}>
            <div
              className=" resource-icon d-flex align-items-center justify-content-center"
            >
              Ad
            </div>
            {!collapsed && (
              <div className="">
                <div className="" style={{ lineHeight: 1 }}>Admin</div>
              </div>
            )}
          </div>

          {/* Collapse Button */}
          <div className=" menu-link d-flex align-items-center" style={{ cursor: "pointer" }} onClick={menuItemClick}>
            <div
              className="resource-icon d-flex align-items-center justify-content-center"

            >
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            {!collapsed && <span className="">Collapse</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
