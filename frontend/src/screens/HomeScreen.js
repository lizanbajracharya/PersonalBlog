import React, { useEffect } from "react";
import {
  Container,
  Box,
  Grid,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { listBlog } from "../actions/blogActions";
import { toast } from "react-toastify";
import Blog from "../components/Blog";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;

  useEffect(() => {
    dispatch(listBlog());
  }, [dispatch]);
  if (error) {
    toast.error(error);
  }
  return (
    <>
      <Header />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}>
          <Container>
            <Grid container spacing={2}>
              {blogs?.map((blog) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Blog blogs={blog} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </main>
      <Footer />
    </>
  );
};

export default HomeScreen;
