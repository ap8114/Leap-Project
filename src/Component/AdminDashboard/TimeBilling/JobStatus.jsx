import React from "react";

const JobStatus = () => {
  return (
    <div
      style={{
        background: "#f7f8fa",
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          background: "#fff",
          border: "1px solid #e3e7ed",
          borderRadius: 10,
          padding: "40px 40px 60px 40px",
          boxSizing: "border-box",
          minHeight: 300,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 style={{ fontWeight: 700, fontSize: 28, margin: 0 }}>
            Job status
          </h2>
          <div>
            <button
              style={{
                border: "1px solid #cfd8e3",
                background: "#fff",
                borderRadius: 6,
                padding: "8px 22px",
                fontWeight: 500,
                marginRight: 12,
                cursor: "pointer",
              }}
            >
              Today <span style={{ marginLeft: 4 }}>▼</span>
            </button>
            <button
              style={{
                border: "1px solid #cfd8e3",
                background: "#fff",
                borderRadius: 6,
                padding: "8px 22px",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Clear all
            </button>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <h3 style={{ fontWeight: 600, fontSize: 22, marginBottom: 10 }}>
            Nothing to see here
          </h3>
          <div style={{ color: "#5a6270", fontSize: 16, textAlign: "center" }}>
            When you start a bulk action, the job status will be displayed here.
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobStatus;