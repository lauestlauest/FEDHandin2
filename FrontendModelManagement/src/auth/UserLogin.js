export async function authenticateUser(email, password) {
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
