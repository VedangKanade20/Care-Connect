import React from "react";
import { Link } from "react-router-dom";

const NewsFeedPage = () => {
  return (
    <div className="bg-slate-800 text-slate-100 px-6 py-4 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">NGO News Feed</h1>
        <div className="bg-white rounded-lg p-6 shadow-lg text-black">
          <h2 className="text-xl font-semibold mb-4">
            Latest NGO Trends and News
          </h2>
          <ul className="list-disc list-inside">
            <li className="mb-4">
              <a
                href="https://humana-india.org/community-development/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                New Initiatives in Community Development
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://sambhavfoundation.org/blog/the-role-of-giving-in-community-building/#:~:text=Every%20act%20of%20giving%2C%20no,seen%2C%20supported%2C%20and%20connected."
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Impact of Recent Donations on Local Communities
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://insider.in/all-fundraiser-events-in-mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Upcoming Fundraising Events
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://www.wateraid.org/in/donate/heroes-of-change"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Success Stories from Recent Projects
              </a>
            </li>
          </ul>
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

export default NewsFeedPage;
