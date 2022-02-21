import React from "react";
import { Grid, Paper } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UpdateBlogPage from "../components/UpdateBlogPage";

const BlogEditScreen = ({ match }) => {
  const paperStyle = {
    padding: 20,
    height: "450px",
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
            <h2> Edit Blog</h2>
          </Grid>
          <UpdateBlogPage match={match} />
        </Paper>
      </Grid>
      <Footer />
    </div>
  );
};

export default BlogEditScreen;
