import React from "react";
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import { useUpdateProfile } from "../hooks/useUpdateProfile";

const UpdateUserPage = () => {
  const buttonStyle = {
    margin: "8px 0",
  };
  const { formik, loading } = useUpdateProfile();

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        placeholder="Enter Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        fullWidth
        style={{ margin: "10px 0 10px 0" }}
        required
      />
      <TextField
        label="Email"
        variant="outlined"
        type={"email"}
        name="email"
        placeholder="Enter Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        fullWidth
        style={{ margin: "10px 0 10px 0" }}
        required
      />
      <TextField
        label="Password"
        variant="outlined"
        type={"password"}
        name="password"
        placeholder="Enter Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        fullWidth
        style={{ margin: "10px 0 10px 0" }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={buttonStyle}
        onClick={() => formik.submitForm()}
        fullWidth>
        Update
      </Button>
    </>
  );
};

export default UpdateUserPage;
