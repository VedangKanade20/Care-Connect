// CompletedDeliveriesList.jsx
import React, { useState } from "react";

const CompletedDeliveriesList = () => {
  const [completedDeliveries] = useState([
    {
      _id: "d201",
      itemName: "Milk Cartons",
      quantity: 15,
      deliveredTo: "Yerwada Orphanage",
      deliveredAt: "2025-04-29",
    },
    {
      _id: "d202",
      itemName: "Sanitary Kits",
      quantity: 50,
      deliveredTo: "Shelter Home, Baner",
      deliveredAt: "2025-04-28",
    },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Completed Deliveries</h2>

      {completedDeliveries.length === 0 ? (
        <p>No deliveries completed yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {completedDeliveries.map((d) => (
            <div key={d._id} className="border p-4 rounded shadow bg-green-100">
              <h3 className="text-lg font-semibold text-black">{d.itemName}</h3>
              <p className="text-black">Quantity: {d.quantity}</p>
              <p className="text-black">Delivered to: {d.deliveredTo}</p>
              <p className="text-black">Date: {d.deliveredAt}</p>
              <p className="text-green-700 font-medium mt-2">✅ Delivered</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompletedDeliveriesList;
