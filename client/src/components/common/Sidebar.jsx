import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { authUser } = useSelector((state) => state.auth);

  if (!authUser) return null; 

  return (
    <aside className="bg-gray-900 text-gray-300 h-screen w-64 p-6 flex flex-col space-y-6 fixed">
      <Link to="/dashboard" className="text-xl font-bold text-blue-500 mb-4">
        Dashboard
      </Link>

      {/* Role based Links */}
      {authUser.role === "Donor" && (
        <>
          <Link to="/surplus" className="hover:text-blue-400">
            Surplus Donation
          </Link>
          <Link to="/monetary" className="hover:text-blue-400">
            Monetary Donation
          </Link>
        </>
      )}

      {authUser.role === "NGO_Staff" && authUser.staffType === "core" && (
        <>
          <Link to="/dashboard" className="hover:text-blue-400">
            Manage Surplus Donations
          </Link>
        </>
      )}

      {authUser.role === "NGO_Staff" && authUser.staffType === "delivery" && (
        <>
          <Link to="/delivery" className="hover:text-blue-400">
            Delivery Dashboard
          </Link>
        </>
      )}

      {authUser.role === "Admin" && (
        <>
          <Link to="/admin" className="hover:text-blue-400">
            Admin Dashboard
          </Link>
          <Link to="/users" className="hover:text-blue-400">
            Manage Users
          </Link>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
