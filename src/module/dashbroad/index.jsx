import React from "react";
import PropTypes from "prop-types";
import DashboardLayout from "./DashbroadLayout";
import DashboardPage from "../../Page/DashbroadPage";

PageIndex.propTypes = {};

function PageIndex(props) {
  return (
    <div>
      <DashboardLayout />
      <DashboardPage />
    </div>
  );
}

export default PageIndex;
