import { Grid, Paper } from "@mui/material";
import React from "react";
import LoginPage from "../components/LoginPage";

const LoginScreen = ({ location }) => {
  const paperStyle = {
    padding: 20,
    height: "250px",
    width: 400,
    margin: "20px auto",
    borderRadius: "20px",
  };

  return (
    <div>
      {" "}
      <Grid className="login-page p2 flex jcc aic">
        <Paper elevation={8} style={paperStyle}>
          <Grid align="center">
            <h2> Sign In</h2>
          </Grid>
          <LoginPage location={location} />
        </Paper>
      </Grid>
    </div>
  );
};

export default LoginScreen;
