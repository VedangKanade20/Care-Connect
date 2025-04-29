// components/DynamicDashboard.js
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DynamicDashboard = () => {
  const { authUser } = useSelector((state) => state.auth);

  if (!authUser) return <Navigate to="/login" replace />;

  switch (authUser.role) {
    case "Donor":
      return <Navigate to="/dashboard/donor" replace />;
    case "Admin":
      return <Navigate to="/admin/dashboard" replace />;
    case "NGO_Staff":
      if (authUser.staffType === "core") {
        return <Navigate to="/ngoCore/dashboard" replace />;
      } else if (authUser.staffType === "delivery") {
        return <Navigate to="/ngoDelivery/dashboard" replace />;
      }
      break;
    default:
      return <Navigate to="/" replace />;
  }

  return <Navigate to="/" replace />;
};

export default DynamicDashboard;
