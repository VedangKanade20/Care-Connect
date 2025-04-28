import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NGOStaffDashboard = () => {
  const { authUser } = useSelector((state) => state.auth);
  useEffect(() => toast.success("Welcome to NGO Staff Dashboard!"), []);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900">
        Welcome to NGO Staff Dashboard
      </h1>
      <p className="mt-4 text-gray-600">Manage surplus donations here.</p>
      {authUser.staffType === "core" && (
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
      )}
    </div>
  );
};
export default NGOStaffDashboard;
