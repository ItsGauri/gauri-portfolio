import { Button } from "@/components/ui/button";
import { Download, GraduationCap, Briefcase, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 bg-background" id="about">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-card-foreground">Education</h3>
            <p className="text-muted-foreground leading-relaxed">
              Final-year B.Tech CSE student graduating July 2026 from Panipat Institute of Engineering & Technology
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Briefcase className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-card-foreground">Current Role</h3>
            <p className="text-muted-foreground leading-relaxed">
              Software Engineer Intern at <span className="font-semibold text-primary">Kaidoko Automation Solutions</span> with a 6-month PPO offer
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-card-foreground">Past Experience</h3>
            <p className="text-muted-foreground leading-relaxed">
              Backend Developer Intern at <span className="font-semibold text-primary">Engineers India Limited (EIL)</span>
            </p>
          </div>
        </div>

        <div className="bg-gradient-card rounded-3xl p-10 shadow-elegant">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <p className="text-lg text-card-foreground leading-relaxed">
              I'm passionate about transforming ideas into meaningful digital products that drive real impact. With a strong foundation in software engineering and hands-on experience across client demos, product walkthroughs, and stakeholder communication, I've learned how to bridge technical precision with business vision.
            </p>
            
            <p className="text-lg text-card-foreground leading-relaxed">
              My experience has taught me that great products are built not just with code, but with clarity, empathy, and collaboration — principles I bring into every project I work on.
            </p>

            <blockquote className="text-xl italic text-primary font-medium border-l-4 border-primary pl-6 py-4 my-8 text-left">
              "From delivering client demos to leading product presentations, I thrive at the intersection of technology, users, and strategy."
            </blockquote>

            <div className="pt-6">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2 h-4 w-4" />
                Download My Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
