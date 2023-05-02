import { createContext, useContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      const decodedUser = jwtDecode(token);
      setCurrentUser(decodedUser);
    }
  }, []);

  function login(token) {
    localStorage.setItem("jwt", token);
    const decodedToken = jwtDecode(token);
    setCurrentUser({
      email:
        decodedToken[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
        ],
      role: decodedToken[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ],
      modelId: decodedToken["ModelId"],
      nbf: decodedToken["nbf"],
      exp: decodedToken["exp"],
    });
  }

  function logout() {
    localStorage.removeItem("jwt");
    setCurrentUser(null);
  }

  const value = {
    currentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
