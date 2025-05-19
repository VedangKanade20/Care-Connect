import { useState } from "react";
import { toast } from "react-hot-toast";
import { useMonetaryDonation } from "../../hooks/useMonetaryDonation"; // (We will create this)

const MonetaryDonationPage = () => {
  const { createDonation, loading } = useMonetaryDonation();
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || amount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    try {
      await createDonation({ amount }).unwrap(); // placeholder, until payment comes
      toast.success("Monetary donation created successfully!");
      setAmount("");
    } catch (error) {
      console.error(error);
      toast.error("Donation failed. Try again.");
    }
  };

  return (
    <div
      className="p-6"
      // style={{
      //   backgroundImage: `url('https://d1umd1ua9snads.cloudfront.net/images/articles/_bannerWebp/72396/bigstock-Man-Holding-Money-Jar-With-Don-431800991.webp')`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <h1 className="text-2xl font-bold mb-6">Donate Money</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount (INR)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          disabled={loading}
        >
          {loading ? "Processing..." : "Donate Now"}
        </button>
      </form>
    </div>
  );
};

export default MonetaryDonationPage;
