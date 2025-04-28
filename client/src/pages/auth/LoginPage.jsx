import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import LandingFooter from "../../components/landing/LandingFooter";
import { useLogin } from "../../hooks/useLogin.js";
import { fetchProfile } from "../../store/authSlice";

const LoginPage = () => {
  const { loginUser, loading, error } = useLogin();
  const { authUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("authUser in useEffect:", authUser); // Log the authUser state
    if (authUser && authUser !== null) {
      console.log("Navigating to /dashboard"); // Log navigation
      navigate("/dashboard");
    }
  }, [authUser, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await loginUser({ email, password });

    if (result?.meta?.requestStatus === "fulfilled") {
      try {
        await dispatch(fetchProfile()); // Fetch latest user info after login
        toast.success("Login successful!");
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("Failed to fetch user profile. Please try again.");
      }
    } else {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Login to your Account
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-semibold"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Don't have an account?{" "}
          <span
            className="text-blue-400 hover:underline cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </span>
        </p>
      </div>
      <LandingFooter />
    </div>
  );
};

export default LoginPage;
