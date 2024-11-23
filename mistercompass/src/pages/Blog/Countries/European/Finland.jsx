import React from 'react';
import Footer from '../../../../components/Footer';
const Finland = () => {
  return (
    <div className="container mx-auto p-4">
     <header className="text-white p-6 rounded-md bg-cover bg-center" style={{ backgroundImage: "url('/images/finland.jpg')" }}>
        <h1 className="text-4xl  font-against  font-bold">Exploring Finland</h1>
        <p className="text-lg mt-2">A Journey Through the Land of a Thousand Lakes</p>
      </header>
      
      <main className="mt-6">
        <section className="mb-8">
          <h2 className="text-3xl  font-against  font-semibold ">Introduction</h2>
          <p className="mt-2 text-gray-700 font-against">
            Finland, a Nordic country in Northern Europe, is known for its stunning natural landscapes, 
            vibrant culture, and high quality of life. From the bustling streets of Helsinki to the serene 
            beauty of Lapland, Finland has something for everyone.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl  font-against  font-semibold">The Beauty of Finnish Nature</h2>
          <img src="../images/iceland.jpg" alt="Finnish Landscape" className="my-4 rounded-md shadow-md"/>
          <p className="mt-2 text-gray-700 font-against">
            Finland is famous for its thousands of lakes, forests, and the magical Northern Lights. In the 
            summer, the sun barely sets, giving the country the nickname "Land of the Midnight Sun."
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl  font-against  font-semibold">Finnish Culture and Traditions</h2>
          <img src="../images/finland.jpg" alt="Finnish Culture" className="my-4 rounded-md shadow-md"/>
          <p className="mt-2 text-gray-700 font-against">
            The Finnish culture is rich with unique traditions such as the sauna, a symbol of relaxation and 
            well-being. Finland is also known for its love of nature, design, and innovation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl  font-against  font-semibold ">Travel Tips</h2>
          <p className="mt-2 text-gray-700 font-against">
            - Best Time to Visit: Summer for the Midnight Sun, Winter for the Northern Lights.
            - Must-See Places: Helsinki, Lapland, Turku, Rovaniemi.
            - Local Cuisine: Try Karjalanpiirakka (Karelian pasty) and Kalakukko (fish pie).
          </p>
        </section>
      </main>

      <Footer/>
    
    </div>
  );
};

export default Finland;
