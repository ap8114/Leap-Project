// import React, { useEffect, useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { RiMenuUnfold2Line } from "react-icons/ri";
// import "./Navbar.css"; // Import your CSS file for styling

// const Navbar = ({ toggleSidebar }) => {
//   const navigate = useNavigate();
//   const [userName, setUserName] = useState("");
//   const [showNotification, setShowNotification] = useState(false);
//   const notificationRef = useRef(null);

//   useEffect(() => {
//     const storedDetail = localStorage.getItem("login-detail");
//     if (storedDetail) {
//       try {
//         const parsedDetail = JSON.parse(storedDetail);
//         setUserName(parsedDetail.customerName || "Admin");
//       } catch (err) {
//         setUserName("User");
//       }
//     } else {
//       setUserName("User");
//     }
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         notificationRef.current &&
//         !notificationRef.current.contains(event.target)
//       ) {
//         setShowNotification(false);
//       }
//     };

//     if (showNotification) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [showNotification]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("login-detail");
//     localStorage.removeItem("userRole");
//     navigate("/");
//   };

//   return (
//     <nav className="navbar custom-navbar p-0 shadow-sm position-sticky top-0 w-100">
//       <div className="container-fluid d-flex flex-nowrap justify-content-between align-items-center">

//         {/* Left: Logo and Sidebar Toggle */}
//         <div className="d-flex align-items-center">
//           <Link to="/" className="navbar-brand d-flex align-items-center me-2">
//             <img
//               src="https://i.postimg.cc/RVJPy6VB/Whats-App-Image-2025-07-08-at-18-18-06-42bff2fc-removebg-preview.png"
//               alt="FastTrack Software logo"
//               style={{
//                 height: "60px", // controlled height
//                 width: "auto",
//                 objectFit: "contain",
//                 marginRight: 8,
//               }}
//             />
//           </Link>
//           <div
//             className="nav-toggle-icon ms-2"
//             onClick={toggleSidebar}
//             style={{ cursor: "pointer" }}
//           >
//             <RiMenuUnfold2Line size={28} />
//           </div>
//         </div>

//         {/* Center: Search Bar or Icon */}
//         <div className="flex-grow-1 d-flex justify-content-center align-items-center">
//           {/* Desktop search bar */}
//           <input
//             type="text"
//             className="search-bar d-none d-md-block"
//             placeholder="Search"
//             style={{ minWidth: 200, maxWidth: 350 }}
//           />
//           {/* Mobile search icon */}
//           <button
//             className="btn btn-link text-white d-block d-md-none ms-1"
//             style={{ fontSize: 22 }}
//             aria-label="Search"

//           >
//             <i className="fa-solid fa-magnifying-glass"></i>
//           </button>
//         </div>

//         {/* Right: Actions (always in one line) */}
//         <div className="d-flex align-items-center  ms-2 gap-2 flex-nowrap">
//           {/* Notification bell */}
//           <div className="position-relative">
//             <button
//               className="btn btn-sm p-0 border-0  me-4 bg-transparent"
//               onClick={() => setShowNotification(!showNotification)}
//               aria-label="Notifications"
//             >
//               <i className="fa-regular fa-bell fs-4 text-[#f76b1c] "></i>
//             </button>
//             {showNotification && (
//               <div
//                 ref={notificationRef}
//                 className="notification-dropdown"
//               >
//                 <div className="fw-bold mb-2 text-dark" style={{ color: "black" }}>Notifications</div>
//                 <div style={{ color: "#333", fontSize: "0.97rem" }}>
//                   {/* Example notification */}
//                   <div className="mb-2 text-muted">No new notifications.</div>
//                 </div>
//               </div>
//             )}
//           </div>
//           {/* Profile dropdown */}
//           <div className="dropdown">
//             <div
//               className="d-flex align-items-center gap-2 "
//               style={{ cursor: "pointer" }}
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               <div className="avatar online me-4">
//                 <i className="fa-solid fa-circle-user fs-2"></i>
//               </div>
//             </div>
//             <ul className="dropdown-menu dropdown-menu-end shadow-lg border-0 rounded-3 p-2 mt-2">
//               <li>
//                 <a className="dropdown-item d-flex align-items-center gap-2 custom-hover" href="/profile">
//                   <i className="bi bi-person-circle  custom-hover"></i> Profile
//                 </a>
//               </li>
//               <li>
//                 <a className="dropdown-item d-flex align-items-center gap-2 custom-hover" href="/settings">
//                   <i className="bi bi-gear custom-hover"></i> Settings
//                 </a>
//               </li>
//               <li>
//                 <hr className="dropdown-divider" />
//               </li>
//               <li>

