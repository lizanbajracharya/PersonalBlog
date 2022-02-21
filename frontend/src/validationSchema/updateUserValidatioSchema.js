import * as Yup from "yup";

const updateSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
});

export { updateSchema };
