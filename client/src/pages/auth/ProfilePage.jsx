// import { useSelector } from "react-redux";

// const ProfilePage = () => {
//   const { authUser } = useSelector((state) => state.auth);

//   if (!authUser) {
//     return <div className="text-center text-red-500">User not logged in</div>;
//   }

//   return (
//     <div className="min-h-screen bg-black text-white px-4 py-12">
//       <div className="max-w-2xl mx-auto bg-slate-800 p-8 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold mb-6 text-blue-400">User Profile</h1>

//         <div className="space-y-4 text-lg">
//           <p>
//             <strong>Name:</strong>{" "}
//             <span className="text-slate-200">{authUser.name}</span>
//           </p>
//           <p>
//             <strong>Email:</strong>{" "}
//             <span className="text-slate-200">{authUser.email}</span>
//           </p>
//           <p>
//             <strong>Role:</strong>{" "}
//             <span className="capitalize text-slate-200">{authUser.role}</span>
//           </p>
//           {authUser?.staffType && (
//             <p>
//               <strong>Staff Type:</strong>{" "}
//               <span className="capitalize text-slate-200">
//                 {authUser.staffType}
//               </span>
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { authUser } = useSelector((state) => state.auth);

  return (
    <div className="bg-slate-800 text-slate-100 px-6 py-4 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">Profile</h1>
        <div className="bg-white rounded-lg p-6 shadow-lg text-black">
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
              to="/dashboard"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Back to Dashboard
            </Link>
          </div>
          <div className="mt-6 text-right">
            <Link
              to="/"
              className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer hover:bg-[#131212]  group hover:-translate-y-1 duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
