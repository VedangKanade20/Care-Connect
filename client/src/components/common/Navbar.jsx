// import { Link, useNavigate } from "react-router-dom";
// import { useLogout } from "../../hooks/useLogout";
// import { useSelector } from "react-redux";
// import { useState } from "react";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { logoutUser } = useLogout();
//   const { authUser } = useSelector((state) => state.auth);

//   const [showUserModal, setShowUserModal] = useState(false);
//   const [showLogoutModal, setShowLogoutModal] = useState(false);

//   const handleLogout = () => {
//     logoutUser();
//     setShowLogoutModal(false);
//     navigate("/login");
//   };

//   return (
//     <>
//       <nav className="bg-slate-800 text-slate-100 px-6 py-4 flex justify-between items-center shadow-lg border-b border-slate-700 sticky top-0 z-50">
//         <Link
//           to="/"
//           className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
//         >
//           CareConnect
//         </Link>

//         <div className="flex items-center space-x-6">
//           <button
//             onClick={() => setShowUserModal(true)}
//             className="px-3 py-1 border border-blue-400 text-blue-300 rounded-full hover:bg-blue-600 hover:text-white transition duration-200"
//           >
//             {authUser?.name || "User Info"}
//           </button>
//           <Link
//             to="/dashboard"
//             className="hover:text-blue-300 transition-colors"
//           >
//             Dashboard
//           </Link>

//           <button
//             onClick={() => setShowLogoutModal(true)}
//             className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md transition-colors duration-300"
//           >
//             Logout
//           </button>
//         </div>
//       </nav>

//       {/* USER MODAL */}
//       {showUserModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg text-black relative">
//             <button
//               className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
//               onClick={() => setShowUserModal(false)}
//             >
//               &times;
//             </button>
//             <h2 className="text-xl font-semibold mb-4">User Information</h2>
//             <p>
//               <strong>Name:</strong> {authUser?.name || "N/A"}
//             </p>
//             <p>
//               <strong>Email:</strong> {authUser?.email || "N/A"}
//             </p>
//             <p>
//               <strong>Role:</strong> {authUser?.role || "N/A"}
//             </p>
//             {authUser?.staffType && (
//               <p>
//                 <strong>Staff Type:</strong> {authUser.staffType}
//               </p>
//             )}
//             <div className="mt-6 text-right">
//               <button
//                 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 onClick={() => setShowUserModal(false)}
//               >
//                 Close
//               </button>
//             </div>
//             <div className="mt-4">
//               <button
//                 onClick={() => {
//                   setShowUserModal(false);
//                   navigate("/profile");
//                 }}
//                 className="px-3 py-1 border border-blue-400 text-black rounded-full hover:bg-blue-800 hover:text-white transition duration-200"
//               >
//                 View Full Profile
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* LOGOUT MODAL */}
//       {showLogoutModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg w-full max-w-sm p-6 shadow-lg text-black relative">
//             <button
//               className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
//               onClick={() => setShowLogoutModal(false)}
//             >
//               &times;
//             </button>
//             <h2 className="text-lg font-bold mb-4">Confirm Logout</h2>
//             <p className="mb-6">Are you sure you want to logout?</p>
//             <div className="flex justify-end space-x-4">
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
//               >
//                 Logout
//               </button>
//               <button
//                 onClick={() => setShowLogoutModal(false)}
//                 className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { logoutUser } = useLogout();
  const { authUser } = useSelector((state) => state.auth);

  const [showUserModal, setShowUserModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    logoutUser();
    setShowLogoutModal(false);
    navigate("/login");
  };

  return (
    <>
      <nav className="bg-slate-800 text-slate-100 px-6 py-4 flex justify-between items-center shadow-lg border-b border-slate-700 sticky top-0 z-50">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
        >
          CareConnect
        </Link>

        <div className="flex items-center space-x-6">
          <button
            onClick={() => setShowUserModal(true)}
            className="border border-blue-400 hover:border-blue-300 text-blue-400 hover:text-blue-300 px-2 py-1 rounded transition-colors"
          >
            {authUser?.name || "User Info"}
          </button>

          <Link
            to="/dashboard"
            className="hover:text-blue-300 transition-colors"
          >
            Dashboard
          </Link>

          <button
            onClick={() => setShowLogoutModal(true)}
            className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md transition-colors duration-300"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* USER MODAL */}
      {showUserModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg text-black relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
              onClick={() => setShowUserModal(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">User Information</h2>
            <p>
              <strong>Name:</strong> {authUser?.name || "N/A"}
            </p>
            <p>
              <strong>Email:</strong> {authUser?.email || "N/A"}
            </p>
            <p>
              <strong>Role:</strong> {authUser?.role || "N/A"}
            </p>
            {authUser?.staffType && (
              <p>
                <strong>Staff Type:</strong> {authUser.staffType}
              </p>
            )}
            <div className="mt-6 text-right">
              <Link
                to="/profile"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => setShowUserModal(false)}
              >
                View Profile
              </Link>
              <button
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 ml-2"
                onClick={() => setShowUserModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LOGOUT MODAL */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full max-w-sm p-6 shadow-lg text-black relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
              onClick={() => setShowLogoutModal(false)}
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">Confirm Logout</h2>
            <p className="mb-6">Are you sure you want to logout?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
              <button
                onClick={() => setShowLogoutModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
