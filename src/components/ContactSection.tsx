import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gaucho-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12">
          Contáctanos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Información</h3>
            <p className="mb-4">
              <strong>Dirección:</strong> Av. Principal 123, Ciudad
            </p>
            <p className="mb-4">
              <strong>Teléfono:</strong> +123 456 789
            </p>
            <p className="mb-4">
              <strong>Email:</strong> info@elgaucho.com
            </p>
            <p>
              <strong>Horario:</strong><br />
              Martes a Domingo: 12:00 - 00:00<br />
              Lunes: Cerrado
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              placeholder="Nombre"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Input
              type="email"
              placeholder="Email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Textarea
              placeholder="Mensaje"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              rows={4}
            />
            <Button type="submit" className="w-full bg-gaucho-secondary hover:bg-gaucho-primary">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};