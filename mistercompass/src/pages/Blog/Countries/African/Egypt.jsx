import React from "react";
import Footer from "../../../../components/Footer";

const Egypt = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="bg-yellow-600 text-white p-6 rounded-t-lg">
        <h1 className="text-5xl font-against">Journey through Egypt</h1>
        <p className="text-lg mt-2">
          Uncover the Ancient Mysteries and Modern Wonders of Egypt
        </p>
      </header>

      <main className="bg-white p-6 rounded-b-lg shadow-lg">
        <section className="mb-8">
          <h2 className="text-4xl font-against">Introduction</h2>
          <p className="mt-2 text-gray-700">
            Egypt, a country linking northeast Africa with the Middle East,
            dates to the time of the pharaohs. Millennia-old monuments sit along
            the fertile Nile River Valley, including Giza's colossal Pyramids
            and Great Sphinx as well as Luxor's hieroglyph-lined Karnak Temple
            and Valley of the Kings tombs.
          </p>
        </section>

        <section className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <h2 className="text-4xl font-against">Ancient Marvels</h2>
            <img
              src="https://via.placeholder.com/400x300"
              alt="Ancient Egypt"
              className="my-4 rounded-md shadow-md"
            />
            <p className="mt-2 text-gray-700">
              Discover the wonders of ancient Egypt, from the iconic pyramids to
              the temples and tombs that tell the stories of a civilization that
              has captivated the world for centuries.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-against">Cultural Richness</h2>
            <img
              src="https://via.placeholder.com/400x300"
              alt="Egyptian Culture"
              className="my-4 rounded-md shadow-md"
            />
            <p className="mt-2 text-gray-700">
              Experience the vibrant culture of Egypt, with its rich traditions
              in music, dance, and art. From bustling markets to tranquil
              mosques, the cultural richness of Egypt is unparalleled.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-against">Modern Wonders</h2>
            <img
              src="https://via.placeholder.com/400x300"
              alt="Modern Egypt"
              className="my-4 rounded-md shadow-md"
            />
            <p className="mt-2 text-gray-700">
              While steeped in history, Egypt is also a country of modern
              marvels. Explore the contemporary architecture, dynamic cities,
              and innovations that are shaping Egypt today.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-against">Travel Tips</h2>
          <p className="mt-2 text-gray-700">
            - Best Time to Visit: October to April for pleasant weather. -
            Must-See Places: Cairo, Luxor, Aswan, Alexandria. - Local Cuisine:
            Enjoy dishes like Koshari, Ful Medames, and Molokhia.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Egypt;
