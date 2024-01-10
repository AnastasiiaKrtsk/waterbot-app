import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import Layout from "./Layout/Layout";
import PublicRoute from "./PublicRoute/PublicRoute";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route path="/homepage" element={<Dashboard />} />
        </Route>
        <Route
          path="signup"
          element={
            <PublicRoute>
              <SignUpPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <SignInPage />
            </PublicRoute>
          }
        />
      </Routes>

    </>
  );
};

export default App;
