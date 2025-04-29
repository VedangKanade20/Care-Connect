import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useMonetaryDonation } from "../../hooks/useMonetaryDonation";
import { useSurplusDonation } from "../../hooks/useSurplusDonation";

const ProfilePage = () => {
  const { authUser } = useSelector((state) => state.auth);
  const { myMonetaryDonations, getMyMonetaryDonations } = useMonetaryDonation();
  const { mySurplusDonations, getMySurplusDonations } = useSurplusDonation();

  useEffect(() => {
    if (authUser) {
      getMyMonetaryDonations();
      getMySurplusDonations();
    }
  }, [authUser]);

  return (
    <div className="bg-slate-800 text-slate-100 px-6 py-4 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">Profile</h1>

        <div className="bg-white rounded-lg p-6 shadow-lg text-black mb-8">
          <h2 className="text-xl font-semibold mb-4">User Information</h2>
          <p>
            <strong>Name:</strong> {authUser?.name || "N/A"}
          </p>
          <p>
            <strong>Email:</strong> {authUser?.email || "N/A"}
          </p>
          <p>
            <strong>Role:</strong> {authUser?.role || "N/A"}
          </p>
          {authUser?.staffType && (
            <p>
              <strong>Staff Type:</strong> {authUser.staffType}
            </p>
          )}

          <div className="mt-6 flex justify-between gap-4 flex-wrap">
            <Link
              to="/dashboard"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Back to Dashboard
            </Link>
            <Link
              to="/"
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-[#131212] group hover:-translate-y-1 duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* 🔥 Donation Summary Section */}
        <div className="bg-white rounded-lg p-6 shadow-lg text-black">
          <h2 className="text-xl font-semibold mb-4">Recent Donations</h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-green-600 mb-2">
              Monetary Donations
            </h3>
            {myMonetaryDonations?.length === 0 ? (
              <p className="text-gray-600">No donations yet.</p>
            ) : (
              <ul className="list-disc pl-5 space-y-1">
                {myMonetaryDonations.slice(0, 3).map((donation) => (
                  <li key={donation._id}>
                    ₹{donation.amount} — {donation.status}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-pink-600 mb-2">
              Surplus Donations
            </h3>
            {mySurplusDonations?.length === 0 ? (
              <p className="text-gray-600">No donations yet.</p>
            ) : (
              <ul className="list-disc pl-5 space-y-1">
                {mySurplusDonations.slice(0, 3).map((donation) => (
                  <li key={donation._id}>
                    {donation.type} — {donation.status}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* 🔗 View All Donations */}
          <div className="mt-6 text-right">
            <Link
              to="/donation-history"
              className="text-blue-600 hover:underline"
            >
              View Full Donation History →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
