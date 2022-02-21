import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { toast } from "react-toastify";
import { listBlogDetails, updateBlog } from "../actions/blogActions";
import { blogSchema } from "../validationSchema/blogValidationSchema";

export const useUpdateBlogForm = (match) => {
  const history = useHistory();
  const { params } = useRouteMatch();
  const { id } = params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listBlogDetails(id));
  }, [dispatch, id, params]);
  const blogDetail = useSelector((state) => state.blogDetail);
  const { loading, error, blog } = blogDetail;

  if (error) {
    toast.error(error);
  }

  const formik = useFormik({
    initialValues: {
      title: blog && blog?.title,
      blogType: blog && blog?.blogType,
      description: blog && blog?.description,
    },
    validationSchema: blogSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      values = { ...values, _id: id };
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values) => {
    dispatch(updateBlog(values));
    history.push(`/home`);
  };

  return {
    handleSubmit,
    formik,
    loading,
  };
};
