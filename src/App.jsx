import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Layout/Navbar";
import Sidebar from "./Layout/Sidebar";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import ForgotPassword from "./Auth/ForgotPassword";

import { useState } from "react";
import Dashboard from "./Component/AdminDashboard/Dashboard/Dashboard";
import Matter from "./Component/AdminDashboard/Matters/Matter";
import Home from "./Component/Website/HomePages/Home";
import ClientsCRM from "./Component/AdminDashboard/Clients/ClientsCRM";
import Document from "./Component/AdminDashboard/Documents/Document";
import Calendar from "./Component/AdminDashboard/Calendar/Calendar";
import Timebilling from "./Component/AdminDashboard/TimeBilling/Timebilling";





import ClientAndMatterManagement from "./Component/Website/Pages/ClientAndMatterManagement";
import DocumentAutomation from "./Component/Website/Pages/DocumentAutomation";
import TasksWorkflow from "./Component/AdminDashboard/TasksWorkflow/TasksWorkflow";
import ReportsAnalytics from "./Component/AdminDashboard/ReportsAnalytics/ReportsAnalytics";
import AdminPage from "./Component/AdminDashboard/Admin/AdminPage";


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
  const noLayoutRoutes = ["/", "/signup", "/forgotpassword", "/login", "/client-and-matter-management" , "/document-automation"];
  const isNoLayoutPage = noLayoutRoutes.includes(location.pathname);
  // Hide layout (navbar/sidebar) only on login page
  // ...existing code...
  // Hide layout (navbar/sidebar) only on login, signup, forgotpassword, and client-and-matter-management pages
  const hideLayout = location.pathname === "/" || location.pathname === "/forgotpassword" || location.pathname === "/signup" || location.pathname === "/client-and-matter-management" || location.pathname === "/document-automation";
  // ...existing code...
  return (
    <>
      {/* navbar */}
      {!hideLayout && <Navbar toggleSidebar={toggleSidebar} />}
      {/* navbar end */}
      {/* sidebar start */}
      <div className={`main-content${hideLayout ? "" : ""}`}>
        {!hideLayout && (
          <Sidebar collapsed={isSidebarCollapsed} menuItemClick={menuItemClick} />
        )}
        {/* sidebar end */}
        {/* right side  */}
        <>
          {isNoLayoutPage ? (
            <Routes>

              {/* Website Routes Starts */}
              <Route path="/" element={<Home/>} />
              <Route path="/client-and-matter-management" element={<ClientAndMatterManagement />} />
              <Route path="/document-automation" element={<DocumentAutomation />} />
              {/* Website Routes Ends */}

              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
            </Routes>
          ) : (
            <div className={`right-side-content${isSidebarCollapsed ? " collapsed" : ""}`}>
              <Routes>
                {/* AdminDashboard */}
                <Route path="/dashboard" element={<Dashboard />} />
                 <Route path="/matter" element={<Matter/>} />
                 <Route path="/document" element={<Document/>} />
                 <Route path="/client" element={<ClientsCRM/>} />
                 <Route path="/calendar" element={<Calendar/>} />
                 <Route path="/timebilling" element={<Timebilling/>} />
                  <Route path="/tasksworkflow" element={<TasksWorkflow/>} />
                   <Route path="/reportsanalytics" element={<ReportsAnalytics/>} />
                     <Route path="/adminpage" element={<AdminPage/>} />

              </Routes>
            </div>
          )}
        </>
      </div>
    </>
  );
}
export default App;
