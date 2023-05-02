import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/Auth";

async function authenticateUser(email, password) {
  const response = await fetch("https://localhost:7181/api/Account/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const data = await response.json();
    return data.jwt;
  } else {
    // Handle error (e.g., display error message)
    return null;
  }
}

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // Call your ASP.NET Core backend to authenticate the user and get the JWT token
    const token = await authenticateUser(email, password);
    if (token) {
      login(token);
      navigate("/"); // Navigate to the main page after successful login
    } else {
      // Show error message
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
