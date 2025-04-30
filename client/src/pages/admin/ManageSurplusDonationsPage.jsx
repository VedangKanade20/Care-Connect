import { useEffect, useState } from "react";
import {
  getSurplusDonationsAPI,
  getSurplusDonationByIdAPI,
} from "../../services/surplusService";
// import { toast } from "react-hot-toast";

const ManageSurplusDonationsPage = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedDonation, setSelectedDonation] = useState(null); // For viewing single donation
  const [viewMode, setViewMode] = useState(false);

  // Fetch all surplus donations on mount
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await getSurplusDonationsAPI();
        setDonations(response.data);
      } catch (err) {
        setError("Failed to load surplus donations.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  // Handle clicking "View" on a donation
  const handleView = async (id) => {
    try {
      const response = await getSurplusDonationByIdAPI(id);
      setSelectedDonation(response.data);
      setViewMode(true);
    } catch (err) {
      setError("Failed to load donation details.");
      console.error(err);
    }
  };

  // Handle deleting donation locally (no backend needed)
  // const handleDelete = () => {
  //   if (!window.confirm("Are you sure you want to delete this donation?"))
  //     return;

  //   // Remove from local state
  //   setDonations(donations.filter((d) => d._id !== selectedDonation._id));
  //   setSelectedDonation(null);
  //   setViewMode(false);
  //   toast.success("Donation deleted");
  // };

  // Go back to list
  const handleBack = () => {
    setSelectedDonation(null);
    setViewMode(false);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Manage Surplus Donations</h1>

      {loading && <p>Loading donations...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Donation List */}
      {!viewMode && !loading && !error && (
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-800">
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation._id} className="border-b border-gray-700">
                <td className="px-4 py-2">{donation.type}</td>
                <td className="px-4 py-2 truncate max-w-xs">
                  {donation.description}
                </td>
                <td className="px-4 py-2">{donation.status}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleView(donation._id)}
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

      {/* Single Donation View with Delete Option */}
      {viewMode && selectedDonation && (
        <div className="bg-gray-800 p-6 rounded shadow-lg max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Donation Details</h2>

          <div className="space-y-4">
            <p>
              <strong>Type:</strong> {selectedDonation.type}
            </p>
            <p>
              <strong>Description:</strong> {selectedDonation.description}
            </p>
            <p>
              <strong>Status:</strong> {selectedDonation.status || "Pending"}
            </p>
            <p>
              <strong>Created At:</strong>{" "}
              {new Date(selectedDonation.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div className="mt-6 flex space-x-4">
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

export default ManageSurplusDonationsPage;
