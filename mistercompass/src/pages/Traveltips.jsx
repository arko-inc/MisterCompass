import React, { useState } from "react";


const TravelTips = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const tips = [
    {
      category: "Packing",
      icon: "🎒",
      details: [
        "Roll your clothes to save space.",
        "Pack versatile outfits to mix and match.",
        "Carry a compact first-aid kit.",
      ],
    },
    {
      category: "Budgeting",
      icon: "💰",
      details: [
        "Set a daily budget and stick to it.",
        "Use local transportation to save costs.",
        "Look for free walking tours.",
      ],
    },
    {
      category: "Safety",
      icon: "🛡️",
      details: [
        "Keep a copy of your travel documents.",
        "Avoid showing valuables in crowded places.",
        "Use a money belt for added security.",
      ],
    },
    {
      category: "Cultural Etiquette",
      icon: "🌍",
      details: [
        "Learn basic phrases in the local language.",
        "Research cultural norms before visiting.",
        "Always ask permission before taking photos.",
      ],
    },
    {
      category: "Tech Tips",
      icon: "💻",
      details: [
        "Download offline maps in advance.",
        "Carry a portable power bank.",
        "Use secure Wi-Fi networks when possible.",
      ],
    },
  ];

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-against">
      {/* Hero Section */}
      <div className="bg-white shadow-md animate__animated animate__fadeIn">
        <div className="container mx-auto text-center py-16 px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 transition-transform transform hover:scale-105">
            Travel Tips for Smart Explorers
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Unlock the secrets to traveling like a pro! Discover tips on packing, budgeting, safety, and more.
          </p>
        </div>
      </div>

      {/* Tips Categories */}
      <div className="container mx-auto py-16 px-6 animate__animated animate__fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Explore Travel Wisdom by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div
                className="p-6 cursor-pointer flex items-center justify-between transition-all duration-300"
                onClick={() => toggleCategory(index)}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{tip.icon}</span>
                  <h3 className="text-xl font-semibold">{tip.category}</h3>
                </div>
                <button className="text-gray-400 transition-transform transform hover:scale-110">
                  {activeCategory === index ? "▲" : "▼"}
                </button>
              </div>
              {activeCategory === index && (
                <div className="p-6 border-t border-gray-200">
                  <ul className="space-y-4">
                    {tip.details.map((detail, i) => (
                      <li
                        key={i}
                        className="text-gray-700 transition-opacity opacity-100 hover:opacity-80"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-100 py-16 animate__animated animate__fadeIn">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want More Travel Tips?
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for exclusive travel tips, hacks, and destination inspiration.
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TravelTips;
