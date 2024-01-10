import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectToken } from "../../redux/selectors";

const PrivateRoute = () => {
  const token = useSelector(selectToken);

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
