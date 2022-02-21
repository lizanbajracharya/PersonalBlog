import { Button, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { useLogin } from "../hooks/useLogin";

const LoginPage = ({ location }) => {
  const buttonStyle = {
    margin: "8px 0",
  };

  const { formik } = useLogin(location);
  return (
    <>
      <TextField
        label="Email"
        inputProps={{ "data-testid": "email" }}
        variant="outlined"
        name="email"
        type={"email"}
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
        name="password"
        variant="outlined"
        type={"password"}
        placeholder="Enter Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
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
        Sign In
      </Button>
      <Typography>
        Don't Have an Account?<Link href="/register">Sign Up</Link>
      </Typography>
    </>
  );
};

export default LoginPage;
