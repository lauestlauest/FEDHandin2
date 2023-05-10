import { useAuth } from "../auth/Auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {AddUserForm} from "../components/AddUserForm"
import {AddJobForm} from "../components/AddJobForm";
import {AddModelToJobForm} from "../components/AddModelToJobForm";
import {RemoveModelFromJobForm} from "../components/RemoveModelFromJobForm";
import {ViewJobs} from "../components/ViewJobs";
import { Button } from "@mui/material";


// Needs:
// List of all jobs
// Create new job component
// Add model(s) to job component/view
// Delete model(s) component/view - checkbox with a button maybe
// Create user component/view

export default function ManagerView() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser || currentUser.role !== "Manager") {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return (
    <div>
      <Button variant="contained" onClick={() => logout()}>Log out</Button>
      <h1>Welcome to ManagerView</h1>
      <p>
        This is where you can manage all the jobs, add new ones, add models to
        jobs and create new users.
      </p>
        <AddJobForm/>
        <AddUserForm/>
        <AddModelToJobForm/>
        <RemoveModelFromJobForm/>
        <ViewJobs/>
    </div>
  );
}
