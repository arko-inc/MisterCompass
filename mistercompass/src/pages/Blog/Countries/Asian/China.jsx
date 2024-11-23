import React from "react";
import Footer from "../../../../components/Footer";

const China = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-red-600 py-6 mb-8 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center">Discover China</h1>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <article className="mb-10">
          <img
            src="/images/china-great-wall.jpg"
            alt="Great Wall of China"
            className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
          />
          <h2 className="text-3xl font-semibold mb-4">The Great Wall of China</h2>
          <p className="text-lg leading-relaxed">
            The Great Wall of China is one of the most remarkable architectural feats in history. It stretches over 13,000 miles and was built to protect China from invasions. The wall offers stunning views and a glimpse into ancient Chinese history.
          </p>
        </article>

        <article className="mb-10">
          <img
            src="/images/china-forbidden-city.jpg"
            alt="Forbidden City"
            className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
          />
          <h2 className="text-3xl font-semibold mb-4">The Forbidden City</h2>
          <p className="text-lg leading-relaxed">
            The Forbidden City in Beijing is a sprawling palace complex that served as the imperial palace for over 500 years. It is a UNESCO World Heritage Site and a symbol of China's cultural heritage.
          </p>
        </article>

        <article className="mb-10">
          <img
            src="/images/china-terracotta-army.jpg"
            alt="Terracotta Army"
            className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
          />
          <h2 className="text-3xl font-semibold mb-4">The Terracotta Army</h2>
          <p className="text-lg leading-relaxed">
            The Terracotta Army in Xi'an is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. This archaeological wonder offers a fascinating insight into the military history and craftsmanship of ancient China.
          </p>
        </article>
      </main>

     <Footer/>
    </div>
  );
};

export default China;
