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

  // Form fields
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

  // Modal handlers
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
    if (!taskName) return;
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
        <div className="text-center p-5 bg-light">
          
          <h5 className="text-dark">No tasks found.</h5>
          <p className="text-dark">Track tasks to better manage your firm's productivity.</p>
          <Button
            variant="custom"
            className="rounded-pill fw-semibold fs-5 border-0"
            onClick={handleOpen}
          >
            New task
          </Button>
        </div>
      );
    }
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
                <div className="text-secondary small">{task.description}</div>
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
      <div className="container-fluid p-4 bg-light min-vh-100">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="ms-4 py-3 fw-light">Tasks</h2>
          <div className="d-flex gap-2">
            <Button variant="outline-secondary" className="ms-4 py-3 fw-light">Task types</Button>
            <Button variant="outline-secondary" className="ms-4 py-3 fw-light">Task lists</Button>
            <Link to="/taskfeed">
              <Button variant="outline-secondary" className="ms-4 py-3 fw-light">Task feeds</Button>
            </Link>
            <Button variant="custom" className="ms-4 py-3 fw-light" onClick={handleOpen}>New task</Button>
          </div>
        </div>

        {/* Tabs and Filters */}
       <div className="d-flex flex-column flex-md-row gap-2 align-items-center align-items-md-stretch mb-3 bg-white rounded-3 p-3 shadow-sm">
  {/* Tabs */}
  <div className="d-flex border border-custom rounded-3 overflow-hidden me-md-2 w-100 w-md-auto" style={{ height: "40px" }}>
    <Button
      variant={activeTab === "outstanding" ? "outline-custom" : "custom"}
      className={`fw-light fs-5 px-4 h-100 py-1 rounded-0 border-0 flex-grow-1 ${activeTab === "outstanding" ? "active" : ""}`}
      onClick={() => setActiveTab("outstanding")}
    >
      Outstanding
    </Button>
    <Button
      variant={activeTab === "completed" ? "outline-custom" : "custom"}
      className={`fw-light fs-5 px-4 py-1 h-100 rounded-0 border-0 flex-grow-1 ${activeTab === "completed" ? "active" : ""}`}
      onClick={() => setActiveTab("completed")}
    >
      Completed
    </Button>
  </div>

  {/* Date Range */}
  <div className="d-flex align-items-center w-100 w-md-auto">
    <Form.Control
      type="text"
      placeholder="MM/DD/YYYY"
      className="fw-light fs-5 h-100 border-custom flex-grow-1"
      style={{ height: "40px", minWidth: "120px" }}
      onFocus={e => e.target.type = 'date'}
      onBlur={e => e.target.type = 'text'}
    />
    <span className="fw-light fs-5 text-secondary mx-2">–</span>
    <Form.Control
      type="text"
      placeholder="MM/DD/YYYY"
      className="fw-light fs-5 h-100 border-custom flex-grow-1"
      style={{ height: "40px", minWidth: "120px" }}
      onFocus={e => e.target.type = 'date'}
      onBlur={e => e.target.type = 'text'}
    />
  </div>

  {/* Date Presets */}
  <Form.Select
    className="fw-light fs-5 h-100 border-custom border-2 shadow-custom flex-grow-1"
    style={{ height: "40px", minWidth: "160px" }}
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
    className="fw-light fs-5 h-100 border-custom flex-grow-1"
    style={{ height: "40px", minWidth: "180px" }}
  />

  {/* Columns Dropdown */}
  <DropdownButton
    id="dropdown-columns-button"
    title="Columns"
    variant="light"
    className="rounded-3 border-custom border-2 h-100 flex-grow-1"
    style={{ height: "40px" }}
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
  <Dropdown className="flex-grow-1">
    <Dropdown.Toggle
      variant="light"
      id="dropdown-filter-button"
      className="rounded-3 h-100 d-flex align-items-center px-3 border-custom border-2 shadow-custom w-100"
      style={{ height: "40px" }}
    >
      <span className="d-inline-flex justify-content-center align-items-center bg-custom rounded-circle text-white me-2" style={{ width: "20px", height: "20px", fontSize: "14px" }}>
        ✓
      </span>
      Filters
    </Dropdown.Toggle>

    <Dropdown.Menu className="p-0 rounded-3 shadow" style={{ width: "300px" }}>
      <div className="p-3 border-bottom">
        <div className="text-uppercase small fw-semibold text-muted mb-2">Assigned by</div>
        <div className="d-flex flex-column">
          <Form.Check type="radio" name="assignedBy" label="Find a firm user" className="mb-2" />
          <Form.Check type="radio" name="assignedBy" label="Any firm user" className="mb-2" />
          <Form.Check type="radio" name="assignedBy" label="aman patidar" />
        </div>
      </div>

      <div className="p-3 border-bottom">
        <div className="text-uppercase small fw-semibold text-muted mb-2">Responsible attorney</div>
        <Form.Select size="sm" className="mb-3">
          <option>Select a firm user</option>
        </Form.Select>
        
        <div className="text-uppercase small fw-semibold text-muted mb-2">Priority</div>
        <Form.Select size="sm">
          <option>Select a priority</option>
        </Form.Select>
      </div>

      <div className="p-3">
        <div className="text-uppercase small fw-semibold text-muted mb-2">Matter</div>
        <div className="d-flex justify-content-between">
          <Button variant="outline-custom" size="sm" style={{ width: "48%" }}>Apply filters</Button>
          <Button variant="outline-secondary" size="sm" style={{ width: "48%" }}>Clear filters</Button>
        </div>
      </div>
    </Dropdown.Menu>
  </Dropdown>
