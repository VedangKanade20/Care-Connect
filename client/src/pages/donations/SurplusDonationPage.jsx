import { useState } from "react";
import { toast } from "react-hot-toast";
import { useSurplusDonation } from "../../hooks/useSurplusDonation";

const SurplusDonationPage = () => {
  const { createDonation, loading } = useSurplusDonation();

  const [formData, setFormData] = useState({
    type: "Food",
    description: "",
    pickupPreference: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createDonation(formData);

      if (result?.meta?.requestStatus === "fulfilled") {
        toast.success("Surplus donation submitted successfully!");
        setFormData({
          type: "Food",
          description: "",
          pickupPreference: "",
        });
      } else {
        toast.error("Failed to submit surplus donation.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <div
      className="p-6 min-h-screen"
      style={{
        backgroundImage: `url('https://nss-main.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/03/07180041/purnimalandingfoodpage.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-2xl text-center font-bold mb-6 bg-slate-800 w-fit">
        Donate Surplus Items
      </h1>

      <div
        className="border border-slate-700 rounded-lg p-4 shadow-md mt-6 bg-slate-800"
        style={{ opacity: 0.8 }}
      >
        <h2 className="text-xl font-semibold text-white">
          Surplus Donation Form
        </h2>
        <form onSubmit={handleSubmit} className="mt-4">
          {/* Dropdown for Item Type */}
          <div className="mb-4">
            <label className="block text-slate-300 mb-1">Item Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-2 border border-slate-600 rounded-md bg-slate-700 text-white"
              required
            >
              <option value="Food">Food</option>
              <option value="Clothes">Clothes</option>
            </select>
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label className="block text-slate-300 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-slate-600 rounded-md bg-slate-700 text-white"
              rows="3"
              placeholder="Describe the surplus items (e.g., At a party we have kept food for 15-20 people)"
              required
            ></textarea>
          </div>

          {/* Pickup Preference Field */}
          <div className="mb-4">
            <label className="block text-slate-300 mb-1">
              Pickup Preference
            </label>
            <input
              type="text"
              name="pickupPreference"
              value={formData.pickupPreference}
              onChange={handleChange}
              className="w-full p-2 border border-slate-600 rounded-md bg-slate-700 text-white"
              placeholder="e.g., 27th April around 8pm"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-emerald-600 hover:bg-emerald-500 text-white py-2 px-4 rounded-md transition-colors"
          >
            {loading ? "Submitting..." : "Submit Donation"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SurplusDonationPage;
