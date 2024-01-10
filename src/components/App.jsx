import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import Layout from "./Layout/Layout";
import UserSettings from "./Modals/UserSettings/UserSettings";
// import PublicRoute from "./PublicRoute/PublicRoute";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/homepage" element={<Dashboard />} />
          <UserSettings />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
