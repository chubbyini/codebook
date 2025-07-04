import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({children}) => {
    const token = JSON.parse(sessionStorage.getItem("token")) || null;
  return token? children : <Navigate to="/login" />;
}
 