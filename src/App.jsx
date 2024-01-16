import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout/Layout";
import Modal from "./components/Modals/Modal"; // Import the Modal component
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
// import HomePage from "./pages/HomePage/HomePage";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// import SignInPage from "./pages/SignInPage/SignInPage";
// import SignUpPage from "./pages/SignUpPage/SignUpPage";
// import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { userCurrentThunk } from "./redux/thunks";
// import "./App.css"; // Import your styles or any other necessary imports
import { selectOpenModal } from "./redux/selectors";
import { setModalStatus } from "./redux/slice";

const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App = () => {
  const dispatch = useDispatch();
  // const [modalStatus, setModalStatus] = useState(false);

  const modalStatus = useSelector(selectOpenModal);

  useEffect(() => {
    dispatch(userCurrentThunk());
  }, [dispatch]);

  useEffect(() => {
    fetch("https://backend-water-tracker.onrender.com/api-docs/");
  }, []);

  // const handleOpenModal = () => {
  //   dispatch(setModalStatus(!modalStatus))
  // };

  const handleCloseModal = () => {
    dispatch(setModalStatus(false));
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="" element={<PublicRoute />}>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
          </Route>
          <Route path="" element={<PrivateRoute />}>
            <Route path="/homepage" element={<HomePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      {/* Render the Modal component */}
      <Modal open={modalStatus} onClose={handleCloseModal}>
        {/* Content for your modal */}
        <p>This is the content of the modal.</p>
        <button onClick={handleCloseModal}>Close Modal</button>
      </Modal>

      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default App;
