import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      const decodedToken = jwtDecode(token);
      const user = {
        email:
          decodedToken[
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
          ],
        role: decodedToken[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ],
        modelId: decodedToken["ModelId"],
      };
      value.currentUser = user;
    } else {
      navigate("/login");
    }
  }, [navigate]);

  function login(token) {
    localStorage.setItem("jwt", token);
    const decodedToken = jwtDecode(token);
    const user = {
      email:
        decodedToken[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
        ],
      role: decodedToken[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ],
      modelId: decodedToken["ModelId"],
    };

    // Set the user data directly on the AuthContext value object
    value.currentUser = user;

    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  function logout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("currentUser");
    navigate("/login");
  }

  const value = {
    currentUser: JSON.parse(localStorage.getItem("currentUser")),
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
