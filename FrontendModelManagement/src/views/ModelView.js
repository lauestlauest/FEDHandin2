import {ViewJobs} from "../components/ViewJobs";
import {AddExpenseToJob} from "../components/AddExpenseToJob"


import React from "react";

// Needs:
// View of all assigned jobs
// Add expenses to a job button - opens a form/component. Maybe a view.

const ModelView = () => {
  return (
    <div>
      <h1>Welcome to ModelView</h1>
      <p>This is where you can model.</p>
      <ViewJobs/>
      <AddExpenseToJob/>
    </div>
  );
};

export default ModelView;
