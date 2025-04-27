import { useEffect } from "react";
import { toast } from "react-hot-toast";

const DonorDashboard = () => {
  useEffect(() => {
    toast.success("Welcome to Donor Dashboard!");
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">
        Welcome to Donor Dashboard
      </h1>
      <p className="mt-4 text-gray-400">
        Here you can manage your surplus and monetary donations.
      </p>
    </div>
  );
};

export default DonorDashboard;
