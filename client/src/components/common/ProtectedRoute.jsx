import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { authUser, loading } = useSelector((state) => state.auth);

  console.log("ProtectedRoute - authUser:", authUser); // Log the authUser state

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!authUser || authUser === undefined) {
    console.log("Redirecting to /login"); // Log redirection
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
