import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const TaskFeeds = () => {


    const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("feeds");
  const [showAddTaskTypeModal, setShowAddTaskTypeModal] = useState(false);
  const [showAddTaskListModal, setShowAddTaskListModal] = useState(false);
  const [taskTypeName, setTaskTypeName] = useState("");
  const [taskListName, setTaskListName] = useState("");
  const [taskListDescription, setTaskListDescription] = useState("");
  const [taskListPracticeArea, setTaskListPracticeArea] = useState("");
  const [nameError, setNameError] = useState(false);

  const tabList = [
    { key: "outstanding", label: "Outstanding" },
    { key: "completed", label: "Completed" },
    { key: "lists", label: "Lists" },
    { key: "feeds", label: "Feeds" },
    { key: "types", label: "Task Types" },
  ];

    const handleTabClick = (key) => {
    setActiveTab(key);
    if (key === "outstanding" || key === "completed") {
      navigate("/tasks");
    }
  };

  const handleAddTaskType = () => {
    console.log("Adding task type:", taskTypeName);
    setShowAddTaskTypeModal(false);
    setTaskTypeName("");
  };

  const handleAddTaskList = () => {
    if (!taskListName.trim()) {
      setNameError(true);
      return;
    }
    console.log("Adding task list:", {
      name: taskListName,
      description: taskListDescription,
      practiceArea: taskListPracticeArea
    });
    setShowAddTaskListModal(false);
    setTaskListName("");
    setTaskListDescription("");
    setTaskListPracticeArea("");
    setNameError(false);
  };

  return (
    <div className="container-fluid p-4" style={{ background: "#f6f8fa", minHeight: "100vh" }}>
      {/* Tabs Navigation */}
     <div
      className="d-flex align-items-center border-bottom mb-4"
      style={{
        gap: "32px",
        background: "#fff",
        paddingLeft: "16px",
        borderBottom: "1px solid #dee2e6",
      }}
    >
      {tabList.map((tab) => (
        <div
          key={tab.key}
          onClick={() => handleTabClick(tab.key)}
          style={{
            cursor: "pointer",
            fontWeight: 600,
            fontSize: "1.25rem",
            color: activeTab === tab.key ? "#1976d2" : "#444",
            borderBottom:
              activeTab === tab.key
                ? "3px solid #1976d2"
                : "3px solid transparent",
            padding: "12px 0",
            marginRight: "24px",
            transition: "color 0.2s",
          }}
        >
          {tab.label}
        </div>
      ))}
    </div>

      {/* Content based on active tab */}
      <div className="p-4">
        {activeTab === "feeds" && (
          <div className="d-flex gap-4 align-items-start mb-4">
            <div style={{ minWidth: "400px" }}>
              <div className="bg-white border rounded-3 p-3 mb-4" style={{ minWidth: "350px" }}>
                <div className="mb-2 fw-semibold">Available Options</div>
                <div>
                  <div className="mb-2">
                    <span role="img" aria-label="calendar" style={{ marginRight: "8px" }}>📅</span>
                    <a href="#" style={{ color: "#1976d2", textDecoration: "underline" }}>
                      Personal task ics feed (Outlook/iCal)
                    </a>
                  </div>
                  <div>
                    <span role="img" aria-label="calendar" style={{ marginRight: "8px" }}>📅</span>
                    <a href="#" style={{ color: "#1976d2", textDecoration: "underline" }}>
                      Download personal tasks ics
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-3" style={{
                background: "#eaf6ff",
                border: "1.5px solid #1976d2",
                borderRadius: "8px",
                maxWidth: "500px"
              }}>
                <div className="fw-bold mb-1">Information about task feeds</div>
                <div style={{ fontSize: "1.05em" }}>
                  Task feeds allow you to view your Clio tasks from third-party applications such as Outlook or iCal.<br />
                  Security precaution: task feeds contain a unique identifier that permit viewing and monitoring of your events. Exercise caution when sharing your unique feed address.
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "types" && (
          <div className="bg-white border rounded-3 p-4" style={{ maxWidth: "600px" }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Task Type</h5>
              <button 
                className="btn btn-custom btn-sm"
                onClick={() => setShowAddTaskTypeModal(true)}
                style={{ backgroundColor: "#1976d2", borderColor: "#1976d2" }}
              >
                Add
              </button>
            </div>
            
            <div className="text-center p-4" style={{ border: "1px dashed #ddd", borderRadius: "4px" }}>
              <div className="text-muted">No Results</div>
            </div>
          </div>
        )}

        {activeTab === "lists" && (
          <div className="bg-white border rounded-3 p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="mb-0">Task lists</h4>
              <div>
                <button className="btn btn-outline-custom me-2" style={{ color: "#1976d2", borderColor: "#1976d2" }}>
                  Actions
                </button>
                <button 
                  className="btn btn-custom"
                  onClick={() => setShowAddTaskListModal(true)}
                  style={{ backgroundColor: "#1976d2", borderColor: "#1976d2" }}
                >
                  New task list
                </button>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="w-50">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search task lists..."
                />
              </div>
              <div>
                <button className="btn btn-outline-custom" style={{ color: "#1976d2", borderColor: "#1976d2" }}>
                  Filters
                </button>
              </div>
            </div>

            <div className="d-flex mb-3">
              <div className="w-50 fw-semibold">Practice area</div>
              <div className="w-50 fw-semibold">Number of tasks</div>
            </div>

            <div className="text-center p-5" style={{ border: "1px dashed #ddd", borderRadius: "4px" }}>
              <div className="mb-3">No task lists found.</div>
              <button 
                className="btn btn-custom"
                onClick={() => setShowAddTaskListModal(true)}
                style={{ backgroundColor: "#1976d2", borderColor: "#1976d2" }}
              >
                New task list
              </button>
            </div>

            <div className="mt-3 text-center text-muted">
              <div className="mb-2">No results found</div>
              <button className="btn btn-link" style={{ color: "#1976d2" }}>
                Expand rows
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Add Task Type Modal */}
      {showAddTaskTypeModal && (
        <div className="modal" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">New Task Type</h5>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Task Type Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={taskTypeName}
                    onChange={(e) => setTaskTypeName(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  className="btn btn-custom"
                  onClick={handleAddTaskType}
                  style={{ backgroundColor: "#1976d2", borderColor: "#1976d2" }}
                >
                  Save
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowAddTaskTypeModal(false);
                    setTaskTypeName("");
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Task List Modal */}
      {showAddTaskListModal && (
        <div className="modal" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">New task list</h4>
              </div>
              <div className="modal-body">
                <div className="mb-4">
                  <label className="form-label fw-bold">Name *</label>
                  <input
                    type="text"
                    className={`form-control ${nameError ? 'is-invalid' : ''}`}
                    placeholder="Enter name"
                    value={taskListName}
                    onChange={(e) => {
                      setTaskListName(e.target.value);
                      if (nameError) setNameError(false);
                    }}
                  />
                  {nameError && <div className="invalid-feedback">This field is required.</div>}
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter description"
                    value={taskListDescription}
                    onChange={(e) => setTaskListDescription(e.target.value)}
                  />
                </div>

                <hr className="my-4" />

                <div className="mb-4">
                  <label className="form-label fw-bold">Practice Area</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter practice area"
                    value={taskListPracticeArea}
                    onChange={(e) => setTaskListPracticeArea(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  className="btn btn-custom me-2"
                  onClick={handleAddTaskList}
                  style={{ backgroundColor: "#1976d2", borderColor: "#1976d2" }}
                >
                  Save and add tasks
                </button>
                <button 
                  className="btn btn-custom me-2"
                  onClick={handleAddTaskList}
                  style={{ backgroundColor: "#1976d2", borderColor: "#1976d2" }}
                >
                  Save and close
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowAddTaskListModal(false);
                    setTaskListName("");
                    setTaskListDescription("");
                    setTaskListPracticeArea("");
                    setNameError(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskFeeds;