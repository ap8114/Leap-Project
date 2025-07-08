import React, { useState } from 'react';

const TasksWorkflow = () => {
  // Task data state
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Review Contract', matter: 'Smith vs. Jones', assignee: 'John Doe', dueDate: '2025-07-15', status: 'In Progress', priority: 'High' },
    { id: 2, name: 'Prepare Legal Brief', matter: 'Corporate Merger', assignee: 'Jane Smith', dueDate: '2025-07-20', status: 'Not Started', priority: 'Medium' },
    { id: 3, name: 'Client Consultation', matter: 'Estate Planning', assignee: 'Robert Johnson', dueDate: '2025-07-10', status: 'Completed', priority: 'Low' },
    { id: 4, name: 'File Court Documents', matter: 'Smith vs. Jones', assignee: 'John Doe', dueDate: '2025-07-12', status: 'In Progress', priority: 'High' },
    { id: 5, name: 'Research Case Law', matter: 'Corporate Merger', assignee: 'Jane Smith', dueDate: '2025-07-25', status: 'Not Started', priority: 'Medium' },
  ]);

  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    name: '',
    matter: '',
    assignee: '',
    dueDate: '',
    status: 'Not Started',
    priority: 'Medium'
  });

  // Edit modal state
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const handleCreateTask = (e) => {
    e.preventDefault();
    const newTaskWithId = {
      ...newTask,
      id: tasks.length + 1
    };
    setTasks([...tasks, newTaskWithId]);
    setNewTask({
      name: '',
      matter: '',
      assignee: '',
      dueDate: '',
      status: 'Not Started',
      priority: 'Medium'
    });
    setIsNewTaskModalOpen(false);
  };

  // Filter states
  const [matterFilter, setMatterFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [assigneeFilter, setAssigneeFilter] = useState('All');

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-success';
      case 'In Progress': return 'bg-primary';
      case 'Not Started': return 'bg-secondary';
      default: return 'bg-secondary';
    }
  };

  // Get priority color
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-danger';
      case 'Medium': return 'text-warning';
      case 'Low': return 'text-success';
      default: return 'text-muted';
    }
  };

  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    return (matterFilter === 'All' || task.matter === matterFilter) &&
      (statusFilter === 'All' || task.status === statusFilter) &&
      (assigneeFilter === 'All' || task.assignee === assigneeFilter);
  });

  // Edit handlers
  const handleEditClick = (task) => {
    setEditTask({ ...task });
    setIsEditModalOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditSave = (e) => {
    e.preventDefault();
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === editTask.id ? editTask : t))
    );
    setIsEditModalOpen(false);
    setEditTask(null);
  };

  return (
    <div className="p-4">
      <div className="">
        <h1 className="display-5 fw-bold text-dark mb-2">Tasks Management</h1>
        <p className="text-muted mb-4">Manage and track tasks across your matters</p>

        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="h4 fw-semibold text-dark">Active Tasks</h2>
              <button
                onClick={() => setIsNewTaskModalOpen(true)}
                className="btn btn-primary d-flex align-items-center">
                <i className="fas fa-plus me-2"></i> New Task
              </button>
            </div>

            {/* Task Filters */}
            <div className="row mb-4 g-3">
              <div className="col-md-4">
                <label className="form-label">Filter by Matter</label>
                <select
                  className="form-select"
                  value={matterFilter}
                  onChange={(e) => setMatterFilter(e.target.value)}
                >
                  <option value="All">All Matters</option>
                  <option value="Smith vs. Jones">Smith vs. Jones</option>
                  <option value="Corporate Merger">Corporate Merger</option>
                  <option value="Estate Planning">Estate Planning</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Filter by Status</label>
                <select
                  className="form-select"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="All">All Statuses</option>
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Filter by Assignee</label>
                <select
                  className="form-select"
                  value={assigneeFilter}
                  onChange={(e) => setAssigneeFilter(e.target.value)}
                >
                  <option value="All">All Assignees</option>
                  <option value="John Doe">John Doe</option>
                  <option value="Jane Smith">Jane Smith</option>
                  <option value="Robert Johnson">Robert Johnson</option>
                </select>
              </div>
            </div>

            {/* Task List */}
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Task</th>
                    <th scope="col">Matter</th>
                    <th scope="col">Assignee</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Priority</th>
                    <th scope="col" className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTasks.map((task) => (
                    <tr key={task.id}>
                      <td className="fw-medium">{task.name}</td>
                      <td>{task.matter}</td>
                      <td>{task.assignee}</td>
                      <td>{new Date(task.dueDate).toLocaleDateString()}</td>
                      <td>
                        <span className={`badge ${getStatusColor(task.status)}`}>
                          {task.status}
                        </span>
                      </td>
                      <td>
                        <span className={`fw-medium ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                      </td>
                      <td className="text-end">
                        <button
                          className="btn btn-link text-primary me-2"
                          onClick={() => handleEditClick(task)}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="btn btn-link text-danger">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {filteredTasks.length === 0 && (
              <div className="text-center py-5 text-muted">
                No tasks match your current filters
              </div>
            )}
          </div>
        </div>
      </div>

      {/* New Task Modal */}
      {isNewTaskModalOpen && (
        <div className="modal fade show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create New Task</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsNewTaskModalOpen(false)}
                  aria-label="Close"
                ></button>
              </div>
              <form onSubmit={handleCreateTask}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Task Name</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={newTask.name}
                      onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Matter</label>
                    <select
                      required
                      className="form-select"
                      value={newTask.matter}
                      onChange={(e) => setNewTask({ ...newTask, matter: e.target.value })}
                    >
                      <option value="">Select Matter</option>
                      <option value="Smith vs. Jones">Smith vs. Jones</option>
                      <option value="Corporate Merger">Corporate Merger</option>
                      <option value="Estate Planning">Estate Planning</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Assignee</label>
                    <select
                      required
                      className="form-select"
                      value={newTask.assignee}
                      onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
                    >
                      <option value="">Select Assignee</option>
                      <option value="John Doe">John Doe</option>
                      <option value="Jane Smith">Jane Smith</option>
                      <option value="Robert Johnson">Robert Johnson</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Due Date</label>
                    <input
                      type="date"
                      required
                      className="form-control"
                      value={newTask.dueDate}
                      onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select
                      className="form-select"
                      value={newTask.status}
                      onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                    >
                      <option value="Not Started">Not Started</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Priority</label>
                    <select
                      className="form-select"
                      value={newTask.priority}
                      onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    onClick={() => setIsNewTaskModalOpen(false)}
                    className="btn btn-outline-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Create Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Edit Task Modal */}
      {isEditModalOpen && editTask && (
        <div className="modal fade show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Task</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsEditModalOpen(false)}
                  aria-label="Close"
                ></button>
              </div>
              <form onSubmit={handleEditSave}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Task Name</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      name="name"
                      value={editTask.name}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Matter</label>
                    <select
                      required
                      className="form-select"
                      name="matter"
                      value={editTask.matter}
                      onChange={handleEditChange}
                    >
                      <option value="">Select Matter</option>
                      <option value="Smith vs. Jones">Smith vs. Jones</option>
                      <option value="Corporate Merger">Corporate Merger</option>
                      <option value="Estate Planning">Estate Planning</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Assignee</label>
                    <select
                      required
                      className="form-select"
                      name="assignee"
                      value={editTask.assignee}
                      onChange={handleEditChange}
                    >
                      <option value="">Select Assignee</option>
                      <option value="John Doe">John Doe</option>
                      <option value="Jane Smith">Jane Smith</option>
                      <option value="Robert Johnson">Robert Johnson</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Due Date</label>
                    <input
                      type="date"
                      required
                      className="form-control"
                      name="dueDate"
                      value={editTask.dueDate}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select
                      className="form-select"
                      name="status"
                      value={editTask.status}
                      onChange={handleEditChange}
                    >
                      <option value="Not Started">Not Started</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Priority</label>
                    <select
                      className="form-select"
                      name="priority"
                      value={editTask.priority}
                      onChange={handleEditChange}
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                    className="btn btn-outline-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TasksWorkflow;