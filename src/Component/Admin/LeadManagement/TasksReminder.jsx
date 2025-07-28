// TasksReminder.jsx
import React from 'react';

const TasksReminder = ({ tasks, getPriorityColor }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h3 className="card-title h5">Automatic Task Reminder</h3>
        <div className="mt-3">
          {tasks.map((task) => (
            <div key={task.id} className="d-flex align-items-start p-3 bg-light rounded mb-2">
              <div className="me-3">
                <i className="fas fa-clock text-muted"></i>
              </div>
              <div className="flex-grow-1">
                <p className="mb-1 fw-bold">{task.title}</p>
                <p className="small text-muted mb-1">Due date: {task.dueDate}</p>
                <span className={`badge ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
              </div>
              <button className="btn btn-sm btn-link text-success" title="Mark as complete">
                <i className="fas fa-check"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksReminder;
