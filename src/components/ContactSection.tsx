import { useState } from "react";
import { Button } from "./ui/button";
import { Mail, MapPin, Linkedin, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. I'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
              <span className="text-gradient">Let's Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Looking for strategic advisory for your technology company? 
              Want to explore collaboration opportunities? 
              We would love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center border border-border/50">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:leticia@yareytech.com" className="text-foreground hover:text-primary transition-colors">
                    leticia@yareytech.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center border border-border/50">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">USA / Uruguay / Spain</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center border border-border/50">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/leticia-larrosa/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                    /in/leticia-larrosa
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
