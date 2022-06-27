import React from "react";

const DashboardHeading = ({ title = "", desc = "" }) => {
  return (
    <div className="mb-10">
      <h1 className="dashboard-heading" style={{ marginBottom: "-2px" }}>
        {title}
      </h1>
      <p
        className="dashboard-short-desc"
        style={{ marginLeft: "1px", color: "#959595" }}
      >
        {desc}
      </p>
    </div>
  );
};

export default DashboardHeading;
