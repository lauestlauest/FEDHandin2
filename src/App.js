import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  createRoutesFromChildren,
} from "react-router-dom";
import LoginView from "./views/LoginView";
import ManagerView from "./views/ManagerView";
import ModelView from "./views/ModelView";
import { useAuth } from "./auth/Auth";
import { ProtectedRoute } from "./auth/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromChildren([<Route path="/" element={<LoginView />} />])
);

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <RouterProvider router={router}>
      <div className="App">
        {isAuthenticated ? (
          <Routes>
            <ProtectedRoute
              path="/manager"
              element={<ManagerView />}
              roles={["admin"]}
            />
            <ProtectedRoute
              path="/model"
              element={<ModelView />}
              roles={["model"]}
            />
          </Routes>
        ) : (
          <LoginView />
        )}
      </div>
    </RouterProvider>
  );
}

export default App;
