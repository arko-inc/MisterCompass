import React from 'react';
import Footer from '../../../components/Footer';

const Asia = () => {
  return (
    <div className="container mx-auto p-6">

      <header className="bg-purple-600 text-white p-6 rounded-t-lg">
        <h1 className="text-5xl font-against">Adventures in Asia</h1>
        <p className="text-lg mt-2">Exploring the Vast and Diverse Continent</p>
      </header>
      
      <main className="bg-white p-6 rounded-b-lg shadow-lg">
        <section className="mb-8">
          <h2 className="text-4xl font-against">Introduction</h2>
          <p className="mt-2 text-gray-700">
            Asia, the largest continent, is a land of incredible diversity, from the towering peaks of the Himalayas 
            to the sprawling metropolises of Tokyo and Shanghai. It is home to an array of cultures, languages, 
            and histories.
          </p>
        </section>

        <section className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-4xl font-against">Natural Beauty</h2>
            <img src="https://via.placeholder.com/400x300" alt="Asian Landscape" className="my-4 rounded-md shadow-md"/>
            <p className="mt-2 text-gray-700">
              From lush rainforests to arid deserts, Asia's landscapes are as diverse as its cultures. Explore the 
              natural beauty that spans the continent.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-against">Cultural Heritage</h2>
            <img src="https://via.placeholder.com/400x300" alt="Asian Culture" className="my-4 rounded-md shadow-md"/>
            <p className="mt-2 text-gray-700">
              Asia's rich cultural heritage is evident in its historic temples, vibrant festivals, and delicious cuisine. 
              Discover the traditions that have shaped the continent.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-against">Modern Marvels</h2>
            <img src="https://via.placeholder.com/400x300" alt="Modern Asia" className="my-4 rounded-md shadow-md"/>
            <p className="mt-2 text-gray-700">
              The continent is also home to some of the world's most dynamic and futuristic cities, where cutting-edge 
              technology meets ancient tradition.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-against">Travel Tips</h2>
          <p className="mt-2 text-gray-700">
            - Best Time to Visit: Varies widely; generally spring and autumn are best.
            - Must-See Places: Tokyo, Beijing, Bangkok, Delhi.
            - Local Cuisine: Sushi, Dim Sum, Pho, Curry.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Asia;
