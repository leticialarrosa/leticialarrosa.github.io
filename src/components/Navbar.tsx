import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gaucho-primary text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold">El Gaucho</a>
        
        <Button
          variant="ghost"
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        <div className={`lg:flex gap-8 items-center ${isOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-gaucho-primary p-4' : 'hidden'}`}>
          <a href="#eventos" className="hover:text-gaucho-accent transition-colors">Eventos</a>
          <a href="#menu" className="hover:text-gaucho-accent transition-colors">Menú</a>
          <a href="#nosotros" className="hover:text-gaucho-accent transition-colors">Nosotros</a>
          <a href="#contacto" className="hover:text-gaucho-accent transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
};