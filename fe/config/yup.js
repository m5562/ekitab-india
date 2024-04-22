import * as yup from "yup";

// const passwordRegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required."),
  email: yup
    .string()
    .email("Consider using a valid email.")
    .required("Email is required."),
  password: yup
    .string()
    .min(8, "Password must be minimum 8 character long.")
    .required("Password is required."),
  cnfPassword: yup
    .string()
    .oneOf([yup.ref("password")], "passwords must match")
    .required("It is not an optional field."),
});

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("This must be a valid email.")
    .required("This field is required."),
  password: yup.string().required("This is not an optional field."),
});
export { registerSchema, loginSchema };
