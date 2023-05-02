import { Login } from "./Token";

export const handleLogin = async (email, password) => {
  try {
    const token = await Login(email, password);
    localStorage.setItem("token", token);
    // redirect based on user role
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
