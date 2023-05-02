import { React, useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { handleLogin } from "./Login";
import { LoginStyles } from "./LoginStyles";

const LoginView = () => {
  const classes = LoginStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = async () => {
    try {
      await handleLogin(email, password);
      //redir based on user role
    } catch (err) {
      console.log(err.message);
      throw err;
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <Typography variant="h4" className={classes.header}>
          Login
        </Typography>
        <TextField
          className={classes.textField}
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className={classes.textField}
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={onLoginClick}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginView;
