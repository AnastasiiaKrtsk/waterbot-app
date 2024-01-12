import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signInThunk, signUpThunk } from "../../redux/thunks";
import { useState } from "react";
import { toast } from "react-toastify";

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

    if (data) {
      const { username, email, password, passwordRepeat } = data;

      if (password !== passwordRepeat) {
        setPasswordError("Passwords do not match");
        return;
      } else {
        setPasswordError("");
      }

      dispatch(
        signUpThunk({
          username: username,
          email: email,
          password: password,
        })
      )
        .unwrap()
        .then(() => {
          dispatch(
            signInThunk({
              email: email,
              password: password,
            })
          );
          reset();
          toast.success("Registration completed successfully");
        })
        .catch((error) => {
          toast.error("Registration failed: " + error.message);
        });
    }
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Enter your name</label>
          <input
            type="text"
            placeholder="Name"
            {...register("username", {
              required: { value: true, message: "Field is required" },
              minLength: { value: 3, message: "Minimum 8 characters" },
              maxLength: {
                value: 64,
                message: "Maximum 64 characters",
              },
            })}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label>Enter your email</label>
          <input
            type="email"
            placeholder="E-mail"
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
            placeholder="Password"
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
            placeholder="Repeat password"
            {...register("passwordRepeat", {
              required: { value: true, message: "Field is required" },
              minLength: { value: 8, message: "Minimum 8 characters" },
              maxLength: {
                value: 64,
                message: "Maximum 64 characters",
              },
            })}
          />
          {(errors.passwordRepeat && <p>{errors.passwordRepeat.message}</p>) ||
            (passwordError && <p>{passwordError}</p>)}
        </div>
        <button type="submit">Sign Up</button>
        <Link to="/signin">Sign In</Link>
      </form>
    </>
  );
};

export default SignUpPage;
