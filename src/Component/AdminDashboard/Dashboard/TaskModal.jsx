import React from 'react';

const TaskModal = ({ showTaskModal, setShowTaskModal, taskForm, handleTaskFormChange, handleSaveTask }) => {
  if (!showTaskModal) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h5 className="modal-title">New task</h5>
            <button 
              onClick={() => setShowTaskModal(false)}
              className="btn-close"
            ></button>
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            {/* Details Section */}
            <div>
              <h6 className="fw-bold mb-3">Details</h6>
              
              {/* Name and Priority */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label small">Name*</label>
                  <input
                    type="text"
                    value={taskForm.name}
                    onChange={(e) => handleTaskFormChange('name', e.target.value)}
                    placeholder="Enter task name..."
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label small">Priority</label>
                  <select
                    value={taskForm.priority}
                    onChange={(e) => handleTaskFormChange('priority', e.target.value)}
                    className="form-select"
                  >
                    <option>Normal</option>
                    <option>High</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="mb-3">
                <label className="form-label small">Description</label>
                <div className="border rounded">
                  <div className="d-flex gap-2 p-2 border-bottom small">
                    <button className="btn btn-sm p-1">
                      <i className="fas fa-bold"></i>
                    </button>
                    <button className="btn btn-sm p-1">
                      <i className="fas fa-italic"></i>
                    </button>
                    <button className="btn btn-sm p-1">
                      <i className="fas fa-underline"></i>
                    </button>
                    <button className="btn btn-sm p-1">
                      <i className="fas fa-strikethrough"></i>
                    </button>
                    <div className="vr"></div>
                    <button className="btn btn-sm p-1">
                      <i className="fas fa-list-ul"></i>
                    </button>
                    <button className="btn btn-sm p-1">
                      <i className="fas fa-list-ol"></i>
                    </button>
                    <div className="vr"></div>
                    <button className="btn btn-sm p-1">
                      <i className="fas fa-link"></i>
                    </button>
                  </div>
                  <textarea
                    value={taskForm.description}
                    onChange={(e) => handleTaskFormChange('description', e.target.value)}
                    placeholder="Enter task description..."
                    rows={4}
                    className="form-control border-0"
                  ></textarea>
                </div>
              </div>

              {/* Assign to */}
              <div className="mb-3">
                <label className="form-label small">Assign to *</label>
                <select
                  value={taskForm.assignTo}
                  onChange={(e) => handleTaskFormChange('assignTo', e.target.value)}
                  className="form-select"
                >
                  <option value="">john smith</option>
                </select>
              </div>

              {/* Category and Private Task */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label small">Category</label>
                  <select
                    value={taskForm.category}
                    onChange={(e) => handleTaskFormChange('category', e.target.value)}
                    className="form-select"
                  >
                    <option value="">Find a task type...</option>
                  </select>
                </div>
                <div className="col-md-6 d-flex align-items-center gap-2 mt-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="privateTask"
                      checked={taskForm.privateTask}
                      onChange={(e) => handleTaskFormChange('privateTask', e.target.checked)}
                      className="form-check-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="privateTask" className="form-check-label small">Private task</label>
                    <div className="small text-muted">Restrict visibility</div>
                  </div>
                </div>
              </div>

              {/* Task Status and Time Estimate */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label small">Task status</label>
                  <select
                    value={taskForm.status}
                    onChange={(e) => handleTaskFormChange('status', e.target.value)}
                    className="form-select"
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center gap-1 mb-1">
                    <label className="form-label small">Time estimate</label>
                    <i className="fas fa-info-circle text-muted small"></i>
                  </div>
                  <input
                    type="text"
                    value={taskForm.timeEstimate}
                    onChange={(e) => handleTaskFormChange('timeEstimate', e.target.value)}
                    placeholder="Ex. 1h 30m, 1:30, 1.5h"
                    className="form-control"
                  />
                </div>
              </div>

              {/* Matter */}
              <div className="mb-3">
                <label className="form-label small">Matter</label>
                <select
                  value={taskForm.matter}
                  onChange={(e) => handleTaskFormChange('matter', e.target.value)}
                  className="form-select"
                >
                  <option value="">Find a matter...</option>
                </select>
              </div>

              {/* Due Date */}
              <div className="mb-4">
                <label className="form-label small">Due date</label>
                <div>
                  <label className="form-label small text-muted">Select date</label>
                  <input
                    type="date"
                    value={taskForm.dueDate}
                    onChange={(e) => handleTaskFormChange('dueDate', e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              {/* Reminders */}
              <div className="mb-3">
                <h6 className="fw-bold mb-3">Reminders</h6>
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-circle bg-light d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                    <i className="fas fa-bell text-muted"></i>
                  </div>
                  <div className="flex-grow-1">
                    <div className="small text-muted mb-1">No reminders set for this task</div>
                    <button className="btn btn-link text-primary p-0 small">
                      <i className="fas fa-plus me-1"></i>
                      Add a reminder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            <button
              onClick={handleSaveTask}
              className="btn btn-custom"
            >
              Save task
            </button>
            <button className="btn btn-link text-muted">
              Save and create another
            </button>
            <button
              onClick={() => setShowTaskModal(false)}
              className="btn btn-link text-muted"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;