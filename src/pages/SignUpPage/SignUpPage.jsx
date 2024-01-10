import SignInPage from "../SignInPage/SignInPage";

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
      </form>
      <SignInPage />
    </>
  );
};

export default SignUpPage;
