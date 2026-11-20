import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);
  
console.log("Decoded Token:", decoded);
console.log("User Role:", decoded.role);
    if (!allowedRoles.includes(decoded.role)) {
      return <Navigate to="/" replace />;
    }

    return children;

  } catch (error) {
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;