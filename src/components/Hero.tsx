export const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3')] 
        bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative text-center text-white z-10 container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
          El Gaucho
        </h1>
        <p className="text-xl md:text-2xl font-body mb-8">
          Sabores auténticos y cultura uruguaya en el corazón de la ciudad
        </p>
        <a 
          href="#eventos" 
          className="bg-gaucho-secondary hover:bg-gaucho-primary transition-colors px-8 py-3 rounded-lg text-lg font-semibold"
        >
          Ver Eventos
        </a>
      </div>
    </div>
  );
};