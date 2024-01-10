import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import Layout from "./Layout/Layout";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route path="/homepage" element={<Dashboard />} />
        </Route>
      </Routes>

    </>
  );
};

export default App;
