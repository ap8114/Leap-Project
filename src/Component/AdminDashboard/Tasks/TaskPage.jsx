import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  Button,
  Modal,
  Form,
  Dropdown,
  DropdownButton,
  Table,
} from "react-bootstrap";

const TaskPage = () => {
  const [activeTab, setActiveTab] = useState("outstanding");
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  // For form fields (add as needed)
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Normal");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("aman patidar");
  const [privateTask, setPrivateTask] = useState(true);
  const [taskType, setTaskType] = useState("");
  const [taskStatus, setTaskStatus] = useState("Pending");
  const [timeEstimate, setTimeEstimate] = useState("");
  const [matter, setMatter] = useState("");
  const [dueDate, setDueDate] = useState("");
  // ...other fields as needed

  // Modal open/close handlers
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Reset form fields
  const resetForm = () => {
    setTaskName("");
    setPriority("Normal");
    setDescription("");
    setAssignee("aman patidar");
    setPrivateTask(true);
    setTaskType("");
    setTaskStatus("Pending");
    setTimeEstimate("");
    setMatter("");
    setDueDate("");
  };

  // Save task handler
  const handleSaveTask = () => {
    if (!taskName) return; // Required field
    const newTask = {
      taskName,
      priority,
      description,
      assignee,
      privateTask,
      taskType,
      taskStatus,
      timeEstimate,
      matter,
      dueDate,
    };
    setTasks([...tasks, newTask]);
    setShowModal(false);
    resetForm();
  };

  // Table rendering
  const renderTaskTable = () => {
    if (tasks.length === 0) {
      return (
        <div className="text-center p-5" style={{ background: "#f3f4f6" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1042/1042333.png"
            alt="No tasks"
            style={{ width: "80px", marginBottom: "20px", filter: "hue-rotate(180deg) saturate(2)" }} // 
          />
          <h5 style={{ color: "#222" }}>No tasks found.</h5>
          <p style={{ color: "#222" }}>Track tasks to better manage your firm’s productivity.</p>
          <Button
            variant="primary"
            style={{ borderRadius: "24px", fontWeight: 600, fontSize: "1.1rem", border: "none" }}
            onClick={handleOpen}
          >
            New task
          </Button>
        </div>
      );
    }
    // Show all tasks in table rows
    return (
      <>
        {tasks.map((task, idx) => (
          <tr key={idx}>
            <td><Form.Check /></td>
            <td>{task.taskType || "-"}</td>
            <td>{task.dueDate || "-"}</td>
            <td>{task.taskStatus}</td>
            <td>
              <div>
                <strong>{task.taskName}</strong>
                <div style={{ fontSize: "0.95em", color: "#888" }}>{task.description}</div>
              </div>
            </td>
            <td>{task.matter || "-"}</td>
          </tr>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="container-fluid p-4" style={{ background: "#f6f8fa", minHeight: "100vh" }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3
            className="mb-0 fw-bold"
            style={{ fontSize: "2.2rem", color: "#1976d2" }} // Blue heading
          >
            Tasks
          </h3>
          <div className="d-flex gap-2">
            <Button variant="outline-primary" className="rounded-3 px-4 py-2 fw-semibold border-2">Task types</Button>
            <Button variant="outline-primary" className="rounded-3 px-4 py-2 fw-semibold border-2">Task lists</Button>
            <Link to="/taskfeed">
            <Button variant="outline-primary" className="rounded-3 px-4 py-2 fw-semibold border-2">Task feeds</Button>
            </Link>
            <Button variant="primary" className="rounded-3 px-4 py-2 fw-semibold" onClick={handleOpen}>New task</Button>
          </div>
        </div>

        {/* Tabs */}
        <div
          className="d-flex gap-2 align-items-center mb-3 flex-wrap"
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "12px 20px",
            boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
          }}
        >
          {/* Tabs */}
          <div
            style={{
              display: "flex",
              border: "2px solid #1976d2", // Blue border
              borderRadius: "8px",
              overflow: "hidden",
              height: "40px",
              marginRight: "8px",
            }}
          >
            <Button
              variant="light"
              className="fw-bold"
              style={{
                background: activeTab === "outstanding" ? "#e6f0fa" : "#fff",
                color: activeTab === "outstanding" ? "#1976d2" : "#222",
                border: "none",
                boxShadow: activeTab === "outstanding" ? "0 0 0 2px #1976d2" : "none",
                fontWeight: 600,
                fontSize: "1.1rem",
                padding: "0 24px",
                height: "100%",
                borderRadius: 0,
              }}
              onClick={() => setActiveTab("outstanding")}
            >
              Outstanding
            </Button>
            <Button
              variant="light"
              className="fw-bold"
              style={{
                background: activeTab === "completed" ? "#e6f0fa" : "#fff",
                color: activeTab === "completed" ? "#1976d2" : "#222",
                border: "none",
                boxShadow: activeTab === "completed" ? "0 0 0 2px #1976d2" : "none",
                fontWeight: 600,
                fontSize: "1.1rem",
                padding: "0 24px",
                height: "100%",
                borderRadius: 0,
              }}
              onClick={() => setActiveTab("completed")}
            >
              Completed
            </Button>
          </div>

          {/* Date pickers */}
          <Form.Control
            type="text"
            placeholder="MM/DD/YYYY"
            style={{
              width: "180px",
              background: "#fff",
              border: "1.5px solid #d1e6fa",
              borderRadius: "8px",
              fontSize: "1.1rem",
              height: "40px",
              paddingRight: "40px",
            }}
            className="fw-semibold"
            onFocus={e => e.target.type = 'date'}
            onBlur={e => e.target.type = 'text'}
          />
          <span className="fw-bold" style={{ fontSize: "1.2rem", color: "#b0b0b0" }}>–</span>
          <Form.Control
            type="text"
            placeholder="MM/DD/YYYY"
            style={{
              width: "180px",
              background: "#fff",
              border: "1.5px solid #d1e6fa",
              borderRadius: "8px",
              fontSize: "1.1rem",
              height: "40px",
              paddingRight: "40px",
            }}
            className="fw-semibold"
            onFocus={e => e.target.type = 'date'}
            onBlur={e => e.target.type = 'text'}
          />

          {/* All dates select */}
          <Form.Select
            style={{
              width: "160px",
              background: "#fff",
              border: "2px solid #1976d2",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "1.1rem",
              height: "40px",
              color: "#222",
              boxShadow: "0 0 0 2px #b6dbfd",
            }}
            className="fw-semibold"
            defaultValue="All dates"
          >
            <option>Past due</option>
            <option>Today</option>
            <option>Tomorrow</option>
            <option>This week</option>
            <option>This month</option>
            <option>This year</option>
            <option>No due date</option>
            <option>All dates</option>
          </Form.Select>

          {/* Search */}
          <Form.Control
            type="text"
            placeholder="Search"
            style={{
              minWidth: "220px",
              background: "#fff",
              border: "1.5px solid #d1e6fa",
              borderRadius: "8px",
              fontSize: "1.1rem",
              height: "40px",
              flex: 1,
            }}
            className="fw-semibold"
          />

          {/* Columns Dropdown */}
          <DropdownButton
            id="dropdown-basic-button"
            title="Columns"
            variant="light"
            className="rounded-3 border-2"
            style={{
              height: "40px",
              fontWeight: 600,
              fontSize: "1.1rem",
              border: "1.5px solid #d1e6fa",
              borderRadius: "8px",
              background: "#fff",
              color: "#222",
            }}
          >
 
  <Dropdown.Item>Action</Dropdown.Item>
  <Dropdown.Item>Due date</Dropdown.Item>
  <Dropdown.Item>Completed</Dropdown.Item>
  <Dropdown.Item>Name and description</Dropdown.Item>
  <Dropdown.Item>Matter</Dropdown.Item>
  <Dropdown.Item>Assigned by</Dropdown.Item>
  <Dropdown.Item>Assigned to</Dropdown.Item>
  <Dropdown.Item>Recorded time</Dropdown.Item>
  <Dropdown.Item>Status</Dropdown.Item>
  <Dropdown.Item>Task type</Dropdown.Item>
  <Dropdown.Item>Time estimate</Dropdown.Item>
</DropdownButton>
        

          {/* Filters Dropdown */}
          <Dropdown>
      <Dropdown.Toggle
        variant="light"
        id="dropdown-filter-button"
        style={{
          height: "40px",
          fontWeight: 600,
          fontSize: "1.1rem",
          border: "2px solid #1976d2",
          borderRadius: "8px",
          background: "#fff",
          color: "#1976d2",
          boxShadow: "0 0 0 2px #b6dbfd",
          display: "flex",
          alignItems: "center",
          padding: "0 16px"
        }}
      >
        <span
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            width: "20px",
            height: "20px",
            background: "#1976d2",
            borderRadius: "50%",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "14px",
            marginRight: "8px",
          }}
        >
          ✓
        </span>
        Filters
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ 
        width: "300px",
        padding: "0",
        border: "1px solid #dee2e6",
        borderRadius: "4px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        {/* Assigned by section */}
        <div style={{ padding: "12px 16px", borderBottom: "1px solid #f1f1f1" }}>
          <div style={{ 
            fontSize: "12px",
            fontWeight: "600",
            color: "#6c757d",
            textTransform: "uppercase",
            marginBottom: "8px"
          }}>
            Assigned by
          </div>
          <div className="d-flex flex-column">
            <label className="d-flex align-items-center mb-2">
              <input 
                type="radio" 
                name="assignedBy" 
                className="me-2"
                style={{ width: "16px", height: "16px" }}
              />
              Find a firm user
            </label>
            <label className="d-flex align-items-center mb-2">
              <input 
                type="radio" 
                name="assignedBy" 
                className="me-2"
                style={{ width: "16px", height: "16px" }}
              />
              Any firm user
            </label>
            <label className="d-flex align-items-center">
              <input 
                type="radio" 
                name="assignedBy" 
                className="me-2"
                style={{ width: "16px", height: "16px" }}
              />
              aman patidar
            </label>
          </div>
        </div>

        {/* Responsible attorney section */}
        <div style={{ padding: "12px 16px", borderBottom: "1px solid #f1f1f1" }}>
          <div style={{ 
            fontSize: "12px",
            fontWeight: "600",
            color: "#6c757d",
            textTransform: "uppercase",
            marginBottom: "8px"
          }}>
            Responsible attorney
          </div>
          <select className="form-select form-select-sm mb-3">
            <option>Select a firm user</option>
          </select>
          
          <div style={{ 
            fontSize: "12px",
            fontWeight: "600",
            color: "#6c757d",
            textTransform: "uppercase",
            marginBottom: "8px"
          }}>
            Priority
          </div>
          <select className="form-select form-select-sm">
            <option>Select a priority</option>
          </select>
        </div>

        {/* Matter section */}
        <div style={{ padding: "12px 16px" }}>
          <div style={{ 
            fontSize: "12px",
            fontWeight: "600",
            color: "#6c757d",
            textTransform: "uppercase",
            marginBottom: "8px"
          }}>
            Matter
          </div>
          <div className="d-flex justify-content-between">
            <button 
              className="btn btn-outline-primary btn-sm"
              style={{ width: "48%" }}
            >
              Apply filters
            </button>
            <button 
              className="btn btn-outline-secondary btn-sm"
              style={{ width: "48%" }}
            >
              Clear filters
            </button>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>

        
        </div>

        {/* Table */}
        <div className="table-responsive">
          <Table bordered hover className="text-center align-middle" style={{ background: "#fff", borderRadius: "12px" }}>
            <thead style={{ background: "#e6f0fa" }}> {/* Blueish header */}
              <tr>
                <th>
                  <Form.Check />
                </th>
                <th style={{ color: "#1976d2" }}>Action</th>
                <th style={{ color: "#1976d2" }}>Due date &#9650;</th>
                <th style={{ color: "#1976d2" }}>Completed</th>
                <th style={{ color: "#1976d2" }}>Name and description</th>
                <th style={{ color: "#1976d2" }}>Matter</th>
              </tr>
            </thead>
            <tbody>
              {tasks.length === 0 ? (
                <tr>
                  <td colSpan="6">{renderTaskTable()}</td>
                </tr>
              ) : (
                renderTaskTable()
              )}
            </tbody>
          </Table>
        </div>

        {/* Footer Controls */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="d-flex align-items-center gap-3">
            <Button variant="light" size="sm" className="rounded-3 border">&lt;</Button>
            <Button variant="light" size="sm" className="rounded-3 border">&gt;</Button>
            <span className="fw-semibold">No results found</span>
            <Form.Check
              type="switch"
              id="expand-rows-switch"
              label="Expand rows"
              defaultChecked
              className="fw-semibold"
            />
          </div>
          <Button variant="outline-primary" className="rounded-3 px-4 fw-semibold">Export</Button>
        </div>
      </div>

      {/* Modal for New Task */}
      <Modal
        show={showModal}
        onHide={handleClose}
        size="lg"
        centered
        scrollable
        backdrop="static"
        style={{ zIndex: 2000 }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold" style={{ fontSize: "2rem" }}>New task</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: "70vh", overflowY: "auto", paddingBottom: 0 }}>
          {/* Details Section */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3">Details</h5>
            <div className="row mb-3">
              <div className="col-md-8">
                <Form.Group>
                  <Form.Label>Name <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter task name..."
                    value={taskName}
                    onChange={e => setTaskName(e.target.value)}
                    isInvalid={!taskName}
                  />
                  {!taskName && (
                    <Form.Text className="text-danger">
                      This field is required.
                    </Form.Text>
                  )}
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group>
                  <Form.Label>Priority</Form.Label>
                  <Form.Select
                    value={priority}
                    onChange={e => setPriority(e.target.value)}
                  >
                    <option>Low</option>
                    <option>Normal</option>
                    <option>High</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter task description..."
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </Form.Group>
            <div className="row mb-3">
              <div className="col-md-8">
                <Form.Group>
                  <Form.Label>Assign to <span className="text-danger">*</span></Form.Label>
                  <div className="d-flex">
                    <Form.Control
                      type="text"
                      value={assignee}
                      onChange={e => setAssignee(e.target.value)}
                    />
                    <DropdownButton
                      variant="light"
                      title=""
                      className="ms-2"
                    >
                      <Dropdown.Item>aman patidar</Dropdown.Item>
                      <Dropdown.Item>Other user</Dropdown.Item>
                    </DropdownButton>
                  </div>
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group>
                  <Form.Label>Private task <span style={{ cursor: "pointer" }} title="Restrict visibility">?</span></Form.Label>
                  <div className="d-flex align-items-center">
                    <Form.Check
                      type="switch"
                      checked={privateTask}
                      onChange={e => setPrivateTask(e.target.checked)}
                      className="me-2"
                    />
                    <Button variant="outline-secondary" size="sm" onClick={() => setPrivateTask(false)}>✕</Button>
                  </div>
                </Form.Group>
              </div>
            </div>
          </div>
          <hr />
          {/* Task type, status, estimate, matter */}
          <div className="row mb-3">
            <div className="col-md-6 mb-3">
              <Form.Group>
                <Form.Label>Task type</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Find a task type..."
                  value={taskType}
                  onChange={e => setTaskType(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="col-md-3 mb-3">
              <Form.Group>
                <Form.Label>Task status</Form.Label>
                <Form.Select
                  value={taskStatus}
                  onChange={e => setTaskStatus(e.target.value)}
                >
                  <option>Pending</option>
                  <option>Completed</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-3 mb-3">
              <Form.Group>
                <Form.Label>
                  Time estimate <span style={{ cursor: "pointer" }} title="Ex. 1h 30m, 1.5h, 1:30...">?</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex. 1h 30m, 1.5h, 1:30..."
                  value={timeEstimate}
                  onChange={e => setTimeEstimate(e.target.value)}
                />
              </Form.Group>
            </div>
          </div>
          <div className="mb-3">
            <Form.Group>
              <Form.Label>Matter</Form.Label>
              <Form.Control
                type="text"
                placeholder="Find a matter..."
                value={matter}
                onChange={e => setMatter(e.target.value)}
              />
            </Form.Group>
          </div>
          <hr />
          {/* Due date */}
          <div className="mb-3">
            <h5 className="fw-bold">Due date</h5>
            <Form.Label>Select date</Form.Label>
            <Form.Control
              type="date"
              value={dueDate}
              onChange={e => setDueDate(e.target.value)}
              style={{ maxWidth: "400px" }}
            />
          </div>
          <hr />
          {/* Reminders */}
          <div className="mb-3">
  <h5 className="fw-bold">Reminders</h5>
  <div className="d-flex align-items-center mb-2">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1042/1042333.png"
      alt="No reminders"
      style={{ width: "40px", marginRight: "16px" }}
    />
    <span>No reminders set for this task</span>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" id="addReminder" />
    <label className="form-check-label" htmlFor="addReminder">
      Add a reminder
    </label>
  </div>
</div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between" style={{ background: "#f8fafc" }}>
          <div>
            <Button variant="primary" className="me-2" onClick={handleSaveTask}>Save task</Button>
            <Button variant="outline-primary" className="me-2">Save and create another</Button>
            <Button variant="outline-secondary" onClick={handleClose}>Cancel</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskPage;


