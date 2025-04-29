import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { authUser } = useSelector((state) => state.auth);

  if (!authUser) return null;

  return (
    <aside className="bg-slate-800 text-slate-100 h-screen w-64 p-6 flex flex-col space-y-4 fixed border-r border-slate-700 ">
      {/* <Link
        to="/dashboard"
        className="hover:text-blue-300 transition-colors py-2 px-3 rounded hover:bg-slate-700"
      >
        Dashboard
      </Link> */}

      {authUser.role === "Donor" && (
        <>
          <Link
            to="/dashboard"
            className="hover:text-blue-300 transition-colors py-2 px-3 rounded hover:bg-slate-700"
          >
            Dashboard
          </Link>
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
            to="/admin/dashboard"
            className="hover:text-blue-300 transition-colors py-2 px-3 rounded hover:bg-slate-700"
          >
            Admin Dashboard
          </Link>
          <Link
            to="/admin/users"
            className="hover:text-blue-300 transition-colors py-2 px-3 rounded hover:bg-slate-700"
          >
            Manage Users
          </Link>
          <Link
            to="/admin/surplus"
            className="hover:text-blue-300 transition-colors py-2 px-3 rounded hover:bg-slate-700"
          >
            Manage Surplus Donations
          </Link>
          <Link
            to="/admin/monetary"
            className="hover:text-blue-300 transition-colors py-2 px-3 rounded hover:bg-slate-700"
          >
            Manage Monetary Donations
          </Link>
        </>
      )}

      {authUser.role === "NGO_Staff" && authUser.staffType === "core" && (
        <>
          <Link
            to="/ngoCore/dashboard"
            className="hover:text-blue-300 transition-colors py-2 px-3 rounded hover:bg-slate-700"
          >
            Dashboard
          </Link>

          <Link
            to="/ngoCore/pending-surplus"
            className="hover:text-blue-300 transition-colors py-2 px-3 rounded hover:bg-slate-700"
          >
            Pending Surplus Donations
          </Link>

          <Link
            to="/ngoCore/assigned-deliveries"
            className="hover:text-blue-300 transition-colors py-2 px-3 rounded hover:bg-slate-700"
          >
            Assigned Deliveries
          </Link>
        </>
      )}

      {authUser.role === "NGO_Staff" && authUser.staffType === "delivery" && (
        <>
          <Link
            to="/ngoDelivery/dashboard"
            className="hover:text-blue-300 transition-colors py-2 px-3 rounded hover:bg-slate-700"
          >
            Delivery Dashboard
          </Link>
          <Link
            to="/ngoDelivery/viewAssDel"
            className="hover:text-blue-300 transition-colors py-2 px-3 rounded hover:bg-slate-700"
          >
            Assigned Deliveries
          </Link>
          <Link
            to="/ngoDelivery/compDelList"
            className="hover:text-blue-300 transition-colors py-2 px-3 rounded hover:bg-slate-700"
          >
            Completed Deliveries List
          </Link>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
