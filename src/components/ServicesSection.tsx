import { ArrowRight, Brain, Building2, LineChart, Rocket, Shield, Workflow } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Digital Transformation",
    description: "Guiding organizations on their journey to digitalization, implementing technologies that drive efficiency and competitiveness.",
  },
  {
    icon: Building2,
    title: "Business Strategy",
    description: "Developing strategic plans that align technology, operations, and business objectives for sustainable growth.",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Advisory on AI implementation and automation to optimize processes and create lasting competitive advantages.",
  },
  {
    icon: LineChart,
    title: "Scalability & Growth",
    description: "Proven strategies to scale teams and technology operations while maintaining quality and organizational culture.",
  },
  {
    icon: Shield,
    title: "Governance & Compliance",
    description: "Implementation of IT governance frameworks and regulatory compliance tailored to your industry and needs.",
  },
  {
    icon: Workflow,
    title: "Process Optimization",
    description: "Analysis and redesign of technology processes to maximize ROI and reduce operational costs.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
            <span className="text-gradient">Advisory</span> Services
          </h2>
          <p className="text-lg text-muted-foreground">
            At YareyTech, we deliver products, solutions, and strategic and technical advisory services that help companies transform their technology operations and reach the next level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <a href="#contact"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  Learn More
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
