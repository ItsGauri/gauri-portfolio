import { BarChart3, Code2, Database, FileSpreadsheet, Figma, Container, Github, MessageSquare } from "lucide-react";

const skillCategories = [
  {
    title: "Product & Analytics",
    icon: BarChart3,
    skills: ["Power BI", "Excel (Advanced)", "Figma (Basics)", "Notion", "Jira"]
  },
  {
    title: "Technical",
    icon: Code2,
    skills: ["Java", "Spring Boot", "PostgreSQL", "Streamlit", "React"]
  },
  {
    title: "DevOps & Collaboration",
    icon: Container,
    skills: ["Docker", "GitHub", "Confluence"]
  },
  {
    title: "Soft Skills",
    icon: MessageSquare,
    skills: ["Communication", "Presentation", "Stakeholder Alignment", "Problem-Solving"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-gradient-subtle" id="skills">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Skills & Tools
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Technical expertise meets business acumen
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-primary w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-7 w-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-lg font-semibold mb-4 text-card-foreground">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="text-sm text-muted-foreground bg-secondary/50 rounded-lg px-3 py-2 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
