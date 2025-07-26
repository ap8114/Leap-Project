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
import Clientmanagement from "./Component/Admin/ClientManagement/Clientmanagement";
import LeadManagement from "./Component/Admin/LeadManagement/LeadManagement";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menusidebarcollapse = () => {
    setIsSidebarCollapsed(true);
  };

  useEffect(() => {
    if (isMobile) {
      menusidebarcollapse();
    }
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItemClick = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };
  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };
  const location = useLocation();

  const noLayoutRoutes = [
    "/",
    "/signup",
    "/forgotpassword",
    "/login",
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
    "/resources",
    "/resourcecenter",
  ];

  const isNoLayoutPage = noLayoutRoutes.includes(location.pathname);

  const hideLayout = isNoLayoutPage;

  return (
    <>
      {!hideLayout && <Navbar toggleSidebar={toggleSidebar} />}
      <div className="main-content">
        {!hideLayout && (
          <Sidebar
            collapsed={isSidebarCollapsed}
            menuItemClick={menuItemClick}
          />
        )}
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/client-and-matter-management"
              element={<ClientAndMatterManagement />}
            />
            <Route
              path="/document-automation"
              element={<DocumentAutomation />}
            />
            <Route
              path="/timerecordingbilling"
              element={<TimeRecordingBilling />}
            />
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
            <Route path="/Clientmanagement" element={<Clientmanagement />} />
            <Route path="/leadmanagement" element={<LeadManagement />} />

            {/* User Dashboard */}

            <Route path="/user-dashboard" element={<UserDashboard />} />
          </Routes>
        </>
      </div>
    </>
  );
}

export default App;
