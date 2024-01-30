import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectIsSignedIn } from "../../redux/selectors";

const PublicRoute = ({ children }) => {
  const isSignedIn = useSelector(selectIsSignedIn);
  const location = useLocation();

  return isSignedIn ? <Navigate to={location.state ?? "/"} /> : children;
};

export default PublicRoute;
