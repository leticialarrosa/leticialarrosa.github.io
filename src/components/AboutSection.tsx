import { Briefcase, Users, Lightbulb, Target } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Driving technological solutions that transform industries and create new business opportunities.",
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Developing high-performance teams focused on results and professional growth.",
  },
  {
    icon: Target,
    title: "Strategy",
    description: "Designing technology roadmaps aligned with business objectives and long-term vision.",
  },
  {
    icon: Briefcase,
    title: "Excellence",
    description: "Maintaining the highest quality standards in every project and business decision.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
            <span className="text-gradient">About</span> Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As CEO of YareyTech, a technology company with over 250 professionals, I have dedicated my career 
            to driving innovation and sustainable growth. My passion is combining strategic vision 
            with technical execution to create tangible value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-card-gradient p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
