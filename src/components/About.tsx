import { Button } from "@/components/ui/button";
import { Download, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 bg-background" id="about">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          About Me
        </h2>

        {/* Two equal cards centered and responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-stretch">
          {/* Education Card */}
          <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Education</h3>
            </div>

            <div className="text-muted-foreground leading-relaxed flex-1">
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <span className="font-medium text-card-foreground">Panipat Institute of Engineering and Technology, Panipat, Haryana</span>
                  <br />
                  <span className="text-sm text-muted-foreground">
                    Bachelor of Technology - Computer Science Engineering | Oct 2022 – July 2026 (current)
                  </span>
                </li>

                <li>
                  <span className="font-medium text-card-foreground">GRM School, Bareilly, UP</span>
                  <br />
                  <span className="text-sm text-muted-foreground">
                    Senior Secondary Education (XII, CBSE) – 92.8% (2022)
                  </span>
                </li>

                <li>
                  <span className="font-medium text-card-foreground">GRM School, Bareilly, UP</span>
                  <br />
                  <span className="text-sm text-muted-foreground">
                    Secondary Education (X, CBSE) – 91% (2020)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Work Experience Card (combined current + past) */}
          <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Work Experience</h3>
            </div>

            <div className="text-muted-foreground leading-relaxed flex-1">
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  <span className="font-medium text-card-foreground">Software Developer Intern — Kaidoko Automation Solutions (Current)</span>
                  <br />
                  <span className="text-sm text-muted-foreground">
                    Building a mock-interview platform for MBA students; responsible for backend features, analytics dashboards (Streamlit), and client demo presentations.
                  </span>
                </li>

                <li>
                  <span className="font-medium text-card-foreground">Backend Developer Intern — Engineers India Limited (EIL) | July 2025 – Sept 2025</span>
                  <br />
                  <span className="text-sm text-muted-foreground">
                    Worked on Leave Management Portal using Spring Boot and PostgreSQL; focused on API optimization and data flow improvements.
                  </span>
                </li>
              </ul>
            </div>
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
                asChild
              >
                <a href="/resume.pdf" download="Gauri_Sharma_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download My Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
