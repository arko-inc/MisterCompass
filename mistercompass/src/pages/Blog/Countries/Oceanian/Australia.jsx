import React from "react";
import Footer from "../../../../components/Footer";

const Australia = () => {
  return (
    <div className="min-h-screen bg-blue-900 text-gray-100">
      <header className="bg-yellow-500 py-8 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center">Explore Australia</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-center">Top Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <img
                src="/images/australia-sydney.jpg"
                alt="Sydney Opera House"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Sydney Opera House</h3>
              <p>
                The Sydney Opera House is an iconic symbol of Australia and a marvel of modern architecture. It's a must-visit for anyone exploring Sydney.
              </p>
            </div>

            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <img
                src="/images/australia-great-barrier-reef.jpg"
                alt="Great Barrier Reef"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Great Barrier Reef</h3>
              <p>
                The Great Barrier Reef is the world's largest coral reef system and a haven for marine life. It's perfect for snorkeling and diving adventures.
              </p>
            </div>

            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <img
                src="/images/australia-uluru.jpg"
                alt="Uluru"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Uluru</h3>
              <p>
                Uluru, also known as Ayers Rock, is a massive sandstone monolith in the heart of the Northern Territory. It's a sacred site with incredible cultural significance.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-center">Cultural Insights</h2>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <p className="leading-relaxed">
              Australia is a land of rich cultural diversity and unique traditions. From the indigenous Aboriginal culture to the modern urban lifestyle, there's so much to explore and appreciate.
            </p>
          </div>
        </section>
      </main>

     <Footer/>
    </div>
  );
};

export default Australia;
