import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EventCard } from "@/components/EventCard";
import { FoodGallery } from "@/components/FoodGallery";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  const events = [
    {
      title: "Noche de Tango",
      date: "Viernes, 20 de Mayo",
      description: "Una noche mágica con los mejores bailarines de tango.",
      image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3"
    },
    {
      title: "Música Folklórica",
      date: "Sábado, 21 de Mayo",
      description: "Disfruta de la música tradicional uruguaya en vivo.",
      image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3"
    },
    {
      title: "Exposición de Arte",
      date: "Domingo, 22 de Mayo",
      description: "Exhibición de artistas locales contemporáneos.",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <section id="eventos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            Próximos Eventos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
        </div>
      </section>

      <FoodGallery />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;