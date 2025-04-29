import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NGOStaffDashboard = () => {
  const { authUser } = useSelector((state) => state.auth);
  useEffect(() => {
    toast.success("Welcome to NGO Staff Dashboard!");
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white">
        Welcome to NGO Staff Dashboard
      </h1>
      <p className="mt-4 text-gray-600">Manage pending donations here.</p>
      {authUser.staffType === "core" && (
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="border rounded-lg p-4 shadow-md">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              ×
            </button>
            <h2 className="text-lg font-semibold">Surplus Donations</h2>
            <Link to="/ngoCore/pending-surplus">
              <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md">
                Manage Pending Donations
              </button>
            </Link>
          </div>
          <div className="border rounded-lg p-4 shadow-md">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              ×
            </button>
            <h2 className="text-lg font-semibold">The Deliveries</h2>
            <Link to="/ngoCore/assigned-deliveries">
              <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md">
                Assign Deliveries
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default NGOStaffDashboard;
