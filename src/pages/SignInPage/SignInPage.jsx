import SignUpPage from "../SignUpPage/SignUpPage";

export const SignInPage = () => {
  return (
    <>
      <h2>Sign In</h2>
      <form>
        <label>Enter your email</label>
        <input />
        <label>Enter your password</label>
        <input />
        <button type="submit">Sign In</button>
      </form>
      <SignUpPage />
    </>
  );
};

export default SignInPage;
