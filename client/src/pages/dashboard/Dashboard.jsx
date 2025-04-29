// import { useEffect } from "react";
// import { toast } from "react-hot-toast";
// import { Link, useSelector } from "react-router-dom";
// import NGOStaffDashboard from "./NGOStaffDashboard";
// import AdminDashboard from "./AdminDashboard";
// import DeliveryDashboard from "./DeliveryDashboard";

// const Dashboard = () => {
//   const { authUser } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (authUser) {
//       toast.success(`Welcome to ${authUser.role} Dashboard!`);
//     }
//   }, [authUser]);

//   if (!authUser) return <div>Please log in</div>;

//   return (
//     <div className="p-6">
//       {authUser.role === "Donor" && (
//         <>
//           <h1 className="text-2xl font-bold text-gray-900">
//             Welcome to Donor Dashboard
//           </h1>
//           <p className="mt-4 text-gray-600">
//             Here you can manage your surplus and monetary donations.
//           </p>
//           <div className="grid grid-cols-2 gap-6 mt-6">
//             <div className="border rounded-lg p-4 shadow-md">
//               <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
//                 ×
//               </button>
//               <h2 className="text-lg font-semibold">Surplus Donation</h2>
//               <Link to="/surplus">
//                 <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md">
//                   Donate Surplus
//                 </button>
//               </Link>
//             </div>
//             <div className="border rounded-lg p-4 shadow-md">
//               <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
//                 ×
//               </button>
//               <h2 className="text-lg font-semibold">Monetary Donation</h2>
//               <Link to="/monetary">
//                 <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md">
//                   Donate Money
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </>
//       )}

//       {authUser.role === "Admin" && (
//         <>
//           <AdminDashboard />
//           <h1 className="text-2xl font-bold text-gray-900">
//             Welcome to Admin Dashboard
//           </h1>
//           <p className="mt-4 text-gray-600">
//             Manage users and system settings here.
//           </p>
//           <div className="grid grid-cols-2 gap-6 mt-6">
//             <div className="border rounded-lg p-4 shadow-md">
//               <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
//                 ×
//               </button>
//               <h2 className="text-lg font-semibold">Manage Users</h2>
//               <Link to="/users">
//                 <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md">
//                   Go to Users
//                 </button>
//               </Link>
//             </div>
//           </div><h1 className="text-2xl font-bold text-gray-900">
//             Welcome to Admin Dashboard
//           </h1>
//           <p className="mt-4 text-gray-600">
//             Manage users and system settings here.
//           </p>
//           <div className="grid grid-cols-2 gap-6 mt-6">
//             <div className="border rounded-lg p-4 shadow-md">
//               <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
//                 ×
//               </button>
//               <h2 className="text-lg font-semibold">Manage Users</h2>

//               <Link to="/users">
//                 <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md">
//                   Go to Users
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </>
//       )}

//       {authUser.role === "NGO_Staff" && authUser.staffType === "core" && (
//         <>
//           <div>
//             <NGOStaffDashboard />
//           </div>
//           {/* <h1 className="text-2xl font-bold text-gray-900">
//             Welcome to NGO Staff Dashboard
//           </h1>
//           <p className="mt-4 text-gray-600">Manage surplus donations here.</p>
//           <div className="grid grid-cols-2 gap-6 mt-6">
//             <div className="border rounded-lg p-4 shadow-md">
//               <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
//                 ×
//               </button>
//               <h2 className="text-lg font-semibold">Surplus Donations</h2>
//               <Link to="/dashboard">
//                 <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md">
//                   Manage Donations
//                 </button>
//               </Link>
//             </div>
//           </div> */}
//         </>
//       )}

