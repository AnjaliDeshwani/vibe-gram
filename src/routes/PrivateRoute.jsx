import { useSelector } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
