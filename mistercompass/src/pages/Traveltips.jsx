import React from "react";
import { Link } from "react-router-dom"; // For routing between pages

const TravelTips = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/travel-tips-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative text-center text-white">
          <h1 className="text-5xl font-bold mb-4 animate-pulse">Travel Tips</h1>
          <p className="text-lg mb-6">Get the best tips for a smooth and enjoyable journey around the world! 🌍</p>
        </div>
      </div>

      {/* Travel Tips Section */}
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">Essential Travel Tips</h2>
        <ul className="list-disc list-inside space-y-4">
          <li className="text-lg">Always pack light, and keep your important documents safe.</li>
          <li className="text-lg">Make sure to research your destination for local customs and culture.</li>
          <li className="text-lg">Download offline maps or navigation apps to help you explore without internet access.</li>
          <li className="text-lg">Learn a few phrases in the local language – it goes a long way with locals!</li>
          <li className="text-lg">Book accommodations in advance to secure the best deals.</li>
        </ul>
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="px-6 py-3 bg-blue-500 rounded-lg shadow-lg text-white hover:bg-blue-600 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TravelTips;
