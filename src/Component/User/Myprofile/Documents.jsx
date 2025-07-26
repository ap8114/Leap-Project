import React from 'react';

const Documents = ({ documents }) => {
  const getFileIcon = (type) => {
    return type === 'pdf' ? 'fas fa-file-pdf text-danger' : 'fas fa-file-image text-primary';
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="h5 mb-0">
          <i className="fas fa-folder text-primary me-2"></i>
          My Documents
        </h2>
      </div>
      <div className="card-body">
        {/* Upload Area */}
        <div className="border border-2 border-dashed rounded p-5 text-center mb-4">
          <i className="fas fa-cloud-upload-alt fa-3x text-muted mb-3"></i>
          <h4 className="h5 mb-2">Drag & Drop files here</h4>
          <p className="text-muted mb-3">or click to browse</p>
          <button className="btn btn-primary">
            Choose Files
          </button>
        </div>
        
        {/* Document List */}
        <div className="row g-3">
          {documents.map((doc) => (
            <div key={doc.id} className="col-md-6 col-lg-4">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <i className={`${getFileIcon(doc.type)} fa-2x`}></i>
                    <div className="btn-group">
                      <button className="btn btn-sm btn-outline-primary">
                        <i className="fas fa-download"></i>
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <h5 className="card-title text-truncate">{doc.name}</h5>
                  <p className="card-text text-muted small">
                    {new Date(doc.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;