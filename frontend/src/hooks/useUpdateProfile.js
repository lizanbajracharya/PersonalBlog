import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { updateSchema } from "../validationSchema/updateUserValidatioSchema";

export const useUpdateProfile = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      dispatch(getUserDetails("profile"));
    }
  }, [dispatch, history, userInfo]);

  if (error) {
    toast.error(error);
  }

  const formik = useFormik({
    initialValues: {
      email: user && user?.email,
      name: user && user?.name,
      password: "",
    },
    validationSchema: updateSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values) => {
    dispatch(updateUserProfile(values));
    history.push(`/home`);
  };

  return {
    formik,
    loading,
  };
};
