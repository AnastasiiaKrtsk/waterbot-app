import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout/Layout";
import ModalContent from "./components/ModalContent/ModalContent";
import Modal from "./components/Modals/Modal";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
// import HomePage from "./pages/HomePage/HomePage";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// import SignInPage from "./pages/SignInPage/SignInPage";
// import SignUpPage from "./pages/SignUpPage/SignUpPage";
// import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { userCurrentThunk } from "./redux/thunks";
import { selectModalContent, selectOpenModal } from "./redux/selectors";
import { setModalContent, setModalStatus } from "./redux/slice";
import { userCurrentThunk } from "./redux/thunks";

const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App = () => {
  const dispatch = useDispatch();

  const modalStatus = useSelector(selectOpenModal);


  useEffect(() => {
    dispatch(userCurrentThunk());
  }, [dispatch]);

  useEffect(() => {
    fetch("https://backend-water-tracker.onrender.com/api-docs/");
  }, []);

  const handleCloseModal = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
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

      <Modal open={modalStatus} onClose={handleCloseModal}>
        {<ModalContent/> || null}
      </Modal>

      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default App;