</div>

        {/* Table */}
        <div className="table-responsive">
          <Table bordered hover className="text-center align-middle bg-white rounded-3">
            <thead className="bg-info bg-opacity-10">
              <tr>
                <th><Form.Check /></th>
                <th className="text-custom">Action</th>
                <th className="text-custom">Due date &#9650;</th>
                <th className="text-custom">Completed</th>
                <th className="text-custom">Name and description</th>
                <th className="text-custom">Matter</th>
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
            <span className="fw-light">No results found</span>
            <Form.Check
              type="switch"
              id="expand-rows-switch"
              label="Expand rows"
              defaultChecked
              className="fw-light text-custom "
            />
          </div>
          <Button variant="outline-secondary" className="rounded-3 px-4 fw-light">Export</Button>
        </div>
      </div>

      {/* Modal for New Task */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered scrollable backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title className="fw-light display-6">New task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="overflow-auto" style={{ maxHeight: "70vh" }}>
          {/* Details Section */}
          <div className="mb-4">
            <h5 className="fw-light mb-3">Details</h5>
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
                  {!taskName && <Form.Text className="text-danger">This field is required.</Form.Text>}
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group>
                  <Form.Label>Priority</Form.Label>
                  <Form.Select value={priority} onChange={e => setPriority(e.target.value)}>
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
                    <DropdownButton variant="light" title="" className="ms-2">
                      <Dropdown.Item>aman patidar</Dropdown.Item>
                      <Dropdown.Item>Other user</Dropdown.Item>
                    </DropdownButton>
                  </div>
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group>
                  <Form.Label>Private task <span className="text-custom cursor-pointer" title="Restrict visibility">?</span></Form.Label>
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
                <Form.Select value={taskStatus} onChange={e => setTaskStatus(e.target.value)}>
                  <option>Pending</option>
                  <option>Completed</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-3 mb-3">
              <Form.Group>
                <Form.Label>Time estimate <span className="text-custom cursor-pointer" title="Ex. 1h 30m, 1.5h, 1:30...">?</span></Form.Label>
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
            <h5 className="fw-light">Due date</h5>
            <Form.Label>Select date</Form.Label>
            <Form.Control
              type="date"
              value={dueDate}
              onChange={e => setDueDate(e.target.value)}
              className="w-100"
              style={{ maxWidth: "400px" }}
            />
          </div>
          <hr />
          
          {/* Reminders */}
          <div className="mb-3">
            <h5 className="fw-light">Reminders</h5>
            <div className="d-flex align-items-center mb-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1042/1042333.png"
                alt="No reminders"
                className="me-3"
                style={{ width: "40px" }}
              />
              <span>No reminders set for this task</span>
            </div>
            <Form.Check type="checkbox" label="Add a reminder" id="addReminder" />
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between bg-light">
          <div>
            <Button variant="custom" className="me-2" onClick={handleSaveTask}>Save task</Button>
            <Button variant="outline-custom" className="me-2">Save and create another</Button>
            <Button variant="outline-secondary" onClick={handleClose}>Cancel</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskPage;