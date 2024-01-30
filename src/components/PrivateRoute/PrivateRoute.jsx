import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectIsSignedIn } from "../../redux/selectors";

const PrivateRoute = ({ children }) => {
  const isSignedIn = useSelector(selectIsSignedIn);
  const location = useLocation();

  return isSignedIn ? children : <Navigate to="/signin" state={location} />;
};

export default PrivateRoute;
