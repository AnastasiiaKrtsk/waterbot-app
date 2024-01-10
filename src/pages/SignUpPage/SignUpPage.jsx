import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <>
      <h2>Sign Up</h2>
      <form>
        <label>Enter your email</label>
        <input />
        <label>Enter your password</label>
        <input />
        <label>Repeat password</label>
        <input />
        <button type="submit">Sign Up</button>
        <Link to="/signin">Sign In</Link>
      </form>
    </>
  );
};

export default SignUpPage;
