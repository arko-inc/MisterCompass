import React from 'react';
import Footer from '../../../components/Footer';

const Europe = () => {
  return (
    <div className="container mx-auto p-6">

      <header className="bg-blue-600 text-white p-6 rounded-t-lg">
        <h1 className="text-5xl font-against">Exploring Europe</h1>
        <p className="text-lg mt-2">A Journey Through History and Modernity</p>
      </header>
      
      <main className="bg-white p-6 rounded-b-lg shadow-lg">
        <section className="mb-8">
          <h2 className="text-4xl font-against">Introduction</h2>
          <p className="mt-2 text-gray-700">
            Europe, a continent rich in history, culture, and art, is a tapestry of ancient ruins and modern 
            innovations. From the historic streets of Rome to the vibrant atmosphere of Berlin, Europe is a 
            treasure trove of experiences.
          </p>
        </section>

        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-4xl font-against">Historic Sites</h2>
            <img src="https://via.placeholder.com/800x400" alt="European History" className="my-4 rounded-md shadow-md"/>
            <p className="mt-2 text-gray-700">
              Discover the historic landmarks that have shaped Europe, from the Colosseum in Rome to the castles 
              of the Loire Valley.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-against">Cultural Vibrancy</h2>
            <img src="https://via.placeholder.com/800x400" alt="European Culture" className="my-4 rounded-md shadow-md"/>
            <p className="mt-2 text-gray-700">
              Experience the cultural vibrancy of Europe, with its diverse festivals, cuisines, and artistic 
              traditions that span across countries.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-against">Travel Tips</h2>
          <p className="mt-2 text-gray-700">
            - Best Time to Visit: Summer for festivals and winter for Christmas markets.
            - Must-See Places: Paris, Rome, London, Barcelona.
            - Local Cuisine: Pasta, Paella, Croissants, Fish and Chips.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Europe;
