import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsSignedIn } from "../../redux/selectors";

const PublicRoute = () => {
  // const token = useSelector(selectToken);
  const isSignedIn = useSelector(selectIsSignedIn);

  return isSignedIn ? <Navigate to="/homepage" /> : <Outlet />;
};

export default PublicRoute;
