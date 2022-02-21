import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../actions/userActions";
import { registerSchema } from "../validationSchema/registerValidationSchema";

export const useRegisterForm = (location) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/home";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      const { name, email, password } = values;
      dispatch(register(name, email, password));
    },
  });

  if (error) {
    toast.error(error);
  }

  return {
    formik,
    loading,
    error,
  };
};
