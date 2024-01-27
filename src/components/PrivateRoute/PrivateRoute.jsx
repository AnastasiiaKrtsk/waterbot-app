import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsSignedIn } from "../../redux/selectors";

const PrivateRoute = () => {
  // const token = useSelector(selectToken);
  const isSignedIn = useSelector(selectIsSignedIn);

  return isSignedIn ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
