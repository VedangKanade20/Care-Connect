import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-400 mb-8">
          About CareConnect
        </h1>

        <section className="mb-12 bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Our Mission
          </h2>
          <p className="text-slate-300 leading-relaxed">
            CareConnect bridges the gap between generous donors and communities
            in need. We provide a platform where surplus resources can find
            their way to those who need them most, reducing waste while helping
            vulnerable populations.
          </p>
        </section>

        <section className="mb-12 bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-semibold text-white mb-4">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-700 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-blue-400 mb-2">
                1. Donate
              </h3>
              <p className="text-slate-300">
                Individuals and organizations donate surplus goods or financial
                contributions.
              </p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-blue-400 mb-2">
                2. Connect
              </h3>
              <p className="text-slate-300">
                Our system matches donations with verified NGOs and community
                programs.
              </p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-blue-400 mb-2">
                3. Deliver
              </h3>
              <p className="text-slate-300">
                Resources are distributed to those in need through our partner
                network.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Team</h2>
          <p className="text-slate-300 mb-6">
            Founded in 2023, CareConnect is developed by a team of social
            entrepreneurs, technologists, and community organizers committed to
            creating systemic change.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-700 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-white mb-2">Partners</h3>
              <ul className="text-slate-300 list-disc pl-5 space-y-1">
                <li>Food Rescue Network</li>
                <li>Global Humanitarian Foundation</li>
                <li>Community Support Alliance</li>
              </ul>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-white mb-2">
                Impact (2023)
              </h3>
              <ul className="text-slate-300 list-disc pl-5 space-y-1">
                <li>1,200+ donations processed</li>
                <li>85+ partner organizations</li>
                <li>15,000+ lives impacted</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center mt-8">
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
