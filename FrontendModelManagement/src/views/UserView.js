import React, { useEffect, useState } from "react";
import { useAuth } from "../auth/Auth";
import { useNavigate } from "react-router-dom";
import ManagerView from "./ManagerView";
import ModelView from "./ModelView";
import CircularProgress from "@mui/material/CircularProgress";

export default function UserView() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    } else {
      setLoading(false);
    }
  }, [currentUser, navigate]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (!currentUser) {
    return null;
  }

  return (
    <div>
      {currentUser.role === "Manager" && <ManagerView />}
      {currentUser.role === "Model" && <ModelView />}
    </div>
  );
}
