import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Lightbulb, Target, FileText } from "lucide-react";

const projects = [
  {
    title: "Kaidoko Interview Practice Platform",
    problem: "MBA students needed a structured way to practice mock interviews with personalized feedback.",
    solution: "Built a comprehensive mock-interview and feedback system with backend APIs and Streamlit dashboard.",
    outcome: "Client approved prototype; now in full-scale development with successful stakeholder demos.",
    learnings: "Mastered client communication, requirement gathering, and iterative product development.",
    pdfLink: "/Kaidoko_case_study.pdf"
  },
  {
    title: "EIL Leave Management Portal",
    problem: "Manual leave management system causing inefficiencies and data inconsistencies.",
    solution: "Developed and optimized backend APIs using Spring Boot and PostgreSQL for automated workflow.",
    outcome: "Enhanced data flow, reduced processing time, and improved employee experience.",
    learnings: "Gained experience in enterprise software development, stakeholder management, and process optimization.",
    pdfLink: "/EIL_Case_Study_Template_Gauri_Sharma.pdf"
  },
  {
    // Learning Project — product metrics dashboard (sample / skill demo)
    title: "Product Metrics Dashboard",
    isLearning: true,
    summary:
      "Sample analytics workflow demonstrating how to track Active Users, Revenue, and Retention using PostgreSQL → Excel → Power BI.",
    tools: ["PostgreSQL", "Excel", "Power BI", "SQL querying", "Data visualization"],
    learnings:
      "Built an end-to-end analytics pipeline and visual dashboard. Strengthened skills in SQL data extraction, Excel data prep, and Power BI visualization that translate data into product decisions.",
    pdfLink: "/power bi.pdf"
  },
  {
    title: "Banking Application",
    problem: "Need for a secure, end-to-end banking simulation platform.",
    solution: "Created full-stack application with Spring Boot backend and React frontend.",
    outcome: "Implemented secure login, transaction handling, and data management features.",
    learnings: "Developed understanding of financial systems, security, and user experience design.",
    pdfLink: "" // No PDF for this yet
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
          Problem → Solution → Outcome → Learnings . Evidence-backed work showing product thinking, execution and impact.
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="md:flex md:items-start md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1 ml-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold mb-2 text-card-foreground">{project.title}</h3>
                    {project.isLearning && (
                      <span className="inline-flex items-center gap-2 bg-indigo-700/10 text-indigo-300 px-3 py-1 rounded-full text-xs font-medium">
                        Learning Project
                      </span>
                    )}
                  </div>

                  {project.isLearning ? (
                    <div className="mt-3 grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{project.summary}</p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.tools.map((t) => (
                            <span key={t} className="text-xs px-2 py-1 bg-secondary/10 text-secondary-foreground rounded-md">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col justify-between">
                        <div>
                          <h4 className="font-semibold text-card-foreground mb-2">Key Learnings</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{project.learnings}</p>
                        </div>

                        {project.pdfLink && (
                          <div className="mt-6">
                            <a
                              href={project.pdfLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition"
                            >
                              <FileText className="h-4 w-4" />
                              View Dashboard (PDF)
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="mt-3 grid md:grid-cols-2 gap-6">
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
                  )}
                </div>
              </div>

              {/* PDF CTA for non-learning too */}
              {!project.isLearning && project.pdfLink && (
                <div className="mt-6">
                  <a
                    href={project.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all"
                  >
                    <FileText className="h-4 w-4" />
                    View Full Case Study (PDF)
                  </a>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/50 rounded-full px-6 py-3 text-secondary-foreground">
            <ArrowRight className="h-4 w-4" />
            <span className="font-medium">More detailed case studies coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
