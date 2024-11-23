import React from 'react';
import Footer from '../../../../components/Footer';
const Japan = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="bg-red-600 text-white p-6 rounded-t-lg">
        <h1 className="text-5xl font-against">Discovering Japan</h1>
        <p className="text-lg mt-2">Experience the Beauty and Culture of the Land of the Rising Sun</p>
      </header>
      
      <main className="bg-white p-6 rounded-b-lg shadow-lg">
        <section className="mb-8">
          <h2 className="text-4xl font-against">Introduction</h2>
          <p className="mt-2 text-gray-700">
            Japan, an island nation in East Asia, is known for its rich culture, historical landmarks, 
            and advanced technology. From the bustling city of Tokyo to the serene temples of Kyoto, 
            Japan offers a unique blend of tradition and modernity.
          </p>
        </section>

        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-4xl font-against">Cultural Heritage</h2>
            <img src="https://via.placeholder.com/800x400" alt="Japanese Culture" className="my-4 rounded-md shadow-md"/>
            <p className="mt-2 text-gray-700">
              Japan's cultural heritage includes its world-famous cuisine, traditional arts, and festivals. 
              Witness the beauty of cherry blossoms in spring and the vibrant festivals that take place all year round.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-against">Modern Marvels</h2>
            <img src="https://via.placeholder.com/800x400" alt="Modern Japan" className="my-4 rounded-md shadow-md"/>
            <p className="mt-2 text-gray-700">
              Explore Japan's cutting-edge technology and architecture. From high-speed bullet trains to futuristic 
              skyscrapers, Japan is at the forefront of innovation.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-against">Travel Tips</h2>
          <p className="mt-2 text-gray-700">
            - Best Time to Visit: Spring for cherry blossoms, Fall for vibrant foliage.
            - Must-See Places: Tokyo, Kyoto, Osaka, Hiroshima.
            - Local Cuisine: Sushi, Ramen, Tempura, Sashimi.
          </p>
        </section>
      </main>

      <Footer/>
    </div>
  );
};

export default Japan;
