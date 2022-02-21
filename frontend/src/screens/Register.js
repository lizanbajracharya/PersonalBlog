import { Grid, Paper } from "@mui/material";
import React from "react";
import RegisterPage from "../components/RegisterPage";

const Register = ({ location }) => {
  const paperStyle = {
    padding: 20,
    height: "350px",
    width: 400,
    margin: "20px auto",
    borderRadius: "20px",
  };

  return (
    <div>
      <Grid className="login-page p2 flex jcc aic">
        <Paper elevation={8} style={paperStyle}>
          <Grid align="center">
            <h2>Register</h2>
          </Grid>
          <RegisterPage location={location} />
        </Paper>
      </Grid>
    </div>
  );
};

export default Register;
