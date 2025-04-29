import React, { useState } from "react";
import API from "../../lib/axios";
import { toast } from "react-hot-toast";

const AssignedDeliveriesPage = () => {
  // Dummy accepted surplus donations
  const [surplusDonations, setSurplusDonations] = useState([
    {
      _id: "s1",
      itemName: "Rice Bags",
      quantity: 5,
      pickupAddress: "Hadapsar, Pune",
      status: "accepted",
    },
    {
      _id: "s2",
      itemName: "Milk Packets",
      quantity: 12,
      pickupAddress: "Viman Nagar, Pune",
      status: "accepted",
    },
  ]);

  // Dummy delivery users
  const deliveryUsers = [
    { _id: "u1", name: "Ankita Sharma", email: "ankita@careconnect.org" },
    { _id: "u2", name: "Ravi Patel", email: "ravi@careconnect.org" },
    { _id: "u3", name: "Fatima Khan", email: "fatima@careconnect.org" },
  ];

  const [selectedPartners, setSelectedPartners] = useState({});

  const handleAssign = async (donationId) => {
    const userId = selectedPartners[donationId];
    if (!userId) {
      toast.error("Please select a delivery partner");
      return;
    }

    try {
      // Dummy patch simulation
      setSurplusDonations((prev) =>
        prev.map((d) =>
          d._id === donationId
            ? { ...d, assignedTo: userId, status: "assigned" }
            : d
        )
      );
      toast.success("Delivery partner assigned (mock)!");
    } catch (err) {
      console.error(err);
      toast.error("Assignment failed");
    }
  };

  const handleChange = (donationId, userId) => {
    setSelectedPartners((prev) => ({
      ...prev,
      [donationId]: userId,
    }));
  };

  const accepted = surplusDonations.filter((d) => d.status === "accepted");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Assign Deliveries</h1>

      {accepted.length === 0 ? (
        <p>No accepted donations to assign.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accepted.map((donation) => (
            <div
              key={donation._id}
              className="border p-4 rounded bg-black shadow"
            >
              <h2 className="text-lg font-semibold">{donation.itemName}</h2>
              <p>Quantity: {donation.quantity}</p>
              <p>Pickup: {donation.pickupAddress}</p>

              <label className="block mt-4 bg-black  mb-2 font-medium">
                Assign to:
              </label>
              <select
                value={selectedPartners[donation._id] || ""}
                onChange={(e) => handleChange(donation._id, e.target.value)}
                className="w-full border rounded px-3 py-2 bg-black "
              >
                <option value="">Select Delivery Partner</option>
                {deliveryUsers.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.name} ({user.email})
                  </option>
                ))}
              </select>

              <button
                onClick={() => handleAssign(donation._id)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Assign Delivery
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AssignedDeliveriesPage;
