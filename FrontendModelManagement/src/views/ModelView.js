import {ViewJobs} from "../components/ViewJobs";
import {AddExpenseToJob} from "../components/AddExpenseToJob"
import { useAuth } from "../auth/Auth";
import React from "react";
import { Button } from "@mui/material";

// Needs:
// View of all assigned jobs
// Add expenses to a job button - opens a form/component. Maybe a view.

const ModelView = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Button variant="contained" onClick={() => logout()}>Log out</Button>
      <h1>Welcome to ModelView</h1>
      <p>This is where you can model.</p>
      <ViewJobs/>
      <AddExpenseToJob/>
    </div>
  );
};

export default ModelView;
