import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

export const ProtectedRoute = ({ element: Component, roles, ...rest }) => {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (roles && !roles.includes(role)) {
    return <Navigate to="/" />;
  }

  return <Route {...rest} element={<Component />} />;
};
