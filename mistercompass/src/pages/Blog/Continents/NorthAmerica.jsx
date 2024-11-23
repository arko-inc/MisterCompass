import React from 'react';
import Footer from '../../../components/Footer';

const NorthAmerica = () => {
  return (
    <div className="container mx-auto p-6">

      <header className="bg-red-700 text-white p-6 rounded-t-lg">
        <h1 className="text-5xl font-against">Discovering North America</h1>
        <p className="text-lg mt-2">A Land of Diverse Landscapes and Cultures</p>
      </header>
      
      <main className="bg-white p-6 rounded-b-lg shadow-lg">
        <section className="mb-8">
          <h2 className="text-4xl font-against">Introduction</h2>
          <p className="mt-2 text-gray-700">
            North America, a continent of breathtaking natural beauty and dynamic cities, offers a wealth of 
            experiences. From the skyscrapers of New York to the natural wonders of the Grand Canyon, North 
            America is a diverse and vibrant place.
          </p>
        </section>

        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-4xl font-against">Natural Wonders</h2>
            <img src="https://via.placeholder.com/800x400" alt="North American Nature" className="my-4 rounded-md shadow-md"/>
            <p className="mt-2 text-gray-700">
              Explore the diverse natural landscapes of North America, from towering mountains to expansive 
              national parks and stunning coastlines.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-against">Cultural Diversity</h2>
            <img src="https://via.placeholder.com/800x400" alt="North American Culture" className="my-4 rounded-md shadow-md"/>
            <p className="mt-2 text-gray-700">
              The continent is a melting pot of cultures, with rich traditions in music, art, and cuisine 
              that reflect its diverse population.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-against">Travel Tips</h2>
          <p className="mt-2 text-gray-700">
            - Best Time to Visit: Varies; generally spring and fall for pleasant weather.
            - Must-See Places: New York, Los Angeles, Toronto, Mexico City.
            - Local Cuisine: Burgers, Tacos, Poutine, BBQ.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NorthAmerica;
