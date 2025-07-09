import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUploadAlt,
  faFilePdf,
  faFileWord,
  faEye,
  faDownload,
  faTrash,
  faTimes,
  faFolderOpen,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

const Document = () => {
  // Sample document object shape
  // {
  //   id: number,
  //   name: string,
  //   type: string,
  //   category: string,
  //   uploadDate: string,
  //   size: string
  // }

  const [activeCategory, setActiveCategory] = useState("Pleading");
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Motion to Dismiss.pdf",
      type: "PDF",
      category: "Pleading",
      uploadDate: "2024-01-15",
      size: "2.4 MB",
    },
    {
      id: 2,
      name: "Contract Evidence.docx",
      type: "Word",
      category: "Evidence",
      uploadDate: "2024-01-14",
      size: "1.8 MB",
    },
    {
      id: 3,
      name: "Court Order 001.pdf",
      type: "PDF",
      category: "Order",
      uploadDate: "2024-01-13",
      size: "856 KB",
    },
    {
      id: 4,
      name: "Witness Statement.pdf",
      type: "PDF",
      category: "Evidence",
      uploadDate: "2024-01-12",
      size: "3.2 MB",
    },
    {
      id: 5,
      name: "Response Brief.docx",
      type: "Word",
      category: "Pleading",
      uploadDate: "2024-01-11",
      size: "2.1 MB",
    },
  ]);

  const categories = ["Pleading", "Evidence", "Order"];
  const filteredDocuments = documents.filter(
    (doc) => doc.category === activeCategory
  );

  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files) {
      console.log("Files selected:", files);
      // Add file handling logic here
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    console.log("Files dropped:", files);
    // Add drop logic here
  };

  const getFileIcon = (type) => {
    return type === "PDF" ? faFilePdf : faFileWord;
  };

  const getFileIconColor = (type) => {
    return type === "PDF" ? "text-danger" : "text-custom";
  };

  return (
    <div className="min-vh-100 bg-light p-4">
      <div className="container-fluid py-3">
        {/* Header */}
        <div className=" mb-5">
          <h1 className="display-6 fw-bold text-dark mb-3">Documents</h1>
          <p className="text-muted">Manage your legal documents efficiently</p>
        </div>

        {/* Upload Section */}
        <div className="card shadow-sm mb-5">
          <div className="card-body p-5">
            <div
              className="border border-dashed rounded-3 p-5 text-center hover-border-custom transition-all cursor-pointer"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              style={{ borderColor: "#dee2e6" }}
            >
              <div className="mb-4">
                <FontAwesomeIcon
                  icon={faCloudUploadAlt}
                  className="text-muted mb-3"
                  size="3x"
                />
              </div>
              <h3 className="h4 fw-semibold text-dark mb-2">
                Drag & Drop files here
              </h3>
              <p className="text-muted mb-4">or click to browse your files</p>
              <label htmlFor="file-upload" className="d-inline-block">
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  className="d-none"
                />
                <span className="btn btn-custom px-4 py-2 fw-medium">
                  Upload Files
                </span>
              </label>
              <div className="mt-3">
                <p className="small text-muted">
                  Supported formats: PDF, Word (.doc, .docx)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-5">
          <div className="d-flex bg-light rounded-3 p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`btn ${
                  activeCategory === category
                    ? "btn-white shadow-sm text-custom"
                    : "text-muted"
                } flex-grow-0 mx-1`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Document List */}
        {filteredDocuments.length > 0 ? (
          <div className="row g-4">
            {filteredDocuments.map((document) => (
              <div key={document.id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm hover-shadow transition-all">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <div className="d-flex align-items-start">
                        <FontAwesomeIcon
                          icon={getFileIcon(document.type)}
                          className={`${getFileIconColor(document.type)} me-3`}
                          size="2x"
                        />
                        <div>
                          <h5 className="fw-semibold text-dark mb-1 small">
                            {document.name}
                          </h5>
                          <div className="d-flex align-items-center mt-2">
                            <span
                              className={`badge ${
                                document.type === "PDF"
                                  ? "bg-danger-light text-danger"
                                  : "bg-custom-light text-custom"
                              } me-2`}
                            >
                              {document.type}
                            </span>
                            <span className="small text-muted">
                              {document.size}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="badge bg-light text-dark rounded-pill small fw-medium">
                        {document.category}
                      </span>
                    </div>
                    <div className="small text-muted mb-4">
                      Uploaded on{" "}
                      {new Date(document.uploadDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </div>
                    <div className="d-flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedDocument(document);
                          setIsModalOpen(true);
                        }}
                        className="btn btn-custom btn-sm flex-grow-1"
                      >
                        <FontAwesomeIcon icon={faEye} className="me-1" />
                        View
                      </button>
                      <button className="btn btn-outline-secondary btn-sm flex-grow-1">
                        <FontAwesomeIcon icon={faDownload} className="me-1" />
                        Download
                      </button>
                      <button className="btn btn-outline-danger btn-sm">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-5">
            <div className="mb-4">
              <FontAwesomeIcon
                icon={faFolderOpen}
                className="text-muted"
                size="4x"
              />
            </div>
            <h3 className="h4 fw-semibold text-dark mb-2">
              No {activeCategory.toLowerCase()} documents yet
            </h3>
            <p className="text-muted mb-4">
              Upload your first {activeCategory.toLowerCase()} document to get
              started
            </p>
            <label htmlFor="empty-state-upload" className="d-inline-block">
              <input
                id="empty-state-upload"
                type="file"
                multiple
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="d-none"
              />
              <span className="btn btn-custom px-4 py-2">Upload Document</span>
            </label>
          </div>
        )}

        {/* Document Detail Modal */}
        {isModalOpen && selectedDocument && (
          <div
            className="modal fade show d-block"
            tabIndex={-1}
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog modal-md">
              <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header border-bottom">
                  <div className="d-flex align-items-center flex-wrap">
                    <FontAwesomeIcon
                      icon={getFileIcon(selectedDocument.type)}
                      className={`${getFileIconColor(
                        selectedDocument.type
                      )} me-3 fs-4`} // Smaller and responsive
                    />
                    <div>
                      <h5 className="modal-title mb-1">
                        {selectedDocument.name}
                      </h5>
                      <div className="d-flex align-items-center mt-1 gap-2 flex-wrap">
                        <span
                          className={`badge ${
                            selectedDocument.type === "PDF"
                              ? "bg-danger-light text-danger"
                              : "bg-custom-light text-custom"
                          }`}
                        >
                          {selectedDocument.type}
                        </span>
                        <span className="text-muted small">
                          {selectedDocument.size}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="btn-close"
                  />
                </div>

                {/* Modal Body */}
                <div className="modal-body">
                  <div className="row mb-4">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <p className="small text-muted mb-1">Category</p>
                      <p className="fw-medium text-dark">
                        {selectedDocument.category}
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <p className="small text-muted mb-1">Upload Date</p>
                      <p className="fw-medium text-dark">
                        {new Date(
                          selectedDocument.uploadDate
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="bg-light rounded-3 p-3 mb-4">
                    <p className="small text-muted mb-2">Document Preview</p>
                    <div className="ratio ratio-16x9 bg-white rounded-3 d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon
                        icon={faFileAlt}
                        className="text-muted fs-2"
                      />{" "}
                      {/* Smaller icon */}
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="modal-footer border-top bg-light">
                  <div className="d-flex justify-content-end gap-2 flex-wrap">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="btn btn-outline-secondary"
                    >
                      Close
                    </button>
                    <button className="btn btn-custom">
                      <FontAwesomeIcon icon={faDownload} className="me-2" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Document;
