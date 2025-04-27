/* eslint-disable no-unused-vars */
import LandingNavbar from "../components/landing/LandingNavbar";
import LandingFooter from "../components/landing/LandingFooter";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <LandingNavbar />
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to CareConnect</h2>
        <p className="text-lg mb-6">
          Connecting communities through donations and support.
        </p>
        <motion.a
          href="#"
          className="inline-block bg-white text-blue-600 py-2 px-6 text-lg rounded-lg hover:bg-gray-100"
          whileHover={{ scale: 1.05 }}
        >
          Get Started
        </motion.a>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Our Approach</h2>
          <p className="text-gray-400 mb-4">
            At CareConnect, we believe in empowering communities by facilitating
            seamless donations of surplus goods and monetary support. Our
            platform connects donors with NGOs and individuals in need, ensuring
            resources reach where they matter most. We prioritize transparency,
            efficiency, and impact.
          </p>
          <p className="text-gray-400 mb-4">
            Our approach involves rigorous verification of NGOs, real-time
            tracking of donations, and a user-friendly interface to make giving
            easy. Whether it’s surplus food, clothing, or financial aid, we’re
            here to bridge the gap.
          </p>
          <motion.a
            href="#"
            className="inline-block bg-blue-600 text-white py-2 px-6 text-lg rounded-lg hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
          >
            Learn More
          </motion.a>
        </div>
      </section>
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            What People Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">John Doe</h3>
              <p className="text-gray-400">
                "CareConnect made it so easy to donate my surplus goods. The
                process was smooth, and I felt the impact immediately!"
              </p>
            </div>
            <div className="bg-gray-900 p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Jane Smith</h3>
              <p className="text-gray-400">
                "I love how transparent the platform is. Knowing my monetary
                donation reached the right hands gives me peace of mind."
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-4xl font-bold text-blue-400">500+</p>
              <p className="text-gray-400">Tons of Food Donated</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-400">55,000</p>
              <p className="text-gray-400">Raised</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-400">58,000</p>
              <p className="text-gray-400">People Supported</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-400">550,000</p>
              <p className="text-gray-400">NGOs Supported</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-blue-600 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">
            Join the Movement to End Hunger and Poverty
          </h2>
          <p className="text-lg mb-6">
            Donate money, surplus food, or clothes to support NGOs today.
            Bridging generosity to relief.
          </p>
          <motion.a
            href="#"
            className="inline-block bg-white text-blue-600 py-2 px-6 text-lg rounded-lg hover:bg-gray-100"
            whileHover={{ scale: 1.05 }}
          >
            Get Started
          </motion.a>
        </div>
      </section>
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
