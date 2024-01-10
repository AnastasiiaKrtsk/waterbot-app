// import { Route, Routes } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import Layout from "./Layout/Layout";
import UserSettings from "./Modals/UserSettings/UserSettings";
// import PublicRoute from "./PublicRoute/PublicRoute";

const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="" element={<PublicRoute />}>
          <Route path="/auth" element={<Auth />} />
        </Route>
      </Routes> */}
      <Layout />
      <WelcomePage />
      <UserSettings />
    </>
  );
};

export default App;
