export const FoodGallery = () => {
  const dishes = [
    {
      name: "Alfajores Uruguayos",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3",
      description: "Deliciosos alfajores rellenos de dulce de leche",
    },
    {
      name: "Fainá",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3",
      description: "Tradicional fainá hecho con harina de garbanzos",
    },
    {
      name: "Pascualina",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3",
      description: "Tarta de espinacas y huevo, receta tradicional",
    },
  ];

  return (
    <section id="menu" className="py-20 bg-gaucho-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12">
          Nuestra Cocina
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div key={dish.name} className="relative group overflow-hidden rounded-lg">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
                  <p>{dish.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};