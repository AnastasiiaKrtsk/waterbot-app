import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signInThunk, signUpThunk } from "../../redux/thunks";
import { toast } from "react-toastify";
import { signUpSchema } from "../../helpers/validation";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
    resolver: yupResolver(signUpSchema),
  });
  const dispatch = useDispatch();

  const onSubmit = async ({ username, email, password }, e) => {
    e.preventDefault();

    try {
      await dispatch(signUpThunk({ username, email, password })).unwrap();

      await dispatch(signInThunk({ email, password }));

      reset();
      toast.success("Registration completed successfully");
    } catch (error) {
      toast.error("Registration failed: " + error.message);
    }
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Enter your name</label>
          <input type="text" placeholder="Name" {...register("username")} />
          <p>{errors.username?.message}</p>
        </div>
        <div>
          <label>Enter your email</label>
          <input type="email" placeholder="E-mail" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label>Enter your password</label>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <label>Repeat password</label>
          <input
            type="password"
            placeholder="Repeat password"
            {...register("passwordRepeat")}
          />
          <p>{errors.passwordRepeat?.message}</p>
        </div>
        <button type="submit">Sign Up</button>
        <Link to="/signin">Sign In</Link>
      </form>
    </>
  );
};

export default SignUpPage;
