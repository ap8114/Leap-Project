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

// Admin & User
import AdminDashboard from "./Component/Admin/Dashboard/AdminDashboard";

import Clientmanagement from "./Component/Admin/ClientManagement/Clientmanagement";
import LeadManagement from "./Component/Admin/LeadManagement/LeadManagement";
import MessageCenter from "./Component/Admin/Communication/MessageCenter";
import AppointmentScheduler from "./Component/Admin/Appointment/AppointmentScheduler";
import ReportandAnalytics from "./Component/Admin/Reports &Analytics/ReportandAnalytics";
import Integrations from "./Component/Admin/Integrations/Integrations";
import RoleAndPermission from "./Component/Admin/Setting/RoleandPermision";
import MyProfile from "./Component/User/Myprofile/MyProfile";
import MyCase from "./Component/User/MyCase/MyCase";
import Messages from "./Component/User/Message/Messages";

import Appointments from "./Component/User/Appointment/Appointments";
import Documents from "./Component/User/Document/Documents";
import Feedback from "./Component/User/Feedback/Feedback";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();

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

  const isDashboardRoute = location.pathname.includes("dashboard") ||
    location.pathname.startsWith("/clientmanagement") ||
    location.pathname.startsWith("/leadmanagement") ||
    location.pathname.startsWith("/communication") ||
    location.pathname.startsWith("/appointement") ||
    location.pathname.startsWith("/reports") ||
    location.pathname.startsWith("/integration") ||
    location.pathname.startsWith("/setting") ||
    location.pathname.startsWith("/user-myprofile") ||
    location.pathname.startsWith("/mycase") ||
     location.pathname.startsWith("/message")||
     location.pathname.startsWith("/appointment")||
     location.pathname.startsWith("/documents")||
     location.pathname.startsWith("/feedback");
    


  const showLayout = !noLayoutRoutes.includes(location.pathname) || isDashboardRoute;

  // All routes
  const appRoutes = (
    <Routes>
      {/* Website Routes */}
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

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />

      {/* Admin Dashboard */}
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/clientmanagement" element={<Clientmanagement />} />
      <Route path="/leadmanagement" element={<LeadManagement />} />
      <Route path="/communication" element={<MessageCenter />} />
      <Route path="/appointement" element={<AppointmentScheduler />} />
      <Route path="/reports" element={<ReportandAnalytics />} />
      <Route path="/integration" element={<Integrations />} />
      <Route path="/setting" element={<RoleAndPermission />} />

      {/* User Dashboard */}
      <Route path="/user-myprofile" element={<MyProfile/>} />
      <Route path="/mycase" element={<MyCase/>} />
       <Route path="/message" element={<Messages/>} />
        <Route path="/appointments" element={<Appointments/>} />
         <Route path="/documents" element={<Documents/>} />
          <Route path="/feedback" element={<Feedback/>} />
    </Routes>
  );

  return (
    <>
      {showLayout && <Navbar toggleSidebar={toggleSidebar} />}
      <div className="main-container">
        {showLayout && (
          <Sidebar collapsed={isSidebarCollapsed} menuItemClick={toggleSidebar} />
        )}

        {/* Only wrap dashboard pages with right-side-content */}
        {isDashboardRoute ? (
          <div className={`right-side-content ${isSidebarCollapsed ? "collapsed" : ""}`}>
            {appRoutes}
          </div>
        ) : (
          appRoutes
        )}
      </div>
    </>
  );
}

export default App;
