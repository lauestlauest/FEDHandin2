import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/Auth";
import { authenticateUser } from "../auth/UserLogin";
import {
  TextField,
  Button,
  Typography,
  ThemeProvider,
  Paper,
  Box,
  Grid,
  CssBaseline,
  Avatar,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import loginTheme from "../utils/LoginTheme";
import ForgotPassword from "../components/ForgottenPassword";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function onLoginClick(e) {
    e.preventDefault();
    const token = await authenticateUser(email, password);
    if (token) {
      login(token);
      setLoginStatus("success");
      navigate("/"); // Navigate to the main page after successful login
    } else {
      setLoginStatus("error");
    }
  }

  return (
    <ThemeProvider theme={loginTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://media.istockphoto.com/id/157333864/photo/christmas-nerds-group.jpg?s=612x612&w=0&k=20&c=Q1ev5SOBklT8NeIlaIVjlblC7DnT2_zhivhgNDWyc8Q=)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) => t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Mohrdel Mangoment - Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={onLoginClick}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="current-email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {loginStatus === "error" && ( // show error message if login status is error
                <Typography color="error">
                  Invalid email or password.
                </Typography>
              )}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <ForgotPassword />
                </Grid>
                {/* <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid> */}
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
