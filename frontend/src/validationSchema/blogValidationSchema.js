import * as Yup from "yup";

const blogSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  blogType: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

export { blogSchema };
