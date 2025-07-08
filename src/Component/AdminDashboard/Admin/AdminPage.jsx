import React, { useState, useEffect } from 'react';

const AdminPage= () => {
 const [users, setUsers] = useState([
    { id: 1, username: 'admin', email: 'admin@example.com', role: 'Administrator', status: 'Active' },
    { id: 2, username: 'john_doe', email: 'john@example.com', role: 'Editor', status: 'Active' },
    { id: 3, username: 'jane_smith', email: 'jane@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, username: 'robert_johnson', email: 'robert@example.com', role: 'Editor', status: 'Active' },
    { id: 5, username: 'emily_davis', email: 'emily@example.com', role: 'Viewer', status: 'Active' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [newUser, setNewUser] = useState({ username: '', email: '', password: '', role: 'Viewer', status: 'Active' });
  const [editingUser, setEditingUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const [selectedRole, setSelectedRole] = useState('Administrator');
  const [permissions, setPermissions] = useState({
    users: { read: true, write: true, delete: true },
    content: { read: true, write: true, delete: true },
    settings: { read: true, write: true, delete: false },
    reports: { read: true, write: false, delete: false },
  });

  const [logs, setLogs] = useState([
    { id: 1, timestamp: '2025-07-08 09:15:32', level: 'Info', event: 'User Login', user: 'admin', description: 'Admin logged in successfully' },
    { id: 2, timestamp: '2025-07-08 08:45:21', level: 'Warning', event: 'Failed Login', user: 'unknown', description: 'Failed login attempt from IP 192.168.1.105' },
    { id: 3, timestamp: '2025-07-07 17:22:45', level: 'Error', event: 'API Error', user: 'system', description: 'Database connection timeout' },
    { id: 4, timestamp: '2025-07-07 14:30:12', level: 'Info', event: 'Content Updated', user: 'john_doe', description: 'Updated homepage content' },
    { id: 5, timestamp: '2025-07-07 11:05:38', level: 'Info', event: 'New User', user: 'admin', description: 'Created new user account: emily_davis' },
  ]);
  const [logLevel, setLogLevel] = useState('All');
  const [dateRange, setDateRange] = useState({ start: '2025-07-01', end: '2025-07-08' });
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [logCurrentPage, setLogCurrentPage] = useState(1);
  const logsPerPage = 5;

  const handleEditUser = () => {
    if (!editingUser || !editingUser.username || !editingUser.email) return;
    setUsers(users.map(user => user.id === editingUser.id ? { ...editingUser } : user));
    setShowEditModal(false);
    setShowNotification(true);
    setEditingUser(null);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleCreateUser = () => {
    if (!newUser.username || !newUser.email || !newUser.password) return;
    const newId = Math.max(...users.map(user => user.id)) + 1;
    setUsers([...users, { id: newId, ...newUser }]);
    setShowModal(false);
    setShowNotification(true);
    setNewUser({ username: '', email: '', password: '', role: 'Viewer', status: 'Active' });
    setTimeout(() => setShowNotification(false), 3000);
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const filteredLogs = logs.filter(log => logLevel === 'All' || log.level === logLevel);

  const indexOfLastLog = logCurrentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = filteredLogs.slice(indexOfFirstLog, indexOfLastLog);

  const handlePermissionChange = (module, action, checked) => {
    setPermissions({
      ...permissions,
      [module]: { ...permissions[module], [action]: checked }
    });
  };

  useEffect(() => {
    let interval;
    if (autoRefresh) {
      interval = setInterval(() => {
        console.log('Refreshing logs...');
      }, 30000);
    }
    return () => clearInterval(interval);
  }, [autoRefresh]);

  return (
    <div className="min-vh-100 bg-light p-4">
      <div className="container-fluid">
        <h1 className="display-6 fw-bold  mb-2">Admin Panel</h1>
        
        {/* User Management Section */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="h3 fw-semibold text-dark">User Management</h2>
              <button
                id="addUserBtn"
                onClick={() => setShowModal(true)}
                className="btn btn-primary"
              >
                <i className="fas fa-plus me-2"></i>
                Add New User
              </button>
            </div>
            
            {/* Success Notification */}
            {showNotification && (
              <div className="position-fixed top-0 end-0 p-3" style={{zIndex: 11}}>
                <div className="alert alert-success alert-dismissible fade show d-flex align-items-center" role="alert">
                  <i className="fas fa-check-circle me-2"></i>
                  User created successfully!
                </div>
              </div>
            )}
            
            {/* Edit User Modal */}
            {showEditModal && editingUser && (
              <div className="modal fade show d-block" tabIndex={-1} style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Edit User</h5>
                      <button
                        id="closeEditModalBtn"
                        onClick={() => setShowEditModal(false)}
                        className="btn-close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                          id="editUsernameInput"
                          type="text"
                          value={editingUser.username}
                          onChange={(e) => setEditingUser({...editingUser, username: e.target.value})}
                          className="form-control"
                          placeholder="Enter username"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          id="editEmailInput"
                          type="email"
                          value={editingUser.email}
                          onChange={(e) => setEditingUser({...editingUser, email: e.target.value})}
                          className="form-control"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password (Optional)</label>
                        <input
                          id="editPasswordInput"
                          type="password"
                          value={editingUser.password || ''}
                          onChange={(e) => setEditingUser({...editingUser, password: e.target.value})}
                          className="form-control"
                          placeholder="Enter new password"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Role</label>
                        <select
                          id="editRoleSelect"
                          value={editingUser.role}
                          onChange={(e) => setEditingUser({...editingUser, role: e.target.value})}
                          className="form-select"
                        >
                          <option value="Viewer">Viewer</option>
                          <option value="Editor">Editor</option>
                          <option value="Administrator">Administrator</option>
                        </select>
                      </div>
                      <div className="form-check mb-3">
                        <input
                          id="editStatusToggle"
                          type="checkbox"
                          checked={editingUser.status === 'Active'}
                          onChange={(e) => setEditingUser({...editingUser, status: e.target.checked ? 'Active' : 'Inactive'})}
                          className="form-check-input"
                        />
                        <label className="form-check-label">Active Status</label>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        id="editCancelBtn"
                        onClick={() => setShowEditModal(false)}
                        className="btn btn-secondary"
                      >
                        Cancel
                      </button>
                      <button
                        id="saveUserBtn"
                        onClick={handleEditUser}
                        className="btn btn-primary"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Add User Modal */}
            {showModal && (
              <div className="modal fade show d-block" tabIndex={-1} style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Create New User</h5>
                      <button
                        id="closeModalBtn"
                        onClick={() => setShowModal(false)}
                        className="btn-close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                          id="usernameInput"
                          type="text"
                          value={newUser.username}
                          onChange={(e) => setNewUser({...newUser, username: e.target.value})}
                          className="form-control"
                          placeholder="Enter username"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          id="emailInput"
                          type="email"
                          value={newUser.email}
                          onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                          className="form-control"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          id="passwordInput"
                          type="password"
                          value={newUser.password}
                          onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                          className="form-control"
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Role</label>
                        <select
                          id="roleSelect"
                          value={newUser.role}
                          onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                          className="form-select"
                        >
                          <option value="Viewer">Viewer</option>
                          <option value="Editor">Editor</option>
                          <option value="Administrator">Administrator</option>
                        </select>
                      </div>
                      <div className="form-check mb-3">
                        <input
                          id="statusToggle"
                          type="checkbox"
                          checked={newUser.status === 'Active'}
                          onChange={(e) => setNewUser({...newUser, status: e.target.checked ? 'Active' : 'Inactive'})}
                          className="form-check-input"
                        />
                        <label className="form-check-label">Active Status</label>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        id="cancelBtn"
                        onClick={() => setShowModal(false)}
                        className="btn btn-secondary"
                      >
                        Cancel
                      </button>
                      <button
                        id="createUserBtn"
                        onClick={handleCreateUser}
                        className="btn btn-primary"
                      >
                        Create User
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mb-3 position-relative">
              <input
                type="text"
                placeholder="Search users..."
                className="form-control ps-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="fas fa-search position-absolute top-50 end-0 translate-middle-y me-3 text-muted"></i>
            </div>
            
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="table-light">
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentUsers.map((user) => (
                    <tr key={user.id}>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <span className={`badge ${user.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>
                          {user.status}
                        </span>
                      </td>
                      <td>
                        <button 
                          onClick={() => {
                            setEditingUser(user);
                            setShowEditModal(true);
                          }}
                          className="btn btn-link text-primary me-2"
                        >
                         <i className="fas fa-edit"></i>
                        </button>
                        <button className="btn btn-link text-danger me-2">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="text-muted small">
                Showing {indexOfFirstUser + 1} to {Math.min(indexOfLastUser, filteredUsers.length)} of {filteredUsers.length} users
              </div>
              <div className="btn-group">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="btn btn-outline-secondary btn-sm"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  onClick={() => setCurrentPage(prev => prev + 1)}
                  disabled={indexOfLastUser >= filteredUsers.length}
                  className="btn btn-outline-secondary btn-sm"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Role Permissions Section */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h2 className="h3 fw-semibold text-dark mb-4">Role Permissions</h2>
            
            <div className="mb-4">
              <label className="form-label">Select Role</label>
              <select
                className="form-select"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option>Administrator</option>
                <option>Editor</option>
                <option>Viewer</option>
              </select>
            </div>
            
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th>Module</th>
                    <th className="text-center">Read</th>
                    <th className="text-center">Write</th>
                    <th className="text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(permissions).map(([module, actions]) => (
                    <tr key={module}>
                      <td className="text-capitalize fw-medium">{module}</td>
                      <td className="text-center">
                        <input
                          type="checkbox"
                          checked={actions.read}
                          onChange={(e) => handlePermissionChange(module, 'read', e.target.checked)}
                          className="form-check-input"
                        />
                      </td>
                      <td className="text-center">
                        <input
                          type="checkbox"
                          checked={actions.write}
                          onChange={(e) => handlePermissionChange(module, 'write', e.target.checked)}
                          className="form-check-input"
                        />
                      </td>
                      <td className="text-center">
                        <input
                          type="checkbox"
                          checked={actions.delete}
                          onChange={(e) => handlePermissionChange(module, 'delete', e.target.checked)}
                          className="form-check-input"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="d-flex justify-content-end mt-4">
              <button className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </div>
        </div>
        
        {/* View Logs Section */}
        <div className="card shadow-sm">
          <div className="card-body">
            <h2 className="h3 fw-semibold text-dark mb-4">View Logs</h2>
            
            <div className="row mb-4">
              <div className="col-md-4 mb-3 mb-md-0">
                <label className="form-label">Date Range</label>
                <div className="d-flex">
                  <input
                    type="date"
                    value={dateRange.start}
                    onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
                    className="form-control me-2"
                  />
                  <span className="d-flex align-items-center text-muted">to</span>
                  <input
                    type="date"
                    value={dateRange.end}
                    onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
                    className="form-control ms-2"
                  />
                </div>
              </div>
              
              <div className="col-md-4 mb-3 mb-md-0">
                <label className="form-label">Log Level</label>
                <select
                  className="form-select"
                  value={logLevel}
                  onChange={(e) => setLogLevel(e.target.value)}
                >
                  <option>All</option>
                  <option>Info</option>
                  <option>Warning</option>
                  <option>Error</option>
                  <option>Debug</option>
                </select>
              </div>
              
              <div className="col-md-4 d-flex align-items-end">
                <div className="form-check form-switch me-3">
                  <input
                    type="checkbox"
                    checked={autoRefresh}
                    onChange={() => setAutoRefresh(!autoRefresh)}
                    className="form-check-input"
                    role="switch"
                  />
                  <label className="form-check-label">Auto Refresh</label>
                </div>
                <button className="btn btn-success">
                  <i className="fas fa-download me-2"></i>
                  Export Logs
                </button>
              </div>
            </div>
            
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="table-light">
                  <tr>
                    <th>Timestamp</th>
                    <th>Level</th>
                    <th>Event</th>
                    <th>User</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {currentLogs.map((log) => (
                    <tr key={log.id}>
                      <td>{log.timestamp}</td>
                      <td>
                        <span className={`badge ${
                          log.level === 'Error' ? 'bg-danger' :
                          log.level === 'Warning' ? 'bg-warning' :
                          'bg-info'
                        }`}>
                          {log.level}
                        </span>
                      </td>
                      <td>{log.event}</td>
                      <td>{log.user}</td>
                      <td>{log.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Logs Pagination */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="text-muted small">
                Showing {indexOfFirstLog + 1} to {Math.min(indexOfLastLog, filteredLogs.length)} of {filteredLogs.length} logs
              </div>
              <div className="btn-group">
                <button
                  onClick={() => setLogCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={logCurrentPage === 1}
                  className="btn btn-outline-secondary btn-sm"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  onClick={() => setLogCurrentPage(prev => prev + 1)}
                  disabled={indexOfLastLog >= filteredLogs.length}
                  className="btn btn-outline-secondary btn-sm"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;