export const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">
              Nuestra Historia
            </h2>
            <p className="text-gray-600 mb-4">
              El Gaucho nació de la pasión por la auténtica cocina uruguaya y el deseo de crear
              un espacio donde la cultura y la gastronomía se encuentran.
            </p>
            <p className="text-gray-600">
              Desde 2010, hemos sido un punto de encuentro para amantes de la buena comida,
              la música en vivo y las expresiones artísticas de nuestra tierra.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3"
              alt="El Gaucho Restaurant"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};