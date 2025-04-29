/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
// import API from "../../lib/axios";

const PendingSurplusListPage = () => {
  const [loading, setLoading] = useState(false);

  // ✅ Dummy pending surplus donations
  const [surplusDonations, setSurplusDonations] = useState([
    {
      _id: "d1",
      itemName: "Wheat Flour",
      quantity: 10,
      pickupAddress: "Shivaji Nagar, Pune",
      expiryDate: "2025-06-01T00:00:00.000Z",
      status: "pending",
    },
    {
      _id: "d2",
      itemName: "Blankets",
      quantity: 20,
      pickupAddress: "Kothrud, Pune",
      expiryDate: "2025-06-10T00:00:00.000Z",
      status: "pending",
    },
  ]);

  // ⚠️ No need to fetch real data for now
  useEffect(() => {
    // Placeholder for future API call
    // getAllSurplusDonation();
  }, []);

  const handleUpdateStatus = async (id, status) => {
    try {
      // Dummy status update
      setSurplusDonations((prev) =>
        prev.map((donation) =>
          donation._id === id ? { ...donation, status } : donation
        )
      );
      toast.success(`Donation ${status} successfully!`);
    } catch (err) {
      console.error(err);
      toast.error("Action failed.");
    }
  };

  const pending = surplusDonations.filter((d) => d.status === "pending");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pending Surplus Donations</h1>

      {loading ? (
        <p>Loading...</p>
      ) : pending.length === 0 ? (
        <p>No pending donations.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pending.map((donation) => (
            <div
              key={donation._id}
              className="border p-4 rounded bg-white shadow"
            >
              <h2 className="text-lg  text-black font-semibold">
                {donation.itemName}
              </h2>
              <p className=" text-black">Quantity: {donation.quantity}</p>
              <p className=" text-black">Pickup: {donation.pickupAddress}</p>
              <p className=" text-black">
                Expiry: {donation.expiryDate?.split("T")[0]}
              </p>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleUpdateStatus(donation._id, "accepted")}
                  className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleUpdateStatus(donation._id, "rejected")}
                  className="bg-red-500 text-black px-4 py-2 rounded hover:bg-red-600"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PendingSurplusListPage;