//                 <button
//                   className="dropdown-item d-flex align-items-center gap-2  custom-hover rounded-3 py-2"
//                   onClick={handleLogout}
//                 >
//                   <i className="bi bi-box-arrow-right custom-hover"></i> Logout
//                 </button>

//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoFastTrack from "../assets/logofasttrack.png";
import { RiMenuUnfold2Line } from "react-icons/ri";
import "./Navbar.css";

const createOptions = [
  "Time entry",
  "Expense entry",
  "Task",
  "Matter",
  "Contact",
  "Record payment",
  "Trust request",
  "Email log",
  "Phone log",
  "Internal message",
  "Event",
  "Note",
];

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const [timer, setTimer] = useState(0);
  const [isTiming, setIsTiming] = useState(false);
  const [showTimekeeper, setShowTimekeeper] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
const [activeDropdown, setActiveDropdown] = useState(null); // can be 'recents', 'notifications', etc.

  const [showCreate, setShowCreate] = useState(false);
  const [showRecents, setShowRecents] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);



  const timerInterval = useRef(null);
  const notificationRef = useRef(null);
  const createRef = useRef(null);
  const recentsRef = useRef(null);
  const profileRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
  const handleOutsideClick = () => {
    setActiveDropdown(null);
  };
  document.addEventListener('click', handleOutsideClick);
  return () => {
    document.removeEventListener('click', handleOutsideClick);
  };
}, []);

// const toggleDropdown = (e, dropdownName) => {
//   e.stopPropagation();
//   e.preventDefault();

//   // Close all dropdowns first
//   const allDropdownsClosed = {
//     create: false,
//     recents: false,
//     notifications: false,
//     profile: false
//   };

//   // Only open the clicked dropdown if it wasn't already open
//   setShowCreate(dropdownName === 'create' ? !showCreate : false);
//   setShowRecents(dropdownName === 'recents' ? !showRecents : false);
//   setShowNotifications(dropdownName === 'notifications' ? !showNotifications : false);
//   setShowProfileDropdown(dropdownName === 'profile' ? !showProfileDropdown : false);
// };

