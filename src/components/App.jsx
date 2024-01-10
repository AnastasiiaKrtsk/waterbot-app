import { Route, Routes } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import Layout from "./Layout/Layout";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
        </Route>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </>
  );
};

export default App;
