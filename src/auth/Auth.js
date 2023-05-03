import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

export const handleLogin = async (email, password) => {
  let url = "https://localhost:7181/api/Account/login";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const token = await response.json();
      console.log("AuthSucces?");
      localStorage.setItem("token", token.jwt);
      console.log(token.jwt);
    } else {
      console.error("Error: " + response.status);
      console.log("AuthError");
      throw new Error("Invalid login");
    }
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [roles, setRoles] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const exp = decodedToken.exp;
      if (Date.now() / 1000 >= exp) {
        localStorage.removeItem("token");
      } else {
        setIsAuthenticated(true);
        setRoles(
          decodedToken[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
          ]
        );
      }
    }
  }, []);

  return { isAuthenticated, roles };
};
