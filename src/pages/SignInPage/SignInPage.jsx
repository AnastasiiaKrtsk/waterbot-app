import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <>
      <h2>Sign In</h2>
      <form>
        <label>Enter your email</label>
        <input />
        <label>Enter your password</label>
        <input />
        <button type="submit">Sign In</button>
        <Link to="/signup">Sign Up</Link>
      </form>
    </>
  );
};

export default SignInPage;
