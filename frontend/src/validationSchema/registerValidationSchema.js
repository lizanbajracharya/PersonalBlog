import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export { registerSchema };
