import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link, useSelector } from "react-router-dom";

const Dashboard = () => {
  const { authUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (authUser) {
      toast.success(`Welcome to ${authUser.role} Dashboard!`);
    }
  }, [authUser]);

  if (!authUser) return <div>Please log in</div>;

  return (
    <div className="p-6">
      {authUser.role === "Donor" && (
        <>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome to Donor Dashboard
          </h1>
          <p className="mt-4 text-gray-600">
            Here you can manage your surplus and monetary donations.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="border rounded-lg p-4 shadow-md">
              <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                ×
              </button>
              <h2 className="text-lg font-semibold">Surplus Donation</h2>
              <Link to="/surplus">
                <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md">
                  Donate Surplus
                </button>
              </Link>
            </div>
            <div className="border rounded-lg p-4 shadow-md">
              <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                ×
              </button>
              <h2 className="text-lg font-semibold">Monetary Donation</h2>
              <Link to="/monetary">
                <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md">
                  Donate Money
                </button>
              </Link>
            </div>
          </div>
        </>
      )}

      {authUser.role === "Admin" && (
        <>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome to Admin Dashboard
          </h1>
          <p className="mt-4 text-gray-600">
            Manage users and system settings here.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="border rounded-lg p-4 shadow-md">
              <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                ×
              </button>
              <h2 className="text-lg font-semibold">Manage Users</h2>
              <Link to="/users">
                <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md">
                  Go to Users
                </button>
              </Link>
            </div>
          </div>
        </>
      )}

      {authUser.role === "NGO_Staff" && authUser.staffType === "core" && (
        <>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome to NGO Staff Dashboard
          </h1>
          <p className="mt-4 text-gray-600">Manage surplus donations here.</p>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="border rounded-lg p-4 shadow-md">
              <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                ×
              </button>
              <h2 className="text-lg font-semibold">Surplus Donations</h2>
              <Link to="/dashboard">
                <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md">
                  Manage Donations
                </button>
              </Link>
            </div>
          </div>
        </>
      )}

      {authUser.role === "NGO_Staff" && authUser.staffType === "delivery" && (
        <>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome to Delivery Partner Dashboard
          </h1>
          <p className="mt-4 text-gray-600">Manage your deliveries here.</p>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="border rounded-lg p-4 shadow-md">
              <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                ×
              </button>
              <h2 className="text-lg font-semibold">Delivery Tasks</h2>
              <Link to="/delivery">
                <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md">
                  View Deliveries
                </button>
              </Link>
            </div>
          </div>
        </>
      )}

      {!(
        authUser.role === "Donor" ||
        authUser.role === "Admin" ||
        authUser.role === "NGO_Staff"
      ) && <div>Role not recognized</div>}
    </div>
  );
};

export default Dashboard;
