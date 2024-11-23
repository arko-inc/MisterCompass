import React from "react";
import Footer from "../../../../components/Footer";

const France = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-blue-600 py-6 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center text-white">Discover France</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">The Eiffel Tower</h2>
          <div className="flex flex-col md:flex-row md:items-center">
            <img
              src="/images/france-eiffel-tower.jpg"
              alt="Eiffel Tower"
              className="md:w-1/2 h-64 object-cover rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
            />
            <p className="md:w-1/2 text-lg leading-relaxed">
              The Eiffel Tower is one of the most recognizable structures in the world. Located in Paris, this iconic landmark attracts millions of visitors each year and offers breathtaking views of the city.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">A Journey through French Cuisine</h2>
          <div className="flex flex-col md:flex-row md:items-center">
            <img
              src="/images/france-cuisine.jpg"
              alt="French Cuisine"
              className="md:w-1/2 h-64 object-cover rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
            />
            <p className="md:w-1/2 text-lg leading-relaxed">
              French cuisine is renowned worldwide for its rich flavors and exquisite presentation. From delicate pastries to hearty stews, exploring French food is a culinary adventure.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">The Charm of Provence</h2>
          <div className="flex flex-col md:flex-row md:items-center">
            <img
              src="/images/france-provence.jpg"
              alt="Provence"
              className="md:w-1/2 h-64 object-cover rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
            />
            <p className="md:w-1/2 text-lg leading-relaxed">
              Provence is a picturesque region in southeastern France known for its lavender fields, historic villages, and Mediterranean coast. It's the perfect destination for those seeking tranquility and beauty.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Exploring the Loire Valley</h2>
          <div className="flex flex-col md:flex-row md:items-center">
            <img
              src="/images/france-loire-valley.jpg"
              alt="Loire Valley"
              className="md:w-1/2 h-64 object-cover rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
            />
            <p className="md:w-1/2 text-lg leading-relaxed">
              The Loire Valley is famous for its stunning châteaux, lush vineyards, and scenic landscapes. It's a UNESCO World Heritage site that offers a glimpse into France's rich history and culture.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">The Art and Architecture of Lyon</h2>
          <div className="flex flex-col md:flex-row md:items-center">
            <img
              src="/images/france-lyon.jpg"
              alt="Lyon"
              className="md:w-1/2 h-64 object-cover rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
            />
            <p className="md:w-1/2 text-lg leading-relaxed">
              Lyon is a vibrant city known for its historical and architectural landmarks, as well as its thriving arts scene. It's a city where history meets modernity, offering visitors a unique experience.
            </p>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default France;
