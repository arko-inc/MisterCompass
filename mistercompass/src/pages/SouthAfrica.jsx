import React from "react";

const SouthAfrica = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://source.unsplash.com/1600x900/?south-africa,nature"
          alt="South Africa Landscape"
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-bold mb-4">Welcome to South Africa</h1>
          <p className="text-white text-lg">
            Discover the beauty, adventure, and culture of the Rainbow Nation 🌈
          </p>
        </div>
      </div>

      {/* About South Africa */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Visit South Africa?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          South Africa, known as the "Rainbow Nation," is a land of incredible diversity. From the rolling vineyards of
          Stellenbosch to the rugged coastline of the Garden Route, this country offers something for every traveler.
          Enjoy wildlife safaris in Kruger National Park, explore vibrant cities like Cape Town and Johannesburg, and
          embrace the cultural richness of its people.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Whether you're seeking adventure, history, or relaxation, South Africa is the perfect destination!
        </p>
      </section>

      {/* Highlights */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Top Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Highlight 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-110 transition duration-700">
              <img
                src="https://source.unsplash.com/800x600/?table-mountain"
                alt="Table Mountain"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Table Mountain</h3>
                <p className="text-gray-600">
                  Take a cable car ride or hike to the top of this iconic mountain for stunning views of Cape Town.
                </p>
              </div>
            </div>
            {/* Highlight 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-110 transition duration-700">
              <img
                src="https://source.unsplash.com/800x600/?safari"
                alt="Kruger National Park"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Kruger National Park</h3>
                <p className="text-gray-600">
                  Experience a thrilling safari and spot the Big Five: lion, leopard, rhino, elephant, and buffalo.
                </p>
              </div>
            </div>
            {/* Highlight 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-110 transition duration-700">
              <img
                src="https://source.unsplash.com/800x600/?cape-town"
                alt="Cape Town"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cape Town</h3>
                <p className="text-gray-600">
                  Explore the vibrant streets, beautiful beaches, and rich history of South Africa's Mother City.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            © 2024 MisterCompass. Discover the world with us! | South Africa Edition 🌍
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SouthAfrica;
