import React from "react";

const CountryPage = ({ continent, country }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to {country}, {continent}!
      </h1>
      <p>
        Discover the beauty, culture, and attractions of {country}. Explore its
        landmarks, learn about its history, and plan your next adventure!
      </p>
      <img
        src={`https://source.unsplash.com/800x400/?${country}`}
        alt={country}
        className="rounded-lg shadow-md mt-6"
      />
    </div>
  );
};

export default CountryPage;
