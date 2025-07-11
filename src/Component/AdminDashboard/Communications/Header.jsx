import React, { useState } from "react";
import NewClientPortalModal from "./NewClientPortalModal";
import NewInternalMessageModal from "./NewInternalMessageModal";
import NewPhoneLogModal from "./NewPhoneLogModal";
import NewEmailLogModal from "./NewEmailLogModal";
import MaildropModal from "./MaildropModal";
import { Button } from "react-bootstrap";

const Header = ({ activeNavItem, onToggleSidebar, isMobile, sidebarOpen }) => {
  const [activeTab, setActiveTab] = useState("My client portals");
  const [newDropdownOpen, setNewDropdownOpen] = useState(false);
  const [newestDropdownOpen, setNewestDropdownOpen] = useState(false);
  const [showNewClientPortal, setShowNewClientPortal] = useState(false);
  const [showInternalMessage, setShowInternalMessage] = useState(false);
  const [showPhoneLog, setShowPhoneLog] = useState(false);
  const [showEmailLog, setShowEmailLog] = useState(false);
  const [showMaildrop, setShowMaildrop] = useState(false);

  const handleShowInternalMessage = () => setShowInternalMessage(true);
  const handleCloseInternalMessage = () => setShowInternalMessage(false);

  const handleCloseNewClientPortal = () => setShowNewClientPortal(false);
  const handleShowNewClientPortal = () => setShowNewClientPortal(true);

  const handleShowPhoneLog = () => setShowPhoneLog(true);
  const handleClosePhoneLog = () => setShowPhoneLog(false);

  const handleShowEmailLog = () => setShowEmailLog(true);
  const handleCloseEmailLog = () => setShowEmailLog(false);

  const handleShowMaildrop = () => setShowMaildrop(true);
  const handleCloseMaildrop = () => setShowMaildrop(false);

  return (
    <div className="border-bottom p-3 bg-white">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
        <div className="d-flex align-items-center gap-3">
          {/* Mobile Menu Button (only when sidebar is closed) */}
          {isMobile && !sidebarOpen && (
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={onToggleSidebar}
            >
              <i className="fas fa-bars"></i>
            </button>
          )}

          {/* New Button with Dropdown */}
          <div className="position-relative">
            <button
              onClick={() => setNewDropdownOpen(!newDropdownOpen)}
              className="btn btn-custom btn-sm d-flex align-items-center"
            >
              <i className="fas fa-plus me-2"></i>
              <span className="fw-semibold">New</span>
              <i className="fas fa-chevron-down ms-2"></i>
            </button>
            {newDropdownOpen && (
              <div className="position-absolute start-0 mt-1 w-100 bg-white border rounded shadow-lg z-3">
                <div className="py-2 px-2">
                  <div className="d-flex flex-column gap-2">
                    <Button
                      variant="outline-custom"
                      className="text-start w-100"
                      onClick={handleShowNewClientPortal}
                    >
                      New Client Portal
                    </Button>
                    <NewClientPortalModal
                      show={showNewClientPortal}
                      handleClose={handleCloseNewClientPortal}
                    />

                    <Button
                      variant="outline-custom"
                      className="text-start w-100"
                      onClick={handleShowInternalMessage}
                    >
                      Internal Message
                    </Button>
                    <NewInternalMessageModal
                      show={showInternalMessage}
                      handleClose={handleCloseInternalMessage}
                    />

                    <Button
                      variant="outline-custom"
                      className="text-start w-100"
                      onClick={handleShowPhoneLog}
                    >
                      Phone Log
                    </Button>
                    <NewPhoneLogModal
                      show={showPhoneLog}
                      handleClose={handleClosePhoneLog}
                    />

                    <Button
                      variant="outline-custom"
                      className="text-start w-100"
                      onClick={handleShowEmailLog}
                    >
                      Email Log
                    </Button>
                    <NewEmailLogModal
                      show={showEmailLog}
                      handleClose={handleCloseEmailLog}
                    />

                    <hr className="my-2" />

                    <Button
                      variant="outline-secondary"
                      className="text-start w-100"
                      onClick={handleShowMaildrop}
                    >
                      Copy Maildrop Address
                    </Button>
                    <MaildropModal
                      show={showMaildrop}
                      handleClose={handleCloseMaildrop}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

      
      
        </div>

        {/* Right Side Controls */}
        <div className="d-flex align-items-center gap-3 ms-auto">
          <button className="btn btn-outline-secondary btn-sm">
            <i className="fas fa-filter"></i>
          </button>
          <div className="position-relative">
            <button
              onClick={() => setNewestDropdownOpen(!newestDropdownOpen)}
              className="btn btn-outline-secondary btn-sm d-flex align-items-center"
            >
              Newest
              <i className="fas fa-chevron-down ms-2"></i>
            </button>
            {newestDropdownOpen && (
              <div
                className="position-absolute end-0 mt-1 bg-white border rounded shadow z-3"
                style={{ width: "120px" }}
              >
                <div className="py-1">
                  <a
                    href="#"
                    className="d-block px-3 py-2 text-decoration-none hover-bg-light"
                  >
                    Newest
                  </a>
                  <a
                    href="#"
                    className="d-block px-3 py-2 text-decoration-none hover-bg-light"
                  >
                    Oldest
                  </a>
                  <a
                    href="#"
                    className="d-block px-3 py-2 text-decoration-none hover-bg-light"
                  >
                    A-Z
                  </a>
                  <a
                    href="#"
                    className="d-block px-3 py-2 text-decoration-none hover-bg-light"
                  >
                    Z-A
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
