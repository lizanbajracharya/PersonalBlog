import React, { useEffect } from "react";
import { Backdrop, CircularProgress, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { listMyBlog } from "../actions/blogActions";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MyBlogsScreen = () => {
  const dispatch = useDispatch();

  const myblogList = useSelector((state) => state.myBlogList);
  const { loading, error, myblogs } = myblogList;

  useEffect(() => {
    dispatch(listMyBlog());
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
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}>
          <Container>
            <Grid container spacing={2}>
              {myblogs?.length === 0 ? (
                <>No Blogs Created</>
              ) : (
                myblogs?.map((blog) => (
                  <Grid item xs={12} sm={6} md={4}>
                    <Blog blogs={blog} />
                  </Grid>
                ))
              )}
            </Grid>
          </Container>
        </Box>
      </main>
      <Footer />
    </>
  );
};

export default MyBlogsScreen;
