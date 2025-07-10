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
//     <nav className="navbar custom-navbar p-0 shadow-sm position-sticky top-0 ">
//       <div className="container-fluid d-flex flex-nowrap justify-content-between align-items-center px-2">

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



import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiMenuUnfold2Line } from "react-icons/ri";
import "./Navbar.css";

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
    <nav className="navbar custom-navbar p-0">
      <div className="container-fluid d-flex flex-nowrap justify-content-between align-items-center px-3 py-2">
        {/* Left: Logo and Sidebar Toggle */}
        <div className="d-flex align-items-center">
          <div
            className="nav-toggle-icon me-3"
            onClick={toggleSidebar}
            style={{ cursor: "pointer" }}
          >
            <RiMenuUnfold2Line size={24} />
          </div>
          <div className="d-flex align-items-center">
            <span className="fw-bold me-2">©</span>
            <div className="search-container position-relative">
              <input
                type="text"
                className="search-input"
                placeholder="Search Law Office of aman patidar"
              />
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
            </div>
          </div>
        </div>

        {/* Right: User and Notification */}
        <div className="d-flex align-items-center gap-3">
          {/* Recent Activity */}
          <div className="recent-activity d-flex align-items-center">
            <span className="me-2">Recents ~</span>
            <span className="time">00:00:00</span>
          </div>

          {/* Notification */}
          <div className="position-relative">
            <button
              className="btn btn-sm p-0 border-0 bg-transparent"
              onClick={() => setShowNotification(!showNotification)}
              aria-label="Notifications"
            >
              <i className="fa-regular fa-bell fs-5"></i>
            </button>
            {showNotification && (
              <div
                ref={notificationRef}
                className="notification-dropdown"
              >
                <div className="fw-bold mb-2">Notifications</div>
                <div>
                  <div className="mb-2 text-muted">No new notifications.</div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile */}
          <div className="dropdown">
            <div
              className="d-flex align-items-center"
              style={{ cursor: "pointer" }}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="avatar">
                <i className="fa-solid fa-circle-user fs-3"></i>
              </div>
            </div>
            <ul className="dropdown-menu dropdown-menu-end shadow-lg border-0 rounded-1 p-2 mt-2">
              <li>
                <Link className="dropdown-item d-flex align-items-center gap-2 py-2" to="/profile">
                  <i className="bi bi-person-circle"></i> Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item d-flex align-items-center gap-2 py-2" to="/settings">
                  <i className="bi bi-gear"></i> Settings
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider my-1" />
              </li>
              <li>
                <button
                  className="dropdown-item d-flex align-items-center gap-2 py-2"
                  onClick={handleLogout}
                >
                  <i className="bi bi-box-arrow-right"></i> Logout
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