import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Admin = ({ visible, onClose, collapsed }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div
      className="card shadow position-absolute"
      style={{
        width: "280px",
        top: "80px",
        left: collapsed ? "70px" : "160px", // Adjust based on sidebar
        zIndex: 1050,
      }}
      ref={popupRef}
    >
      <div className="card-body">
        <h6 className="mb-1 fw-bold text-capitalize">aman patidar</h6>
        <p className="mb-1 text-muted small">
          Support code:<br />
          <strong>217-048-295-4273</strong>
        </p>
        <a href="#profile" className="d-block mb-2 text-primary text-decoration-underline">
          View Profile
        </a>
        <hr />
        <p className="mb-1 fw-bold">Priority support</p>
        <p className="small mb-2">Phone: <strong>1 888 238 3197</strong></p>
        <ul className="list-unstyled mb-0">
          <li><a href="#upgrade" className="text-dark text-decoration-none">Upgrade plan</a></li>
          <li><a href="#rewards" className="text-dark text-decoration-none">Referral rewards</a></li>
          <li><a href="#help" className="text-dark text-decoration-none">Help center</a></li>
          <li><a href="#webinars" className="text-dark text-decoration-none">Webinars</a></li>
          <li><a href="#signout" className="text-dark text-decoration-none">Sign out</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Admin;
