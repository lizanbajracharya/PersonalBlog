import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../actions/userActions";
import { loginSchema } from "../validationSchema/loginValidationSchema";

export const useLogin = (location) => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const handleLogin = (values) => {
    const { email, password } = values;
    dispatch(login(email, password));
  };

  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/home";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);
  if (error) {
    toast.error(error);
  }
  return {
    handleLogin,
    formik,
    userLogin,
    loading,
    error,
  };
};
