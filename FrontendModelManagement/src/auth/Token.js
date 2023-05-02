export const Login = async (email, password) => {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await respons.json();
  if (!response.ok) {
    throw new Error(data.message || "Authentication failed.");
  }

  return data.token;
};

export default token;
