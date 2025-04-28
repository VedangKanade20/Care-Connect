import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LandingNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">CareConnect</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <motion.a
            href="/about"
            className="text-white hover:text-blue-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About
          </motion.a>
          <motion.a
            href="/contact"
            className="text-white hover:text-blue-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <button className="text-white border border-blue-600 py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 mt-4 rounded-lg py-4 px-6 space-y-4">
          <motion.a
            href="#about"
            className="block text-white py-2 hover:text-blue-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About
          </motion.a>
          <motion.a
            href="#contact"
            className="block text-white py-2 hover:text-blue-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
          <div className="space-y-4">
            <Link to="/login">
              <button className="w-full py-2 px-6 text-white border border-blue-600 rounded-lg hover:bg-blue-600 transition duration-300">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="w-full py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default LandingNavbar;
