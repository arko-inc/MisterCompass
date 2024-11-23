import React from 'react';
import Footer from '../../../components/Footer';

const Antarctica = () => {
  return (
    <div className="container mx-auto p-6">

      <header className="bg-blue-800 text-white p-6 rounded-t-lg">
        <h1 className="text-5xl font-against">Adventures in Antarctica</h1>
        <p className="text-lg mt-2">The Last Great Wilderness</p>
      </header>
      
      <main className="bg-white p-6 rounded-b-lg shadow-lg">
        <section className="mb-8">
          <h2 className="text-4xl font-against">Introduction</h2>
          <p className="mt-2 text-gray-700">
            Antarctica, the southernmost continent, is a land of ice and snow, known for its extreme conditions and 
            breathtaking landscapes. It is home to unique wildlife and offers unparalleled opportunities for exploration.
          </p>
        </section>

        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-4xl font-against">Natural Beauty</h2>
            <img src="https://via.placeholder.com/800x400" alt="Antarctic Landscape" className="my-4 rounded-md shadow-md"/>
            <p className="mt-2 text-gray-700">
              Discover the stunning natural beauty of Antarctica, from towering icebergs to expansive ice fields and 
              the pristine wilderness that defines this remote continent.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-against">Unique Wildlife</h2>
            <img src="https://via.placeholder.com/800x400" alt="Antarctic Wildlife" className="my-4 rounded-md shadow-md"/>
            <p className="mt-2 text-gray-700">
              Antarctica is home to a variety of unique wildlife, including penguins, seals, and whales. Explore the 
              fascinating ecosystems that thrive in this frozen landscape.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-against">Travel Tips</h2>
          <p className="mt-2 text-gray-700">
            - Best Time to Visit: November to March for milder weather.
            - Must-See Places: South Pole, Ross Ice Shelf, McMurdo Station.
            - Unique Experiences: Ice climbing, wildlife watching, and scientific tours.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Antarctica;
