import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { authUser } = useSelector((state) => state.auth);

  if (!authUser) return null;

  return (
    <aside className="bg-slate-800 text-slate-100 h-screen w-64 p-6 flex flex-col space-y-4 fixed border-r border-slate-700 ">
      <Link
        to="/dashboard"
        className="hover:text-blue-300 transition-colors py-2 px-3 rounded hover:bg-slate-700"
      >
        Dashboard
      </Link>

      {authUser.role === "Donor" && (
        <>
          <Link
            to="/surplus-donation"
            className="hover:text-blue-300 transition-colors py-2 px-3 rounded hover:bg-slate-700"
          >
            Surplus Donation
          </Link>
          <Link
            to="/monetary-donation"
            className="hover:text-blue-300 transition-colors py-2 px-3 rounded hover:bg-slate-700"
          >
            Monetary Donation
          </Link>
          <Link
            to="/donation-history"
            className="hover:text-blue-300 transition-colors py-2 px-3 rounded hover:bg-slate-700"
          >
            Donation History
          </Link>
        </>
      )}

      {authUser.role === "Admin" && (
        <>
          <Link
            to="/admin/dashboard "
            className="hover:text-blue-300 transition-colors py-2 px-3 rounded hover:bg-slate-700"
          >
            Admin Dashboard
          </Link>
          <Link
            to="/users"
            className="hover:text-blue-300 transition-colors py-2 px-3 rounded hover:bg-slate-700"
          >
            Manage Users
          </Link>
        </>
      )}

      {authUser.role === "NGO_Staff" && authUser.staffType === "core" && (
        <Link
          to="/dashboard"
          className="hover:text-blue-300 transition-colors py-2 px-3 rounded hover:bg-slate-700"
        >
          Manage Surplus
        </Link>
      )}

      {authUser.role === "NGO_Staff" && authUser.staffType === "delivery" && (
        <Link
          to="/delivery"
          className="hover:text-blue-300 transition-colors py-2 px-3 rounded hover:bg-slate-700"
        >
          Delivery Dashboard
        </Link>
      )}
    </aside>
  );
};

export default Sidebar;
