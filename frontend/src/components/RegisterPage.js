import React from "react";
import { Button, Link, TextField, Typography } from "@mui/material";
import { useRegisterForm } from "../hooks/useRegisterForm";

const RegisterPage = ({ location }) => {
  const buttonStyle = {
    margin: "8px 0",
  };
  const { formik } = useRegisterForm(location);

  return (
    <>
      <TextField
        label="Name"
        variant="outlined"
        inputProps={{ "data-testid": "username" }}
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
        inputProps={{ "data-testid": "email" }}
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
        required
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={buttonStyle}
        onClick={() => formik.submitForm()}
        fullWidth>
        Sign Up
      </Button>
      <Typography>
        Already Signed Up<Link href="/"> Sign In</Link>
      </Typography>
    </>
  );
};

export default RegisterPage;
