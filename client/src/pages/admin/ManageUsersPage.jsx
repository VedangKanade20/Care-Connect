import { useEffect, useState } from "react";
import { fetchAllUsersAPI } from "../../services/authService";
import { toast } from "react-hot-toast";

const ManageUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedUser, setSelectedUser] = useState(null);
  const [viewMode, setViewMode] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetchAllUsersAPI();
        setUsers(response.data);
      } catch (err) {
        setError("Failed to load users.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleView = (user) => {
    setSelectedUser(user);
    setViewMode(true);
  };

  const handleDeactivate = () => {
    if (!window.confirm("Are you sure you want to deactivate this user?"))
      return;

    // ✅ Just update isActive to false in-place (don't remove)
    const updated = users.map((user) =>
      user._id === selectedUser._id ? { ...user, isActive: false } : user
    );
    setUsers(updated);
    setSelectedUser({ ...selectedUser, isActive: false });
    toast.success("User marked as deactivated.");
  };

  const handleBack = () => {
    setViewMode(false);
    setSelectedUser(null);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Manage Users</h1>

      {loading && <p>Loading users...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* User List */}
      {!viewMode && !loading && !error && (
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-800">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className={`border-b border-gray-700 ${
                  user.isActive === false ? "bg-red-900 text-red-300" : ""
                }`}
              >
                <td className="px-4 py-2">{user.name || "N/A"}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2 capitalize">{user.role}</td>
                <td className="px-4 py-2">
                  {user.isActive === false ? "Deactivated" : "Active"}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleView(user)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* View Mode */}
      {viewMode && selectedUser && (
        <div className="bg-slate-800 p-6 rounded shadow-lg max-w-xl mx-auto mt-6">
          <h2 className="text-xl font-semibold mb-4">User Details</h2>
          <div className="space-y-3">
            <p>
              <strong>Name:</strong> {selectedUser.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p>
              <strong>Role:</strong> {selectedUser.role}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              {selectedUser.isActive === false ? "Deactivated" : "Active"}
            </p>
            <p>
              <strong>Joined At:</strong>{" "}
              {new Date(selectedUser.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div className="mt-6 flex space-x-4">
            {selectedUser.isActive !== false && (
              <button
                onClick={handleDeactivate}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Deactivate User
              </button>
            )}
            <button
              onClick={handleBack}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
            >
              Back to List
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsersPage;
