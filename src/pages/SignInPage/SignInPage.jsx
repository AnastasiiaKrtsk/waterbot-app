import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { signInThunk } from "../../redux/thunks";
import { signInSchema } from "../../helpers/validation";

const SignInPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(signInThunk(data));
    reset();
  };

  return (
    <>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit">Sign In</button>
        <Link to="/signup">Sign Up</Link>
      </form>
    </>
  );
};

export default SignInPage;
