import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import AbstractLines from "./AbstractLines";
import leticiaPhoto from "@/assets/leticia-larrosa.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero pt-20">
      {/* Abstract background decoration */}
      <AbstractLines />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 animate-slide-up">
              <span className="block text-foreground">Leading</span>
              <span className="block text-foreground italic">Innovation</span>
              <span className="block text-gradient font-semibold">& Growth</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground font-light italic mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              with Advanced Technology<br />
              <span className="text-foreground/80">Digital Transformation</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
                <img 
                  src={leticiaPhoto} 
                  alt="Leticia Larrosa - CEO of YareyTech" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-primary/20 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA Card */}
      <div className="absolute bottom-8 left-8 hidden lg:flex items-center gap-4 bg-card/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-border/50 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
          <span className="text-gradient font-display font-bold text-lg">LL</span>
        </div>
        <a href="#contact" className="text-foreground hover:text-primary transition-colors flex items-center gap-2">
          Get in Touch
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
