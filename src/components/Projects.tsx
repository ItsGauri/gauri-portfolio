import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Lightbulb, Target } from "lucide-react";

const projects = [
  {
    title: "Kaidoko Interview Practice Platform",
    problem: "MBA students needed a structured way to practice mock interviews with personalized feedback",
    solution: "Built a comprehensive mock-interview and feedback system with backend APIs and Streamlit dashboard",
    outcome: "Client approved prototype; now in full-scale development with successful stakeholder demos",
    learnings: "Mastered client communication, requirement gathering, and iterative product development"
  },
  {
    title: "EIL Leave Management Portal",
    problem: "Manual leave management system causing inefficiencies and data inconsistencies",
    solution: "Developed and optimized backend APIs using Spring Boot and PostgreSQL for automated workflow",
    outcome: "Enhanced data flow, reduced processing time, and improved employee experience",
    learnings: "Gained experience in enterprise software development and stakeholder management"
  },
  {
    title: "Banking Application",
    problem: "Need for a secure, end-to-end banking simulation platform",
    solution: "Created full-stack application with Spring Boot backend and React frontend",
    outcome: "Implemented secure login, transaction handling, and data management features",
    learnings: "Developed understanding of financial systems, security, and user experience design"
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-background" id="projects">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Projects & Case Studies
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Problem → Solution → Outcome → Learnings
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-card-foreground flex items-center gap-2">
                <span className="bg-gradient-primary text-primary-foreground w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                {project.title}
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <Target className="h-5 w-5 text-destructive mt-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Problem</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.problem}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <Lightbulb className="h-5 w-5 text-accent mt-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Solution</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Outcome</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <ArrowRight className="h-5 w-5 text-secondary-foreground mt-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Key Learnings</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.learnings}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/50 rounded-full px-6 py-3 text-secondary-foreground">
            <ArrowRight className="h-4 w-4" />
            <span className="font-medium">Download detailed case study PDF (Coming soon)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
