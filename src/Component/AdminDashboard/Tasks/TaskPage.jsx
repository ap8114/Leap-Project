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
  const [assignee, setAssignee] = useState("john smith");
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
    setAssignee("john smith");
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
      <div className="container-fluid  p-4 bg-light min-vh-100">
        {/* Header */}
        <div className="row justify-content-between align-items-center mb-4">
          <div className="col-auto">
            <h1 className="fw-bold m-0"  style={{ fontSize: "2rem", fontWeight: "700" }}>Tasks</h1>
          </div>
          <div className="col-auto d-flex gap-2">
            <Link to="/taskfeed">
              <Button variant="outline-secondary" className="py-2 px-3">Task types</Button>
            </Link>
            <Link to="/taskfeed">
              <Button variant="outline-secondary" className="py-2 px-3">Task lists</Button>
            </Link>
            <Link to="/taskfeed">
              <Button variant="outline-secondary" className="py-2 px-3">Task feeds</Button>
            </Link>
            <Button variant="custom" className="py-2 px-3" onClick={handleOpen}>New task</Button>
          </div>
        </div>

        {/* Tabs & Filters */}
        <div className="row g-2 mb-3 bg-white rounded-3 p-3 shadow-sm align-items-center">
          {/* Tabs */}
          <div className="col-md-auto">
            <div className="d-flex border rounded-3 overflow-hidden">
              <Button
                variant={activeTab === "outstanding" ? "custom" : "light"}
                className={`rounded-0 border-0 ${activeTab === "outstanding" ? "active" : ""}`}
                onClick={() => setActiveTab("outstanding")}
              >
                Outstanding
              </Button>
              <Button
                variant={activeTab === "completed" ? "custom" : "light"}
                className={`rounded-0 border-0 ${activeTab === "completed" ? "active" : ""}`}
                onClick={() => setActiveTab("completed")}
              >
                Completed
              </Button>
            </div>
          </div>

          {/* Date Range */}
          <div className="col-md-auto d-flex align-items-center">
            <Form.Control
              type="text"
              placeholder="MM/DD/YYYY"
              className="me-2"
              style={{ width: "120px" }}
              onFocus={e => e.target.type = 'date'}
              onBlur={e => e.target.type = 'text'}
            />
            <span className="mx-1">–</span>
            <Form.Control
              type="text"
              placeholder="MM/DD/YYYY"
              className="ms-2"
              style={{ width: "120px" }}
              onFocus={e => e.target.type = 'date'}
              onBlur={e => e.target.type = 'text'}
            />
          </div>

          {/* Date Presets */}
          <div className="col-md-auto">
            <Form.Select defaultValue="All dates" style={{ width: "160px" }}>
              <option>Past due</option>
              <option>Today</option>
              <option>Tomorrow</option>
              <option>This week</option>
              <option>This month</option>
              <option>This year</option>
              <option>No due date</option>
              <option>All dates</option>
            </Form.Select>
          </div>

          {/* Search */}
          <div className="col-md-auto">
            <Form.Control
              type="text"
              placeholder="Search"
              style={{ width: "180px" }}
            />
          </div>

          {/* Columns Dropdown */}
          <div className="col-md-auto">
            <DropdownButton
              title="Columns"
              variant="light"
              className="border"
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
          </div>

          {/* Filters Dropdown */}
          <div className="col-md-auto">
            <Dropdown>
              <Dropdown.Toggle variant="light" className="border">
                <span className="d-inline-flex justify-content-center align-items-center bg-custom rounded-circle text-white me-2" style={{ width: "20px", height: "20px" }}>
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
                    <Form.Check type="radio" name="assignedBy" label="john smith" />
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
        </div>

        {/* Table */}
        <div className="table-responsive">
          <Table bordered hover className="bg-white rounded-3">
            <thead className="bg-light">
              <tr>
                <th><Form.Check /></th>
                <th>Action</th>
                <th>Due date &#9650;</th>
                <th>Completed</th>
                <th>Name and description</th>
                <th>Matter</th>
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
          <div className="d-flex align-items-center gap-2">
            <Button variant="light" size="sm" className="border">&lt;</Button>
            <Button variant="light" size="sm" className="border">&gt;</Button>
            <span className="ms-2">No results found</span>
            <Form.Check
              type="switch"
              id="expand-rows-switch"
              label="Expand rows"
              defaultChecked
              className="ms-3"
            />
          </div>
          <Button variant="outline-secondary">Export</Button>
        </div>
      </div>

      {/* Modal for New Task */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered scrollable backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>New task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="overflow-auto" style={{ maxHeight: "70vh" }}>
          {/* Details Section */}
          <div className="mb-4">
            <h5 className="mb-3">Details</h5>
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
                      <Dropdown.Item>john smith</Dropdown.Item>
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
            <h5>Due date</h5>
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
            <h5>Reminders</h5>
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