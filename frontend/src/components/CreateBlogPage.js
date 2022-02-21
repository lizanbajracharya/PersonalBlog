import React from "react";
import { Button, TextField } from "@mui/material";
import { useCreateBlogForm } from "../hooks/useCreateBlogForm";

const CreateBlogPage = () => {
  const buttonStyle = {
    margin: "8px 0",
  };

  const { formik } = useCreateBlogForm();
  return (
    <>
      <TextField
        label="Title"
        inputProps={{ "data-testid": "title" }}
        variant="outlined"
        name="title"
        placeholder="Enter title"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
        fullWidth
        style={{ margin: "10px 0 10px 0" }}
        required
      />
      <TextField
        label="Blog Type"
        inputProps={{ "data-testid": "blogType" }}
        name="blogType"
        variant="outlined"
        placeholder="Enter Blog Type"
        value={formik.values.blogType}
        onChange={formik.handleChange}
        error={formik.touched.blogType && Boolean(formik.errors.blogType)}
        helperText={formik.touched.blogType && formik.errors.blogType}
        style={{ margin: "10px 0 10px 0" }}
        fullWidth
        required
      />
      <TextField
        multiline
        rows={7}
        label="Description"
        name="description"
        inputProps={{ "data-testid": "description" }}
        placeholder="Enter Description"
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
        style={{ margin: "10px 0 10px 0", width: 390, height: 200 }}
        fullWidth
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={buttonStyle}
        onClick={() => formik.submitForm()}
        fullWidth>
        Submit
      </Button>
    </>
  );
};

export default CreateBlogPage;
