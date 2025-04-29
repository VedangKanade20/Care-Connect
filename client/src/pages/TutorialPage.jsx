import React from "react";
import { Link } from "react-router-dom";

const TutorialPage = () => {
  return (
    <div className="bg-slate-800 text-slate-100 px-6 py-4 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">How to Donate</h1>
        <div className="bg-white rounded-lg p-6 shadow-lg text-black">
          <h2 className="text-xl font-semibold mb-4">Step-by-Step Guide</h2>
          <ol className="list-decimal list-inside">
            <li className="mb-4">
              <h3 className="text-lg font-bold">Create an Account</h3>
              <p>
                If you don't have an account, sign up on the{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  login page
                </Link>
                .
              </p>
            </li>
            <li className="mb-4">
              <h3 className="text-lg font-bold">Navigate to the Dashboard</h3>
              <p>
                Once logged in, go to the{" "}
                <Link to="/dashboard" className="text-blue-600 hover:underline">
                  Dashboard
                </Link>
                .
              </p>
            </li>
            <li className="mb-4">
              <h3 className="text-lg font-bold">Select Donation Type</h3>
              <p>
                Choose the type of donation you want to make (e.g., food,
                clothing, monetary).
              </p>
            </li>
            <li className="mb-4">
              <h3 className="text-lg font-bold">Provide Donation Details</h3>
              <p>
                Fill in the required information about your donation (e.g.,
                quantity, condition).
              </p>
            </li>
            <li className="mb-4">
              <h3 className="text-lg font-bold">Submit Donation</h3>
              <p>Click the "Submit" button to complete your donation.</p>
            </li>
          </ol>
          <div className="mt-6 text-right">
            <Link
              to="/"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;
