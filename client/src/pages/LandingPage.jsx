/* eslint-disable no-unused-vars */
import LandingNavbar from "../components/landing/LandingNavbar";
import LandingFooter from "../components/landing/LandingFooter";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <LandingNavbar />
      <section
        className="bg-blue-600 text-white py-20 text-center "
        style={{
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpzGfKqX8dji6tRNZkRYAkeLjGbZs136AoNw&s")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-4xl font-bold mb-4">Welcome to CareConnect</h2>
        <p className="text-lg mb-6">
          Connecting communities through donations and support.
        </p>
        <motion.a
          href="/login"
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
            href="/about"
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
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">How We Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
              <img
                src="https://media.istockphoto.com/id/1498170916/photo/a-couple-is-taking-a-bag-of-food-at-the-food-and-clothes-bank.jpg?s=612x612&w=0&k=20&c=0fnD_g46lvoZ5NdzX5zYOSM4PzM95ezfs5uMe9D1QKs="
                alt="Food Donation"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Food Donations</h3>
              <p className="text-gray-400 text-center">
                We collect surplus food from businesses and individuals to
                distribute to those in need, reducing waste and hunger.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2025/04/02/20250402311F-scaled.jpg?fit=2560%2C1821&quality=80&zoom=1&ssl=1?v=1743599036"
                alt="Clothing Donation"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Clothing Donations</h3>
              <p className="text-gray-400 text-center">
                Donate gently used clothes to provide warmth and dignity to
                communities facing poverty.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTkTZQ66fseAFl9HcOjm_NiHC9AmS8K6-zRA&s"
                alt="Monetary Support"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Monetary Support</h3>
              <p className="text-gray-400 text-center">
                Your financial contributions help NGOs expand their outreach and
                support more people in need.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYCE6uFNBOiBmYCzaTM1s9nJ9w7Ci07MZrVA&s"
                alt="Community Impact"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
              <p className="text-gray-400 text-center">
                Together, we empower communities by ensuring resources reach
                those who need them most.
              </p>
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
            href="/login"
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
