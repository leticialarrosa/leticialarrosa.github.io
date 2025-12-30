const experiences = [
  {
    period: "2018 - Present",
    role: "Chief Executive Officer",
    company: "YareyTech",
    description: "Leading an organization of over 250 professionals, driving digital transformation and expansion into new markets.",
    highlights: ["300% Growth", "International Expansion", "Innovation Culture"],
  },
  {
    period: "2014 - 2018",
    role: "Chief Technology Officer",
    company: "High-Growth Startup",
    description: "Defining technology strategy and building world-class engineering teams.",
    highlights: ["Scalable Architecture", "Distributed Teams", "Agile Methodologies"],
  },
  {
    period: "2010 - 2014",
    role: "Technology Director",
    company: "Multinational Corporation",
    description: "Managing large-scale digital transformation projects for Fortune 500 clients.",
    highlights: ["Enterprise Projects", "Strategic Consulting", "Team Management"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
            <span className="text-gradient">Professional</span> Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            Over 15 years building and leading technology teams 
            that transform industries and create real impact.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary transform md:-translate-x-1/2 -translate-x-1/2 md:translate-y-8 shadow-glow" />

                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="bg-card-gradient p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300">
                    <span className="text-primary text-sm font-medium">{exp.period}</span>
                    <h3 className="font-display text-2xl font-semibold mt-2 mb-1 text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-4">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
