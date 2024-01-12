import * as yup from "yup";

const emailRegexp = /^[a-z0-9._-]+@[a-z0-9.-]+.[a-z]{2,4}$/;

export const signUpSchema = yup.object().shape({
  username: yup
    .string()
    .required("Field is required")
    .min(3, "Minimum 3 characters")
    .max(64, "Maximum 64 characters"),
  email: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Enter a correct email"),
  password: yup
    .string()
    .required("Field is required")
    .min(8, "Minimum 8 characters")
    .max(64, "Maximum 64 characters"),
  passwordRepeat: yup
    .string()
    .required("Сonfirm your password")
    .oneOf([yup.ref("password"), null], "Passwords do not match"),
});

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Enter a correct email"),
  password: yup
    .string()
    .required("Field is required")
    .min(8, "Minimum 8 characters")
    .max(64, "Maximum 64 characters"),
});
