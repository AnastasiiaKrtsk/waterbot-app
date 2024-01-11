import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signInThunk, signUpThunk } from "../../redux/thunks";
import { useState } from "react";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
  });
  const dispatch = useDispatch();
  const [passwordError, setPasswordError] = useState("");

  const onSubmit = (data, e) => {
    e.preventDefault();

    // const form = e.currentTarget;
    const submit = e.nativeEvent.submitter.name;

    if (data) {
      const { email, password, passwordRepeat } = data;

      if (password !== passwordRepeat) {
        setPasswordError("Passwords do not match");
        return;
      } else {
        setPasswordError("");
      }

      submit === "Sign in"
        ? dispatch(signInThunk({ email: email, password: password }))
            .unwrap()
            .then(() => {
              console.log("Signin successful");
            })
            .catch((error) => {
              console.error("Registration failed: " + error.message);
            })
        : dispatch(signUpThunk({ email: email, password: password }))
            .unwrap()
            .then(() => {
              dispatch(signInThunk({ email: email, password: password }));
              reset();
              console.log("Registration successful");
            })
            .catch((error) => {
              console.error("Registration failed: " + error.message);
            });
    }
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Enter your email</label>
          <input
            type="email"
            {...register("email", {
              required: { value: true, message: "Field is required" },
              pattern: {
                value: /^[a-z0-9._-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                message: "Enter a correct email",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Enter your password</label>
          <input
            type="password"
            {...register("password", {
              required: { value: true, message: "Field is required" },
              minLength: { value: 8, message: "Minimum 8 characters" },
              maxLength: {
                value: 64,
                message: "Maximum 64 characters",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label>Repeat password</label>
          <input
            type="password"
            {...register("passwordRepeat", {
              required: { value: true, message: "Field is required" },
              minLength: { value: 8, message: "Minimum 8 characters" },
              maxLength: {
                value: 64,
                message: "Maximum 64 characters",
              },
            })}
          />
          {errors.passwordRepeat && <p>{errors.passwordRepeat.message}</p>}
          {passwordError && <p>{passwordError}</p>}
        </div>
        <button type="submit">Sign Up</button>
        <Link to="/signin">Sign In</Link>
      </form>
    </>
  );
};

export default SignUpPage;
