import React from 'react';
import Footer from '../../../components/Footer';

const SouthAmerica = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="bg-orange-600 text-white p-6 rounded-t-lg">
        <h1 className="text-5xl font-against">Discover South America</h1>
        <p className="text-lg mt-2">A Continent of Vibrant Cultures and Stunning Landscapes</p>
      </header>
      
      <main className="bg-white p-6 rounded-b-lg shadow-lg">
        <section className="mb-8">
          <h2 className="text-4xl font-against">Introduction</h2>
          <p className="mt-2 text-gray-700">
            South America is a continent of incredible diversity, from the Amazon rainforest to the Andes mountains 
            and vibrant cities like Rio de Janeiro and Buenos Aires. It is known for its rich cultures, passionate 
            people, and stunning natural beauty.
          </p>
        </section>

        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-4xl font-against">Natural Wonders</h2>
            <img src="https://via.placeholder.com/800x400" alt="South American Nature" className="my-4 rounded-md shadow-md"/>
            <p className="mt-2 text-gray-700">
              South America is home to some of the world's most awe-inspiring natural wonders, including the Amazon 
              rainforest, the Andes mountains, and the Atacama Desert. Explore the breathtaking landscapes that make 
              this continent a nature lover's paradise.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-against">Cultural Riches</h2>
            <img src="https://via.placeholder.com/800x400" alt="South American Culture" className="my-4 rounded-md shadow-md"/>
            <p className="mt-2 text-gray-700">
              The continent's cultural heritage is a vibrant tapestry of indigenous traditions, colonial influences, 
              and modern innovations. Experience the music, dance, art, and festivals that bring South America's 
              cultures to life.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-against">Travel Tips</h2>
          <p className="mt-2 text-gray-700">
            - Best Time to Visit: Varies by region; generally dry season is best.
            - Must-See Places: Rio de Janeiro, Machu Picchu, Buenos Aires, Galapagos Islands.
            - Local Cuisine: Enjoy dishes like Feijoada, Arepas, Ceviche, and Empanadas.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SouthAmerica;
