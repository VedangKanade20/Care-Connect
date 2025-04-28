// import { Link, useNavigate } from "react-router-dom";
// import { useLogout } from "../../hooks/useLogout";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { logoutUser } = useLogout();

//   const handleLogout = () => {
//     logoutUser();
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
//       <Link to="/" className="text-2xl font-bold text-blue-500">
//         CareConnect
//       </Link>

//       <div className="flex items-center space-x-6">
//         <Link to="/dashboard" className="hover:text-blue-400">
//           Dashboard
//         </Link>
//         <button
//           onClick={handleLogout}
//           className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300"
//         >
//           Logout
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

//grok

import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

const Navbar = () => {
  const navigate = useNavigate();
  const { logoutUser } = useLogout();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold text-blue-500">
        Care-Connect
      </Link>
      <div className="flex items-center space-x-6">
        <Link to="/dashboard" className="hover:text-blue-400">
          Dashboard
        </Link>
        <button
          onClick={handleLogout}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
