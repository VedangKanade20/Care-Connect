import { useState } from "react";
import { toast } from "react-hot-toast";
import { useSurplusDonation } from "../../hooks/useSurplusDonation";

const SurplusDonationPage = () => {
  const { createDonation, loading } = useSurplusDonation();

  // State to manage form data
  const [formData, setFormData] = useState({
    type: "Food", // Default value for the dropdown
    description: "",
    pickupPreference: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the `createDonation` function with the form data
      await createDonation(formData).unwrap();
      toast.success("Surplus donation submitted successfully!");

      // Reset the form after successful submission
      setFormData({
        type: "Food", // Reset to default value
        description: "",
        pickupPreference: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit surplus donation.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Donate Surplus Items</h1>

      <div className="border border-slate-700 rounded-lg p-4 shadow-md mt-6 bg-slate-800">
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
