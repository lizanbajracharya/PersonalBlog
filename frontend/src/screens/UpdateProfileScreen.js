import React from "react";
import { Grid, Paper } from "@mui/material";
import UpdateUserPage from "../components/UpdateUserPage";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UpdateProfileScreen = ({ location }) => {
  const paperStyle = {
    padding: 20,
    height: "350px",
    width: 400,
    margin: "20px auto",
    borderRadius: "20px",
  };

  return (
    <div>
      <Header />
      <Grid className="login-page p2 flex jcc aic">
        <Paper elevation={8} style={paperStyle}>
          <Grid align="center">
            <h2>Update Profile</h2>
          </Grid>
          <UpdateUserPage />
        </Paper>
      </Grid>
      <Footer />
    </div>
  );
};

export default UpdateProfileScreen;
