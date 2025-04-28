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
    <nav className="bg-slate-800 text-slate-100 px-6 py-4 flex justify-between items-center shadow-lg border-b border-slate-700 sticky top-0">
      <Link
        to="/"
        className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
      >
        CareConnect
      </Link>

      <div className="flex items-center space-x-6">
        <Link to="/dashboard" className="hover:text-blue-300 transition-colors">
          Dashboard
        </Link>
        <button
          onClick={handleLogout}
          className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md transition-colors duration-300"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
