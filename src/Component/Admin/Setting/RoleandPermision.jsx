import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faSearch,
  faFilter,
  faChevronDown,
  faChevronRight,
  faChevronLeft,
  faChevronUp,
  faEdit,
  faTrash,
  faExclamationTriangle,
  faTimes,
  faCheck,
  faCircle
} from '@fortawesome/free-solid-svg-icons';

const RoleAndPermission = () => {
  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [expandedRole, setExpandedRole] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [editingRole, setEditingRole] = useState(null);

  // Data
  const roles = [
    {
      id: 1,
      name: 'Super Administrator',
      description: 'Full system access with all permissions',
      users: 2,
      created: '15/01/2024', // UK date format
      status: 'Active'
    },
    {
      id: 2,
      name: 'Content Manager',
      description: 'Manage content and user-generated materials',
      users: 8,
      created: '20/02/2024', // UK date format
      status: 'Active'
    },
    {
      id: 3,
      name: 'User Support',
      description: 'Handle user enquiries and basic support tasks', // UK spelling
      users: 15,
      created: '10/03/2024', // UK date format
      status: 'Active'
    },
    {
      id: 4,
      name: 'Analytics Viewer',
      description: 'View reports and analytics data only',
      users: 5,
      created: '25/03/2024', // UK date format
      status: 'Inactive'
    }
  ];

  const permissions = {
    'User Management': [
      { id: 'user_create', name: 'Create Users', description: 'Create new user accounts' },
      { id: 'user_edit', name: 'Edit Users', description: 'Modify existing user information' },
      { id: 'user_delete', name: 'Delete Users', description: 'Remove user accounts' },
      { id: 'user_view', name: 'View Users', description: 'Access user profiles and data' }
    ],
    'Content Management': [
      { id: 'content_create', name: 'Create Content', description: 'Add new content items' },
      { id: 'content_edit', name: 'Edit Content', description: 'Modify existing content' },
      { id: 'content_publish', name: 'Publish Content', description: 'Make content live' },
      { id: 'content_delete', name: 'Delete Content', description: 'Remove content items' }
    ],
    'System Settings': [
      { id: 'system_config', name: 'System Configuration', description: 'Modify system settings' },
      { id: 'security_settings', name: 'Security Settings', description: 'Manage security configurations' },
      { id: 'backup_restore', name: 'Backup & Restore', description: 'Perform system backups' }
    ],
    'Reports & Analytics': [
      { id: 'reports_view', name: 'View Reports', description: 'Access system reports' },
      { id: 'analytics_view', name: 'View Analytics', description: 'Access analytics dashboard' },
      { id: 'export_data', name: 'Export Data', description: 'Export reports and data' }
    ]
  };

  const [rolePermissions, setRolePermissions] = useState({
    1: Object.values(permissions).flat().map(p => p.id),
    2: ['content_create', 'content_edit', 'content_publish', 'content_delete', 'user_view'],
    3: ['user_view', 'reports_view'],
    4: ['reports_view', 'analytics_view']
  });

  // Handler functions
  const handleRowSelect = (id) => {
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedRows(selectedRows.length === roles.length ? [] : roles.map(role => role.id));
  };

  const togglePermission = (roleId, permissionId) => {
    setRolePermissions(prev => ({
      ...prev,
      [roleId]: prev[roleId]?.includes(permissionId)
        ? prev[roleId].filter(p => p !== permissionId)
        : [...(prev[roleId] || []), permissionId]
    }));
  };

  const toggleCategoryPermissions = (roleId, category, checked) => {
    const categoryPermissions = permissions[category].map(p => p.id);
    setRolePermissions(prev => ({
      ...prev,
      [roleId]: checked
        ? [...new Set([...(prev[roleId] || []), ...categoryPermissions])]
        : (prev[roleId] || []).filter(p => !categoryPermissions.includes(p))
    }));
  };

  const filteredRoles = roles.filter(role =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-vh-100 bg-light">
      <div className="p-4">
        {/* Header Section */}
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h2 fw-bold mb-0">Roles & Permissions</h1>
            <button
              onClick={() => setShowCreateModal(true)}
              className="btn btn-primary"
            >
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Create New Role
            </button>
          </div>
          
          {/* Search and Filter Bar */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="flex-grow-1 position-relative">
              <div className="position-absolute top-50 start-0 translate-middle-y ps-3">
                <FontAwesomeIcon icon={faSearch} className="text-muted" />
              </div>
              <input
                type="text"
                placeholder="Search roles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control ps-5"
              />
            </div>
            <div>
              <button className="btn btn-outline-secondary">
                <FontAwesomeIcon icon={faFilter} className="me-2" />
                Filter
                <FontAwesomeIcon icon={faChevronDown} className="ms-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="card shadow-sm">
          {/* Table Header */}
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={selectedRows.length === roles.length && roles.length > 0}
                    onChange={handleSelectAll}
                  />
                  <label className="form-check-label">
                    {selectedRows.length > 0 ? `${selectedRows.length} selected` : 'Select all'}
                  </label>
                </div>
                {selectedRows.length > 0 && (
                  <button 
                    className="btn btn-link text-danger p-0"
                    onClick={() => {
                      setDeleteTarget(selectedRows);
                      setShowDeleteModal(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} className="me-1" />
                    Delete Selected
                  </button>
                )}
              </div>
              <div className="text-muted">
                {filteredRoles.length} roles total
              </div>
            </div>
          </div>
          
          {/* Table Content */}
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={selectedRows.length === roles.length && roles.length > 0}
                        onChange={handleSelectAll}
                      />
                    </div>
                  </th>
                  <th>Role Name</th>
                  <th>Description</th>
                  <th>Users</th>
                  <th>Created</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRoles.length > 0 ? (
                  filteredRoles.map((role) => (
                    <React.Fragment key={role.id}>
                      <tr className={selectedRows.includes(role.id) ? 'table-active' : ''}>
                        <td>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              checked={selectedRows.includes(role.id)}
                              onChange={() => handleRowSelect(role.id)}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <button
                              onClick={() => setExpandedRole(expandedRole === role.id ? null : role.id)}
                              className="btn btn-sm btn-link me-2"
                            >
                              <FontAwesomeIcon 
                                icon={expandedRole === role.id ? faChevronUp : faChevronRight} 
                              />
                            </button>
                            <div className="fw-medium">{role.name}</div>
                          </div>
                        </td>
                        <td>
                          <div className="text-truncate" style={{maxWidth: '200px'}}>
                            {role.description}
                          </div>
                        </td>
                        <td>{role.users}</td>
                        <td>{role.created}</td>
                        <td>
                          <span className={`badge ${role.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>
                            {role.status}
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <button 
                              onClick={() => {
                                setEditingRole(role);
                                setShowEditModal(true);
                              }}
                              className="btn btn-sm btn-link text-primary p-0"
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button
                              onClick={() => {
                                setDeleteTarget(role.id);
                                setShowDeleteModal(true);
                              }}
                              className="btn btn-sm btn-link text-danger p-0"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </div>
                        </td>
                      </tr>
                      
                      {/* Role Details Panel */}
                      {expandedRole === role.id && (
                        <tr>
                          <td colSpan={7} className="p-0">
                            <div className="p-4 bg-light">
                              <div className="mb-4">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                  <h3 className="h5 mb-0">Permission Settings</h3>
                                  <div className="d-flex gap-2">
                                    <button className="btn btn-primary btn-sm">
                                      Save Changes
                                    </button>
                                    <button 
                                      className="btn btn-outline-secondary btn-sm"
                                      onClick={() => setExpandedRole(null)}
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </div>
                                <div className="row">
                                  {Object.entries(permissions).map(([category, perms]) => {
                                    const categoryPermissions = perms.map(p => p.id);
                                    const hasAllPermissions = categoryPermissions.every(p =>
                                      rolePermissions[role.id]?.includes(p)
                                    );
                                    const hasSomePermissions = categoryPermissions.some(p =>
                                      rolePermissions[role.id]?.includes(p)
                                    );
                                    
                                    return (
                                      <div key={category} className="col-md-6 mb-3">
                                        <div className="card h-100">
                                          <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                              <h4 className="h6 mb-0">{category}</h4>
                                              <div className="form-check">
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                  checked={hasAllPermissions}
                                                  ref={(el) => {
                                                    if (el) el.indeterminate = hasSomePermissions && !hasAllPermissions;
                                                  }}
                                                  onChange={(e) => toggleCategoryPermissions(role.id, category, e.target.checked)}
                                                />
                                                <label className="form-check-label small">
                                                  Select All
                                                </label>
                                              </div>
                                            </div>
                                            <div className="list-group list-group-flush">
                                              {perms.map((permission) => (
                                                <div key={permission.id} className="list-group-item d-flex justify-content-between align-items-center">
                                                  <div>
                                                    <div className="fw-medium">{permission.name}</div>
                                                    <small className="text-muted">{permission.description}</small>
                                                  </div>
                                                  <div className="form-check form-switch">
                                                    <input
                                                      type="checkbox"
                                                      className="form-check-input"
                                                      role="switch"
                                                      checked={rolePermissions[role.id]?.includes(permission.id) || false}
                                                      onChange={() => togglePermission(role.id, permission.id)}
                                                    />
                                                  </div>
                                                </div>
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="text-center py-4">
                      No roles found matching your search criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="card-footer d-flex justify-content-between align-items-center">
            <div className="text-muted">
              Showing <span className="fw-bold">1</span> to <span className="fw-bold">{filteredRoles.length}</span> of{' '}
              <span className="fw-bold">{roles.length}</span> entries
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-secondary btn-sm" disabled>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className="btn btn-primary btn-sm">1</button>
              <button className="btn btn-outline-secondary btn-sm" disabled>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Create Role Modal */}
      {showCreateModal && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create New Role</h5>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="btn-close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Role Name</label>
                  <input
                    type="text"
                    placeholder="Enter role name"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    placeholder="Enter role description"
                    rows={3}
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button className="btn btn-primary">
                  Create Role
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Role Modal */}
      {showEditModal && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Role</h5>
                <button
                  onClick={() => {
                    setShowEditModal(false);
                    setEditingRole(null);
                  }}
                  className="btn-close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Role Name</label>
                  <input
                    type="text"
                    value={editingRole?.name || ''}
                    onChange={(e) => setEditingRole(prev => prev ? {...prev, name: e.target.value} : null)}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    value={editingRole?.description || ''}
                    onChange={(e) => setEditingRole(prev => prev ? {...prev, description: e.target.value} : null)}
                    rows={3}
                    className="form-control"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    value={editingRole?.status || ''}
                    onChange={(e) => setEditingRole(prev => prev ? {...prev, status: e.target.value} : null)}
                    className="form-select"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => {
                    setShowEditModal(false);
                    setEditingRole(null);
                  }}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    setShowEditModal(false);
                    setEditingRole(null);
                  }}
                  className="btn btn-primary"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="d-flex">
                  <div className="flex-shrink-0 me-3">
                    <div className="rounded-circle bg-danger bg-opacity-10 p-3 text-danger">
                      <FontAwesomeIcon icon={faExclamationTriangle} size="lg" />
                    </div>
                  </div>
                  <div>
                    <h5 className="modal-title">Delete Role</h5>
                    <p>Are you sure you want to delete this role? This action cannot be undone.</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Handle delete logic here
                    setShowDeleteModal(false);
                    setDeleteTarget(null);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoleAndPermission;