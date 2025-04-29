import { useEffect, useState } from "react";
import {
  getMonetaryDonationsAPI,
  getMonetaryDonationByIdAPI,
} from "../../services/monetaryService";

const ManageMonetaryDonationsPage = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [viewMode, setViewMode] = useState(false);

  // Fetch all monetary donations on mount
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await getMonetaryDonationsAPI();
        setDonations(response.data);
      } catch (err) {
        setError("Failed to load monetary donations.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  // Handle View button click
  const handleView = async (id) => {
    try {
      const response = await getMonetaryDonationByIdAPI(id);
      setSelectedDonation(response.data);
      setViewMode(true);
    } catch (err) {
      setError("Failed to load donation details.");
      console.error(err);
    }
  };

  // Go back to list
  const handleBack = () => {
    setSelectedDonation(null);
    setViewMode(false);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Manage Monetary Donations</h1>

      {loading && <p>Loading donations...</p>}
      {!loading && error && <p className="text-red-500">{error}</p>}

      {/* Donation List */}
      {!viewMode && !loading && !error && (
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-800">
              <th className="px-4 py-2">Amount (₹)</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation._id} className="border-b border-gray-700">
                <td className="px-4 py-2">₹{donation.amount}</td>
                <td className="px-4 py-2">{donation.status || "Pending"}</td>
                <td className="px-4 py-2">
                  {new Date(donation.createdAt).toLocaleDateString()}
                </td>
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

      {/* Single Donation View */}
      {viewMode && selectedDonation && (
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg max-w-xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Donation Details</h2>

          <div className="space-y-3">
            <p>
              <strong>Amount:</strong> ₹{selectedDonation.amount || "N/A"}
            </p>
            <p>
              <strong>Status:</strong> {selectedDonation.status || "Pending"}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(selectedDonation.createdAt).toLocaleDateString()}
            </p>
            <p>
              <strong>User ID:</strong> {selectedDonation.userId || "N/A"}
            </p>
            <p>
              <strong>Payment ID:</strong> {selectedDonation.paymentId || "N/A"}
            </p>
            <p>
              <strong>Transaction Status:</strong>{" "}
              {selectedDonation.transactionStatus || "N/A"}
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

export default ManageMonetaryDonationsPage;
