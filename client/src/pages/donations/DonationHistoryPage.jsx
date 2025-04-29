import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useMonetaryDonation } from "../../hooks/useMonetaryDonation";
import { useSurplusDonation } from "../../hooks/useSurplusDonation";

const DonationHistoryPage = () => {
  const { authUser } = useSelector((state) => state.auth);
  const {
    myMonetaryDonations,
    getMyMonetaryDonations,
    loading: monetaryLoading,
    error: monetaryError,
  } = useMonetaryDonation();
  const { mySurplusDonations, getMySurplusDonations } = useSurplusDonation();

  // Fetch donations once user is logged in
  useEffect(() => {
    if (authUser) {
      getMyMonetaryDonations();
      getMySurplusDonations();
    }
  }, [authUser]);

  return (
    <div className="min-h-screen bg-black text-white px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-400">
          My Donation History
        </h1>

        {/* Monetary Donations */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            Monetary Donations
          </h2>
          {monetaryLoading && (
            <p className="text-gray-400">Loading donations...</p>
          )}
          {monetaryError && <p className="text-red-500">{monetaryError}</p>}
          {!monetaryLoading &&
            !monetaryError &&
            myMonetaryDonations.length === 0 && (
              <p className="text-gray-400">No monetary donations yet.</p>
            )}
          {!monetaryLoading &&
            !monetaryError &&
            myMonetaryDonations.length > 0 && (
              <ul className="space-y-2">
                {myMonetaryDonations.map((donation) => (
                  <li
                    key={donation._id}
                    className="bg-slate-800 p-4 rounded shadow"
                  >
                    ₹{donation.amount} - {donation.status || "Pending"} (
                    {new Date(donation.createdAt).toLocaleDateString()})
                  </li>
                ))}
              </ul>
            )}
        </div>

        {/* Surplus Donations (Unchanged for now) */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-pink-400">
            Surplus Donations
          </h2>
          {mySurplusDonations?.length === 0 ? (
            <p className="text-gray-400">No surplus donations yet.</p>
          ) : (
            <ul className="space-y-2">
              {mySurplusDonations.map((donation) => (
                <li
                  key={donation._id}
                  className="bg-slate-800 p-4 rounded shadow"
                >
                  {donation.type} — {donation.description.slice(0, 40)}...
                  <br />
                  <span className="text-sm text-gray-400">
                    Status: {donation.status || "Pending"} |{" "}
                    {new Date(donation.createdAt).toLocaleDateString()}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonationHistoryPage;
