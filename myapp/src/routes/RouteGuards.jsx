import { Navigate, Outlet } from "react-router";

export const PrivateRoute = () => {
  const user = localStorage.getItem("auth-user"); //assumption for token validitaion

  if (user) {
    return <Outlet />;
  }
  return <Navigate to="/login" replace={true} />;
};

export const ProtectedRoute = () => {
  const user = localStorage.getItem("auth-user"); //assumption for token validitaion

  if (!user) {
    return <Outlet />;
  }
  return <Navigate to="/" replace={true} />;
};
