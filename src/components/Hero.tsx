import { Button } from "@/components/ui/button";
import { Download, Linkedin, ExternalLink } from "lucide-react";
import gauriPortrait from "@/assets/gauri-portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Gauri Sharma
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Software Engineer → Transitioning into Product Management
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <p className="text-lg text-foreground/80 font-medium">
                "Where tech, users, and strategy meet."
              </p>
              <p className="text-lg text-foreground/80 font-medium">
                "I don't just build — I communicate, analyze, and deliver."
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View My Projects
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 transition-all duration-300"
                asChild
              >
                <a href="https://linkedin.com/in/gaurisharma123" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500">
              <img 
                src={gauriPortrait} 
                alt="Gauri Sharma - Software Engineer transitioning to Product Management"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
            </div>
            <div className="absolute -z-10 top-8 right-8 w-full h-full rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
