import React from 'react';

const FooterPagination = () => {
  return (
    <div className="border-top p-4 bg-white">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2">
          <button className="btn btn-link text-secondary p-2" disabled>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="btn btn-link text-secondary p-2" disabled>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <span className="text-secondary">No results found</span>
      </div>
    </div>
  );
};

export default FooterPagination;