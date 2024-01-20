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

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Enter a correct email"),
});

export const updatePasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required("Field is required")
    .min(8, "Minimum 8 characters")
    .max(64, "Maximum 64 characters"),
  passwordRepeat: yup
    .string()
    .required("Сonfirm your password")
    .oneOf([yup.ref("newPassword"), null], "Passwords do not match"),
});

export const updateUserSchema = yup.object().shape({
  gender: yup.string().oneOf(["woman", "man"]),
  username: yup
    .string()
    .min(3, "Minimum 3 characters")
    .max(64, "Maximum 64 characters")
    .transform((value) => (value === "" ? undefined : value)),
  email: yup
    .string()
    .matches(emailRegexp, "Enter a correct email")
    .transform((value) => (value === "" ? undefined : value)),
  oldPassword: yup
    .string()
    .min(8, "Minimum 8 characters")
    .max(64, "Maximum 64 characters")
    .transform((value) => (value === "" ? undefined : value))
    .when("newPassword", (newPassword, field) =>
      newPassword[0]
        ? field.required("Old password is required to fill")
        : field
    ),
  newPassword: yup
    .string()
    .min(8, "Minimum 8 characters")
    .max(64, "Maximum 64 characters")
    .transform((value) => (value === "" ? undefined : value))
    .test(
      "notEqual",
      "New password must not match old password",
      function (value) {
        const oldPassword = this.parent.oldPassword;
        return value !== oldPassword || oldPassword === undefined;
      }
    ),
  passwordRepeat: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Passwords do not match")
    .transform((value) => (value === "" ? undefined : value)),
});
export const DailyNormaUsrInputSchema = yup.object().shape({
  dailyNorma: yup
    .number()
    .min(1)
    .max(15, "Maximum 15 L")
    .nullable()
    .transform((value, originalValue) => {
      if (originalValue === "" || isNaN(originalValue)) {
        return null;
      }
      return value;
    })
    .positive(),
});
