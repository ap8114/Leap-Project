import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Admin from "../Component/AdminDashboard/Admin/Admin";

const Sidebar = ({ collapsed, menuItemClick }) => {
   const [showAdmin, setShowAdmin] = useState(false);
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
    { path: "/calendar", icon: "fa-solid fa-calendar-check", text: "Calendar" },
    { path: "/tasks", icon: "fa-solid fa-diagram-project", text: "Tasks" },
    { path: "/matter", icon: "fa-solid fa-scale-balanced", text: "Matters" },
     { path: "/contact", icon: "fa-solid fa-envelope", text: "Contact" },
      { path: "/activity", icon: "fa-solid fa-clock-rotate-left", text: "Activity" },
       { path: "/timebilling", icon: "fa-solid fa-stopwatch", text: "Time & Billing" },
       { path: "/accounts", icon: "fa-solid fa-file-invoice-dollar", text: "Accounts" },
       { path: "/document", icon: "fa-solid fa-file-lines", text: "Documents" },
       { path: "/communications", icon: "fa-solid fa-comments", text: "Communications" },
        { path: "/reportsanalytics", icon: "fa-solid fa-chart-line", text: "Reports & Analytics" },
        { path: "/setting", icon: "fa-solid fa-gear", text: "Settings" }
        //  { path: "/Profile", icon: "fa-solid fa-gear", text: "Profile" }
   
  ];

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar  ">
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
            {/* Resource Center */}
          {/* User Info */}
           {/* Collapse Button */}
        <div className="sidebar-bottom mt-auto px-2 pb-3">
          {/* <Link to="/resourcecenter" className="text-decoration-none">
             <div className="menu-link d-flex align-items-center mb-3" style={{ cursor: "pointer" }}>
            <div
              className="d-flex align-items-center justify-content-center resource-icon"

            >
              <i className="fa-solid fa-question"></i>
            </div>

            {!collapsed && <span className="">Resource center</span>}
          </div>
          </Link> */}
       

           <div
        className="menu-link d-flex align-items-center mb-3"
        style={{ cursor: "pointer" }}
        onClick={() => setShowAdmin(true)}
      >
        <div className="resource-icon d-flex align-items-center justify-content-center">
          Ad
        </div>
        {!collapsed && (
          <div style={{ lineHeight: 1 }}>Admin</div>
        )}
      </div>

      {/* Admin popup */}
      <Admin
        visible={showAdmin}
        onClose={() => setShowAdmin(false)}
        collapsed={collapsed}
      />
         
         
          {/* <div className=" menu-link d-flex align-items-center" style={{ cursor: "pointer" }} onClick={menuItemClick}>
            <div
              className="resource-icon d-flex align-items-center justify-content-center"

            >
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            {!collapsed && <span className="">Collapse</span>}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