//       {authUser.role === "NGO_Staff" && authUser.staffType === "delivery" && (
//         <>
//           <div>
//             <DeliveryDashboard />
//           </div>
//           {/* <h1 className="text-2xl font-bold text-gray-900">
//             Welcome to Delivery Partner Dashboard
//           </h1>
//           <p className="mt-4 text-gray-600">Manage your deliveries here.</p>
//           <div className="grid grid-cols-2 gap-6 mt-6">
//             <div className="border rounded-lg p-4 shadow-md">
//               <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
//                 ×
//               </button>
//               <h2 className="text-lg font-semibold">Delivery Tasks</h2>
//               <Link to="/delivery">
//                 <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md">
//                   View Deliveries
//                 </button>
//               </Link>
//             </div>
//           </div> */}
//         </>
//       )}

//       {!(
//         authUser.role === "Donor" ||
//         authUser.role === "Admin" ||
//         authUser.role === "NGO_Staff"
//       ) && <div>Role not recognized</div>}
//     </div>
//   );
// };

// export default Dashboard;

import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NGOStaffDashboard from "./NGOStaffDashboard";
import AdminDashboard from "./AdminDashboard";
import DeliveryDashboard from "./DeliveryDashboard";

const Dashboard = () => {
  const { authUser } = useSelector((state) => state.auth);
  // const navigate = useNavigate();

  useEffect(() => {
    if (authUser) {
      toast.success(`Welcome to ${authUser.role} Dashboard!`);
    }
  }, [authUser]);

  // Redirect unauthorized users or show login prompt
  if (!authUser) {
    return <div className="p-6">Please log in to access your dashboard.</div>;
  }

  // Helper function to render dashboard content
  const renderDashboard = () => {
    switch (authUser.role) {
      case "Donor":
        return (
          <>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome to Donor Dashboard
            </h1>
            <p className="mt-4 text-gray-600">
              Here you can manage your surplus and monetary donations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="border rounded-lg p-4 shadow-md relative">
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                  ×
                </button>
                <h2 className="text-lg font-semibold">Surplus Donation</h2>
                <Link to="/surplus-donation">
                  <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md">
                    Donate Surplus
                  </button>
                </Link>
              </div>
              <div className="border rounded-lg p-4 shadow-md relative">
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                  ×
                </button>
                <h2 className="text-lg font-semibold">Monetary Donation</h2>
                <Link to="/monetary-donation">
                  <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md">
                    Donate Money
                  </button>
                </Link>
              </div>
              <div className="border rounded-lg p-4 shadow-md relative">
                <h2 className="text-lg font-semibold">View History</h2>
                <Link to="/donation-history">
                  <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                    View Donation History
                  </button>
                </Link>
              </div>
            </div>
          </>
        );

      case "Admin":
        return (
          <>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome to Admin Dashboard
            </h1>
            <p className="mt-4 text-gray-600">
              Manage users and system settings here.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="border rounded-lg p-4 shadow-md relative">
                <h2 className="text-lg font-semibold">Manage Users</h2>
                <Link to="/users">
                  <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md">
                    Go to Users
                  </button>
                </Link>
              </div>
            </div>
          </>
        );

      case "NGO_Staff":
        if (authUser.staffType === "core") {
          return (
            <>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome to NGO Staff Dashboard
              </h1>
              <p className="mt-4 text-gray-600">
                Manage surplus donations here.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="border rounded-lg p-4 shadow-md relative">
                  <h2 className="text-lg font-semibold">Surplus Donations</h2>
                  <Link to="/dashboard">
                    <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md">
                      Manage Donations
                    </button>
                  </Link>
                </div>
              </div>
            </>
          );
        } else if (authUser.staffType === "delivery") {
          return (
            <>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome to Delivery Partner Dashboard
              </h1>
              <p className="mt-4 text-gray-600">Manage your deliveries here.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="border rounded-lg p-4 shadow-md relative">
                  <h2 className="text-lg font-semibold">Delivery Tasks</h2>
                  <Link to="/delivery">
                    <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md">
                      View Deliveries
                    </button>
                  </Link>
                </div>
              </div>
            </>
          );
        }
        return <div>Unrecognized staff type</div>;

      default:
        return <div>Role not recognized</div>;
    }
  };

  return <div className="p-6">{renderDashboard()}</div>;
};

export default Dashboard;
