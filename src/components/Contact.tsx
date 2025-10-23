import { Card } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-background" id="contact">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Let’s Connect
        </h2>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed">
          I’ve always believed that effective communication drives great products.
          From presenting ideas to leading discussions, I bring clarity, structure,
          and a results-driven mindset to every conversation.
          With a strong foundation in software engineering and a growing passion for
          <span className="text-primary font-semibold"> Product Management</span>,
          I’m eager to bridge the gap between technology and user needs — transforming
          insights into impactful solutions.
          <br /><br />
          I don’t just want to manage products —
          <span className="text-primary font-semibold"> I want to lead them with clarity, empathy, and execution.</span>
        </p>

        <div className="grid md:grid-cols-2 gap-8 justify-center">
          <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300 bg-gradient-card border-0 flex flex-col items-center justify-center">
            <Mail className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Email</h3>
            <a
              href="mailto:gaurisharma123@gmail.com"
              className="text-lg font-medium text-primary hover:underline"
            >
              gaurisharma098@gmail.com
            </a>
          </Card>

          <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300 bg-gradient-card border-0 flex flex-col items-center justify-center">
            <Linkedin className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/gaurisharma123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-primary hover:underline"
            >
              linkedin.com/in/gaurisharma123
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
