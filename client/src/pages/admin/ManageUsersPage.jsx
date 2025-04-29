import { useEffect, useState } from "react";
import { fetchAllUsersAPI } from "../../services/authService";

const ManageUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // For viewing single user
  const [selectedUser, setSelectedUser] = useState(null);
  const [viewMode, setViewMode] = useState(false);

  // Fetch all users on mount
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

  // Handle clicking on "View"
  const handleView = (user) => {
    setSelectedUser(user);
    setViewMode(true);
  };

  // Handle deleting user
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      // Optional: Replace `deleteUserAPI` with real API call when ready
      // await deleteUserAPI(selectedUser._id);

      // Simulate local deletion
      setUsers(users.filter((u) => u._id !== selectedUser._id));
      setViewMode(false);
      setSelectedUser(null);
    } catch (err) {
      setError("Failed to delete user.");
      console.error(err);
    }
  };

  // Go back to list
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
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b border-gray-700">
                <td className="px-4 py-2">{user.name || "N/A"}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role || "Donor"}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleView(user)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded mr-2"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Single User View (Modal Style) */}
      {viewMode && selectedUser && (
        <div className="bg-slate-800 p-6 rounded shadow-lg max-w-xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">User Details</h2>
          <div className="space-y-3 text-left">
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
              {selectedUser.isActive ? "Active" : "Inactive"}
            </p>
            <p>
              <strong>Joined At:</strong>{" "}
              {new Date(selectedUser.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div className="mt-6 flex space-x-4">
            <button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Delete User
            </button>
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
