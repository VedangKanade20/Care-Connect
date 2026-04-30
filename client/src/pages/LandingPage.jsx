/* eslint-disable no-unused-vars */
import LandingNavbar from "../components/landing/LandingNavbar";
import LandingFooter from "../components/landing/LandingFooter";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <LandingNavbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto max-w-6xl px-4"
        >
          <h1 className="text-6xl font-bold mb-6">Welcome to CareConnect</h1>
          <p className="text-xl mb-4 max-w-3xl mx-auto">
            Connecting communities through donations and support. Our platform
            uses intelligent matching, scalable AI insights, and community trust
            to turn giving into measurable impact.
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-200">
            Donate smarter, support faster, and watch your generosity reach the
            right people at the right time.
          </p>
          <motion.a
            href="/login"
            className="inline-block bg-white text-blue-900 py-4 px-8 text-xl rounded-lg hover:bg-gray-100 font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            Get Started Today
          </motion.a>
        </motion.div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-blue-400">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              At CareConnect, we believe in empowering communities by
              facilitating seamless donations of surplus goods and monetary
              support. Our platform connects donors with NGOs and individuals in
              need, ensuring resources reach where they matter most.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-300">
                Connect
              </h3>
              <p className="text-gray-400">
                Bridging donors and those in need through our transparent
                platform.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-300">
                Empower
              </h3>
              <p className="text-gray-400">
                Empowering communities with efficient resource distribution.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-300">
                Impact
              </h3>
              <p className="text-gray-400">
                Creating lasting impact by reducing waste and alleviating
                poverty.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-center mb-16 text-white"
          >
            How We Help
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src="https://media.istockphoto.com/id/1498170916/photo/a-couple-is-taking-a-bag-of-food-at-the-food-and-clothes-bank.jpg?s=612x612&w=0&k=20&c=0fnD_g46lvoZ5NdzX5zYOSM4PzM95ezfs5uMe9D1QKs="
                alt="Food Donation"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-blue-300">
                Food Donations
              </h3>
              <p className="text-gray-300">
                We collect surplus food from businesses and individuals to
                distribute to those in need, reducing waste and hunger.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-black p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src="https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2025/04/02/20250402311F-scaled.jpg?fit=2560%2C1821&quality=80&zoom=1&ssl=1?v=1743599036"
                alt="Clothing Donation"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-blue-300">
                Clothing Donations
              </h3>
              <p className="text-gray-300">
                Donate gently used clothes to provide warmth and dignity to
                communities facing poverty.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-black p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTkTZQ66fseAFl9HcOjm_NiHC9AmS8K6-zRA&s"
                alt="Monetary Support"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-blue-300">
                Monetary Support
              </h3>
              <p className="text-gray-300">
                Your financial contributions help NGOs expand their outreach and
                support more people in need.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-black p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYCE6uFNBOiBmYCzaTM1s9nJ9w7Ci07MZrVA&s"
                alt="Community Impact"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-blue-300">
                Community Impact
              </h3>
              <p className="text-gray-300">
                Together, we empower communities by ensuring resources reach
                those who need them most.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI-Driven Features Section */}
      <section className="py-24 px-4 bg-[#04131f]">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-center mb-8 text-blue-300"
          >
            AI-Driven Features for Smarter Giving
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-center text-gray-300 mb-16 max-w-4xl mx-auto"
          >
            CareConnect blends AI and human compassion to make donations more
            effective, faster, and more accountable. These smart features scale
            with your community and bring every contribution closer to
            real-world change.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black p-8 rounded-3xl shadow-2xl border border-blue-800"
            >
              <div className="mb-4 text-blue-300 text-5xl">🤖</div>
              <h3 className="text-3xl font-semibold mb-3 text-white">
                Smart Donation Matchmaking
              </h3>
              <p className="text-gray-300">
                AI analyzes need, location, and resource availability to match
                donations with the highest-impact recipients in real time.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-black p-8 rounded-3xl shadow-2xl border border-blue-800"
            >
              <div className="mb-4 text-blue-300 text-5xl">📈</div>
              <h3 className="text-3xl font-semibold mb-3 text-white">
                Predictive Need Insights
              </h3>
              <p className="text-gray-300">
                Our platform forecasts demand trends so NGOs can plan ahead,
                reduce waste, and deliver support where it will make the
                greatest difference.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-black p-8 rounded-3xl shadow-2xl border border-blue-800"
            >
              <div className="mb-4 text-blue-300 text-5xl">🛰️</div>
              <h3 className="text-3xl font-semibold mb-3 text-white">
                Adaptive Delivery Planning
              </h3>
              <p className="text-gray-300">
                AI helps route donors, volunteers, and delivery teams
                efficiently so aid arrives quickly and with lower operational
                cost.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-black p-8 rounded-3xl shadow-2xl border border-blue-800"
            >
              <div className="mb-4 text-blue-300 text-5xl">🛡️</div>
              <h3 className="text-3xl font-semibold mb-3 text-white">
                Trust & Safety Intelligence
              </h3>
              <p className="text-gray-300">
                Machine learning monitors donation flow and flags anomalies,
                helping keep our community safe and trusted at every step.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Quotes Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-950 via-blue-950 to-blue-800">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-center mb-12 text-white"
          >
            The Power of Giving
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-black/80 p-8 rounded-3xl shadow-2xl border border-blue-800"
            >
              <p className="text-blue-300 text-xl font-semibold mb-4">
                “The smallest act of kindness is worth more than the grandest
                intention.”
              </p>
              <p className="text-gray-300">
                Every donation matters. CareConnect helps transform that
                kindness into meaningful, measurable outcomes.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-black/80 p-8 rounded-3xl shadow-2xl border border-blue-800"
            >
              <p className="text-blue-300 text-xl font-semibold mb-4">
                “Donations are the currency of hope for communities in need.”
              </p>
              <p className="text-gray-300">
                Our platform turns hope into action by guiding every gift to the
                people who need it most.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-black/80 p-8 rounded-3xl shadow-2xl border border-blue-800"
            >
              <p className="text-blue-300 text-xl font-semibold mb-4">
                “Impact grows faster when generosity meets intelligence.”
              </p>
              <p className="text-gray-300">
                With AI-enabled donation matching, we amplify the reach of every
                contribution and reduce waste across the system.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-center mb-16 text-blue-400"
          >
            Why Choose CareConnect?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-blue-300">
                Transparency & Trust
              </h3>
              <p className="text-gray-300 text-lg mb-4">
                We prioritize transparency in all our operations. Track your
                donations in real-time and see the direct impact of your
                generosity.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Verified NGOs and partners</li>
                <li>• Real-time donation tracking</li>
                <li>• Detailed impact reports</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-blue-300">
                Efficiency & Reach
              </h3>
              <p className="text-gray-300 text-lg mb-4">
                Our streamlined platform ensures your donations reach those in
                need quickly and efficiently, maximizing your impact.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Fast processing and distribution</li>
                <li>• Wide network of NGOs</li>
                <li>• Minimal overhead costs</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-center mb-16 text-white"
          >
            What People Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-white">J</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-300">
                    John Doe
                  </h3>
                  <p className="text-gray-400">Donor</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "CareConnect made it so easy to donate my surplus goods. The
                process was smooth, and I felt the impact immediately!"
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-black p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-white">J</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-300">
                    Jane Smith
                  </h3>
                  <p className="text-gray-400">NGO Partner</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "I love how transparent the platform is. Knowing my monetary
                donation reached the right hands gives me peace of mind."
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-black p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-white">M</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-300">
                    Mike Johnson
                  </h3>
                  <p className="text-gray-400">Community Member</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Thanks to CareConnect, our community received timely support
                during tough times. Grateful for this amazing platform!"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-24 px-4 bg-black">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold mb-16 text-blue-400"
          >
            Our Impact
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-6xl font-bold text-blue-400 mb-2">5+</p>
              <p className="text-gray-300 text-lg">Food Donating NGOs Joined</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-6xl font-bold text-blue-400 mb-2">₹5000+</p>
              <p className="text-gray-300 text-lg">Raised in Donations</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-6xl font-bold text-blue-400 mb-2">5000+</p>
              <p className="text-gray-300 text-lg">People Supported</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-6xl font-bold text-blue-400 mb-2">50+</p>
              <p className="text-gray-300 text-lg">Active Donors</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold mb-6"
          >
            Join the Movement to End Hunger and Poverty
          </motion.h2>
          <p className="text-xl mb-8">
            Donate money, surplus food, or clothes to support NGOs today.
            Bridging generosity to relief.
          </p>
          <motion.a
            href="/login"
            className="inline-block bg-white text-blue-900 py-4 px-8 text-xl rounded-lg hover:bg-gray-100 font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            Get Started Now
          </motion.a>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default LandingPage;
