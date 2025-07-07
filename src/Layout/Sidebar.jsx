import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ collapsed, menuItemClick }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem("userRole");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu((prev) => (prev === menuName ? null : menuName));
  };

  const isActive = (path) => location.pathname === path;

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      menuItemClick(); // Close sidebar automatically on mobile after navigation
    }
  };

  // Menu items configuration
  const adminMenuItems = [
    { path: "/dashboard", icon: "fa-tachometer-alt", text: "Dashboard" },
    { path: "/managecustomer", icon: "fa-users", text: "Manage_Customers" },
    { path: "/fundrequest", icon: "fa-hand-holding-usd", text: "Fund Requests" },
    { path: "/paymenttracking", icon: "fa-bell", text: "Payment Tracking" },
    { path: "/balancetracker", icon: "fa-receipt", text: "Funding Balance Tracker" },
    { path: "/payoff", icon: "fa-comments-dollar", text: "Payoff Management" },
    { path: "/creditupgraderequests", icon: "fa-arrow-up", text: "Credit Upgrade Requests" },
    { path: "/reportdownload", icon: "fa-file-download", text: "Reports & Download" }
  ];

  const customerMenuItems = [
    { path: "/customer-dashboard", icon: "fa-home", text: "Dashboard" },
    { path: "/requestfund", icon: "fa-wallet", text: "Request Funds" },
    { path: "/transactionhistory", icon: "fa-history", text: "History" },
    { path: "/EarlyPay", icon: "fa-wallet", text: "Early Pay" },
    { path: "/discount", icon: "fa-percentage", text: "Discount" },
    { path: "/notificationalert", icon: "fa-bell", text: "Notifications" },
    { path: "/refer", icon: "fa-user-friends", text: "Refer a Friend" }
  ];

  const sidebarMenu = [
    { icon: "fa-solid fa-bars" },
    { icon: "fa-regular fa-calendar" },
    { icon: "fa-regular fa-user" },
    { icon: "fa-regular fa-briefcase" },
    { icon: "fa-solid fa-chart-bar" },
    { icon: "fa-regular fa-folder" },
  ];

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <ul className="menu">
          {(role === "admin" ? adminMenuItems : customerMenuItems).map((item) => (
            <li
              key={item.path}
              className={`menu-item ${isActive(item.path) ? "active" : ""}`}
              style={{ width: "100%" }}
            >
              <div
                className="menu-link d-flex align-items-center "
                style={{
                  padding: "12px 16px ",
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
                    {item.text.replace("_", " ")}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="sidebar-modern-footer">
        <span className="sidebar-dot sidebar-dot-active"></span>
        <span className="sidebar-dot"></span>
      </div> */}
      
    </div>
  );
};

export default Sidebar;