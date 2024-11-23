import React from 'react';
import Footer from '../../../components/Footer';

const Africa = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="bg-green-700 text-white p-6 rounded-t-lg">
        <h1 className="text-5xl font-against">Exploring Africa</h1>
        <p className="text-lg mt-2">Discover the Richness and Diversity of the African Continent</p>
      </header>
      
      <main className="bg-white p-6 rounded-b-lg shadow-lg">
        <section className="mb-8">
          <h2 className="text-4xl font-against">Introduction</h2>
          <p className="mt-2 text-gray-700">
            Africa, the second-largest continent, is renowned for its diverse cultures, stunning landscapes, 
            and vibrant wildlife. From the Sahara Desert to the Cape of Good Hope, Africa offers a wealth 
            of experiences and natural beauty.
          </p>
        </section>

        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-4xl font-against">Cultural Riches</h2>
            <img src="https://via.placeholder.com/800x400" alt="African Culture" className="my-4 rounded-md shadow-md"/>
            <p className="mt-2 text-gray-700">
              Africa is a melting pot of cultures with diverse traditions, music, dance, and art. Explore the 
              unique heritage of different regions and the warmth of African hospitality.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-against">Natural Wonders</h2>
            <img src="https://via.placeholder.com/800x400" alt="African Nature" className="my-4 rounded-md shadow-md"/>
            <p className="mt-2 text-gray-700">
              Africa boasts some of the world's most breathtaking landscapes, from savannas and rainforests to 
              mountains and deserts. Discover the incredible wildlife and scenic beauty that make Africa a 
              must-visit destination.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-against">Travel Tips</h2>
          <p className="mt-2 text-gray-700">
            - Best Time to Visit: Varies by region; generally dry season is best.
            - Must-See Places: Serengeti, Victoria Falls, Cape Town, Maasai Mara.
            - Local Cuisine: Try dishes like Jollof Rice, Bunny Chow, and Injera.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Africa;