const toggleDropdown = (e, dropdownName) => {
  e.stopPropagation();
  e.preventDefault();
  setActiveDropdown(prev => (prev === dropdownName ? null : dropdownName));
};

  useEffect(() => {
    if (isTiming) {
      timerInterval.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else if (timerInterval.current) {
      clearInterval(timerInterval.current);
    }
    return () => clearInterval(timerInterval.current);
  }, [isTiming]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notificationRef.current && !notificationRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
      if (createRef.current && !createRef.current.contains(e.target)) {
        setShowCreate(false);
      }
      if (recentsRef.current && !recentsRef.current.contains(e.target)) {
        setShowRecents(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileDropdown(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        !e.target.classList.contains('navbar-toggler')
      ) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatTime = (sec) => {
    const h = String(Math.floor(sec / 3600)).padStart(2, "0");
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("login-detail");
    localStorage.removeItem("userRole");
    navigate("/");
  };

  const toggleMobileMenu = (e) => {
 
   
    setShowMobileMenu((prev) => (!prev));
  };

 

  return (
    <nav className="navbar custom-navbar p-0 shadow-sm position-sticky top-0 w-100 bg-white">
      <div className="container-fluid d-flex align-items-center px-3 py-2">
        {/* Logo and Mobile Menu Button */}
        <div className="d-flex align-items-center me-4">

          <img
            src={logoFastTrack}
            alt="Logo"
            className="img-fluid"
            style={{
              height: "50px",
              width: "auto",
              maxWidth: "170px",
              objectFit: "contain"
            }}
          />

          <div
            className="nav-toggle-icon ms-2"
            onClick={toggleSidebar}
            style={{ cursor: "pointer" }}
          >
            <RiMenuUnfold2Line size={28} />
          </div>
          <button


            className="navbar-toggler me-2 d-lg-none"
            type="button"
            onClick={toggleMobileMenu}
            style={{ border: 'none', marginLeft: '130px' }}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div
            ref={mobileMenuRef}
            className="mobile-menu d-lg-none position-absolute top-100 start-0 bg-white w-100 p-3 shadow"
            style={{ zIndex: 1000 }}
          >
            <div className="mb-3">
              <div className="input-group">
                <input
                  className="form-control border-3 w-100"
                  style={{ background: "#fff", height: "40px" }}
                  placeholder="Search Law Office of Admin"
                />
              </div>
            </div>

            <div className="mb-3">
              <button
                className="btn btn-light w-100 d-flex align-items-center justify-content-between"
                style={{
                  background: "#fff",
                  border: "1px solid #2a3a5a",
                  borderRadius: "6px",
                  height: "40px",
                }}
                onClick={(e) => toggleDropdown(e, 'recents')}
              >
                Recents
                <i className={`fas fa-chevron-${showRecents ? 'up' : 'down'}`}></i>
              </button>
              {activeDropdown === "recents" && (
                <div className="mt-2 p-2 border rounded">
                  <div className="text-center py-2 text-muted">
                    You don't have any recent items
                  </div>
                </div>
              )}
            </div>

            <div className="mb-3">
              <button
                className="btn btn-light w-100 d-flex align-items-center justify-content-between"
                style={{
                  border: "none",
                  borderRadius: "6px",
                  height: "40px",
                }}
                onClick={() => setIsTiming(!isTiming)}
              >
                <span>
                  <i className={`fa-solid fa-${isTiming ? "pause" : "play"} me-2`}></i>
                  {formatTime(timer)}
                </span>
              </button>
            </div>

            {/* <div className="mb-3">
              <button
                className="btn btn-light w-100 d-flex align-items-center justify-content-between"
                style={{
                  border: "none",
                  borderRadius: "6px",
                  height: "40px",
                }}
                onClick={(e) => toggleDropdown(e, 'create')}
              >
                Create new <i className="fa-solid fa-plus"></i>
              </button>
              {showCreate && (
                <div className="mt-2 p-2 border rounded">
                  {createOptions.map((opt) => (
                    <button
                      key={opt}
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowCreate(false);
                        setShowMobileMenu(false);
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div> */}

            <div className="mb-3">
              <button
                className="btn btn-light w-100 d-flex align-items-center justify-content-between"
                style={{
                  border: "none",
                  borderRadius: "6px",
                  height: "40px",
                }}
                onClick={(e) => toggleDropdown(e, 'notifications')}
              >
                Notifications <i className="fa-regular fa-bell"></i>
              </button>
              {  activeDropdown === "notifications" && (
                <div className="mt-2 p-2 border rounded">
                  <div className="fw-bold mb-2">Notifications</div>
                  <div className="text-muted">No new notifications.</div>
                </div>
              )}
            </div>

            <div>
              <button
                className="btn btn-light w-100 d-flex align-items-center justify-content-between"
                style={{
                  border: "none",
                  borderRadius: "6px",
                  height: "40px",
                }}
                onClick={(e) => toggleDropdown(e, 'profile')}
              >
                Profile <i className="fa-solid fa-circle-user"></i>
              </button>
              {activeDropdown === "profile"  && (
                <div className="mt-2 p-2 border rounded">
                  <Link
                    className="dropdown-item d-block py-2"
                    to="/profile"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowProfileDropdown(false);
                      setShowMobileMenu(false);
                    }}
                  >
                    <i className="bi bi-person-circle me-2"></i> Profile
                  </Link>
                  <Link
                    className="dropdown-item d-block py-2"
                    to="/settings"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowProfileDropdown(false);
                      setShowMobileMenu(false);
                    }}
                  >
                    <i className="bi bi-gear me-2"></i> Settings
                  </Link>
                  <hr className="dropdown-divider my-2" />
                  <button
                    className="dropdown-item d-block py-2 w-100 text-start"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLogout();
                      setShowProfileDropdown(false);
                      setShowMobileMenu(false);
                    }}
                  >
                    <i className="bi bi-box-arrow-right me-2"></i> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="d-none d-lg-flex flex-grow-1 align-items-center justify-content-between">
          <div className="d-flex mt-3" style={{ flex: 1, maxWidth: "600px" }}>
            <div className="input-group" style={{ maxWidth: "350px" }}>
              <input
                className="form-control border-3"
                style={{ background: "#fff", height: "40px" }}
                placeholder="Search Law Office of Admin"
              />
            </div>

            <div className="dropdown ms-3" ref={recentsRef}>
              <button
                className="btn dropdown-toggle d-flex align-items-center"
                style={{
                  background: "#fff",
                  border: "1px solid #2a3a5a",
                  borderRadius: "6px",
                  height: "40px",
                  minWidth: "100px",
                }}
                onClick={(e) => toggleDropdown(e, 'recents')}
              >
                Recents
              </button>

              {showRecents && (
                <div className="dropdown-menu show mt-2" style={{ minWidth: 320 }}>
                  <div className="text-center py-4 text-muted">
                    You don't have any recent items
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Controls */}
          <div className="d-flex align-items-center ms-4 gap-3">
            {/* Timer */}
            <div className="d-flex align-items-center">
              <button
                className="btn btn-light text-dark d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: "6px",
                  width: "110px",
                  height: "40px",
                }}
                onClick={() => setIsTiming(!isTiming)}
              >
                <i className={`fa-solid fa-${isTiming ? "pause" : "play"} me-2`}></i>
                {formatTime(timer)}
              </button>
              <span
                className="mx-2"
                style={{
                  borderLeft: "1px solid rgba(0, 0, 0, 0.3)",
                  height: "24px",
                }}
              ></span>
              <button
                className="btn btn-light d-flex align-items-center justify-content-center"
                style={{
                  border: "none",
                  borderRadius: "6px",
                  width: "40px",
                  height: "40px",
                }}
                onClick={() => setShowTimekeeper(true)}
              >
                <i className="fa-regular fa-clock"></i>
              </button>
            </div>

            {/* Create New */}
            {/* <div className="dropdown" ref={createRef}>
              <button
                className="btn btn-light d-flex align-items-center justify-content-center"
                style={{
                  border: "none",
                  borderRadius: "6px",
                  width: "160px",
                  height: "40px",
                }}
                onClick={(e) => toggleDropdown(e, 'create')}
              >
                Create new <i className="fa-solid fa-plus ms-2"></i>
              </button>

              {showCreate && (
                <div className="dropdown-menu show mt-2" style={{ minWidth: 220 }}>
                  {createOptions.map((opt) => (
                    <button
                      key={opt}
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowCreate(false);
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div> */}

            {/* Notifications */}
            <div className="position-relative" ref={notificationRef}>
              <button
                className="btn btn-light d-flex align-items-center justify-content-center"
                style={{
                  border: "none",
                  borderRadius: "6px",
                  width: "40px",
                  height: "40px",
                }}
                onClick={(e) => toggleDropdown(e, 'notifications')}
              >
                <i className="fa-regular fa-bell"></i>
              </button>

              {showNotifications && (
                <div className="dropdown-menu show mt-2" style={{ minWidth: 300, right: 0, left: "auto" }}>
                  <div className="fw-bold mb-2 px-3 pt-2">Notifications</div>
                  <div className="px-3 pb-2">
                    <div className="mb-2 text-muted">No new notifications.</div>
                  </div>
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="dropdown" ref={profileRef}>
              <button
                className="btn btn-light d-flex align-items-center justify-content-center"
                style={{
                  border: "none",
                  borderRadius: "6px",
                  width: "40px",
                  height: "40px",
                }}
                onClick={(e) => toggleDropdown(e, 'profile')}
              >
                <i className="fa-solid fa-circle-user"></i>
              </button>

              {showProfileDropdown && (
                <ul className="dropdown-menu show dropdown-menu-end mt-2">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/profile"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowProfileDropdown(false);
                      }}
                    >
                      <i className="bi bi-person-circle me-2"></i> Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/settings"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowProfileDropdown(false);
                      }}
                    >
                      <i className="bi bi-gear me-2"></i> Settings
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLogout();
                        setShowProfileDropdown(false);
                      }}
                    >
                      <i className="bi bi-box-arrow-right me-2"></i> Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;