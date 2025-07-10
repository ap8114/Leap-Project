import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiMenuUnfold2Line } from "react-icons/ri";
import "./Navbar.css"; // Import your CSS file for styling

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    const storedDetail = localStorage.getItem("login-detail");
    if (storedDetail) {
      try {
        const parsedDetail = JSON.parse(storedDetail);
        setUserName(parsedDetail.customerName || "Admin");
      } catch (err) {
        setUserName("User");
      }
    } else {
      setUserName("User");
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotification(false);
      }
    };

    if (showNotification) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNotification]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("login-detail");
    localStorage.removeItem("userRole");
    navigate("/");
  };

  return (
    <nav className="navbar custom-navbar p-0 shadow-sm position-sticky top-0 ">
      <div className="container-fluid d-flex flex-nowrap justify-content-between align-items-center px-2">

        {/* Left: Logo and Sidebar Toggle */}
        <div className="d-flex align-items-center">
          <Link to="/" className="navbar-brand d-flex align-items-center me-2">
            <img
              src="https://i.postimg.cc/RVJPy6VB/Whats-App-Image-2025-07-08-at-18-18-06-42bff2fc-removebg-preview.png"
              alt="FastTrack Software logo"
              style={{
                height: "60px", // controlled height
                width: "auto",
                objectFit: "contain",
                marginRight: 8,
              }}
            />
          </Link>
          <div
            className="nav-toggle-icon ms-2"
            onClick={toggleSidebar}
            style={{ cursor: "pointer" }}
          >
            <RiMenuUnfold2Line size={28} />
          </div>
        </div>

        {/* Center: Search Bar or Icon */}
        <div className="flex-grow-1 d-flex justify-content-center align-items-center">
          {/* Desktop search bar */}
          <input
            type="text"
            className="search-bar d-none d-md-block"
            placeholder="Search"
            style={{ minWidth: 200, maxWidth: 350 }}
          />
          {/* Mobile search icon */}
          <button
            className="btn btn-link text-white d-block d-md-none ms-1"
            style={{ fontSize: 22 }}
            aria-label="Search"

          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {/* Right: Actions (always in one line) */}
        <div className="d-flex align-items-center  ms-2 gap-2 flex-nowrap">
          {/* Notification bell */}
          <div className="position-relative">
            <button
              className="btn btn-sm p-0 border-0  me-4 bg-transparent"
              onClick={() => setShowNotification(!showNotification)}
              aria-label="Notifications"
            >
              <i className="fa-regular fa-bell fs-4 text-[#f76b1c] "></i>
            </button>
            {showNotification && (
              <div
                ref={notificationRef}
                className="notification-dropdown"
              >
                <div className="fw-bold mb-2 text-dark" style={{ color: "black" }}>Notifications</div>
                <div style={{ color: "#333", fontSize: "0.97rem" }}>
                  {/* Example notification */}
                  <div className="mb-2 text-muted">No new notifications.</div>
                </div>
              </div>
            )}
          </div>
          {/* Profile dropdown */}
          <div className="dropdown">
            <div
              className="d-flex align-items-center gap-2 "
              style={{ cursor: "pointer" }}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="avatar online me-4">
                <i className="fa-solid fa-circle-user fs-2"></i>
              </div>
            </div>
            <ul className="dropdown-menu dropdown-menu-end shadow-lg border-0 rounded-3 p-2 mt-2">
              <li>
                <a className="dropdown-item d-flex align-items-center gap-2 custom-hover" href="/profile">
                  <i className="bi bi-person-circle  custom-hover"></i> Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item d-flex align-items-center gap-2 custom-hover" href="/settings">
                  <i className="bi bi-gear custom-hover"></i> Settings
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>

                <button
                  className="dropdown-item d-flex align-items-center gap-2  custom-hover rounded-3 py-2"
                  onClick={handleLogout}
                >
                  <i className="bi bi-box-arrow-right custom-hover"></i> Logout
                </button>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState, useRef, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logoFastTrack from "../assets/logofasttrack.png";
// import "./Navbar.css";

// const createOptions = [
//   "Time entry",
//   "Expense entry",
//   "Task",
//   "Matter",
//   "Contact",
//   "Record payment",
//   "Trust request",
//   "Email log",
//   "Phone log",
//   "Internal message",
//   "Event",
//   "Note",
// ];

// const Navbar = () => {
//   const navigate = useNavigate();

//   // Timer state
//   const [timer, setTimer] = useState(0);
//   const [isTiming, setIsTiming] = useState(false);
//   const [showTimekeeper, setShowTimekeeper] = useState(false);
//   const timerInterval = useRef(null);

//   // Dropdowns
//   const [showCreate, setShowCreate] = useState(false);
//   const [showRecents, setShowRecents] = useState(false);
//   const [showNotifications, setShowNotifications] = useState(false);

//   // Refs for click outside
//   const notificationRef = useRef(null);
//   const createRef = useRef(null);
//   const recentsRef = useRef(null);

//   // Timer logic
//   useEffect(() => {
//     if (isTiming) {
//       timerInterval.current = setInterval(() => {
//         setTimer((prev) => prev + 1);
//       }, 1000);
//     } else if (timerInterval.current) {
//       clearInterval(timerInterval.current);
//     }
//     return () => clearInterval(timerInterval.current);
//   }, [isTiming]);

//   // Click outside handlers
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (notificationRef.current && !notificationRef.current.contains(e.target)) {
//         setShowNotifications(false);
//       }
//       if (createRef.current && !createRef.current.contains(e.target)) {
//         setShowCreate(false);
//       }
//       if (recentsRef.current && !recentsRef.current.contains(e.target)) {
//         setShowRecents(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Format timer
//   const formatTime = (sec) => {
//     const h = String(Math.floor(sec / 3600)).padStart(2, "0");
//     const m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
//     const s = String(sec % 60).padStart(2, "0");
//     return `${h}:${m}:${s}`;
//   };

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("login-detail");
//     localStorage.removeItem("userRole");
//     navigate("/");
//   };

//   return (
//     <nav className="navbar navbar-expand-lg">
//       <div className="container-fluid d-flex align-items-center px-3">
//         {/* Logo */}
//         <div className="d-flex align-items-center me-4">
//           <img
//             src={logoFastTrack}
//             alt="Logo"
//             style={{
//               height: "50px",
//               width: "auto",
//               maxWidth: "170px",
//               objectFit: "contain"
//             }}
//           />
//         </div>

//         {/* Search and Main Content */}
//         <div className="d-flex flex-grow-1 align-items-center justify-content-between">
//           {/* Search */}
//           <div className="d-flex mt-3" style={{ flex: 1, maxWidth: "600px" }}>
//             <div className="input-group" style={{ maxWidth: "350px" }}>
//               <input
//                 className="form-control border-0"
//                 style={{
//                   background: "#2a3a5a",
//                   color: "#fff",
//                   height: "40px"
//                 }}
//                 placeholder="Search Law Office of Admin"
//               />
//             </div>

//             {/* Recents */}
//             <div className="dropdown ms-3" ref={recentsRef}>
//               <button
//                 className="btn btn-outline-dark text-dark dropdown-toggle d-flex align-items-center"
//                 style={{
                 
//                   height: "40px",
//                   color: "#fff"
//                 }}
//                 onClick={() => setShowRecents(!showRecents)}
//               >
//                 Recents
//               </button>
//               {showRecents && (
//                 <div
//                   className="dropdown-menu show mt-2"
//                   style={{ minWidth: 320 }}
//                 >
//                   <div className="text-center py-4 text-muted">
//                     You don't have any recent items
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Right Side Controls */}
//           <div className="d-flex align-items-center ms-4">
//             {/* Timer */}
//             <div className="d-flex align-items-center me-3">
//               <button
//                 className="btn btn-primary d-flex align-items-center justify-content-center"
//                 style={{
//                   background: "#2a3a5a",
//                   border: "none",
//                   borderRadius: "6px",
//                   width: "110px",
//                   height: "40px",
//                   color: "#fff"
//                 }}
//                 onClick={() => setIsTiming(!isTiming)}
//               >
//                 <i className={`fa-solid fa-${isTiming ? "pause" : "play"} me-2`}></i>
//                 {formatTime(timer)}
//               </button>
//               <span
//                 className="mx-3"
//                 style={{
//                   borderLeft: "1px solid rgba(255,255,255,0.3)",
//                   height: "24px",
//                   display: "inline-block"
//                 }}
//               ></span>
//               <button
//                 className="btn btn-primary d-flex align-items-center justify-content-center"
//                 style={{
//                   background: "#2a3a5a",
//                   border: "none",
//                   borderRadius: "6px",
//                   width: "40px",
//                   height: "40px",
//                   color: "#fff"
//                 }}
//                 onClick={() => setShowTimekeeper(true)}
//               >
//                 <i className="fa-regular fa-clock"></i>
//               </button>
//             </div>

//             {/* Create new */}
//             <div className="dropdown me-3" ref={createRef}>
//               <button
//                 className="btn btn-primary d-flex align-items-center justify-content-center"
//                 style={{
//                   background: "#2a3a5a",
//                   border: "none",
//                   borderRadius: "6px",
//                   width: "120px",
//                   height: "40px",
//                   color: "#fff"
//                 }}
//                 onClick={() => setShowCreate(!showCreate)}
//               >
//                 Create new <i className="fa-solid fa-plus ms-2"></i>
//               </button>
//               {showCreate && (
//                 <div
//                   className="dropdown-menu show mt-2"
//                   style={{ minWidth: 220 }}
//                 >
//                   {createOptions.map((opt) => (
//                     <button
//                       key={opt}
//                       className="dropdown-item"
//                       onClick={() => {
//                         setShowCreate(false);
//                       }}
//                     >
//                       {opt}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Notification */}
//             <div className="position-relative me-3" ref={notificationRef}>
//               <button
//                 className="btn btn-primary d-flex align-items-center justify-content-center"
//                 style={{
//                   background: "#2a3a5a",
//                   border: "none",
//                   borderRadius: "6px",
//                   width: "40px",
//                   height: "40px",
//                   color: "#fff"
//                 }}
//                 onClick={() => setShowNotifications(!showNotifications)}
//               >
//                 <i className="fa-regular fa-bell"></i>
//               </button>
//               {showNotifications && (
//                 <div
//                   className="dropdown-menu show mt-2"
//                   style={{ minWidth: 300, right: 0, left: "auto" }}
//                 >
//                   <div className="fw-bold mb-2 px-3 pt-2">Notifications</div>
//                   <div className="px-3 pb-2">
//                     <div className="mb-2 text-muted">No new notifications.</div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* User Profile */}
//             <div className="dropdown">
//               <button
//                 className="btn btn-primary dropdown-toggle d-flex align-items-center justify-content-center"
//                 style={{
//                   background: "#2a3a5a",
//                   border: "none",
//                   borderRadius: "6px",
//                   width: "40px",
//                   height: "40px",
//                   color: "#fff"
//                 }}
//                 id="userDropdown"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 <i className="fa-solid fa-circle-user"></i>
//               </button>
//               <ul className="dropdown-menu dropdown-menu-end mt-2">
//                 <li>
//                   <Link className="dropdown-item" to="/profile">
//                     <i className="bi bi-person-circle me-2"></i> Profile
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/settings">
//                     <i className="bi bi-gear me-2"></i> Settings
//                   </Link>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>
//                 <li>
//                   <button className="dropdown-item" onClick={handleLogout}>
//                     <i className="bi bi-box-arrow-right me-2"></i> Logout
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;