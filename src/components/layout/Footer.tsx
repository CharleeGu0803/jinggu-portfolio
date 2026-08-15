import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-secondary/30">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-semibold text-foreground">
              Jing
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Crafting digital experiences with passion
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/CharleeGu0803"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-smooth"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jing-gu-4a9580290/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:jinggu0803@gmail.com"
              className="p-2 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-smooth"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
