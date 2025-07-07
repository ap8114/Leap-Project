import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Layout/Navbar";
import Sidebar from "./Layout/Sidebar";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import ForgotPassword from "./Auth/ForgotPassword";

import { useState } from "react";
import Dashboard from "./Component/AdminDashboard/Dashboard/Dashboard";






function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const menusidebarcollaps = () => {
    setIsSidebarCollapsed(true);
  };

  const menuItemClick = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };
  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };
  const location = useLocation();
  // Inside component
  const noLayoutRoutes = ["/", "/signup", "/forgotpassword"];
  const isNoLayoutPage = noLayoutRoutes.includes(location.pathname);
  // Hide layout (navbar/sidebar) only on login page
  const hideLayout = location.pathname === "/" || location.pathname === "/forgotpassword" || location.pathname === "/signup";
  return (
    <>
      {/* navbar */}
      {!hideLayout && <Navbar toggleSidebar={toggleSidebar} />}
      {/* navbar end */}
      {/* sidebar start */}
      <div className={`main-content${hideLayout ? "" : ""}`}>
        {!hideLayout && (
          <Sidebar  collapsed={isSidebarCollapsed}  menuItemClick={menuItemClick}/>
        )}
        {/* sidebar end */}
        {/* right side  */}
        <>
          {isNoLayoutPage ? (
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
            </Routes>
          ) : (
            <div className={`right-side-content${isSidebarCollapsed ? " collapsed" : ""}`}>
              <Routes>
                {/* AdminDashboard */}
                <Route path="/dashboard" element={<Dashboard />} />
                {/*<Route path="/managecustomer" element={<Managecustomer />} />
                <Route path="/fundrequest" element={<FundRequest />} />
                <Route path="/balancetracker" element={<FundingBalanceTracker />} /> */}
              </Routes>
            </div>
          )}
        </>
      </div>
    </>
  );
}
export default App;
