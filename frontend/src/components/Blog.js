import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteBlog, listBlog } from "../actions/blogActions";

const Blog = ({ blogs }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteBlog(blogs?._id));
      dispatch(listBlog());
    }
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia component="img" image={`/blog.jpg`} alt="random" />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h4" component="h2">
          Blog Type - {blogs?.blogType}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          Blog Title - {blogs?.title}
        </Typography>
        <Typography>{blogs?.description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => history.push(`/blogs/${blogs._id}`)}>
          View
        </Button>
        {userInfo?._id === blogs?.user && (
          <>
            <Button
              size="small"
              onClick={() => history.push(`/blogs/edit/${blogs._id}`)}>
              Edit
            </Button>
            <Button size="small" onClick={deleteHandler}>
              Delete
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
};

export default Blog;
