import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createBlog } from "../actions/blogActions";
import { blogSchema } from "../validationSchema/blogValidationSchema";

export const useCreateBlogForm = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      title: "",
      blogType: "",
      image: "",
      description: "",
    },
    validationSchema: blogSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    dispatch(createBlog(values));
    history.push(`/home`);
  };

  return {
    handleSubmit,
    formik,
  };
};
