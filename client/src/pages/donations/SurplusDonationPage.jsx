import { useState, useEffect } from "react";
import { useSurplusDonation } from "../../hooks/useSurplusDonation";
import { toast } from "react-hot-toast";

const SurplusDonationPage = () => {
  const {
    createDonation,
    mySurplusDonations,
    getMySurplusDonations,
    loading,
    
  } = useSurplusDonation();

  const [formData, setFormData] = useState({
    type: "Food",
    description: "",
    pickupPreference: "",
    fileUrl: "", // handle file upload later
  });

  useEffect(() => {
    getMySurplusDonations();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createDonation(formData);

    if (result?.meta?.requestStatus === "fulfilled") {
      toast.success("Surplus donation submitted successfully!");
      setFormData({
        type: "Food",
        description: "",
        pickupPreference: "",
        fileUrl: "",
      });
      getMySurplusDonations();
    } else {
      toast.error("Failed to submit donation. Try again.");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-white">Surplus Donation</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-lg shadow-lg space-y-6 max-w-2xl"
      >
        <div>
          <label className="block mb-1 text-gray-400">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded-lg"
          >
            <option value="Food">Food</option>
            <option value="Clothes">Clothes</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-gray-400">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded-lg"
            rows="4"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-400">Pickup Preference</label>
          <input
            type="text"
            name="pickupPreference"
            value={formData.pickupPreference}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded-lg"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition"
        >
          {loading ? "Submitting..." : "Submit Donation"}
        </button>
      </form>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-white">My Donations</h2>

        {mySurplusDonations?.length === 0 ? (
          <p className="text-gray-400">No donations yet.</p>
        ) : (
          <ul className="space-y-4">
            {mySurplusDonations.map((donation) => (
              <li
                key={donation._id}
                className="bg-gray-800 p-4 rounded-lg shadow"
              >
                <p className="text-white font-semibold">{donation.type}</p>
                <p className="text-gray-400">{donation.description}</p>
                <p className="text-sm text-gray-500">
                  Status: {donation.status}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SurplusDonationPage;
