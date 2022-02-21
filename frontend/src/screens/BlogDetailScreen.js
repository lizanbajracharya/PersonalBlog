import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { deleteBlog, listBlog, listBlogDetails } from "../actions/blogActions";
import { toast } from "react-toastify";
import {
  Backdrop,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";

const BlogDetailScreen = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const blogDetail = useSelector((state) => state.blogDetail);
  const { loading, error, blog } = blogDetail;

  if (error) {
    toast.error(error);
  }

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;
  useEffect(() => {
    dispatch(listBlogDetails(match.params.id));
  }, [dispatch, match]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteBlog(blog?._id));
      dispatch(listBlog());
      history.push(`/home`);
    }
  };
  return (
    <>
      {" "}
      <Header />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Container
        maxWidth="md"
        style={{
          height: "80vh",
          width: "80vh",
          display: "flex",
          alignItems: "center",
          alignContent: "center",
        }}>
        <Card sx={{ maxWidth: 800, width: 800 }}>
          <CardMedia
            component="img"
            height="140"
            image={`/blog.jpg`}
            alt={blog?.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              Blog Type- {blog?.blogType}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Blog TItle- {blog?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {blog?.description}
            </Typography>
          </CardContent>
          {userInfo?._id === blog?.user && (
            <CardActions>
              <Button
                size="small"
                onClick={() => history.push(`/blogs/edit/${blog._id}`)}>
                Edit
              </Button>
              <Button size="small" onClick={deleteHandler}>
                Delete
              </Button>
            </CardActions>
          )}
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default BlogDetailScreen;
