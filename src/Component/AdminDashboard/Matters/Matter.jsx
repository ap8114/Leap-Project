import React, { useState } from 'react';

const Matter = () => {
  // Sample data for matters
  const [matters, setMatters] = useState([
    {
      id: 1,
      title: 'Johnson Property Acquisition',
      type: 'Real Estate',
      status: 'Active',
      dueDate: '2025-08-15',
      assignee: {
        name: 'Sarah Parker',
        avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20business%20woman%20with%20short%20brown%20hair%2C%20neutral%20background%2C%20high%20quality%2C%20photorealistic%2C%20business%20attire%2C%20soft%20lighting%2C%20clean%20background&width=40&height=40&seq=avatar1&orientation=squarish'
      }
    },
    {
      id: 2,
      title: 'Smith vs. Henderson Litigation',
      type: 'Litigation',
      status: 'Pending',
      dueDate: '2025-09-22',
      assignee: {
        name: 'Michael Chen',
        avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20an%20asian%20business%20man%20with%20glasses%2C%20neutral%20background%2C%20high%20quality%2C%20photorealistic%2C%20business%20attire%2C%20soft%20lighting%2C%20clean%20background&width=40&height=40&seq=avatar2&orientation=squarish'
      }
    },
    {
      id: 3,
      title: 'Westfield Contract Review',
      type: 'Corporate',
      status: 'Active',
      dueDate: '2025-07-30',
      assignee: {
        name: 'Jessica Williams',
        avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20woman%20with%20blonde%20hair%2C%20neutral%20background%2C%20high%20quality%2C%20photorealistic%2C%20business%20attire%2C%20soft%20lighting%2C%20clean%20background&width=40&height=40&seq=avatar3&orientation=squarish'
      }
    },
    {
      id: 4,
      title: 'Thompson Family Trust',
      type: 'Estate Planning',
      status: 'Closed',
      dueDate: '2025-06-10',
      assignee: {
        name: 'Robert Johnson',
        avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20business%20man%20with%20dark%20skin%2C%20neutral%20background%2C%20high%20quality%2C%20photorealistic%2C%20business%20attire%2C%20soft%20lighting%2C%20clean%20background&width=40&height=40&seq=avatar4&orientation=squarish'
      }
    }
  ]);

  // Filter states
  const [statusFilter, setStatusFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [assigneeFilter, setAssigneeFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMatter, setNewMatter] = useState({
    title: '',
    type: '',
    status: 'Active',
    dueDate: '',
    assignee: ''
  });
  const [formErrors, setFormErrors] = useState({
    title: false,
    type: false,
    dueDate: false,
    assignee: false
  });

  const handleCreateMatter = () => {
    const errors = {
      title: !newMatter.title,
      type: !newMatter.type,
      dueDate: !newMatter.dueDate,
      assignee: !newMatter.assignee
    };

    setFormErrors(errors);

    if (Object.values(errors).some(error => error)) {
      return;
    }

    const newMatterId = matters.length + 1;
    const assigneeData = matters.find(m => m.assignee.name === newMatter.assignee)?.assignee;

    const matterToAdd = {
      id: newMatterId,
      ...newMatter,
      assignee: assigneeData || {
        name: newMatter.assignee,
        avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20headshot%2C%20neutral%20background%2C%20high%20quality%2C%20photorealistic%2C%20business%20attire&width=40&height=40&seq=avatar_new&orientation=squarish'
      }
    };

    setMatters([...matters, matterToAdd]);
    setIsModalOpen(false);
    setNewMatter({
      title: '',
      type: '',
      status: 'Active',
      dueDate: '',
      assignee: ''
    });
  };

  // Filter matters based on selected filters and search term
  const filteredMatters = matters.filter(matter => {
    const matchesStatus = statusFilter === 'All' || matter.status === statusFilter;
    const matchesType = typeFilter === 'All' || matter.type === typeFilter;
    const matchesAssignee = assigneeFilter === 'All' || matter.assignee.name === assigneeFilter;
    const matchesSearch = matter.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesType && matchesAssignee && matchesSearch;
  });

  // Get unique values for filters
  const statuses = ['All', ...new Set(matters.map(matter => matter.status))];
  const types = ['All', ...new Set(matters.map(matter => matter.type))];
  const assignees = ['All', ...new Set(matters.map(matter => matter.assignee.name))];

  // Function to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-success';
      case 'Pending':
        return 'bg-warning';
      case 'Closed':
        return 'bg-secondary';
      default:
        return 'bg-custom';
    }
  };

  // Format date to be more readable
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-vh-100 bg-white p-4">
     <div className="container-fluid p-3 p-md-4">
  {/* Title & Description */}
  <div className="mb-3">
    <h1 className="h1 fw-bold mb-2">Matters</h1>
    <p className="text-muted">
      Review the progress and details of your legal matters, track due dates, and stay updated with assigned legal professionals.
    </p>
  </div>

  {/* Search & Create Button */}
  <div className="row align-items-stretch g-3 mb-3">
    <div className="col-12 col-sm-9">
      <input
        type="text"
        className="form-control h-100"
        placeholder="Search..."
        aria-label="Search"
      />
    </div>
    <div className="col-12 col-sm-3 d-grid">
      <button
        onClick={() => setIsModalOpen(true)}

        className="btn btn-custom"
      >
        <i className="fas fa-plus me-2"></i>
        Create Matter
      </button>
    </div>
  </div>

  {/* Filters */}
  <div className="bg-light p-3 p-md-4 rounded mb-4">
    <div className="row g-3">
      <div className="col-12 col-md-4">
        <select
          className="form-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status === "All" ? "All Statuses" : status}
            </option>
          ))}
        </select>
      </div>
      <div className="col-12 col-md-4">
        <select
          className="form-select"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          {types.map((type) => (
            <option key={type} value={type}>
              {type === "All" ? "All Matter Types" : type}
            </option>
          ))}
        </select>
      </div>
      <div className="col-12 col-md-4">
        <select
          className="form-select"
          value={assigneeFilter}
          onChange={(e) => setAssigneeFilter(e.target.value)}
        >
          {assignees.map((assignee) => (
            <option key={assignee} value={assignee}>
              {assignee === "All" ? "All Assignees" : assignee}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>

  {/* Matters Grid */}
  {filteredMatters.length > 0 ? (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
      {filteredMatters.map((matter) => (
        <div key={matter.id} className="col">
          <div className="card h-100 border-light shadow-lg ">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h3 className="h6 card-title mb-0">{matter.title}</h3>
                <div className="d-flex align-items-center">
                  <span
                    className={`rounded-circle ${getStatusColor(matter.status)} d-inline-block me-2`}
                    style={{ width: "10px", height: "10px" }}
                  ></span>
                  <span className="text-muted small">{matter.status}</span>
                </div>
              </div>
              <div className="mb-3">
                <span className="badge bg-light text-dark">{matter.type}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="text-muted small">
                  <i className="far fa-calendar-alt me-2"></i>
                  Due: {formatDate(matter.dueDate)}
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src={matter.assignee.avatar}
                    alt={matter.assignee.name}
                    className="rounded-circle me-2"
                    style={{ width: "24px", height: "24px", objectFit: "cover" }}
                  />
                  <span className="small">{matter.assignee.name}</span>
                </div>
              </div>
              <div className="border-top pt-3">
                <div className="d-flex flex-wrap gap-3">
                  <button className="btn btn-sm btn-link text-muted p-0">
                    <i className="far fa-file-alt me-1"></i>
                    <span className="small">Documents</span>
                  </button>
                  <button className="btn btn-sm btn-link text-muted p-0">
                    <i className="far fa-sticky-note me-1"></i>
                    <span className="small">Notes</span>
                  </button>
                  <button className="btn btn-sm btn-link text-muted p-0">
                    <i className="fas fa-history me-1"></i>
                    <span className="small">History</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="d-flex flex-column align-items-center justify-content-center py-5 px-4 text-center">
      <div className="mb-4 text-muted">
        <i className="fas fa-folder-open fa-4x"></i>
      </div>
      <h3 className="h4 mb-2">No matters found</h3>
      <p className="text-muted mb-4" style={{ maxWidth: "500px" }}>
        {searchTerm || statusFilter !== "All" || typeFilter !== "All" || assigneeFilter !== "All"
          ? "Try adjusting your filters or search terms to find what you're looking for."
          : "Get started by creating your first matter to begin tracking your legal work."}
      </p>
      {!(searchTerm || statusFilter !== "All" || typeFilter !== "All" || assigneeFilter !== "All") && (
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-custom d-flex align-items-center"
        >
          <i className="fas fa-plus me-2"></i>
          Create your first matter
        </button>
      )}
    </div>
  )}
</div>



      {/* Create Matter Modal */}
      {isModalOpen && (
        <>
      
          <div className="modal-backdrop fade show mt-5 modal-custom"></div>

       
          <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-modal="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Create New Matter</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setIsModalOpen(false)}
                  ></button>
                </div>
                <div className="modal-body">
                 
                  <div className="mb-3">
                    <label htmlFor="matter-title" className="form-label">Title</label>
                    <input
                      type="text"
                      id="matter-title"
                      className={`form-control ${formErrors.title ? 'is-invalid' : ''}`}
                      value={newMatter.title}
                      onChange={(e) => setNewMatter({ ...newMatter, title: e.target.value })}
                    />
                    {formErrors.title && <div className="invalid-feedback">Title is required</div>}
                  </div>

                  
                  <div className="mb-3">
                    <label htmlFor="matter-type" className="form-label">Type</label>
                    <select
                      id="matter-type"
                      className={`form-select ${formErrors.type ? 'is-invalid' : ''}`}
                      value={newMatter.type}
                      onChange={(e) => setNewMatter({ ...newMatter, type: e.target.value })}
                    >
                      <option value="">Select Type</option>
                      {types.filter(type => type !== 'All').map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {formErrors.type && <div className="invalid-feedback">Type is required</div>}
                  </div>

                  
                  <div className="mb-3">
                    <label htmlFor="matter-status" className="form-label">Status</label>
                    <select
                      id="matter-status"
                      className="form-select"
                      value={newMatter.status}
                      onChange={(e) => setNewMatter({ ...newMatter, status: e.target.value })}
                    >
                      {statuses.filter(status => status !== 'All').map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>

                  
                  <div className="mb-3">
                    <label htmlFor="matter-due-date" className="form-label">Due Date</label>
                    <input
                      type="date"
                      id="matter-due-date"
                      className={`form-control ${formErrors.dueDate ? 'is-invalid' : ''}`}
                      value={newMatter.dueDate}
                      onChange={(e) => setNewMatter({ ...newMatter, dueDate: e.target.value })}
                    />
                    {formErrors.dueDate && <div className="invalid-feedback">Due date is required</div>}
                  </div>

                 
                  <div className="mb-3">
                    <label htmlFor="matter-assignee" className="form-label">Assignee</label>
                    <select
                      id="matter-assignee"
                      className={`form-select ${formErrors.assignee ? 'is-invalid' : ''}`}
                      value={newMatter.assignee}
                      onChange={(e) => setNewMatter({ ...newMatter, assignee: e.target.value })}
                    >
                      <option value="">Select Assignee</option>
                      {assignees.filter(a => a !== 'All').map(a => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                    {formErrors.assignee && <div className="invalid-feedback">Assignee is required</div>}
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className= " btn btn-custom "
                    onClick={handleCreateMatter}
                  >
                    Create Matter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

    </div>
  );
};

export default Matter;