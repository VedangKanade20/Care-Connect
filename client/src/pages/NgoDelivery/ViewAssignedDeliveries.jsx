import React, { useState } from "react";
import { toast } from "react-hot-toast";

const ViewAssignedDeliveries = () => {
  const [deliveries, setDeliveries] = useState([
    {
      _id: "d101",
      itemName: "Rice Packets",
      quantity: 10,
      pickupAddress: "Koregaon Park, Pune",
      deliveryAddress: "Camp Area, Pune",
      status: "assigned",
    },
    {
      _id: "d102",
      itemName: "Bread Loaves",
      quantity: 25,
      pickupAddress: "Kothrud, Pune",
      deliveryAddress: "MG Road, Pune",
      status: "picked_up",
    },
  ]);

  const handleUpdateStatus = (id, newStatus) => {
    setDeliveries((prev) =>
      prev.map((d) => (d._id === id ? { ...d, status: newStatus } : d))
    );
    toast.success(`Marked as ${newStatus.replace("_", " ")}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Assigned Deliveries</h2>

      {deliveries.length === 0 ? (
        <p>No deliveries assigned.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deliveries.map((d) => (
            <div key={d._id} className="border p-4 rounded shadow bg-white">
              <h3 className="text-lg font-semibold text-black">{d.itemName}</h3>
              <p className="text-black">Quantity: {d.quantity}</p>
              <p className="text-black">Pickup: {d.pickupAddress}</p>
              <p className="text-black">Deliver to: {d.deliveryAddress}</p>
              <p className="text-black font-medium">
                Status:{" "}
                <span className="capitalize text-blue-600">{d.status}</span>
              </p>

              {/* Status Controls */}
              <div className="mt-4 flex gap-2">
                {d.status === "assigned" && (
                  <button
                    onClick={() => handleUpdateStatus(d._id, "picked_up")}
                    className="bg-yellow-500 px-4 py-2 rounded text-black hover:bg-yellow-600"
                  >
                    Mark as Picked Up
                  </button>
                )}
                {d.status === "picked_up" && (
                  <button
                    onClick={() => handleUpdateStatus(d._id, "delivered")}
                    className="bg-green-500 px-4 py-2 rounded text-black hover:bg-green-600"
                  >
                    Mark as Delivered
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewAssignedDeliveries;
