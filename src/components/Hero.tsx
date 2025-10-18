import { Button } from "@/components/ui/button";
import { Download, Linkedin, ExternalLink, Sparkles } from "lucide-react";
import gauriPortrait from "@/assets/gauri-portrait.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h1 className="text-[20vw] md:text-[15vw] font-black text-primary/5 select-none whitespace-nowrap">
          PORTFOLIO
        </h1>
      </div>

      {/* Background Gradient Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Available for Product Manager Roles</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.9] tracking-tight">
                Gauri
                <br />
                <span className="text-glow bg-gradient-primary bg-clip-text text-transparent">
                  Sharma
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-primary rounded-full"></div>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-md leading-relaxed">
                Software Engineer → Transitioning into <span className="text-primary font-semibold">Product Management</span>
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-lg text-foreground/90 font-medium italic border-l-2 border-primary pl-4">
                "Where tech, users, and strategy meet."
              </p>
              <p className="text-lg text-foreground/90 font-medium italic border-l-2 border-accent pl-4">
                "I don't just build — I communicate, analyze, and deliver."
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-8">
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300 border-0 px-8 py-6 text-base"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View My Projects
              </Button>

              {/* Download Resume as an anchor (styled via Button using asChild) */}
              <Button
                size="lg"
                className="glass-panel hover:bg-primary/20 text-foreground transition-all duration-300 hover:scale-105 px-8 py-6 text-base"
                asChild
              >
                <a
                  href="/resume.pdf"
                  download="Gauri_Sharma_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download resume"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>

              <Button
                size="lg"
                className="glass-panel hover:bg-primary/20 text-foreground transition-all duration-300 hover:scale-105 px-8 py-6 text-base"
                asChild
              >
                <a href="https://linkedin.com/in/gaurisharma123" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image with Glass Effect */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative glass-panel rounded-3xl overflow-hidden shadow-glow group">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
              <img
                src={gauriPortrait}
                alt="Gauri Sharma - Software Engineer transitioning to Product Management"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-20"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-2xl p-4 z-30 backdrop-blur-xl">
                <p className="text-sm font-semibold text-foreground">Product Mindset</p>
                <p className="text-xs text-muted-foreground">Engineering Background</p>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -z-10 top-8 -right-8 w-full h-full rounded-3xl bg-gradient-primary opacity-30 blur-3xl"></div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-full h-full rounded-3xl bg-accent/20 opacity-30 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
