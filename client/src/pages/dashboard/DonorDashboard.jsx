// import { useEffect } from "react";
// import { toast } from "react-hot-toast";

// const DonorDashboard = () => {
//   useEffect(() => {
//     toast.success("Welcome to Donor Dashboard!");
//   }, []);
//   return (
//     <div>
//       <h1 className="text-2xl font-bold text-white">
//         Welcome to Donor Dashboard
//       </h1>
//       <p className="mt-4 text-gray-400">
//         Here you can manage your surplus and monetary donations.
//       </p>
//     </div>
//   );
// };

// export default DonorDashboard;

//grok

import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const DonorDashboard = () => {
  useEffect(() => {
    toast.success("Welcome to Donor Dashboard!");
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900">
        Welcome to Donor Dashboard
      </h1>
      <p className="mt-4 text-gray-600">
        Here you can manage your surplus and monetary donations.
      </p>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="border rounded-lg p-4 shadow-md">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={() => console.log("Close Surplus Donation")}
          >
            ×
          </button>
          <h2 className="text-lg font-semibold">Surplus Donation</h2>
          <Link to="/surplus">
            <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md">
              Donate Surplus
            </button>
          </Link>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={() => console.log("Close Monetary Donation")}
          >
            ×
          </button>
          <h2 className="text-lg font-semibold">Monetary Donation</h2>
          <Link to="/monetary">
            <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md">
              Donate Money
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
