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
      ref={popupRef}
      className="
        card
        shadow
        position-absolute
        start-0 
        mt-3
        ms-3
        p-3
        w-100 
        w-sm-75 
        w-md-50 
        w-lg-25
      "
      style={{
        top: "80px",
        left: collapsed ? "70px" : "160px",
        zIndex: 1050,
      }}
    >
   <div className="card-body p-0">
        <div className="px-3 py-2">
          <h6 className="mb-1 fw-bold text-capitalize">john smith</h6>
          <p className="mb-1 text-muted small">
            Support code: 077-450-774-0288
          </p>
          <a href="#profile" className="btn btn-outline-primary btn-sm mb-2">
            View Profile
          </a>
        </div>
        <hr className="my-2" />
        <div className="px-3 py-2">
          <p className="mb-1 fw-bold small">Priority support</p>
          <p className="mb-0 text-muted small">Phone: 1 888 238 3197</p>
        </div>
        <hr className="my-2" />
        <ul className="list-unstyled px-3 mb-0">
          <li className="mb-2">
            <a href="/pricingplan" className="text-decoration-none text-dark small">
              Upgrade plan
            </a>
          </li>
          <li className="mb-2">
            <a href="/" className="text-decoration-none text-dark small">
              Referral rewards
            </a>
          </li>
          <li className="mb-2">
            <a href="/" className="text-decoration-none text-dark small">
              Help center
            </a>
          </li>
          <li className="mb-2">
            <a href="/" className="text-decoration-none text-dark small">
              Webinars
            </a>
          </li>
          <li>
            <a href="/login" className="text-decoration-none text-dark small">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Admin;
