import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [, setCurrentUser] = useState(null);

  const value = useMemo(() => {
    const token = localStorage.getItem("jwt");
    const decodedToken = token ? jwtDecode(token) : null;
    const user = decodedToken
      ? {
          email:
            decodedToken[
              "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
            ],
          role: decodedToken[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
          ],
          modelId: decodedToken["ModelId"],
        }
      : null;

    const login = (token) => {
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
      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
    };

    const logout = () => {
      localStorage.removeItem("jwt");
      localStorage.removeItem("currentUser");
      setCurrentUser(null);
      navigate("/login");
    };

    if (!token) {
      navigate("/login");
    }

    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));

    return { currentUser: user, login, logout };
  }, [navigate]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(storedUser);
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
