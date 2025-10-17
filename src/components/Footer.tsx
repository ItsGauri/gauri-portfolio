import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gradient-subtle border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-2">Gauri Sharma</h3>
            <p className="text-muted-foreground">
              Software Engineer → Product Manager
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/gaurisharma123"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-card hover:bg-gradient-primary flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-card hover:shadow-elegant group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-card hover:bg-gradient-primary flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-card hover:shadow-elegant group"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
            
            <a
              href="mailto:ss7363901@gmail.com"
              className="w-12 h-12 rounded-xl bg-card hover:bg-gradient-primary flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-card hover:shadow-elegant group"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Gauri Sharma. Building products that bridge technology and business.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
