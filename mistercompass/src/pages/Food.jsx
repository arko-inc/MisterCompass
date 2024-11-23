import React from "react";
import Footer from "../components/Footer";

const Food = () => {
  const foods = [
    {
      id: 1,
      name: "Sushi",
      image: "/images/sushi.jpg",
      description: "Sushi is a traditional Japanese dish consisting of vinegared rice, often accompanied by raw seafood, vegetables, and sometimes tropical fruits.",
    },
    {
      id: 2,
      name: "Pizza",
      image: "/images/pizza.jpg",
      description: "Pizza is a beloved Italian dish featuring a round, flat base of dough topped with tomatoes, cheese, and a variety of other ingredients.",
    },
    {
      id: 3,
      name: "Tacos",
      image: "/images/tacos.jpg",
      description: "Tacos are a Mexican staple consisting of small hand-sized corn or wheat tortillas topped with a variety of fillings such as beef, pork, chicken, vegetables, and cheese.",
    },
    {
      id: 4,
      name: "Croissant",
      image: "/images/croissant.jpg",
      description: "Croissant is a buttery, flaky, and delicious pastry of Austrian origin that has become a quintessential part of French cuisine.",
    },
    {
      id: 5,
      name: "Paella",
      image: "/images/paella.jpg",
      description: "Paella is a Spanish rice dish originally from Valencia, cooked with a variety of ingredients like seafood, chicken, and vegetables.",
    },
    {
      id: 6,
      name: "Gelato",
      image: "/images/gelato.jpg",
      description: "Gelato is an Italian frozen dessert similar to ice cream, but with a lower fat content and a denser, creamier texture.",
    },
    {
      id: 7,
      name: "Pad Thai",
      image: "/images/pad-thai.jpg",
      description: "Pad Thai is a stir-fried rice noodle dish commonly served as street food and at casual local eateries in Thailand.",
    },
    {
      id: 8,
      name: "Peking Duck",
      image: "/images/peking-duck.jpg",
      description: "Peking Duck is a famous Chinese dish known for its crispy skin and tender meat, often served with pancakes, scallions, and hoisin sauce.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-red-600 py-6 shadow-md mb-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center text-white">World's Best Food</h1>
        </div>
      </header>

      <main className="container mx-auto px-4">
        {foods.map((food, index) => (
          <section key={food.id} className={`mb-12 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center`}>
            <img
              src={food.image}
              alt={food.name}
              className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg mb-4 md:mb-0"
            />
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-semibold mb-4">{food.name}</h2>
              <p className="text-lg leading-relaxed">{food.description}</p>
            </div>
          </section>
        ))}
      </main>
      <Footer/>
    </div>
  );
};

export default Food;
