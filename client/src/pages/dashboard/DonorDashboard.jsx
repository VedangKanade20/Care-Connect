import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const DonorDashboard = () => {
  useEffect(() => {
    toast.success("Welcome to Donor Dashboard!");
  }, []);

  const handleMakePayment = () => {
    toast.success("Payment processed!");
  };

  return (
    <div
      className="p-6 bg-slate-900 text-slate-100"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl font-bold text-white mb-2">
        Welcome to Donor Dashboard
      </h1>
      <p className="text-slate-300 text-lg">
        Start helping by donating surplus goods or monetary support.
      </p>

      {/* Surplus Donation Section */}
      <div
        className="border border-slate-700 rounded-lg p-4 shadow-md mt-6 bg-slate-800"
        style={{ opacity: 0.8 }}
      >
        <h2 className="text-xl font-semibold text-white">Surplus Donations</h2>
        <p className="mt-2 text-slate-300">
          Surplus donations involve contributing excess goods such as food,
          clothes, or other essentials that you no longer need. These donations
          help support communities in need by redistributing resources that
          might otherwise go to waste.
        </p>
        <Link to="/surplus-donation">
          <button className="mt-4 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md transiti</p>on-colors">
            Donate Surplus Goods
          </button>
        </Link>
      </div>

      {/* Monetary Donation Section */}
      <div
        className="border border-slate-700 rounded-lg p-4 shadow-md mt-6 bg-slate-800"
        style={{ opacity: 0.8 }}
      >
        <h2 className="text-xl font-semibold text-white">Monetary Donations</h2>
        <p className="mt-2 text-slate-300">
          Monetary donations are financial contributions that help fund
          essential programs, services, and resources for those in need. Your
          support can make a significant impact by providing direct financial
          assistance to our initiatives.
        </p>
        <Link to="/monetary-donation">
          <button className="mt-4 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md transition-colors">
            Donate Money
          </button>
        </Link>
      </div>

      <div
        className="border border-slate-700 rounded-lg p-4 shadow-md mt-6 bg-slate-800"
        style={{ opacity: 0.8 }}
      >
        <h2 className="text-xl font-semibold text-white">Payment Processing</h2>
        <button
          onClick={handleMakePayment}
          className="mt-4 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md transition-colors"
        >
          Process Payment
        </button>
      </div>
    </div>
  );
};

export default DonorDashboard;
