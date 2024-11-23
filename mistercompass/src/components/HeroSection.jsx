import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "/images/finland.jpg",
    "/images/switzerland.jpg",
    "/images/iceland.jpg",
  ]; // Add your image paths
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change background every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative text-center text-white">
  <h1 className="text-5xl font-bold font-against mb-4 animate-pulse md:text-xl">
    Welcome to <span className="animate-inflate-deflate ">MisterCompass</span>
  </h1>
  <p className="md:text-lg mb-6 font-against animate-pulse">
    Explore the world’s most beautiful destinations with us.
  </p>
  <button href="/Home" className="px-6 py-3 rounded-lg shadow-lg font-against text-white hover:scale-105 transform animate-pulse  transition-transform duration-300 ease-in-out bg-white/5 backdrop-blur-md border border-white">
  Start Your Journey
</button>



</div>

    </div>
  );
};

export default HeroSection;
