import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";

const SouthAfrica = () => {
  const images = [
    "/images/southafrica1.jpg",
    "/images/southafrica2.jpg",
    "/images/southafrica3.jpg",
  ]; // Add your image paths
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change background every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative text-center text-white">
          <h1 className="text-5xl font-bold mb-4 animate-pulse">
            Welcome to <span className="animate-inflate-deflate">South Africa</span>
          </h1>
          <p className="text-lg mb-6">
            Discover the beauty, adventure, and culture of the Rainbow Nation 🌈
          </p>
          <button
            className="px-6 py-3 rounded-lg shadow-lg text-white hover:scale-105 transform transition-transform duration-300 ease-in-out bg-gradient-to-r from-red-500 to-pink-500 bg-opacity-20 backdrop-blur-md border border-white/20"
          >
            Start Your Journey
          </button>
        </div>
      </div>
            {/* Highlights */}
            <section className="bg-[#141834] py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-300 mb-6 text-center">Top Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Highlight 1 */}
            <div className="bg-[#1C325B]  shadow-lg rounded-lg overflow-hidden hover:scale-110 transition duration-700">
              <img
                src="/images/tablemountain.jpg"
                alt="Table Mountain"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-300">Table Mountain</h3>
                <p className="text-gray-300">
                  Take a cable car ride or hike to the top of this iconic mountain for stunning views of Cape Town.
                </p>
              </div>
            </div>
            {/* Highlight 2 */}
            <div className="bg-[#1C325B] shadow-lg rounded-lg overflow-hidden hover:scale-110 transition duration-700">
              <img
                src="/images/kruger.jpg"
                alt="Kruger National Park"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-300">Kruger National Park</h3>
                <p className="text-gray-300">
                  Experience a thrilling safari and spot the Big Five: lion, leopard, rhino, elephant, and buffalo.
                </p>
              </div>
            </div>
            {/* Highlight 3 */}
            <div className="bg-[#1C325B] shadow-lg rounded-lg overflow-hidden hover:scale-110 transition duration-700">
              <img
                src="/images/capetown.jpg"
                alt="Cape Town"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-300">Cape Town</h3>
                <p className="text-gray-300">
                  Explore the vibrant streets, beautiful beaches, and rich history of South Africa's Mother City.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SouthAfrica;
