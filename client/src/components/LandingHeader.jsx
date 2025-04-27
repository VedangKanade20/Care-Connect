import { useState } from "react";
import { motion } from "framer-motion";

const LandingHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">CareConnect</h1>
        <nav className="hidden md:flex space-x-8">
          <motion.a
            href="#"
            className="text-white hover:text-blue-600 transition duration-300"
            whileHover={{ underline: true }}
          >
            About
          </motion.a>
          <motion.a
            href="#"
            className="text-white hover:text-blue-600 transition duration-300"
            whileHover={{ underline: true }}
          >
            Contact
          </motion.a>
        </nav>
        <div className="hidden md:flex space-x-4">
          <button className="text-white border border-blue-600 py-2 px-6 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
            Login
          </button>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Sign Up
          </button>
        </div>
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
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg mt-4 rounded-lg py-4 px-6">
          <motion.a
            href="#"
            className="block text-white py-2 hover:text-blue-600 transition duration-300"
            whileHover={{ underline: true }}
          >
            About
          </motion.a>
          <motion.a
            href="#"
            className="block text-white py-2 hover:text-blue-600 transition duration-300"
            whileHover={{ underline: true }}
          >
            Contact
          </motion.a>
          <div className="mt-4 space-y-4">
            <button className="w-full py-2 px-6 text-white border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
              Login
            </button>
            <button className="w-full py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default LandingHeader;
