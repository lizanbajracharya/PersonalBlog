import React from "react";
import { Grid, Paper } from "@mui/material";
import CreateBlogPage from "../components/CreateBlogPage";
import Footer from "../components/Footer";
import Header from "../components/Header";

const BlogCreateScreen = () => {
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
            <h2> Create New Blog</h2>
          </Grid>
          <CreateBlogPage />
        </Paper>
      </Grid>
      <Footer />
    </div>
  );
};

export default BlogCreateScreen;
