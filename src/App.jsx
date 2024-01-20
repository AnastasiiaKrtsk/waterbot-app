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
import { selectOpenModal } from "./redux/selectors";
import { setModalContent, setModalStatus } from "./redux/slice";
import { userCurrentThunk } from "./redux/thunks";

const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ForgotPasswordPage = lazy(() =>
  import("./pages/ForgotPasswordPage/ForgotPasswordPage")
);
const UpdatePasswordPage = lazy(() =>
  import("./pages/UpdatePasswordPage/UpdatePasswordPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App = () => {
  const dispatch = useDispatch();

  const modalStatus = useSelector(selectOpenModal);

  useEffect(() => {
    dispatch(userCurrentThunk());
  }, [dispatch]);

  const handleCloseModal = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<PublicRoute />}>
            <Route index element={<WelcomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/update-password" element={<UpdatePasswordPage />} />
          </Route>
          <Route path="" element={<PrivateRoute />}>
            <Route path="/homepage" element={<HomePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <Modal open={modalStatus} onClose={handleCloseModal}>
        {<ModalContent />}
      </Modal>

      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default App;
