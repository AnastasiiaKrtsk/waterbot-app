import { Route, Routes } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
