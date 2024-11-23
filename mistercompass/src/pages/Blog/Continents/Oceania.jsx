import React from 'react';
import Footer from '../../../components/Footer';

const Oceania = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="bg-teal-600 text-white p-6 rounded-t-lg">
        <h1 className="text-5xl font-against">Exploring Oceania</h1>
        <p className="text-lg mt-2">Discover the Islands and Cultures of Oceania</p>
      </header>
      
      <main className="bg-white p-6 rounded-b-lg shadow-lg">
        <section className="mb-8">
          <h2 className="text-4xl font-against">Introduction</h2>
          <p className="mt-2 text-gray-700">
            Oceania, a region made up of numerous islands in the Pacific Ocean, is known for its diverse cultures, 
            stunning beaches, and vibrant marine life. From the coral reefs of Fiji to the ancient traditions of 
            Papua New Guinea, Oceania offers a unique and fascinating experience.
          </p>
        </section>

        <section className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-4xl font-against">Natural Beauty</h2>
            <img src="https://via.placeholder.com/400x300" alt="Oceania Landscape" className="my-4 rounded-md shadow-md"/>
            <p className="mt-2 text-gray-700">
              Explore the natural beauty of Oceania, from its pristine beaches and lush rainforests to its vibrant 
              coral reefs and unique wildlife. The region is a paradise for nature lovers and adventure seekers.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-against">Cultural Heritage</h2>
            <img src="https://via.placeholder.com/400x300" alt="Oceania Culture" className="my-4 rounded-md shadow-md"/>
            <p className="mt-2 text-gray-700">
              Oceania's cultural heritage is rich with traditions that have been passed down through generations. 
              Discover the unique customs, music, dance, and art that define the many cultures of the region.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-against">Marine Wonders</h2>
            <img src="https://via.placeholder.com/400x300" alt="Oceania Marine Life" className="my-4 rounded-md shadow-md"/>
            <p className="mt-2 text-gray-700">
              The marine life in Oceania is unparalleled, with some of the world's best diving and snorkeling spots. 
              Explore the underwater wonders and vibrant marine ecosystems that make this region a haven for divers.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-against">Travel Tips</h2>
          <p className="mt-2 text-gray-700">
            - Best Time to Visit: Varies by location; generally dry season is best.
            - Must-See Places: Great Barrier Reef, Fiji, New Zealand, Samoa.
            - Local Cuisine: Enjoy dishes like Hangi, Kokoda, and Pavlova.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Oceania;
