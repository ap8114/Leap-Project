// App.js
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Layout/Navbar";
import Sidebar from "./Layout/Sidebar";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import ForgotPassword from "./Auth/ForgotPassword";
import { useState, useEffect } from "react";

// Website Pages
import TimeRecordingBilling from "./Component/Website/Pages/Features/TimeRecordingBilling";
import ClientAndMatterManagement from "./Component/Website/Pages/Features/ClientAndMatterManagement";
import DocumentAutomation from "./Component/Website/Pages/Features/DocumentAutomation";
import Home from "./Component/Website/HomePages/Home";
import Reporting from "./Component/Website/Pages/Features/Reporting";
import ClientService from "./Component/Website/Pages/Features/ClientService";
import Conveyancing from "./Component/Website/Pages/Solutions/Conveyancing";
import EstateProbate from "./Component/Website/Pages/Solutions/EstateProbate";
import Family from "./Component/Website/Pages/Solutions/Family.JSX";
import Employment from "./Component/Website/Pages/Solutions/Employment";
import PersonalInjury from "./Component/Website/Pages/Solutions/PersonalInjury";
import ContactUs from "./Component/Website/ContactUs/ContactUs";
import Company from "./Component/Website/Pages/Company/Company";
import Resources from "./Component/Website/Pages/Resources/Resources";
import AdminDashboard from "./Component/Admin/Dashboard/AdminDashboard";
import UserDashboard from "./Component/User/Dashboard/UserDashboard";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  const location = useLocation();

  // Define routes that shouldn't show layout (navbar/sidebar)
  const noLayoutRoutes = [
    "/",
    "/login",
    "/signup",
    "/forgotpassword",
    "/client-and-matter-management",
    "/document-automation",
    "/timerecordingbilling",
    "/reporting",
    "/clientservice",
    "/conveyancing",
    "/estateprobate",
    "/family",
    "/employment",
    "/personalinjury",
    "/contactus",
    "/company",
    "/resources"
  ];

  const isDashboardRoute = location.pathname.includes("dashboard");
  const showLayout = !noLayoutRoutes.includes(location.pathname) || isDashboardRoute;

  return (
    <>
      {showLayout && <Navbar toggleSidebar={toggleSidebar} />}
      <div className="main-container">
        {showLayout && (
          <Sidebar
            collapsed={isSidebarCollapsed}
            menuItemClick={toggleSidebar}
          />
        )}
        <div
          className={`right-side-content ${isSidebarCollapsed ? "collapsed" : ""
            }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/client-and-matter-management" element={<ClientAndMatterManagement />} />
            <Route path="/document-automation" element={<DocumentAutomation />} />
            <Route path="/timerecordingbilling" element={<TimeRecordingBilling />} />
            <Route path="/reporting" element={<Reporting />} />
            <Route path="/clientservice" element={<ClientService />} />
            <Route path="/conveyancing" element={<Conveyancing />} />
            <Route path="/estateprobate" element={<EstateProbate />} />
            <Route path="/family" element={<Family />} />
            <Route path="/employment" element={<Employment />} />
            <Route path="/personalinjury" element={<PersonalInjury />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/company" element={<Company />} />
            <Route path="/resources" element={<Resources />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />

            {/* Admin Dashboard */}
            <Route path="/admin-dashboard" element={<AdminDashboard />} />

            {/* User Dashboard */}
            <Route path="/user-dashboard" element={<UserDashboard />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;